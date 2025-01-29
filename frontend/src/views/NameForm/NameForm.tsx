import React, { useState } from 'react';
import {
  getNameData,
  NameData,
} from '../../application/services/nameDataService';
import './styles/NameForm.css';
import Flag from 'react-world-flags';

const getCountryFlagCode = (countryCode: string): string => {
  return countryCode.toUpperCase();
};

export const NameForm: React.FC = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState<NameData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setData(null);
    setLoading(true);

    try {
      const result = await getNameData(name);
      setData(result);
    } catch (err) {
      setError('An error occurred while fetching the data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Name Information</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name" className="label">
          Enter a name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type a name..."
          required
          className="input"
        />
        <button type="submit" disabled={loading} className="button">
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      {error != null && <p className="error">{error}</p>}

      {data && (
        <>
          <div>
            <h2 className="subtitle">Gender:</h2>
            <p>
              {data.gender} ({(data.genderProbability * 100).toFixed(1)}%)
            </p>
          </div>
          <div>
            <h2 className="subtitle">Age:</h2>
            <p>{data.age} years</p>
          </div>
          <div>
            <h2 className="subtitle">Nationalities:</h2>
            <ul>
              {data.nationalities.map(({ country, probability }) => (
                <li key={country} className="listItem">
                  <Flag
                    code={getCountryFlagCode(country)}
                    style={{ width: 30, height: 20 }}
                  />
                  {country} ({(probability * 100).toFixed(1)}%)
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

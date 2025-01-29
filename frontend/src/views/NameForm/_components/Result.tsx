import React from 'react';
import Flag from 'react-world-flags';
import { NameData } from '../../../application/services/nameDataService';

interface ResultProps {
  data: NameData;
}

export const Result: React.FC<ResultProps> = ({ data }) => {
  return (
    <>
      <div>
        <h2 className="subtitle">Gender:</h2>
        <p>{`${data.gender} (${formatPercentage(data.genderProbability)}%)`}</p>
      </div>

      <div>
        <h2 className="subtitle">Age:</h2>
        <p>{`${data.age} years`}</p>
      </div>

      <div>
        <h2 className="subtitle">Nationalities:</h2>
        <ul>
          {data.nationalities.map(({ country, probability }) => (
            <Nationality
              key={country}
              country={country}
              probability={probability}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

const Nationality: React.FC<{ country: string; probability: number }> = ({
  country,
  probability,
}) => (
  <li className="listItem">
    <Flag code={country.toUpperCase()} style={{ width: 30, height: 20 }} />
    {country} ({formatPercentage(probability)}%)
  </li>
);

function formatPercentage(value: number): string {
  return (value * 100).toFixed(1);
}

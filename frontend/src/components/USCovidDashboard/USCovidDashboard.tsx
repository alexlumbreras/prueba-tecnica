import React, { useEffect, useState } from 'react';
import { getCovidStats } from '../../application/services/covidService';
import { CovidStats } from '../../domain/models/CovidStats';

export const USCovidDashboard: React.FC = () => {
  const [covidData, setCovidData] = useState<CovidStats[] | undefined>(
    undefined
  );
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const onLoad = async () => {
      try {
        setCovidData(await getCovidStats());
      } catch (error) {
        setHasError(true);
      }
    };

    onLoad();
  }, []);

  if (hasError) {
    return <div>An error occurred!</div>;
  }

  if (covidData === undefined) {
    return <div>Loading data...</div>;
  }

  if (covidData.length === 0) {
    return <div>No data</div>;
  }

  return (
    <div>
      <h1>COVID Data in the US 🦠</h1>
      {covidData.map((data) => (
        <div key={data.date}>
          <p>Date: {data.date}</p>
          <p>Cases: {data.cases}</p>
          <p>Deaths: {data.deaths}</p>
          <p>Tests: {data.tests}</p>
        </div>
      ))}
    </div>
  );
};

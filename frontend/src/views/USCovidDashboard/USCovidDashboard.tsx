import React from 'react';

import { MonthSelector } from './_components/MonthSelector';
import { BarChart } from './_components/BarChart';
import { useCovidData } from './hooks/useCovidData';
import './styles/USCovidDashboard.css';

export const USCovidDashboard: React.FC = () => {
  const {
    covidData,
    hasCovidData,
    isEmptyData,
    hasError,
    selectedMonth,
    availableMonths,
    onMonthChange,
  } = useCovidData();

  if (hasError) {
    return <div>An error occurred!</div>;
  }

  if (!hasCovidData) {
    return <div>Loading data...</div>;
  }

  if (isEmptyData) {
    return <div>No data</div>;
  }

  return (
    <div>
      <h1>COVID Data in the US 🦠</h1>

      <MonthSelector
        availableMonths={availableMonths}
        selectedMonth={selectedMonth}
        onChange={onMonthChange}
      />

      {selectedMonth && (
        <div className="charts-grid">
          <BarChart
            title="Tests"
            data={covidData}
            dataKey="tests"
            color="8884d8"
            height={300}
            XAxisDataGroup="dateGroup"
            XAxisLabel="Dates"
          />

          <BarChart
            title="Cases"
            data={covidData}
            dataKey="cases"
            color="82ca9d"
            height={300}
            XAxisDataGroup="dateGroup"
            XAxisLabel="Dates"
          />

          <BarChart
            title="Deaths"
            data={covidData}
            dataKey="deaths"
            color="ff7300"
            height={300}
            XAxisDataGroup="dateGroup"
            XAxisLabel="Dates"
          />
        </div>
      )}
    </div>
  );
};

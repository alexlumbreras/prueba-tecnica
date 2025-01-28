import React, { useEffect, useState } from 'react';
import { getCovidStats } from '../../application/services/covidService';
import { CovidStats } from '../../domain/models/CovidStats';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { dateService } from '../../application/services/dateService';
import './styles/USCovidDashboard.css'; // Estilos CSS para el grid y responsividad

export const USCovidDashboard: React.FC = () => {
  const [covidData, setCovidData] = useState<CovidStats[] | undefined>(
    undefined
  );
  const [hasError, setHasError] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState<Date | undefined>(
    undefined
  );
  const [filteredData, setFilteredData] = useState<CovidStats[]>([]);
  const [availableMonths, setAvailableMonths] = useState<Date[]>([]);

  const getMonthsWithData = (data: CovidStats[]) => {
    const monthsWithData = data.map(
      ({ date }) =>
        `${dateService.getMonthFromDate(date)}-${dateService.getYearFromDate(date)}`
    );
    const uniqueMonths = Array.from(new Set(monthsWithData));
    return uniqueMonths.map((month) => dateService.parseMonthYearToDate(month));
  };

  useEffect(() => {
    const onLoad = async () => {
      try {
        const data = await getCovidStats();
        setCovidData(data);
        setAvailableMonths(getMonthsWithData(data));
      } catch (error) {
        setHasError(true);
      }
    };

    onLoad();
  }, []);

  useEffect(() => {
    if (covidData && selectedMonth) {
      const filteredDataByMonthAndYear = covidData.filter(({ date }) =>
        dateService.isSameMonthAndYear(date, selectedMonth)
      );
      const labeledData = filteredDataByMonthAndYear.map((data) => ({
        ...data,
        tooltip: `${dateService.formatDateToShortDate(data.date)}`,
      }));
      setFilteredData(labeledData);
    }
  }, [covidData, selectedMonth]);

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDate = new Date(event.target.value);
    setSelectedMonth(selectedDate);
  };

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

      <div>
        <select
          id="month-selector"
          value={
            selectedMonth
              ? dateService.formatDateToShortMonthYear(selectedMonth)
              : ''
          }
          onChange={handleMonthChange}>
          <option value="" disabled hidden>
            Select a Month
          </option>
          {availableMonths.map((month) => (
            <option
              key={`${dateService.getYearFromDate(month)}-${dateService.getMonthFromDate(month)}`}
              value={dateService.formatDateToShortMonthYear(month)}>
              {dateService.formatDateToFullMonthYear(month)}
            </option>
          ))}
        </select>
      </div>

      {selectedMonth && (
        <div className="charts-grid">
          <div className="chart-item">
            <h2>Tests</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tooltip" tick={false} label={'Dates'} />
                <YAxis width={100} />
                <Tooltip />
                <Legend />
                <Bar dataKey="tests" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-item">
            <h2>Cases</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis width={100} />
                <Tooltip />
                <Legend />
                <Bar dataKey="cases" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-item">
            <h2>Deaths</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis width={100} />
                <Tooltip />
                <Legend />
                <Bar dataKey="deaths" fill="#ff7300" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { useEffect, useState } from 'react';
import { CovidStats } from '../../../domain/models/CovidStats';
import { getCovidStats } from '../../../application/services/covidService';
import { dateService } from '../../../application/services/dateService';

interface Props {
  covidData: CovidStats[];
  hasCovidData: boolean;
  isEmptyData: boolean;
  hasError: boolean;
  selectedMonth: Date | undefined;
  availableMonths: Date[];
  onMonthChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const useCovidData = (): Props => {
  const [covidData, setCovidData] = useState<CovidStats[] | undefined>(
    undefined
  );
  const [hasError, setHasError] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState<Date | undefined>(
    undefined
  );
  const [filteredData, setFilteredData] = useState<CovidStats[]>([]);
  const [availableMonths, setAvailableMonths] = useState<Date[]>([]);

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
        dateGroup: `${dateService.formatDateToShortDate(data.date)}`,
      }));
      setFilteredData(labeledData);
    }
  }, [covidData, selectedMonth]);

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(new Date(event.target.value));
  };

  const getMonthsWithData = (data: CovidStats[]) => {
    const monthsWithData = data.map(
      ({ date }) =>
        `${dateService.getMonthFromDate(date)}-${dateService.getYearFromDate(date)}`
    );
    const uniqueMonths = Array.from(new Set(monthsWithData));
    console.log(uniqueMonths, 'uniqueMonths');
    console.log(
      uniqueMonths.map((month) => dateService.parseMonthYearToDate(month)),
      'uniqueMonths2'
    );

    return uniqueMonths.map((month) => dateService.parseMonthYearToDate(month));
  };

  return {
    covidData: filteredData,
    hasCovidData: covidData !== undefined,
    isEmptyData: covidData !== undefined && covidData.length === 0,
    hasError,
    selectedMonth,
    availableMonths,
    onMonthChange: handleMonthChange,
  };
};

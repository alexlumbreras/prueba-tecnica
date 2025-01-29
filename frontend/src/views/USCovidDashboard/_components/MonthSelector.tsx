import React from 'react';
import { dateService } from '../../../application/services/dateService';

interface MonthSelectorProps {
  availableMonths: Date[];
  selectedMonth: Date | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const MonthSelector: React.FC<MonthSelectorProps> = ({
  availableMonths,
  selectedMonth,
  onChange,
}) => {
  return (
    <select
      id="month-selector"
      value={
        selectedMonth
          ? dateService.formatDateToShortMonthYear(selectedMonth)
          : ''
      }
      onChange={onChange}>
      <option value="" disabled hidden>
        Select a Month
      </option>

      {availableMonths.map((month) => {
        return (
          <option
            key={dateService.formatDateToShortMonthYear(month)}
            value={dateService.formatDateToShortMonthYear(month)}>
            {dateService.formatDateToFullMonthYear(month)}
          </option>
        );
      })}
    </select>
  );
};

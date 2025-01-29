import { describe, expect, it } from 'vitest';
import { dateService } from '../dateService';

describe('dateService', () => {
  it('getMonthFromDate should return correct month', () => {
    expect(dateService.getMonthFromDate(new Date('2024-01-01'))).toBe(1);
    expect(dateService.getMonthFromDate(new Date('2024-06-01'))).toBe(6);
  });

  it('getYearFromDate should return correct year', () => {
    expect(dateService.getYearFromDate(new Date('2024-01-01'))).toBe(2024);
    expect(dateService.getYearFromDate(new Date('1999-12-01'))).toBe(1999);
  });

  it('isSameMonthAndYear should return true for same month and year', () => {
    expect(
      dateService.isSameMonthAndYear(
        new Date('2024-03-05'),
        new Date('2024-03-15')
      )
    ).toBe(true);
  });

  it('isSameMonthAndYear should return false for different months', () => {
    expect(
      dateService.isSameMonthAndYear(
        new Date('2024-03-05'),
        new Date('2024-04-15')
      )
    ).toBe(false);
  });

  it('isSameMonthAndYear should return false for different years', () => {
    expect(
      dateService.isSameMonthAndYear(
        new Date('2023-03-05'),
        new Date('2024-03-05')
      )
    ).toBe(false);
  });

  it('parseMonthYearToDate should parse string to correct Date object', () => {
    const result = dateService.parseMonthYearToDate('03-2024');
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth() + 1).toBe(3);
    expect(result.getDate()).toBe(1);
  });

  it('formatDateToFullMonthYear should return correct format', () => {
    expect(dateService.formatDateToFullMonthYear(new Date('2024-01-01'))).toBe(
      'January 2024'
    );
    expect(dateService.formatDateToFullMonthYear(new Date('2024-12-01'))).toBe(
      'December 2024'
    );
  });

  it('formatDateToShortMonthYear should return YYYY-MM format', () => {
    expect(dateService.formatDateToShortMonthYear(new Date('2024-01-01'))).toBe(
      '2024-01'
    );
    expect(dateService.formatDateToShortMonthYear(new Date('2024-12-01'))).toBe(
      '2024-12'
    );
  });

  it('formatDateToShortDate should return DD-MM-YYYY format', () => {
    expect(dateService.formatDateToShortDate(new Date('2024-01-05'))).toBe(
      '05-01-2024'
    );
    expect(dateService.formatDateToShortDate(new Date('2024-12-25'))).toBe(
      '25-12-2024'
    );
  });
});

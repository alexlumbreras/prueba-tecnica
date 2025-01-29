import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { USCovidDashboard } from '../USCovidDashboard';
import * as covidService from '../../../application/services/covidService';

describe('USCovidDashboard Component', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should render title', async () => {
    const covidData = [{ date: new Date(), cases: 0, deaths: 0, tests: 0 }];
    vi.spyOn(covidService, 'getCovidStats').mockResolvedValueOnce(covidData);

    render(<USCovidDashboard />);

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: 'COVID Data in the US 🦠',
      })
    ).toBeVisible();
  });

  it('should display no data message when data is empty', async () => {
    vi.spyOn(covidService, 'getCovidStats').mockResolvedValueOnce([]);

    render(<USCovidDashboard />);

    expect(await screen.findByText('No data')).toBeVisible();
  });

  it('should display loading message when data is loading', () => {
    vi.spyOn(covidService, 'getCovidStats').mockResolvedValueOnce([]);

    render(<USCovidDashboard />);

    expect(screen.getByText('Loading data...')).toBeVisible();
  });

  it('should display error message when data fetch fails', async () => {
    vi.spyOn(covidService, 'getCovidStats').mockRejectedValueOnce(new Error());

    render(<USCovidDashboard />);

    expect(await screen.findByText('An error occurred!')).toBeVisible();
  });

  it('should render month selector dropdown with available months', async () => {
    const covidData = [
      { date: new Date('2022-02-01'), cases: 1, deaths: 1, tests: 1 },
      { date: new Date('2022-03-01'), cases: 2, deaths: 2, tests: 2 },
    ];
    vi.spyOn(covidService, 'getCovidStats').mockResolvedValueOnce(covidData);

    render(<USCovidDashboard />);

    const select = (await screen.findByRole('combobox')) as HTMLSelectElement;

    expect(select).toBeVisible();
    expect(select.options).toHaveLength(3);
    expect(select.options[0].text).toBe('Select a Month');
    expect(select.options[1].text).toBe('February 2022');
    expect(select.options[2].text).toBe('March 2022');
  });
});

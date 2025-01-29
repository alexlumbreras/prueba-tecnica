import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NameForm } from '../NameForm';
import * as getNameDataService from '../../../application/services/nameDataService';
import { NameData } from '../../../application/services/nameDataService';

describe('NameForm', () => {
  const nameInformation: NameData = {
    gender: 'Male',
    genderProbability: 0.99,
    age: '25',
    nationalities: [
      { country: 'US', probability: 0.85 },
      { country: 'ES', probability: 0.15 },
    ],
  };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the title', () => {
    render(<NameForm />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Name Information',
      })
    ).toBeVisible();
  });

  it('should render the form with input and button', () => {
    render(<NameForm />);

    expect(screen.getByLabelText('Enter a name')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Search' })).toBeVisible();
  });

  it('should show loading message while fetching data', async () => {
    render(<NameForm />);

    searchName('Alex');

    expect(screen.getByRole('button', { name: 'Loading...' })).toBeVisible();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should display name information when API call is successful', async () => {
    vi.spyOn(getNameDataService, 'getNameData').mockResolvedValueOnce(
      nameInformation
    );

    render(<NameForm />);

    searchName('Alex');

    expect(await screen.findByText('Male (99.0%)')).toBeVisible();
    expect(screen.getByText('25 years')).toBeVisible();
    expect(screen.getByText('US (85.0%)')).toBeVisible();
    expect(screen.getByText('ES (15.0%)')).toBeVisible();
  });

  it('should show error message when API call fails', async () => {
    vi.spyOn(getNameDataService, 'getNameData').mockRejectedValueOnce(
      new Error()
    );

    render(<NameForm />);

    searchName('Alex');

    expect(
      await screen.findByText('An error occurred while fetching the data.')
    ).toBeVisible();
  });
});

const searchName = (name: string) => {
  fireEvent.change(screen.getByLabelText('Enter a name'), {
    target: { value: name },
  });
  fireEvent.click(screen.getByRole('button', { name: 'Search' }));
};

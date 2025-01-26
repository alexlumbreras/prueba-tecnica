import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { USCovidDashboard } from '../USCovidDashboard';

describe('USCovidDashboard Component', () => {
  it('should render title', () => {
    render(<USCovidDashboard />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'COVID Data in the US 🦠',
      })
    ).toBeVisible();
  });
});

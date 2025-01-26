import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../HomePage';
import { MemoryRouter } from 'react-router-dom';

describe('HomePage Component', () => {
  it('should render welcome message', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <HomePage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Welcome to the Technical Test 👋🏻',
      })
    ).toBeVisible();
  });

  it('displays the page description correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByText('Please select an exercise:')).toBeInTheDocument();
  });

  it('renders navigation links with correct attributes and visibility', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <HomePage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('link', { name: 'Go to Exercise 1' })
    ).toHaveAttribute('href', '/exercise1');
    expect(
      screen.getByRole('link', { name: 'Go to Exercise 2' })
    ).toHaveAttribute('href', '/exercise2');
    expect(
      screen.getByRole('link', { name: 'Go to Exercise 1' })
    ).toBeVisible();
    expect(
      screen.getByRole('link', { name: 'Go to Exercise 2' })
    ).toBeVisible();
  });
});

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from '../App';

describe('App Component', () => {
  it('should render hello message', () => {
    render(<App />);

    const message = screen.getByText('Hello, React with Vite and TypeScript!');

    expect(message).toBeVisible();
  });
});

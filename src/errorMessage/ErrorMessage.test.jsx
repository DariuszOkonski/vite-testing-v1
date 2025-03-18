import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders default error state', () => {
    render(<ErrorMessage />);
    const result = screen.getByTestId('message-container');

    expect(result.textContent).toMatch(/something went wrong/i);
  });

  it('renders with error message', () => {
    render(<ErrorMessage message='Email is already taken' />);
    const result = screen.getByTestId('message-container');

    expect(result.textContent).toMatch(/email is already taken/i);
  });
});

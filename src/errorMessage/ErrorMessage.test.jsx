import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders default error state', () => {
    render(<ErrorMessage />);
    expect(screen.getByTestId('message-container')).toHaveTextContent(
      /something went wrong/i
    );
  });

  it('renders custom error state', () => {
    render(<ErrorMessage message='Email is already taken' />);
    expect(screen.getByTestId('message-container')).toHaveTextContent(
      /email is already taken/i
    );
  });
});

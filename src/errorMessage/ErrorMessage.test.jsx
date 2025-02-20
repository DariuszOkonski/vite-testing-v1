import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders default error state', () => {
    render(<ErrorMessage />);
    expect(screen.getByTestId('message-container')).toHaveTextContent(
      'Something went wrong'
    );
  });

  it('render custom error state', () => {
    render(<ErrorMessage message='Email is already taken' />);
    expect(screen.getByTestId('message-container')).toHaveTextContent(
      'Email is already taken'
    );
  });
});
//   it('renders default error state', () => {
//     render(<ErrorMessage />);
//     const messageContainer = screen.getByTestId('message-container');
//     expect(messageContainer).toHaveTextContent(/something went wrong/i);
//   });

//   it('render custom error state', () => {
//     render(<ErrorMessage message='Email is already taken' />);
//     const messageContainer = screen.getByTestId('message-container');
//     expect(messageContainer).toHaveTextContent(/email is already taken/i);
//   });
// });

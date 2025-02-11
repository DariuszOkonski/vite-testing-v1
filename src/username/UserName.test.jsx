import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import UserName from './UserName';
import userEvent from '@testing-library/user-event';

describe('UserName', () => {
  it('renders default empty text', () => {
    render(<UserName />);
    expect(screen.getByTestId('username')).toHaveTextContent('');
  });

  it('renders changed username with button', async () => {
    const user = userEvent.setup();
    render(<UserName />);

    const button = screen.getByTestId('button');
    await user.click(button);
    expect(screen.getByTestId('username')).toHaveTextContent('bar');
  });

  it('renders changed username with input', async () => {
    const user = userEvent.setup();
    render(<UserName />);

    const input = screen.getByTestId('usernameInput');
    await user.type(input, 'foo');

    expect(screen.getByTestId('username')).toHaveTextContent('foo');
  });
});

describe('UserName v2', () => {
  it('should render a component', () => {
    render(<UserName />);
    const username = screen.getByTestId('username');
    expect(username).toHaveTextContent('');
  });

  it('should render bar after clicking a button', async () => {
    const user = userEvent.setup();
    render(<UserName />);

    const button = screen.getByTestId('button');
    await user.click(button);

    expect(screen.getByTestId('username')).toHaveTextContent('bar');
  });

  it('should render text changed in input', async () => {
    const user = userEvent.setup();
    render(<UserName />);

    const input = screen.getByTestId('usernameInput');
    await user.type(input, 'foo');

    expect(screen.getByTestId('username')).toHaveTextContent('foo');
  });
});

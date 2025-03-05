import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import UserName from './UserName';
import userEvent from '@testing-library/user-event';

describe('UserName', () => {
  it('renders default empty text', () => {
    render(<UserName />);
    const username = screen.getByTestId('username');
    expect(username).toHaveTextContent('');
  });

  it('renders changed username with button', async () => {
    const user = userEvent.setup();
    render(<UserName />);

    const username = await screen.findByTestId('username');
    const button = await screen.findByTestId('button');
    await user.click(button);

    expect(username).toHaveTextContent('bar');
  });

  it('renders changed username with input', async () => {
    const user = userEvent.setup();
    render(<UserName />);

    const username = await screen.findByTestId('username');
    const usernameInput = await screen.findByTestId('usernameInput');
    await user.type(usernameInput, 'foo');

    expect(username).toHaveTextContent('foo');
  });
});

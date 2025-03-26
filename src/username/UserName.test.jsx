import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import UserName from './UserName';
import userEvent from '@testing-library/user-event';

describe('UserName', () => {
  it('renders default empty text', () => {
    render(<UserName />)

    expect(screen.getByTestId('username')).toHaveTextContent('')
  });

  it('renders changed username with button', async () => {
    const user = userEvent.setup();
    render(<UserName />)

    await user.click(screen.getByTestId('button'))

    expect(screen.getByTestId('username')).toHaveTextContent('bar')
  })

  it('renders changed username with input', async () => {
    const user = userEvent.setup();
    render(<UserName />);

    const usernameInput = screen.getByTestId('usernameInput');
    const username = screen.getByTestId('username');

    await user.type(usernameInput, 'foo')

    expect(username).toHaveTextContent('foo')
  })
});
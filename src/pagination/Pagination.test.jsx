import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Pagination from './Pagination';
import userEvent from '@testing-library/user-event';

describe('Pagination v2', () => {
  it('renders correct pagination', () => {
    render(<Pagination total={50} limit={10} currentPage={1} />);

    const pageContainers = screen.getAllByTestId('page-container');

    expect(pageContainers.length).toEqual(5);
    expect(pageContainers).toHaveLength(5);
    expect(pageContainers[0]).toHaveTextContent('1');
  });

  it('should emit clicked page v2', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={1}
        selectPage={handleClick}
      />
    );

    const pageContainers = screen.getAllByTestId('page-container');
    await user.click(pageContainers[1]);

    expect(handleClick).toHaveBeenCalledOnce();
    expect(handleClick).toHaveBeenCalledWith(2);
  });

  it('should emit clicked page', async () => {
    const user = userEvent.setup();
    const handlerMock = vi.fn();

    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={1}
        selectPage={handlerMock}
      />
    );

    const pageContainers = screen.getAllByTestId('page-container');
    await user.click(pageContainers[0]);

    expect(handlerMock).toHaveBeenCalledOnce();
    expect(handlerMock).toHaveBeenCalledWith(1);
  });
});

describe.skip('Pagination', () => {
  it('renders correct pagination', () => {
    render(<Pagination total={50} limit={10} currentPage={1} />);
    const pageContainers = screen.getAllByTestId('page-container');

    expect(pageContainers).toHaveLength(5);
    expect(pageContainers[0]).toHaveTextContent('1');
  });

  it('should emit clicked page', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={1}
        selectPage={handleClick}
      />
    );

    const pageContainers = screen.getAllByTestId('page-container');
    await user.click(pageContainers[0]);
    expect(handleClick).toHaveBeenCalledOnce();
    expect(handleClick).toHaveBeenCalledWith(1);
  });

  it('should emit clicked page v2', async () => {
    const user = userEvent.setup();
    const mockedSelectPage = vi.fn();

    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={1}
        selectPage={mockedSelectPage}
      />
    );

    const pageContainers = screen.getAllByTestId('page-container');
    await user.click(pageContainers[1]);

    expect(mockedSelectPage).toHaveBeenCalledOnce();
    expect(mockedSelectPage).toHaveBeenCalledWith(2);
  });
});

import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Pagination from './Pagination';
import userEvent from '@testing-library/user-event';
import * as utils from '../utils';

// vi.mock('../utils', () => {
//   return {
//     range: () => [1, 2, 3, 4, 5],
//   };
// });

describe('Pagination', () => {
  it('renders correct pagination', () => {
    render(<Pagination total={50} limit={10} currentPage={1} />);

    const pageContainers = screen.getAllByTestId('page-container');

    expect(pageContainers.length).toBe(5);
    expect(pageContainers).toHaveLength(5);
    expect(pageContainers[0]).toHaveTextContent(1);
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

  it('spies on utils', () => {
    vi.spyOn(utils, 'range');
    render(<Pagination total={50} limit={10} currentPage={1} />);

    expect(utils.range).toHaveBeenCalledWith(1, 6);
  });
});
//   it('renders correct pagination', () => {
//     render(<Pagination total={50} limit={10} currentPage={1} />);
//     const pageContainers = screen.getAllByTestId('page-container');

//     expect(pageContainers.length).toBe(5);
//     expect(pageContainers).toHaveLength(5);
//     expect(pageContainers[0]).toHaveTextContent(1);
//   });

//   it('should emit clicked page', async () => {
//     const user = userEvent.setup();
//     const handleClick = vi.fn();
//     render(
//       <Pagination
//         total={50}
//         limit={10}
//         currentPage={1}
//         selectPage={handleClick}
//       />
//     );

//     const pageContainers = screen.getAllByTestId('page-container');
//     await user.click(pageContainers[0]);

//     expect(handleClick).toHaveBeenCalledOnce();
//     expect(handleClick).toHaveBeenCalledWith(1);
//   });
// });
//   it('renders correct pagination', () => {
//     render(<Pagination total={50} limit={10} currentPage={1} />);

//     const pageContainers = screen.getAllByTestId('page-container');

//     expect(pageContainers.length).toEqual(5);
//     expect(pageContainers).toHaveLength(5);
//     expect(pageContainers[0]).toHaveTextContent('1');
//   });

//   it('should emit clicked page v2', async () => {
//     const user = userEvent.setup();
//     const handleClick = vi.fn();
//     render(
//       <Pagination
//         total={50}
//         limit={10}
//         currentPage={1}
//         selectPage={handleClick}
//       />
//     );

//     const pageContainers = screen.getAllByTestId('page-container');
//     await user.click(pageContainers[1]);

//     expect(handleClick).toHaveBeenCalledOnce();
//     expect(handleClick).toHaveBeenCalledWith(2);
//   });

//   it('should emit clicked page', async () => {
//     const user = userEvent.setup();
//     const handlerMock = vi.fn();

//     render(
//       <Pagination
//         total={50}
//         limit={10}
//         currentPage={1}
//         selectPage={handlerMock}
//       />
//     );

//     const pageContainers = screen.getAllByTestId('page-container');
//     await user.click(pageContainers[0]);

//     expect(handlerMock).toHaveBeenCalledOnce();
//     expect(handlerMock).toHaveBeenCalledWith(1);
//   });

//   it('should spyOn utils', () => {
//     vi.spyOn(utils, 'range');
//     render(<Pagination total={50} limit={10} currentPage={1} />);
//     expect(utils.range).toHaveBeenCalledWith(1, 6);
//   });
// });

// describe('Pagination', () => {
//   it('renders correct pagination', () => {
//     render(<Pagination total={50} limit={10} currentPage={1} />);
//     const pageContainers = screen.getAllByTestId('page-container');

//     expect(pageContainers).toHaveLength(5);
//     expect(pageContainers[0]).toHaveTextContent('1');
//   });

//   it('should emit clicked page', async () => {
//     const user = userEvent.setup();
//     const handleClick = vi.fn();
//     render(
//       <Pagination
//         total={50}
//         limit={10}
//         currentPage={1}
//         selectPage={handleClick}
//       />
//     );

//     const pageContainers = screen.getAllByTestId('page-container');
//     await user.click(pageContainers[0]);
//     expect(handleClick).toHaveBeenCalledOnce();
//     expect(handleClick).toHaveBeenCalledWith(1);
//   });

//   it('should emit clicked page v2', async () => {
//     const user = userEvent.setup();
//     const mockedSelectPage = vi.fn();

//     render(
//       <Pagination
//         total={50}
//         limit={10}
//         currentPage={1}
//         selectPage={mockedSelectPage}
//       />
//     );

//     const pageContainers = screen.getAllByTestId('page-container');
//     await user.click(pageContainers[1]);

//     expect(mockedSelectPage).toHaveBeenCalledOnce();
//     expect(mockedSelectPage).toHaveBeenCalledWith(2);
//   });

//   it('spies on utils', () => {
//     vi.spyOn(utils, 'range');
//     render(<Pagination total={50} limit={10} currentPage={1} />);
//     expect(utils.range).toHaveBeenCalledWith(1, 6);
//   });
// });

import { render, screen } from '@testing-library/react';
import axios from 'axios';
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import Tags from './Tags';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

describe('Tags', () => {
  it('should', () => {
    
  })
})

// describe('Tags', () => {
//   const server = setupServer(
//     http.get('http://localhost:3004/tags', () => {
//       return HttpResponse.json([{ id: 1, name: 'bar' }]);
//     })
//   );

//   beforeAll(() => server.listen());
//   afterAll(() => server.close());
//   afterEach(() => server.resetHandlers());

//   it('render tags V1', async () => {
//     render(<Tags />);

//     const tags = await screen.findAllByTestId('tag');
//     expect(tags).toHaveLength(1);
//   });

//   it('render tags V2', async () => {
//     const mockResponse = {
//       data: [
//         { id: 1, name: 'bar' },
//         { id: 2, name: 'foo' },
//       ],
//     };
//     vi.spyOn(axios, 'get').mockResolvedValue(mockResponse);
//     render(<Tags />);

//     const tags = await screen.findAllByTestId('tag');
//     expect(tags).toHaveLength(2);
//   });
// });

import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { describe, expect, it, vi } from 'vitest';
import Tags from './Tags';

describe('Tags', () => {
  // const server = setupServer(
  //   http.get('http://localhost:3004/tags', () => {
  //     return HttpResponse.json([{ id: '1', name: 'bar' }]);
  //   })
  // );

  // beforeAll(() => server.listen());
  // afterAll(() => server.close());
  // afterEach(() => server.resetHandlers());

  it('renders tags', async () => {
    const mockResponse = {
      data: [{ id: '1', name: 'bar' }],
    };
    vi.spyOn(axios, 'get').mockResolvedValue(mockResponse);

    render(<Tags />);
    const tags = await screen.findAllByTestId('tag');

    expect(tags).toHaveLength(1);
    expect(tags[0]).toHaveTextContent('bar');
  });
});

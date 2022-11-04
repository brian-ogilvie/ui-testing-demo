const mockJSON = jest.fn();

const mockFetch = jest.fn(() => {
  return Promise.resolve({
    json: mockJSON,
  });
});

function queueMockResponse(data) {
  mockJSON.mockImplementation(() => {
    return Promise.resolve(data);
  })
}

global.fetch = mockFetch;

describe('MockFetch', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('returns the mock data', async () => {
    queueMockResponse({
      id: 1,
      service_name: 'MySQL',
    });
    const res = await fetch('my url');
    expect(mockFetch).toHaveBeenCalledWith('my url');
    const data = await res.json();
    expect(data).toEqual({
      id: 1,
      service_name: 'MySQL',
    });
  })
});
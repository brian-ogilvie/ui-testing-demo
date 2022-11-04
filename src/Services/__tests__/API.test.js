import {getDatabaseServices} from '../API';

const mockJson = jest.fn();

describe('getDatabaseServices', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: mockJson,
    });
  });

  test('returns data from fetch call', async () => {
    const mockData = {
      id: 1, 
      service_name: 'MySQL',
    };
    mockJson.mockResolvedValue(mockData);
    const data = await getDatabaseServices();
    expect(data).toEqual(mockData);
  });
});
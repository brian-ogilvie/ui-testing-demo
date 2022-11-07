import DBServiceSelector from '../DBServiceSelector';
import { act, cleanup, render, screen, waitForElementToBeRemoved } from '@testing-library/react';

const mockGetDatabaseServices = jest.fn();

jest.mock('../../Services/API', () => ({
  getDatabaseServices: () => mockGetDatabaseServices,
}));

const SERVICES = [
  {
    id: 1,
    service_name: 'MySQL',
  },
  {
    id: 2,
    service_name: 'MongoDB',
  },
  {
    id: 3,
    service_name: 'Cassandra',
  },
];

describe('DBServiceSelector', () => {

  beforeEach(jest.clearAllMocks);

  afterEach(cleanup);
  
  test('renders loading indicator', () => {
    render(<DBServiceSelector />);
    expect(screen.queryByText('Loading')).toBeVisible();
  });

  test('calls the API on render', async () => {
    mockGetDatabaseServices.mockResolvedValueOnce(SERVICES);
    render(<DBServiceSelector />);
    expect(mockGetDatabaseServices).toHaveBeenCalled();
  });
})
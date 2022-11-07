import DBServiceSelector from '../DBServiceSelector-done';

import * as React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';

const SERVICES = [
  {
    service_id: 1,
    service_name: 'SQL Server',
  },
  {
    service_id: 2,
    service_name: 'MySQL',
  },
];

describe('DBServiceSelector', () => {
  const mockSetServiceID = jest.fn();

  function TestRenderer() {
    return (
      <DBServiceSelector
        services={SERVICES}
        serviceID={0}
        setServiceID={mockSetServiceID}
      />
    );
  }

  beforeEach(() => {
    mockSetServiceID.mockClear();
  });
  
  afterEach(cleanup);
  
  test('should render list of services', () => {
    render(<TestRenderer />);
    expect(screen.getByLabelText('Database Service')).toBeVisible();
    SERVICES.forEach(({service_name}) => {
      expect(screen.getByText(service_name)).toBeInTheDocument();
    });
  });

  test('should update selected value when user clicks an option', () => {
    render(<TestRenderer />);
    const selector = screen.getByLabelText('Database Service');
    SERVICES.forEach(({service_id}) => {
      fireEvent.change(selector, {target: {value: service_id}});
      expect(mockSetServiceID).toHaveBeenCalledWith(service_id);
    });
  });
});

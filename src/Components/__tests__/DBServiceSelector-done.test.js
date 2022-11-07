import DBServiceSelector from '../DBServiceSelector-done';

import * as React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const SERVICES = [
  {
    service_id: "1",
    service_name: 'SQL Server',
  },
  {
    service_id: "2",
    service_name: 'MySQL',
  },
];

describe('DBServiceSelector', () => {
  const mockSetServiceID = jest.fn();

  function TestRenderer() {
    return (
      <DBServiceSelector
        services={SERVICES}
        serviceID={null}
        setServiceID={mockSetServiceID}
      />
    );
  }

  beforeEach(() => {
    mockSetServiceID.mockClear();
  });
    
  test('should render list of services', () => {
    render(<TestRenderer />);
    expect(screen.getByLabelText('Database Service')).toBeVisible();
    SERVICES.forEach(({service_name}) => {
      expect(screen.getByText(service_name)).toBeInTheDocument();
    });
  });

  test('no initial selection', () => {
    render(<TestRenderer />);
    const defaultOption = screen.getByText('Please Select...');
    expect(defaultOption.selected).toBe(true);
    expect(defaultOption.disabled).toBe(true);
  });

  test('should update selected value when user clicks an option', () => {
    render(<TestRenderer />);
    const selector = screen.getByLabelText('Database Service');
    SERVICES.forEach(({service_id}) => {
      userEvent.selectOptions(selector, [service_id]);
      expect(mockSetServiceID).toHaveBeenCalledWith(service_id);
    });
  });
});

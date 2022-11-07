import { useState } from 'react';
import './App.css';
import DBServiceSelector from './Components/DBServiceSelector-done';

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

function App() {
  const [serviceID, setServiceID] = useState("");

  return (
    <div style={{maxWidth: '500px'}}>
      <DBServiceSelector 
        services={SERVICES} 
        serviceID={serviceID} 
        setServiceID={setServiceID} 
      />
    </div>
  );
}

export default App;

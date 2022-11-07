import React, { useCallback } from "react";

export default function DBServiceSelector({services, serviceID, setServiceID}) {

  const handleChange = useCallback(({target}) => {
    setServiceID(target.value);
  }, [setServiceID]);

  return (
    <label htmlFor="services-selector">
      Database Service
      <select id="services-selector" value={serviceID} onChange={handleChange}>
        {services.map(({service_id, service_name}) => (
          <option key={service_id} value={service_id}>{service_name}</option>
        ))}
      </select>
    </label>
  )
}
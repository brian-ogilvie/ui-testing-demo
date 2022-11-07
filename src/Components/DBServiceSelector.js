import React, { useEffect, useState } from "react";
import { getDatabaseServices } from "../Services/API";

export default function DBServiceSelector() {
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState(null);

  useEffect(() => {
    async function getServices() {
      const data = await getDatabaseServices();
      setServices(data);
      setIsLoading(false);
    }
    getServices();
  }, []);

  return isLoading ? <div>Loading</div>
  : <div>Something else</div>
}
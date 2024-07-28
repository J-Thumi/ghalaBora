import { useState, useEffect, useRef } from 'react';

const useWebSocket = (url) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('chartData');
    return savedData ? JSON.parse(savedData) : [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      console.log('WebSocket Connected');
      setLoading(false);
    };

    ws.current.onmessage = (event) => {
      const newReading = JSON.parse(event.data);
      console.log('New reading received:', newReading);
      setData(prevData => {
        const updatedData = [...prevData, newReading];
        localStorage.setItem('chartData', JSON.stringify(updatedData.slice(-100)));
        return updatedData.slice(-100); // Keep only the last 100 readings
      });
    };

    ws.current.onerror = (error) => {
      console.log('WebSocket Error: ', error);
      setError('WebSocket connection error');
    };

    ws.current.onclose = () => {
      console.log('WebSocket Disconnected');
    };

    const interval = setInterval(() => {
      if (ws.current.readyState === WebSocket.OPEN) {
        ws.current.send('heartbeat');
      }
    }, 30000); // Send a heartbeat every 30 seconds

    return () => {
      clearInterval(interval);
      if (ws.current.readyState === WebSocket.OPEN) {
        ws.current.close();
      }
    };
  }, [url]);

  return { data, loading, error };
};

export default useWebSocket;

import React, { useEffect, useState } from 'react';

const FetchComponent2 = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      // 실제 api 호출이라고 가정
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result.message);
    };

    fetchData();
  }, []);

  return <div>{data || 'Loading...'}</div>;
};

export default FetchComponent2;

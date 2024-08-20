import React, { useEffect, useState } from 'react';

const FetchComponent = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      // 1초 후 데이터 응답
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve('Data received');
        }, 1000);
      });

      // 응답 데이터 상태값 저장
      setData(response);
    };

    fetchData();
  }, []);

  return <div>{data || 'Loading...'}</div>;
};

export default FetchComponent;

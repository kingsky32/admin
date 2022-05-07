import React from 'react';
import { Spin } from 'antd';

function LoadingPage(): React.ReactElement {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spin />
    </div>
  );
}

export default LoadingPage;

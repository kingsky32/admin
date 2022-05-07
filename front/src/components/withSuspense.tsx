import React from 'react';
import { Spin } from 'antd';

function withSuspense<T = any>(Component: React.FC<T>): (props: T) => React.ReactElement {
  return function (props: T): React.ReactElement {
    return (
      <React.Suspense fallback={<Spin />}>
        <Component {...props} />
      </React.Suspense>
    );
  };
}

export default withSuspense;

import React, { memo } from 'react';

const Small = memo(({ value }) => {
  console.log('mounted again');

  return <small>{value}</small>;
});

export default Small;

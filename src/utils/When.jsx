import React from 'react';

export const When = ({ predicate, children }) => {
  if (predicate) return <>{children}</>;
  return <></>;
};

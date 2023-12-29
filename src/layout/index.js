import React from 'react';
import Drawer from './drawer';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Drawer />
      <div
        style={{
          width: '100vw',
          backgroundColor: '#041218',
          height: '100vh'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;

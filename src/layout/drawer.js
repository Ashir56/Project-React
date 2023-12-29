import React from 'react';
import Logo from '../assets/Memo';

const Drawer = () => {
  return (
    <div id='sidebar'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          margin: '2rem 0rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Logo />
        <p style={{ fontSize: '24px', margin: 0, color: 'white' }}>
          {' '}
          QuickMemo
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          padding: '1rem'
        }}
      >
        <a href='/add-notes'>Add Note</a>
        <a href='/notes'>My Notes</a>
      </div>
    </div>
  );
};

export default Drawer;

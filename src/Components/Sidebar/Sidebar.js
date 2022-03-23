import React, { useState, useEffect } from 'react';

export default function Sidebar({ all }) {

  const sidebarStyles = {
    width: '150px',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'lightBlue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px',
  };

  return (
    <ul style={sidebarStyles}>
      {all}  {/* Javascript list of HTML items  */}
    </ul>
  );
}

// return <ul style={sidebarStyles}>{list.items}</ul>;

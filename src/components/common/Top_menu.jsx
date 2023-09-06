import React from 'react';
import Buttons from './Buttons';

export default function Topmenu({ isNavOpen }) {
  return (
    <div className={` ${isNavOpen ? 'clicked' : 'btns'}`}>
      <Buttons />
    </div>
  );
}

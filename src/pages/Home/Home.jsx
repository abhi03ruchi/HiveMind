import React, { useState } from 'react';
import './Home.css';
import Schedule from '../../components/Schedule/Schedule';
import FloatBar from '../../components/FloatBar/FloatBar';
import user from '../../data';

export default function Home() {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  const curr_date = new Date().toLocaleDateString(undefined, options);

  return (
    <div className='home'>
      <div className="homeWrapper">
        <div className="section1">
          <div className="date">{curr_date}</div>
          <div className="greeting">Good Morning, {user[0].name}</div>
        </div>
        <div className="section2">
          <FloatBar />
          <Schedule />
        </div>
      </div>
    </div>
  );
}

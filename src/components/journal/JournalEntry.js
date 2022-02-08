import React from 'react';

export const JournalEntry = (props) => {

  return (
    <div className='journal__entry pointer'>
      <div 
        className='journal__entry-picture'
        style={{ 
          backgroundSize: 'cover',
          backgroundImage: `url(https://i.pinimg.com/736x/dd/1f/ff/dd1fffb77c1a30afebdb54f1f35e9470.jpg)`
        }}
      />
      <div className='jorunal__entry-body'>
        <p className='journal__entry-title'>
          un nuevo dia
        </p>
        <p className='journal__entry-content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='journal__entry-date-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

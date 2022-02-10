import React from 'react';
import moment from 'moment'
import { activeNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';

export const JournalEntry = ({ id, date, body, title, url }) => {
  
  // it's work but we prefer to hide the image content
  // !url && (url = "https://i.pinimg.com/736x/dd/1f/ff/dd1fffb77c1a30afebdb54f1f35e9470.jpg");
  const dispatch = useDispatch();
  const handleEntryClick = () => {  
    dispatch( activeNote( id, { date, body, title, url } ) );
  }

  const noteDate = moment(date);

  return (
    <div className='journal__entry pointer' onClick={handleEntryClick}>
      { url && (
          <div 
            className='journal__entry-picture'
            style={{ 
              backgroundSize: 'cover',
              backgroundImage: `url(${url})`
            }}
          />
      )}
      <div className='jorunal__entry-body'>
        <p className='journal__entry-title'>
          { title }
        </p>
        <p className='journal__entry-content'>
          { body }
        </p>
      </div>
      <div className='journal__entry-date-box'>
        <span>{ noteDate.format("dddd") }</span>
        <h4> { noteDate.format("Do") } </h4>
      </div>
    </div>
  );
};

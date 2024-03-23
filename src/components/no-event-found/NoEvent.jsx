import React from 'react';
import './NoEvent.css'; 

function NoEvent(props) {
  return (
    <div className="outer">
      <img src="https://images.yapsody.com/yapsody/assets/images/new_ci/styles/images/no-events.png" alt="No events found"></img>
      <p>No events found for {props.kk}</p>
    </div>
  );
}

export default NoEvent;

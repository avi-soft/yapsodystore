import React from 'react';
import './Page_Not_Found.css'; 

const Page_Not_Found = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="error-title">404 <img src="https://myblog.staging.yapsody.com/images/new_ci/styles/images/4-0-4.png" className="lock-img" alt="Lock"></img></div>
        <div className="error-text">Whoops, the page or event you are looking for was not found.<br/>If you need any help, please contact <a href="http://support.yapsody.com/hc/en-us" className="color-5">Yapsody Support Desk</a></div>
        <div className="btn">
          <button className="btn-primary"><a href="https:wq//www.yapsody.com/ticketing/?_gl=1*8aidaq*_gcl_au*MTcyODU3MTIzMS4xNzEwOTI0Njg5">Ticketing</a></button>
          <button className="btn-primary"><a href="https://www.yapsody.com/events/">Event Directory</a></button>
          <button className="btn-primary"><a href="https://boxoffice.yapsody.com/ticketing/signup">Sign Up</a></button>
        </div>
      </div>
    </div>
  );
};

export default Page_Not_Found;






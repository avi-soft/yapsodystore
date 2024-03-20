"use client";

import React, { useEffect, useState } from 'react';
import './RedirectPage.css';

function RedirectPage() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get('url');
    setUrl(url);

    const thirdPartyRedirect = document.querySelector('#redirectToThirdPartyLink');
    thirdPartyRedirect.setAttribute('href', url);
  }, []);

  function redirectToNextPage() {
    window.open("https://stackoverflow.com/", "_blank");
    window.history.go(-1);
  }
  
  function cancelRedirect() {
    // Implement cancel logic here




  }
  

  return (
    <main>
      <section className="redirect-page-change-content">
        <div className="wrapper">
          <figure>
            <img src="https://images.yapsody.com/yapsody/assets/images/security-pana.svg" alt="Redirection Security" />
          </figure>
          <h3><span className="bold-text">my store</span> is sending you to an external page. Ensure you trust that page before you continue.</h3>
          <div class="current-location-url">
               https://stackoverflow.com/
            </div>
          <ul>
            <li>
            <a href="#" onClick={cancelRedirect} title="Cancel">Cancel</a>   </li>         

            <li>
            <a href="https://stackoverflow.com/" onClick={() => redirectToNextPage(true)} id="redirectToThirdPartyLink" rel="nofollow noopener noreferrer" target="_blank" title="Continue">Continue</a>

              </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default RedirectPage;

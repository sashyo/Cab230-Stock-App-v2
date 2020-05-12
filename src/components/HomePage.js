import React from 'react';
import '../styles/HomePage.css';
import TableContent from './tableContent.js';






function HomePage() {
  return (
    <div className="homepage">
      
      
      <div className='contentWrapper'>
        <div className='homepage-intro'>
          <div className='row'>
            <h3 className="title">Welcome to the Stock Analyst portal. </h3>

          </div>

        </div>
        <div className="mainContent">
          <main>
            <TableContent />
          </main>
        </div>
      </div>

    </div>






  );
}

export default HomePage;

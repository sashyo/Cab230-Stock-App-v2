import React from 'react';
import '../styles/HomePage.css';
import TableContent from './tableContent.js';

function FetchAllStocks() {
    return (

        <div className="AllStocksPage">


            <div className='contentWrapper'>

                <div className="mainContent">
                    <main>
                        <TableContent />
                    </main>
                </div>
            </div>

        </div>




    );



}

export default FetchAllStocks;
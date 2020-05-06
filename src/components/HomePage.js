import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/dist/styles/ag-grid.css";
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../styles/HomePage.css';
import NavBar from './Navbar.js'

const table = {
  columns: [
    { headerName: "Name", field: "name"},
    { headerName: "Symbol", field: "symbol" },
    { headerName: "Industry", field: "industry" }
  ],

  rowData: [
    {name: " ", symbol: " ", industry: " "},
    {name: " ", symbol: " ", industry: " "},
    {name: " ", symbol: " ", industry: " "}
  ]
};




function HomePage() {
  return (
    <div className="homepage">
      <div className = "topMenu">
        <NavBar />
          </div>
            <div className = "mainContent">
              <main>
                <div className = 'ag-theme-balham' style={{
                  height: "300px",
                  width: "600px"
                  }}>
                <AgGridReact
                columnDefs={table.columns}
                rowData={table.rowData}
                pagination={true}/>
                </div>

              </main>
            </div>
            
      </div>
        
        
       
    
    

  );
}

export default HomePage;

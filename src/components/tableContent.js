import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const table = {
    columns: [
        { headerName: "Name", field: "name" },
        { headerName: "Symbol", field: "symbol" },
        { headerName: "Industry", field: "industry", sortable: true, filter: true },
    ],

    rowData: [
        { name: " ", symbol: " ", industry: " " },
        { name: " ", symbol: " ", industry: " " },
        { name: " ", symbol: " ", industry: " " },
    ],
};

function TableContent() {
    const [rowData, setRowData] = useState([]);
    const url = `http://131.181.190.87:3000/stocks/symbols`
    
        useEffect(()=>{
            fetch(url)
            .then(res => res.json())
            .then(data => data)
            .then(industry =>
                 industry.map(company => {
                return{
                    "name": company.name,
                    "symbol": company.symbol,
                    "industry": company.industry
                };

            })
        )
            .then(companies =>setRowData(companies));
        }, []);
        return (
        <div
            className="ag-theme-balham"
            style={{
                height: "300px",
                width: "600px",
            }}
        >
            <AgGridReact
                columnDefs={table.columns}
                rowData={rowData}
                pagination={true}
            />
        </div>
    );
}



export default TableContent;

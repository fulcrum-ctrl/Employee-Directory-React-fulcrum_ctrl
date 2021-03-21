import React from 'react';

//generate table format
//placeholders for data
//map through json (props) for actual data
function Table(props){
    const slaves = props.slaveArray;
    const data = slaves.map((slave,index)=>
    <tr key={index}>
            <td>{slave.first}</td>
            <td>{slave.last}</td>
            <td>{slave.email}</td>
            <td>{slave.balance}</td>
    </tr>
    ) 
    return (
        <table className="table">
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Balance</th>
            </tr>
        </thead>
        <tbody>
            {data}
        </tbody>
    </table>
    );
}

export default Table;
import React from "react";
import "../styles/datatable.scss";

const DataTable = ({ countries }) => {
    const redZone = [...countries];
    return (
        <div className="datatable">
            <div className="title">Red Zone Countries</div>
            <table className="table table-striped table-responsive-sm">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Name</th>
                        <th scope="col">Total Cases</th>
                        <th scope="col">Total Recovered</th>
                        <th scope="col">Total Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {redZone
                        .sort((a, b) => b.cases - a.cases)
                        .filter((_, index) => index < 10)
                        .map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.country}</td>
                                <td>{item.cases || "N / A"} </td>
                                <td>{item.recovered || "N / A"} </td>
                                <td>{item.deaths || "N / A"} </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;

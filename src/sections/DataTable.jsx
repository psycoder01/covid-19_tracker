import React from 'react';
import '../styles/datatable.scss';

const DataTable = ({ countries }) => {
	let redZone = [...countries];
	return (
		<div className="datatable">
			<div className="title">
				Red Zone Countries
      </div>
			<table className="table">
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
					{redZone.sort((a,b)=>b.cases - a.cases).filter((item,index) => index < 10).map((item, index) => <tr><td>{index+1}</td><td>{item.country}</td><td>{item.cases}</td><td>{item.recovered}</td><td>{item.deaths}</td></tr>)}
				</tbody>
			</table>
		</div>

	);
}

export default DataTable;
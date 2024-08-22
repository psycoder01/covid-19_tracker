import React from "react";
import CountUp from "react-countup";

const Stats = ({ data }) => {
    return (
        <div className="stats">
            <div className="card text-white infected mb-3">
                <div className="card-header">Cases</div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title">
                        <CountUp start={0} end={data.cases || 0} duration={3} />
                    </h5>
                    <p className="card-text">
                        Number of Infected Cases of COVID-19
                    </p>
                </div>
            </div>
            <div className="card text-white recovered mb-3">
                <div className="card-header">Recovered</div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title">
                        <CountUp
                            start={0}
                            end={data.recovered || 0}
                            duration={3}
                        />
                    </h5>
                    <p className="card-text">
                        Number of Recovered Cases of COVID-19
                    </p>
                </div>
            </div>
            <div className="card text-white bg-dark mb-3">
                <div className="card-header">Death</div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title">
                        <CountUp
                            start={0}
                            end={data.deaths || 0}
                            duration={3}
                        />
                    </h5>
                    <p className="card-text">
                        Number of Death Cases of COVID-19
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Stats;

import React from "react";
import "../styles/details.scss";

const Details = () => {
    return (
        <div className="details">
            <div className="description">
                Coronavirus disease 2019 (COVID-19) is an infectious disease
                caused by severe acute respiratory syndrome coronavirus 2
                (SARS-CoV-2). It was first identified in December 2019 in Wuhan,
                the capital of China's Hubei province, and has since spread
                globally, resulting in an ongoing pandemic.
            </div>
            <div className="info">
                <div className="card symptoms">
                    <h3>
                        <span className="badge badge-warning">Symptoms</span>
                    </h3>
                    <div className="card-body">
                        <h5>
                            Signs and symptoms of coronavirus disease 2019
                            (COVID-19) may appear two to 14 days after exposure.
                        </h5>
                        <br />
                        <h5>Major Symptoms</h5>
                        <ul>
                            <li>Fever</li>
                            <li>Dry Cough / Cough</li>
                            <li>Shortness of breath or difficulty breathing</li>
                        </ul>
                        <h5>Other Symptoms May Include</h5>
                        <ul>
                            <li>Chills</li>
                            <li>Repeated shaking with chills</li>
                            <li>Headache</li>
                            <li>Sore Throat</li>
                            <li>Loss of taste and smell</li>
                            <li>Diarrhea</li>
                            <li>Vomiting</li>
                        </ul>
                    </div>
                </div>
                <div className="card preventions">
                    <h3>
                        <span className="badge badge-info">Preventions</span>
                    </h3>
                    <div className="card-body">
                        <ul>
                            <li>
                                Wash your hands frequently for at least 20
                                seconds at a time with warm water and soap. How
                                long is 20 seconds? About as long as it takes to
                                sing your “ABCs.”
                            </li>
                            <li>
                                Don’t touch your face, eyes, nose, or mouth when
                                your hands are dirty.
                            </li>
                            <li>
                                Stay at least 6 feet(2 meters) away from people.
                            </li>
                            <li>
                                Clean any objects you touch a lot. Use
                                disinfectants on objects like phones, computers,
                                utensils, dishware, and doorknobs.{" "}
                            </li>
                            <li>
                                Cover your mouth with a tissue or the inside of
                                your elbow whenever you sneeze or cough. Throw
                                away any tissues you use right away.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;

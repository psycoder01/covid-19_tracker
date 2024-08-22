import React, { useState } from "react";
import Stats from "../components/Stats.component";
import "../styles/datashow.scss";

const DataShow = ({ global, countries }) => {
    const [nation, setNation] = useState("Global");

    function handleChange() {
        const select = document.querySelector("#inputGroupSelect01");
        const text = select.options[select.selectedIndex].text;
        text === "Choose Country..." ? setNation("Global") : setNation(text);
    }
    return (
        <div className="data">
            <div className="input-group">
                <select
                    className="custom-select"
                    id="inputGroupSelect01"
                    defaultValue="global"
                    onChange={handleChange}
                >
                    <option value="global">Choose Country...</option>
                    {countries.map((item, index) => (
                        <option value={item.country} key={index}>
                            {item.country}
                        </option>
                    ))}
                </select>
            </div>
            <div className="area-details mt-5">
                <h1>{nation}</h1>
            </div>
            <Stats
                data={
                    nation === "Global"
                        ? global
                        : countries.find((item) => item.country === nation)
                }
            />
        </div>
    );
};

export default DataShow;

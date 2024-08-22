import React from "react";
import { useState, useEffect } from "react";

import DataShow from "../sections/DataShow";
import Footer from "../sections/Footer";
import DataTable from "../sections/DataTable";

import { globalData, countryData } from "../api";

const Home = () => {
    const [global, setGlobal] = useState([]);
    const [countries, setCountries] = useState([]);

    async function handleData() {
        const global = await globalData();
        const countries = await countryData();
        setGlobal(global);
        setCountries(countries);
    }

    useEffect(() => {
        handleData();
    }, []);

    return (
        <React.Fragment>
            <DataShow global={global} countries={countries} />
            <DataTable countries={countries} />
            <Footer />
        </React.Fragment>
    );
};

export default Home;

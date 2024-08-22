const url = `https://disease.sh/v3/covid-19`;

export async function globalData() {
    try {
        const resp = await fetch(`${url}/all`);
        const data = await resp.json();
        return data;
    } catch (error) {
        alert("Can't Connect to Server");
        console.log(error);
    }
}
export async function countryData() {
    try {
        const resp = await fetch(`${url}/countries`);
        const data = await resp.json();
        return data;
    } catch (error) {
        alert("Can't Connect to Server");
        console.log(error);
    }
}

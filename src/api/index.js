const url = `https://corona.lmao.ninja/v2`;

export async function globalData() {
  try {
    let resp = await fetch(`${url}/all`);
    let data = await resp.json();
    return data;
  } catch (error) {
    alert("Can't Connect to Server");
    console.log(error);
  }
}
export async function countryData() {
  try {
    let resp = await fetch(`${url}/countries`);
    let data = await resp.json();
    return data;
  } catch (error) {
    alert("Can't Connect to Server");
    console.log(error);
  }
}

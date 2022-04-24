const getallcountriesname = () => {
    const name = new XMLHttpRequest();
    name.open("Get", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    name.send();
    name.responseType = "json";

    name.onload = () => {
        const allcountries = name.response;

        for (let names of allcountries){
            console.log("name","-", names.name, "| region", "-", names.region, "| subregion ", "-", names.subregion, "| population ", "-", names.population);
        }

    }  
};

getallcountriesname();
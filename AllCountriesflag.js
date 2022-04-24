const getallcountriesflag = () => {
    const flag = new XMLHttpRequest();
    flag.open("Get", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    flag.send();
    flag.responseType = "json";

    flag.onload = () => {
        const allcountries = flag.response;

        for (let flags of allcountries){
            console.log("Flag","-", flags.flag); 
        }
    }  
};

getallcountriesflag();

in html

<!-- <script src = "AllCountriesflag.js"></script> -->
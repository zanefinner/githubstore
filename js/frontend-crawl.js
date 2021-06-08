var Crawler = {
    get: function (endpoints) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "https://api.github.com/"+endpoints, false); // false for synchronous request
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }
};

console.log("Crawling service");
let result = JSON.parse(Crawler.get("search/repositories?q=zane"));
results = result.items;
results.forEach((e)=>{
    console.log(e.full_name);
})
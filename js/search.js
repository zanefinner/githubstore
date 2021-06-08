function search(key) {
    //simple search, warrants 30 results
    return JSON.parse(Crawler.get("search/repositories?q=" + key));
}
function writeResults(jsonData) {
    items = jsonData.items;
    items.forEach((e) => {
        document.getElementsByClassName("results")[0]
            .innerHTML +=
            "<div class='col s6 m4 l4 xl4'><div class='card'>" + 
                "<div class='card-title'><span class='card-title'>"+e.name+ "</span></div>" +
                "<div class='card-content'>"+e.description+ "</div>"+
                "</div></div>";
    })
}
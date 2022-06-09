document.addEventListener("DOMcontentLoaded", function(){
    fetch("hhtp://localhost:5000/getAll")
    .then(res => res.json())
    .then(data => console.log(data));
    loadHtmlTable([]);
});

function loadHtmlTable(data) {
    const table = document.querySelector("table tbody");
    // let tableHtml = "";

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'></td></tr>"

    }
}
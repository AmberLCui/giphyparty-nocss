const $gif = $("#gifs");
const $searchInput = $("#search");

function getGiphy(res) {
    let results = res.data.length;
    if (results) {
        let random = Math.floor(Math.random() * results);
        let $newColumn = $("<div>");
        let $newGiphy = $("<img>", {
            src: res.data[random].images.original.url, class: "w-100"
        });
        $newColumn.append($newGiphy);
        $gif.append($newColumn);
    }
}

$("form").on("submit", async function (evt) {
    evt.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            api_key: "MinwqiNkbEvKcRNRQqAIYMsm97xC6LmY"
        }
    });
    getGiphy(response.data);
});

$("#delete").on("click", function () {
    $gif.empty();
});
const form = document.querySelector("#form");
const result = document.querySelector('#result')

async function getTvShows(searchText) {
    const res = await axios.get("https://api.tvmaze.com/search/shows?q=" + searchText);
    console.log(res.data);
    for (let item of res.data) {
        if (item.show.image) {
            const imgurl = item.show.image.medium;
            const image = document.createElement("img");
            image.src = imgurl;
            image.style.margin = "10px";
            result.append(image);
        }
    }
}

function removeSearchResult() {
    while (result.firstChild) {
        result.firstChild.remove();
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchText = (event.srcElement[0].value);
    removeSearchResult();
    getTvShows(searchText);
    event.srcElement[0].value = "";
})
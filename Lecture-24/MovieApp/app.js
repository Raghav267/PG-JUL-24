const form = document.querySelector("#form");

async function getTvShows(searchText) {
    const res = await axios.get("https://api.tvmaze.com/singlesearch/shows?q=" + searchText);
    console.log(res);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchText = (event.srcElement[0].value);
    getTvShows(searchText);
})
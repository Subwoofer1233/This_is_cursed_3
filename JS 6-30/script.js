let cities = [];
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const Hello = document.getElementById('helloStartScreen')
const searchBox = document.getElementById('citiesinputID');
const citiesList = document.getElementById('Answers');
const mainDiv = document.getElementById('mainSearchBoxDiv');
const answers = document.querySelector(".answersP")
let dukieTest = "Filter for a city or a state:"



Hello.addEventListener("click", (e) => {
  Hello.classList.remove("theStartPage");
  Hello.classList.add("startGone")
  mainDiv.classList.remove("mainSearchBoxDivStart");
  mainDiv.classList.add("mainSearchBoxDiv");
});

searchBox.addEventListener("click", (e) => {
    citiesList.classList.add("answersReady");
    searchBox.classList.add("searchBoxReady");
    document.getElementById("Dukie").innerText=dukieTest;
});



// fetch(endpoint)
//   .then(blob => blob.json())
//   .then(data => cities = data)


// function bigBoySearchBoy (searchyBoy, cities){
//   return cities.filter(place => {
//     //here we need to get good with searchy boy
//     const miniSearchyBoy = new RegExp(searchyBoy, 'gi')
//     return place.city.match(miniSearchyBoy) || place.state.match(miniSearchyBoy)
//   });
// }

// function displayWhatBigBoySearchBoyGivesYou (){
//   const matchArray = bigBoySearchBoy(this.value, cities)
//   const html = matchArray.map(place => {
//     return `<li><span class="name>${place.city}, ${place.state}</span>"</li>
//     <span class="population">${place.population}`;
//   }).join("");
//   answers.innerHTML = html
//
// }

// searchBox.addEventListener("change", displayWhatBigBoySearchBoyGivesYou)
// searchBox.addEventListener("keyup", displayWhatBigBoySearchBoyGivesYou)


fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="yelloBoy">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="yelloBoy">${this.value}</span>`);
    
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
  console.log(this.value)
}

const suggestions = document.querySelector('.answersP');

searchBox.addEventListener('change', displayMatches);
searchBox.addEventListener('keyup', displayMatches);

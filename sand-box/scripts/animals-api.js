const animalContainer = document.getElementById("animal-container");
const intro = document.getElementById("intro");
const dogBtn = document.getElementById("get-dog");
const catBtn = document.getElementById("get-cat");

const urlDog = "https://dog.ceo/api/breeds/image/random";
const urlCat = "https://api.thecatapi.com/v1/images/search";

dogBtn.addEventListener("click", getRandomAnimalImg);
catBtn.addEventListener("click", getRandomAnimalImg);

getAnimalImg = (json) => {
    animalContainer.classList.add("animals");

    let img = document.createElement("img");
    img.classList.add("random-animals");
    img.alt = "Random Animal";

    try {
        if (json.hasOwnProperty('message')) {
            img.src = json.message;
        } else {
            img.src = json[0].url;
        }
    } catch (error) {
        console.error("Error fetching animal image:", error);
    }

    animalContainer.innerHTML = "";
    animalContainer.append(img);
};

async function getRandomAnimalImg(event) {
    intro.remove();
    animalContainer.innerHTML = "";
    let apiUrl = event.target.id === "get-dog" ? urlDog : urlCat;

    try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        console.log(json);
        return getAnimalImg(json);
    } catch (error) {
        console.error("Error fetching animal image:", error);
    }
}

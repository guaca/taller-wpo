const addHeroClass = () => {
    const image = document.getElementById("hero")
    image.classList.add("hero-image")
    console.log("class added");
}
const myTimeout = setTimeout(addHeroClass, 2000);

console.log('%c HI', 'color: firebrick')



function getDogImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => useDogImages(data))
    .catch(error => document.body.innerHTML = error.message)
}

function useDogImages(images) {
    const dogImage = document.getElementById('dog-image-container')
    images.message.forEach(Image => {
        const img = document.createElement('img')
        img.src = Image;
        dogImage.appendChild(img)
    })       
}

document.addEventListener('DOMContentLoaded', () => {
    getDogImages(), getDogBreeds()
})




function getDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        let dogBreeds = document.getElementById('dog-breeds')
        let breeds = data.message

        for (const key in breeds) {
            let option = document.createElement('option')
            option.value = key;
            option.innerHTML = key;
            dogBreeds.addEventListener('click', function onClick(event) {
                event.target.style.color = 'red'
            })
            dogBreeds.appendChild(option);
        }
    })
    .catch(error => document.body.innerHTML = error.message)
}

document.addEventListener("change", event => {
    if(event.target.matches('#breed-dropdown')) {
        let dogBreeds = document.getElementById('dog-breeds')
        dogBreeds.innerHTML = ""
        const filterBreeds = dogBreeds.filter(breeds => breeds[0] === event.target.value)
        addBreedNameToDom(filterBreeds)
    }
})

let dogBreeds = []

function addBreedNameToDom(dogBreeds) {
    getDogBreeds(dogBreeds)
}
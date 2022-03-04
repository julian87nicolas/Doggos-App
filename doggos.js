const DOG_URL = "https://dog.ceo/api/breeds/image/random";
let DOG_URL_TYPES;

const doggos = document.querySelector(".doggos");

const dogSelection = document.querySelector(".doggo-select");
let selected;

selected = dogSelection.options[dogSelection.selectedIndex].value;
console.log(selected);

dogSelection.addEventListener("change", function(){
    selected = dogSelection.options[dogSelection.selectedIndex].value;
    console.log(selected);
    DOG_URL_TYPES = "https://dog.ceo/api/breed/"+ selected+"/images/random";
    console.log(DOG_URL_TYPES);
});

function addNewDoggo() {
    const img = document.createElement("img");
    img.src = "loading-gif.svg";
    doggos.appendChild(img);
    let promise;
    if(selected === "random"){
        promise = fetch(DOG_URL);
    }
    else{
        promise = fetch(DOG_URL_TYPES);
    }
    promise
    .then(function(response){
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse){
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            console.log(processedResponse.status);
        });

    console.log("This will log first");
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);


$(document).ready(function () {
    $('input.deletable').wrap('<span class="deleteicon"></span').after($('<span>x</span>').click(function () {
        $(this).prev('input').val('').trigger('change').focus();
    }));
})

const searchPlace = $("#Search-place");
const searchCocktailBtn = $("#Search-Cocktail");
const randomCocktailBtn = $("#Random-Cocktail");
const cocktailSearchTermInput = $("#cocktail-search-term");
let place = "";
let cocktail = "";
let searchBrew = $("#Search-Brewery");
let randomBrew = $("#Random-Brewery");




console.log(searchPlace);

function searchBrewery() {
    $(".none").empty()
    // Here we build the URL so we can get a data from server side.
    if (searchPlace.val().trim() !== "") {
        const place = searchPlace.val().trim();
        const queryURL = "https://api.openbrewerydb.org/breweries?by_city" + "=" + place + "&per_page=5";
        // localStorage.setItem("searchBrewery",place); // set value to local storage

        // let queryURL= "https://api.openbrewerydb.org/breweries?by_state=" + place + "&per_page=5";
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            let allBrewList = [];

            if (response.length) {
                for (let i = 0; i < 5; i++) {
                    let name = response[i].name;
                    let street = response[i].street;
                    let city = response[i].city;
                    let state = response[i].state;
                    let postal_code = response[i].postal_code;
                    let country = response[i].country;
                    let website_url = response[i].website_url;

                    $("#brewery-address").append('<ul> <a href=' + website_url + '>' + name + '</a>' + '</ul>');
                    $("#brewery-address").append('<ul>' + street + '</ul>');
                    $("#brewery-address").append('<ul>' + city + '</ul>');
                    $("#brewery-address").append('<ul>' + state + '</ul>');
                    $("#brewery-address").append('<ul>' + postal_code + '</ul>');
                    $("#brewery-address").append('<ul>' + country + '</ul><hr>');


                    const brewList = {
                        brewName: name,
                        brewNameStreet: street,
                        brewCity: city,
                        brewState: state,
                        brewPostal_code: postal_code,
                        brewCountry: country,
                        brewUrl: website_url
                    }

                    allBrewList[i] = brewList;
                    console.log(allBrewList);

                    localStorage.setItem("brewlist", JSON.stringify(allBrewList))

                }


                if (response.length) {
                    for (let i = 0; i < 5; i++) {
                        let name = response[i].name;
                        let street = response[i].street;
                        let city = response[i].city;
                        let state = response[i].state;
                        let postal_code = response[i].postal_code;
                        let country = response[i].country;

                        let website_url = response[i].website_url;


                    }

                    allBrewList[i] = brewList;
                    console.log(allBrewList);

                    localStorage.setItem("brewList", JSON.stringify(allBrewList))

                }




            }
            else { $("#brewery-address").append('<ul> Cannot find a brewery there :( </ul>'); }
        });
    };
};

function randomBrewery() {
    $(".none").empty()
    // Here we build the URL so we can get a data from server side.

    let squeryURL = "https://api.openbrewerydb.org/breweries/random";

    $.ajax({
        url: squeryURL,
        method: "GET",
        cache: false
    }).then(function (response) {
        console.log(response);
        randomlist = [];
        let name = response[0].name;
        let street = response[0].street;
        let city = response[0].city;
        let state = response[0].state;
        let postal_code = response[0].postal_code;
        let country = response[0].country;
        let website_url = response[0].website_url;

        $("#brewery-address").append('<ul> <a href=' + website_url + '>' + name + '</a>' + '</ul>');
        $("#brewery-address").append('<ul>' + street + '</ul>');
        $("#brewery-address").append('<ul>' + city + '</ul>');
        $("#brewery-address").append('<ul>' + state + '</ul>');
        $("#brewery-address").append('<ul>' + postal_code + '</ul>');
        $("#brewery-address").append('<ul>' + country + '</ul><br />');


        const randomBrewList = {
            brewName: name,
            brewNameStreet: street,
            brewCity: city,
            brewState: state,
            brewPostal_code: postal_code,
            brewCountry: country,
            brewUrl: website_url
        }

        randomlist[0] = randomBrewList;
        console.log(randomlist);

        localStorage.setItem("randomlist", JSON.stringify(randomlist))


    });

};

function searchCocktail() {
    console.log(cocktailSearchTermInput);
    $(".cocktail_text").empty();
    // Here we build the URL so we can get a data from server side.
    if (cocktailSearchTermInput.val().trim() !== "") {
        const cocktail = cocktailSearchTermInput.val().trim();
        let queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktail;
        // localStorage.setItem('search',cocktail); // set value to local storage

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            const cocktails = [];

            for (let i = 0; i < response.drinks.length; i++) {
                const cocktail = response.drinks[i];
                const instructions = cocktail.strInstructions;
                const drinkName = cocktail.strDrink;
                const ingredientsAndMeasurements = [
                    // API Data structure has 15 ingredients hard-coded as keys
                    // we are assuming that we will always have a maximum of 15 ingredients and measurements
                    { ingredient: cocktail.strIngredient1, measurement: cocktail.strMeasure1 },
                    { ingredient: cocktail.strIngredient2, measurement: cocktail.strMeasure2 },
                    { ingredient: cocktail.strIngredient3, measurement: cocktail.strMeasure3 },
                    { ingredient: cocktail.strIngredient4, measurement: cocktail.strMeasure4 },
                    { ingredient: cocktail.strIngredient5, measurement: cocktail.strMeasure5 },
                    { ingredient: cocktail.strIngredient6, measurement: cocktail.strMeasure6 },
                    { ingredient: cocktail.strIngredient7, measurement: cocktail.strMeasure7 },
                    { ingredient: cocktail.strIngredient8, measurement: cocktail.strMeasure8 },
                    { ingredient: cocktail.strIngredient9, measurement: cocktail.strMeasure9 },
                    { ingredient: cocktail.strIngredient10, measurement: cocktail.strMeasure10 },
                    { ingredient: cocktail.strIngredient11, measurement: cocktail.strMeasure11 },
                    { ingredient: cocktail.strIngredient12, measurement: cocktail.strMeasure12 },
                    { ingredient: cocktail.strIngredient13, measurement: cocktail.strMeasure13 },
                    { ingredient: cocktail.strIngredient14, measurement: cocktail.strMeasure14 },
                    { ingredient: cocktail.strIngredient15, measurement: cocktail.strMeasure15 },
                ];
                const drinkImageUrl = cocktail.strDrinkThumb;
                const cardContent = ingredientsAndMeasurements.reduce((previousItem, currentItem) => {
                    let listItem = previousItem;

                    const ingredientIsNotNullOrEmpty = currentItem.ingredient?.trim().length;
                    const measurementIsNotNullOrEmpty = currentItem.measurement?.trim().length;

                    if (ingredientIsNotNullOrEmpty || measurementIsNotNullOrEmpty) {
                        listItem += '<li>';

                        if (ingredientIsNotNullOrEmpty) { // ? is the safe navigation/Optional Chaining operator that lets you check if it has the property or method first
                            listItem += currentItem.ingredient;
                        }

                        if (ingredientIsNotNullOrEmpty && measurementIsNotNullOrEmpty) {
                            listItem += ' - ';
                        }

                        if (measurementIsNotNullOrEmpty) {
                            listItem += currentItem.measurement;
                        }

                        listItem += '</li>';
                    }

                    return listItem;
                }, '');
                const cardTemplate = `
                <br>
                    <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img src="${drinkImageUrl}" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">${drinkName}</p>
                            </div>
                        </div>
                        <div class="content">
                            Ingredients:
                            <ul>
                                ${cardContent}
                            </ul>
                            Instruction:
                            <ul>
                                ${instructions}
                            </ul>
                        </div>
                    </div>
                    </div>
                    </br>`;

                // make a card for this
                $("#cocktail-address").append(cardTemplate);

                const cocktailMetadata = {
                    drinkName,
                    drinkImageUrl,
                    ingredientsAndMeasurements,
                    instructions
                };

                cocktails.push(cocktailMetadata);
            }

            localStorage.setItem("cocktails", JSON.stringify(cocktails));
        });
    }

}

function searchRandomCocktail() {
    console.log(cocktailSearchTermInput);
    $(".cocktail_text").empty();
    if (cocktailSearchTermInput.val().trim().length >= 0) {
        const radomCocktail = cocktailSearchTermInput.val().trim();
    // Here we build the URL so we can get a data from server side.
    let queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        const randomCoctail = [];

        for (let i = 0; i < response.drinks.length; i++) {
            const randomCocktail = response.drinks[i];
            const instructions = randomCocktail.strInstructions;
            const drinkName = randomCocktail.strDrink;
            const ingredientsAndMeasurements = [
                // API Data structure has 15 ingredients hard-coded as keys
                // we are assuming that we will always have a maximum of 15 ingredients and measurements
                { ingredient: randomCocktail.strIngredient1, measurement: randomCocktail.strMeasure1 },
                { ingredient: randomCocktail.strIngredient2, measurement: randomCocktail.strMeasure2 },
                { ingredient: randomCocktail.strIngredient3, measurement: randomCocktail.strMeasure3 },
                { ingredient: randomCocktail.strIngredient4, measurement: randomCocktail.strMeasure4 },
                { ingredient: randomCocktail.strIngredient5, measurement: randomCocktail.strMeasure5 },
                { ingredient: randomCocktail.strIngredient6, measurement: randomCocktail.strMeasure6 },
                { ingredient: randomCocktail.strIngredient7, measurement: randomCocktail.strMeasure7 },
                { ingredient: randomCocktail.strIngredient8, measurement: randomCocktail.strMeasure8 },
                { ingredient: randomCocktail.strIngredient9, measurement: randomCocktail.strMeasure9 },
                { ingredient: randomCocktail.strIngredient10, measurement: randomCocktail.strMeasure10 },
                { ingredient: randomCocktail.strIngredient11, measurement: randomCocktail.strMeasure11 },
                { ingredient: randomCocktail.strIngredient12, measurement: randomCocktail.strMeasure12 },
                { ingredient: randomCocktail.strIngredient13, measurement: randomCocktail.strMeasure13 },
                { ingredient: randomCocktail.strIngredient14, measurement: randomCocktail.strMeasure14 },
                { ingredient: randomCocktail.strIngredient15, measurement: randomCocktail.strMeasure15 },
            ];
            const drinkImageUrl = randomCocktail.strDrinkThumb;
            const cardContent = ingredientsAndMeasurements.reduce((previousItem, currentItem) => {
                let listItem = previousItem;

                const ingredientIsNotNullOrEmpty = currentItem.ingredient?.trim().length;
                const measurementIsNotNullOrEmpty = currentItem.measurement?.trim().length;

                if (ingredientIsNotNullOrEmpty || measurementIsNotNullOrEmpty) {
                    listItem += '<li>';

                    if (ingredientIsNotNullOrEmpty) { // ? is the safe navigation/Optional Chaining operator that lets you check if it has the property or method first
                        listItem += currentItem.ingredient;
                    }

                    if (ingredientIsNotNullOrEmpty && measurementIsNotNullOrEmpty) {
                        listItem += ' - ';
                    }

                    if (measurementIsNotNullOrEmpty) {
                        listItem += currentItem.measurement;
                    }

                    listItem += '</li>';
                }

                return listItem;
            }, '');
            const cardTemplate = `
            <br>
                <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img src="${drinkImageUrl}" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">${drinkName}</p>
                        </div>
                    </div>
                    <div class="content">
                        Ingredients:
                        <ul>
                            ${cardContent}
                        </ul>
                        Instruction:
                        <ul>
                            ${instructions}
                        </ul>
                    </div>
                </div>
                </div>
                </br>`;

            // make a card for this
            $("#cocktail-address").append(cardTemplate);

            const cocktailMetadata = {
                drinkName,
                drinkImageUrl,
                ingredientsAndMeasurements,
                instructions
            };

            cocktails.push(cocktailMetadata);
        }

        localStorage.setItem("cocktails", JSON.stringify(cocktails));

    });

    }
}

function handleAddToFavorites() {
    console.log('ADD ME TO FAVORITE')
}

// Declare variables for button save and clear user data
const favoriteCocktail = $("#favorite-cocktail")
const favoriteBrewery = $("#favorite-brewery")
const clearBreweryBtn = $("#clear-brewery")
const clearCocktailBtn = $("#clear-cocktail")

// check if the local storage is emty or has data
const breweries = JSON.parse(localStorage.getItem("searchBrewery")) || [];
const cocktails = JSON.parse(localStorage.getItem("search")) || [];



// functions to clear user storage if searchPlace is empty
function clearBrew() {
    $(".none").empty()
    localStorage.clear();

}
function clearCocktail() {
    $(".cocktail_text").empty();
    localStorage.clear();
}

// all the button event to call for it's functions
searchBrew.on("click", searchBrewery);
randomBrew.on("click", randomBrewery);
searchCocktailBtn.on("click", searchCocktail);
randomCocktailBtn.on("click", searchRandomCocktail);
clearBreweryBtn.on("click", clearBrew)
clearCocktailBtn.on("click", clearCocktail)

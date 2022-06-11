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

function currentbrewery() {
    $(".none").empty()
    // Here we build the URL so we can get a data from server side.
    if (searchPlace.val().trim() !== "") {
        const place = searchPlace.val().trim();
        const queryURL = "https://api.openbrewerydb.org/breweries?by_city" + "=" + place + "&per_page=5";
        // localStorage.setItem("currentbrewery",place); // set value to local storage

        // let queryURL= "https://api.openbrewerydb.org/breweries?by_state=" + place + "&per_page=5";
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            let allbrewlist = [];

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


                    const brewlist = {
                        brewName: name,
                        brewNameStreet: street,
                        brewCity: city,
                        brewState: state,
                        brewPostal_code: postal_code,
                        brewCountry: country,
                        brewUrl: website_url
                    }

                    allbrewlist[i] = brewlist;
                    console.log(allbrewlist);

                    localStorage.setItem("brewlist", JSON.stringify(allbrewlist))

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

                    allbrewlist[i] = brewlist;
                    console.log(allbrewlist);

                    localStorage.setItem("brewlist", JSON.stringify(allbrewlist))

                }




            }
            else { $("#brewery-address").append('<ul> Cannot find a brewery there :( </ul>'); }
        });
    };
};

function randombrewery() {
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


        const randombrewlist = {
            brewName: name,
            brewNameStreet: street,
            brewCity: city,
            brewState: state,
            brewPostal_code: postal_code,
            brewCountry: country,
            brewUrl: website_url
        }

        randomlist[0] = randombrewlist;
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
    // Here we build the URL so we can get a data from server side.
    let queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        ran_cocktail_list = [];

        const instructions = response.drinks[0].strInstructions;
        let drink = response.drinks[0].strDrink;
        let ingredient1 = response.drinks[0].strIngredient1
        let ingredient2 = response.drinks[0].strIngredient2
        let ingredient3 = response.drinks[0].strIngredient3
        let ingredient4 = response.drinks[0].strIngredient4
        let ingredient5 = response.drinks[0].strIngredient5
        let ingredient6 = response.drinks[0].strIngredient6
        let ingredient7 = response.drinks[0].strIngredient7
        let ingredient8 = response.drinks[0].strIngredient8
        let ingredient9 = response.drinks[0].strIngredient9
        let ingredient10 = response.drinks[0].strIngredient10
        let ingredient11 = response.drinks[0].strIngredient11
        let ingredient12 = response.drinks[0].strIngredient12
        let ingredient13 = response.drinks[0].strIngredient13
        let ingredient14 = response.drinks[0].strIngredient14
        let ingredient15 = response.drinks[0].strIngredient15

        let measure1 = response.drinks[0].strMeasure1;
        let measure2 = response.drinks[0].strMeasure2;
        let measure3 = response.drinks[0].strMeasure3;
        let measure4 = response.drinks[0].strMeasure4;
        let measure5 = response.drinks[0].strMeasure5;
        let measure6 = response.drinks[0].strMeasure6;
        let measure7 = response.drinks[0].strMeasure7;
        let measure8 = response.drinks[0].strMeasure8;
        let measure9 = response.drinks[0].strMeasure9;
        let measure10 = response.drinks[0].strMeasure10;
        let measure11 = response.drinks[0].strMeasure11;
        let measure12 = response.drinks[0].strMeasure12;
        let measure13 = response.drinks[0].strMeasure13;
        let measure14 = response.drinks[0].strMeasure14;
        let measure15 = response.drinks[0].strMeasure15;

        let object1 = { ingredient: ingredient1, measure: measure1 };
        let object2 = { ingredient: ingredient2, measure: measure2 };
        let object3 = { ingredient: ingredient3, measure: measure3 };
        let object4 = { ingredient: ingredient4, measure: measure4 };
        let object5 = { ingredient: ingredient5, measure: measure5 };
        let object6 = { ingredient: ingredient6, measure: measure6 };
        let object7 = { ingredient: ingredient7, measure: measure7 };
        let object8 = { ingredient: ingredient8, measure: measure8 };
        let object9 = { ingredient: ingredient9, measure: measure9 };
        let object10 = { ingredient: ingredient10, measure: measure10 };
        let object11 = { ingredient: ingredient11, measure: measure11 };
        let object12 = { ingredient: ingredient12, measure: measure12 };
        let object13 = { ingredient: ingredient13, measure: measure13 };
        let object14 = { ingredient: ingredient14, measure: measure14 };
        let object15 = { ingredient: ingredient15, measure: measure15 };

        let cocktail_array = [object1, object2, object3, object4, object5, object6, object7,
            object8, object9, object10, object11, object12, object13, object14, object15];

        let drinkImageUrl = response.drinks[0].strDrinkThumb;

        $("#cocktail-address").append('<ul> Name: ' + drink + '</ul>');
        $("#cocktail-address").append('<ul><img src=' + drinkImageUrl + '></ul>');

        for (let i = 0; i < cocktail_array.length; i++) {
            if (cocktail_array[i].ingredient && cocktail_array[i].measure) {
                $("#cocktail-address").append('<ul>' + cocktail_array[i].ingredient + '  ' + cocktail_array[i].measure + '</ul>');
            }
            else if (cocktail_array[i].ingredient && cocktail_array[i].measure == null) {
                $("#cocktail-address").append('<ul>' + cocktail_array[i].ingredient + '</ul>');
            }
        }
        $("#cocktail-address").append('<ul> Instruction: ' + instructions + '</ul><br />');


        const random_cocktail_list = {
            N: drink,
            coctail_img: drinkImageUrl,
            coctailobject: cocktail_array,
            coctail_instr: instructions

        }

        ran_cocktail_list[0] = random_cocktail_list;
        console.log(ran_cocktail_list);

        localStorage.setItem("random_cocktaillist", JSON.stringify(ran_cocktail_list))

    });

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
const breweries = JSON.parse(localStorage.getItem("currentbrewery")) || [];
const cocktails = JSON.parse(localStorage.getItem("search")) || [];



// functions to clear user storage if searchPlace is empty
function clearBrew() {
    $(".none").empty()
    localStorage.clear();

}
function clearCock() {
    $(".cocktail_text").empty();
    localStorage.clear();
}

// all the button event to call for it's functions
searchBrew.on("click", currentbrewery);
randomBrew.on("click", randombrewery);
searchCocktailBtn.on("click", searchCocktail);
randomCocktailBtn.on("click", searchRandomCocktail);
clearBreweryBtn.on("click", clearBrew)
clearCocktailBtn.on("click", clearCock)

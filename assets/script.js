
let place = "";
let searchplace = $("#Search-place");
let cocktail = "";
let search_cocktailplace = $("#Search-cocktailplace");
let searchBrew = $("#Search-Brewery");
let searchCocktail = $("#Search-Cocktail");
let RandomBrew = $("#Random-Brewery");
let RandomCocktail = $("#Random-Cocktail");



console.log(searchplace);

function currentbrewery(place){
    $(".none").empty()
    // Here we build the URL so we can get a data from server side.
    if(searchplace.val().trim()!==""){
        place=searchplace.val().trim();
    let filter = $('#mySelectBox option').filter(':selected').text();
    let queryURL= "https://api.openbrewerydb.org/breweries?" +filter + "=" + place + "&per_page=5";

    // let queryURL= "https://api.openbrewerydb.org/breweries?by_state=" + place + "&per_page=5";
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){
        console.log(response);
if (response.length){
        for (i=0;i<5;i++){
            let name= response[i].name;
            let street= response[i].street;
            let city=response[i].city;
            let state= response[i].state;
            let postal_code= response[i].postal_code;
            let country=response[i].country;


            $("#brewery-address").append('<ul>' + name + '</ul>');
            $("#brewery-address").append('<ul>' + street + '</ul>');
            $("#brewery-address").append('<ul>' + city + '</ul>');
            $("#brewery-address").append('<ul>' + state + '</ul>');
            $("#brewery-address").append('<ul>' + postal_code + '</ul>');
            $("#brewery-address").append('<ul>' + country + '</ul><br />');

        }
    }
    else
{ $("#brewery-address").append('<ul> cannot find this brewery in this place </ul>');}
    });
};
};


function randombrewery(){
    $(".none").empty()
    // Here we build the URL so we can get a data from server side.

    let squeryURL= "https://api.openbrewerydb.org/breweries/random";

    $.ajax({
        url:squeryURL,
        method:"GET",
        cache: false
    }).then(function(response){
        console.log(response);
            let name= response[0].name;
            let street= response[0].street;
            let city=response[0].city;
            let state= response[0].state;
            let postal_code= response[0].postal_code;
            let country=response[0].country;


            $("#brewery-address").append('<ul>' + name + '</ul>');
            $("#brewery-address").append('<ul>' + street + '</ul>');
            $("#brewery-address").append('<ul>' + city + '</ul>');
            $("#brewery-address").append('<ul>' + state + '</ul>');
            $("#brewery-address").append('<ul>' + postal_code + '</ul>');
            $("#brewery-address").append('<ul>' + country + '</ul><br />');


        });
    
};


/*  
function currentcocktail(cocktail){
    console.log(search_cocktailplace);
    $(".cocktail_text").empty();
    // Here we build the URL so we can get a data from server side.
    if(search_cocktailplace.val().trim()!==""){
      cocktail=search_cocktailplace.val().trim();
    let queryURL= "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktail;
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){
        console.log(response);
        for (i=0;i<5;i++){
            let Instructions= response[i]?.strInstructions;
            let Drink= response[i]?.strDrink;
  
            $("#cocktail-address").append('<ul>' + Drink + '</ul>');
            $("#cocktail-address").append('<ul>' + Instructions + '</ul>');

        }

    });
}

};


*/

searchBrew.on("click",currentbrewery);
RandomBrew.on("click",randombrewery);
searchCocktail.on("click",currentcocktail);



let place = "";
let searchplace = $("#Search-place");
let searchBrew = $("#Search-Brewery");
let searchCocktail = $("#Search-Cocktail");
let RandomBrew = $("#Random-Brewery");
let RandomCocktail = $("#Random-Cocktail");



console.log(searchplace);

function currentbrewery(place){
    $('ul').empty();
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

searchBrew.on("click",currentbrewery);

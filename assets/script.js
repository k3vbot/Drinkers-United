
let place = "";
let searchplace = $("#Search-place");
let cocktail = "";
let search_cocktailplace = $("#Search-cocktailplace");
let searchBrew = $("#Search-Brewery");
let searchCocktail = $("#Search-Cocktail");
let randomBrew = $("#Random-Brewery");
let randomCocktail = $("#Random-Cocktail");




console.log(searchplace);

function currentbrewery(place){
    $(".none").empty()
    // Here we build the URL so we can get a data from server side.
    if(searchplace.val().trim()!==""){
        place=searchplace.val().trim();
    let queryURL= "https://api.openbrewerydb.org/breweries?by_city" + "=" + place + "&per_page=5";
    // localStorage.setItem("currentbrewery",place); // set value to local storage
   
    // let queryURL= "https://api.openbrewerydb.org/breweries?by_state=" + place + "&per_page=5";
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){
        console.log(response);
        let allbrewlist=[];

if (response.length){
        for (let i=0;i<5;i++){
            let name= response[i].name;
            let street= response[i].street;
            let city=response[i].city;
            let state= response[i].state;
            let postal_code= response[i].postal_code;
            let country=response[i].country;
            let website_url=response[i].website_url;

            $("#brewery-address").append('<ul> <a href=' + website_url + '>'+ name +'</a>'  + '</ul>');
            $("#brewery-address").append('<ul>' + street + '</ul>');
            $("#brewery-address").append('<ul>' + city + '</ul>');
            $("#brewery-address").append('<ul>' + state + '</ul>');
            $("#brewery-address").append('<ul>' + postal_code + '</ul>');
            $("#brewery-address").append('<ul>' + country + '</ul><hr>');
            

            const brewlist ={
                brewname:name,
                brewnamestreet: street,
                brewcity:city,
                brewstate:state,
                brewpostal_code:postal_code,
                brewcountry:country,
                brewUrl:website_url
            }

            allbrewlist[i]=brewlist;
           console.log(allbrewlist);

           localStorage.setItem("brewlist", JSON.stringify(allbrewlist))

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
        randomlist=[];
            let name= response[0].name;
            let street= response[0].street;
            let city=response[0].city;
            let state= response[0].state;
            let postal_code= response[0].postal_code;
            let country=response[0].country;
            let website_url=response[0].website_url;

            $("#brewery-address").append('<ul> <a href=' + website_url + '>' + name + '</a>' + '</ul>');
            $("#brewery-address").append('<ul>' + street + '</ul>');
            $("#brewery-address").append('<ul>' + city + '</ul>');
            $("#brewery-address").append('<ul>' + state + '</ul>');
            $("#brewery-address").append('<ul>' + postal_code + '</ul>');
            $("#brewery-address").append('<ul>' + country + '</ul><br />');


            const randombrewlist ={
                brewname:name,
                brewnamestreet: street,
                brewcity:city,
                brewstate:state,
                brewpostal_code:postal_code,
                brewcountry:country
            }

            randomlist[0]=randombrewlist;
           console.log(randomlist);

           localStorage.setItem("randomlist", JSON.stringify(randomlist))


        });
    
};


function currentcocktail(cocktail){
    console.log(search_cocktailplace);
    $(".cocktail_text").empty();
    // Here we build the URL so we can get a data from server side.
    if(search_cocktailplace.val().trim()!==""){
      cocktail=search_cocktailplace.val().trim();
    let queryURL= "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktail;
    // localStorage.setItem('currentcocktail',cocktail); // set value to local storage
    
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){
        console.log(response);
       // console.log(response[0].strInstructions);

      let  allcocktail_list=[];
        for (let i=0;i<response.drinks.length;i++){
            let instructions= response.drinks[i].strInstructions;
            let drink= response.drinks[i].strDrink;
            let ingredient1 = response.drinks[i].strIngredient1
            let ingredient2 = response.drinks[i].strIngredient2
            let ingredient3 = response.drinks[i].strIngredient3
            let ingredient4 = response.drinks[i].strIngredient4
            let ingredient5 = response.drinks[i].strIngredient5
            let ingredient6 = response.drinks[i].strIngredient6
            let ingredient7 = response.drinks[i].strIngredient7
            let ingredient8 = response.drinks[i].strIngredient8
            let ingredient9 = response.drinks[i].strIngredient9
            let ingredient10 = response.drinks[i].strIngredient10
            let ingredient11 = response.drinks[i].strIngredient11
            let ingredient12 = response.drinks[i].strIngredient12
            let ingredient13 = response.drinks[i].strIngredient13
            let ingredient14 = response.drinks[i].strIngredient14
            let ingredient15 = response.drinks[i].strIngredient15
          //  let ingredientarray = [Ingredient1 ,Ingredient2,Ingredient3,Ingredient4,Ingredient5,Ingredient6,
           //     Ingredient7,Ingredient8,Ingredient9,Ingredient10,Ingredient11,Ingredient12,Ingredient13,
        //   Ingredient14, Ingredient15];
            let measure1 = response.drinks[i].strMeasure1;
            let measure2 = response.drinks[i].strMeasure2;
            let measure3 = response.drinks[i].strMeasure3;
            let measure4 = response.drinks[i].strMeasure4;
            let measure5 = response.drinks[i].strMeasure5;
            let measure6 = response.drinks[i].strMeasure6;
            let measure7 = response.drinks[i].strMeasure7;
            let measure8 = response.drinks[i].strMeasure8;
            let measure9 = response.drinks[i].strMeasure9;
            let measure10 = response.drinks[i].strMeasure10;
            let measure11 = response.drinks[i].strMeasure11;
            let measure12 = response.drinks[i].strMeasure12;
            let measure13 = response.drinks[i].strMeasure13;
            let measure14 = response.drinks[i].strMeasure14;
            let measure15 = response.drinks[i].strMeasure15;


           let object1 = {ingredient: ingredient1, measure: measure1 };
           let object2 = {ingredient: ingredient2, measure: measure2 };
           let object3 = {ingredient: ingredient3, measure: measure3 };
           let object4 = {ingredient: ingredient4, measure: measure4 };
           let object5 = {ingredient: ingredient5, measure: measure5 };
           let object6 = {ingredient: ingredient6, measure: measure6 };
           let object7 = {ingredient: ingredient7, measure: measure7 };
           let object8 = {ingredient: ingredient8, measure: measure8 };
           let object9 = {ingredient: ingredient9, measure: measure9 };
           let object10 = {ingredient: ingredient10, measure: measure10 };
           let object11 = {ingredient: ingredient11, measure: measure11 };
           let object12 = {ingredient: ingredient12, measure: measure12 };
           let object13 = {ingredient: ingredient13, measure: measure13 };
           let object14 = {ingredient: ingredient14, measure: measure14 };
           let object15 = {ingredient: ingredient15, measure: measure15 };

          let cocktail_array = [object1,object2,object3,object4,object5,object6,object7,
            object8,object9,object10,object11,object12,object13,object14,object15];
          
            let imgurl = response.drinks[i].strDrinkThumb;
            console.log (cocktail_array);
     $("#cocktail-address").append('<ul> Name: ' + drink + '</ul>');
     $("#cocktail-address").append('<ul><img src=' + imgurl +'></ul>');

  for (let i=0; i< cocktail_array.length; i++)
  {
      if(cocktail_array[i].ingredient && cocktail_array[i].measure){
            $("#cocktail-address").append('<ul>' + cocktail_array[i].ingredient + '  ' + cocktail_array[i].measure + '</ul>');
        }
        else if (cocktail_array[i].ingredient && cocktail_array[i].measure == null)
        {            $("#cocktail-address").append('<ul>' + cocktail_array[i].ingredient +  '</ul>');
    }
        }
            $("#cocktail-address").append('<ul> Instruction: ' + instructions + '</ul><hr>');

            const cocktail_list ={
                cocktailname:drink,
                coctail_img: imgurl,
                coctailobject:cocktail_array,
                coctail_instr:instructions
            
            }

            allcocktail_list[i]=cocktail_list;
           console.log(allcocktail_list);

           localStorage.setItem("cocktaillist", JSON.stringify(allcocktail_list))
        }

    });
}

};


function randomcocktail(){
    console.log(search_cocktailplace);
    $(".cocktail_text").empty();
    // Here we build the URL so we can get a data from server side.
    let queryURL= "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){
        console.log(response);
        ran_cocktail_list = [];
       // console.log(response[0].strInstructions);


            let instructions= response.drinks[0].strInstructions;
            let drink= response.drinks[0].strDrink;
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
          //  let ingredientarray = [Ingredient1 ,Ingredient2,Ingredient3,Ingredient4,Ingredient5,Ingredient6,
           //     Ingredient7,Ingredient8,Ingredient9,Ingredient10,Ingredient11,Ingredient12,Ingredient13,
        //   Ingredient14, Ingredient15];
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


           let object1 = {ingredient: ingredient1, measure: measure1 };
           let object2 = {ingredient: ingredient2, measure: measure2 };
           let object3 = {ingredient: ingredient3, measure: measure3 };
           let object4 = {ingredient: ingredient4, measure: measure4 };
           let object5 = {ingredient: ingredient5, measure: measure5 };
           let object6 = {ingredient: ingredient6, measure: measure6 };
           let object7 = {ingredient: ingredient7, measure: measure7 };
           let object8 = {ingredient: ingredient8, measure: measure8 };
           let object9 = {ingredient: ingredient9, measure: measure9 };
           let object10 = {ingredient: ingredient10, measure: measure10 };
           let object11 = {ingredient: ingredient11, measure: measure11 };
           let object12 = {ingredient: ingredient12, measure: measure12 };
           let object13 = {ingredient: ingredient13, measure: measure13 };
           let object14 = {ingredient: ingredient14, measure: measure14 };
           let object15 = {ingredient: ingredient15, measure: measure15 };

          let cocktail_array = [object1,object2,object3,object4,object5,object6,object7,
            object8,object9,object10,object11,object12,object13,object14,object15];
          
            let imgurl = response.drinks[0].strDrinkThumb;
            console.log (cocktail_array);
     $("#cocktail-address").append('<ul> Name: ' + drink + '</ul>');
     $("#cocktail-address").append('<ul><img src=' + imgurl +'></ul>');

  for (let i=0; i< cocktail_array.length; i++)
  {
      if(cocktail_array[i].ingredient && cocktail_array[i].measure){
            $("#cocktail-address").append('<ul>' + cocktail_array[i].ingredient + '  ' + cocktail_array[i].measure + '</ul>');
        }
        else if (cocktail_array[i].ingredient && cocktail_array[i].measure == null)
        {            $("#cocktail-address").append('<ul>' + cocktail_array[i].ingredient +  '</ul>');
    }
        }
            $("#cocktail-address").append('<ul> Instruction: ' + instructions + '</ul><br />');


            const random_cocktail_list ={
                cocktailname:drink,
                coctail_img: imgurl,
                coctailobject:cocktail_array,
                coctail_instr:instructions
            
            }

            ran_cocktail_list[0]=random_cocktail_list;
           console.log(ran_cocktail_list);

           localStorage.setItem("random_cocktaillist", JSON.stringify(ran_cocktail_list))

        });

};


// Declare variables for button save and clear user data
let favoriteCocktail = $("#favorite-cocktail")
let favoriteBrewery = $("#favorite-brewery")
let clearBrewery = $("#clear-brewery")
let clearCocktail = $("#clear-cocktail")

// check if the local storage is emty or has data
var brewArray = JSON.parse(localStorage.getItem("currentbrewery")) || [];
var cocktailArray = JSON.parse(localStorage.getItem("currentcocktail")) || [];

// functions to save input data into user storage
/*function saveBrewery() {

    if(searchplace.val().trim()!==""){
        place=searchplace.val().trim();
        brewArray.push(place);
    localStorage.setItem("currentbrewery",JSON.stringify(brewArray));
    }
}*/

/*function saveCocktail(){
     if(search_cocktailplace.val().trim()!==""){
      cocktail=search_cocktailplace.val().trim();
      cocktailArray.push(cocktail);
    localStorage.setItem('currentcocktail',JSON.stringify(cocktailArray)); 
    }
}*/

// functions to clear user storage if searchplace is empty
function clearBrew() {
   // if(searchplace.val().trim()==="") {
        localStorage.clear();
   // }
}
function clearCock() {
   // if(searchplace.val().trim()==="") {
        localStorage.clear();
   // }
}

// all the button event to call for it's functions
searchBrew.on("click",currentbrewery);
randomBrew.on("click",randombrewery);
searchCocktail.on("click",currentcocktail);
randomCocktail.on("click",randomcocktail);
//favoriteBrewery.on("click",saveBrewery); 
//favoriteCocktail.on("click",saveCocktail);
clearBrewery.on("click",clearBrew)
clearCocktail.on("click",clearCock)
let data = [];
async function getMeals(mealName = "pizza") {
    try {
        let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${mealName}`);
        let finalResult = await response.json();  
        data = finalResult.recipes;
        display(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function display(arr) {
    var container = "";
    for (var i = 0; i < arr.length; i++) {
        container += `
        <div class="col-md-3">  <!-- fixed class 'col md-3' to 'col-md-3' -->
            <div class="card">
              <img src="${arr[i].image_url}" class="card-img-top w-100" alt="${arr[i].title}"> // alt 3shan law elsora mzaharetsh
              <div class="card-body">
                <p class="card-text">${arr[i].title}</p> <!-- Showing the actual title of the recipe -->
              </div>
            </div>
        </div>`;
        
    }
    document.getElementById("rowBody").innerHTML = container;
}

// var btns = document.querySelectorAll('.nav-link');
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', function(e) {
//         getMeals(e.target.innerHTML);  
//     });
// }

// getMeals();  
var btn = document.querySelectorAll(".nav-link");
for(var i =0 ; i<btn.length;i++)
{
    btn[i].addEventListener('click',function(e)
{
    getMeals(e.target.innerHTML)
})
}
getMeals()




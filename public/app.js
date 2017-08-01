// var app = function() {
//   var ul = document.createElement("ul");
//   ul.classList.add("cat")

//   var li1 = document.createElement("li");
//   li1.innerText = "Name: Montgomery"

//   var li2 = document.createElement("li");
//   li2.innerText = "Favourite food: Ice cream"

//   var li3 = document.createElement("li");

//   var img = document.createElement("img");
//   img.src = "https://img.buzzfeed.com/buzzfeed-static/static/2015-10/25/6/enhanced/webdr13/original-grid-image-30390-1445768125-14.jpg?crop=499:749;0,1&downsize=715:*&output-format=auto&output-quality=auto";

//   li3.appendChild(img);
//   ul.appendChild(li1);
//   ul.appendChild(li2);
//   ul.appendChild(li3);

//   var cats = document.getElementById("cats");
//   cats.appendChild(ul);
// }

var addCat = function(name, food, source) {
  var ul = createUl();
  var liName = createLiName(name);
  var liFood = createLiFavFood(food);
  var liPic = createLiPic();
  var img = createImg(source);

  appendElements(ul, liName, liFood, liPic, img);
}

var createUl = function() {
  var ul = document.createElement("ul");
  ul.classList.add("cat");
  return ul;
}

var createLiName = function(name) {
  var li = document.createElement("li");
  li.innerText = "Name: " + name;
  return li;
}

var createLiFavFood = function(food) {
  var li = document.createElement("li");
  li.innerText = "Favourite food: " + food;
  return li;
}

var createLiPic = function() {
  var li = document.createElement("li");
  return li;
}

var createImg = function(source) {
  var img = document.createElement("img");
  img.src = source;
  img.width = "500";

  return img;
}

var appendElements = function(ul, liName, liFood, liPic, img) {
  liPic.appendChild(img);
  ul.appendChild(liName);
  ul.appendChild(liFood);
  ul.appendChild(liPic);

  var cats = document.querySelector("#cats");
  cats.appendChild(ul);
}


var app = function() {
  for (var cat of catArray) {
    addCat(cat.name, cat.food, cat.src);
  }
}

window.addEventListener('load', app);
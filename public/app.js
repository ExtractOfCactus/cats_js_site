var app = function() {
  var ul = document.createElement("ul");
  ul.classList.add("cat")

  var li1 = document.createElement("li");
  li1.innerText = "Name: Montgomery"

  var li2 = document.createElement("li");
  li2.innerText = "Favourite food: Ice cream"

  var li3 = document.createElement("li");

  var img = document.createElement("img");
  img.src = "https://img.buzzfeed.com/buzzfeed-static/static/2015-10/25/6/enhanced/webdr13/original-grid-image-30390-1445768125-14.jpg?crop=499:749;0,1&downsize=715:*&output-format=auto&output-quality=auto";

  li3.appendChild(img);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  var cats = document.getElementById("cats");
  cats.appendChild(ul);
}






window.addEventListener('load', app);
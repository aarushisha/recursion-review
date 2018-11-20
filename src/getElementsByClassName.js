// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };


// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  //You should use document.body, element.childNodes, and element.classList
var body = document.body;
var elementsArray = [];
var hasClassName = function(body) {
if (body.classList && body.classList.contains(className)) {
    elementsArray.push(body);
  }
  if (body.hasChildNodes()) {
    for (var i = 0; i < body.childNodes.length; i++) {
      hasClassName(body.childNodes[i]);
    }
  }
}
hasClassName(body);
return elementsArray;

};

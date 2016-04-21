


var inputName = prompt("Please enter your name");

function userName(inputName, pageId) {
  var f = function(page) {
    console.log('Welcome to the ' + page + ', ' + inputName); // remembers name
    var node = document.createElement('p');
    var textnode = document.createTextNode('Welcome to the ' + page + ', ' + inputName);
    node.appendChild(textnode);
    document.getElementById(pageId).appendChild(node);
  };
  return f;
}

//here cometh the Closure

var pageName = userName(inputName, 'welcome');
console.log('');
pageName('Portfolio Page');
pageName('About Page');

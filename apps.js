function useNext(next) {
  console.log('Here\'s a few things I like doing in my free time:');
  document.getElementById('interests').innerHTML = 'Here\'s a few things I like doing in my free time:';

  var likes = ['coding', 'gaming', 'reading'];
  likes.forEach(function(el) { next(el);});
}

function hobbies(s) {
  console.log('  I enjoy ' + s );
  var node = document.createElement('li');
  var textnode = document.createTextNode(s);
  node.appendChild(textnode);
  document.getElementById('hobbies').appendChild(node);
}

useNext(hobbies);

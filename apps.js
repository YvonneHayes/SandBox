function useNext(next) {
  console.log('Here\'s a few things I like doing in my free time:');

  var likes = ['coding', 'gaming', 'reading'];
  likes.forEach(function(el) { next(el);});
  console.log('');
}

function hobbies(s) { console.log('  I enjoy ' + s ); }
// function goo(s) { console.log('  The string "' + s + '" has ' + s.length + ' characters in it'); }

useNext(hobbies);
// useNext(goo);

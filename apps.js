var p = document.querySelector('p');

function setRouteMappings() {
  page.base('/');

  page('', index);
  page('about', about);
  page('contact', contact);
  page('game',game);
  page('contact/:contactName', contact);
  page('*', notfound); // catch-all

  page();
}

function index() { p.textContent = 'viewing index (home)'; }
function about() { p.textContent = 'viewing about'; }
function contact(ctx) {
  p.textContent = 'viewing contact ' + (ctx.params.contactName || '');
}
function notfound() {
  p.innerHTML ='<h3>OMG, page not found!</h3><img src="lost.jpg"></img>';
}

// function game() { p.textContent = 'play the game!';}

function game (){
  $('p').text('PLAY IT!');
}

setRouteMappings();

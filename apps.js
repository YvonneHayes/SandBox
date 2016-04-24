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

function index() {
  $('p').text('viewing index (home)');
};
function about() {
  $('p').text('viewing about');
};
function contact(ctx) {
  $('p').text('viewing contact ' + (ctx.params.contactName || ''));
}
function notfound() {
  $('p').text('<h3>OMG, page not found!</h3><img src="lost.jpg"></img>');
}

function game (){
  $('p').text('play the game!');
}

setRouteMappings();

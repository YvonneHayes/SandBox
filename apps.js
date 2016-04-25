var p = document.querySelector('p');

function setRouteMappings() {
  page.base('/');

  page('', index);
  page('about', about);
  page('contact', contact);
  page('game',game);
  page('blog',blog);
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
  $('p').text('Nothing to see here. Keep moving!');
}

function game (){
  $('p').text('play the game!');
}

function blog (){
  $('p').text('read the blog!');
}

setRouteMappings();

var Data = {
  name: 'Yvonne',
  like: 'gaming',
  city: 'portland'
};

var templateScript = $('#tryThis').html();

var template = Handlebars.compile(templateScript);

$(document.body).append(template(Data));

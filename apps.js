var Data = {
  name: 'Yvonne',
  like: 'gaming',
  city: 'portland'
};


var Data2 = {
  homeTown: 'Vienna',
  quote:'Bessa ois a Sta am Schaedl',
  headline: '<h1>I AM YELLING!!!</h1>'
};

var templateScript = $('#tryThis').html();

var template = Handlebars.compile(templateScript);

$('#One').append(template(Data));

var apptemplate = $('#tryThisToo').html();
var template2 = Handlebars.compile(apptemplate);

$('#Two').append(template2(Data2));

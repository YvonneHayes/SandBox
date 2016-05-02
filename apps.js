


$(document).ready(function(){
  $('button').click(function(){
    var userName = $('input:text').val();
    useName(userName);
    localStorage.setItem('currentUser', userName);
    return userName;
  });
});


function useName(currentUser, goodDayOrBadDay) { //params of currentUser and what kind of day it is
  var makeGoodorBad = function(goodOrBad) {  //makeGoodorBad - to display correct kind of day later
    var node = document.createElement('p'); //creating proper elements and appending to DOM
    var textnode = document.createTextNode('Hey ' + currentUser + ', ' + goodOrBad);
    node.appendChild(textnode);
    document.getElementById('output2').appendChild(node);
  };
  return makeGoodorBad;
}

  //here cometh the Closure
function message (currentUser){

  var goodDay = useName(currentUser, 'itsgood');
  goodDay('what a great day for biking!');

  var badDay = useName(currentUser, 'itsbad');
  badDay('maybe leave the bike at home today....');

  var soSoDay = useName(currentUser, 'itssoso');
  soSoDay('Conditions are not ideal. Depends on you, dude...');
};



//Event Listeners for Submit Button1
submitButton.addEventListener('click', validateUserName);

//Validating the input for the Name Form
function validateUserName(e) {
  e.preventDefault();
  var userName = document.forms['nameInput']['fname'].value;
  if (userName == null || userName == '') {
    $('#userAlert').show();
    $('#output2').hide();
  }else {
    message(userName);
    $('#userAlert').hide();
    $('#output2').show();
    $('#nameForm').hide();
  }
};

//Event Listener for Submit Button2
submitButton2.addEventListener('click', validateLocation);

//Validating the input for the Location Form

function validateLocation(e){
  e.preventDefault();
  var locationName = document.forms['locationData']['flocationname'].value;
  if (locationName == null || locationName == ''){
    $('#userAlert2').show();
  };
}

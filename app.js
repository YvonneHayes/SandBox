var player = {
  name: 'Link',
  hp: 100
};

function getsHit(){
  var newHp = player.hp - 5;
  console.log(newHp);
  player.hp = newHp;
}

getsHit();

getsHit();
getsHit();
getsHit();

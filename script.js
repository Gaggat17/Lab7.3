$(document).ready(MyRandom);
myr = []
myinput = []
function MyRandom(){
  myr.push(Math.round(Math.random()*3)+1);
  for(var i=0;i<myr.length;i++)
      setTimeout(glow,(i+1)*3000,myr[i]);
}
function glow(n){
  console.log(n);
  switch(n){
    case 1:
      $('#my1').css('background','#a8adff');
      break;
     case 2:
      $('#my2').css('background','#865b60');
      break;
     case 3:
      $('#my3').css('background','#ffc34a');
      break;
     case 4:
      $('#my4').css('background','#7eff42');
      break;
  }
  setTimeout(function(){
    $('#my1').css('background','#0062ff');
    $('#my2').css('background','#ff0019');
    $('#my3').css('background','#ffaa00');
    $('#my4').css('background','#3ec400');
  },1200);
}
function compare(){
  var k =0;
  for(var i=0;i<myinput.length;i++)
    if(myr[i]===myinput[i])
      k++;
  if(k==myinput.length)
    return true;
  return false;
}
$('#my1').click(function(){
  myinput.push(1);
  if(compare()){
    if(myinput.length==myr.length){
      myinput = [];
      MyRandom();
      var right = new Audio('right.mp3');
      right.play();
    }
  }else{ 
    var losesound = new Audio('lose.mp3');
    losesound.play();
    alert("You Lose");
}
  $('#my1').css('background','#a8adff');
  setTimeout(function(){
    $('#my1').css('background','#0062ff');
  },2000);
});
$('#my2').click(function(){
  myinput.push(2);
  if(compare()){
    if(myinput.length==myr.length){
      myinput = [];
      MyRandom();
      var right = new Audio('right.mp3');
      right.play();
    }
  }else { 
      var losesound = new Audio('lose.mp3');
      losesound.play();
      alert("You Lose");
  }
  $('#my2').css('background','#bf4e58');
  setTimeout(function(){
    $('#my2').css('background','#ff0019');
  },2000);
});
$('#my3').click(function(){
  myinput.push(3);
  if(compare()){
    if(myinput.length==myr.length){
      myinput = [];
      MyRandom();
      var right = new Audio('right.mp3');
      right.play();
    }
  }else{ 
    var losesound = new Audio('lose.mp3');
    losesound.play();
    alert("You Lose");
}
  $('#my3').css('background','#ffc34a');
  setTimeout(function(){
    $('#my3').css('background','#ffaa00');
  },2000);
});
$('#my4').click(function(){
  myinput.push(4);
  if(compare()){
    if(myinput.length==myr.length){
      myinput = [];
      MyRandom();
      var right = new Audio('right.mp3');
      right.play();
    }
  }else{ 
    var losesound = new Audio('lose.mp3');
    losesound.play();
    alert("You Lose");
}
  $('#my4').css('background','#7eff42');
  setTimeout(function(){
    $('#my4').css('background','#3ec400');
  },2000);
});
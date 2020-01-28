<input id="night_day"type="button" value="night" onclick="
var target =document.querySelector('body');
if(document.querySelector('#night_day').value==='night'){
  target.style.backgroundColor='black';
  target.style.color='white';
  document.querySelector('#night_day').value='day';
  alert('nighit mode');
  var alist = document.querySelectorAll('a');
var i = 0;
while(i < alist.length){
alist[i].style.color='powderblue';
i=i+1;
}
  } else {
target.style.backgroundColor='white';
target.style.color='black';
  document.querySelector('#night_day').value='night';
 alert('day mode');var alist = document.querySelectorAll('a');
var i = 0;
while(i < alist.length){
alist[i].style.color='black';
i=i+1;
}
}
">

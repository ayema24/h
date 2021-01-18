function fella() {
  // body...


var form= document.getElementById('see');
var messge=document.getElementById('hi');
var button=document.getElementById('me');
var user=document.getElementById('firm').value;
var pass=document.getElementById('for').value;
var sick=document.getElementById('jo');
if (pass.trim()  ==''){
  messge.style.opacity=1;
  return false;
}
else if(user.trim() ==''){
  messge.style.opacity=1
 return false
}
else if(user.length <= 4){
  return false
}
else if(pass.length <=5){
   sick.style.opacity=1;
   return false;
}
else{
  messge.style.opacity=0
  true
}
}
function valie(){
  var pass=document.getElementById('firm').value;
  var man=document.getElementById('hi');
  var me=document.getElementById('for').value;
  
  if(pass.length <= 4){
    man.style.opacity=1;
    return false
  }
    
    
  else{
    man.style.opacity=0;
    true
  }
}


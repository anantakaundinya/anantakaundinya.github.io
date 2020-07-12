$(document).ready(function(){

    $("button").click(function(){
    $("div").animate({left: '250px'});
  }); 
  
  });
  function pandemiccure(arg1) {
	document.getElementById("pandemiccure").innerHTML=arg1;
	//console.log(arg1);
}
  function ingredients(arg1) {
  document.getElementById("ingredients").innerHTML=arg1;
  //console.log(arg1);
  }
  function procedure(arg2) {
    document.getElementById("procedure").innerHTML=arg2;
  //console.log(arg1);
  }
      

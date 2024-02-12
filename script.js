
var a = document.getElementById("it1");


var options = document.getElementsByName("options");
var showra = document.getElementById("showrating");

var b = 0;
a.onclick=function(){
    document.getElementById("ThankYouState").style.display="grid";
    
    document.getElementById("ratingState").style.display="none";

    for(var i =0 ;i<=options.length;i++){
        if(options[i].checked==true){
            b = i+1;
            
            showra.innerHTML="You selected "+b+" out of 5";
            break;
        }
    }


}

document.getElementById("estudante").addEventListener("click", myFunction);
function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("estudante");

    // Get the output text
    var curso = document.getElementById("curso0");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        curso.classList.replace("invisivel", "visivel");

    } else{
        curso.classList.replace("visivel","invisivel");

    }

}
document.getElementById("naoestudante").addEventListener("click", myFunction2);
function myFunction2(){

    var checkBox2= document.getElementById("naoestudante");
    var curso = document.getElementById("curso0");
    if(checkBox2.checked== true){
        curso.classList.replace("visivel","invisivel");
    }

}
function myFunction(y) {
    if (y.matches) {
        document.getElementById("icon").addEventListener("click", function() {
            console.log("clica");
            document.querySelector(".stroke ul li:nth-child(2)").classList.toggle("transform");
            document.querySelector(".stroke ul li:nth-child(3)").classList.toggle("transform");
            document.querySelector(".stroke ul li:nth-child(4)").classList.toggle("transform");
            document.querySelector(".stroke ul li:nth-child(5)").classList.toggle("transform");


        });

        document.getElementById("icon").addEventListener("click", function() {
            console.log("clica1");
            document.querySelector("#icon div:first-child").classList.toggle("active1");
            document.querySelector("#icon div:nth-child(2)").classList.toggle("active2");
            document.querySelector("#icon div:nth-child(3)").classList.toggle("active3");
        });

        /*// If media query matches
        var prevScrollpos = window.pageYOffset;
        /*window.onscroll = function() {
            document.getElementById("navbar").style.top = "0";
        };*/
        /*} else {
            var prevScrollpos = window.pageYOffset;
            /* window.onscroll = function() {
                 var currentScrollPos = window.pageYOffset;
                 if (prevScrollpos > currentScrollPos) {
                     document.getElementById("navbar").style.top = "0";
                 } else {
                     document.getElementById("navbar").style.top = "-360px";
                 }
                 prevScrollpos = currentScrollPos;
             };*/
    }
}

var z = window.matchMedia("(max-width: 830px)");
myFunction(z) ;// Call listener function at run time
z.addListener(myFunction); // Attach listener function on state changes
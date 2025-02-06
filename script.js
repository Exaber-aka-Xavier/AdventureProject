// Add JavaScript code for your web site here and call it from index.html.
document.addEventListener("DOMContentLoaded", (event) => {
    // Add JavaScript code for your web site here and call it from index.html.
    
    let openingScene = document.querySelector (".opening");
    let oneOption = document.querySelector (".option_one");
    let twoOption = document.querySelector (".option_two");
    let pathLeft = document.querySelector (".leftPath");
    let leave = document.querySelector (".exit");
    let esc = document.querySelector (".exiting");
    let dash = document.querySelector (".run");
    let kaboom = document.querySelector (".crash");
    let pathRight = document.querySelector(".rightPath");
    let aOption = document.querySelector (".option_a");
    let bOption = document.querySelector (".option_b");
    let pathWest = document.querySelector (".westPath");
    let trot = document.querySelector (".walk");
    let huu = document.querySelector (".uhh");
    let pathEast = document.querySelector(".eastPath");
    let question = document.querySelector (".buh");
    let skiddadle = document.querySelector (".running");
    let holyCrap = document.querySelector (".hiya");
    let ded = document.querySelector (".death")
    let woof = document.querySelector(".acceptance")
    let arwoo = document.querySelector(".gang")

    oneOption.addEventListener("click", function () {
       pathLeft.style.display = "block";
       openingScene.style.display = "none";
    });
    twoOption.addEventListener("click", function () {
        pathRight.style.display = "block";
        openingScene.style.display = "none";
     });
     leave.addEventListener("click", function () {
        esc.style.display = "block";
        pathLeft.style.display = "none";
     });
     dash.addEventListener("click", function () {
        kaboom.style.display = "block";
        esc.style.display = "none";
     });
     aOption.addEventListener("click", function () {
      pathWest.style.display = "block";
      pathRight.style.display = "none";
   });
   trot.addEventListener("click", function () {
      huu.style.display = "block";
      pathWest.style.display = "none";
   }); 

   woof.addEventListener("click", function () {
      arwoo.style.display = "block";
      huu.style.display = "none";
   }); 

   bOption.addEventListener("click", function () {
      pathEast.style.display = "block";
      pathRight.style.display = "none";
   });

   question.addEventListener("click", function () {
      skiddadle.style.display = "block";
      pathEast.style.display = "none";
   });

   holyCrap.addEventListener("click", function () {
      ded.style.display = "block";
      skiddadle.style.display = "none";
   });




});
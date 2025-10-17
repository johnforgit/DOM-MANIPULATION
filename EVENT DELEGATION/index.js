document.querySelector(".Basketball").addEventListener(
     "click",
     function(e) {
          console.log("Basketball is clicked");
          const target = e.target;
          if(target.matches('li')) {
               target.style.backgroundColor = 'lightgrey'
          }
     }
);

document.querySelector(".Football").addEventListener(
     "click",
     function(e) {
          console.log("Football is clicked");
          const target = e.target;
          if(target.matches('li')) {
               target.style.backgroundColor = 'lightgrey'
          }
     }
);

document.querySelector(".Swimming").addEventListener(
     "click",
     function(e) {
          console.log("Swimming is clicked");
          const target = e.target;
          if(target.matches('li')) {
               target.style.backgroundColor = 'lightgrey'
          }
     }
);

document.querySelector(".Rugby").addEventListener(
     "click",
     function(e) {
          console.log("Rugby is clicked");
          const target = e.target;
          if(target.matches('li')) {
               target.style.backgroundColor = 'lightgrey'
          }
     }
);

document.querySelector(".Tennis").addEventListener(
     "click",
     function(e) {
          console.log("Tennis is clicked");
          const target = e.target;
          if(target.matches('li')) {
               target.style.backgroundColor = 'lightgrey'
          }
     }
);

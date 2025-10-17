document.querySelector("#sports-list").addEventListener(
     "click",
     function(e) {
          console.log(e.target.getAttribute('id') + 'is clicked');
          const target = e.target;
          if(target.matches('li')) {
               target.style.backgroundColor='lightgrey';
          }
     }
)

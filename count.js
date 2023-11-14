
let count = 0;
      const increment = document.querySelector(".increment");
      const decrement = document.querySelector(".decrement");
      const reset = document.querySelector(".reset");
      const value = document.querySelector(".value");

      function handlevaluecolor() {
        value.innerHTML = count;

        if (count > 0) {
          value.style.color = "green";
        } else if (count < 0) {
          value.style.color = "red";
        } else {
          value.style.color = "black";
        }
      }

      increment.addEventListener("click", () => {
        count++;
        handlevaluecolor();
      });

      decrement.addEventListener("click", () => {
        count--;
        handlevaluecolor();
      });
      reset.addEventListener("click", () => {
        count = 0;
        handlevaluecolor();
      });



// let count = 0;
//       const increment = document.querySelector(".increment");
//       const decrement = document.querySelector(".decrement");
//       const reset = document.querySelector(".reset");
//       const value = document.querySelector(".value");

//       function valuecolor(){
//         value.innerHTML = count;

//         if (count > 0) {
//             value.Style.color = "green";
//          }else if (count < 0) {
//             value.style.color = "red";
//          }else {
//             value.style.color = "black"
//          }
//       }

//       increment.addEventListener("click", () => {
//         count++;
//         valuecolor();
//     });

//       decrement.addEventListener("click", () => {
//         count--;
//         valuecolor();
//       });

//       reset.addEventListener("click", () => {
//         count=0;
//         valuecolor();
//       });

// let count = 0;
//      const increment = document.querySelector(".increment");
//      const decrement = document.querySelector(".decrement");
//      const reset = document.querySelector(".reset");
//      const value = document.querySelector(".value");
     
//      function Handlevaluecolor(){
//         value.innerHTML = count;

//         if (count > 5) {
//             value.style.color = "green";
//         }else if (count < 5){
//             value.style.color = "red";
//          }else{
//             value.style.color = "black";
//          }
//     }
    
//     increment.addEventListener("click", () => {
//         count++;
//         Handlevaluecolor();
//     });

//     decrement.addEventListener("click", () => {
//         count--;
//         Handlevaluecolor();

//     });

//     reset.addEventListener("click", () => {
//         count = 5;
//         Handlevaluecolor();
//     });


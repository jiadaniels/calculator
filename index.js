let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByTagName("button"));

buttons.map(button => {
    button.addEventListener('click' , (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case 'Del':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
                break;
            // case 'x':
            //     if(display.innerText){
            //             display.innerText = '*'
            //     }
            //     break;

            // default:
            //     display.innerText += e.target.innerText;
        }
    });
});


// let multiplication = document.getElementById('multiply').addEventListener("click", "*");

// multiplication.map(multiply => {

// })

// multiply = (num1, num2) =>{
//     return num1*num2;
// };


// let divide = document.getElementById('divide');

// let small_display = document.getElementById('small-display');

// small_display.map(small-display => {
//     small-display.addEventListener('click' , (e) => {
//         switch(e.target.innerText){
//             case 'AC':
//                 display.innerText = '';
//                 break;
//             case 'Del':
//                 if(display.innerText){
//                     display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 } catch {
//                     display.innerText = 'Error';
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });
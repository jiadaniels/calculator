let display = document.getElementById('display');
let output = document.getElementById('output');
let buttons = Array.from(document.getElementsByTagName("button"));

buttons.map(button => {
    button.addEventListener('click' , (e) => {
        switch(e.target.innerText){
            case 'AC':
                output.innerText = '';
                display.innerText = '';
                break;
            case 'Del':
                output.innerText = output.innerText.slice(0, -1);
                display.innerText = '';
                break;
            case '=':
                try{
                   display.innerText = eval(output.innerText);
                } catch {
                    output.innerText = 'Error';
                }
                break;
            // case 'x':
            //     if(display.innerText){
            //             display.innerText = '*'
            //     }
            //     break;

            default:
                output.innerText += e.target.innerText;
        }
    });
});
let display = document.getElementById('display');
let input = document.getElementById('input');
let buttons = Array.from(document.getElementsByTagName('button'));

buttons.map(button => {
    button.addEventListener('click' , (e) => {
        switch(e.target.innerText){
            case 'AC':
                input.innerText = '';
                display.innerText = '';
                break;
            case 'Del':
                input.innerText = input.innerText.slice(0, -1);
                display.innerText = '';
                break;
            case '=':
                try{
                   display.innerText = eval(input.innerText);
                   console.log(input.innerText)
                } catch {
                    input.innerText = 'Error';
                }
                break;
            default:
                input.innerText += e.target.innerText;
        }
        
    });
});

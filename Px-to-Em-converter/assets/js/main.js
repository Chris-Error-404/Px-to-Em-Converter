//To avoid form refersh so this script prevents the default behaviour of form submissiom
document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault(); //This prevents the form from refreshing

    //custim form logic can be here
});


const submitButton = document.getElementById('submit'); //submit button
const result = document.getElementById('displayResult'); //to tatget where the result will be displayed 
const errorMessaage = document.getElementById('errorMessage'); //error message

//    errorMessaage.innerHTML ="Please enter a value before you convert";


submitButton.addEventListener('click', () => {
    const userInput = document.getElementById('pxInput').value;

    //conditional to handle errors
    if(userInput == ''){
        errorMessaage.style.display = 'block';
        errorMessaage.innerHTML ="Please enter a value before you convert";
    }

    else{
        const valueInEm = userInput / 16; //formula

        errorMessaage.innerHTML =""; // to remove text the error <p> tag  
        errorMessaage.style.display = 'none'; //sets the display back to none so that the spacing is back to normal basically vaninishes it so it wont show when the user inputs a value after making a mistake to trigger it

        result.innerHTML = valueInEm;
    }
});
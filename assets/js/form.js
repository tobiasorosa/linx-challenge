/**
 * Store form data on local storage
 * @param {event} e 
 */
function storeData(e) {
    //  Prevent from submitting
    e.preventDefault();

    // State variables and its input values
    var inputName = document.getElementById('name-input').value;
    var inputEmail = document.getElementById('email-input').value;
    var inputCpf = document.getElementById('cpf-input').value;
    
    // Detect wich radio input is checked
    const getSexInput = () => {
        if (document.getElementById('male-input').checked) {
            return document.getElementById('male-input').value;
        } else { return document.getElementById('female-input').value }
    }

    //  Set the radio value to variable
    var inputSex = getSexInput();

    //  JSON variable as a JSON string
    var data = JSON.parse(localStorage.getItem("userData"));

    //  if data is empty set it as an empty array
    if (data == null) {
        localStorage.setItem("userData", "[]");
        data = [];
    }

    //  Set array of inputs
    var localData = {
        name: inputName,
        email: inputEmail,
        cpf: inputCpf,
        sex: inputSex
    }

    //  Push array of inputs to the data JSON
    data.push(localData);

    //  Set Local Storage as the new acquired data
    localStorage.setItem("userData", JSON.stringify(data));

    //  Reset form inputs
    document.getElementById('newsletter-form').reset();
}
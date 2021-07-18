function storeData() {
    var inputName = document.getElementById('name-input').value;
    var inputEmail = document.getElementById('email-input').value;
    var inputCpf = document.getElementById('cpf-input').value;
    const sexInput = () => {
        if (document.getElementById('male-input').isChecked) {
            return document.getElementById('male-input').value;
        } else { return document.getElementById('female-input').value }
    }

    localStorage.setItem("name", inputName.value);
    localStorage.setItem("email", inputEmail.value);
    localStorage.setItem("cpf", inputCpf.value);
    localStorage.setItem("sex", sexInput());
}
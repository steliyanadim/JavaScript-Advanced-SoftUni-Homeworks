function validate() {
    const isCompany = document.querySelector('#userInfo .pairContainer input[type="checkbox"]');
    isCompany.addEventListener('change', showInfo);

    const submitBttn = document.querySelector('#submit');
    submitBttn.addEventListener('click', submit);

    function showInfo() {
        const companyInfo = document.querySelector('#companyInfo');

        if (isCompany.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }

    function submit(event) {

        event.preventDefault()
        const username = document.querySelector('input#username');
        const password = document.querySelector('input#password');
        const confirmPass = document.querySelector('input#confirm-password');
        const email = document.querySelector('input#email');
        const valid = document.querySelector('div#valid');
        let isValid = true;


        validateInput(username, new RegExp('^[a-zA-Z0-9]{3,20}$', 'g'));
        validateInput(password, new RegExp('^[a-zA-Z0-9_]{5,15}$', 'g'));
        validateInput(confirmPass, new RegExp('^[a-zA-Z0-9_]{5,15}$', 'g'));
        validateInput(email, new RegExp('^[^@.]+@[^@]*\.[^@]*$', 'g'));

        if(confirmPass.value !== password.value){
            setBorder(confirmPass);
            setBorder(password)
        }

        if (isCompany.checked) {
            const companyNumber = document.querySelector('input#companyNumber');
            const number = Number(companyNumber.value)
            validateCompanyNumber(companyNumber, number)
        }

        if (isValid) {
            valid.style.display = 'block';
        }else{
            valid.style.display = 'none';
        }

        function validateInput(input, pattern) {
            if (!pattern.test(input.value)) {
                setBorder(input);
            } else {
                removeBorder(input);
            }
        }
        function validateCompanyNumber(input,number){
            if (number < 1000 || number > 9999) {
                setBorder(input);
            } else {
                removeBorder(input);
            }
        }

        function setBorder(input) {
            input.style.borderColor = 'red';
            isValid = false;
        }
        function removeBorder(input){
            input.style.borderColor = "";
        }
    }
}

function validate() {
    const input = document.querySelector('#email')
    input.addEventListener('change', hasChanges)

    function hasChanges(){
        const value = document.querySelector('#email').value;
        const pattern = /^[a-z]+@{1}[a-z]+.{1}[a-z]+$/gm
        const isMatch = pattern.exec(value)
        console.log(isMatch);
        if(!isMatch){
            input.classList.add("error")
        }else{
            input.classList.remove("error");
        }
    }
    
}
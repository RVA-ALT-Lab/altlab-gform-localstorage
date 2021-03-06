// Jeff's way better way to do it. Tom's, too.
// https://codepen.io/pudinski/pen/abvwOyG

window.addEventListener('DOMContentLoaded', () => {
        if (document.querySelector('.gform_footer input[type="submit"]')) {
            addClickListenerThatWritesLocalStorage();
            readUserInfofromLocalStorage();
        }
});

function addClickListenerThatWritesLocalStorage() {
        document.querySelector('.gform_footer input[type="submit"]').addEventListener('click', writeUserInfotoLocalStorage);
}

function writeUserInfotoLocalStorage() {
        var firstname_input = document.querySelector('.name_first input[type="text"]').value;
        var lastname_input = document.querySelector('.name_last input[type="text"]').value;
        var email_input = document.querySelector('.ginput_container.ginput_container_email input[type="text"]').value;
        localStorage.setItem('userDetails', JSON.stringify({
            firstname: firstname_input, 
            lastname: lastname_input,
            email: email_input
        }));
}

function readUserInfofromLocalStorage() {
        var userDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (localStorage.getItem('userDetails')) {
            document.querySelector('.name_first input[type="text"]').value = userDetails.firstname;
            document.querySelector('.name_last input[type="text"]').value = userDetails.lastname;
            document.querySelector('.ginput_container.ginput_container_email input[type="text"]').value = userDetails.email;
        }
}

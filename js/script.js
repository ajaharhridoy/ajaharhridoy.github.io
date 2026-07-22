// Dark Mode

const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {
    darkBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            darkBtn.innerHTML="☀️ Light Mode";
        }else{
            darkBtn.innerHTML="🌙 Dark Mode";
        }

    });
}

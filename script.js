const cookiebox = document.querySelector(".wrapper"),
    buttons = document.querySelectorAll(".button");

const executecodes = () => {
    if(document.cookie.includes("codinglab")) return;
    cookiebox.classList.add("show");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            cookiebox.classList.remove("show");

            if (button.id == "acceptbtn") {
                document.cookie = "cookieBy = codinglab; max-age=" + 50 * 60 * 24 * 30;
            }
        });
    });
};
window.addEventListener("load", executecodes);
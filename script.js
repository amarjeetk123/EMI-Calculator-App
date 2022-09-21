function getMonthlyEMI() {
    if ((document.getElementById("amount_input").value == "") || (document.getElementById("rate_input").value == "") || (document.getElementById("month_input").value == "")) {
        document.getElementById("output").innerHTML =
            "Please Fill All The Information."
    }
    else {
        let amount = document.getElementById("amount_input").value;
        let rate = document.getElementById("rate_input").value;
        let month = document.getElementById("month_input").value;
        let p = amount;
        let r = rate / 12 / 100;
        let n = month;
        let output = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
        document.getElementById("output").innerHTML =
            "Your Monthly EMI is:-" + Math.ceil(output);
    }
}

// code for dark mode
const check_box = document.getElementById("check")
check_box.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    let text = document.querySelectorAll("span");
})
// code for dark mode end



// code for changing the text color as night mode
let body_color = document.getElementById("body")
let span = document.getElementById("heading")
let text_color = document.querySelectorAll(".text")

let primary_color = "#ffffff"
let secondry_color = "#120E43"
check_box.addEventListener("click", (arr) => {  // adding event listener to the toggle of night mode changer

    let bg = window.getComputedStyle(body_color).backgroundColor;
    console.log(bg)
    if (bg == "rgba(0, 0, 0, 0)") {
        text_color[0].style.color = primary_color
        text_color[1].style.color = primary_color
        text_color[2].style.color = primary_color
    }
    else {
        text_color[0].style.color = secondry_color
        text_color[1].style.color = secondry_color
        text_color[2].style.color = secondry_color
    }
})

// code for reload the pade after clicking on reset button
function reset() {
    location.reload();
}
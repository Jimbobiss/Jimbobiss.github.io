//project tab eopen/close transition code
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

//Age setting script
const age = document.getElementById("age-container");
const BIRTH_DAY = "1996-01-26";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const now = new Date();

const ageResult = Math.floor((now - BIRTH_DAY_DATE.getTime()) / 3.15576e+10);

age.innerHTML = ageResult;

//Navbar responsive class adding function
function navFunc() {
    let x = document.getElementById("topnav");
    if (x.className === "nav-items") {
        x.className += " responsive";
    } else {
        x.className = "nav-items";
    }
}
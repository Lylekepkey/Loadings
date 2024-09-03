// Is java-script needed for a
// nav?? At times yes
// but not always
// 


// Could've done this with 
// CSS to
document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("itemSelect");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");
    const closeBtn = document.getElementsByClassName("close")[0];

    select.addEventListener("change", function () {
        const selectedValue = this.value;
        if (selectedValue) {
        modalTitle.textContent = selectedValue;

        modal.style.display = "block";
        }
    });

    closeBtn.onclick = function () {
        modal.style.display = "none";
        select.selectedIndex = 0;
    };

    window.onclick = function (event) {
        if (event.target == modal) {
        modal.style.display = "none";
        select.selectedIndex = 0;
        }
    };
});
let links = document.querySelectorAll("#link-list a");

links.forEach(link => {
    if (link.getAttribute("href").startsWith("http://")) {
        link.style.textDecoration = "underline dotted";
    }
});


let items = document.querySelectorAll("#tree li");

items.forEach(li => {
    let hidden = li.querySelector("ul");
    if (hidden) {
        li.addEventListener("click", function (e) {
            hidden.classList.toggle("active");
            e.stopPropagation();
        });
    }
});


let list = document.getElementById("bookList");
let items2 = list.querySelectorAll("li");
let lastSelectedIndex = null;

items2.forEach((item, index) => {
    item.addEventListener("click", function (e) {
        if (e.ctrlKey) {
            item.classList.toggle("selected");
            lastSelectedIndex = index;
        } else if (e.shiftKey && lastSelectedIndex !== null) {
            let start = Math.min(lastSelectedIndex, index);
            let end = Math.max(lastSelectedIndex, index);
            for (let i = 0; i < items2.length; i++) {
                if (i >= start && i <= end) {
                    items2[i].classList.add("selected");
                }
            }
        } else {
            items2.forEach(el => el.classList.remove("selected"));
            item.classList.add("selected");
            lastSelectedIndex = index;
        }
    });
});




function sortTableByColumn(table, columnIndex) {
    const rows = Array.from(table.rows).slice(1); 

    const isNumeric = !isNaN(rows[0].cells[columnIndex].innerText);

    rows.sort((rowA, rowB) => {
        const valueA = rowA.cells[columnIndex].innerText;
        const valueB = rowB.cells[columnIndex].innerText;

        return isNumeric ? Number(valueA) - Number(valueB): valueA.localeCompare(valueB);
    });

    rows.forEach(row => table.appendChild(row));
}
document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("peopleTable");
    const cells_ = table.rows[0].cells;

    for (let i = 0; i < cells_.length; i++) {
        cells_[i].addEventListener("click", () => sortTableByColumn(table, i));
    }
});




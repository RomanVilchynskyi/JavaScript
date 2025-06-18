function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function createBlock() {

    let block = $('<div></div>')
    .addClass('block')
    .css('backgroundColor', getRandomColor())
    .on('dblclick', function() { 
        $(this).remove()
    })
    return block;
}

$('#addBlockBtn').on('click', ()=>{
    let newBlock = createBlock();
    $('#blockContainer').append(newBlock);
})



let id = 0;

$("#btn").on("click", function () {
    $("#1, #2, #3").css("background-color", "rgb(157, 157, 157)");

    if (id === 0) {
        $("#1").css("background-color", "red");
        id++;
    } else if (id === 1) {
        $("#2").css("background-color", "yellow");
        id++;
    } else if (id === 2) {
        $("#3").css("background-color", "green");
        id = 0;
    }
});

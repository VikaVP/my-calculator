// let bil1
// let bil2
// let hasil
// let opr
// let opr_seleksi = false

// function cal(num) {
//     let display = document.getElementById('panel').value
//     if (display == '0') {
//         display = num
//     } else {
//         display += num
//     }
//     document.getElementById('panel').value = display
// }
function cal(num) {
    form.panel.value = form.panel.value + num;
}

function C() {
    form.panel.value = "";
}
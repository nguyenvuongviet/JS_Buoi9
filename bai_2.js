/**
 * Tính giá trị trung bình 
 * ** Đầu vào
 * - Nhập vào 5 biến:
 *      + Biến num_1,
 *      + Biến num_2,
 *      + Biến num_3,
 *      + Biến num_4,   
 *      + Biến num_5
 * 
 * ** Xử lý
 * - Biến tbc = (num_1 + num_2 + num_3 + num_4 + num_5) / 5
 * 
 * ** Đầu ra
 * - Show tbc
 */

let btnTinhTBC = document.getElementById("btnTinhTBC");
btnTinhTBC.onclick = function () {
    let num_1 = document.getElementById("number_1").value;
    let num_2 = document.getElementById("number_2").value;
    let num_3 = document.getElementById("number_3").value;
    let num_4 = document.getElementById("number_4").value;
    let num_5 = document.getElementById("number_5").value;
    let tbc = 0;
    
    tbc = "Trung bình cộng: " + (+num_1 + +num_2 + +num_3 + +num_4 + +num_5) / 5;
    document.getElementById("pTBC").innerHTML = tbc;
}
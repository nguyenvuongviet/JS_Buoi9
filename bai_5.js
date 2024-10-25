/**
 * Tính tổng 2 ký số
 * ** Đầu vào
 * - Nhập vào số 2 chữ số
 *      + Biến so
 * 
 * ** Xử lý
 * - Biến soDonVi = so%10,
 * - Biến soChuc = so/10,
 * - Biến tong = soDonVi + soChuc
 * 
 * ** Đầu ra
 * - Show tong
 */

let btnTongKySo = document.getElementById("btnTongKySo");
btnTongKySo.onclick = function () {
    let so = document.getElementById("so").value;

    soDonVi = +so%10;
    soChuc = so/10 | 0;

    let tong = 0;

    tong = "Tổng ký số của số là: " + (soDonVi + soChuc);
    document.getElementById("pTongKySo").innerHTML = tong;
};
/**
 * Quy đổi tiền
 * ** Đầu vào
 * - Biến tienUSD = 23.500,
 * - Biến soTien: người dùng nhập
 * 
 * ** Xử lý
 * - Biến tienVND = tienUSD * soTien
 * 
 * ** Đầu ra
 * - Show tienVND
 */

let btnQuyDoi = document.getElementById("btnQuyDoi");
btnQuyDoi.onclick = function () {
    let soTien = document.getElementById("soTien").value;
    
    let tienVND = 0;
    tienVND = "Số tiền quy đổi:" + " " + soTien * 23500 + " " + "VND";
    document.getElementById("pQuyDoi").innerHTML = tienVND
}
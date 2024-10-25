/**
 * Tính tiền lương nhân viên
 * ** Đầu vào
 * - Biến luongNgay = 100.000,
 * - Biến soNgayLam: người dùng nhập
 * 
 * ** Xử lý
 * - Biến luong = luongNgay * soNgayLam
 * 
 * ** Đầu ra
 * - Show luong
 */

let btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function () {
    let luongNgay = 100000;
    let soNgayLam = document.getElementById("soNgayLam").value;
    let luong = 0;
    
    luong = "Tổng tiền lương: " +  luongNgay * soNgayLam;
    document.getElementById("pLuong").innerHTML = luong;
};
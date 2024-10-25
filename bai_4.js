/**
 * Tính diện tích, chu vi hình chữ nhật
 * ** Đầu vào
 * - Nhập vào 2 biến chiều dài, chiều rộng hình chữ nhật:
 *      + Biến chieuDai,
 *      + Biến chieuRong
 * 
 * ** Xử lý
 * - Biến dienTich = chieuDai * chieuRong
 * - Biến chuVi = (2 * chieuDai) + (2 * chieuRong)
 * 
 * ** Đầu ra
 * - Show dienTich
 * - Show chuVi
 */

let btnTinh = document.getElementById("btnTinh");
btnTinh.onclick = function () {
    let chieuDai = document.getElementById("chieuDai").value;
    let chieuRong = document.getElementById("chieuRong").value;
    
    let chuVi = 0;
    let dienTich = 0;
    
    dienTich = "Diện tích hình chữ nhật: " + chieuDai * chieuRong;
    document.getElementById("pDienTich").innerHTML = dienTich;

    chuVi = "Chu vi hình chữ nhật: " + ((2 * chieuDai) + (2 * chieuRong));
    document.getElementById("pChuVi").innerHTML = chuVi;
}

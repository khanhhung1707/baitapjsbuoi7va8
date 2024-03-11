var soNguyen = [];

    function addNumber() {
        var content = document.getElementById("numberInput");
        var number = parseInt(content.value);

        if (!isNaN(number)) {
            soNguyen.push(number);
            content.value = ''; 
            updateNumberList();
        } else {
            alert("Vui lòng nhập một số nguyên.");
        }
    }

    function updateNumberList() {
        var numberList = document.getElementById("numberList");
        numberList.innerHTML = "Danh sách các số trong mảng: " + soNguyen.join(', ');
    }

    function tinhSum() {
        var soDuong = soNguyen.filter(function (number) {
            return number > 0;
        });

        var sum = soDuong.reduce(function (total, num) {
            return total + num;
        }, 0);

        document.getElementById("result").innerHTML = "Tổng các số dương trong mảng là: " + sum;
    }

    function demSoDuong() {
        var soDuong = soNguyen.filter(function (number) {
            return number > 0;
        });

        document.getElementById("result").innerHTML = "Số lượng số dương trong mảng là: " + soDuong.length;
    }

    
    function timSoNhoNhat() {
        if (soNguyen.length === 0) {
            alert("Mảng rỗng. Vui lòng thêm số vào mảng trước.");
            return;
        }
    
        var minNumber = Math.min.apply(null, soNguyen);
        document.getElementById("result").innerHTML = "Số nhỏ nhất trong mảng là: " + minNumber;
    }
    
    function timSoDuongNhoNhat() {
        var soDuong = soNguyen.filter(function (number) {
            return number > 0;
        });
    
        if (soDuong.length === 0) {
            document.getElementById("result").innerHTML = "Không có số dương trong mảng.";
            return;
        }
    
        var soDuongNhoNhat = Math.min.apply(null, soDuong);
        document.getElementById("result").innerHTML = "Số dương nhỏ nhất trong mảng là: " + soDuongNhoNhat;
    }

    function timSoChanCuoiCung() {
        var soChan = soNguyen.filter(function (number) {
            return number % 2 === 0;
        });
    
        if (soChan.length === 0) {
            document.getElementById("result").innerHTML = "Mảng không có giá trị chẵn.";
            return -1;
        }
    
        var soChanCuoiCung = soChan[soChan.length - 1];
        document.getElementById("result").innerHTML = "Số chẵn cuối cùng trong mảng là: " + soChanCuoiCung;
        return soChanCuoiCung;
    }

    function doiCho() {
        var position1 = parseInt(document.getElementById("position1").value);
        var position2 = parseInt(document.getElementById("position2").value);

        if (isNaN(position1) || isNaN(position2) || position1 < 0 || position2 < 0 || position1 >= soNguyen.length || position2 >= soNguyen.length) {
            alert("Vị trí không hợp lệ. Vui lòng nhập lại.");
            return;
        }
    
        var temp = soNguyen[position1];
        soNguyen[position1] = soNguyen[position2];
        soNguyen[position2] = temp;
    
        updateNumberList();
        document.getElementById("result").innerHTML = "Đã đổi chỗ giá trị ở vị trí " + position1 + " và " + position2 + ".";
    }

    function sapXep() {
        if (soNguyen.length === 0) {
            alert("Mảng rỗng. Vui lòng thêm số vào mảng trước.");
            return;
        }
    
        soNguyen.sort(function (a, b) {
            return a - b;
        });
    
        updateNumberList();
        document.getElementById("result").innerHTML = "Đã sắp xếp mảng theo thứ tự tăng dần.";
    }
    
    function timSoNguyenToDauTien() {
        if (soNguyen.length === 0) {
            alert("Mảng rỗng. Vui lòng thêm số vào mảng trước.");
            return;
        }
    
        for (var i = 0; i < soNguyen.length; i++) {
            if (isPrime(soNguyen[i])) {
                document.getElementById("result").innerHTML = "Số nguyên tố đầu tiên trong mảng là: " + soNguyen[i];
                return soNguyen[i];
            }
        }
    
        document.getElementById("result").innerHTML = "Không có số nguyên tố trong mảng.";
        return -1;
    }
    
    function isPrime(number) {
        if (number < 2) {
            return false;
        }
    
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
    
        return true;
    }

    var soThuc = [];

function addSoThuc() {
    var soThucInput = document.getElementById("soThucInput");
    var number2 = parseFloat(soThucInput.value.replace(',', '.'));

    if (!isNaN(number2)) {
        soThuc.push(number2);
        soThucInput.value = '';
        updateSoThucList();
    } else {
        alert("Vui lòng nhập một số thực.");
    }
}

function updateSoThucList() {
    var soThucList = document.getElementById("soThucList");
    soThucList.innerHTML = "Danh sách các số thực trong mảng: " + soThuc.join(', ');
}

function demSoNguyen() {
    var integerCount = 0;

    for (var i = 0; i < soThuc.length; i++) {
        if (Number.isInteger(soThuc[i])) {
            integerCount++;
        }
    }

    document.getElementById("result").innerHTML = "Trong mảng số thực, có " + integerCount + " số nguyên.";
}

function soSanhDuongAm() {
    var soDuong = soNguyen.filter(function (number) {
        return number > 0;
    });

    var soAm = soNguyen.filter(function (number) {
        return number < 0;
    });
    if (soDuong.length > soAm.length) {
        document.getElementById("result").innerHTML = "Số lượng số dương nhiều hơn số âm.";
    } else if (soDuong.length < soAm.length) {
        document.getElementById("result").innerHTML = "Số lượng số âm nhiều hơn số dương.";
    } else {
        document.getElementById("result").innerHTML = "Số lượng số dương và số âm bằng nhau.";
    }
}

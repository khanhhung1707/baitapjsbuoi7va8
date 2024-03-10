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
    
$(document).ready(function () {
    let body = document.querySelector('body');
    let game = document.getElementById("game");
    let popup_game = document.querySelector("#popup_game");
    let dotphao = document.getElementById("dotphao");
    let popup_dotphao = document.querySelector("#popup_dotphao");
    let dongho = document.getElementById("dongho");
    let popup_dongho = document.querySelector("#popup_dongho");
    let phatnhac = document.getElementById("phatnhac");
    let popup_phatnhac = document.querySelector("#popup_phatnhac");
    const container = document.querySelector('#phaohoa');
    const fireworks = new Fireworks(container);

    //Mặc định khi load web
    $('#baophu').hide();
    $('#thiep').hide();
    $('#play').hide();
    randLoiChuc();
    randCauDoi();
    fireworks.start();
    dotphao.style.color = 'blue';
    body.style.background = 'black';
    popup_dotphao.innerHTML = 'Nhấn vào để tắt pháo hoa';

    //Chờ 5 giây sau khi tải trang sẽ hiển thị thiệp
    $('#thiep').delay(5000).show('slow');
    $('#baophu').delay(5000).show('slow');
    
    //Xử lý khi nhấn vào icon đốt pháo
    $("#dotphao").on("click", function () {
        xulyphaohoa();
    })
    
    //Hàm gọi xử lý pháo hoa
    function xulyphaohoa(){
        if(dotphao.style.color == 'red'){
            fireworks.start();
            dotphao.style.color = 'blue';
            body.style.background = 'black';
            document.querySelector('.tieude').style.color = 'red';
            document.querySelector('#loainam').style.color = 'rgb(196, 243, 120)';
            document.querySelector('#ngaythang').style.color = 'rgb(196, 243, 120)';
            popup_dotphao.innerHTML = 'Nhấn vào để tắt pháo hoa';
        }
        else{
            fireworks.stop()
            dotphao.style.color = 'red';
            body.style.background = 'rgb(153, 28, 28)';
            document.querySelector('.tieude').style.color = 'yellow';
            document.querySelector('#loainam').style.color = 'rgb(88, 236, 162)';
            document.querySelector('#ngaythang').style.color = 'rgb(88, 236, 162)';
            popup_dotphao.innerHTML = 'Nhấn vào để kích hoạt pháo hoa';
        }
    }

    //Bắt sự kiện đóng thiệp
    document.getElementById('dongthiep').onclick = function(){
        $('#thiep').hide('slow');
        if($('#play').is(':hidden')){
            $('#baophu').hide();
        }
    }
    dongho.onclick = function(){
        if ($('#thiep').is(":hidden")) {
            randLoiChuc();
            $('#thiep').show("slow");
            $('#baophu').show();
        }
    }

    //Bắt sự kiện phát nhạc
    document.getElementById('dongphatnhac').onclick = function(){
        $('#play').hide('slow');
        if($('#thiep').is(':hidden')){
            $('#baophu').hide();
        }
    }
    phatnhac.onclick = function(){
        if ($('#play').is(":hidden")) {
            $('#play').show("slow");
            $('#baophu').show();
        }
    }

    //Ngẫu nhiên câu đối khi click vào màn hình
    $('body').on('click', function(){
        randCauDoi();
    })

    //Bắt sự kiện khi nhấp đúp ngoài thẻ nổi
    $('body').on('dblclick', function(e){
        if (e.target.parentNode != 'play' && e.target.parentNode != 'thiep') {
            $('#baophu').hide();
            $('#play').hide('slow');
            $('#thiep').hide('slow');
        }
    })

    //Xử lý sự kiện popup
    game.onmousemove = function(){
        popup_game.style.display = "block";
    }
    game.onmouseleave = function(){
        popup_game.style.display = 'none';
    }
    dotphao.onmousemove = function(){
        popup_dotphao.style.display = "block";
    }
    dotphao.onmouseleave = function(){
        popup_dotphao.style.display = 'none';
    }
    dongho.onmousemove = function(){
        popup_dongho.style.display = "block";
    }
    dongho.onmouseleave = function(){
        popup_dongho.style.display = 'none';
    }
    phatnhac.onmousemove = function(){
        popup_phatnhac.style.display = "block";
    }
    phatnhac.onmouseleave = function(){
        popup_phatnhac.style.display = 'none';
    }

    //Random câu đối
    function randCauDoi(){
        let trai =  document.getElementById('caudoi_trai');
        let phai =  document.getElementById('caudoi_phai');
        switch (Math.floor(Math.random() * 6) + 1) {
            case 1:
                trai.innerHTML = '<p class="p1">Tân</p><p class="p2">Niên</p><p class="p3">Phú</p><p class="p4">Quý</p>';
                phai.innerHTML = '<p class="p1">Vạn</p><p class="p2">Sự</p><p class="p3">Bình</p><p class="p4">An</p>';
                break;
            case 2:
                trai.innerHTML = '<p class="p1">Khai</p><p class="p2">Xuân</p><p class="p3">Đắc</p><p class="p4">Phúc</p>';
                phai.innerHTML = '<p class="p1">Nhất</p><p class="p2">Niên</p><p class="p3">An</p><p class="p4">Lành</p>';
                break;
            case 3:
                trai.innerHTML = '<p class="p1">Cung</p><p class="p2">Chúc</p><p class="p3">Tân</p><p class="p4">Xuân</p>';
                phai.innerHTML = '<p class="p1">Vạn</p><p class="p2">Sự</p><p class="p3">Như</p><p class="p4">Ý</p>';
                break;
            case 4:
                trai.innerHTML = '<p class="p1">Phát</p><p class="p2">Tài</p><p class="p3">Phát</p><p class="p4">Lộc</p>';
                phai.innerHTML = '<p class="p1">Công</p><p class="p2">Thành</p><p class="p3">Danh</p><p class="p4">Toại</p>';
                break;
            case 5:
                trai.innerHTML = '<p class="p1">Thành</p><p class="p2">Công</p><p class="p3">Liên</p><p class="p4">Miên</p>';
                phai.innerHTML = '<p class="p1">Hạnh</p><p class="p2">Phúc</p><p class="p3">Triền</p><p class="p4">Miên</p>';
                break;
            case 6:
                trai.innerHTML = '<p class="p1">Hòa</p><p class="p2">Khí</p><p class="p3">Sinh</p><p class="p4">Tài</p>';
                phai.innerHTML = '<p class="p1">Tân</p><p class="p2">Niên</p><p class="p3">Hạnh</p><p class="p4">Phúc</p>';
                break;
            default:
                break;
        }
    }
    //Random lời chúc
    function randLoiChuc(){
        let noidung = document.getElementById('noidungthiep');
        switch (Math.floor(Math.random() * 6) + 1) {
            case 1:
                noidung.innerHTML = 'Mọi thứ lại bắt đầu khi năm mới đang đến. Chúc bạn tôi một năm mới đầy hạnh phúc và những tháng đầy triển vọng nhé. Happy New Year!';
                break;
            case 2:
                noidung.innerHTML = 'Chúc bạn có 1 bầu trời sức khỏe, 1 biển cả tình thương, 1 đại dương tình bạn, 1 điệp khúc tình yêu, 1 người yêu chung thủy, 1 sự nghiệp sáng ngời, 1 gia đình thịnh vượng.';
                break;
            case 3:
                noidung.innerHTML = 'Chúc bạn mạnh khoẻ, nhiều niềm vui, vững bước trên con đường phía trước, đưa chiến hạm đến với những đại dương lớn. Happy New Year!';
                break;
            case 4:
                noidung.innerHTML = 'Tôi ước năm mới sẽ mang đến tất cả những gì mà các bạn mong muốn, mọi sự đều thuận lợi. Chúc mừng năm mới, an khang thịnh vượng!';
                break;
            case 5:
                noidung.innerHTML = 'Chúc bạn: 1 năm mới, 1 tuổi mới, nhiều bạn mới, nhiều hiểu biết mới, mãi mãi hạnh phúc bên gia đình và những người thân yêu nhất nhé.';
                break;
            case 6:
                noidung.innerHTML = 'Chúc cả gia đình bạn vạn sự như ý, tỉ sự như mơ, triệu triệu bất ngờ, không chờ cũng đến!';
                break;
            default:
                break;
        }
    }
})
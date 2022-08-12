
$(document).ready(function () {
    $('#thongbao').removeClass('hide');
    $('#thongbao').delay(2000).slideUp(1000);
});

function animation(){
    document.getElementById('tieude').style.animation='hieuung4 2000ms infinite';
}
function noanimation(){
    document.getElementById('tieude').style.animation='none';
}
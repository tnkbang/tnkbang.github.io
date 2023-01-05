window.onload = function(){
    printTime();
};

function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var day = d.getDay();
    var vnCurrentTime = moment.tz("Asia/Saigon");
    var dd = vnCurrentTime.date();
    var mm = vnCurrentTime.month()+1;
    var yy = vnCurrentTime.year();	
    var ld = getLunarDate(dd, mm, yy);
    switch (day){
        case 0:
            day = "Chủ nhật";
            break;
        case 1:
            day = "Thứ hai";
            break;
        case 2:
            day = "Thứ ba";
            break;
        case 3:
            day = "Thứ tư";
            break;
        case 4:
            day = "Thứ năm";
            break;
        case 5:
            day = "Thứ sáu";
            break;
        case 6:
            day = "Thứ 7";
            break;
    }
    if(hours<10){
        hours = "0" + hours;
    }
    if(mins<10){	
        mins = "0" + mins;
    }
    if(secs<10){
        secs = "0" + secs;
    }
    if(ld.month == 1){
        switch(ld.day){
            case 1:
                document.getElementById('ngaythang').innerHTML = 'Mồng một tết';
                break;
            case 2:
                document.getElementById('ngaythang').innerHTML = 'Mồng hai tết';
                break;
            case 3:
                document.getElementById('ngaythang').innerHTML = 'Mồng ba tết';
                break;
            case 4:
                document.getElementById('ngaythang').innerHTML = 'Mồng bốn tết';
                break;
            default:
                document.getElementById('ngaythang').innerHTML = ld.day + "-" + ld.month + "-" + ld.year;
                break;
        }
    }
    else{
        document.getElementById('ngaythang').innerHTML = ld.day + "-" + ld.month + "-" + ld.year;
    }
   
    document.getElementById('loainam').innerHTML = getYearCanChi(ld.year);
    document.getElementById('popup_dongho').innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);

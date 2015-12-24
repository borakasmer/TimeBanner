
var window_focus = true;
$(document).ready(function () {    
    $(window).focus(function () {
        window_focus = true;           
        })
        .blur(function () {
            window_focus = false;        
    });

    $(function () {
        //Scroll'un en son konumu saklanır.
        var lastScroll = 0;
        $(window).scroll(function (event) {
            //Geçerli scroll pozisyonu alınır
            var st = $(this).scrollTop();
            //Yukarı aşağıya olan scroll hareketi belirlenir
            calculateTime();
            if (p.percent > 0.13) {
                countDown();
                console.log("start");
            }
            else {
                stopTimer();
                console.log("stop");
            }
            //if (st > lastScroll) {
            //    countDown();
            //    console.log("start");
            //}
            //else {
            //    stopTimer();
            //    console.log("stop");
            //}
            //Updates scroll position
            lastScroll = st;
        });
    });
});

var timer = null;
var sec = 0;
var doIt = true;
function countDown() {
    if (doIt) {
        doIt = false;
        timer = setInterval(function () {
            if (window_focus == true) {
                $('#hideMsg span').text(sec++/100);
            }
        }, 10);
    }
}

function stopTimer() {
    clearInterval(timer);
    doIt = true;
}

var p;
var result;
function calculateTime() {
    p = {
        scrollTop: $(window).scrollTop(),
        windowHeight: $(window).height(),
        contentTop: $('#Banner5').position().top,
        contentHeight: $('#Banner5').height()
    };

    // ekrandaki bannerın scroll'a göre giriş ve çıkış kordinat sınırları belirlenir.
    p.lowerBound = p.contentTop - p.windowHeight;
    p.upperBound = p.contentTop + p.contentHeight;

    // banner'ın görünen kısmının tüm yüksekliğe oranın x2 katı alınır.
    p.percent = (p.scrollTop - p.lowerBound) / (p.upperBound - p.lowerBound) * 2;

    result = p.percent * 50 / 0.13;
    result = result > 100 ? 100 : result;
    result = result < 0 ? 0 : result;
    $('#hideMsg2 span').text(result.toFixed(2) + "%");
}
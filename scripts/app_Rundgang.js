const isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));

if(/Mobi/.test(navigator.userAgent) && isMobile){
    var doc = window.document;
    var el = doc.documentElement;

    var requestFullScreen = el.requestFullscreen || el.mozRequestFullScreen || el.webkitRequestFullScreen || el.msRequestFullscreen;

    requestFullScreen.call(el);

    window.location = "Rundgang/Handy/output/Aula.html";
}
else{
    window.location = "Rundgang/output/Aula.html";
}


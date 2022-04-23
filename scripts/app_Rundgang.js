const isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));

if(/Mobi/.test(navigator.userAgent) && isMobile){
    window.location = "Rundgang/Handy/output/Aula.html";
}
else{
    window.location = "Rundgang/output/Aula.html";
}


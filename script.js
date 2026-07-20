(function () {
    var root = document.getElementById('student');
    function cycle() {
        root.classList.add('writing');
        setTimeout(function () { root.classList.add('pausing'); }, 3600);
        setTimeout(function () { root.classList.add('flipping'); }, 4500);
        setTimeout(function () { root.classList.remove('writing'); }, 4900);
        setTimeout(function () {
            root.classList.remove('pausing');
            root.classList.remove('flipping');
            void root.offsetWidth;
        }, 5500);
        setTimeout(cycle, 6400);
    }
    cycle();
})();
//write function to switch between pages
function showPage(pageId){
    const pages=document.querySelectorAll(".page");
    pages.forEach(page => page.classList.remove("active"));

    document.getElementById(pageId).classList.add("active");

}
//write function to open pdf
var isInViewport = function(elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.bottom <= ((window.innerHeight + distance.height - 100) || (document.documentElement.clientHeight + distance.height -100)) 
    );
};

var showItem = function () {
    var findMe = document.querySelectorAll('.animate__animated');    
    findMe.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("animate__fadeInUp");
        }
    });
};

imagesLoaded( document.querySelector('.masonry-layout'), function( instance ) {
    let magicGrid = new MagicGrid({
        container: ".masonry-layout", // Required. Can be a class, id, or an HTMLElement.
        static: true, // Required for static content.
        // items: 11, // For a grid with 20 items. Required for dynamic content.
        animate: false, // Optional.
        gutter: 0,
        useMin: true, 
    });

    magicGrid.listen();
    window.addEventListener('scroll', showItem, false);
    showItem();
});

var menu = document.getElementById('menu');
var myCollapsible = document.getElementById('navbarSupportedContent');

myCollapsible.addEventListener('hide.bs.collapse', function () {
    menu.classList.remove("is-open");
})

myCollapsible.addEventListener('show.bs.collapse', function () {
    menu.classList.add("is-open");
})

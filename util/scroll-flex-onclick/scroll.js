function scrollLeft(el){
    if(!el) return;
    el.scrollLeft = el.scrollLeft-300;
}

function scrollRight(el){
    if(!el) return;
    el.scrollLeft = el.scrollLeft+300;
}

export default {
    scrollLeft, scrollRight
}
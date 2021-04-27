function scrollLeft(el){
    if(!el) return;
    el.scrollLeft = el.scrollLeft+200;
}

function scrollRight(el){
    if(!el) return;
    el.scrollLeft = el.scrollLeft-200;
}

export default {
    scrollLeft, scrollRight
}
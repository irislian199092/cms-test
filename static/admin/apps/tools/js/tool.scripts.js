$(function() {
	
function animationHover(o, e) {
    o = $(o),
    o.hover(function() {
        o.addClass("animated " + e)
    },
    function() {
        window.setTimeout(function() {
            o.removeClass("animated " + e)
        },
        2e3)
    })
}
    $(".file-box").each(function() {
        animationHover(this, "pulse")
    })
})

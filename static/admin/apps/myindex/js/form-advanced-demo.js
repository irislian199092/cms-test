$(document).ready(function() {
    var o = $(".image-crop > img");
    $(o).cropper({
        aspectRatio: 1.618,
        preview: ".img-preview",
        done: function() {}
    });
    var r = $("#inputImage");
    window.FileReader ? r.change(function() {
        var e, i = new FileReader,
        t = this.files;
        t.length && (e = t[0], /^image\/\w+$/.test(e.type) ? (i.readAsDataURL(e), i.onload = function() {
            r.val(""),
            o.cropper("reset", !0).cropper("replace", this.result)
        }) : showMessage("请选择图片文件"))
    }) : r.addClass("hide"),
    $("#download").click(function() {
        window.open(o.cropper("getDataURL"))
    }),
    $("#zoomIn").click(function() {
        o.cropper("zoom", .1)
    }),
    $("#zoomOut").click(function() {
        o.cropper("zoom", -.1)
    }),
    $("#rotateLeft").click(function() {
        o.cropper("rotate", 45)
    }),
    $("#rotateRight").click(function() {
        o.cropper("rotate", -45)
    }),
    $("#setDrag").click(function() {
        o.cropper("setDragMode", "crop")
    })
});

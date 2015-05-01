function resizeCanvas(image, canvas) {
 //   document.body.appendChild(image);
    canvas.width = image.offsetWidth;
    canvas.style.width = image.offsetWidth.toString() + "px";
    canvas.height = image.offsetHeight;
    canvas.style.height = image.offsetHeight.toString() + "px";
    //document.body.removeChild(image);
}

function showMsg(msg) {
    document.getElementById("msg").innerHTML = msg;
}

var canvas = document.getElementById('workspace');
var ctx = canvas.getContext('2d');
var img;

var takePicture = document.querySelector("#take-picture");
takePicture.onchange = function (event) {
    var files = event.target.files;
    if (files && files.length === 1) {
        showMsg("顔検出中・・・");
        var url = URL.createObjectURL(files[0]);
        img = document.getElementById('face-source');
        img.onload = handleOnload;

        img.src = url;
    }
};


function handleOnload() {
    resizeCanvas(img, canvas);

    // 顔検出
    var comp = ccv.detect_objects({
        "canvas": ccv.grayscale(ccv.pre(img)),
        "cascade": cascade,
        "interval": 5,
        "min_neighbors": 1
    });
    var el = document.createElement("img");
    el.id = 'face-source';
    document.body.appendChild(el);
    if (comp.length === 0 ){
        showMsg("検出できませんでした。まともな顔で出直してください！");
    } else {
        showMsg("どう？");
    }

    // 結果の表示
    ctx.drawImage(img, 0, 0);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#f00";
    ctx.font = "bold 20pt Arial";
    ctx.fillStyle = "#ff0";
    for (var i = 0; i < comp.length; i++) {
        var score = Math.abs(Math.floor(comp[i].confidence * 1000));
        ctx.strokeRect(comp[i].x, comp[i].y, comp[i].width, comp[i].height);
        ctx.fillText(score + '点', comp[i].x, comp[i].y + comp[i].height + 25);
    }
}


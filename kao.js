function resizeCanvas(image, canvas) {
    document.body.appendChild(image);
    canvas.width = image.offsetWidth;
    canvas.style.width = image.offsetWidth.toString() + "px";
    canvas.height = image.offsetHeight;
    canvas.style.height = image.offsetHeight.toString() + "px";
    document.body.removeChild(image);
}

function showMsg(msg) {
    document.getElementById("msg").innerHTML = msg;
}

// Canvasオブジェクトを生成
var canvas = document.getElementById('workspace');
var ctx = canvas.getContext('2d');

// Imageオブジェクトを生成
var img = new Image();
img.src = "data:image/jpeg;base64,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";

// 画像が読み込まれるのを待ってから処理を続行
img.onload = function() {
    resizeCanvas(img, canvas);

    var s = (new Date()).getTime();
    showMsg("Detecting ...");

    // 顔検出
    var comp = ccv.detect_objects({
	    "canvas": ccv.grayscale(ccv.pre(img)),
	    "cascade": cascade,
	    "interval": 5,
	    "min_neighbors": 1
	});

    showMsg("Elapsed time : " + ((new Date()).getTime() - s).toString() + "ms");

    // 結果の表示
    ctx.drawImage(img, 0, 0);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#f00";
    for (var i = 0; i < comp.length; i++) {
        ctx.strokeRect(comp[i].x, comp[i].y, comp[i].width, comp[i].height);
    }
};
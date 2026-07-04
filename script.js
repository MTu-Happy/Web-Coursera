// Hiển thị ảnh và mô tả
function upDate(previewPic) {

    console.log("Image selected: " + previewPic.alt);

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

// Khôi phục trạng thái ban đầu
function unDo() {

    console.log("Image removed");

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "";
    imageDiv.innerHTML = "Hover over or tab to an image below.";
}

// Chạy khi trang được tải
function addTabFocus() {

    console.log("Page Loaded");

    let images = document.querySelectorAll("img");

    for (let i = 0; i < images.length; i++) {

        images[i].setAttribute("tabindex", "0");

        console.log("Tabindex added to image " + (i + 1));
    }
}

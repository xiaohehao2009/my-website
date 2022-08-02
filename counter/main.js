(function() {
    let s = window.localStorage;

    const count = document.getElementById("count");
    const button = document.getElementById("button");

    let num = s.getItem("count") || 0;
    count.innerHTML = num;

    button.onclick = function() {
        s.setItem("count", ++num);
        count.innerHTML = num;
    };
}());
let s = window.localStorage;

try {
    s.setItem("test", "test-65535");
    if (s.getItem("test") !== "test-65535") {
        throw new Error("无效存储");
    }
    s.removeItem("test");
}
catch (e) {
    s = {
        getItem: function (key) {
            return s.obj[key];
        },
        setItem: function (key, value) {
            if (s.obj[key] !== value) {
                s.obj[key] = value;
            }
        },
        obj: {}
    };
}

const count = document.getElementById("count");
const button = document.getElementById("button");

count.innerHTML = s.getItem("count") || 0;

button.onclick = function () {
    let num = s.getItem("count") || 0;
    num++;
    s.setItem("count", num);
    count.innerHTML = num;
}

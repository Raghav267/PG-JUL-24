const btn = document.querySelector("button")
const inp = document.querySelector("input");
const list = document.querySelector("ol");


btn.onclick = function () {
    const li = document.createElement("li");

    li.onclick = function () {
        li.remove();
    }
    li.innerText = inp.value;
    list.append(li);
    inp.value = "";
}
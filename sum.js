function addFunction() {
    let p1 = parseInt(document.getElementById("fnum").value);
    let p2 = parseInt(document.getElementById("snum").value);
    document.getElementById("res").innerHTML = (p1 + p2).toString();
}
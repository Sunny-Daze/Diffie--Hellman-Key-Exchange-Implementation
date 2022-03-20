const element = document.getElementById("calculate");
const displayAns = document.getElementById("ans");

element.addEventListener("click", () => {
    let getAlice = document.getElementById("aliceKey").value;
    let p = 23, g=9;
    let xa = getAlice, xb=3;
    let ya = Math.pow(g,xa)%p;
    let yb = Math.pow(g,xb)%p;
    let ybx = Math.pow(yb,xa)%p;
    let yby = Math.pow(ya,xb)%p;

    console.log(getAlice);
    displayAns.innerHTML = `<h1>${ybx} and ${yby}</h1>`;
});


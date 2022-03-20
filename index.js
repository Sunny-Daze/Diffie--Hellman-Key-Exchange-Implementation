const element = document.getElementById("calculate");
const displayAns = document.getElementById("ans");

element.addEventListener("click", () => {
  const getAlice = document.getElementById("aliceKey").value;
  const ans = document.getElementById("tempAns");
  let p = 23,
    g = 9;
  let xa = getAlice,
    xb = 3;
  let ya = Math.pow(g, xa) % p;
  let yb = Math.pow(g, xb) % p;
  let ybx = Math.pow(yb, xa) % p;
  let yby = Math.pow(ya, xb) % p;

  if (getAlice) {
    displayAns.innerHTML = `
              <h5>Given :</h5>
              <p>p = ${p}</p>
              <p>g = ${g}</p>
              <p>Private key of Alice (X<sub>A</sub>) = ${getAlice}</p>
              <p>Private key of Bob (X<sub>B</sub>) = ${xb}</p>
              <h5>Step 1 :</h5>
              <p>
                Both the parties calculate the value of their public key and
                exchange with each other.
              </p>
              <p>
                Public key of Alice(Y<sub>A</sub>) = g
                <sup>x <sub>A</sub> </sup>mod n
              </p>
              <p>= ${g} <sup>${getAlice}</sup> mod ${p} </p>
              <p>= ${ya}</p>

              <p>
                Public key of Bob(Y<sub>B</sub>) = g
                <sup>x <sub>B</sub> </sup>mod n
              </p>
              <p>= ${g} <sup>${xb}</sup> mod ${p} </p>
              <p>= ${yb}</p>

              <h5>Step 2 :</h5>
              <p>Both the parties calculate the value of secret key at their respective side.</p>
              <p>Secret key obtained by Alice = (Y<sub>B)</sub><sup>X<sub>A</sub></sup> mod p</p>
              <p>${yb}<sup>${getAlice}</sup> mod ${p}</p>
              <p>= ${ybx}</p>
              <p>Secret key obtained by Bob = (Y<sub>A)</sub><sup>X<sub>B</sub></sup> mod p</p>
              <p>${ya}<sup>${xb}</sup> mod ${p}</p>
              <p>= ${yby}</p>
              <p>Finally, both the parties obtain the same value of secret key.</p>
              <h4>The value of common secret key = <strong>${yby}</strong></h4>
    `;
    ans.innerHTML = `<h5>Therefore, the shared key is <strong>${yby}</strong></h5>`;
  } else {
    displayAns.innerHTML = `
     <div class="displayWarning">
        <div class="alert alert-danger text-center my-5" role="alert">
                <h5>
                  Please enter the private key of Alice to calculate the value of
                  secret key.
                </h5>
              </div>
              </div>
       `;
  }
});

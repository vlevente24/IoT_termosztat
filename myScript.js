const xbeallit = new XMLHttpRequest()
const xbekapcs = new XMLHttpRequest()
let beallitott_hom = 0;
let btnState = 0;

xbeallit.onreadystatechange = function () {
    if (xbeallit.readyState === 4) {
        beallitott_hom = xbeallit.response;
        document.getElementById("hombeall").innerHTML = beallitott_hom;
    }
}

xbekapcs.onreadystatechange = function () {
    if (xbekapcs.readyState === 4) {
        btnState = xbekapcs.response;
        if (btnState == 2) {
            document.getElementById("power").setAttribute("class","power_active");
        }
        else if (btnState == 1) {
            document.getElementById("power").setAttribute("class","power_deactive");
        }
    }
}

function termSet() {
    xbeallit.open('POST', "https://beta.dev.itk.ppke.hu/webprog/vajle/iot_term_fot/iotserver.php", true);
    xbeallit.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xbeallit.send('setvalue=' + beallitott_hom);
}

function termPow() {
    xbekapcs.open('POST', "https://beta.dev.itk.ppke.hu/webprog/vajle/iot_term_fot/iotserver.php", true);
    xbekapcs.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    console.log(btnState);
    if (btnState == 1) {
        btnState = 2;
    } else if (btnState == 2) {
        btnState = 1;
    }
    xbekapcs.send('pow=' + btnState);
}

function termNullSet() {
    xbeallit.open('POST', "https://beta.dev.itk.ppke.hu/webprog/vajle/iot_term_fot/iotserver.php", true);
    xbekapcs.open('POST', "https://beta.dev.itk.ppke.hu/webprog/vajle/iot_term_fot/iotserver.php", true);
    xbekapcs.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xbeallit.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xbeallit.send('val=alap');
    xbekapcs.send('poww=alap');
}

document.getElementById("hombeall").innerHTML = beallitott_hom;

function novel() {
    beallitott_hom++;
    termSet();
}
function csokkent() {
    beallitott_hom--;
    termSet();
}
function fokapcsolo() {
    termPow();
}

document.getElementById("power").onclick = fokapcsolo;
document.getElementById("plus").onclick = novel;
document.getElementById("minus").onclick = csokkent;

termNullSet();
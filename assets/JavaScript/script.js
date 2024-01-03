const btGab = document.querySelector('#btGab')
const resultGab = document.querySelector('#resultGab')
const bt1 = document.querySelector("#bt-1");
const bt2 = document.querySelector("#bt-2");
const bt3 = document.querySelector("#bt-3");
const bt4 = document.querySelector("#bt-4");
const bt5 = document.querySelector("#bt-5");
const bt6 = document.querySelector("#bt-6");
const bt7 = document.querySelector("#bt-7");
const bt8 = document.querySelector("#bt-8");
const bt9 = document.querySelector("#bt-9");
const bt10 = document.querySelector("#bt-10");
const moeda = document.querySelector('#moeda');
const resposta1 = document.querySelector('#p1-a');
const resposta2 = document.querySelector('#p2-c');
const resposta3 = document.querySelector('#p3-b');
const resposta4 = document.querySelector('#p4-a');
const resposta5 = document.querySelector('#p5-b');
const resposta6 = document.querySelector('#p6-c');
const resposta7 = document.querySelector('#p7-b');
const resposta8 = document.querySelector('#p8-c');
const resposta9 = document.querySelector('#p9-a');
const resposta10 = document.querySelector('#p10-a');
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")
const resp3 = document.querySelector("#resp3")
const resp4 = document.querySelector("#resp4")
const resp5 = document.querySelector("#resp5")
const resp6 = document.querySelector("#resp6")
const resp7 = document.querySelector("#resp7")
const resp8 = document.querySelector("#resp8")
const resp9 = document.querySelector("#resp9")
const resp10 = document.querySelector("#resp10")
var coin = 0;
let auxgab=0
var formulario1Respondido = false; 
var formulario2Respondido = false; 
var formulario3Respondido = false; 
var formulario4Respondido = false; 
var formulario5Respondido = false;
var formulario6Respondido = false;
var formulario7Respondido = false;
var formulario8Respondido = false;
var formulario9Respondido = false;
var formulario10Respondido = false;

moeda.innerHTML = coin;

bt1.addEventListener("click", function() {
    if (!formulario1Respondido) {
        if (resposta1.checked) {
            coin += 1;
            moeda.innerHTML = coin;
            resp1.innerHTML=`<h6 class="text-center text-success">Resposta certa</h6>`
        }else{
            resp1.innerHTML=`<h6 class="text-center text-danger">Resposta errada</h6>`
        }

        formulario1Respondido = true; 
        bt1.disabled = true; 
    }
});

bt2.addEventListener("click", function() {
    if (!formulario2Respondido) {
        if (resposta2.checked) {
            coin += 1;
            moeda.innerHTML = coin;
            resp2.innerHTML = `<h6 class="text-center text-success">Resposta certa</h6>`
    }else{
        resp2.innerHTML = `<h6 class="text-center text-danger">Resposta errada</h6>`
    }

        formulario2Respondido = true; 
        bt2.disabled = true; 
    }
});

bt3.addEventListener("click", function() {
    if (!formulario3Respondido) {
        if (resposta3.checked) {
            coin += 1;
            moeda.innerHTML = coin;
            resp3.innerHTML = `<h6 class="text-center text-success">Resposta certa</h6>`
        }else{
            resp3.innerHTML = `<h6 class="text-center text-danger">Resposta errada</h6>`
        }

        formulario3Respondido = true; 
        bt3.disabled = true; 
    }
});

bt4.addEventListener("click", function() {
    if (!formulario4Respondido) {
        if (resposta4.checked) {
            coin += 1;
            moeda.innerHTML = coin;
            resp4.innerHTML = `<h6 class="text-center text-success">Resposta certa</h6>`
        }else{
            resp4.innerHTML=`<h6 class="text-center text-danger">Resposta errada</h6>`
        }


        formulario4Respondido = true; 
        bt4.disabled = true; 
    }
});

bt5.addEventListener("click", function() {
    if (!formulario5Respondido) {
        if (resposta5.checked) {
            coin += 1;
            moeda.innerHTML = coin;
            resp5.innerHTML = `<h6 class="text-center text-success">Resposta certa</h6>`
        }else{
            resp5.innerHTML=`<h6 class="text-center text-danger">Resposta errada</h6>`
        }

        formulario5Respondido = true; 
        bt5.disabled = true; 
    }
});

bt6.addEventListener("click", function() {
    if (!formulario6Respondido) {
        if (resposta6.checked) {
            coin += 1;
            moeda.innerHTML = coin;
            resp6.innerHTML = `<h6 class="text-center text-success">Resposta certa</h6>`
        }else{
            resp6.innerHTML=`<h6 class="text-center text-danger">Resposta errada</h6>`
        }

        formulario6Respondido = true; 
        bt6.disabled = true; 
    }
});

bt7.addEventListener("click", function() {
    if (!formulario7Respondido) {
        if (resposta7.checked) {
            coin += 1;
            moeda.innerHTML = coin;
            resp7.innerHTML = `<h6 class="text-center text-success">Resposta certa</h6>`
        }else{
            resp7.innerHTML=`<h6 class="text-center text-danger">Resposta errada</h6>`
        }

        formulario7Respondido = true; 
        bt7.disabled = true; 
    }
});

bt8.addEventListener("click", function() {
    if (!formulario8Respondido) {
        if (resposta8.checked) {
            coin += 1;
            moeda.innerHTML = coin;
            resp8.innerHTML = `<h6 class="text-center text-success">Resposta certa</h6>`
        }else{
            resp8.innerHTML=`<h6 class="text-center text-danger">Resposta errada</h6>`
        }

        formulario8Respondido = true; 
        bt8.disabled = true; 
    }
});

bt9.addEventListener("click", function() {
    if (!formulario9Respondido) {
        if (resposta9.checked) {
            coin += 1;
            moeda.innerHTML = coin;
            resp9.innerHTML = `<h6 class="text-center text-success">Resposta certa</h6>`
        }else{
            resp9.innerHTML=`<h6 class="text-center text-danger">Resposta errada</h6>`
        }

        formulario9Respondido = true; 
        bt9.disabled = true; 
    }
});

bt10.addEventListener("click", function() {
    if (!formulario10Respondido) {
        if (resposta10.checked) {
            coin += 1;
            moeda.innerHTML = coin;
            resp10.innerHTML = `<h6 class="text-center text-success">Resposta certa</h6>`
        }else{
            resp10.innerHTML=`<h6 class="text-center text-danger">Resposta errada</h6>`
        }

        formulario10Respondido = true; 
        bt10.disabled = true; 
    }
});

btGab.addEventListener('click', function(){
    if(auxgab==0){
    resultGab.innerHTML = (
        `
        <h4>Gabarito</h4>
        <li>1 - A</li>
        <li>2 - C</li>
        <li>3 - B</li>
        <li>4 - A</li>
        <li>5 - B</li>
        <li>7 - C</li>
        <li>7 - B</li>
        <li>8 - C</li>
        <li>9 - A</li>
        <li>10 - A</li>
        `
        )
        auxgab=1;
    }else{
        resultGab.innerHTML=``
        auxgab=0
    }
})

const cabecalho = document.querySelector("#cabecalho")
const logo = document.querySelector("#logo")
const quant = document.querySelector("#quant")
const escuro = document.querySelector("#modoEscuro");
const corpo = document.querySelector("#corpo");
const pergunta1 = document.querySelector('.pergunta1')
const pergunta2 = document.querySelector('.pergunta2')
const pergunta3 = document.querySelector('.pergunta3')
const pergunta4 = document.querySelector('.pergunta4')
const pergunta5 = document.querySelector('.pergunta5')
const pergunta6 = document.querySelector('.pergunta6')
const pergunta7 = document.querySelector('.pergunta7')
const pergunta8 = document.querySelector('.pergunta8')
const pergunta9 = document.querySelector('.pergunta9')
const pergunta10 = document.querySelector('.pergunta10')
const form = document.querySelector('.form')
const form2 = document.querySelector('.form2')
const form3 = document.querySelector('.form3')
const form4 = document.querySelector('.form4')
const form5 = document.querySelector('.form5')
const form6 = document.querySelector('.form6')
const form7 = document.querySelector('.form7')
const form8 = document.querySelector('.form8')
const form9 = document.querySelector('.form9')
const form10 = document.querySelector('.form10')
const footer = document.querySelector('#footer')
const sunMoon = document.querySelector('#sunMoon')
const dev = document.querySelector('#dev');
const linkDev = document.querySelector('#linkDev');
const returnP = document.querySelector('#returnP')
const returnA = document.querySelector('#returnLink')
const gab = document.querySelector('#gab')
const irGab = document.querySelector('#irGab')


let aux = 0;

escuro.addEventListener('click', function() {
    if (aux === 0) {
        resultGab.classList.add('text-white')
        btGab.classList.add('text-white')
        btGab.classList.add('bg-dark')
        btGab.classList.remove('bg-white')
        gab.classList.add('text-white')
        returnA.classList.add('text-white')
        irGab.classList.add('text-white')
        returnA.classList.remove('text-dark')
        irGab.classList.remove('text-dark')
        linkDev.classList.add('text-white')
        linkDev.classList.remove('text-dark')
        dev.classList.add('text-white')
        quant.classList.add('text-white')
        sunMoon.classList.add('fa-regular')
        sunMoon.classList.remove('fa-sun')
        sunMoon.classList.add('fa-moon')
        footer.classList.remove('bg-info')
        footer.classList.add('bg-black')
        form.classList.add('text-white')
        form2.classList.add('text-white')
        form3.classList.add('text-white')
        form4.classList.add('text-white')
        form5.classList.add('text-white')
        form6.classList.add('text-white')
        form7.classList.add('text-white')
        form8.classList.add('text-white')
        form9.classList.add('text-white')
        form10.classList.add('text-white')
        pergunta1.classList.add('text-white')
        pergunta2.classList.add('text-white')
        pergunta3.classList.add('text-white')
        pergunta4.classList.add('text-white')
        pergunta5.classList.add('text-white')
        pergunta6.classList.add('text-white')
        pergunta7.classList.add('text-white')
        pergunta8.classList.add('text-white')
        pergunta9.classList.add('text-white')
        pergunta10.classList.add('text-white')
        escuro.classList.add('text-white')
        escuro.classList.add('bg-black')
        moeda.classList.add('text-white')
        logo.classList.add('text-white')
        cabecalho.classList.remove('bg-info')
        cabecalho.classList.add('bg-black')
        corpo.classList.add('bg-dark');
        aux = 1;
    } else {
        resultGab.classList.remove('text-white')
        btGab.classList.remove('text-white')
        btGab.classList.add('bg-white')
        btGab.classList.remove('bg-dark')
        returnA.classList.remove('text-white')
        irGab.classList.remove('text-white')
        returnA.classList.add('text-dark')
        irGab.classList.add('text-dark')
        linkDev.classList.remove('text-white')
        linkDev.classList.add('text-dark')
        dev.classList.remove('text-white')
        quant.classList.remove('text-white')
        pergunta1.classList.remove('text-white')
        pergunta2.classList.remove('text-white')
        pergunta3.classList.remove('text-white')
        pergunta4.classList.remove('text-white')
        pergunta5.classList.remove('text-white')
        pergunta6.classList.remove('text-white')
        pergunta7.classList.remove('text-white')
        pergunta8.classList.remove('text-white')
        pergunta9.classList.remove('text-white')
        pergunta10.classList.remove('text-white')
        sunMoon.classList.add("fa-regular")
        sunMoon.classList.add("fa-sun")
        sunMoon.classList.remove("fa-moon")
        footer.classList.add('bg-info')
        footer.classList.remove('bg-black')
        form.classList.remove('text-white')
        form2.classList.remove('text-white')
        form3.classList.remove('text-white')
        form4.classList.remove('text-white')
        form5.classList.remove('text-white')
        form6.classList.remove('text-white')
        form7.classList.remove('text-white')
        form8.classList.remove('text-white')
        form9.classList.remove('text-white')
        form10.classList.remove('text-white')
        escuro.classList.remove('text-white')
        escuro.classList.remove('bg-black')
        escuro.classList.add('bg-info')
        logo.classList.remove('text-white')
        moeda.classList.remove('text-white')
        cabecalho.classList.add('bg-info')
        cabecalho.classList.remove('bg-black')
        corpo.classList.remove('bg-dark');
        aux = 0;
    }
});
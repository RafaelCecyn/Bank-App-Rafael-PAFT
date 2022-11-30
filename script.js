const primeiro_button = document.querySelector(".comecar");
const primeira_pagina = document.querySelector(".primeira_pagina")
const segunda_pagina = document.querySelector(".segunda_pagina")
const body = document.querySelector(".body")
const segundo_button = document.querySelector(".next_2")
const terceira_pagina = document.querySelector(".terceira_pagina")
const terceiro_button = document.querySelector(".next_3")
const quarta_pagina = document.querySelector(".quarta_pagina")
const quarto_button = document.querySelector(".comecar_4")
const quinta_pagina = document.querySelector(".quinta_pagina");
const botao_voltar_1 = document.querySelector(".previous_2");
const botao_voltar_2 = document.querySelector(".previous_3");
const login = document.getElementById('login');
const senha = document.getElementById('senha');
const botao_logar = document.querySelector(".sign_in");
const registrar = document.querySelector(".registrese");
const sexta_pagina = document.querySelector(".sexta_pagina");
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const telefone = document.getElementById('telefone');
const password = document.getElementById('password');
const passwordtwo = document.getElementById('passwordtwo');
const setima_pagina = document.querySelector(".setima_pagina")
const oitava_pagina = document.querySelector(".oitava_pagina");
const comecar_7 = document.querySelector('.comecar_7');
const nav_extrato = document.querySelector('.nav_extrato');
const extrato = document.querySelector('.pagina_extrato');
const nav_home = document.querySelector('.nav_home');
const home = document.querySelector('.cartao_credito_principal');
const nav_emprestimo = document.querySelector('.nav_emprestimo')
const emprestimo = document.querySelector('.pagina_emprestimo');
const nav_pagamento = document.querySelector('.nav_pagamento');
const pagamento = document.querySelector('.pagina_pagamento');
const nav_sair = document.querySelector('.nav_sair');

const voltar_button = document.querySelector('.voltar_button')
const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');
const balance = document.getElementById('balance');
const depositInput = document.getElementById('deposit-input');
const withdrawInput = document.getElementById('withdraw-input');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const submitBtn = document.getElementById('submit-btn');
const emprestimoUtilizado = document.getElementById('emprestimo_utilizado');
const emprestimoUtilizadoInput = document.getElementById('emprestimo_utilizado-input');
const emprestimoUtilizadoBtn = document.getElementById('emprestimo_utilizado-btn');
const emprestimoDisponivel = document.getElementById('emprestimo_disponivel');


let pageRef;


primeiro_button.addEventListener('click', () => {
    primeira_pagina.style.display = "none";
    body.style.backgroundColor = "#e1f1dd";
    segunda_pagina.style.display = "";
})

segundo_button.addEventListener('click', () => {
    segunda_pagina.style.display = "none";
    body.style.backgroundColor = "white";
    terceira_pagina.style.display ="inline";
})

terceiro_button.addEventListener('click', () => {
    terceira_pagina.style.display = "none";
    body.style.backgroundColor = "#DA70D6";
    quarta_pagina.style.display = "inline";
})

quarto_button.addEventListener('click', () => {
    quarta_pagina.style.display = "none";
    body.style.backgroundColor = "e1f1dd";
    quinta_pagina.style.display = "inline";
})

voltar_button.addEventListener('click', () => {
    sexta_pagina.style.display = "none";
    body.style.backgroundColor = "e1f1dd";
    quinta_pagina.style.display = "inline";
    login.value = "";
    senha.value = "";
})



// BOTÕES DE VOLTAR
botao_voltar_1.addEventListener('click', () => {
    segunda_pagina.style.display = "none";
    body.style.backgroundColor = "purple";
    primeira_pagina.style.display ="";
})

botao_voltar_2.addEventListener('click', () => {
    terceira_pagina.style.display = "none";
    body.style.backgroundColor = "#e1f1dd";
    segunda_pagina.style.display ="";
})


botao_logar.addEventListener('click', () => {
    if(login.value == "max@gmail.com" && senha.value == "rafael00") {
        quinta_pagina.style.display = "none"
        body.style.backgroundColor = "purple";
        setima_pagina.style.display ="inline";
        login.value = "";
        senha.value = "";
    } else {
        alert('fracasso')
    }
})

registrar.addEventListener('click', () => {
    quinta_pagina.style.display = "none";
    body.style.backgroundColor = "purple";
    sexta_pagina.style.display ="inline";
})

comecar_7.addEventListener('click', () => {
    setima_pagina.style.display = "none";
    body.style.backgroundColor = "white";
    oitava_pagina.style.display = "inline";
    pageRef = home;
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const usernameValue = String(username.value.trim())
    const emailValue = email.value.trim()
    const cpfValue = cpf.value.trim()
    const telefoneValue = telefone.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    if(usernameValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(username, 'Preencha esse campo')
    } else if (typeof usernameValue === "number") {
        setErrorFor(username, 'Só aceita caracteres')
    }
    else {
        // adicionar a classe de sucesso
        setSuccessFor(username)
    }

    if(emailValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(email, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email)
    }

    if (cpfValue === '') {
        setErrorFor(cpf, 'Preencha esse campo')
    }else if(cpfValue.length < 11) { 
        setErrorFor(cpf, 'Seu CPF deve ter conter 11 numeros')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(cpf)
    }

    if (telefoneValue === '') {
        setErrorFor(telefone, 'Preencha esse campo')
    }else if(telefoneValue.length < 9) { 
        setErrorFor(telefone, 'Seu telefone deve ter conter 9 numeros')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(telefone)
    }

   
    if(passwordValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(password, 'Preencha esse campo')

    } else if(passwordValue.length < 8) { 
        setErrorFor(password, 'Senha deve ter mais que 8 caracteres')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(password)
    }

    if(passwordtwoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(passwordtwo, 'Preencha esse campo')

    } else if(passwordValue !== passwordtwoValue) { 
        setErrorFor(passwordtwo, 'Senhas não tão iguais')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(passwordtwo)
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


nav_extrato.addEventListener('click', () => {
    changeDisplay(pageRef,"none")   
    changeDisplay(extrato,"inline")   
    pageRef = extrato;
})



nav_home.addEventListener('click', () => {
    changeDisplay(pageRef,"none")   
    changeDisplay(home,"")   
    pageRef = home;
})

nav_emprestimo.addEventListener('click', ()=> {
    changeDisplay(pageRef,"none")   
    changeDisplay(emprestimo,"inline")   
    pageRef = emprestimo;
})

nav_pagamento.addEventListener('click', ()=> {
    changeDisplay(pageRef,"none")   
    changeDisplay(pagamento,"inline")   
    pageRef = pagamento;
})

const changeDisplay = (page,visibility) => {
    page.style.display = visibility
}

depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    const depositValue = Number(deposit.innerText) + Number(value);
    const balanceValue = Number(balance.innerText) + Number(value);
    deposit.innerText = depositValue;
    balance.innerText = balanceValue;
    depositInput.value = '';
})


withdrawBtn.addEventListener('click', () => {
    const value = withdrawInput.value;
    if (Number(value) === 0) {
        alert("Você não tem nenhum valor para empréstimo");
    } else if (Number(value) > Number(balance.innerText)) {
        alert("O saldo não pode zerar");
    } else {
        const balanceValue = Number(balance.innerText) - Number(value);
        const withdrawValue = Number(withdraw.innerText) + Number(value);
        withdraw.innerText = withdrawValue;
        balance.innerText = balanceValue;
        withdrawInput.value = '';
    }
})

emprestimoUtilizadoBtn.addEventListener('click', () => {
    const value = emprestimoUtilizadoInput.value;
    if (Number(value) === 0) {
        alert("Você não tem nenhum valor para empréstimo");
    } else if (Number(value) > Number(emprestimoDisponivel.innerText)) {
        alert("Você não tem tanto valor para empréstimo");
    } else {
        const emprestimoDisponivelValue = Number(emprestimoDisponivel.innerText) - Number(value);
        const emprestimoUtilizadoValue = Number(emprestimoUtilizado.innerText) + Number(value);
        emprestimoUtilizado.innerText = emprestimoUtilizadoValue;
        emprestimoDisponivel.innerText = emprestimoDisponivelValue;
        emprestimoUtilizadoInput.value = '';
    }
})

nav_sair.addEventListener('click', () => {
    oitava_pagina.style.display = "none";
    body.style.backgroundColor = "purple";
    primeira_pagina.style.display = "";
    emprestimoUtilizadoInput.value = "";
    withdrawInput.value = "";
    depositInput.value = "";
})

fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/curitiba?unitGroup=metric&key=D5AEGUP5Z42HDSYDWFVYP66DZ&contentType=json", {
    method: 'GET', 
    headers: {
   
    },
             
  }).then(response => {
    if (!response.ok) {
      throw response; 
    }
              
    return response.json(); 
  
  }).then(response => {
    processWeatherData(response);
  
  }).catch((errorResponse) => {
    if (errorResponse.text) { 
      errorResponse.text().then( errorMessage => {
      })
    } else {
    } 
  });

  function processWeatherData(response) {
  
    var location=response.resolvedAddress;
    var days=response.days;
    console.log("Location: "+location);
    for (var i=0;i<1;i++) {
        document.querySelector('.logo').innerHTML += `${location} Temp Max ${days[1].tempmax} e Temp Mín ${days[1].tempmin}`
      console.log(days[i].datetime+": tempmax="+days[i].tempmax+", tempmin="+days[i].tempmin);
    }
  }

  function validadorDeNumero () {
    let valueNumber = /[0-9]+$/
    console.log(emprestimoUtilizadoInput.value.match(valueNumber))
    if(emprestimoUtilizadoInput.value.match(valueNumber)) {
      return true;
    } else {
      alert("Digite um número");
    }
  }

  emprestimoUtilizadoInput.addEventListener('click', validadorDeNumero)



  
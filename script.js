const form = document.querySelector("#form");

const label_day = document.querySelector("#label_day");
const label_month = document.querySelector("#label_month");
const label_year = document.querySelector("#label_year");

const inputs = document.querySelectorAll(".from_date_input");
const input_dia = document.querySelector("#input_day");
const input_mes = document.querySelector("#input_month");
const input_ano = document.querySelector("#input_year");

const dia = document.querySelector("#days");
const mes = document.querySelector("#months");
const ano = document.querySelector("#years");

const error_day = document.querySelector("#error_day");
const error_month = document.querySelector("#error_month");
const error_year = document.querySelector("#error_year");

const erro = document.querySelectorAll("#error");

const atual = new Date();


inputs.forEach(e => {
    e.addEventListener("keypress", (event) => {
        const code = event.keyCode
        // console.log
        if(code < 47 || code > 58) {
            event.preventDefault();
        }
    })
});


function adicioErro (input, label, erro, texto) {
    input.classList.add("input_required");
    erro.textContent = texto;
    erro.classList.add("required");
    label.classList.add("label_required")
}

function removeErro (input, label, erro) {
    input.classList.remove("input_required");
    erro.textContent = "";
    erro.classList.remove("required");
    label.classList.remove("label_required")
}

function calculoIdade() {

    const nascimento = new Date(`${input_mes.value}-${input_dia.value}-${input_ano.value}`)
    
    dataIncorreta()
    
    if (nascimento != "Invalid Date" && nascimento < atual && input_ano.value != "" && input_dia.value != "" && input_ano.value != "") {
        
        console.log(nascimento < atual)

        let idade_anos = atual.getFullYear() - input_ano.value;
        let idade_mes = (atual.getMonth() + 1) - input_mes.value;
        let idade_dias = atual.getDate() - input_dia.value;

        if(idade_mes < 0 || idade_mes == 0 && idade_dias < 0) { idade_anos-- }    

        ano.textContent = idade_anos;
        mes.textContent = Math.abs(idade_mes);
        dia.textContent = Math.abs(idade_dias);
    } 
}

function dataIncorreta() {
if(input_ano.value > atual.getFullYear()) {
    adicioErro(input_ano, label_year, error_year, "Must be in the past")
}else if (input_ano.value.trim() === "") {
    adicioErro(input_ano, label_year, error_year, "This field is required");
} else {
    removeErro(input_ano, label_year, error_year);
}

if (input_dia.value > 31) {
    adicioErro(input_dia, label_day, error_day, "Must be a valid day")
} else if( input_dia.value.trim() === "" ) {
    adicioErro(input_dia, label_day, error_day, "This field is required");
} else {
    removeErro(input_dia, label_day, error_day)
}

if (input_mes.value > 12) {
    adicioErro(input_mes, label_month, error_month, "Must be a valid month" )
} else if (input_mes.value.trim() === "") {
    adicioErro(input_mes, label_month, error_month, "This field is required");
 } else {
    removeErro(input_mes, label_month, error_month)
}

ano.textContent = "--";
mes.textContent = "--";
dia.textContent = "--";

}

function contadorIdade (event) {
    event.preventDefault();
    calculoIdade()
}

form.addEventListener("submit", contadorIdade );

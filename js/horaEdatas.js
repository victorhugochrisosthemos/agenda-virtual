//Gerar relógio
function Relogio(){
    var data = new Date()
    //Colocar em um var o dia da semana em string
    var diaSem = data.getDay()
    switch (diaSem) {
        case 0:
            var semana = 'Domingo'
            break
        case 1:
            var semana = 'Segunda'
            break
        case 2:
            var semana = 'Terça'
            break
        case 3:
            var semana = 'Quarta'
            break
        case 4:
            var semana = 'Quinta'
            break
        case 5:
            var semana = 'Sexta'
            break
        case 6:
            var semana = 'Sábado'
            break
        default:
            var semana = '[ERRO] Dia inválido!'
            break
    }

    var hora = data.getHours();
    var minuto = data.getMinutes();
    var seg = data.getSeconds();

    //Se os minutos os segundos forem menor que 10, pede para colocar um 0 na frente
    if (minuto < 10){
        minuto = "0" + minuto  
    }
    if (seg < 10){
        seg = "0" + seg
    }

    var tempo_total = hora + ":" + minuto + ":" + seg + "  (" + semana + ")";
    var res = document.getElementById('hours')
    res.innerHTML = `<strong>${tempo_total}</strong>`;

    var diaDoMes = data.getDate()

    //coloca o mês correspondente a uma string
    var month = data.getMonth()
    switch (month) {
        case 0:
            var mes = 'Janeiro'
            break
        case 1:
            var mes = 'Fevereiro'
            break
        case 2:
            var mes = 'Março'
            break
        case 3:
            var mes = 'Abril'
            break
        case 4:
            var mes = 'Maio'
            break
        case 5:
            var mes = 'Junho'
            break
        case 6:
            var mes = 'Julho'
            break
        case 7:
            var mes = 'Agosto'
            break
        case 8:
            var mes = 'Setembro'
            break
        case 9:
            var mes = 'Outubro'
            break
        case 10:
            var mes = 'Novembro'
            break
        case 11:
            var mes = 'Dezembro'
            break
        default:
            var mes = '[ERRO] Mês inválido!'
            break
}
var ano = data.getFullYear();
var res2 = document.getElementById('data')
var data_geral = `<strong>${diaDoMes} de ${mes} de ${ano}</strong>`
res2.innerHTML = data_geral
}

//chama a função relógio a cada 0.5 segundos
setInterval(()=> {Relogio()}, 500);


var res3 = document.getElementById('jsFrase')
//gera um numero aleatoria entre 1 a 10
var aleatorio = Math.floor(Math.random() * 10 + 1)
switch(aleatorio){
    case 1:
        var frase = '"Não importa onde uma pessoa nasce, mas quem ela escolhe ser."<br><u>Alvo Dumbledore</u>'
        break
    case 2:
        var frase = '"Não tente!"<br><u>Charles Bukowski</u>'
        break
    case 3:
        var frase = '"Não vemos as coisas como elas são, mas como nós somos."<br><u>Anaïs Nin</u>'
        break
    case 4:
        var frase = '"Dificuldades preparam pessoas comuns para destinos extraordinários."<br><u>C.S Lewis</u>'
        break
    case 5:
        var frase = '"A felicidade não está em fazer o que a gente quer, e sim querer o que a gente faz."<br><u>Jean Paul Sartre</u>'
        break
    case 6:
        var frase = '"Parar de ler livros é parar de pensar."<br><u>Fiódor Dostoiévski</u>'
        break
    case 7:
        var frase = '"É sempre divertido fazer o impossível."<br><u>Walt Disney</u>'
        break
    case 8:
        var frase = '"O pessimista vê dificuldade em toda oportunidade. O otimista vê oportunidade em toda dificuldade."<br><u>Winston Churchill</u>'
        break
    case 9:
        var frase = '"Reclamar não é uma estratégia. É necessário lidarmos com o mundo como ele é e não como gostaríamos que ele fosse."<br><u>Jeff Bezos</u>'
        break
    case 10:
        var frase = '"Conhecimento não é aquilo que você sabe, mas o que você faz com aquilo que sabe”<br><u>Aldous Huxley</u>'
        break
    default:
        var mes = '[ERRO] Deu ruim!'
        break
}
res3.innerHTML = `<strong>${frase}</strong>`


//Diferença de dias
var data = new Date()
var diaDoMes = data.getDate()
if (diaDoMes < 10){
    diaDoMes = "0" + diaDoMes
}
var month = data.getMonth() + 1
if (month < 10){
    month = "0" + month
}
var ano = data.getFullYear();
var d1 = `${diaDoMes}/${month}/${ano}`;
var d2 = "13/11/2022";
var diff = moment(d2,"DD/MM/YYYY").diff(moment(d1,"DD/MM/YYYY"));
var dias = moment.duration(diff).asDays();
var dias2 = dias;



var diferenca = `<strong><br><br>ENEM-13/11/2022<br>Faltam ${dias2} dias para a prova</strong><br><br>`
var res4 = document.getElementById('countingDatas')
res4.innerHTML = diferenca


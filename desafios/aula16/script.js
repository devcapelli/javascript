var num = document.getElementById('txtn')
var l = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) >= l && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function isLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){

    } else{
        window.alert('Valor inválido ou já adicionado na lista.')
    }
}

function finalizar(){

}
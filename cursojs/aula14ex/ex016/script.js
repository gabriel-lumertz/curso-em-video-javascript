function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('resultado')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar!'
        window.alert('Verifique os valores')        
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Consderando passo 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
            resultado.innerHTML += ` ${c} 	\u{1f449}`
        }
    } else {
        for(let c = i; c >= f; c -= p) {
            resultado.innerHTML += ` ${c} \u{1f449}`
        }
    }
        resultado.innerHTML += `\u{1f3c1}`
    }
    
}
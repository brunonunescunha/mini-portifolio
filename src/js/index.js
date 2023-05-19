const abas = document.querySelectorAll(".aba")

abas.forEach(aba => {
    aba.addEventListener("click", () => {
        if(aba.classList.contains("selecionado")){
            return
        }
        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    })
})

function mostrarInformacoesDaAba(aba) {
    const informacaoSelecionado = document.querySelector(".informacao.selecionado")
    informacaoSelecionado.classList.remove("selecionado")

    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)

    informacaoASerMostrada.classList.add("selecionado")
}

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado")
    abaSelecionada.classList.remove("selecionado")

    aba.classList.add("selecionado")
}

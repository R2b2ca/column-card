function calculaMedia() {
    let nota1 = 0
    let nota2 = 0

    nota1 = Number(prompt("Digite um número"))
    nota2 = Number(prompt("Digite um número"))

    let media = (nota1 + nota2) / 2

    alert(media)

    console.log(media)
}

function alteraCor(){
    document.body.style.backgroundColor = "aqua"
    return
}


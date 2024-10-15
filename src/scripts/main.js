document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sorteador').addEventListener('submit',function(e){
        e.preventDefault()
        let numeroMaximo = document.getElementById('numeroMaximo').value
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo
        numeroAleatorio = Math.floor((numeroAleatorio + 1))

        document.getElementById('resultado').innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block'
    })
})
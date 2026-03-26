document.getElementById("btnBuscar").addEventListener("click", function (){

    const nome = document.getElementById("nome").value;

    fetch(`https://api.agify.io?name=${nome}`)
    .then(res => res.json())
    .then(dados => {

        if(dados.age === null){
            document.getElementById("resultado").textContent =
            "não foi possilvel estimar idade.";
        } else {
            document.getElementById("resultado").textContent =
                `O nome ${dados.name} tem idade estimada de ${dados.age} anos.`;
        }
    })
    .catch(erro =>{
        console.log("Erro:", erro);
    });
});
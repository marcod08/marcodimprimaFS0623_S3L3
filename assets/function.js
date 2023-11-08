

const creaTask = function (invio) {
    invio.preventDefault()
    const paragr = document.createElement("p")
    const container = document.getElementById("container")
    const valuePrompt = document.getElementById("task").value
    if (valuePrompt === ""){
        alert("Inserisci una task")
        return false
    }
    paragr.innerHTML = valuePrompt
    container.appendChild(paragr)
}

const bottone = document.getElementById("submit-btn")
bottone.addEventListener("click", creaTask)

// ho usato .style.color = "red" come prova, per capire se funzionasse, bisognebbe utilizzare text-decoration: line-through; credevo di aver sbagliato il metodo di selezione dei p iniettati, ma probabilmente il problema è che non ho messo l'eventListener all'interno del ciclo forEach
function sottolineaP () {
    let pInserito = document.querySelectorAll("p")
    pInserito.forEach(element => {
        element.style.color = "red"
    });
}

pInserito.addEventListener("click", sottolineaP)

let bodyElement = document.getElementsByTagName("body")[0]
let sectionMenuInicial = document.createElement("section")
let gameTitle = document.createElement("h1")
 
gameTitle.innerText = "The Dark Hanoi"


bodyElement.appendChild(gameTitle)
bodyElement.appendChild(sectionMenuInicial)
//MENU INICIAL DO JOGO
//MUSICAS DO JOGO 
// Adiciona musica em cada elemento usando a biblioteca do howler.js
function musicaMenuInicial(music){
    let sound = new Howl({
        src: music,
        volume: 1.0,
    }) 

    return sound.play()
}
 

// Cria o botão play do menu 
let btnPlayMenu = document.createElement("button")
btnPlayMenu.classList.add("botaoMenuInicial")
btnPlayMenu.innerText = "PLAY"
sectionMenuInicial.appendChild(btnPlayMenu)


//Executa a função que cria o menu inicial do jogo
btnPlayMenu.addEventListener("click", function(){
         musicaMenuInicial(["/src/music/effects/button1.ogg"])
         musicaMenuInicial(["/src/music/scott-buckley-i-walk-with-ghosts.mp3"])
         gameTitle.style.animation = "changeH1Color 7s infinite"
         criaMenuInicial()
})

//Inicio da função que cria o menu inicial do jogo
function criaMenuInicial(){
    btnPlayMenu.style.display = "none"

    let btnModoFacil = document.createElement("button")
    let btnModoMedio = document.createElement("button")
    let btnModoDificil = document.createElement("button")

   

    btnModoFacil.classList.add("botaoMenuInicial")
    btnModoMedio.classList.add("botaoMenuInicial")
    btnModoDificil.classList.add("botaoMenuInicial")

    btnModoFacil.innerText = "FACIL"
    btnModoMedio.innerText = "MÉDIO"
    btnModoDificil.innerText = "DIFÍCIL"

    sectionMenuInicial.appendChild(btnModoFacil)
    sectionMenuInicial.appendChild(btnModoMedio)
    sectionMenuInicial.appendChild(btnModoDificil)

    bodyElement.appendChild(sectionMenuInicial)

    console.log(bodyElement)

    btnModoFacil.addEventListener("click", function(){
        musicaMenuInicial(["/src/music/effects/on.ogg"])
        sectionMenuInicial.classList.add("hideMenu")
    })

    btnModoMedio.addEventListener("click", function(){
        musicaMenuInicial(["/src/music/effects/on.ogg"])
        sectionMenuInicial.classList.add("hideMenu")
    })

    btnModoDificil.addEventListener("click", function(){
        musicaMenuInicial(["/src/music/effects/on.ogg"])
        sectionMenuInicial.classList.add("hideMenu")
    })
}
//Fim da criação do menu inicial do jogo

let fullScreenMode = document.getElementsByClassName("btnFullScreen")[0]


console.log(fullScreenMode)
fullScreenMode.addEventListener("click", function(){
        if(document.fullscreenElement){
            document.exitFullscreen()
        }else{
            document.documentElement.requestFullscreen()
        }
        
    
}) 
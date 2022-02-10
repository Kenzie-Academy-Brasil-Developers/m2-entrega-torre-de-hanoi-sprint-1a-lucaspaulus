

//Pega o elemento body da pagina
let bodyElement = document.getElementsByTagName("body")[0]

//Icone para que quando clicar entrar no modo fullscreen
let fullScreenMode = document.createElement("div")
fullScreenMode.classList.add("btnFullScreen")
fullScreenMode.innerHTML = "<img src='src/img/fullScreenMaxmizeBtnGrey.png'>"

//Cria o container da seção do menu 
let menuSectionContainer = document.createElement("section")

//Cria a seção do menu
let menuSection = document.createElement("section")

//Cria o container da seção do jogo
let gameSectionContainer = document.createElement("section")

//Cria o titulo do game no menu 
let menuGameTitle = document.createElement("h1")
menuGameTitle.innerText = "The Dark Hanoi"

//Cria o container do titulo do game no menu
let menuGameTitleContainer = document.createElement("div")

//Cria o container para os botões do menu
let menuGameBottomContainer = document.createElement("div")

//Cria a logo do game no menu
let logoGame = document.createElement("div")
logoGame.classList.add("logoGameImg")
logoGame.innerHTML = "<img src='src/img/hanoiLogo-stoped.png'>"

//Adiciona clases nos container e seções do menu e jogo 
menuSectionContainer.classList.add("menuSectionContainer")
gameSectionContainer.classList.add("gameSectionContainer")

menuSection.classList.add("menuSection")
menuGameTitleContainer.classList.add("menuGameTitleContainer")
menuGameBottomContainer.classList.add("menuGameBottomContainer")

//Associa os elementos do menu inicial
bodyElement.appendChild(menuSectionContainer)

menuSectionContainer.appendChild(fullScreenMode)
menuSectionContainer.appendChild(menuSection)


menuSection.appendChild(logoGame)
menuGameTitleContainer.appendChild(menuGameTitle)
menuSection.appendChild(menuGameTitleContainer)
menuSection.appendChild(menuGameBottomContainer)

//Adiona o modo fullscreen no menu inicial ou no jogo
function fullscreenMode(color){ 
    fullScreenMode.addEventListener("click", function(){
            if(document.fullscreenElement){
                document.exitFullscreen()
                if(color === "grey"){
                fullScreenMode.innerHTML = "<img src='src/img/fullScreenMaxmizeBtnGrey.png'>"
                } else if(color === "white"){
                    fullScreenMode.innerHTML = "<img src='src/img/fullScreenMaxmizeBtnWhite.png'>"
                    }     
            }else{
                document.documentElement.requestFullscreen()
                if(color === "grey"){
                    fullScreenMode.innerHTML = "<img src='src/img/fullScreenMinimizeBtnGrey.png'>"
                }else if(color === "white"){
                    fullScreenMode.innerHTML = "<img src='src/img/fullScreenMinimizeBtnWhite.png'>"
                }    
            }          
        })  
}

fullscreenMode("grey")

// Esconde os container das seções do jogo ou menu
function showHideMenuOrGamesection(showOrhide){
    if(showOrhide === "hideSectionContainer"){ 
        menuSectionContainer.style.animation = "bgTransition 2s forwards"
        setTimeout(() => {
            menuSectionContainer.classList.add("hide")
        }, 500); 
    
}

    if(showOrhide === "hideGameSectionContainer"){

        gameSectionContainer.style.animation = "bgTransition 2s forwards"
        setTimeout(() => {
        gameSectionContainer.classList.add("hide") 
        }, 500);
        
    }
}


//MENU INICIAL DO JOGO
// ADICIONA MUSICA TEMA DO MENU DO JOGO
let addMenuMusicTheme = new Howl({
    src: ["/src/music/musicTheme.ogg"],
    autoplay: false,
    loop: true,
    volume: 0.4,
}) 

//ADICIONA MUSICA DENTRO DO JOGO
let addGameMusicTheme = new Howl({
    src: ["/src/music/ambientmain.ogg"],
    autoplay: false,
    loop: true,
    volume: 1,

})

// ADICIONA SONS DE EFEITO NO JOGO
let addSoundEfects = new Howl({
    src: ["/src/music/effects/button1.ogg"],
    autoplay: false,
    volume: 0.4,
    

})
  
// Cria o botão play do menu 
let btnPlayMenu = document.createElement("button")
btnPlayMenu.classList.add("botaoMenuInicial")
btnPlayMenu.innerText = "PLAY"
menuGameBottomContainer.appendChild(btnPlayMenu)

//Botão play que cria o menu dos modos do jogo
btnPlayMenu.addEventListener("click", function btnPlay(){
    criaMenuInicial()
    if(!addMenuMusicTheme.playing()){
    addMenuMusicTheme.play()  
    }
    // Adiciona som no botão
    addSoundEfects.play()

    logoGame.innerHTML = "<img src='src/img/hanoiLogo.gif'>"

    menuGameTitle.style.animation = "changeH1Color 7s infinite"
    menuGameTitleContainer.style.backgroundImage = "url('/src/img/blackHole.gif')"

    btnPlayMenu.removeEventListener("click", btnPlay)
})

//Inicio da função que cria o menu inicial do jogo
function criaMenuInicial(){
    btnPlayMenu.style.display = "none"
  
    let btnEasyMode = document.createElement("button")
    let  btnMediumMode = document.createElement("button")
    let  btnHardMode = document.createElement("button")

    btnEasyMode.classList.add("botaoMenuInicial")
    btnMediumMode.classList.add("botaoMenuInicial")
    btnHardMode.classList.add("botaoMenuInicial")

    btnEasyMode.innerText = "EASY"
    btnMediumMode.innerText = "MÉDIUM"
    btnHardMode.innerText = "HARD"

    menuGameBottomContainer.appendChild(btnEasyMode)
    menuGameBottomContainer.appendChild(btnMediumMode)
    menuGameBottomContainer.appendChild(btnHardMode)
    
    bodyElement.appendChild(menuSectionContainer)

    btnEasyMode.addEventListener("click", function btnEasy(){
        
        if(addMenuMusicTheme.playing()){
            addMenuMusicTheme.stop()
        }
        // ADICIONA SOM NO BOTÃO
        addSoundEfects.play()
        //Esconde o container section junto com a seção do menu 
        showHideMenuOrGamesection("hideSectionContainer")
        
        easyMode()
        btnEasyMode.removeEventListener("click", btnEasy)
    })

     btnMediumMode.addEventListener("click", function(){
       
        // ADICIONA SOM NO BOTÃO
        addSoundEfects.play()
        //Esconde o container section junto com a seção do menu 
        showHideMenuOrGamesection("hideSectionContainer")
        
    })

     btnHardMode.addEventListener("click", function(){
         
        // ADICIONA SOM NO BOTÃO
        addSoundEfects.play()
        //Esconde o container section junto com a seção do menu 
        showHideMenuOrGamesection("hideSectionContainer")
       
    })
}
//Fim da criação do menu inicial do jogo

//SEÇÃO DOS MODOS DE JOGO 
// MODO FACIL 3 DISCOS

function easyMode(){
    setInterval(() => {
        if(!addGameMusicTheme.playing()){
            addGameMusicTheme.play() 
            }
       
    }, 5000);

   /*  const easyMode = document.createElement("section") */
    bodyElement.appendChild(gameSectionContainer)
    const gameSectionEasyMode = document.createElement("section") 
    gameSectionEasyMode.classList.add("gameSection")

    const towerStartModeEasy = document.createElement("section")
    const towerOffsetModeEasy = document.createElement("section")
    const towerEndModeEasy = document.createElement("section")
    towerStartModeEasy.classList.add("tower")
    towerOffsetModeEasy.classList.add("tower")
    towerEndModeEasy.classList.add("tower")

    gameSectionEasyMode.appendChild(towerStartModeEasy)
    gameSectionEasyMode.appendChild(towerOffsetModeEasy)
    gameSectionEasyMode.appendChild(towerEndModeEasy)

    gameSectionContainer.appendChild(gameSectionEasyMode)

    //estilo da base das torres
    const towerBaseModeEasy = document.createElement("div")
    towerBaseModeEasy.classList.add("towerBase")

    const textBaseModeEasy = document.createElement("p")
    textBaseModeEasy.classList.add("textBase")

    towerBaseModeEasy.appendChild(textBaseModeEasy)

    const boxTowerDisplayModeEasy = document.createElement("div")
    boxTowerDisplayModeEasy.classList.add("boxVisorTower")
    //------------------------------------------------------

    // seção que ira ser o container da base e torres
    const sectionBaseDisplayModeEasy = document.createElement("section")
    sectionBaseDisplayModeEasy.classList.add("sectionBaseDisplay")    
    //-----------------------------------------------------------

    //adiciona a base das torres, box do visor das torres e textos em uma seção
    sectionBaseDisplayModeEasy.appendChild(towerBaseModeEasy)
    sectionBaseDisplayModeEasy.appendChild(boxTowerDisplayModeEasy)
    //--------------------------------------------------------------------

    //adiciona a base das torres, box do visor das torres e textos no game container
    gameSectionEasyMode.appendChild(sectionBaseDisplayModeEasy)

    textBaseModeEasy.innerText = "The Dark Hanoi"
    //--------------------------------------------------------------------------------
    
    const largeDiskEasyMode = document.createElement("div")
    largeDiskEasyMode.classList.add("neonLightBlueDisk")

    const averageDiskEasyMode = document.createElement("div")
    averageDiskEasyMode.classList.add("neonLightOrangeDisk")

    const smallDiskEasyMode = document.createElement("div")
    smallDiskEasyMode.classList.add("neonLightGreenDisk")

    towerStartModeEasy.appendChild(largeDiskEasyMode)
    towerStartModeEasy.appendChild(averageDiskEasyMode)
    towerStartModeEasy.appendChild(smallDiskEasyMode)
  
    let arrayChildTowerStart = []
    let arrayParentTowerStart = []
  
    function addLastChild(){ 
        let firstLength = arrayChildTowerStart[0]
        let secondLength = arrayParentTowerStart[1].lastElementChild

        if(firstLength === null){
            arrayParentTowerStart = []
            arrayChildTowerStart = []
 
        }else if(secondLength === null || firstLength.clientWidth < secondLength.clientWidth){
            arrayParentTowerStart[1].appendChild(arrayChildTowerStart[0])
            arrayParentTowerStart = []
            arrayChildTowerStart = []
        }else{
            arrayChildTowerStart = []
            arrayParentTowerStart = []
        }

       
    }   
     
    towerStartModeEasy.addEventListener("click", function(){
        arrayChildTowerStart.push(towerStartModeEasy.lastElementChild)
        arrayParentTowerStart.push(towerStartModeEasy)

        if(arrayParentTowerStart.length === 2){
            addLastChild()
           
        }

        if(towerEndModeEasy.childElementCount === 3){
            textBaseModeEasy.innerText = "Você venceu"
        }
    })


    towerOffsetModeEasy.addEventListener("click", function(){
        arrayChildTowerStart.push(towerOffsetModeEasy.lastElementChild)
        arrayParentTowerStart.push(towerOffsetModeEasy)

        if(arrayParentTowerStart.length === 2){
            addLastChild()
     
        }

        if(towerEndModeEasy.childElementCount === 3){
            textBaseModeEasy.innerText = "Você venceu"
        }
    })

    towerEndModeEasy.addEventListener("click", function(){
        arrayChildTowerStart.push(towerEndModeEasy.lastElementChild)
        arrayParentTowerStart.push(towerEndModeEasy)

        if(arrayParentTowerStart.length === 2){
           addLastChild()
         
        }

        if(towerEndModeEasy.childElementCount === 3){
            textBaseModeEasy.innerText = "Você venceu"
        }
    }) 
    
 

}







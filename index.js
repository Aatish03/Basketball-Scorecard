let runsHome=0
let runsGuest=0
let countScoreHome=document.getElementById("scoreHome")
let countScoreGuest=document.getElementById("scoreGuest")



function plusOneHome(){
    runsHome+=1
    countScoreHome.textContent=runsHome
}

function plusTwoHome(){
    runsHome+=2
    countScoreHome.textContent=runsHome

}

function plusThreeHome(){
    runsHome+=3
    countScoreHome.textContent=runsHome
}

function plusOneGuest(){
    runsGuest+=1
    countScoreGuest.textContent=runsGuest
}

function plusTwoGuest(){
    runsGuest+=2
    countScoreGuest.textContent=runsGuest

}

function plusThreeGuest(){
    runsGuest+=3
    countScoreGuest.textContent=runsGuest
}
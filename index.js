let homeScore = 0
let guestScore = 0


let home = document.getElementById("score-home")
home.textContent = "0"

let guest = document.getElementById("score-guest")
guest.textContent = "0"

// HOME score card

function addOneHome() {
    let add1 = 1
    homeScore += add1
    home.textContent = homeScore;
      
    
}

function addTwoHome() {
    let add2 = 2
    homeScore += add2
    home.textContent = homeScore;
    
}

function addThreeHome() {
    let add3 = 3
    homeScore += add3
    home.textContent = homeScore;
    
}

// Guest score card

function addOneGuest() {
    let add1 = 1
    guestScore += add1
    guest.textContent = guestScore;
    
}

function addTwoGuest() {
    let add2 = 2
    guestScore += add2
    guest.textContent = guestScore;
}

function addThreeGuest() {
    let add3 = 3
    guestScore += add3
    guest.textContent = guestScore;
}
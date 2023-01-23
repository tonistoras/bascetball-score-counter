let homeScoreEl = document.getElementById("home-score-el")
let homeScore = 0

let guestScoreEl = document.getElementById("guest-score-el")
let guestScore = 0

let resetEl = document.getElementById("reset-el")

function home1() {
  homeScore += 1
  homeScoreEl.textContent = homeScore
  
}

function home2() {
  homeScore += 2
  homeScoreEl.textContent = homeScore
}

function home3() {
  homeScore += 3
  homeScoreEl.textContent = homeScore
}

function guest1() {
  guestScore += 1
  guestScoreEl.textContent = guestScore
}

function guest2() {
  guestScore += 2
  guestScoreEl.textContent = guestScore
}

function guest3() {
  guestScore += 3
  guestScoreEl.textContent = guestScore
}

function reset() {
  homeScoreEl.textContent = 0
  homeScore = 0
  guestScoreEl.textContent = 0
  guestScore = 0
}

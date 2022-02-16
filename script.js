/* Modal ========================= */
const Modal = {
    open(){
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

/* Countdown ========================= */
const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const newDate = new Date('December 31 2022 00:00:00') /** Date Config **/ 

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountdownValues = ({days, hours, minutes, seconds}) => {
    secondsContainer.textContent = getTimeUnit(seconds)
    minutesContainer.textContent = getTimeUnit(minutes)
    hoursContainer.textContent = getTimeUnit(hours)
    daysContainer.textContent = getTimeUnit(days)
}

const updateCountdown = () => {
    const currentTime = new Date()
    const differenc = newDate - currentTime
    const days = Math.floor(differenc / 1000 / 60 / 60 / 24)
    const hours = Math.floor(differenc / 1000 / 60 / 60) % 24
    const minutes = Math.floor(differenc / 1000 / 60) % 60
    const seconds = Math.floor(differenc / 1000) % 60

    insertCountdownValues({days, hours, minutes, seconds})
}

const handleCountdownDisplay = () => {
    spinnerLoading.remove()
    countdownContainer.style.display = 'flex'
}

setTimeout(handleCountdownDisplay, 1000)

setInterval(updateCountdown, 1000)
// Timer takes hours
let TIMER_RESET_TIME = 6

let count = TIMER_RESET_TIME * 3600

const timer = ms => new Promise(res => setTimeout(res, ms))


async function decrementCount (count) { // We need to wrap the loop into an async function for this to work
    while (count >= 0) {
    display_timer(count)
    await timer(1000); // then the created Promise can be awaited
    count -= 1
    }
    count = TIMER_RESET_TIME * 3600
    decrementCount(count)
}

let display_timer = (count) => {
    hours = Math.floor(count / 3600)
    rem_hour = count % 3600
    mins = Math.floor(rem_hour / 60)
    sec = Math.floor(count % 60)

    if (sec < 10){
        sec = `0${sec}`
    }
    if (mins < 10){
        mins = `0${mins}`
    }
    if (hours < 10){
        hours = `0${hours}`
    }
    let time_left = ` ${hours} : ${mins} : ${sec}`
    
    console.log(time_left)
    
    $('#timer').text(time_left)
}

decrementCount(count)
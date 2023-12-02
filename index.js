const countdownDisplay = document.getElementById("countdown-display")
const countdownDisplayForHoursMinsSec = document.getElementById('countdown-el')

function renderCountdown(year, month, date){
    
    const eventOfTheDay = date
    const exactYearMonthDay = new Date(new Date(year), month, date)
    const exactDateToday = new Date().getTime()
    const timesTilTheEvents = exactYearMonthDay - exactDateToday
    
    const remainingDays = Math.floor(timesTilTheEvents / (1000 * 60 * 60 * 24))
    const remainingHours = Math.floor((timesTilTheEvents % (1000 * 60 * 60 * 24)/(1000 * 60 * 60)))
    const remainingMins = Math.floor((timesTilTheEvents % (1000 * 60 * 60)/(1000 * 60)))
    const remainingSecs = Math.floor((timesTilTheEvents % (1000 * 60)/(1000)))
      
    countdownDisplay.textContent = remainingDays    
    const countdownParagraph = `${remainingHours} Hrs - ${remainingMins} Mins - ${remainingSecs} Secs`
    countdownDisplayForHoursMinsSec.textContent = countdownParagraph
    
}

 
renderCountdown(2023, 11, 25)



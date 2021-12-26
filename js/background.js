
function main() {
    const ranNum = Math.floor(Math.random() * 7);
    
    const month = (new Date()).getMonth();

    let todayMonth;
    
    if (month >= 2 && month <= 4) {
        todayMonth = "spring";
    } else if (month >= 5 && month <= 7) {
        todayMonth = "summer";
    } else if (month >= 8 && month <= 9) {
        todayMonth = "fall";
    } else {
        todayMonth = "winter";
    }
    
    const imageName = `js/background/${todayMonth}_${ranNum}.jpg`
    document.body.style.backgroundImage = `url(${imageName})`;
}

main();
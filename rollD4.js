function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const rollResult = document.getElementById("rollResult");
    const rollDiceImg = document.getElementById("rollDiceImg");
    const imgs = [];
    const values = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 4) + 1;
        values.push(value);
        imgs.push(`<img src="images/d4/${value}.png">`);
    }

    rollResult.textContent = `Dice: ${values.join(', ')}`;
    rollDiceImg.innerHTML = imgs.join('');
}
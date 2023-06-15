input.onButtonPressed(Button.A, function () {
    for (let j = 0; j < 10; j=j+2){
    basic.showNumber(j)
}
})
input.onButtonPressed(Button.B, function () {
    for (let k = 9; k > 0; k=k-2) {
        basic.showNumber(k)
}
})

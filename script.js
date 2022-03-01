function computerPlay(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const array = ["rock", "paper", "scissor"];
const result = computerPlay(array);

console.log(result);

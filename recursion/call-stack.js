function takeShower() {
    return "Showering!";
}

function eatBreakfast() {
    const meal = cookFood();
    return `Eating ${meal}`;
}

function cookFood() {
    const items = ["Oatmeal", "Eggs", "Protein Shake"];
    return items[Math.floor(Math.random()*items.length)];
}

function wakeUp() {
    takeShower();
    eatBreakfast();
    console.log("Ok ready to go work");
}

wakeUp();
// You should "sleep" in the "morning" on "Tuesday".
const words = {
    verb: ['sleep', 'eat', 'jog', 'swim', 'rollerskate'],
    time: ['morning', 'afternoon', 'evening'],
    day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};

let getRandomIndex = arr => {
    return Math.floor(Math.random() * arr.length);
};

let getRandomMessage = (obj) => {
    str = "You should ";
    for (let key in obj) {
        switch (key) {
            case "verb":
                str += obj[key][getRandomIndex(obj[key])];
                break;
            case "time":
                str += " in the " + obj[key][getRandomIndex(obj[key])];
                break;
            case "day":
                str += " on " + obj[key][getRandomIndex(obj[key])];
            default:
                console.log("Something went wrong");
        }
    }
    return str;
};

console.log(getRandomMessage(words))





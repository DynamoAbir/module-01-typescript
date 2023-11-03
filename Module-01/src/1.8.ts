// Object Destructuring
const kokil = {
  id: 345,
  name: {
    firstName: "Mahamudul",
    middleName: "Hasan",
    lastName: "Abir",
  },
  contactNum: "01941992390",
  address: "Madartake",
};

const {
  contactNum,
  name: { middleName },
} = kokil;

// Array Destructuring

const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];

const [, , bestFriend, ...rest] = myFriends;

console.log(bestFriend, rest);

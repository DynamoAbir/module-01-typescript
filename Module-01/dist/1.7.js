"use strict";
{
    // spread Operator
    //  rest Operator
    // destructuring
    //   learn spread operator
    const bros1 = ["Shagor", "Fahim", "Ruble"];
    const bros2 = ["Tanvir", "Jony", "Shaon"];
    bros1.push(...bros2);
    const mentor1 = {
        fucking: "ruble",
        sucking: "kashem",
        rubbing: "kuddus",
    };
    const mentor2 = {
        cricket: "Abir",
        football: "Shaon",
        carram: "shojol",
    };
    const mentorList = Object.assign(Object.assign({}, mentor2), mentor1);
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi${friend}`));
    };
    greetFriends("Abu", "babul", "Kabul");
}

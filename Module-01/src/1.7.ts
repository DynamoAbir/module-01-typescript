{
  // spread Operator
  //  rest Operator
  // destructuring

  //   learn spread operator

  const bros1: string[] | [] = ["Shagor", "Fahim", "Ruble"];
  const bros2: string[] = ["Tanvir", "Jony", "Shaon"];

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

  const mentorList = {
    ...mentor2,
    ...mentor1,
  };

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi${friend}`));
  };
  greetFriends("Abu", "babul", "Kabul");
}

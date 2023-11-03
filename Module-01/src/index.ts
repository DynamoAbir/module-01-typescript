{
  type Faltu = {
    name: string;
    profession: string;
    address: "Madartake";
    age: "25";
  };
  type Valo = {
    name: string;
    profession: "Web Developer";
    address: "Uttora";
    age: "40";
  };

  type Person = Faltu | Valo;

  const user: Person = {
    name: "Abir",
    profession: "Bekar",
    address: "Madartake",
    age: "25",
  };
}

{
  // type Alias
  type Student = {
    name: string;
    age: number;
    gender: string;
    address: string;
    contactNo?: string;
  };

  const student1: Student = {
    name: "Abir",
    age: 25,
    gender: "Male",
    contactNo: "01941992390",
    address: "madartake",
  };

  const student2: Student = {
    name: "Shaon",
    age: 27,
    gender: "male",
    address: "Dhaka",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Abir";
  const isAdmin: IsAdmin = true;

  type Number = (num1: number, num2: number) => number;

  const add: Number = (num1, num2) => {
    return num1 + num2;
  };
}

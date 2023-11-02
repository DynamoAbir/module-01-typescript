// learning funtion

function add(num1: number, num2: number) {
  return num1 + num2;
}

add(2, 3);

const addArrow = (num1: number, num2: number = 10): number => {
  return num1 + num2;
};

const poorUser = {
  name: "Abir",
  balance: 41,
  add(balance: number): string {
    return `my new balance is :${this.balance + balance}`;
  },
};

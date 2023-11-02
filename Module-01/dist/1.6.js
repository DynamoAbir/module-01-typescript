"use strict";
// learning funtion
{
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 3);
    const addArrow = (num1, num2 = 10) => {
        return num1 + num2;
    };
    const poorUser = {
        name: "Abir",
        balance: 41,
        add(balance) {
            return `my new balance is :${this.balance + balance}`;
        },
    };
}

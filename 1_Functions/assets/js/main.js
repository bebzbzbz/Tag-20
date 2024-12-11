// ! LEVEL 1_2

function intro2(paramName) {
    let name = "SuperCoder:in";
    console.log(`Hi ${name}. Mein Name ist ${paramName}.`);
}
intro2("Bea");
intro2("Baby");

// ! LEVEL 1_3

function intro3(name, stadt, alter) {
    console.log(`Hallo, mein Name ist ${name}. Ich bin ${alter} Jahre alt. Ich komme aus ${stadt}.`);
}
intro3("SuperCoder", "Düsseldorf", 27);
intro3("Bea", "Offenbach am Main", 27);

// ! LEVEL 1_5

function math(num1, num2) {
    console.log(`Multiplikation von ${num1} und ${num2}: ${num1 * num2}`);
    console.log(`Division von ${num1} und ${num2}: ${num1 / num2}`);
}
math(10, 2);
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);
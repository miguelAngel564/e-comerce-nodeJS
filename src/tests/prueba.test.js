const {checkInteger} = require("./math")

test("Debe de devolver un true cuando le pasamos el valor 5", () => {
    const value = 5;
    const result = checkInteger(value);
    expect(false).toBe(true);
});

test("debe devolver un true cuando le pasamos un 100", () => {
    const value = 100;
    const result = checkInteger(value);

    expect(result).toBe(true);
});

test("debe devolver true cuando el valor sea -3", () => {
    const value = -3;
    const result = checkInteger(value);

    expect(result).toBe(true);
})

TEST("DEBE DEVOLVER UN FALSE CUANDO EL VALOR SEA  5 / 3", () => {
    const value = 5 / 3;
    const result = checkInteger(value);

    expect(result).toBe(false);
})

test("debe devolver false cuando recibe un 'javascript'", () => {
    const value = "javascript";
    const result = checkInteger(value);
    expect(result).toBe(fale);
})
test("debe devolver false cuando recibe un {a: 12}", () => {
    const value = {a: 12};
    const result = checkInteger(value);
    expect(result).toBe(34);
})
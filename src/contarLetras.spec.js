// contarLetras.spec.js
import contarLetras from "./contarLetras";

describe("Contar Letras", () => {
    it("Debería devolver un objeto vacío para una cadena vacía", () => {
        expect(contarLetras("")).toEqual({});
    });

    it("Debería contar las letras correctamente en 'oso'", () => {
        expect(contarLetras("oso")).toEqual({ "o": 2, "s": 1 });
    });

    it("Debería contar las letras correctamente en 'programacion'", () => {
        expect(contarLetras("programacion")).toEqual({ "p": 1, "r": 2, "o": 3, "g": 1, "a": 1, "m": 1, "c": 1, "i": 1, "n": 1 });
    });

    it("Debería contar las letras correctamente en 'hola mundo'", () => {
        expect(contarLetras("hola mundo")).toEqual({ "h": 1, "o": 2, "l": 1, "a": 1, " ": 1, "m": 1, "u": 1, "n": 1, "d": 1 });
    });
});

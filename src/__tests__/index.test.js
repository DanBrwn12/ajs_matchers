import sortHeroesByHealth from "../index.js"

describe("sortHeroesByHealth", () => {
    it("выводит отсортированных по убыванию героев", () => {
        const heroes = [
            { name: "мечник", health: 10 },
            { name: "маг", health: 100 },
            { name: "лучник", health: 80 }
        ]

        const result = sortHeroesByHealth(heroes)

        const expected = [
            { name: "маг", health: 100 },
            { name: "лучник", health: 80 },
            { name: "мечник", health: 10 }
        ]

        expect(result).toEqual(expected)
    })

    it("проверка пустого массива", () => {
        const heroes = []

        const result = sortHeroesByHealth(heroes)

        expect(result).toEqual([])
    })

    it("проверка массива из одного элемента", () => {
        const heroes = [
            { name: "мечник", health: 10 }
        ]

        const result = sortHeroesByHealth(heroes)

        const expected = [
            { name: "мечник", health: 10 }
        ]

        expect(result).toEqual(expected)
    })

})
import {assertEquals} from "https://deno.land/std@0.51.0/testing/asserts.ts";

Deno.test("Reverse collection", () => {
    const x = [1, 2, 3, 4]

    const y = x.reverse()

    assertEquals(x, [4, 3, 2, 1])
    assertEquals(y, [4, 3, 2, 1])
});

Deno.test("Reverse collection the right way", () => {
    const x = [1, 2, 3, 4]

    const y = [...x].reverse()

    assertEquals(x, [1, 2, 3, 4])
    assertEquals(y, [4, 3, 2, 1])
});

Deno.test("Reverse collection the immutable way", () => {
    const x = [1, 2, 3, 4]

    const y = x.reduce((arr, x) => [x, ...arr], [] as number[])

    assertEquals(x, [1, 2, 3, 4])
    assertEquals(y, [4, 3, 2, 1])
});

Deno.test("Only keep even numbers", () => {
    const x = [1, 2, 3, 4, 5, 6, 7]

    const y = x.reduce((arr, x) => arr, [] as number[])

    assertEquals(x, [1, 2, 3, 4, 5, 6, 7])
    assertEquals(y, [2, 4, 6])
})

Deno.test("Build an array with sum of the numbers in the subarray", () => {
    const x = [[1, 2, 3], [4, 5, 6]]

    const y = x.reduce((arr, x) => arr, [] as number[])

    assertEquals(x, [[1, 2, 3], [4, 5, 6]])
    assertEquals(y, [6, 15])
})

Deno.test("Build a map that joins all the users from the same company in an array, with name of the company as a key", () => {
    const x = [
        {company: 'Taktik', user: 'Simon'},
        {company: 'Taktik', user: 'Antonio'},
        {company: 'iCure', user: 'Lorka'},
        {company: 'iCure', user: 'Lisa'},
        {company: 'iCure', user: 'Antoine'}
    ]

    const xx = JSON.parse(JSON.stringify(x)) //Just to check it hasn't changed

    const y = x.reduce((arr, x) => arr, [] as number[])

    assertEquals(x, xx)
    assertEquals(y, {Taktik: ['Simon', 'Antonio'], iCure: ['Lorka', 'Lisa', 'Antoine']})
})

Deno.test("Index a list of string by their initial character lowercased in a map", () => {
    const x = ['Simon', 'Antonio', 'Lorka', 'Lisa', 'Antoine']

    const xx = JSON.parse(JSON.stringify(x)) //Just to check it hasn't changed

    const y = x.reduce((arr, x) => arr, [] as number[])

    assertEquals(x, xx)
    assertEquals(y, {'s': ['Simon'], 'a':['Antonio', 'Antoine'], 'l': ['Lorka', 'Lisa']})
})
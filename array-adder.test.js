const { arrAdder, arr1, arr2 } = require("./array-adder")

describe("Array adder", () => {
  test("Should return: Just Live Life Man", () => { 
    const output = arrAdder(arr1)
    expect(output).toBe("Just Live Life Man")
  })

  test("Should return: The Mitochondria is the powerhouse of the cell", () => { 
    const output = arrAdder(arr2)
    expect(output).toBe("The Mitochondria is the powerhouse of the cell")
  })
})

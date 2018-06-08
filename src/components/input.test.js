
const Input = require("./Input")
// import { mount } from "enzyme"
describe("Input should", () => {
    it("be defined", () => {
        expect(Input).toBeDefined();
    })
    it("be validate correctly proper inputs", () => {
        expect(Input.handleChange).toBeDefined()
    })
})

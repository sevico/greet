/**
 * Created by swk on 10/1/16.
 */
import {assert} from "chai";
import {greet} from "./index"
describe("greet package",function () {
    it("greet a person by name",function () {
        assert.equal(greet("swk", false), "hello, swk");
    })
})
// describe("greet package",()=>{
//     it("the first test",()=>{
//         assert.equal(2 + 2, 5);
//     })
// })
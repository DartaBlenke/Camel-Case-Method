// teste
//const { assert } = require('chai');

//it("Basic tests",() =>{
//  assert.strictEqual("test case".camelCase(), "TestCase");
//  assert.strictEqual("camel case method".camelCase(), "CamelCaseMethod");
//  assert.strictEqual("say hello ".camelCase(), "SayHello");
//  assert.strictEqual(" camel case word".camelCase(), "CamelCaseWord");
//  assert.strictEqual("".camelCase(), "");
//})

String.prototype.camelCase=function(){
  let word = this.toString().trim().split(' ');
  let array = word.map((x,a,array)=>x?x.slice(0,1).toUpperCase()+x.slice(1):x);
  return array.join('');
}

const { add, err, promiseTest, array, app } = require("../index");
const supertest = require('supertest');

test("toBe", () => {
  expect(add(1, 2)).toBe(3);
});

test("toEqual", () => {
  expect(add(1, 2)).toEqual(3);
});

test("toBeNull", () => {
  expect(add(1, 2)).not.toBeNull();
});

test("toBeGreaterThanOrEqual", () => {
  expect(add(1, 2)).toBeGreaterThanOrEqual(1);
});

test("toBeLessThanOrEqual", () => {
  expect(add(1, 2)).toBeLessThanOrEqual(4);
});

test("toBeCloseTo", () => {
  expect(add(1.1, 2.2)).toBeCloseTo(3.3);
});

test("toMatch", () => {
  expect(add("Hello", "World")).toMatch(/Hello/);
});

test("toThrow Error", () => {
  expect(() => err()).toThrow("I am a new error");
});

describe("Example of multiple cases in one block", () => {
  test("toMatch", () => {
    expect(add("Hello", "World")).toMatch(/Hello/);
  });
  test("toMatch", () => {
    expect(add("Hello", "Ketan")).toMatch(/Hello/);
  });
});

test("PromiseTest positive", () => {
  expect(promiseTest(2, 1)).resolves.toBe("positive");
});

test("PromiseTest negetive", () => {
  expect(promiseTest(1, 2)).rejects.toBe("negetive");
});




//API testing
test("TEST GET users API",async () => {
    await supertest(app)
    .get('/users')
    .expect(200)
    .then(result=>{
        expect(result && result.body && typeof result.body.users =='object')
    })
});



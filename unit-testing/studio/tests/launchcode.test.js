// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("check organization type", function() {
    expect(launchcode.organization).toEqual("nonprofit");
  })
  
  test("check executive director name", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  })

  test("check percentageCoolEmployees value", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  })

  test("check programsOffered array", function(){
    expect(launchcode.programsOffered).toEqual(["Web Development", "Data Analysis", "Liftoff"]);
  })
});

describe("testing launchOutput", function(){
  test("checking return 'Launch' for number divisible by 2", function() {
    expect(launchcode.launchOutput(2)).toEqual("Launch!");
  })

  test("checking return 'Code!' for number divisible by 3", function(){
    expect(launchcode.launchOutput(3)).toEqual("Code!");
  } )

  test("checking return 'Rocks!' for number divisible by 5", function() {
    expect(launchcode.launchOutput(5)).toEqual("Rocks!");
  })

  test("checking return 'Launch Code!' for numbers divisible by 2 and 3", function() {
    expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
    
  })

  test("checking return 'Code Rocks!' for number divisible by 3 and 5", function() {
    expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
  })

  test("checking return 'Launch Rocks!' for number divisible by 2 and 5", function() {
    expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)");
  })

  test("Checking return 'LaunchCode Rocks!' for number divisible by 2, 3, and 5", function() {
    expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
  })

  test("checking return 'Rutabagas! That doesn't work.' for number not divisible by 2, 3, or 5", function() {
    expect(launchcode.launchOutput(17)).toEqual("Rutabagas! That doesn't work.");
  })
})

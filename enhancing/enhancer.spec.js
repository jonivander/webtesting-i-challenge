const { exportAllDeclaration } = require("@babel/types");
const enhancer = require("./enhancer.js");
// test away!

const item = {
  name: "Spiked Iron Tankard of Returning",
  durability: 78,
  enhancement: 0,
};

describe("enhancement success", () => {
  it("increased items enhancement level by 1", () => {
    const expectedItem = {
      name: "Spiked Iron Tankard of Returning",
      durability: 78,
      enhancement: 1,
    };

    expect(enhancer.success(item)).toBe(expectedItem);
  });
});

describe("enhancement fail", () => {
    it("decreases items durability by 5 ", () => {
      const expectedItem = {
        name: "Spiked Iron Tankard of Returning",
        durability: 73,
        enhancement: 0,
      };
  
      expect(enhancer.fail(item)).toBe(expectedItem);
    });
  });

  describe("enhancement repair", () => {
    it("increases items durability to 100 ", () => {
      const expectedItem = {
        name: "Spiked Iron Tankard of Returning",
        durability: 100,
        enhancement: 0,
      };
  
      expect(enhancer.repair(item)).toBe(expectedItem);
    });
  });

  describe("get item", () => {
    it("renames the item", () => {
        const expectedItem = {
            name: "Spiked Iron Tankard of Returning",
            durability: 78,
            enhancement: 0,
          };
  
      expect(enhancer.get(item)).toBe(expectedItem);
    });
  });
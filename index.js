// index.js

class MockDataGen {
  static firstNames = [
    "Abhishek",
    "Kunal",
    "Sidu",
    "Rohit",
    "Heena",
    "Purva",
    "Urvashi",
    "Nitesh",
    "Kartik",
    "Lucky",
    "Yuvraj",
    "Suresh",
  ];

  static lastNames = [
    "Nair",
    "Agrawal",
    "Jain",
    "Gupta",
    "Iyer",
    "Varshney",
    "Trivedi",
    "Tripathi",
    "Chaturvedi",
    "Ranawat",
    "Singh",
    "Paliwal",
  ];

  static generateString(length = 10) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return Array.from({ length }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
  }

  static generateNumber(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static generateBoolean() {
    return Math.random() > 0.5;
  }

  static generateDate(start = new Date(2000, 0, 1), end = new Date()) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  static generateName() {
    const firstName =
      MockDataGen.firstNames[
        Math.floor(Math.random() * MockDataGen.firstNames.length)
      ];
    const lastName =
      MockDataGen.lastNames[
        Math.floor(Math.random() * MockDataGen.lastNames.length)
      ];
    return `${firstName} ${lastName}`;
  }

  static generateData(schema) {
    const data = {};
    for (const key in schema) {
      const value = schema[key];
      if (typeof value === "object" && value !== null) {
        const { type, ...options } = value;
        data[key] = MockDataGen.generateType(type, options);
      } else {
        data[key] = MockDataGen.generateType(value);
      }
    }
    return data;
  }

  static generateType(type, options = {}) {
    switch (type) {
      case "string":
        return MockDataGen.generateString(options.length);
      case "number":
        return MockDataGen.generateNumber(options.min, options.max);
      case "boolean":
        return MockDataGen.generateBoolean();
      case "date":
        return MockDataGen.generateDate(options.start, options.end);
      case "name":
        return MockDataGen.generateName();
      default:
        return null;
    }
  }
}

module.exports = MockDataGen;

// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  it("should user enter name respond with a question]", () => {
    // Input: "";
    // Output:"Hey lovely human, I’m Catzaddy and I’m here to help you choose which one of these cute felines could be yours to adopt and take home. Are you ready?";
    const botReply1 = getBotReply("yes");
    const expectedReply1 =
      "Hey lovely human, I’m Catzaddy and I’m here to help you choose which one of these cute felines could be yours to adopt and take home. Are you ready?";
    expect(botReply1).toEqual(expectedReply1);
  });
});

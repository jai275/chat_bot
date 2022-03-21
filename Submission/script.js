/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

let myLevel = 1;
let path = 0;
let usersName = "";

const affirmativeReplies = ["yes", "y", "yah", "yeah"];
const negativeReplies = ["no", "n", "nah"];
const comedyGenre = ["comedy"];
const actionGenre = ["action"];

const getBotReply = (msg) => {
  // Wait for user input
  if (affirmativeReplies.includes(msg)) {
    // Set myLevel to 1
    myLevel = 1;
    // Set path to 1
    path = 1;

    return "Hey lovely human, I’m Catzaddy and I’m here to help you choose which one of these cute felines could be yours to adopt and take home. Are you ready?";
  } else if (negativeReplies.includes(msg)) {
    return "please enter yes";
    
  } else if (myLevel === 1 && path === 2) {
    // Get user input and assign to userName
    usersName = msg;
    // Set output response
    // Set path to 3
    path = 3;
    return ", do you know what word millenial cats overuse? ——Litter-ally hahah that was hiss-terical Catzaddy thanks you for your interest in adopting from our Second chance shelter. If you are a successful candidate are you able to provide a forever home for this feline?";

    // Check for user input yes and path 3
  }
};

export { getBotReply };

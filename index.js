function writeCards(names, event) {
    let messages = []; // Create an empty array to hold messages
  
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return messages;
  }
  
  // Example call
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  
  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--; // Decrement num after each iteration
    }
  }
  
  // Example call
  countDown(10);
  

{
  const debug = true;

  //Prints logs to the console if "debug" is set to true
  //if giveAlert is true, it alerts the message 
  function dLog(message, giveAlert = false) {
    if(!debug) { return; }
    if(giveAlert) {
      alert(message);
    } else {
      console.log(message);
    }
  }
}

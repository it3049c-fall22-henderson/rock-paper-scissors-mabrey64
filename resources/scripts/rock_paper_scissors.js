class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    const acceptedValue = acceptedValues[Math.floor(Math.random() * acceptedValues.length)];
    return acceptedValue;
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if (userSelection === cpuSelection){
      return "tie";
    }
    if (userSelection === `rock` && cpuSelection === `scissors` || userSelection === `scissors` && cpuSelection === `paper` || userSelection === `paper` && cpuSelection === `rock`){
      return "win"; 
    } else {
      return "lose";
    }
  }
  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    let cpuSelection = this.generateCPUResponse();
    let winner = this.determineWinner(userSelection, cpuSelection);
    if (winner === "win"){
      winner = this.username;
      this.score.user++;} 
    else if (winner === "lose") {
      winner = "CPU";
      this.score.cpu++;
    }
    else {
     winner = "No one";
    }
    const logString = `${this.username} selected ${userSelection} , CPU selected ${cpuSelection} : ${winner} wins.`;
    this.gameHistoryLog.push(logString);
  }

}
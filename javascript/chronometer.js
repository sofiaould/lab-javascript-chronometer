/*class Chronometer {
  constructor() {
  this.currentTime= 0;
   this.intervalId= 0;

  }
  startClick(callback) {
  this.intervalId= setInterval(() => { this.currentTime++;}, 1000);
    

    // ... your code goes here
  }
  getMinutes() {
      let getMinute = math.floor(this.currentTime/ 60);
        
      return getMinute // utiliser math.floor() pour arrondir 
     }
   

 
  getSeconds() {
    let getSecond = this.currentTime / 1000;
    return this.currentTime;
    // ... your code goes here
  }
  twoDigitsNumber() {
    // 1 creer une chaine de charactere 
    //2 arrondir a deux chiffre avec .tofixed(2)
  
  }
  stopClick() {
  clearInterval(this.intervalID);

  }
  resetClick() {
    
    this.currentTime =0;
  }
  splitClick() {
    // ... your code goes here
  }
}
*/

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback()
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return this.currentTime % 60; // rest of the division by 60
  }
  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num}`; // add a 0
    } else {
      return `${num}`;  // just convert to a string
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const mm = this.twoDigitsNumber(this.getMinutes());
    const ss = this.twoDigitsNumber(this.getSeconds());
    return `${mm}:${ss}`;
  }
}
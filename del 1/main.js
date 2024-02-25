function Color(r, g, b, a=1){
  this.r = r, 
  this.g = g, 
  this.b = b, 
  this.a = a,
  this.validInput = CSS.supports('color', `rgb(${[this.r,this.g,this.b,this.a].toString()})`)
}; 


Color.prototype.rgb = function(){
  if(this.validInput) return `rgb(${this.r},${this.g},${this.b})`; 
}

Color.prototype.rgba = function(){
  if(this.a <= 1) return `rgba(${this.r},${this.g},${this.b},${this.a})`;
}

Color.prototype.hex = function(){
  if(this.validInput) return '#' + this.convertToHex(this.r) + this.convertToHex(this.g) + this.convertToHex(this.b) 
}

Color.prototype.convertToHex = function(number){
  const hex = number.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

const black = new Color(237,10,40); 
console.log(black.hex());  //Output: #ed0a28
console.log(black.rgb());  //Output: rgb(237,10,40)
console.log(black.rgba()); //Output: rgba(237,10,40,1)
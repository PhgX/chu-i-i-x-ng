import { Istring } from "./Istring";

export class String implements Istring {  
  private container: Array<string>
  constructor(){
    this.container = [];
  }
  add(value: string): void{
    this.container.push(value);
  }
  // pop(): string | undefined {
  //    return this.container.pop(); 
  // }
  // peek(): string | undefined {
  //   return this.container[this.size() - 1];
  // }
  // size(){
  //   return this.container.length;
  // }
  checkString(){
    this.container = this.container[0].split('');
    let container1 = this.container;
    let flag = -1;
    for(let i = 0; i<this.container.length; i++){      
      if(this.container[i] != container1[container1.length-1-i]){
        flag = 1;
        return console.log('Chuỗi bất đối xứng')       
      }
    }
    if(flag = -1){
      return console.log('Chuỗi đối xứng')
    }
  }
}

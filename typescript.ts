//we are going to use typescript for infrastructure as a code 
//typescript is a programming language developed and maintained by microsoft best describe a super set of a java script

//js
//function greet(name) {
   // console.log("hello, " + name + "!");
//}

//typescript..
function greet(name: number): void { 
    console.log(`hello,  ${name}!` );
}

//in type script we are defining what type of name is (string)
greet(32); //it works because it is a number 
//greet(@omkar) it will never work


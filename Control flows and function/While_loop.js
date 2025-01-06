//it is used to repeat a block of code as long as a specific condition is true
//usefull in cloud where a certain task need to continue  till condition met

let instanceCount = 0;
const targetCount = 5;

while (instanceCount < targetCount) {
    console.log("launching EC2 instance #" + (instanceCount + 1));
    instanceCount++; //increment the counter
}
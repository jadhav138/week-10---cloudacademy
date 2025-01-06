//in programming function is like a reusable recipe a set of instructions to perform a specific tasks , function are crucial for cloud engineering as it helps us to organize our code make it reusable and perform a specific operation on our cloud resources..

//the   function tells js that we are creating functions
//basic functions
//when we choosing function/variable we wanna choose name what function does

function sayHello(){
    console.log("HELLO @CLOUDENGINER");
}

//CALLING FUNCTION
sayHello();

//function parameters
//function can become more powerful when they accepts inputs , parameters 

function deployToRegion(region) {
    console.log("deploying to region: " + region);
}

//CALLING FUNCTION WITH PARAMETERS
deployToRegion("us-east-1");

function configureService(serviceName, tier){
    console.log("configure service:" + serviceName , + tier);
}

configureService("EC2-INSTANCE","t2.micro");
configureService("S3-bucket","standard");
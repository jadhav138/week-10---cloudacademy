//variable const
const API_ENDPOINT = 'https://api.mycloud.com/v1';
console.log(API_ENDPOINT);

//CONFIGURATION MANAGEMENT
const aws_region = 'US-EAST-1';
const max_retries = 3;
const dynamo_table = 'Users';

function fetchUserData(userID) {
    //using this aws constraints  in your AWS SDK CALLS 
}

//SECURITY
const api_key = PROCESS.ENV.API_KEY;
API_KEY= 'new_key';

//preventing bugs
const LAMBDA_TIMEOUT_MS = 3000;

function configurationLambda(functionName){
    LAMBDA_TIMEOUT_MS = 5000;
}


//const :: not suppose to reassign ; this value is should be constant through out the programme
//keypoints : also create the block scope , must be initialized at the time of declaration onces they are assigned with the value the variable identifier cannot be reassigned 
// for example const aws_region, const max_retries, const dynamo_table this value is crucial for deployment , thats const makes sure that these values cannot be modified 
//another reason is security we are using const api_key :: like api key cannot be changed. it is like adding another layer of security 
//3 reason prevent bugs we are setting up constant lambda function time out in milli sec , we set up a time out for lambda function the value inside is cannot be able to reuse
//this prevent the function timing out on a wrong time
//in the fetchuserdata function :: knowing the values are not changed ..

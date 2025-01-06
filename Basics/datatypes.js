//data types in js
//number
const instanceCount = 5;
const cpuUtilization = 75.5;
//int are represent by number type in cloud we can use for instant count , performance matrix, calulating autoscaling logic

console.log(`type of instanceCount`);// output: number
console.log(`type of cpuUtilization`);// output: number

//string
const region = 'us-east-1';
const errorMessage = "resource not found";
const logEntry = `Deployment failed in ${region}:{errorMessage}`;

console.log(typeof region);
//string use resource name, log messages,and configuration values also important generating logs, back tics `` are used for constructing complex string like cloud formation templates   

//boolean 
const isProduction = true;
const debugMode = false;

console.log(typeof isProduction);

if (isProduction && !debugMode) {
    console.log("Running in production mode");

}
//used for condition logic , controling the flow of application , security allow/deny


//undefined
let configFile;
console.log(typeof configure);

if (configFie === undefined) {
    console.log("config file not loaded");
}
//represent variable which has been declare and not assigned a value ; we use undefine to check the value has been defined or not or an optional parameters are being provided, imp for error checking and all configuration are provided 

//null
const cacheResult = null;
console.log(typeof cacheResult);

if (cacheResult === null){
    console.log("no data in cache, fetching from database");
}

//it represent the absense of the value ; it used to represent the absense of value in database qures in api responses 



//object literals

const ec2Instance = {
    instanceId: 'i-owgrvfvgbgrr',
    type: 't2.micro',
    state: 'running',
    launchTime: new Date('2024-4-1T10:00::00Z')

};

//objects in js represent the complex data structure they are key and value pair, we can use objects to represent complex cloud resources ,api responses, 
//it allows us to organize data

console.log(typeof ec2Instance);
console.log(ec2Instance.type);

//arrays
const availabilityZones = ['us-east-1a','us-east-1b','us-east-1c'];
console.log(typeof availabilityZones);
console.log(Array.isArray(availabilityZones));

availabilityZones.forEach(Zone => {
    console.log(`Deploying to ${Zone}`);
});

//special types of objects use for storing order collection data
// we can use arrays to manage list of resources and configuration operation and for batch operation deploying in multi region arch' or even handling list of security groups

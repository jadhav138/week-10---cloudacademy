let region = ["us-east-1","us-east-2","us-east-3, us-west-1"]

for (let i = 0; i < region.length; i++) { 
    console.log("Deploying to region:" + region[i]);
}

//for loop is to repeat the block of code for specific number of times use full in clod engineering for task like back operation,iterating data
//region.length=gives us all elements in the region
//when i is equal to region.length then the loop will stop
//i++ runs end of the iteration Increases the values of i 0,0+1,1+1,1when  i=3 loop end

//array of cloud services
 let cloudServices = ["amazon-ec2","dynamoDB","s3-bucket","Iam user","route-53"]

 for (let i =0; i < cloudServices.length; i++) {
    console.log("using these services:"+ cloudServices[i] +  " service");
 }

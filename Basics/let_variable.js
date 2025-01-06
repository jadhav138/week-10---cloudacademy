//variables, let and const

function deployResources(isProduction) {
    let region = 'us-east-1'; //default region for deployment 

    if (isProduction) {
        let region = "us-east-2";
        console.log(`Deploying production resources in ${region}`);
        //deploy production-specific resources here
    }
    console.log(`setting up monitoring in ${region}`);
    //setting up monitoring
}

deployResources(true); //deploy for production
deployResources(false); //deploy for development 


//variables: let  that can be reassigned ; it has something called block scope which means that its only accessible within the block that  it is declare in 

//to prevent unintended changes , changes inside of the block do not affect out side of the block for example:: the if block is just for production deployment only, and outside of this block the region is a default regin and should be used for general region.

//it is important to use a block function , it is easy to debug the error which is outside of the block . it also gives us configuration clarity helps manages the variable scope . 

//deploying to the wrong region can increase the cost and some time break the system


import * as cdk from '@aws-cdk/core';
import * as  s3  from '@aws-cdk/aws-s3'; // WHICH HELPS US TO WORK WITH S3

export class Mystack extends cdk.stack {//define new class called my stack
    constructor(scope: cdk.constructor, id:string, prop?: cdk.stackProps) {
//constructor 3 parameters:: scope: app contract, id :unique identifier with in out scope , prop: additional properties for our stack
        super(scope,id , props);
//called the constructor of the parent stack class

        //defining s3 bucket
        new s3.Bucket(this, 'MyBucket', {//my bucket logical id of bucket with in our scope

        //object
            versioned: true,
            encryption: s3.BucketEncryption.s3_MANAGED,
        });
    }
}
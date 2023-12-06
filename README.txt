Udemy Course: 
AWS Lambda - A Practical Guide, Daniel Galati

My GitHub:
git@github.com:nirgluzman/AWS-CDK-SQS-Lambda.git

AWS Cloud Development Kit (AWS CDK)
https://docs.aws.amazon.com/cdk/v2/guide/home.html

Working with the AWS CDK in TypeScript
https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html
https://docs.aws.amazon.com/cdk/v2/guide/work-with-cdk-typescript.html

CDK sample project, https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html
cdk init app --language typescript

Prepare the AWS environment to deploy and manage CDK applications:
cdk bootstrap 


-----------------------------
General information
-----------------------------
https://cdkworkshop.com/20-typescript/20-create-project/300-structure.html

*) AWS CDK application defines one or more stacks (unit of deployment).
   All AWS resources defined within the scope of a stack, either directly or indirectly, 
   are provisioned as a single unit.

*) Stacks contain constructs ("cloud component"). Each construct defines one or more concrete AWS resources.

*) The directory structure of an AWS CDK project:
   - bin: entrypoint of the CDK application.
   - lib: stacks and constructs.
   - test: nit tests for your code.
   - tsconfig.json: TypeScript compiler configuration.
   - package.json: npm module manifest; dependencies and scripts for building, testing, and deploying the application.
   - cdk.json: CDK app configuration, specifying the project name, version, and other properties related to the CDK application.

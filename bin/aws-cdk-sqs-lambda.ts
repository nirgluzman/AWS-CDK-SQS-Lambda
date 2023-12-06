#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkSqsLambdaStack } from '../lib/aws-cdk-sqs-lambda-stack';

const app = new cdk.App();
new AwsCdkSqsLambdaStack(app, 'AwsCdkSqsLambdaStack');

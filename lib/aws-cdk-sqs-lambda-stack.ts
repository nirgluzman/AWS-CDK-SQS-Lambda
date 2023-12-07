import {Duration, Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';

import {Queue} from 'aws-cdk-lib/aws-sqs';

import {SqsEventSource} from 'aws-cdk-lib/aws-lambda-event-sources';

import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import {Runtime} from 'aws-cdk-lib/aws-lambda';

import {join} from 'path';

export class AwsCdkSqsLambdaStack extends Stack {
	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props);

		// create SQS queue
		const queue = new Queue(this, 'AwsCdkSqsLambdaQueue', {
			visibilityTimeout: Duration.seconds(300), // max time a message can be processed by a consumer before it becomes visible to other consumers.
		});

		// create Lambda function
		// NodejsFunction construct creates a Lambda function with automatic transpiling and bundling.
		const sqsLambda = new NodejsFunction(this, 'SQSLambda', {
			runtime: Runtime.NODEJS_LATEST,
			handler: 'sqsHandler',
			entry: join(__dirname, '..', 'lambda', 'handler.ts'),
			environment: {
				QUEUE_URL: queue.queueUrl,
			},
		});

		// use SQS queue as an event source for Lambda.
		sqsLambda.addEventSource(
			new SqsEventSource(queue, {
				enabled: true, // enable the event source mapping.
			})
		);
	}
}

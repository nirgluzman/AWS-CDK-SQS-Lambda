// https://repost.aws/questions/QUhwlsiBxIS1mq9GxxW2cNWw/typescript-types-for-sqs-messages-in-lambda-function
// https://docs.aws.amazon.com/lambda/latest/dg/with-sqs-create-package.html

// Lambda function to receive an Amazon SQS event message as input and processes it.
import {type SQSEvent} from 'aws-lambda';

export const sqsHandler = async (event: SQSEvent) => {
	console.log('Received event:', event);

	event.Records.forEach((record) => {
		const {body} = record;
		console.log(body);
	});

	return {};
};

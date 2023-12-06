import {type APIGatewayProxyEvent, type APIGatewayProxyResult} from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent) => {
	console.log('Received event:', event);

	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify('Hello from Lambda!'),
	};

	return response;
};

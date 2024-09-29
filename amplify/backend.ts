import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { Stack } from "aws-cdk-lib";
import {
  AuthorizationType,
  CognitoUserPoolsAuthorizer,
  Cors,
  LambdaIntegration,
  RestApi, TokenAuthorizer
} from "aws-cdk-lib/aws-apigateway";
import { Policy, PolicyStatement, Effect} from "aws-cdk-lib/aws-iam";
import { myApiFunction } from "./functions/api-function/resource";
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  myApiFunction,
});

const apiStack = backend.createStack("api-stack");

// create a new REST API
const myRestApi = new RestApi(apiStack, "RestApi", {
  restApiName: "myRestApi",
  deploy: true,
  deployOptions: {
    stageName: "dev",
  },
  defaultCorsPreflightOptions: {
    allowOrigins: Cors.ALL_ORIGINS, // Restrict this to domains you trust
    allowMethods: Cors.ALL_METHODS, // Specify only the methods you need to allow
    allowHeaders: Cors.DEFAULT_HEADERS, // Specify only the headers you need to allow
  },
});

// create a new Lambda integration
const lambdaIntegration = new LambdaIntegration(
  backend.myApiFunction.resources.lambda
);

// create a new resource path with IAM authorization
const itemsPath = myRestApi.root.addResource("items", {
  defaultMethodOptions: {
    authorizationType: AuthorizationType.IAM,
  },
});

// add methods you would like to create to the resource path
itemsPath.addMethod("GET", lambdaIntegration);
itemsPath.addMethod("POST", lambdaIntegration);
itemsPath.addMethod("DELETE", lambdaIntegration);
itemsPath.addMethod("PUT", lambdaIntegration);

// add a proxy resource path to the API
itemsPath.addProxy({
  anyMethod: true,
  defaultIntegration: lambdaIntegration,
});

// create a new Cognito User Pools authorizer
const cognitoAuth = new CognitoUserPoolsAuthorizer(apiStack, "CognitoAuth", {
  cognitoUserPools: [backend.auth.resources.userPool],
});

// create a new resource path with Cognito authorization
const booksPath = myRestApi.root.addResource("cognito-auth-path");
booksPath.addMethod("GET", lambdaIntegration, {
  authorizationType: AuthorizationType.COGNITO,
  authorizer: cognitoAuth,
});

// create a new IAM policy to allow Invoke access to the API
const apiRestPolicy = new Policy(apiStack, "RestApiPolicy", {
  statements: [
    new PolicyStatement({
      effect: Effect.ALLOW,
      //TODO: Check which actions and resources are needed for the Get to work
      actions: ["execute-api:Invoke",
        'dynamodb:GetItem',
        'dynamodb:PutItem',
        'dynamodb:UpdateItem',
        'dynamodb:DeleteItem',
        'dynamodb:Query',
        'dynamodb:Scan',
        'appsync:GraphQL'
      ],
      resources: [
        `${myRestApi.arnForExecuteApi("*", "/items", "dev")}`,
        `${myRestApi.arnForExecuteApi("*", "/items/*", "dev")}`,
        `${myRestApi.arnForExecuteApi("*", "/cognito-auth-path", "dev"),
        'arn:aws:lambda:eu-north-1:*:*',
        "arn:aws:appsync:eu-north-1:*:apis/*/*",
        "arn:aws:dynamodb:eu-north-1:*:table/*"
        }`,
      ],
    }),
  ],
});

// attach the policy to the authenticated and unauthenticated IAM roles
backend.auth.resources.authenticatedUserIamRole.attachInlinePolicy(
  apiRestPolicy
);
backend.myApiFunction.resources.lambda.role?.attachInlinePolicy(apiRestPolicy);
backend.auth.resources.unauthenticatedUserIamRole.attachInlinePolicy(
  apiRestPolicy
);

// add outputs to the configuration file
backend.addOutput({
  custom: {
    API: {
      [myRestApi.restApiName]: {
        endpoint: myRestApi.url,
        region: Stack.of(myRestApi).region,
        apiName: myRestApi.restApiName,
      },
    },
  },
});

// create a new REST API
const myPocApi = new RestApi(apiStack, "PocRestApi", {
  restApiName: "myPocApi",
  deploy: true,
  deployOptions: {
    stageName: "dev",
  },
  defaultCorsPreflightOptions: {
    allowOrigins: Cors.ALL_ORIGINS, // Restrict this to domains you trust
    allowMethods: Cors.ALL_METHODS, // Specify only the methods you need to allow
    allowHeaders: Cors.DEFAULT_HEADERS, // Specify only the headers you need to allow
  },
});

// create a new Lambda integration
const pocLambdaIntegration = new LambdaIntegration(
  backend.myApiFunction.resources.lambda
);

// create a new resource path with IAM authorization
const helmetsPath = myPocApi.root.addResource("helmets", {
  defaultMethodOptions: {
    authorizationType: AuthorizationType.IAM,
  },
});

// // Create the Lambda function for the custom authorizer
// const authorizerFunction = new Function(apiStack, 'AdminAuthorizerFunction', {
//   runtime: Runtime.NODEJS_LATEST,
//   handler: 'index.handler',
//   code: Code.fromAsset('lambda'), // Ensure you have a 'lambda' directory with the authorizer code
// });

// // Grant the Lambda function permissions to access Cognito
// backend.auth.resources.userPool.grant(authorizerFunction, 'cognito-idp:AdminGetUser');

// // Create the custom authorizer
// const adminAuthorizer = new TokenAuthorizer(apiStack, 'AdminAuthorizer', {
//   handler: authorizerFunction,
// });
// create a new Cognito User Pools authorizer
const cognitoAuthPoc = new CognitoUserPoolsAuthorizer(apiStack, "CognitoAuthPoc", {
  cognitoUserPools: [backend.auth.resources.userPool],
});
// add methods you would like to create to the resource path
// helmetsPath.addMethod("GET", pocLambdaIntegration
//   ,{
//   authorizationType: AuthorizationType.COGNITO,
//   authorizer: cognitoAuthPoc,
// }
// );
helmetsPath.addMethod('GET', pocLambdaIntegration, {
//  authorizationType: AuthorizationType.COGNITO,
//  authorizer: cognitoAuthPoc,
  // methodResponses: [{
  //   statusCode: '200',
  //   responseParameters: {
  //     'method.response.header.Access-Control-Allow-Origin': true,
  //     'method.response.header.Access-Control-Allow-Headers': true,
  //     'method.response.header.Access-Control-Allow-Methods': true,
  //   },
  // }],
});
helmetsPath.addMethod("POST", pocLambdaIntegration);
helmetsPath.addMethod("DELETE", pocLambdaIntegration);
helmetsPath.addMethod("PUT", pocLambdaIntegration);

// add a proxy resource path to the API
helmetsPath.addProxy({
  anyMethod: true,
  defaultIntegration: pocLambdaIntegration,
});
// create a new resource path with IAM authorization
const impactsPath = myPocApi.root.addResource("impacts", {
  defaultMethodOptions: {
    authorizationType: AuthorizationType.IAM,
  },
});

// add methods you would like to create to the resource path
impactsPath.addMethod("GET", pocLambdaIntegration);
impactsPath.addMethod("POST", pocLambdaIntegration);
impactsPath.addMethod("DELETE", pocLambdaIntegration);
impactsPath.addMethod("PUT", pocLambdaIntegration);

// add a proxy resource path to the API
impactsPath.addProxy({
  anyMethod: true,
  defaultIntegration: pocLambdaIntegration,
});

// create a new resource path with Cognito authorization
const cognitoAuthPath = myPocApi.root.addResource("cognito-auth-path");
cognitoAuthPath.addMethod("GET", pocLambdaIntegration, {
  authorizationType: AuthorizationType.COGNITO,
  authorizer: cognitoAuthPoc,
});

// create a new IAM policy to allow Invoke access to the API
const pocRestPolicy = new Policy(apiStack, "pocRestPolicy", {
  statements: [
    new PolicyStatement({
      effect: Effect.ALLOW,
      //TODO: Check which actions and resources are needed for the Get to work
      actions: ["execute-api:Invoke",
        'dynamodb:GetItem',
        'dynamodb:PutItem',
        'dynamodb:UpdateItem',
        'dynamodb:DeleteItem',
        'dynamodb:Query',
        'dynamodb:Scan',
        'appsync:GraphQL'
      ],
      resources: [
        `${myPocApi.arnForExecuteApi("*", "/helmets", "dev")}`,
        `${myPocApi.arnForExecuteApi("*", "/helmets/*", "dev")}`,
        `${myPocApi.arnForExecuteApi("*", "/impacts", "dev")}`,
        `${myPocApi.arnForExecuteApi("*", "/impacts/*", "dev")}`,
        `${myPocApi.arnForExecuteApi("*", "/cognito-auth-path", "dev"),
        'arn:aws:lambda:eu-north-1:*:*',
        "arn:aws:appsync:eu-north-1:*:apis/*/*",
        "arn:aws:dynamodb:eu-north-1:*:table/*"
        }`,
      ],
    }),
  ],
});

// create a new IAM policy to allow Invoke access to the API
const pocRestPolicyUnAuth = new Policy(apiStack, "pocRestPolicyUnAuth", {
  statements: [
    new PolicyStatement({
      effect: Effect.ALLOW,
      //TODO: Check which actions and resources are needed for the Get to work
      actions: ["execute-api:Invoke",
        'dynamodb:GetItem',
        'dynamodb:Query',
        'dynamodb:Scan',
        'appsync:GraphQL'
      ],
      resources: [
        `${myPocApi.arnForExecuteApi("*", "/helmets", "dev")}`,
        `${myPocApi.arnForExecuteApi("*", "/helmets/*", "dev")}`,
        `${myPocApi.arnForExecuteApi("*", "/impacts", "dev")}`,
        `${myPocApi.arnForExecuteApi("*", "/impacts/*", "dev")}`,
        `${myPocApi.arnForExecuteApi("*", "/cognito-auth-path", "dev"),
        'arn:aws:lambda:eu-north-1:*:*',
        "arn:aws:appsync:eu-north-1:*:apis/*/*",
        "arn:aws:dynamodb:eu-north-1:*:table/*"
        }`,
      ],
    }),
  ],
});

// attach the policy to the authenticated and unauthenticated IAM roles
backend.auth.resources.authenticatedUserIamRole.attachInlinePolicy(
  pocRestPolicy
);
backend.myApiFunction.resources.lambda.role?.attachInlinePolicy(pocRestPolicy);
backend.auth.resources.unauthenticatedUserIamRole.attachInlinePolicy(
  pocRestPolicyUnAuth
);

// add outputs to the configuration file
backend.addOutput({
  custom: {
    API: {
      [myPocApi.restApiName]: {
        endpoint: myPocApi.url,
        region: Stack.of(myPocApi).region,
        apiName: myPocApi.restApiName,
      },
    },
  },
});

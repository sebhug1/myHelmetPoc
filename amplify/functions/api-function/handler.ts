import type { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  ScanCommand,
  PutCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

const clientddb = new DynamoDBClient({ region: "eu-north-1" }); // Adjust region as needed
const docClient = DynamoDBDocumentClient.from(clientddb);
const TABLE_NAME = "MyHelmetPocTable";

interface HelmetItem {
  HelmetID: string;
  SortKey: string;
}

const handleGetHelmet = async (event: any): Promise<APIGatewayProxyResult> => {
  try {
    // Parse the incoming event
    console.log(event);
    //const params = { TableName: TABLE_NAME };
    const params = {
      TableName: TABLE_NAME,
      FilterExpression: "HelmetID = :helmetValue",
      ExpressionAttributeValues: {
        ":helmetValue": event.pathParameters.HelmetID,
      },
    };
    /*const params = {
      TableName: "HelmetPocTable",
      ProjectionExpression: "Helmet, #f, Direction",
      ExpressionAttributeNames: {
          "#f": "Force"
      }
  };*/
    let allHelmets = await docClient.send(new ScanCommand(params));
    console.log("allHelmets", allHelmets);
    console.log("stringify", JSON.stringify(allHelmets.Items));
    //console.log(JSON.parse(allHelmets));
    return {
      statusCode: 200,
      headers: getCorsHeaders(),
      body: JSON.stringify(allHelmets.Items),
    };
  } catch (error) {
    console.error("Error:", error);
    // Use callback to return the error response
    return {
      statusCode: 500,
      headers: getCorsHeaders(),
      body: JSON.stringify({ message: "Error" }),
    };
  }
};

const handleGetHelmets = async (event: any): Promise<APIGatewayProxyResult> => {
  try {
    console.log(event);
    //const params = { TableName: TABLE_NAME };
    const params = {
      TableName: TABLE_NAME,
      FilterExpression: "SortKey = :sortKeyValue",
      ExpressionAttributeValues: {
        ":sortKeyValue": "METADATA",
      },
    };

    let allHelmets = await docClient.send(new ScanCommand(params));
    console.log("allHelmets", allHelmets);
    console.log("stringify", JSON.stringify(allHelmets.Items));

    return {
      statusCode: 200,
      headers: getCorsHeaders(),
      body: JSON.stringify(allHelmets.Items),
    };
  } catch (errors) {
    console.log("Get errors", errors);
    return {
      statusCode: 400,
      headers: getCorsHeaders(),
      body: JSON.stringify({ message: "Error", errors: errors }),
    };
  }
};

const handleGetImpacts = async (event: any): Promise<APIGatewayProxyResult> => {
  try {
    // Parse the incoming event
    console.log(event);
    //const params = { TableName: TABLE_NAME };

    //let allImpacts = await docClient.send(new ScanCommand(params));
    const params = {
      TableName: "MyHelmetPocTable",
      FilterExpression: "begins_with(SortKey, :sortKeyPrefix)",
      ExpressionAttributeValues: {
        ":sortKeyPrefix": "Impact#",
      },
    };
    let allImpacts = await docClient.send(new ScanCommand(params));

    console.log("allImpacts", allImpacts);
    console.log("stringify", JSON.stringify(allImpacts.Items));
    return {
      statusCode: 200,
      headers: getCorsHeaders(),
      body: JSON.stringify(allImpacts.Items),
    };
  } catch (error) {
    console.error("Error:", error);
    // Use callback to return the error response
    return {
      statusCode: 400,
      headers: getCorsHeaders(),
      body: JSON.stringify({ message: "Error" }),
    };
  }
};

const handlePostImpacts = async (
  event: any
): Promise<APIGatewayProxyResult> => {
  try {
    // Parse the incoming event
    console.log(event);
    console.log("Event:", JSON.stringify(event, null, 2));
    let body = event.body;
    // If body is a string (real HTTP request), parse it
    if (typeof body === "string") {
      body = JSON.parse(body);
    }

    // Check if the HelmetID exists with METADATA SortKey
    const getParams = {
      TableName: "MyHelmetPocTable",
      Key: {
        HelmetID: body.HelmetID,
        SortKey: "METADATA"
      }
    };

    const getResult = await docClient.send(new GetCommand(getParams));

    if (!getResult.Item) {
      return {
        statusCode: 400,
        headers: getCorsHeaders(),
        body: JSON.stringify({ message: "HelmetID does not exist with METADATA entry" }),
      };
    }

    const params = {
      TableName: "MyHelmetPocTable",
      Item: {
        HelmetID: body.HelmetID,
        SortKey: body.SortKey,
        ...(body.Force !== undefined && { Force: body.Force }),
        ...(body.Direction !== undefined && { Direction: body.Direction }),
        createdAt: new Date().toISOString(),
      },
    };

    /*const params = {
            TableName: "HelmetPocTable",
            Item: {
                "Helmet": body.Helmet,
                "Alias": body.Alias
               // "Impact": body.Impact,
              //  "Force": body.Force,
              //  "Direction": body.Direction
            }
    };*/
    console.log(params);
    await docClient.send(new PutCommand(params));

    return {
      statusCode: 200,
      headers: getCorsHeaders(),
      body: JSON.stringify({ message: "Item created successfully" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers: getCorsHeaders(),
      body: JSON.stringify({
        message: "Error processing request",
      }),
    };
  }
};

const handlePostHelmets = async (
  event: any
): Promise<APIGatewayProxyResult> => {
  try {
    // Parse the incoming event
    console.log(event);
    console.log("Event:", JSON.stringify(event, null, 2));
    let body = event.body;
    // If body is a string (real HTTP request), parse it
    if (typeof body === "string") {
      body = JSON.parse(body);
    }
    console.log("body.Helmet", body.Helmet);
    const params = {
      TableName: "MyHelmetPocTable",
      Item: {
        HelmetID: body.HelmetID,
        SortKey: body.SortKey,
        ...(body.Alias !== undefined && { Alias: body.Alias }),
      },
    };

    console.log(params);
    await docClient.send(new PutCommand(params));

    return {
      statusCode: 200,
      headers: getCorsHeaders(),
      body: JSON.stringify({ message: "Item created successfully" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers: getCorsHeaders(),
      body: JSON.stringify({
        message: "Error processing request",
      }),
    };
  }
};

const handleDeleteHelmets = async (
  event: any
): Promise<APIGatewayProxyResult> => {
  try {
    // Parse the incoming event
    console.log(event);
    console.log("Event:", JSON.stringify(event, null, 2));
    let body = event.body;
    // If body is a string (real HTTP request), parse it
    if (typeof body === "string") {
      body = JSON.parse(body);
    }
    interface ScanParams {
      TableName: string;
      ExclusiveStartKey?: { [key: string]: any };
    }
    const scanParams: ScanParams = {
      TableName: "MyHelmetPocTable",
    };
    let items: HelmetItem[] = [];
    let scanResult;
    do {
      const scanCommand = new ScanCommand(scanParams);
      scanResult = await docClient.send(scanCommand);
      items = items.concat(scanResult.Items as HelmetItem[]);
      scanParams.ExclusiveStartKey = scanResult.LastEvaluatedKey;
    } while (scanResult.LastEvaluatedKey);

    console.log(`Found ${items.length} items to delete.`);

    for (const item of items) {
      const deleteParams = {
        TableName: "MyHelmetPocTable",
        Key: {
          HelmetID: item.HelmetID,
          SortKey: item.SortKey,
        },
      };

      const deleteCommand = new DeleteCommand(deleteParams);
      await docClient.send(deleteCommand);
    }
    return {
      statusCode: 200,
      headers: getCorsHeaders(),
      body: JSON.stringify({
        message: "MyHelmetPocTable cleared successfully",
      }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers: getCorsHeaders(),
      body: JSON.stringify({
        message: "Error processing request",
      }),
    };
  }
};

const handleDeleteImpacts = async (
  event: any
): Promise<APIGatewayProxyResult> => {
  try {
    console.log("Event:", JSON.stringify(event, null, 2));
    interface ScanParams {
      TableName: string;
      FilterExpression: string;
      ExpressionAttributeValues: { [key: string]: any };
      ExclusiveStartKey?: { [key: string]: any };
    }
    const scanParams: ScanParams = {
      TableName: "MyHelmetPocTable",
      FilterExpression: "begins_with(SortKey, :prefix)",
      ExpressionAttributeValues: {
        ":prefix": "Impact#",
      },
    };

    let items: HelmetItem[] = [];
    let scanResult;

    do {
      const scanCommand = new ScanCommand(scanParams);
      scanResult = await docClient.send(scanCommand);
      items = items.concat(scanResult.Items as HelmetItem[]);
      scanParams.ExclusiveStartKey = scanResult.LastEvaluatedKey;
    } while (scanResult.LastEvaluatedKey);

    console.log(`Found ${items.length} items to delete.`);

    for (const item of items) {
      const deleteParams = {
        TableName: "MyHelmetPocTable",
        Key: {
          HelmetID: item.HelmetID,
          SortKey: item.SortKey,
        },
      };

      const deleteCommand = new DeleteCommand(deleteParams);
      await docClient.send(deleteCommand);
    }

    return {
      statusCode: 200,
      headers: getCorsHeaders(),
      body: JSON.stringify({
        message: `Successfully deleted ${items.length} items with SortKey beginning with Impact#`,
      }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers: getCorsHeaders(),
      body: JSON.stringify({ message: "Error processing request" }),
    };
  }
};
export const handler: APIGatewayProxyHandler = async (event) => {
  console.log("handler event", event);
  try {
    switch (event.httpMethod) {
      case "GET":
        if (event.path === "/helmets") {
          if (event.pathParameters && event.pathParameters.HelmetID) {
            return await handleGetHelmet(event);
          } else {
            return await handleGetHelmets(event);
          }
        } else {
          return await handleGetImpacts(event);
        }
      case "POST":
        if (event.path === "/helmets") {
          return await handlePostHelmets(event);
        } else {
          return await handlePostImpacts(event);
        }
      case "DELETE":
        if (event.path === "/helmets") {
          return await handleDeleteHelmets(event);
        } else {
          return await handleDeleteImpacts(event);
        }
      default:
        return {
          statusCode: 405,
          headers: getCorsHeaders(),
          body: JSON.stringify({ message: "Method Not Allowed" }),
        };
    }
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers: getCorsHeaders(),
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};

function getCorsHeaders() {
  return {
    //"Access-Control-Allow-Origin": "*", // Restrict this to domains you trust
    //"Access-Control-Allow-Headers": "*", // Specify only the headers you need to allow
    "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent",
    "Access-Control-Allow-Methods": "OPTIONS,GET,PUT,POST,DELETE",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",

    //  "Access-Control-Allow-Origin": "*", // Restrict this to domains you trust
    //  "Access-Control-Allow-Headers":
    //    "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
    // "Access-Control-Allow-Methods": "DELETE,GET,POST,OPTIONS",
  };
}

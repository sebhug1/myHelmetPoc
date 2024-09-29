import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import outputs from "../../amplify_outputs.json";
import { post, put, get, del } from "aws-amplify/api";
//import { Schema } from "../../data/resource";
import { fetchAuthSession } from "aws-amplify/auth";
import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as iam from "aws-cdk-lib/aws-iam";
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */
// const session = await fetchAuthSession();
// const token = session.tokens?.idToken
// console.log(session);
Amplify.configure(outputs);
const existingConfig = Amplify.getConfig();
Amplify.configure({
  ...existingConfig,
  API: {
    ...existingConfig.API,
    REST: {
      ...outputs.custom.API,
    },
  },
});

// Generate API client
const client = generateClient({
  authMode: "userPool",
});

// Export the configured client
export { client };

//TODO: If needed

// export async function getHelmet(helmet) {
//   try {
//     const restOperation = get({
//       apiName: "myPocApi",
//       path: `helmets/${helmet.helmetID}`,
//     });

//     const { body } = await restOperation.response;
//     const json = await body.json();

//     console.log("getHelmet call succeeded", json);
//     return { success: true, data: json };
//   } catch (error) {
//     console.log("getHelmet call failed: ", error);
//     return { success: false, data: error };
//   }
// }
// export async function putHelmet(helmet) {
//   try {
//     const restOperation = put({
//       apiName: "myPocApi",
//       path: `helmets/${helmet.helmetID}`,
//       options: {
//         body: {
//           Alias: helmet.alias ? helmet.alias : undefined,
//           SortKey: "METADATA",
//         },
//       },
//     });

//     const { body } = await restOperation.response;
//     const json = await body.json();

//     console.log("putHelmet call succeeded", json);
//     return { success: true, data: json };
//   } catch (error) {
//     console.log("putHelmet call failed: ", error);
//     return { success: false, data: error };
//   }
// }

export async function deleteHelmets() {
  try {
    const restOperation = del({
      apiName: "myPocApi",
      path: "helmets",
    });

    const { body } = await restOperation.response;
    const json = await body.json();

    console.log("deleteHelmets call succeeded", json);
    return { success: true, data: json };
  } catch (error) {
    console.log("deleteHelmets call failed: ", error);
    return { success: false, data: error };
  }
}

export async function postHelmet(helmet) {
  try {
    const restOperation = post({
      apiName: "myPocApi",
      path: "helmets",
      options: {
        body: {
          HelmetID: String(helmet.helmetID),
          Alias: helmet.alias ? helmet.alias : undefined,
          SortKey: "METADATA",
        },
      },
    });

    const { body } = await restOperation.response;
    const json = await body.json();
    console.log("postHelmet call succeeded", json);
    return { success: true, data: json };
  } catch (error) {
    console.log("postHelmet call failed: ", error);
    return { success: false, data: error };
  }
}

async function getAuthHeader() {
  try {
    const { idToken } = (await fetchAuthSession()).tokens ?? {};
    return idToken ? { Authorization: `Bearer ${idToken.toString()}` } : {};
  } catch (error) {
    console.error('Error getting auth session', error);
    return {};
  }
}

export async function getHelmets() {
  try {
    const restOperation = get({
      apiName: "myPocApi",
      path: "helmets",
      // Set this header if using AWS Cognito Authorizer on the API
      // options: {
      //   headers: await getAuthHeader()
      // }
    });
    const response = await restOperation.response;
    const json = await response.body.json();
    console.log("getHelmets call succeeded: ", json);
    return { success: true, data: json };
  } catch (error) {
    console.log("getHelmets call failed: ", error);
    return { success: false, data: error };
  }
}
export async function getImpacts() {
  try {
    const restOperation = get({
      apiName: "myPocApi",
      path: "impacts",
    });

    const response = await restOperation.response;
    const json = await response.body.json();
    console.log("getImpacts call succeeded: ", json);
    return { success: true, data: json };
  } catch (error) {
    console.log("getImpacts call failed: ", error);
    return { success: false, data: error };
  }
}
export async function deleteImpacts() {
  try {
    const restOperation = del({
      apiName: "myPocApi",
      path: "impacts",
    });

    const { body } = await restOperation.response;
    const json = await body.json();

    console.log("deleteImpacts call succeeded", json);
    return { success: true, data: json };
  } catch (error) {
    console.log("deleteImpacts call failed: ", error);
    return { success: false, data: error };
  }
}
export async function postImpact(impact) {
  try {
    const restOperation = post({
      apiName: "myPocApi",
      path: "impacts",
      options: {
        body: {
          HelmetID: String(impact.helmetID),
          Force: impact.Force,
          Direction: impact.Direction,
          SortKey: "Impact#" + String(impact.SortKey),
        },
      },
    });

    const { body } = await restOperation.response;
    const json = await body.json();

    console.log("postImpact call succeeded", json);
    return { success: true, data: json };
  } catch (error) {
    console.log("postImpact call failed: ", error);
    return { success: false, data: error };
  }
}

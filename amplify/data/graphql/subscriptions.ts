/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateHelmet = /* GraphQL */ `subscription OnCreateHelmet(
  $filter: ModelSubscriptionHelmetFilterInput
  $profileOwner: String
) {
  onCreateHelmet(filter: $filter, profileOwner: $profileOwner) {
    alias
    createdAt
    id
    impacts {
      nextToken
      __typename
    }
    isDone
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateHelmetSubscriptionVariables,
  APITypes.OnCreateHelmetSubscription
>;
export const onCreateImpact = /* GraphQL */ `subscription OnCreateImpact(
  $filter: ModelSubscriptionImpactFilterInput
  $profileOwner: String
) {
  onCreateImpact(filter: $filter, profileOwner: $profileOwner) {
    createdAt
    force
    helmet {
      alias
      createdAt
      id
      isDone
      profileOwner
      updatedAt
      __typename
    }
    helmetId
    id
    isDone
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateImpactSubscriptionVariables,
  APITypes.OnCreateImpactSubscription
>;
export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    content
    createdAt
    id
    isDone
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onCreateUserProfile(filter: $filter, profileOwner: $profileOwner) {
    createdAt
    email
    id
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onDeleteHelmet = /* GraphQL */ `subscription OnDeleteHelmet(
  $filter: ModelSubscriptionHelmetFilterInput
  $profileOwner: String
) {
  onDeleteHelmet(filter: $filter, profileOwner: $profileOwner) {
    alias
    createdAt
    id
    impacts {
      nextToken
      __typename
    }
    isDone
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteHelmetSubscriptionVariables,
  APITypes.OnDeleteHelmetSubscription
>;
export const onDeleteImpact = /* GraphQL */ `subscription OnDeleteImpact(
  $filter: ModelSubscriptionImpactFilterInput
  $profileOwner: String
) {
  onDeleteImpact(filter: $filter, profileOwner: $profileOwner) {
    createdAt
    force
    helmet {
      alias
      createdAt
      id
      isDone
      profileOwner
      updatedAt
      __typename
    }
    helmetId
    id
    isDone
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteImpactSubscriptionVariables,
  APITypes.OnDeleteImpactSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    content
    createdAt
    id
    isDone
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onDeleteUserProfile(filter: $filter, profileOwner: $profileOwner) {
    createdAt
    email
    id
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onUpdateHelmet = /* GraphQL */ `subscription OnUpdateHelmet(
  $filter: ModelSubscriptionHelmetFilterInput
  $profileOwner: String
) {
  onUpdateHelmet(filter: $filter, profileOwner: $profileOwner) {
    alias
    createdAt
    id
    impacts {
      nextToken
      __typename
    }
    isDone
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateHelmetSubscriptionVariables,
  APITypes.OnUpdateHelmetSubscription
>;
export const onUpdateImpact = /* GraphQL */ `subscription OnUpdateImpact(
  $filter: ModelSubscriptionImpactFilterInput
  $profileOwner: String
) {
  onUpdateImpact(filter: $filter, profileOwner: $profileOwner) {
    createdAt
    force
    helmet {
      alias
      createdAt
      id
      isDone
      profileOwner
      updatedAt
      __typename
    }
    helmetId
    id
    isDone
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateImpactSubscriptionVariables,
  APITypes.OnUpdateImpactSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    content
    createdAt
    id
    isDone
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onUpdateUserProfile(filter: $filter, profileOwner: $profileOwner) {
    createdAt
    email
    id
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;

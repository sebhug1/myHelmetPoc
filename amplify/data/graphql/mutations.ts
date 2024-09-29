/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createHelmet = /* GraphQL */ `mutation CreateHelmet(
  $condition: ModelHelmetConditionInput
  $input: CreateHelmetInput!
) {
  createHelmet(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateHelmetMutationVariables,
  APITypes.CreateHelmetMutation
>;
export const createImpact = /* GraphQL */ `mutation CreateImpact(
  $condition: ModelImpactConditionInput
  $input: CreateImpactInput!
) {
  createImpact(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateImpactMutationVariables,
  APITypes.CreateImpactMutation
>;
export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $condition: ModelTodoConditionInput
  $input: CreateTodoInput!
) {
  createTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    isDone
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: CreateUserProfileInput!
) {
  createUserProfile(condition: $condition, input: $input) {
    createdAt
    email
    id
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const deleteHelmet = /* GraphQL */ `mutation DeleteHelmet(
  $condition: ModelHelmetConditionInput
  $input: DeleteHelmetInput!
) {
  deleteHelmet(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteHelmetMutationVariables,
  APITypes.DeleteHelmetMutation
>;
export const deleteImpact = /* GraphQL */ `mutation DeleteImpact(
  $condition: ModelImpactConditionInput
  $input: DeleteImpactInput!
) {
  deleteImpact(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteImpactMutationVariables,
  APITypes.DeleteImpactMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $condition: ModelTodoConditionInput
  $input: DeleteTodoInput!
) {
  deleteTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    isDone
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: DeleteUserProfileInput!
) {
  deleteUserProfile(condition: $condition, input: $input) {
    createdAt
    email
    id
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const updateHelmet = /* GraphQL */ `mutation UpdateHelmet(
  $condition: ModelHelmetConditionInput
  $input: UpdateHelmetInput!
) {
  updateHelmet(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateHelmetMutationVariables,
  APITypes.UpdateHelmetMutation
>;
export const updateImpact = /* GraphQL */ `mutation UpdateImpact(
  $condition: ModelImpactConditionInput
  $input: UpdateImpactInput!
) {
  updateImpact(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateImpactMutationVariables,
  APITypes.UpdateImpactMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $condition: ModelTodoConditionInput
  $input: UpdateTodoInput!
) {
  updateTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    isDone
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: UpdateUserProfileInput!
) {
  updateUserProfile(condition: $condition, input: $input) {
    createdAt
    email
    id
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;

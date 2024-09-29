/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Helmet = {
  __typename: "Helmet",
  alias: string,
  createdAt: string,
  id: number,
  impacts?: ModelImpactConnection | null,
  isDone?: boolean | null,
  profileOwner?: string | null,
  updatedAt: string,
};

export type ModelImpactConnection = {
  __typename: "ModelImpactConnection",
  items:  Array<Impact | null >,
  nextToken?: string | null,
};

export type Impact = {
  __typename: "Impact",
  createdAt: string,
  force?: number | null,
  helmet?: Helmet | null,
  helmetId: number,
  id: string,
  isDone?: boolean | null,
  profileOwner?: string | null,
  updatedAt: string,
};

export type Todo = {
  __typename: "Todo",
  content?: string | null,
  createdAt: string,
  id: string,
  isDone?: boolean | null,
  updatedAt: string,
};

export type UserProfile = {
  __typename: "UserProfile",
  createdAt: string,
  email?: string | null,
  id: string,
  profileOwner?: string | null,
  updatedAt: string,
};

export type ModelHelmetFilterInput = {
  alias?: ModelStringInput | null,
  and?: Array< ModelHelmetFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIntInput | null,
  isDone?: ModelBooleanInput | null,
  not?: ModelHelmetFilterInput | null,
  or?: Array< ModelHelmetFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelHelmetConnection = {
  __typename: "ModelHelmetConnection",
  items:  Array<Helmet | null >,
  nextToken?: string | null,
};

export type ModelImpactFilterInput = {
  and?: Array< ModelImpactFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  force?: ModelIntInput | null,
  helmetId?: ModelIntInput | null,
  id?: ModelIDInput | null,
  isDone?: ModelBooleanInput | null,
  not?: ModelImpactFilterInput | null,
  or?: Array< ModelImpactFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoFilterInput = {
  and?: Array< ModelTodoFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isDone?: ModelBooleanInput | null,
  not?: ModelTodoFilterInput | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelUserProfileFilterInput = {
  and?: Array< ModelUserProfileFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserProfileFilterInput | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelHelmetConditionInput = {
  alias?: ModelStringInput | null,
  and?: Array< ModelHelmetConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  isDone?: ModelBooleanInput | null,
  not?: ModelHelmetConditionInput | null,
  or?: Array< ModelHelmetConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateHelmetInput = {
  alias: string,
  id: number,
  isDone?: boolean | null,
};

export type ModelImpactConditionInput = {
  and?: Array< ModelImpactConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  force?: ModelIntInput | null,
  helmetId?: ModelIntInput | null,
  isDone?: ModelBooleanInput | null,
  not?: ModelImpactConditionInput | null,
  or?: Array< ModelImpactConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateImpactInput = {
  force?: number | null,
  helmetId: number,
  id?: string | null,
  isDone?: boolean | null,
};

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  isDone?: ModelBooleanInput | null,
  not?: ModelTodoConditionInput | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTodoInput = {
  content?: string | null,
  id?: string | null,
  isDone?: boolean | null,
};

export type ModelUserProfileConditionInput = {
  and?: Array< ModelUserProfileConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  not?: ModelUserProfileConditionInput | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserProfileInput = {
  email?: string | null,
  id?: string | null,
  profileOwner?: string | null,
};

export type DeleteHelmetInput = {
  id: number,
};

export type DeleteImpactInput = {
  id: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type UpdateHelmetInput = {
  alias?: string | null,
  id: number,
  isDone?: boolean | null,
};

export type UpdateImpactInput = {
  force?: number | null,
  helmetId?: number | null,
  id: string,
  isDone?: boolean | null,
};

export type UpdateTodoInput = {
  content?: string | null,
  id: string,
  isDone?: boolean | null,
};

export type UpdateUserProfileInput = {
  email?: string | null,
  id: string,
  profileOwner?: string | null,
};

export type ModelSubscriptionHelmetFilterInput = {
  alias?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHelmetFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIntInput | null,
  isDone?: ModelSubscriptionBooleanInput | null,
  or?: Array< ModelSubscriptionHelmetFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionImpactFilterInput = {
  and?: Array< ModelSubscriptionImpactFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  force?: ModelSubscriptionIntInput | null,
  helmetId?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  isDone?: ModelSubscriptionBooleanInput | null,
  or?: Array< ModelSubscriptionImpactFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTodoFilterInput = {
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isDone?: ModelSubscriptionBooleanInput | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetHelmetQueryVariables = {
  id: number,
};

export type GetHelmetQuery = {
  getHelmet?:  {
    __typename: "Helmet",
    alias: string,
    createdAt: string,
    id: number,
    impacts?:  {
      __typename: "ModelImpactConnection",
      nextToken?: string | null,
    } | null,
    isDone?: boolean | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type GetImpactQueryVariables = {
  id: string,
};

export type GetImpactQuery = {
  getImpact?:  {
    __typename: "Impact",
    createdAt: string,
    force?: number | null,
    helmet?:  {
      __typename: "Helmet",
      alias: string,
      createdAt: string,
      id: number,
      isDone?: boolean | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    helmetId: number,
    id: string,
    isDone?: boolean | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    updatedAt: string,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type ListHelmetsQueryVariables = {
  filter?: ModelHelmetFilterInput | null,
  id?: number | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListHelmetsQuery = {
  listHelmets?:  {
    __typename: "ModelHelmetConnection",
    items:  Array< {
      __typename: "Helmet",
      alias: string,
      createdAt: string,
      id: number,
      isDone?: boolean | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListImpactsQueryVariables = {
  filter?: ModelImpactFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListImpactsQuery = {
  listImpacts?:  {
    __typename: "ModelImpactConnection",
    items:  Array< {
      __typename: "Impact",
      createdAt: string,
      force?: number | null,
      helmetId: number,
      id: string,
      isDone?: boolean | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      content?: string | null,
      createdAt: string,
      id: string,
      isDone?: boolean | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateHelmetMutationVariables = {
  condition?: ModelHelmetConditionInput | null,
  input: CreateHelmetInput,
};

export type CreateHelmetMutation = {
  createHelmet?:  {
    __typename: "Helmet",
    alias: string,
    createdAt: string,
    id: number,
    impacts?:  {
      __typename: "ModelImpactConnection",
      nextToken?: string | null,
    } | null,
    isDone?: boolean | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateImpactMutationVariables = {
  condition?: ModelImpactConditionInput | null,
  input: CreateImpactInput,
};

export type CreateImpactMutation = {
  createImpact?:  {
    __typename: "Impact",
    createdAt: string,
    force?: number | null,
    helmet?:  {
      __typename: "Helmet",
      alias: string,
      createdAt: string,
      id: number,
      isDone?: boolean | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    helmetId: number,
    id: string,
    isDone?: boolean | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    updatedAt: string,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: CreateUserProfileInput,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteHelmetMutationVariables = {
  condition?: ModelHelmetConditionInput | null,
  input: DeleteHelmetInput,
};

export type DeleteHelmetMutation = {
  deleteHelmet?:  {
    __typename: "Helmet",
    alias: string,
    createdAt: string,
    id: number,
    impacts?:  {
      __typename: "ModelImpactConnection",
      nextToken?: string | null,
    } | null,
    isDone?: boolean | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteImpactMutationVariables = {
  condition?: ModelImpactConditionInput | null,
  input: DeleteImpactInput,
};

export type DeleteImpactMutation = {
  deleteImpact?:  {
    __typename: "Impact",
    createdAt: string,
    force?: number | null,
    helmet?:  {
      __typename: "Helmet",
      alias: string,
      createdAt: string,
      id: number,
      isDone?: boolean | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    helmetId: number,
    id: string,
    isDone?: boolean | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: DeleteUserProfileInput,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateHelmetMutationVariables = {
  condition?: ModelHelmetConditionInput | null,
  input: UpdateHelmetInput,
};

export type UpdateHelmetMutation = {
  updateHelmet?:  {
    __typename: "Helmet",
    alias: string,
    createdAt: string,
    id: number,
    impacts?:  {
      __typename: "ModelImpactConnection",
      nextToken?: string | null,
    } | null,
    isDone?: boolean | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateImpactMutationVariables = {
  condition?: ModelImpactConditionInput | null,
  input: UpdateImpactInput,
};

export type UpdateImpactMutation = {
  updateImpact?:  {
    __typename: "Impact",
    createdAt: string,
    force?: number | null,
    helmet?:  {
      __typename: "Helmet",
      alias: string,
      createdAt: string,
      id: number,
      isDone?: boolean | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    helmetId: number,
    id: string,
    isDone?: boolean | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: UpdateUserProfileInput,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateHelmetSubscriptionVariables = {
  filter?: ModelSubscriptionHelmetFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateHelmetSubscription = {
  onCreateHelmet?:  {
    __typename: "Helmet",
    alias: string,
    createdAt: string,
    id: number,
    impacts?:  {
      __typename: "ModelImpactConnection",
      nextToken?: string | null,
    } | null,
    isDone?: boolean | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateImpactSubscriptionVariables = {
  filter?: ModelSubscriptionImpactFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateImpactSubscription = {
  onCreateImpact?:  {
    __typename: "Impact",
    createdAt: string,
    force?: number | null,
    helmet?:  {
      __typename: "Helmet",
      alias: string,
      createdAt: string,
      id: number,
      isDone?: boolean | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    helmetId: number,
    id: string,
    isDone?: boolean | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteHelmetSubscriptionVariables = {
  filter?: ModelSubscriptionHelmetFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteHelmetSubscription = {
  onDeleteHelmet?:  {
    __typename: "Helmet",
    alias: string,
    createdAt: string,
    id: number,
    impacts?:  {
      __typename: "ModelImpactConnection",
      nextToken?: string | null,
    } | null,
    isDone?: boolean | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteImpactSubscriptionVariables = {
  filter?: ModelSubscriptionImpactFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteImpactSubscription = {
  onDeleteImpact?:  {
    __typename: "Impact",
    createdAt: string,
    force?: number | null,
    helmet?:  {
      __typename: "Helmet",
      alias: string,
      createdAt: string,
      id: number,
      isDone?: boolean | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    helmetId: number,
    id: string,
    isDone?: boolean | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateHelmetSubscriptionVariables = {
  filter?: ModelSubscriptionHelmetFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateHelmetSubscription = {
  onUpdateHelmet?:  {
    __typename: "Helmet",
    alias: string,
    createdAt: string,
    id: number,
    impacts?:  {
      __typename: "ModelImpactConnection",
      nextToken?: string | null,
    } | null,
    isDone?: boolean | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateImpactSubscriptionVariables = {
  filter?: ModelSubscriptionImpactFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateImpactSubscription = {
  onUpdateImpact?:  {
    __typename: "Impact",
    createdAt: string,
    force?: number | null,
    helmet?:  {
      __typename: "Helmet",
      alias: string,
      createdAt: string,
      id: number,
      isDone?: boolean | null,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    helmetId: number,
    id: string,
    isDone?: boolean | null,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

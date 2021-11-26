/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: string;
  /** ID that parses as non-negative integer, serializes to string, and can be passed as string or number */
  IntID: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: Record<string, unknown>;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: number;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: number;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: string;
  /** Represents NULL values */
  Void: void | undefined | null;
};

/** User-emitted actions related to system, data mainly used for logging and modeling purposes */
export type Action = {
  __typename?: "Action";
  /** Arbitrary numeric amount */
  amount?: Maybe<Scalars["Float"]>;
  /** Related content */
  content?: Maybe<Content>;
  /** Timestamp of the action, set by the database on row creation */
  createdAt: Scalars["DateTime"];
  /** Arbitrary string content detail */
  detail?: Maybe<Scalars["String"]>;
  /** Arbitrary JSON object data */
  extra?: Maybe<Scalars["JSONObject"]>;
  /** Arbitrary hint identifier */
  hintID?: Maybe<Scalars["ID"]>;
  id: Scalars["IntID"];
  /** Related KCs */
  kcs: Array<Kc>;
  /** Arbitrary numeric result */
  result?: Maybe<Scalars["Float"]>;
  /** Arbitrary step identifier */
  stepID?: Maybe<Scalars["ID"]>;
  /** Timestamp of the action, set by the action emitter */
  timestamp: Scalars["Timestamp"];
  /** Related topic */
  topic?: Maybe<Topic>;
  /** User that emitted the action */
  user?: Maybe<User>;
  /** Type of action */
  verb: ActionVerb;
};

/** Input of action report */
export type ActionInput = {
  /** Arbitrary numeric amount */
  amount?: Maybe<Scalars["Float"]>;
  /**
   * Content identifier
   *
   * If it's numeric, it points to the "id" property of the content, otherwise, it points to the "code" property.
   *
   * Validation of content presence/authorization is made before confirming action
   */
  contentID?: Maybe<Scalars["ID"]>;
  /** Arbitrary string content detail */
  detail?: Maybe<Scalars["String"]>;
  /** Arbitrary JSON object data */
  extra?: Maybe<Scalars["JSONObject"]>;
  /** Arbitrary hint identifier */
  hintID?: Maybe<Scalars["ID"]>;
  /**
   * KCs identifiers
   *
   * If it's numeric, it points to the "id" property of the content, otherwise, it points to the "code" property.
   *
   * Validation of kc presence/authorization is made before confirming action
   */
  kcsIDs?: Maybe<Array<Scalars["ID"]>>;
  /**
   * Identifier of project related to action.
   *
   * It's verified based on authenticated user, and attached validated ids are validated against the specified project
   */
  projectId: Scalars["IntID"];
  /** Arbitrary numeric result */
  result?: Maybe<Scalars["Float"]>;
  /** Arbitrary step identifier */
  stepID?: Maybe<Scalars["ID"]>;
  /**
   * Timestamp of the action.
   *
   * Format in number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
   */
  timestamp: Scalars["Timestamp"];
  /**
   * Topic identifier
   *
   * If it's numeric, it points to the "id" property of the content, otherwise, it points to the "code" property.
   *
   * Validation of topic presence/authorization is made before confirming action
   */
  topicID?: Maybe<Scalars["ID"]>;
  /** Type of action, if specified verb doesn't exist, it's automatically created */
  verbName: Scalars["String"];
};

/**
 * Action Verb
 *
 * Main action categorization system
 */
export type ActionVerb = {
  __typename?: "ActionVerb";
  id: Scalars["IntID"];
  /** Name of the verb */
  name: Scalars["String"];
};

/** Paginated Actions */
export type ActionsConnection = Connection & {
  __typename?: "ActionsConnection";
  /** Nodes of the current page */
  nodes: Array<Action>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

/** Paginated Actions Verbs */
export type ActionsVerbsConnection = Connection & {
  __typename?: "ActionsVerbsConnection";
  /** Nodes of the current page */
  nodes: Array<ActionVerb>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

/** Admin Action-Related Queries */
export type AdminActionQueries = {
  __typename?: "AdminActionQueries";
  /**
   * [ADMIN] Get all the actions currently in the system
   *
   * Pagination parameters are mandatory, but filters and orderBy are optional, and therefore the search can be customized.
   */
  allActions: ActionsConnection;
  /** [ADMIN] Get all the action's verbs currently in the system */
  allActionsVerbs: ActionsVerbsConnection;
};

/** Admin Action-Related Queries */
export type AdminActionQueriesAllActionsArgs = {
  filters?: Maybe<AdminActionsFilter>;
  orderBy?: Maybe<AdminActionsOrderBy>;
  pagination: CursorConnectionArgs;
};

/** Admin Action-Related Queries */
export type AdminActionQueriesAllActionsVerbsArgs = {
  pagination: CursorConnectionArgs;
};

/** Filter all actions of admin query */
export type AdminActionsFilter = {
  /**
   * Filter by the specified content
   *
   * If action's content matches any of the specified content, the action is included
   */
  content?: Maybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified end date
   *
   * If action's timestamp is before the specified date, the action is included
   */
  endDate?: Maybe<Scalars["DateTime"]>;
  /**
   * Filter by the specified KCs
   *
   * If any of the action's KCs matches any of the specified KCs, the action is included
   */
  kcs?: Maybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified projects
   *
   * If action's project matches any of the specified projects, the action is included
   */
  projects?: Maybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified starting date
   *
   * If action's timestamp is after the specified date, the action is included
   */
  startDate?: Maybe<Scalars["DateTime"]>;
  /**
   * Filter by the specified topics
   *
   * If action's topic matches any of the specified topics, the action is included
   */
  topics?: Maybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified users
   *
   * If action's user matches any of the specified users, the action is included
   */
  users?: Maybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified verbs
   *
   * If action's verb matches any of the specified verbs, the action is included
   */
  verbNames?: Maybe<Array<Scalars["String"]>>;
};

/** Order Admin Actions */
export type AdminActionsOrderBy = {
  /**
   * Order the actions ascendingly or descendingly
   *
   * Following the cursor pagination's nature, ordering by "id" tends to follow the action creation date, but it can't be guaranteed
   *
   * By default the actions are ordered descendingly, showing the newer actions first
   */
  id?: Maybe<Order_By>;
};

/** Filter all content of admin query */
export type AdminContentFilter = {
  /**
   * Filter by the specified projects
   *
   * If the content's project matches any of the specified projects, the content is included
   */
  projects?: Maybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified tags
   *
   * If any of the content's tags matches any of the specified tags, the content is included
   */
  tags?: Maybe<Array<Scalars["String"]>>;
};

/** [ADMIN] Admin related content mutations, only authenticated users with the role "ADMIN" can access */
export type AdminContentMutations = {
  __typename?: "AdminContentMutations";
  /** [ADMIN] Create a new content entity */
  createContent: Content;
  /** [ADMIN] Update an existent content entity */
  updateContent: Content;
};

/** [ADMIN] Admin related content mutations, only authenticated users with the role "ADMIN" can access */
export type AdminContentMutationsCreateContentArgs = {
  data: CreateContent;
};

/** [ADMIN] Admin related content mutations, only authenticated users with the role "ADMIN" can access */
export type AdminContentMutationsUpdateContentArgs = {
  data: UpdateContent;
};

/** Admin Content-Related Queries */
export type AdminContentQueries = {
  __typename?: "AdminContentQueries";
  /**
   * [ADMIN] Get all the content currently in the system
   *
   * Pagination parameters are mandatory, but filters is optional, and therefore the search can be customized.
   */
  allContent: ContentConnection;
};

/** Admin Content-Related Queries */
export type AdminContentQueriesAllContentArgs = {
  filters?: Maybe<AdminContentFilter>;
  pagination: CursorConnectionArgs;
};

export type AdminDomainMutations = {
  __typename?: "AdminDomainMutations";
  createDomain: Domain;
  createKC: Kc;
  createTopic: Topic;
  updateDomain: Domain;
  updateKC: Kc;
  updateTopic: Topic;
};

export type AdminDomainMutationsCreateDomainArgs = {
  input: CreateDomain;
};

export type AdminDomainMutationsCreateKcArgs = {
  data: CreateKcInput;
};

export type AdminDomainMutationsCreateTopicArgs = {
  input: CreateTopic;
};

export type AdminDomainMutationsUpdateDomainArgs = {
  input: UpdateDomain;
};

export type AdminDomainMutationsUpdateKcArgs = {
  data: UpdateKcInput;
};

export type AdminDomainMutationsUpdateTopicArgs = {
  input: UpdateTopic;
};

export type AdminDomainQueries = {
  __typename?: "AdminDomainQueries";
  allDomains: DomainsConnection;
  allKCs: KCsConnection;
  allTopics: TopicsConnection;
};

export type AdminDomainQueriesAllDomainsArgs = {
  filters?: Maybe<AdminDomainsFilter>;
  pagination: CursorConnectionArgs;
};

export type AdminDomainQueriesAllKCsArgs = {
  filters?: Maybe<AdminKCsFilter>;
  pagination: CursorConnectionArgs;
};

export type AdminDomainQueriesAllTopicsArgs = {
  filters?: Maybe<AdminTopicsFilter>;
  pagination: CursorConnectionArgs;
};

export type AdminDomainsFilter = {
  projects?: Maybe<Array<Scalars["IntID"]>>;
};

export type AdminGroupsFilter = {
  tags?: Maybe<Array<Scalars["String"]>>;
};

export type AdminKCsFilter = {
  domains?: Maybe<Array<Scalars["IntID"]>>;
  projects?: Maybe<Array<Scalars["IntID"]>>;
};

export type AdminProjectsMutations = {
  __typename?: "AdminProjectsMutations";
  createProject: Project;
  updateProject: Project;
};

export type AdminProjectsMutationsCreateProjectArgs = {
  data: CreateProject;
};

export type AdminProjectsMutationsUpdateProjectArgs = {
  data: UpdateProject;
};

export type AdminProjectsQueries = {
  __typename?: "AdminProjectsQueries";
  allProjects: ProjectsConnection;
};

export type AdminProjectsQueriesAllProjectsArgs = {
  pagination: CursorConnectionArgs;
};

export type AdminStateQueries = {
  __typename?: "AdminStateQueries";
  allModelStateCreators: ModelStateCreatorConnection;
  allModelStateTypes: ModelStateTypeConnection;
  allModelStates: ModelStateConnection;
};

export type AdminStateQueriesAllModelStateCreatorsArgs = {
  pagination: CursorConnectionArgs;
};

export type AdminStateQueriesAllModelStateTypesArgs = {
  pagination: CursorConnectionArgs;
};

export type AdminStateQueriesAllModelStatesArgs = {
  input: ModelStateConnectionInput;
};

export type AdminTopicsFilter = {
  projects?: Maybe<Array<Scalars["IntID"]>>;
};

export type AdminUserMutations = {
  __typename?: "AdminUserMutations";
  createGroup: Group;
  setProjectsToUsers: Array<User>;
  setUserGroups: Array<Group>;
  updateGroup: Group;
  updateUser: User;
  /** Upsert specified users with specified project */
  upsertUsersWithProjects: Array<User>;
};

export type AdminUserMutationsCreateGroupArgs = {
  data: CreateGroupInput;
};

export type AdminUserMutationsSetProjectsToUsersArgs = {
  projectIds: Array<Scalars["IntID"]>;
  userIds: Array<Scalars["IntID"]>;
};

export type AdminUserMutationsSetUserGroupsArgs = {
  groupIds: Array<Scalars["IntID"]>;
  usersEmails: Array<Scalars["EmailAddress"]>;
};

export type AdminUserMutationsUpdateGroupArgs = {
  data: UpdateGroupInput;
};

export type AdminUserMutationsUpdateUserArgs = {
  data: UpdateUserInput;
};

export type AdminUserMutationsUpsertUsersWithProjectsArgs = {
  emails: Array<Scalars["EmailAddress"]>;
  projectsIds: Array<Scalars["IntID"]>;
};

export type AdminUserQueries = {
  __typename?: "AdminUserQueries";
  allGroups: GroupsConnection;
  allUsers: UsersConnection;
};

export type AdminUserQueriesAllGroupsArgs = {
  filters?: Maybe<AdminGroupsFilter>;
  pagination: CursorConnectionArgs;
};

export type AdminUserQueriesAllUsersArgs = {
  filters?: Maybe<AdminUsersFilter>;
  pagination: CursorConnectionArgs;
};

export type AdminUsersFilter = {
  tags?: Maybe<Array<Scalars["String"]>>;
};

export type Connection = {
  pageInfo: PageInfo;
};

export type Content = {
  __typename?: "Content";
  /**
   * Binary content encoded in base64
   *
   * If present, it's guaranteed to be present alongisde binaryFilename
   */
  binaryBase64?: Maybe<Scalars["String"]>;
  /**
   * Binary content filename
   *
   * If present, it's guaranteed to be present alongisde binaryBase64
   *
   * It's required and guaranteed to contain an extension where the mimetype can be inferred
   */
  binaryFilename?: Maybe<Scalars["String"]>;
  /** Unique string identifier */
  code: Scalars["String"];
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Arbitrary content description */
  description: Scalars["String"];
  id: Scalars["IntID"];
  /** Arbitrary JSON object data */
  json?: Maybe<Scalars["JSONObject"]>;
  kcs: Array<Kc>;
  /** Human readable identifier */
  label: Scalars["String"];
  project: Project;
  /** Parameter that can be used to sort a list of content */
  sortIndex?: Maybe<Scalars["Int"]>;
  /**
   * Tags associated with the content
   *
   * Tags can be used to categorize or filter
   */
  tags: Array<Scalars["String"]>;
  topics: Array<Topic>;
  /** Date of latest update */
  updatedAt: Scalars["DateTime"];
  /** External URL */
  url?: Maybe<Scalars["String"]>;
};

/** Paginated Content */
export type ContentConnection = Connection & {
  __typename?: "ContentConnection";
  /** Nodes of the current page */
  nodes: Array<Content>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

/** Content creation input data */
export type CreateContent = {
  /**
   * Binary content encoded in base64
   *
   * If present, binaryFilename has to be specified
   */
  binaryBase64?: Maybe<Scalars["String"]>;
  /**
   * Binary content filename
   *
   * If present, it's required to contain an extension where the mimetype can be inferred
   */
  binaryFilename?: Maybe<Scalars["String"]>;
  /** Unique string identifier */
  code: Scalars["String"];
  /** Arbitrary content description */
  description: Scalars["String"];
  /** Arbitrary JSON object data */
  json?: Maybe<Scalars["JSONObject"]>;
  /** KCs associated with the content */
  kcs: Array<Scalars["IntID"]>;
  /** Human readable identifier */
  label: Scalars["String"];
  /** Project associated with new content */
  projectId: Scalars["IntID"];
  /**
   * Tags associated with the content
   *
   * Tags can be used to categorize or filter
   */
  tags: Array<Scalars["String"]>;
  /** Topics associated with the content */
  topics: Array<Scalars["IntID"]>;
  /** External URL */
  url?: Maybe<Scalars["URL"]>;
};

export type CreateDomain = {
  code: Scalars["String"];
  label: Scalars["String"];
  projectsIds: Array<Scalars["IntID"]>;
};

export type CreateGroupInput = {
  code: Scalars["String"];
  flags?: Maybe<GroupFlagsInput>;
  label: Scalars["String"];
  projectIds: Array<Scalars["IntID"]>;
  tags: Array<Scalars["String"]>;
};

export type CreateKcInput = {
  code: Scalars["String"];
  domainId: Scalars["IntID"];
  label: Scalars["String"];
};

export type CreateProject = {
  code: Scalars["String"];
  domains: Array<Scalars["IntID"]>;
  label: Scalars["String"];
};

export type CreateTopic = {
  code: Scalars["String"];
  contentIds: Array<Scalars["IntID"]>;
  label: Scalars["String"];
  parentTopicId?: Maybe<Scalars["IntID"]>;
  projectId: Scalars["IntID"];
  sortIndex?: Maybe<Scalars["Int"]>;
  tags: Array<Scalars["String"]>;
};

export type CursorConnectionArgs = {
  after?: Maybe<Scalars["IntID"]>;
  before?: Maybe<Scalars["IntID"]>;
  first?: Maybe<Scalars["NonNegativeInt"]>;
  last?: Maybe<Scalars["NonNegativeInt"]>;
};

export type Domain = {
  __typename?: "Domain";
  code: Scalars["String"];
  createdAt: Scalars["DateTime"];
  id: Scalars["IntID"];
  kcs: Array<Kc>;
  label: Scalars["String"];
  modelStates: ModelStateConnection;
  projects: Array<Project>;
  updatedAt: Scalars["DateTime"];
};

export type DomainModelStatesArgs = {
  input: ModelStateConnectionInput;
};

export type DomainsConnection = Connection & {
  __typename?: "DomainsConnection";
  nodes: Array<Domain>;
  pageInfo: PageInfo;
};

export type Group = {
  __typename?: "Group";
  code: Scalars["String"];
  createdAt: Scalars["DateTime"];
  flags: GroupFlags;
  id: Scalars["IntID"];
  label: Scalars["String"];
  projects: Array<Project>;
  projectsIds: Array<Scalars["IntID"]>;
  tags: Array<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
  users: Array<User>;
};

export type GroupFlags = {
  __typename?: "GroupFlags";
  createdAt: Scalars["DateTime"];
  id: Scalars["IntID"];
  readProjectActions: Scalars["Boolean"];
  readProjectModelStates: Scalars["Boolean"];
  updatedAt: Scalars["DateTime"];
};

export type GroupFlagsInput = {
  readProjectActions: Scalars["Boolean"];
  readProjectModelStates: Scalars["Boolean"];
};

export type GroupsConnection = Connection & {
  __typename?: "GroupsConnection";
  nodes: Array<Group>;
  pageInfo: PageInfo;
};

export type Kc = {
  __typename?: "KC";
  code: Scalars["String"];
  createdAt: Scalars["DateTime"];
  domain: Domain;
  id: Scalars["IntID"];
  label: Scalars["String"];
  topics: Array<Topic>;
  updatedAt: Scalars["DateTime"];
};

export type KCsConnection = Connection & {
  __typename?: "KCsConnection";
  nodes: Array<Kc>;
  pageInfo: PageInfo;
};

export type ModelState = {
  __typename?: "ModelState";
  createdAt: Scalars["DateTime"];
  creator: Scalars["String"];
  domain: Domain;
  id: Scalars["IntID"];
  json: Scalars["JSON"];
  type?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
  user: User;
};

export type ModelStateConnection = Connection & {
  __typename?: "ModelStateConnection";
  nodes: Array<ModelState>;
  pageInfo: PageInfo;
};

export type ModelStateConnectionInput = {
  filters?: Maybe<ModelStateFilter>;
  orderBy?: Maybe<ModelStateOrderBy>;
  pagination: CursorConnectionArgs;
};

export type ModelStateCreator = {
  __typename?: "ModelStateCreator";
  createdAt: Scalars["DateTime"];
  id: Scalars["IntID"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type ModelStateCreatorConnection = Connection & {
  __typename?: "ModelStateCreatorConnection";
  nodes: Array<ModelStateCreator>;
  pageInfo: PageInfo;
};

export type ModelStateFilter = {
  creators?: Maybe<Array<Scalars["String"]>>;
  type?: Maybe<Array<Scalars["String"]>>;
};

export type ModelStateOrderBy = {
  id?: Maybe<Order_By>;
};

export type ModelStateType = {
  __typename?: "ModelStateType";
  createdAt: Scalars["DateTime"];
  id: Scalars["IntID"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type ModelStateTypeConnection = Connection & {
  __typename?: "ModelStateTypeConnection";
  nodes: Array<ModelStateType>;
  pageInfo: PageInfo;
};

export type Mutation = {
  __typename?: "Mutation";
  /**
   * Report an action to the modeling service
   *
   * - User authentication is required
   * - Authenticated user has to be associated with specified project
   */
  action?: Maybe<Scalars["Void"]>;
  /** [ADMIN] Admin related content mutations, only authenticated users with the role "ADMIN" can access */
  adminContent: AdminContentMutations;
  adminDomain: AdminDomainMutations;
  adminProjects: AdminProjectsMutations;
  adminUsers: AdminUserMutations;
  hello: Scalars["String"];
};

export type MutationActionArgs = {
  data: ActionInput;
};

export type Node = {
  id: Scalars["IntID"];
};

export const Order_By = {
  Asc: "ASC",
  Desc: "DESC",
} as const;

export type Order_By = typeof Order_By[keyof typeof Order_By];
export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
};

export type Project = {
  __typename?: "Project";
  /**
   * All actions of the project
   *
   * ADMIN User role or "readProjectActions" group permissions flag required
   */
  actions: ActionsConnection;
  code: Scalars["String"];
  /** Content associated with project */
  content: ContentConnection;
  createdAt: Scalars["DateTime"];
  domains: Array<Domain>;
  id: Scalars["IntID"];
  label: Scalars["String"];
  topics: Array<Topic>;
  updatedAt: Scalars["DateTime"];
};

export type ProjectActionsArgs = {
  filters?: Maybe<ProjectActionsFilter>;
  pagination: CursorConnectionArgs;
};

export type ProjectContentArgs = {
  filters?: Maybe<ProjectContentFilter>;
  pagination: CursorConnectionArgs;
};

/** Filter the actions of a project */
export type ProjectActionsFilter = {
  /**
   * Filter by the specified content
   *
   * If action's content matches any of the specified content, the action is included
   */
  content?: Maybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified end date
   *
   * If action's timestamp is before the specified date, the action is included
   */
  endDate?: Maybe<Scalars["DateTime"]>;
  /**
   * Filter by the specified KCs
   *
   * If any of the action's KCs matches any of the specified KCs, the action is included
   */
  kcs?: Maybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified starting date
   *
   * If action's timestamp is after the specified date, the action is included
   */
  startDate?: Maybe<Scalars["DateTime"]>;
  /**
   * Filter by the specified topics
   *
   * If action's topic matches any of the specified topics, the action is included
   */
  topics?: Maybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified users
   *
   * If action's user matches any of the specified users, the action is included
   */
  users?: Maybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified verbs
   *
   * If action's verb matches any of the specified verbs, the action is included
   */
  verbNames?: Maybe<Array<Scalars["String"]>>;
};

/** Filter project content */
export type ProjectContentFilter = {
  /**
   * Filter by the specified ending created date
   *
   * If content's creation date is before the specified date, the content is included
   */
  createdEndDate?: Maybe<Scalars["DateTime"]>;
  /**
   * Filter by the specified starting created date
   *
   * If content's creation date is after the specified date, the content is included
   */
  createdStartDate?: Maybe<Scalars["DateTime"]>;
  /**
   * Filter by the specified KCs
   *
   * If any of the content's KCs matches any of the specified KCs, the content is included
   */
  kcs?: Maybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified tags
   *
   * If any of the content's tags matches any of the specified tags, the content is included
   */
  tags?: Maybe<Array<Scalars["String"]>>;
  /**
   * Filter by the specified topics
   *
   * If content's topic matches any of the specified topics, the content is included
   */
  topics?: Maybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified ending last updated date
   *
   * If content's last updated date is before the specified date, the content is included
   */
  updatedEndDate?: Maybe<Scalars["DateTime"]>;
  /**
   * Filter by the specified starting last updated date
   *
   * If content's last updated date is after the specified date, the content is included
   */
  updatedStartDate?: Maybe<Scalars["DateTime"]>;
};

export type ProjectsConnection = Connection & {
  __typename?: "ProjectsConnection";
  nodes: Array<Project>;
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: "Query";
  /** [ADMIN] Admin related actions queries, only authenticated users with the role "ADMIN" can access */
  adminActions: AdminActionQueries;
  /** [ADMIN] Admin related content queries, only authenticated users with the role "ADMIN" can access */
  adminContent: AdminContentQueries;
  adminDomain: AdminDomainQueries;
  /** [ADMIN] Project related administration queries */
  adminProjects: AdminProjectsQueries;
  adminState: AdminStateQueries;
  adminUsers: AdminUserQueries;
  content: Array<Content>;
  /**
   * Get specified content by "code".
   *
   * - If user is not authenticated it throws.
   * - If authenticated user has no permissions on the specified project it returns NULL.
   */
  contentByCode?: Maybe<Content>;
  currentUser?: Maybe<User>;
  domains: Array<Domain>;
  groups: Array<Group>;
  hello: Scalars["String"];
  kcs: Array<Kc>;
  /**
   * Get specified project by either "id" or "code".
   *
   * - If user is not authenticated it will always return NULL.
   * - If authenticated user has no permissions on the specified project it returns NULL.
   */
  project?: Maybe<Project>;
  /**
   * Get all the projects associated with the specified identifiers
   *
   * The projects data is guaranteed to follow the specified identifiers order
   *
   * If any of the specified identifiers is not found or forbidden, query fails
   */
  projects: Array<Project>;
  topicByCode?: Maybe<Topic>;
  topics: Array<Topic>;
  users: Array<User>;
};

export type QueryContentArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryContentByCodeArgs = {
  code: Scalars["String"];
};

export type QueryDomainsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryGroupsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryKcsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryProjectArgs = {
  code?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["IntID"]>;
};

export type QueryProjectsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryTopicByCodeArgs = {
  code: Scalars["String"];
};

export type QueryTopicsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryUsersArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  hello: Scalars["String"];
};

export type Topic = {
  __typename?: "Topic";
  childrens: Array<Topic>;
  code: Scalars["String"];
  /** Content associated with topic */
  content: Array<Content>;
  createdAt: Scalars["DateTime"];
  id: Scalars["IntID"];
  kcs: Array<Kc>;
  label: Scalars["String"];
  parent?: Maybe<Topic>;
  project: Project;
  sortIndex?: Maybe<Scalars["Int"]>;
  tags: Array<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

export type TopicsConnection = Connection & {
  __typename?: "TopicsConnection";
  nodes: Array<Topic>;
  pageInfo: PageInfo;
};

/** Content update input data */
export type UpdateContent = {
  /**
   * Binary content encoded in base64
   *
   * If present, binaryFilename has to be specified
   */
  binaryBase64?: Maybe<Scalars["String"]>;
  /**
   * Binary content filename
   *
   * If present, it's required to contain an extension where the mimetype can be inferred
   */
  binaryFilename?: Maybe<Scalars["String"]>;
  /** Unique string identifier */
  code: Scalars["String"];
  /** Arbitrary content description */
  description: Scalars["String"];
  /** Current content identifier */
  id: Scalars["IntID"];
  /** Arbitrary JSON object data */
  json?: Maybe<Scalars["JSONObject"]>;
  /** KCs associated with the content */
  kcs: Array<Scalars["IntID"]>;
  /** Human readable identifier */
  label: Scalars["String"];
  /** Project associated with content */
  projectId: Scalars["IntID"];
  /**
   * Tags associated with the content
   *
   * Tags can be used to categorize or filter
   */
  tags: Array<Scalars["String"]>;
  /** Topics associated with the content */
  topics: Array<Scalars["IntID"]>;
  /** External URL */
  url?: Maybe<Scalars["URL"]>;
};

export type UpdateDomain = {
  code: Scalars["String"];
  id: Scalars["IntID"];
  label: Scalars["String"];
};

export type UpdateGroupInput = {
  code: Scalars["String"];
  flags?: Maybe<GroupFlagsInput>;
  id: Scalars["IntID"];
  label: Scalars["String"];
  projectIds: Array<Scalars["IntID"]>;
  tags: Array<Scalars["String"]>;
};

export type UpdateKcInput = {
  code: Scalars["String"];
  id: Scalars["IntID"];
  label: Scalars["String"];
};

export type UpdateProject = {
  code: Scalars["String"];
  domains: Array<Scalars["IntID"]>;
  id: Scalars["IntID"];
  label: Scalars["String"];
};

export type UpdateTopic = {
  code: Scalars["String"];
  contentIds: Array<Scalars["IntID"]>;
  id: Scalars["IntID"];
  label: Scalars["String"];
  parentTopicId?: Maybe<Scalars["IntID"]>;
  sortIndex?: Maybe<Scalars["Int"]>;
  tags: Array<Scalars["String"]>;
};

export type UpdateUserInput = {
  id: Scalars["IntID"];
  locked: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  projectIds: Array<Scalars["IntID"]>;
  role: UserRole;
  tags: Array<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  active: Scalars["Boolean"];
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  enabled: Scalars["Boolean"];
  groups: Array<Group>;
  id: Scalars["IntID"];
  lastOnline?: Maybe<Scalars["DateTime"]>;
  locked: Scalars["Boolean"];
  modelStates: ModelStateConnection;
  name?: Maybe<Scalars["String"]>;
  picture?: Maybe<Scalars["String"]>;
  projects: Array<Project>;
  projectsIds: Array<Scalars["IntID"]>;
  role: UserRole;
  tags: Array<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

export type UserModelStatesArgs = {
  input: ModelStateConnectionInput;
};

export const UserRole = {
  Admin: "ADMIN",
  User: "USER",
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];
export type UsersConnection = Connection & {
  __typename?: "UsersConnection";
  nodes: Array<User>;
  pageInfo: PageInfo;
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserQuery = {
  __typename?: "Query";
  currentUser?:
    | {
        __typename?: "User";
        id: string;
        email: string;
        name?: string | null | undefined;
        role: UserRole;
        picture?: string | null | undefined;
        tags: Array<string>;
        projects: Array<{
          __typename?: "Project";
          id: string;
          code: string;
          label: string;
        }>;
        groups: Array<{
          __typename?: "Group";
          id: string;
          code: string;
          label: string;
          tags: Array<string>;
        }>;
      }
    | null
    | undefined;
  project?:
    | { __typename?: "Project"; id: string; code: string; label: string }
    | null
    | undefined;
};

export type ActionMutationVariables = Exact<{
  data: ActionInput;
}>;

export type ActionMutation = {
  __typename?: "Mutation";
  action?: void | undefined | null | null | undefined;
};

export const CurrentUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "currentUser" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "currentUser" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                { kind: "Field", name: { kind: "Name", value: "picture" } },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "projects" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "groups" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "tags" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "StringValue", value: "project1", block: false },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CurrentUserQuery, CurrentUserQueryVariables>;
export const ActionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "Action" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ActionInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "action" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ActionMutation, ActionMutationVariables>;

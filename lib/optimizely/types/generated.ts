import { DocumentNode, ExecutionResult } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
};

export type AvailabilityBlock = IContent & IData & {
  __typename?: 'AvailabilityBlock';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Availability: Maybe<Scalars['String']['output']>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  ProjectTypes: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type AvailabilityBlockAvailabilityArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type AvailabilityBlockNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type AvailabilityBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type AvailabilityBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type AvailabilityBlockAutocomplete = {
  __typename?: 'AvailabilityBlockAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  ProjectTypes: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type AvailabilityBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AvailabilityBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AvailabilityBlockAutocompleteProjectTypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AvailabilityBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AvailabilityBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AvailabilityBlockAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AvailabilityBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AvailabilityBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AvailabilityBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AvailabilityBlockAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type AvailabilityBlockFacet = {
  __typename?: 'AvailabilityBlockFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Availability: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  ProjectTypes: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type AvailabilityBlockFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AvailabilityBlockFacetAvailabilityArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AvailabilityBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type AvailabilityBlockFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AvailabilityBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type AvailabilityBlockFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AvailabilityBlockFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AvailabilityBlockFacetProjectTypesArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AvailabilityBlockFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AvailabilityBlockFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AvailabilityBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type AvailabilityBlockFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AvailabilityBlockFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AvailabilityBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type AvailabilityBlockFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AvailabilityBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type AvailabilityBlockFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AvailabilityBlockFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AvailabilityBlockFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type AvailabilityBlockOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Availability: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ProjectTypes: InputMaybe<OrderBy>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type AvailabilityBlockOutput = {
  __typename?: 'AvailabilityBlockOutput';
  autocomplete: Maybe<AvailabilityBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<AvailabilityBlockFacet>;
  items: Maybe<Array<Maybe<AvailabilityBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type AvailabilityBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type AvailabilityBlockWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Availability: InputMaybe<SearchableStringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ProjectTypes: InputMaybe<StringFilterInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type BlobModel = {
  __typename?: 'BlobModel';
  Id: Maybe<Scalars['String']['output']>;
  Url: Maybe<Scalars['String']['output']>;
};

export type BlobModelAutocomplete = {
  __typename?: 'BlobModelAutocomplete';
  Id: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type BlobModelAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BlobModelAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type BlobModelFacet = {
  __typename?: 'BlobModelFacet';
  Id: Maybe<Array<Maybe<StringFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
};


export type BlobModelFacetIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlobModelFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlobModelOrderByInput = {
  Id: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
};

export type BlobModelWhereInput = {
  Id: InputMaybe<StringFilterInput>;
  Url: InputMaybe<StringFilterInput>;
};

export type BoolFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Boolean']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Boolean']['input']>;
};

export type CmsPage = IContent & IData & {
  __typename?: 'CMSPage';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Blocks: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Keywords: Maybe<Scalars['String']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  ShortDescription: Maybe<Scalars['String']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type CmsPageBlocksArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CmsPageKeywordsArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CmsPageNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CmsPageShortDescriptionArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CmsPageTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CmsPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CmsPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CmsPageAutocomplete = {
  __typename?: 'CMSPageAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CmsPageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CmsPageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CmsPageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CmsPageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CmsPageAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CmsPageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CmsPageAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CmsPageAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CmsPageAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CmsPageFacet = {
  __typename?: 'CMSPageFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Blocks: Maybe<ContentAreaItemModelSearchFacet>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Keywords: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  ShortDescription: Maybe<Array<Maybe<StringFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Title: Maybe<Array<Maybe<StringFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type CmsPageFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CmsPageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CmsPageFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CmsPageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CmsPageFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CmsPageFacetKeywordsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CmsPageFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CmsPageFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CmsPageFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CmsPageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CmsPageFacetShortDescriptionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CmsPageFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CmsPageFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CmsPageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CmsPageFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CmsPageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CmsPageFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CmsPageFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CmsPageFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CmsPageFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type CmsPageOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Blocks: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Keywords: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  ShortDescription: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Title: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type CmsPageOutput = {
  __typename?: 'CMSPageOutput';
  autocomplete: Maybe<CmsPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CmsPageFacet>;
  items: Maybe<Array<Maybe<CmsPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CmsPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CmsPageWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Blocks: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Keywords: InputMaybe<SearchableStringFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  ShortDescription: InputMaybe<SearchableStringFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Title: InputMaybe<SearchableStringFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type CategoryModel = {
  __typename?: 'CategoryModel';
  Description: Maybe<Scalars['String']['output']>;
  Id: Maybe<Scalars['Int']['output']>;
  Name: Maybe<Scalars['String']['output']>;
};

export type CategoryModelAutocomplete = {
  __typename?: 'CategoryModelAutocomplete';
  Description: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CategoryModelAutocompleteDescriptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CategoryModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CategoryModelFacet = {
  __typename?: 'CategoryModelFacet';
  Description: Maybe<Array<Maybe<StringFacet>>>;
  Id: Maybe<Array<Maybe<NumberFacet>>>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
};


export type CategoryModelFacetDescriptionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CategoryModelFacetIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type CategoryModelFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CategoryModelOrderByInput = {
  Description: InputMaybe<OrderBy>;
  Id: InputMaybe<OrderBy>;
  Name: InputMaybe<OrderBy>;
};

export type CategoryModelWhereInput = {
  Description: InputMaybe<StringFilterInput>;
  Id: InputMaybe<IntFilterInput>;
  Name: InputMaybe<StringFilterInput>;
};

export type ContactBlock = IContent & IData & {
  __typename?: 'ContactBlock';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  Description: Maybe<Scalars['String']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type ContactBlockDescriptionArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContactBlockNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContactBlockTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContactBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContactBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContactBlockAutocomplete = {
  __typename?: 'ContactBlockAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContactBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContactBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContactBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContactBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContactBlockAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContactBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContactBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContactBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContactBlockAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContactBlockFacet = {
  __typename?: 'ContactBlockFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  Description: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Title: Maybe<Array<Maybe<StringFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ContactBlockFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContactBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactBlockFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContactBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactBlockFacetDescriptionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContactBlockFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContactBlockFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContactBlockFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContactBlockFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContactBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactBlockFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContactBlockFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContactBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactBlockFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContactBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactBlockFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContactBlockFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContactBlockFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContactBlockFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ContactBlockOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  Description: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Title: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type ContactBlockOutput = {
  __typename?: 'ContactBlockOutput';
  autocomplete: Maybe<ContactBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContactBlockFacet>;
  items: Maybe<Array<Maybe<ContactBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContactBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactBlockWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  Description: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Title: InputMaybe<SearchableStringFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type Content = IContent & IData & {
  __typename?: 'Content';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type ContentNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Content_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Content_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContentAreaItemModelSearch = {
  __typename?: 'ContentAreaItemModelSearch';
  ContentLink: Maybe<ContentModelReferenceSearch>;
  DisplayOption: Maybe<Scalars['String']['output']>;
  InlineBlock: Maybe<InlineBlockPropertyModelSearch>;
  Tag: Maybe<Scalars['String']['output']>;
};


export type ContentAreaItemModelSearchContentLinkArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContentAreaItemModelSearchDisplayOptionArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContentAreaItemModelSearchInlineBlockArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContentAreaItemModelSearchTagArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ContentAreaItemModelSearchFacet = {
  __typename?: 'ContentAreaItemModelSearchFacet';
  ContentLink: Maybe<ContentModelReferenceSearchFacet>;
  DisplayOption: Maybe<Array<Maybe<StringFacet>>>;
  InlineBlock: Maybe<InlineBlockPropertyModelSearchFacet>;
  Tag: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentAreaItemModelSearchFacetDisplayOptionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentAreaItemModelSearchFacetTagArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentAreaItemModelSearchOrderByInput = {
  ContentLink: InputMaybe<ContentModelReferenceSearchOrderByInput>;
  DisplayOption: InputMaybe<OrderBy>;
  InlineBlock: InputMaybe<InlineBlockPropertyModelSearchOrderByInput>;
  Tag: InputMaybe<OrderBy>;
};

export type ContentAreaItemModelSearchWhereInput = {
  ContentLink: InputMaybe<ContentModelReferenceSearchWhereInput>;
  DisplayOption: InputMaybe<SearchableStringFilterInput>;
  InlineBlock: InputMaybe<InlineBlockPropertyModelSearchWhereInput>;
  Tag: InputMaybe<SearchableStringFilterInput>;
};

export type ContentAutocomplete = {
  __typename?: 'ContentAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentFacet = {
  __typename?: 'ContentFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ContentFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ContentLanguageModel = {
  __typename?: 'ContentLanguageModel';
  DisplayName: Maybe<Scalars['String']['output']>;
  Link: Maybe<Scalars['String']['output']>;
  Name: Maybe<Scalars['String']['output']>;
};

export type ContentLanguageModelAutocomplete = {
  __typename?: 'ContentLanguageModelAutocomplete';
  DisplayName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Link: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentLanguageModelAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentLanguageModelAutocompleteLinkArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentLanguageModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentLanguageModelFacet = {
  __typename?: 'ContentLanguageModelFacet';
  DisplayName: Maybe<Array<Maybe<StringFacet>>>;
  Link: Maybe<Array<Maybe<StringFacet>>>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentLanguageModelFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelFacetLinkArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentLanguageModelOrderByInput = {
  DisplayName: InputMaybe<OrderBy>;
  Link: InputMaybe<OrderBy>;
  Name: InputMaybe<OrderBy>;
};

export type ContentLanguageModelSearch = {
  __typename?: 'ContentLanguageModelSearch';
  DisplayName: Maybe<Scalars['String']['output']>;
  Link: Maybe<Scalars['String']['output']>;
  Name: Maybe<Scalars['String']['output']>;
};


export type ContentLanguageModelSearchDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContentLanguageModelSearchLinkArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContentLanguageModelSearchNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ContentLanguageModelSearchFacet = {
  __typename?: 'ContentLanguageModelSearchFacet';
  DisplayName: Maybe<Array<Maybe<StringFacet>>>;
  Link: Maybe<Array<Maybe<StringFacet>>>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentLanguageModelSearchFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelSearchFacetLinkArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelSearchFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentLanguageModelSearchOrderByInput = {
  DisplayName: InputMaybe<OrderBy>;
  Link: InputMaybe<OrderBy>;
  Name: InputMaybe<OrderBy>;
};

export type ContentLanguageModelSearchWhereInput = {
  DisplayName: InputMaybe<SearchableStringFilterInput>;
  Link: InputMaybe<SearchableStringFilterInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
};

export type ContentLanguageModelWhereInput = {
  DisplayName: InputMaybe<StringFilterInput>;
  Link: InputMaybe<StringFilterInput>;
  Name: InputMaybe<StringFilterInput>;
};

export type ContentModelReference = {
  __typename?: 'ContentModelReference';
  Expanded: Maybe<IContent>;
  GuidValue: Maybe<Scalars['String']['output']>;
  Id: Maybe<Scalars['Int']['output']>;
  Language: Maybe<ContentLanguageModel>;
  ProviderName: Maybe<Scalars['String']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  WorkId: Maybe<Scalars['Int']['output']>;
};

export type ContentModelReferenceAutocomplete = {
  __typename?: 'ContentModelReferenceAutocomplete';
  GuidValue: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  ProviderName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentModelReferenceAutocompleteGuidValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentModelReferenceAutocompleteProviderNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentModelReferenceAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentModelReferenceFacet = {
  __typename?: 'ContentModelReferenceFacet';
  GuidValue: Maybe<Array<Maybe<StringFacet>>>;
  Id: Maybe<Array<Maybe<NumberFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  ProviderName: Maybe<Array<Maybe<StringFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  WorkId: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ContentModelReferenceFacetGuidValueArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceFacetIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ContentModelReferenceFacetProviderNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceFacetWorkIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ContentModelReferenceOrderByInput = {
  GuidValue: InputMaybe<OrderBy>;
  Id: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  ProviderName: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  WorkId: InputMaybe<OrderBy>;
};

export type ContentModelReferenceSearch = {
  __typename?: 'ContentModelReferenceSearch';
  Expanded: Maybe<IContent>;
  GuidValue: Maybe<Scalars['String']['output']>;
  Id: Maybe<Scalars['Int']['output']>;
  Language: Maybe<ContentLanguageModelSearch>;
  ProviderName: Maybe<Scalars['String']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  WorkId: Maybe<Scalars['Int']['output']>;
};


export type ContentModelReferenceSearchExpandedArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContentModelReferenceSearchLanguageArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContentModelReferenceSearchProviderNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContentModelReferenceSearchUrlArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ContentModelReferenceSearchFacet = {
  __typename?: 'ContentModelReferenceSearchFacet';
  GuidValue: Maybe<Array<Maybe<StringFacet>>>;
  Id: Maybe<Array<Maybe<NumberFacet>>>;
  Language: Maybe<ContentLanguageModelSearchFacet>;
  ProviderName: Maybe<Array<Maybe<StringFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  WorkId: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ContentModelReferenceSearchFacetGuidValueArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceSearchFacetIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ContentModelReferenceSearchFacetProviderNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceSearchFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceSearchFacetWorkIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ContentModelReferenceSearchOrderByInput = {
  GuidValue: InputMaybe<OrderBy>;
  Id: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelSearchOrderByInput>;
  ProviderName: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  WorkId: InputMaybe<OrderBy>;
};

export type ContentModelReferenceSearchWhereInput = {
  GuidValue: InputMaybe<StringFilterInput>;
  Id: InputMaybe<IntFilterInput>;
  Language: InputMaybe<ContentLanguageModelSearchWhereInput>;
  ProviderName: InputMaybe<SearchableStringFilterInput>;
  Url: InputMaybe<SearchableStringFilterInput>;
  WorkId: InputMaybe<IntFilterInput>;
};

export type ContentModelReferenceWhereInput = {
  GuidValue: InputMaybe<StringFilterInput>;
  Id: InputMaybe<IntFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  ProviderName: InputMaybe<StringFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  WorkId: InputMaybe<IntFilterInput>;
};

export type ContentOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type ContentOutput = {
  __typename?: 'ContentOutput';
  autocomplete: Maybe<ContentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContentFacet>;
  items: Maybe<Array<Maybe<IContent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentRootsModel = {
  __typename?: 'ContentRootsModel';
  ContentAssetsRoot: Maybe<ContentModelReference>;
  GlobalAssetsRoot: Maybe<ContentModelReference>;
  RootPage: Maybe<ContentModelReference>;
  SiteAssetsRoot: Maybe<ContentModelReference>;
  StartPage: Maybe<ContentModelReference>;
  WasteBasket: Maybe<ContentModelReference>;
};

export type ContentRootsModelAutocomplete = {
  __typename?: 'ContentRootsModelAutocomplete';
  ContentAssetsRoot: Maybe<ContentModelReferenceAutocomplete>;
  GlobalAssetsRoot: Maybe<ContentModelReferenceAutocomplete>;
  RootPage: Maybe<ContentModelReferenceAutocomplete>;
  SiteAssetsRoot: Maybe<ContentModelReferenceAutocomplete>;
  StartPage: Maybe<ContentModelReferenceAutocomplete>;
  WasteBasket: Maybe<ContentModelReferenceAutocomplete>;
};

export type ContentRootsModelFacet = {
  __typename?: 'ContentRootsModelFacet';
  ContentAssetsRoot: Maybe<ContentModelReferenceFacet>;
  GlobalAssetsRoot: Maybe<ContentModelReferenceFacet>;
  RootPage: Maybe<ContentModelReferenceFacet>;
  SiteAssetsRoot: Maybe<ContentModelReferenceFacet>;
  StartPage: Maybe<ContentModelReferenceFacet>;
  WasteBasket: Maybe<ContentModelReferenceFacet>;
};

export type ContentRootsModelOrderByInput = {
  ContentAssetsRoot: InputMaybe<ContentModelReferenceOrderByInput>;
  GlobalAssetsRoot: InputMaybe<ContentModelReferenceOrderByInput>;
  RootPage: InputMaybe<ContentModelReferenceOrderByInput>;
  SiteAssetsRoot: InputMaybe<ContentModelReferenceOrderByInput>;
  StartPage: InputMaybe<ContentModelReferenceOrderByInput>;
  WasteBasket: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type ContentRootsModelWhereInput = {
  ContentAssetsRoot: InputMaybe<ContentModelReferenceWhereInput>;
  GlobalAssetsRoot: InputMaybe<ContentModelReferenceWhereInput>;
  RootPage: InputMaybe<ContentModelReferenceWhereInput>;
  SiteAssetsRoot: InputMaybe<ContentModelReferenceWhereInput>;
  StartPage: InputMaybe<ContentModelReferenceWhereInput>;
  WasteBasket: InputMaybe<ContentModelReferenceWhereInput>;
};

export type ContentWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type Data_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Data_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor: Maybe<Scalars['String']['output']>;
  items: Maybe<Array<Maybe<IData>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type DataOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  Day = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  Hour = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  Minute = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  decay: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  origin: InputMaybe<Scalars['Date']['input']>;
  rate: InputMaybe<Scalars['Float']['input']>;
  scale: InputMaybe<Scalars['Int']['input']>;
};

export enum FactorModifier {
  /** Add 1 to the field value and take the natural logarithm */
  Log = 'LOG',
  /** Do not apply any multiplier to the field value */
  None = 'NONE',
  /** Reciprocate the field value, same as 1/x where x is the field's value */
  Reciprocal = 'RECIPROCAL',
  /** Take the square root of the field value */
  Sqrt = 'SQRT',
  /** Square the field value (multiply it by itself) */
  Square = 'SQUARE'
}

export type FooterColumn = IContent & IData & {
  __typename?: 'FooterColumn';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  Links: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type FooterColumnLinksArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type FooterColumnNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type FooterColumnTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type FooterColumn_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type FooterColumn_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type FooterColumnAutocomplete = {
  __typename?: 'FooterColumnAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type FooterColumnAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterColumnAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterColumnAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterColumnAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterColumnAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterColumnAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterColumnAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterColumnAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterColumnAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type FooterColumnFacet = {
  __typename?: 'FooterColumnFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  Links: Maybe<ContentAreaItemModelSearchFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Title: Maybe<Array<Maybe<StringFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type FooterColumnFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterColumnFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterColumnFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterColumnFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterColumnFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterColumnFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterColumnFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterColumnFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterColumnFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterColumnFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterColumnFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterColumnFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterColumnFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterColumnFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterColumnFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterColumnFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterColumnFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterColumnFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type FooterColumnOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  Links: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Title: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type FooterColumnOutput = {
  __typename?: 'FooterColumnOutput';
  autocomplete: Maybe<FooterColumnAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<FooterColumnFacet>;
  items: Maybe<Array<Maybe<FooterColumn>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type FooterColumnOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterColumnWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  Links: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Title: InputMaybe<SearchableStringFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type FooterPage = IContent & IData & {
  __typename?: 'FooterPage';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  Columns: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CopyrightText: Maybe<Scalars['String']['output']>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  SocialLinks: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type FooterPageColumnsArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type FooterPageCopyrightTextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type FooterPageNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type FooterPageSocialLinksArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type FooterPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type FooterPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type FooterPageAutocomplete = {
  __typename?: 'FooterPageAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type FooterPageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterPageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterPageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterPageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterPageAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterPageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterPageAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterPageAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterPageAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type FooterPageFacet = {
  __typename?: 'FooterPageFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  Columns: Maybe<ContentAreaItemModelSearchFacet>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  CopyrightText: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  SocialLinks: Maybe<ContentAreaItemModelSearchFacet>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type FooterPageFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterPageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterPageFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterPageFacetCopyrightTextArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterPageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterPageFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterPageFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterPageFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterPageFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterPageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterPageFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterPageFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterPageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterPageFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterPageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterPageFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterPageFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterPageFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type FooterPageOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  Columns: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  CopyrightText: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  SocialLinks: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type FooterPageOutput = {
  __typename?: 'FooterPageOutput';
  autocomplete: Maybe<FooterPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<FooterPageFacet>;
  items: Maybe<Array<Maybe<FooterPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type FooterPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterPageWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  Columns: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  CopyrightText: InputMaybe<SearchableStringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  SocialLinks: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<FooterPageWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<FooterPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<FooterPageWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type GenericMedia = IContent & IData & {
  __typename?: 'GenericMedia';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  Content: Maybe<Scalars['String']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  Description: Maybe<Scalars['String']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  MimeType: Maybe<Scalars['String']['output']>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Thumbnail: Maybe<BlobModel>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type GenericMediaContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type GenericMediaDescriptionArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type GenericMediaNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type GenericMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type GenericMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type GenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  MimeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Thumbnail: Maybe<BlobModelAutocomplete>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type GenericMediaAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericMediaAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericMediaAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericMediaAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericMediaAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericMediaAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericMediaAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericMediaAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericMediaAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericMediaAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type GenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  Content: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  Description: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  MimeType: Maybe<Array<Maybe<StringFacet>>>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Thumbnail: Maybe<BlobModelFacet>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type GenericMediaFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericMediaFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericMediaFacetContentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericMediaFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericMediaFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericMediaFacetDescriptionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericMediaFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericMediaFacetMimeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericMediaFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericMediaFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericMediaFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericMediaFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericMediaFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericMediaFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericMediaFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericMediaFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericMediaFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericMediaFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericMediaFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericMediaFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type GenericMediaOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  Content: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  Description: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  MimeType: InputMaybe<OrderBy>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Thumbnail: InputMaybe<BlobModelOrderByInput>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type GenericMediaOutput = {
  __typename?: 'GenericMediaOutput';
  autocomplete: Maybe<GenericMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<GenericMediaFacet>;
  items: Maybe<Array<Maybe<GenericMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type GenericMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMediaWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  Content: InputMaybe<SearchableStringFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  Description: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  MimeType: InputMaybe<StringFilterInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Thumbnail: InputMaybe<BlobModelWhereInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type HeaderPage = IContent & IData & {
  __typename?: 'HeaderPage';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  CtaHref: Maybe<Scalars['String']['output']>;
  CtaText: Maybe<Scalars['String']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  Logo: Maybe<Scalars['String']['output']>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  NavItems: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type HeaderPageCtaHrefArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeaderPageCtaTextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeaderPageLogoArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeaderPageNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeaderPageNavItemsArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeaderPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeaderPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeaderPageAutocomplete = {
  __typename?: 'HeaderPageAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type HeaderPageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderPageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderPageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderPageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderPageAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderPageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderPageAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderPageAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderPageAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type HeaderPageFacet = {
  __typename?: 'HeaderPageFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  CtaHref: Maybe<Array<Maybe<StringFacet>>>;
  CtaText: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  Logo: Maybe<Array<Maybe<StringFacet>>>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  NavItems: Maybe<ContentAreaItemModelSearchFacet>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type HeaderPageFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderPageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeaderPageFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderPageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeaderPageFacetCtaHrefArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderPageFacetCtaTextArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderPageFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderPageFacetLogoArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderPageFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderPageFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderPageFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderPageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeaderPageFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderPageFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderPageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeaderPageFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderPageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeaderPageFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderPageFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderPageFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type HeaderPageOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  CtaHref: InputMaybe<OrderBy>;
  CtaText: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  Logo: InputMaybe<OrderBy>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  NavItems: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type HeaderPageOutput = {
  __typename?: 'HeaderPageOutput';
  autocomplete: Maybe<HeaderPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeaderPageFacet>;
  items: Maybe<Array<Maybe<HeaderPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeaderPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderPageWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  CtaHref: InputMaybe<SearchableStringFilterInput>;
  CtaText: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  Logo: InputMaybe<SearchableStringFilterInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  NavItems: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<HeaderPageWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeaderPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeaderPageWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type HeroBlock = IContent & IData & {
  __typename?: 'HeroBlock';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  DecorationColorsPrimary: Maybe<Scalars['String']['output']>;
  DecorationColorsSecondary: Maybe<Scalars['String']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  ShowDecoration: Maybe<Scalars['Bool']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Subtitle: Maybe<Scalars['String']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type HeroBlockDecorationColorsPrimaryArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeroBlockDecorationColorsSecondaryArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeroBlockNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeroBlockSubtitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeroBlockTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeroBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeroBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type HeroBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type HeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  DecorationColorsPrimary: Maybe<Array<Maybe<StringFacet>>>;
  DecorationColorsSecondary: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  ShowDecoration: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Subtitle: Maybe<Array<Maybe<StringFacet>>>;
  Title: Maybe<Array<Maybe<StringFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type HeroBlockFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroBlockFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroBlockFacetDecorationColorsPrimaryArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetDecorationColorsSecondaryArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroBlockFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetShowDecorationArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroBlockFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroBlockFacetSubtitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type HeroBlockOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  DecorationColorsPrimary: InputMaybe<OrderBy>;
  DecorationColorsSecondary: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  ShowDecoration: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Subtitle: InputMaybe<OrderBy>;
  Title: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type HeroBlockOutput = {
  __typename?: 'HeroBlockOutput';
  autocomplete: Maybe<HeroBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeroBlockFacet>;
  items: Maybe<Array<Maybe<HeroBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeroBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroBlockWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  DecorationColorsPrimary: InputMaybe<SearchableStringFilterInput>;
  DecorationColorsSecondary: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  ShowDecoration: InputMaybe<BoolFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Subtitle: InputMaybe<SearchableStringFilterInput>;
  Title: InputMaybe<SearchableStringFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled: InputMaybe<Scalars['Boolean']['input']>;
  endToken: InputMaybe<Scalars['String']['input']>;
  startToken: InputMaybe<Scalars['String']['input']>;
};

export type HostDefinitionModel = {
  __typename?: 'HostDefinitionModel';
  Language: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  Type: Maybe<Scalars['String']['output']>;
};

export type HostDefinitionModelAutocomplete = {
  __typename?: 'HostDefinitionModelAutocomplete';
  Language: Maybe<ContentLanguageModelAutocomplete>;
  Name: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type HostDefinitionModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HostDefinitionModelAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type HostDefinitionModelFacet = {
  __typename?: 'HostDefinitionModelFacet';
  Language: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  Type: Maybe<Array<Maybe<StringFacet>>>;
};


export type HostDefinitionModelFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HostDefinitionModelFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HostDefinitionModelOrderByInput = {
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  Type: InputMaybe<OrderBy>;
};

export type HostDefinitionModelWhereInput = {
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<StringFilterInput>;
  Type: InputMaybe<StringFilterInput>;
};

export type IContent = {
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type IContentNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IContent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IContent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type IData_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IData_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ImageFile = IContent & IData & {
  __typename?: 'ImageFile';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  Content: Maybe<Scalars['String']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Copyright: Maybe<Scalars['String']['output']>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  MimeType: Maybe<Scalars['String']['output']>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Thumbnail: Maybe<BlobModel>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type ImageFileContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ImageFileCopyrightArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ImageFileNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ImageFile_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ImageFile_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ImageFileAutocomplete = {
  __typename?: 'ImageFileAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  MimeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Thumbnail: Maybe<BlobModelAutocomplete>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ImageFileAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageFileAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageFileAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageFileAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageFileAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageFileAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageFileAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageFileAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageFileAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageFileAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ImageFileFacet = {
  __typename?: 'ImageFileFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  Content: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Copyright: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  MimeType: Maybe<Array<Maybe<StringFacet>>>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Thumbnail: Maybe<BlobModelFacet>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ImageFileFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageFileFacetContentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetCopyrightArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageFileFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetMimeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageFileFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageFileFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageFileFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ImageFileOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  Content: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Copyright: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  MimeType: InputMaybe<OrderBy>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Thumbnail: InputMaybe<BlobModelOrderByInput>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type ImageFileOutput = {
  __typename?: 'ImageFileOutput';
  autocomplete: Maybe<ImageFileAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ImageFileFacet>;
  items: Maybe<Array<Maybe<ImageFile>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ImageFileOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageFileWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  Content: InputMaybe<SearchableStringFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Copyright: InputMaybe<SearchableStringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  MimeType: InputMaybe<StringFilterInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Thumbnail: InputMaybe<BlobModelWhereInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<ImageFileWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ImageFileWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ImageFileWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type InlineBlockPropertyModelSearch = {
  __typename?: 'InlineBlockPropertyModelSearch';
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type InlineBlockPropertyModelSearchContentTypeArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type InlineBlockPropertyModelSearchFacet = {
  __typename?: 'InlineBlockPropertyModelSearchFacet';
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
};


export type InlineBlockPropertyModelSearchFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type InlineBlockPropertyModelSearchOrderByInput = {
  ContentType: InputMaybe<OrderBy>;
};

export type InlineBlockPropertyModelSearchWhereInput = {
  ContentType: InputMaybe<SearchableStringFilterInput>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Int']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt: InputMaybe<Scalars['Int']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte: InputMaybe<Scalars['Int']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt: InputMaybe<Scalars['Int']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte: InputMaybe<Scalars['Int']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Int']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type LinkConfig = {
  from: InputMaybe<Scalars['String']['input']>;
  to: InputMaybe<Scalars['String']['input']>;
};

export enum LinkTypes {
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `Ancestors` |
   * | *to*        |        | `ContentLink.GuidValue`   |
   */
  Ancestors = 'ANCESTORS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `ContentLink.GuidValue` |
   * | *to*        |        | `ParentLink.GuidValue`   |
   */
  Children = 'CHILDREN',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `ContentLink.GuidValue` |
   * | *to*        |        | `ParentLink.GuidValue`   |
   */
  Default = 'DEFAULT'
}

export enum Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en'
}

export type LogoItemBlock = IContent & IData & {
  __typename?: 'LogoItemBlock';
  Alt: Maybe<Scalars['String']['output']>;
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  Src: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type LogoItemBlockAltArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogoItemBlockNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogoItemBlockSrcArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogoItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogoItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LogoItemBlockAutocomplete = {
  __typename?: 'LogoItemBlockAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type LogoItemBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LogoItemBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LogoItemBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LogoItemBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LogoItemBlockAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LogoItemBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LogoItemBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LogoItemBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LogoItemBlockAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LogoItemBlockFacet = {
  __typename?: 'LogoItemBlockFacet';
  Alt: Maybe<Array<Maybe<StringFacet>>>;
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  Src: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type LogoItemBlockFacetAltArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogoItemBlockFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogoItemBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LogoItemBlockFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogoItemBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LogoItemBlockFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogoItemBlockFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogoItemBlockFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogoItemBlockFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogoItemBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LogoItemBlockFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogoItemBlockFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogoItemBlockFacetSrcArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogoItemBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LogoItemBlockFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogoItemBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LogoItemBlockFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogoItemBlockFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogoItemBlockFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type LogoItemBlockOrderByInput = {
  Alt: InputMaybe<OrderBy>;
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  Src: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type LogoItemBlockOutput = {
  __typename?: 'LogoItemBlockOutput';
  autocomplete: Maybe<LogoItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LogoItemBlockFacet>;
  items: Maybe<Array<Maybe<LogoItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LogoItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LogoItemBlockWhereInput = {
  Alt: InputMaybe<SearchableStringFilterInput>;
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  Src: InputMaybe<SearchableStringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type LogosBlock = IContent & IData & {
  __typename?: 'LogosBlock';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  Links: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type LogosBlockLinksArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogosBlockNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogosBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogosBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LogosBlockAutocomplete = {
  __typename?: 'LogosBlockAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type LogosBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LogosBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LogosBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LogosBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LogosBlockAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LogosBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LogosBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LogosBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LogosBlockAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LogosBlockFacet = {
  __typename?: 'LogosBlockFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  Links: Maybe<ContentAreaItemModelSearchFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type LogosBlockFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogosBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LogosBlockFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogosBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LogosBlockFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogosBlockFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogosBlockFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogosBlockFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogosBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LogosBlockFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogosBlockFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogosBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LogosBlockFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogosBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LogosBlockFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogosBlockFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LogosBlockFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type LogosBlockOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  Links: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type LogosBlockOutput = {
  __typename?: 'LogosBlockOutput';
  autocomplete: Maybe<LogosBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LogosBlockFacet>;
  items: Maybe<Array<Maybe<LogosBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LogosBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LogosBlockWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  Links: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type NavItem = IContent & IData & {
  __typename?: 'NavItem';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  Href: Maybe<Scalars['String']['output']>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Label: Maybe<Scalars['String']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type NavItemHrefArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type NavItemLabelArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type NavItemNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type NavItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type NavItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type NavItemAutocomplete = {
  __typename?: 'NavItemAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type NavItemAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NavItemAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NavItemAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NavItemAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NavItemAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NavItemAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NavItemAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NavItemAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NavItemAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type NavItemFacet = {
  __typename?: 'NavItemFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  Href: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Label: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type NavItemFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavItemFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NavItemFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavItemFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NavItemFacetHrefArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavItemFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavItemFacetLabelArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavItemFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavItemFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavItemFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavItemFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NavItemFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavItemFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavItemFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NavItemFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavItemFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NavItemFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavItemFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavItemFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type NavItemOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  Href: InputMaybe<OrderBy>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Label: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type NavItemOutput = {
  __typename?: 'NavItemOutput';
  autocomplete: Maybe<NavItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<NavItemFacet>;
  items: Maybe<Array<Maybe<NavItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type NavItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavItemWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  Href: InputMaybe<SearchableStringFilterInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Label: InputMaybe<SearchableStringFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

/** Factor influences the score based of number values with a factor function */
export type NumberFactor = {
  modifier: InputMaybe<FactorModifier>;
  value: InputMaybe<Scalars['Float']['input']>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type PortfolioGridBlock = IContent & IData & {
  __typename?: 'PortfolioGridBlock';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Items: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type PortfolioGridBlockItemsArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioGridBlockNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioGridBlockTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioGridBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioGridBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PortfolioGridBlockAutocomplete = {
  __typename?: 'PortfolioGridBlockAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type PortfolioGridBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PortfolioGridBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PortfolioGridBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PortfolioGridBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PortfolioGridBlockAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PortfolioGridBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PortfolioGridBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PortfolioGridBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PortfolioGridBlockAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type PortfolioGridBlockFacet = {
  __typename?: 'PortfolioGridBlockFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Items: Maybe<ContentAreaItemModelSearchFacet>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Title: Maybe<Array<Maybe<StringFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type PortfolioGridBlockFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioGridBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PortfolioGridBlockFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioGridBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PortfolioGridBlockFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioGridBlockFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioGridBlockFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioGridBlockFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioGridBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PortfolioGridBlockFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioGridBlockFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioGridBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PortfolioGridBlockFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioGridBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PortfolioGridBlockFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioGridBlockFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioGridBlockFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioGridBlockFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type PortfolioGridBlockOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Items: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Title: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type PortfolioGridBlockOutput = {
  __typename?: 'PortfolioGridBlockOutput';
  autocomplete: Maybe<PortfolioGridBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PortfolioGridBlockFacet>;
  items: Maybe<Array<Maybe<PortfolioGridBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PortfolioGridBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PortfolioGridBlockWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Items: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Title: InputMaybe<SearchableStringFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type PortfolioItemBlock = IContent & IData & {
  __typename?: 'PortfolioItemBlock';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  Description: Maybe<Scalars['String']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  ImageUrl: Maybe<Scalars['String']['output']>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  Link: Maybe<Scalars['String']['output']>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type PortfolioItemBlockDescriptionArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioItemBlockImageUrlArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioItemBlockLinkArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioItemBlockNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioItemBlockTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PortfolioItemBlockAutocomplete = {
  __typename?: 'PortfolioItemBlockAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type PortfolioItemBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PortfolioItemBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PortfolioItemBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PortfolioItemBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PortfolioItemBlockAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PortfolioItemBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PortfolioItemBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PortfolioItemBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PortfolioItemBlockAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type PortfolioItemBlockFacet = {
  __typename?: 'PortfolioItemBlockFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  Description: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  ImageUrl: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  Link: Maybe<Array<Maybe<StringFacet>>>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Title: Maybe<Array<Maybe<StringFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type PortfolioItemBlockFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioItemBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PortfolioItemBlockFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioItemBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PortfolioItemBlockFacetDescriptionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioItemBlockFacetImageUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioItemBlockFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioItemBlockFacetLinkArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioItemBlockFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioItemBlockFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioItemBlockFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioItemBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PortfolioItemBlockFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioItemBlockFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioItemBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PortfolioItemBlockFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioItemBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PortfolioItemBlockFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioItemBlockFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioItemBlockFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PortfolioItemBlockFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type PortfolioItemBlockOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  Description: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  ImageUrl: InputMaybe<OrderBy>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  Link: InputMaybe<OrderBy>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Title: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type PortfolioItemBlockOutput = {
  __typename?: 'PortfolioItemBlockOutput';
  autocomplete: Maybe<PortfolioItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PortfolioItemBlockFacet>;
  items: Maybe<Array<Maybe<PortfolioItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PortfolioItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PortfolioItemBlockWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  Description: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  ImageUrl: InputMaybe<SearchableStringFilterInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  Link: InputMaybe<SearchableStringFilterInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Title: InputMaybe<SearchableStringFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type ProfileBlock = IContent & IData & {
  __typename?: 'ProfileBlock';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Bio: Maybe<Scalars['String']['output']>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  ImageSrc: Maybe<Scalars['String']['output']>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type ProfileBlockBioArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ProfileBlockImageSrcArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ProfileBlockNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ProfileBlockTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ProfileBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ProfileBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ProfileBlockAutocomplete = {
  __typename?: 'ProfileBlockAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ProfileBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProfileBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProfileBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProfileBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProfileBlockAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProfileBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProfileBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProfileBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProfileBlockAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ProfileBlockFacet = {
  __typename?: 'ProfileBlockFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Bio: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  ImageSrc: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Title: Maybe<Array<Maybe<StringFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ProfileBlockFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProfileBlockFacetBioArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProfileBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProfileBlockFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProfileBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProfileBlockFacetImageSrcArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProfileBlockFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProfileBlockFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProfileBlockFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProfileBlockFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProfileBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProfileBlockFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProfileBlockFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProfileBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProfileBlockFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProfileBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProfileBlockFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProfileBlockFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProfileBlockFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProfileBlockFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ProfileBlockOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Bio: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  ImageSrc: InputMaybe<OrderBy>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Title: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type ProfileBlockOutput = {
  __typename?: 'ProfileBlockOutput';
  autocomplete: Maybe<ProfileBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ProfileBlockFacet>;
  items: Maybe<Array<Maybe<ProfileBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ProfileBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProfileBlockWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Bio: InputMaybe<SearchableStringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  ImageSrc: InputMaybe<SearchableStringFilterInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Title: InputMaybe<SearchableStringFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type Query = {
  __typename?: 'Query';
  AvailabilityBlock: Maybe<AvailabilityBlockOutput>;
  CMSPage: Maybe<CmsPageOutput>;
  ContactBlock: Maybe<ContactBlockOutput>;
  Content: Maybe<ContentOutput>;
  Data: Maybe<DataOutput>;
  FooterColumn: Maybe<FooterColumnOutput>;
  FooterPage: Maybe<FooterPageOutput>;
  GenericMedia: Maybe<GenericMediaOutput>;
  HeaderPage: Maybe<HeaderPageOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  ImageFile: Maybe<ImageFileOutput>;
  LogoItemBlock: Maybe<LogoItemBlockOutput>;
  LogosBlock: Maybe<LogosBlockOutput>;
  NavItem: Maybe<NavItemOutput>;
  PortfolioGridBlock: Maybe<PortfolioGridBlockOutput>;
  PortfolioItemBlock: Maybe<PortfolioItemBlockOutput>;
  ProfileBlock: Maybe<ProfileBlockOutput>;
  ServiceItem: Maybe<ServiceItemOutput>;
  ServicesBlock: Maybe<ServicesBlockOutput>;
  SiteDefinition: Maybe<SiteDefinitionOutput>;
  SocialLink: Maybe<SocialLinkOutput>;
  StartPage: Maybe<StartPageOutput>;
  StoryBlock: Maybe<StoryBlockOutput>;
  TestimonialItemBlock: Maybe<TestimonialItemBlockOutput>;
  TestimonialsBlock: Maybe<TestimonialsBlockOutput>;
  VectorImageFile: Maybe<VectorImageFileOutput>;
  VideoFile: Maybe<VideoFileOutput>;
};


export type QueryAvailabilityBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AvailabilityBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<AvailabilityBlockWhereInput>;
};


export type QueryCmsPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CmsPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CmsPageWhereInput>;
};


export type QueryContactBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContactBlockWhereInput>;
};


export type QueryContentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContentWhereInput>;
};


export type QueryDataArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<DataWhereInput>;
};


export type QueryFooterColumnArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterColumnOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FooterColumnWhereInput>;
};


export type QueryFooterPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FooterPageWhereInput>;
};


export type QueryGenericMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<GenericMediaWhereInput>;
};


export type QueryHeaderPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeaderPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HeaderPageWhereInput>;
};


export type QueryHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HeroBlockWhereInput>;
};


export type QueryImageFileArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageFileOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ImageFileWhereInput>;
};


export type QueryLogoItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogoItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<LogoItemBlockWhereInput>;
};


export type QueryLogosBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogosBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<LogosBlockWhereInput>;
};


export type QueryNavItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<NavItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<NavItemWhereInput>;
};


export type QueryPortfolioGridBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioGridBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<PortfolioGridBlockWhereInput>;
};


export type QueryPortfolioItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<PortfolioItemBlockWhereInput>;
};


export type QueryProfileBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ProfileBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ProfileBlockWhereInput>;
};


export type QueryServiceItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServiceItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ServiceItemWhereInput>;
};


export type QueryServicesBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServicesBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ServicesBlockWhereInput>;
};


export type QuerySiteDefinitionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SiteDefinitionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SiteDefinitionWhereInput>;
};


export type QuerySocialLinkArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SocialLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SocialLinkWhereInput>;
};


export type QueryStartPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StartPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<StartPageWhereInput>;
};


export type QueryStoryBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StoryBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<StoryBlockWhereInput>;
};


export type QueryTestimonialItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TestimonialItemBlockWhereInput>;
};


export type QueryTestimonialsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TestimonialsBlockWhereInput>;
};


export type QueryVectorImageFileArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VectorImageFileOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<VectorImageFileWhereInput>;
};


export type QueryVideoFileArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoFileOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<VideoFileWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  AvailabilityBlock: Maybe<AvailabilityBlockOutput>;
  CMSPage: Maybe<CmsPageOutput>;
  ContactBlock: Maybe<ContactBlockOutput>;
  Content: Maybe<ContentOutput>;
  Data: Maybe<DataOutput>;
  FooterColumn: Maybe<FooterColumnOutput>;
  FooterPage: Maybe<FooterPageOutput>;
  GenericMedia: Maybe<GenericMediaOutput>;
  HeaderPage: Maybe<HeaderPageOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  ImageFile: Maybe<ImageFileOutput>;
  LogoItemBlock: Maybe<LogoItemBlockOutput>;
  LogosBlock: Maybe<LogosBlockOutput>;
  NavItem: Maybe<NavItemOutput>;
  PortfolioGridBlock: Maybe<PortfolioGridBlockOutput>;
  PortfolioItemBlock: Maybe<PortfolioItemBlockOutput>;
  ProfileBlock: Maybe<ProfileBlockOutput>;
  ServiceItem: Maybe<ServiceItemOutput>;
  ServicesBlock: Maybe<ServicesBlockOutput>;
  SiteDefinition: Maybe<SiteDefinitionOutput>;
  SocialLink: Maybe<SocialLinkOutput>;
  StartPage: Maybe<StartPageOutput>;
  StoryBlock: Maybe<StoryBlockOutput>;
  TestimonialItemBlock: Maybe<TestimonialItemBlockOutput>;
  TestimonialsBlock: Maybe<TestimonialsBlockOutput>;
  VectorImageFile: Maybe<VectorImageFileOutput>;
  VideoFile: Maybe<VideoFileOutput>;
};


export type QueryRefAvailabilityBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AvailabilityBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<AvailabilityBlockWhereInput>;
};


export type QueryRefCmsPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CmsPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CmsPageWhereInput>;
};


export type QueryRefContactBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContactBlockWhereInput>;
};


export type QueryRefContentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContentWhereInput>;
};


export type QueryRefDataArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<DataWhereInput>;
};


export type QueryRefFooterColumnArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterColumnOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FooterColumnWhereInput>;
};


export type QueryRefFooterPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FooterPageWhereInput>;
};


export type QueryRefGenericMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<GenericMediaWhereInput>;
};


export type QueryRefHeaderPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeaderPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HeaderPageWhereInput>;
};


export type QueryRefHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HeroBlockWhereInput>;
};


export type QueryRefImageFileArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageFileOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ImageFileWhereInput>;
};


export type QueryRefLogoItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogoItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<LogoItemBlockWhereInput>;
};


export type QueryRefLogosBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogosBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<LogosBlockWhereInput>;
};


export type QueryRefNavItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<NavItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<NavItemWhereInput>;
};


export type QueryRefPortfolioGridBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioGridBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<PortfolioGridBlockWhereInput>;
};


export type QueryRefPortfolioItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<PortfolioItemBlockWhereInput>;
};


export type QueryRefProfileBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ProfileBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ProfileBlockWhereInput>;
};


export type QueryRefServiceItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServiceItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ServiceItemWhereInput>;
};


export type QueryRefServicesBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServicesBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ServicesBlockWhereInput>;
};


export type QueryRefSiteDefinitionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SiteDefinitionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SiteDefinitionWhereInput>;
};


export type QueryRefSocialLinkArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SocialLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SocialLinkWhereInput>;
};


export type QueryRefStartPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StartPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<StartPageWhereInput>;
};


export type QueryRefStoryBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StoryBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<StoryBlockWhereInput>;
};


export type QueryRefTestimonialItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TestimonialItemBlockWhereInput>;
};


export type QueryRefTestimonialsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TestimonialsBlockWhereInput>;
};


export type QueryRefVectorImageFileArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VectorImageFileOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<VectorImageFileWhereInput>;
};


export type QueryRefVideoFileArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoFileOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<VideoFileWhereInput>;
};

export type RangeFacetsInput = {
  from: InputMaybe<Scalars['Int']['input']>;
  to: InputMaybe<Scalars['Int']['input']>;
};

export enum Ranking {
  BoostOnly = 'BOOST_ONLY',
  Doc = 'DOC',
  Relevance = 'RELEVANCE',
  Semantic = 'SEMANTIC'
}

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type ServiceItem = IContent & IData & {
  __typename?: 'ServiceItem';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  Description: Maybe<Scalars['String']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  Icon: Maybe<Scalars['String']['output']>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type ServiceItemDescriptionArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServiceItemIconArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServiceItemNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServiceItemTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServiceItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServiceItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ServiceItemAutocomplete = {
  __typename?: 'ServiceItemAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ServiceItemAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ServiceItemAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ServiceItemAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ServiceItemAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ServiceItemAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ServiceItemAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ServiceItemAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ServiceItemAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ServiceItemAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ServiceItemFacet = {
  __typename?: 'ServiceItemFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  Description: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  Icon: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Title: Maybe<Array<Maybe<StringFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ServiceItemFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServiceItemFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ServiceItemFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServiceItemFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ServiceItemFacetDescriptionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServiceItemFacetIconArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServiceItemFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServiceItemFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServiceItemFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServiceItemFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServiceItemFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ServiceItemFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServiceItemFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServiceItemFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ServiceItemFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServiceItemFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ServiceItemFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServiceItemFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServiceItemFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServiceItemFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ServiceItemOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  Description: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  Icon: InputMaybe<OrderBy>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Title: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type ServiceItemOutput = {
  __typename?: 'ServiceItemOutput';
  autocomplete: Maybe<ServiceItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ServiceItemFacet>;
  items: Maybe<Array<Maybe<ServiceItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ServiceItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceItemWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  Description: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  Icon: InputMaybe<SearchableStringFilterInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Title: InputMaybe<SearchableStringFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type ServicesBlock = IContent & IData & {
  __typename?: 'ServicesBlock';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Services: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type ServicesBlockNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServicesBlockServicesArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServicesBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServicesBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ServicesBlockAutocomplete = {
  __typename?: 'ServicesBlockAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ServicesBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ServicesBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ServicesBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ServicesBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ServicesBlockAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ServicesBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ServicesBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ServicesBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ServicesBlockAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ServicesBlockFacet = {
  __typename?: 'ServicesBlockFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Services: Maybe<ContentAreaItemModelSearchFacet>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ServicesBlockFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServicesBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ServicesBlockFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServicesBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ServicesBlockFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServicesBlockFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServicesBlockFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServicesBlockFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServicesBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ServicesBlockFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServicesBlockFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServicesBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ServicesBlockFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServicesBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ServicesBlockFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServicesBlockFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ServicesBlockFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ServicesBlockOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Services: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type ServicesBlockOutput = {
  __typename?: 'ServicesBlockOutput';
  autocomplete: Maybe<ServicesBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ServicesBlockFacet>;
  items: Maybe<Array<Maybe<ServicesBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ServicesBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServicesBlockWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Services: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type SiteDefinition = IData & {
  __typename?: 'SiteDefinition';
  ContentLink: Maybe<ContentModelReference>;
  ContentRoots: Maybe<ContentRootsModel>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  EditLocation: Maybe<Scalars['String']['output']>;
  Hosts: Maybe<Array<Maybe<HostDefinitionModel>>>;
  Id: Maybe<Scalars['String']['output']>;
  Languages: Maybe<Array<Maybe<SiteDefinitionLanguageModel>>>;
  Name: Maybe<Scalars['String']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type SiteDefinitionNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SiteDefinition_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SiteDefinition_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SiteDefinitionAutocomplete = {
  __typename?: 'SiteDefinitionAutocomplete';
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentRoots: Maybe<ContentRootsModelAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  EditLocation: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Hosts: Maybe<HostDefinitionModelAutocomplete>;
  Id: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Languages: Maybe<SiteDefinitionLanguageModelAutocomplete>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type SiteDefinitionAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionAutocompleteEditLocationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type SiteDefinitionFacet = {
  __typename?: 'SiteDefinitionFacet';
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentRoots: Maybe<ContentRootsModelFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  EditLocation: Maybe<Array<Maybe<StringFacet>>>;
  Hosts: Maybe<HostDefinitionModelFacet>;
  Id: Maybe<Array<Maybe<StringFacet>>>;
  Languages: Maybe<SiteDefinitionLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
};


export type SiteDefinitionFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetEditLocationArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SiteDefinitionLanguageModel = {
  __typename?: 'SiteDefinitionLanguageModel';
  DisplayName: Maybe<Scalars['String']['output']>;
  IsMasterLanguage: Maybe<Scalars['Bool']['output']>;
  Name: Maybe<Scalars['String']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  UrlSegment: Maybe<Scalars['String']['output']>;
};

export type SiteDefinitionLanguageModelAutocomplete = {
  __typename?: 'SiteDefinitionLanguageModelAutocomplete';
  DisplayName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  UrlSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type SiteDefinitionLanguageModelAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionLanguageModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionLanguageModelAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionLanguageModelAutocompleteUrlSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type SiteDefinitionLanguageModelFacet = {
  __typename?: 'SiteDefinitionLanguageModelFacet';
  DisplayName: Maybe<Array<Maybe<StringFacet>>>;
  IsMasterLanguage: Maybe<Array<Maybe<StringFacet>>>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  UrlSegment: Maybe<Array<Maybe<StringFacet>>>;
};


export type SiteDefinitionLanguageModelFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetIsMasterLanguageArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetUrlSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SiteDefinitionLanguageModelOrderByInput = {
  DisplayName: InputMaybe<OrderBy>;
  IsMasterLanguage: InputMaybe<OrderBy>;
  Name: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  UrlSegment: InputMaybe<OrderBy>;
};

export type SiteDefinitionLanguageModelWhereInput = {
  DisplayName: InputMaybe<StringFilterInput>;
  IsMasterLanguage: InputMaybe<BoolFilterInput>;
  Name: InputMaybe<StringFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  UrlSegment: InputMaybe<StringFilterInput>;
};

export type SiteDefinitionOrderByInput = {
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentRoots: InputMaybe<ContentRootsModelOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  EditLocation: InputMaybe<OrderBy>;
  Hosts: InputMaybe<HostDefinitionModelOrderByInput>;
  Id: InputMaybe<OrderBy>;
  Languages: InputMaybe<SiteDefinitionLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SiteDefinitionOutput = {
  __typename?: 'SiteDefinitionOutput';
  autocomplete: Maybe<SiteDefinitionAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SiteDefinitionFacet>;
  items: Maybe<Array<Maybe<SiteDefinition>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SiteDefinitionOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SiteDefinitionWhereInput = {
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentRoots: InputMaybe<ContentRootsModelWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  EditLocation: InputMaybe<StringFilterInput>;
  Hosts: InputMaybe<HostDefinitionModelWhereInput>;
  Id: InputMaybe<StringFilterInput>;
  Languages: InputMaybe<SiteDefinitionLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<SiteDefinitionWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SiteDefinitionWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SiteDefinitionWhereInput>>>;
};

export type SocialLink = IContent & IData & {
  __typename?: 'SocialLink';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  Href: Maybe<Scalars['String']['output']>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  Platform: Maybe<Scalars['String']['output']>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type SocialLinkHrefArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SocialLinkNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SocialLinkPlatformArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SocialLink_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SocialLink_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SocialLinkAutocomplete = {
  __typename?: 'SocialLinkAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type SocialLinkAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SocialLinkAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SocialLinkAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SocialLinkAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SocialLinkAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SocialLinkAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SocialLinkAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SocialLinkAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SocialLinkAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type SocialLinkFacet = {
  __typename?: 'SocialLinkFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  Href: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  Platform: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type SocialLinkFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SocialLinkFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type SocialLinkFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SocialLinkFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type SocialLinkFacetHrefArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SocialLinkFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SocialLinkFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SocialLinkFacetPlatformArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SocialLinkFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SocialLinkFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SocialLinkFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type SocialLinkFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SocialLinkFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SocialLinkFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type SocialLinkFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SocialLinkFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type SocialLinkFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SocialLinkFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SocialLinkFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type SocialLinkOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  Href: InputMaybe<OrderBy>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  Platform: InputMaybe<OrderBy>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type SocialLinkOutput = {
  __typename?: 'SocialLinkOutput';
  autocomplete: Maybe<SocialLinkAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SocialLinkFacet>;
  items: Maybe<Array<Maybe<SocialLink>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SocialLinkOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SocialLinkWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  Href: InputMaybe<SearchableStringFilterInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  Platform: InputMaybe<SearchableStringFilterInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type StartPage = IContent & IData & {
  __typename?: 'StartPage';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Blocks: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Keywords: Maybe<Scalars['String']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  MetaKeywords: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  ShortDescription: Maybe<Scalars['String']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type StartPageBlocksArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StartPageKeywordsArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StartPageNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StartPageShortDescriptionArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StartPageTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StartPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StartPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type StartPageAutocomplete = {
  __typename?: 'StartPageAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  MetaKeywords: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type StartPageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StartPageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StartPageAutocompleteMetaKeywordsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StartPageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StartPageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StartPageAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StartPageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StartPageAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StartPageAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StartPageAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type StartPageFacet = {
  __typename?: 'StartPageFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Blocks: Maybe<ContentAreaItemModelSearchFacet>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Keywords: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  MetaKeywords: Maybe<Array<Maybe<StringFacet>>>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  ShortDescription: Maybe<Array<Maybe<StringFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Title: Maybe<Array<Maybe<StringFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type StartPageFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StartPageFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StartPageFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetKeywordsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetMetaKeywordsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StartPageFacetShortDescriptionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StartPageFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StartPageFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type StartPageOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Blocks: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Keywords: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  MetaKeywords: InputMaybe<OrderBy>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  ShortDescription: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Title: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type StartPageOutput = {
  __typename?: 'StartPageOutput';
  autocomplete: Maybe<StartPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<StartPageFacet>;
  items: Maybe<Array<Maybe<StartPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type StartPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type StartPageWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Blocks: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Keywords: InputMaybe<SearchableStringFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  MetaKeywords: InputMaybe<StringFilterInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  ShortDescription: InputMaybe<SearchableStringFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Title: InputMaybe<SearchableStringFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type StoryBlock = IContent & IData & {
  __typename?: 'StoryBlock';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  Highlights: Maybe<Scalars['String']['output']>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Story: Maybe<Scalars['String']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type StoryBlockHighlightsArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StoryBlockNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StoryBlockStoryArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StoryBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StoryBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type StoryBlockAutocomplete = {
  __typename?: 'StoryBlockAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type StoryBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StoryBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StoryBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StoryBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StoryBlockAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StoryBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StoryBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StoryBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StoryBlockAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type StoryBlockFacet = {
  __typename?: 'StoryBlockFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  Highlights: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Story: Maybe<Array<Maybe<StringFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type StoryBlockFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StoryBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StoryBlockFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StoryBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StoryBlockFacetHighlightsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StoryBlockFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StoryBlockFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StoryBlockFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StoryBlockFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StoryBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StoryBlockFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StoryBlockFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StoryBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StoryBlockFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StoryBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StoryBlockFacetStoryArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StoryBlockFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StoryBlockFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StoryBlockFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type StoryBlockOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  Highlights: InputMaybe<OrderBy>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Story: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type StoryBlockOutput = {
  __typename?: 'StoryBlockOutput';
  autocomplete: Maybe<StoryBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<StoryBlockFacet>;
  items: Maybe<Array<Maybe<StoryBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type StoryBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type StoryBlockWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  Highlights: InputMaybe<SearchableStringFilterInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Story: InputMaybe<SearchableStringFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  One = 'ONE',
  /** synonym slot 2 */
  Two = 'TWO'
}

export type TestimonialItemBlock = IContent & IData & {
  __typename?: 'TestimonialItemBlock';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  AvatarSrc: Maybe<Scalars['String']['output']>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  Content: Maybe<Scalars['String']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  FullName: Maybe<Scalars['String']['output']>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  Position: Maybe<Scalars['String']['output']>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type TestimonialItemBlockAvatarSrcArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialItemBlockContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialItemBlockFullNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialItemBlockNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialItemBlockPositionArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialItemBlockAutocomplete = {
  __typename?: 'TestimonialItemBlockAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type TestimonialItemBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TestimonialItemBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TestimonialItemBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TestimonialItemBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TestimonialItemBlockAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TestimonialItemBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TestimonialItemBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TestimonialItemBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TestimonialItemBlockAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type TestimonialItemBlockFacet = {
  __typename?: 'TestimonialItemBlockFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  AvatarSrc: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  Content: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  FullName: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  Position: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type TestimonialItemBlockFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialItemBlockFacetAvatarSrcArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialItemBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type TestimonialItemBlockFacetContentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialItemBlockFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialItemBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type TestimonialItemBlockFacetFullNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialItemBlockFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialItemBlockFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialItemBlockFacetPositionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialItemBlockFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialItemBlockFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialItemBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type TestimonialItemBlockFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialItemBlockFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialItemBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type TestimonialItemBlockFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialItemBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type TestimonialItemBlockFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialItemBlockFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialItemBlockFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type TestimonialItemBlockOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  AvatarSrc: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  Content: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  FullName: InputMaybe<OrderBy>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  Position: InputMaybe<OrderBy>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type TestimonialItemBlockOutput = {
  __typename?: 'TestimonialItemBlockOutput';
  autocomplete: Maybe<TestimonialItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialItemBlockFacet>;
  items: Maybe<Array<Maybe<TestimonialItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialItemBlockWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  AvatarSrc: InputMaybe<SearchableStringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  Content: InputMaybe<SearchableStringFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  FullName: InputMaybe<SearchableStringFilterInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  Position: InputMaybe<SearchableStringFilterInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type TestimonialsBlock = IContent & IData & {
  __typename?: 'TestimonialsBlock';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Testimonials: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  Title: Maybe<Scalars['String']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type TestimonialsBlockNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialsBlockTestimonialsArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialsBlockTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialsBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialsBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialsBlockAutocomplete = {
  __typename?: 'TestimonialsBlockAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type TestimonialsBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TestimonialsBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TestimonialsBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TestimonialsBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TestimonialsBlockAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TestimonialsBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TestimonialsBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TestimonialsBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TestimonialsBlockAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type TestimonialsBlockFacet = {
  __typename?: 'TestimonialsBlockFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Testimonials: Maybe<ContentAreaItemModelSearchFacet>;
  Title: Maybe<Array<Maybe<StringFacet>>>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type TestimonialsBlockFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialsBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type TestimonialsBlockFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialsBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type TestimonialsBlockFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialsBlockFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialsBlockFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialsBlockFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialsBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type TestimonialsBlockFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialsBlockFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialsBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type TestimonialsBlockFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialsBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type TestimonialsBlockFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialsBlockFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialsBlockFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TestimonialsBlockFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type TestimonialsBlockOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Testimonials: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  Title: InputMaybe<OrderBy>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type TestimonialsBlockOutput = {
  __typename?: 'TestimonialsBlockOutput';
  autocomplete: Maybe<TestimonialsBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialsBlockFacet>;
  items: Maybe<Array<Maybe<TestimonialsBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialsBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialsBlockWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Testimonials: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  Title: InputMaybe<SearchableStringFilterInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type VectorImageFile = IContent & IData & {
  __typename?: 'VectorImageFile';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  Content: Maybe<Scalars['String']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  MimeType: Maybe<Scalars['String']['output']>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Thumbnail: Maybe<BlobModel>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type VectorImageFileContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VectorImageFileNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VectorImageFile_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VectorImageFile_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type VectorImageFileAutocomplete = {
  __typename?: 'VectorImageFileAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  MimeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Thumbnail: Maybe<BlobModelAutocomplete>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type VectorImageFileAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VectorImageFileAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VectorImageFileAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VectorImageFileAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VectorImageFileAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VectorImageFileAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VectorImageFileAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VectorImageFileAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VectorImageFileAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VectorImageFileAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type VectorImageFileFacet = {
  __typename?: 'VectorImageFileFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  Content: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  MimeType: Maybe<Array<Maybe<StringFacet>>>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Thumbnail: Maybe<BlobModelFacet>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type VectorImageFileFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VectorImageFileFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type VectorImageFileFacetContentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VectorImageFileFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VectorImageFileFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type VectorImageFileFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VectorImageFileFacetMimeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VectorImageFileFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VectorImageFileFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VectorImageFileFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VectorImageFileFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type VectorImageFileFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VectorImageFileFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VectorImageFileFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type VectorImageFileFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VectorImageFileFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type VectorImageFileFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VectorImageFileFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VectorImageFileFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type VectorImageFileOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  Content: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  MimeType: InputMaybe<OrderBy>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Thumbnail: InputMaybe<BlobModelOrderByInput>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type VectorImageFileOutput = {
  __typename?: 'VectorImageFileOutput';
  autocomplete: Maybe<VectorImageFileAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<VectorImageFileFacet>;
  items: Maybe<Array<Maybe<VectorImageFile>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type VectorImageFileOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type VectorImageFileWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  Content: InputMaybe<SearchableStringFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  MimeType: InputMaybe<StringFilterInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Thumbnail: InputMaybe<BlobModelWhereInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<VectorImageFileWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<VectorImageFileWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<VectorImageFileWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export type VideoFile = IContent & IData & {
  __typename?: 'VideoFile';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<Array<Maybe<CategoryModel>>>;
  Changed: Maybe<Scalars['Date']['output']>;
  Content: Maybe<Scalars['String']['output']>;
  ContentLink: Maybe<ContentModelReference>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Copyright: Maybe<Scalars['String']['output']>;
  Created: Maybe<Scalars['Date']['output']>;
  ExistingLanguages: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft: Maybe<Scalars['Bool']['output']>;
  Language: Maybe<ContentLanguageModel>;
  MasterLanguage: Maybe<ContentLanguageModel>;
  MimeType: Maybe<Scalars['String']['output']>;
  Name: Maybe<Scalars['String']['output']>;
  ParentLink: Maybe<ContentModelReference>;
  PreviewImage: Maybe<ContentModelReference>;
  RelativePath: Maybe<Scalars['String']['output']>;
  RouteSegment: Maybe<Scalars['String']['output']>;
  Saved: Maybe<Scalars['Date']['output']>;
  Shortcut: Maybe<Scalars['String']['output']>;
  SiteId: Maybe<Scalars['String']['output']>;
  StartPublish: Maybe<Scalars['Date']['output']>;
  Status: Maybe<Scalars['String']['output']>;
  StopPublish: Maybe<Scalars['Date']['output']>;
  Thumbnail: Maybe<BlobModel>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _concreteType: Maybe<Scalars['String']['output']>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _sortOrder: Maybe<Scalars['Int']['output']>;
};


export type VideoFileContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VideoFileCopyrightArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VideoFileNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VideoFile_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VideoFile_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type VideoFileAutocomplete = {
  __typename?: 'VideoFileAutocomplete';
  Ancestors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category: Maybe<CategoryModelAutocomplete>;
  ContentLink: Maybe<ContentModelReferenceAutocomplete>;
  ContentType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages: Maybe<ContentLanguageModelAutocomplete>;
  Language: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage: Maybe<ContentLanguageModelAutocomplete>;
  MimeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink: Maybe<ContentModelReferenceAutocomplete>;
  PreviewImage: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Thumbnail: Maybe<BlobModelAutocomplete>;
  Url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type VideoFileAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VideoFileAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VideoFileAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VideoFileAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VideoFileAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VideoFileAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VideoFileAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VideoFileAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VideoFileAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VideoFileAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type VideoFileFacet = {
  __typename?: 'VideoFileFacet';
  Ancestors: Maybe<Array<Maybe<StringFacet>>>;
  Category: Maybe<CategoryModelFacet>;
  Changed: Maybe<Array<Maybe<DateFacet>>>;
  Content: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink: Maybe<ContentModelReferenceFacet>;
  ContentType: Maybe<Array<Maybe<StringFacet>>>;
  Copyright: Maybe<Array<Maybe<StringFacet>>>;
  Created: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft: Maybe<Array<Maybe<StringFacet>>>;
  Language: Maybe<ContentLanguageModelFacet>;
  MasterLanguage: Maybe<ContentLanguageModelFacet>;
  MimeType: Maybe<Array<Maybe<StringFacet>>>;
  Name: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink: Maybe<ContentModelReferenceFacet>;
  PreviewImage: Maybe<ContentModelReferenceFacet>;
  RelativePath: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment: Maybe<Array<Maybe<StringFacet>>>;
  Saved: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut: Maybe<Array<Maybe<StringFacet>>>;
  SiteId: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish: Maybe<Array<Maybe<DateFacet>>>;
  Status: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish: Maybe<Array<Maybe<DateFacet>>>;
  Thumbnail: Maybe<BlobModelFacet>;
  Url: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType: Maybe<Array<Maybe<StringFacet>>>;
  _sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
};


export type VideoFileFacetAncestorsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VideoFileFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoFileFacetContentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VideoFileFacetContentTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VideoFileFacetCopyrightArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VideoFileFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoFileFacetIsCommonDraftArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VideoFileFacetMimeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VideoFileFacetNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VideoFileFacetRelativePathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VideoFileFacetRouteSegmentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VideoFileFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoFileFacetShortcutArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VideoFileFacetSiteIdArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VideoFileFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoFileFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VideoFileFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoFileFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VideoFileFacet_ConcreteTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VideoFileFacet_SortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type VideoFileOrderByInput = {
  Ancestors: InputMaybe<OrderBy>;
  Category: InputMaybe<CategoryModelOrderByInput>;
  Changed: InputMaybe<OrderBy>;
  Content: InputMaybe<OrderBy>;
  ContentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType: InputMaybe<OrderBy>;
  Copyright: InputMaybe<OrderBy>;
  Created: InputMaybe<OrderBy>;
  ExistingLanguages: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft: InputMaybe<OrderBy>;
  Language: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelOrderByInput>;
  MimeType: InputMaybe<OrderBy>;
  Name: InputMaybe<OrderBy>;
  ParentLink: InputMaybe<ContentModelReferenceOrderByInput>;
  PreviewImage: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath: InputMaybe<OrderBy>;
  RouteSegment: InputMaybe<OrderBy>;
  Saved: InputMaybe<OrderBy>;
  Shortcut: InputMaybe<OrderBy>;
  SiteId: InputMaybe<OrderBy>;
  StartPublish: InputMaybe<OrderBy>;
  Status: InputMaybe<OrderBy>;
  StopPublish: InputMaybe<OrderBy>;
  Thumbnail: InputMaybe<BlobModelOrderByInput>;
  Url: InputMaybe<OrderBy>;
  _concreteType: InputMaybe<OrderBy>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  _sortOrder: InputMaybe<OrderBy>;
};

export type VideoFileOutput = {
  __typename?: 'VideoFileOutput';
  autocomplete: Maybe<VideoFileAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<VideoFileFacet>;
  items: Maybe<Array<Maybe<VideoFile>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type VideoFileOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoFileWhereInput = {
  Ancestors: InputMaybe<StringFilterInput>;
  Category: InputMaybe<CategoryModelWhereInput>;
  Changed: InputMaybe<DateFilterInput>;
  Content: InputMaybe<SearchableStringFilterInput>;
  ContentLink: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType: InputMaybe<StringFilterInput>;
  Copyright: InputMaybe<SearchableStringFilterInput>;
  Created: InputMaybe<DateFilterInput>;
  ExistingLanguages: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft: InputMaybe<BoolFilterInput>;
  Language: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage: InputMaybe<ContentLanguageModelWhereInput>;
  MimeType: InputMaybe<StringFilterInput>;
  Name: InputMaybe<SearchableStringFilterInput>;
  ParentLink: InputMaybe<ContentModelReferenceWhereInput>;
  PreviewImage: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath: InputMaybe<StringFilterInput>;
  RouteSegment: InputMaybe<StringFilterInput>;
  Saved: InputMaybe<DateFilterInput>;
  Shortcut: InputMaybe<StringFilterInput>;
  SiteId: InputMaybe<StringFilterInput>;
  StartPublish: InputMaybe<DateFilterInput>;
  Status: InputMaybe<StringFilterInput>;
  StopPublish: InputMaybe<DateFilterInput>;
  Thumbnail: InputMaybe<BlobModelWhereInput>;
  Url: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<VideoFileWhereInput>>>;
  _concreteType: InputMaybe<StringFilterInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<VideoFileWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<VideoFileWhereInput>>>;
  _sortOrder: InputMaybe<IntFilterInput>;
};

export enum System_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL'
}

export type AllPagesQueryVariables = Exact<{
  pageType: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type AllPagesQuery = { __typename?: 'Query', Content: { __typename?: 'ContentOutput', items: Array<{ __typename?: 'AvailabilityBlock', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'CMSPage', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'ContactBlock', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'Content', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'FooterColumn', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'FooterPage', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'GenericMedia', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'HeaderPage', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'HeroBlock', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'ImageFile', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'LogoItemBlock', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'LogosBlock', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'NavItem', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'PortfolioGridBlock', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'PortfolioItemBlock', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'ProfileBlock', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'ServiceItem', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'ServicesBlock', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'SocialLink', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'StartPage', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'StoryBlock', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'TestimonialItemBlock', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'TestimonialsBlock', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'VectorImageFile', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | { __typename?: 'VideoFile', Name: string | null, RelativePath: string | null, RouteSegment: string | null, ContentType: Array<string | null> | null } | null> | null } | null };

export type GetContentByGuidQueryVariables = Exact<{
  guid: InputMaybe<Scalars['String']['input']>;
}>;


export type GetContentByGuidQuery = { __typename?: 'Query', Content: { __typename?: 'ContentOutput', items: Array<{ __typename?: 'AvailabilityBlock', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'CMSPage', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'ContactBlock', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'Content', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'FooterColumn', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'FooterPage', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'GenericMedia', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'HeaderPage', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'HeroBlock', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'ImageFile', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'LogoItemBlock', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'LogosBlock', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'NavItem', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'PortfolioGridBlock', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'PortfolioItemBlock', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'ProfileBlock', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'ServiceItem', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'ServicesBlock', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'SocialLink', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'StartPage', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'StoryBlock', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'TestimonialItemBlock', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'TestimonialsBlock', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'VectorImageFile', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | { __typename?: 'VideoFile', ContentType: Array<string | null> | null, ContentLink: { __typename?: 'ContentModelReference', GuidValue: string | null, Id: number | null, WorkId: number | null, Url: string | null } | null } | null> | null } | null };

export type GetFooterQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetFooterQuery = { __typename?: 'Query', FooterPage: { __typename?: 'FooterPageOutput', items: Array<{ __typename?: 'FooterPage', CopyrightText: string | null, SocialLinks: Array<{ __typename: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename?: 'AvailabilityBlock' } | { __typename?: 'CMSPage' } | { __typename?: 'ContactBlock' } | { __typename?: 'Content' } | { __typename?: 'FooterColumn' } | { __typename?: 'FooterPage' } | { __typename?: 'GenericMedia' } | { __typename?: 'HeaderPage' } | { __typename?: 'HeroBlock' } | { __typename?: 'ImageFile' } | { __typename?: 'LogoItemBlock' } | { __typename?: 'LogosBlock' } | { __typename?: 'NavItem' } | { __typename?: 'PortfolioGridBlock' } | { __typename?: 'PortfolioItemBlock' } | { __typename?: 'ProfileBlock' } | { __typename?: 'ServiceItem' } | { __typename?: 'ServicesBlock' } | { __typename?: 'SocialLink', Platform: string | null, Href: string | null } | { __typename?: 'StartPage' } | { __typename?: 'StoryBlock' } | { __typename?: 'TestimonialItemBlock' } | { __typename?: 'TestimonialsBlock' } | { __typename?: 'VectorImageFile' } | { __typename?: 'VideoFile' } | null } | null } | null> | null, Columns: Array<{ __typename: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename?: 'AvailabilityBlock' } | { __typename?: 'CMSPage' } | { __typename?: 'ContactBlock' } | { __typename?: 'Content' } | { __typename?: 'FooterColumn', Title: string | null, Links: Array<{ __typename?: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename: 'AvailabilityBlock' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Content' } | { __typename: 'FooterColumn' } | { __typename: 'FooterPage' } | { __typename: 'GenericMedia' } | { __typename: 'HeaderPage' } | { __typename: 'HeroBlock' } | { __typename: 'ImageFile' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem', Label: string | null, Href: string | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VectorImageFile' } | { __typename: 'VideoFile' } | null } | null } | null> | null } | { __typename?: 'FooterPage' } | { __typename?: 'GenericMedia' } | { __typename?: 'HeaderPage' } | { __typename?: 'HeroBlock' } | { __typename?: 'ImageFile' } | { __typename?: 'LogoItemBlock' } | { __typename?: 'LogosBlock' } | { __typename?: 'NavItem' } | { __typename?: 'PortfolioGridBlock' } | { __typename?: 'PortfolioItemBlock' } | { __typename?: 'ProfileBlock' } | { __typename?: 'ServiceItem' } | { __typename?: 'ServicesBlock' } | { __typename?: 'SocialLink' } | { __typename?: 'StartPage' } | { __typename?: 'StoryBlock' } | { __typename?: 'TestimonialItemBlock' } | { __typename?: 'TestimonialsBlock' } | { __typename?: 'VectorImageFile' } | { __typename?: 'VideoFile' } | null } | null } | null> | null } | null> | null } | null };

export type GetHeaderQueryVariables = Exact<{
  locale: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetHeaderQuery = { __typename?: 'Query', HeaderPage: { __typename?: 'HeaderPageOutput', items: Array<{ __typename?: 'HeaderPage', Logo: string | null, CtaText: string | null, CtaHref: string | null, NavItems: Array<{ __typename?: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename: 'AvailabilityBlock' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Content' } | { __typename: 'FooterColumn' } | { __typename: 'FooterPage' } | { __typename: 'GenericMedia' } | { __typename: 'HeaderPage' } | { __typename: 'HeroBlock' } | { __typename: 'ImageFile' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem', Label: string | null, Href: string | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VectorImageFile' } | { __typename: 'VideoFile' } | null } | null } | null> | null } | null> | null } | null };

export type GetPageByUrlQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPageByUrlQuery = { __typename?: 'Query', CMSPage: { __typename?: 'CMSPageOutput', items: Array<{ __typename?: 'CMSPage', Title: string | null, ShortDescription: string | null, Keywords: string | null, _modified: any | null, Blocks: Array<{ __typename?: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename: 'AvailabilityBlock', Availability: string | null, ProjectTypes: Array<string | null> | null } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock', Title: string | null, Description: string | null } | { __typename: 'Content' } | { __typename: 'FooterColumn' } | { __typename: 'FooterPage' } | { __typename: 'GenericMedia' } | { __typename: 'HeaderPage' } | { __typename: 'HeroBlock', Title: string | null, Subtitle: string | null, DecorationColorsPrimary: string | null, DecorationColorsSecondary: string | null, ShowDecoration: any | null } | { __typename: 'ImageFile' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', Links: Array<{ __typename?: 'ContentAreaItemModelSearch', DisplayOption: string | null, Tag: string | null, ContentLink: { __typename: 'ContentModelReferenceSearch', Expanded: { __typename?: 'AvailabilityBlock' } | { __typename?: 'CMSPage' } | { __typename?: 'ContactBlock' } | { __typename?: 'Content' } | { __typename?: 'FooterColumn' } | { __typename?: 'FooterPage' } | { __typename?: 'GenericMedia' } | { __typename?: 'HeaderPage' } | { __typename?: 'HeroBlock' } | { __typename?: 'ImageFile' } | { __typename?: 'LogoItemBlock', Src: string | null, Alt: string | null } | { __typename?: 'LogosBlock' } | { __typename?: 'NavItem' } | { __typename?: 'PortfolioGridBlock' } | { __typename?: 'PortfolioItemBlock' } | { __typename?: 'ProfileBlock' } | { __typename?: 'ServiceItem' } | { __typename?: 'ServicesBlock' } | { __typename?: 'SocialLink' } | { __typename?: 'StartPage' } | { __typename?: 'StoryBlock' } | { __typename?: 'TestimonialItemBlock' } | { __typename?: 'TestimonialsBlock' } | { __typename?: 'VectorImageFile' } | { __typename?: 'VideoFile' } | null } | null } | null> | null } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock', Title: string | null, Items: Array<{ __typename: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename: 'AvailabilityBlock' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Content' } | { __typename: 'FooterColumn' } | { __typename: 'FooterPage' } | { __typename: 'GenericMedia' } | { __typename: 'HeaderPage' } | { __typename: 'HeroBlock' } | { __typename: 'ImageFile' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', Title: string | null, Description: string | null, ImageUrl: string | null, Link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VectorImageFile' } | { __typename: 'VideoFile' } | null } | null } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', ImageSrc: string | null, Bio: string | null, Name: string | null, Title: string | null } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', Services: Array<{ __typename?: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename: 'AvailabilityBlock' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Content' } | { __typename: 'FooterColumn' } | { __typename: 'FooterPage' } | { __typename: 'GenericMedia' } | { __typename: 'HeaderPage' } | { __typename: 'HeroBlock' } | { __typename: 'ImageFile' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem', Title: string | null, Description: string | null, Icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VectorImageFile' } | { __typename: 'VideoFile' } | null } | null } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock', Story: string | null, Highlights: string | null } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', Title: string | null, Testimonials: Array<{ __typename: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename: 'AvailabilityBlock' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Content' } | { __typename: 'FooterColumn' } | { __typename: 'FooterPage' } | { __typename: 'GenericMedia' } | { __typename: 'HeaderPage' } | { __typename: 'HeroBlock' } | { __typename: 'ImageFile' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItemBlock', FullName: string | null, Position: string | null, Content: string | null, AvatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'VectorImageFile' } | { __typename: 'VideoFile' } | null } | null } | null> | null } | { __typename: 'VectorImageFile' } | { __typename: 'VideoFile' } | null } | null } | null> | null } | null> | null } | null };

export type GetStartPageQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetStartPageQuery = { __typename?: 'Query', StartPage: { __typename?: 'StartPageOutput', items: Array<{ __typename?: 'StartPage', Title: string | null, ShortDescription: string | null, Keywords: string | null, Blocks: Array<{ __typename?: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename: 'AvailabilityBlock', Availability: string | null, ProjectTypes: Array<string | null> | null } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock', Title: string | null, Description: string | null } | { __typename: 'Content' } | { __typename: 'FooterColumn' } | { __typename: 'FooterPage' } | { __typename: 'GenericMedia' } | { __typename: 'HeaderPage' } | { __typename: 'HeroBlock', Title: string | null, Subtitle: string | null, DecorationColorsPrimary: string | null, DecorationColorsSecondary: string | null, ShowDecoration: any | null } | { __typename: 'ImageFile' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', Links: Array<{ __typename?: 'ContentAreaItemModelSearch', DisplayOption: string | null, Tag: string | null, ContentLink: { __typename: 'ContentModelReferenceSearch', Expanded: { __typename?: 'AvailabilityBlock' } | { __typename?: 'CMSPage' } | { __typename?: 'ContactBlock' } | { __typename?: 'Content' } | { __typename?: 'FooterColumn' } | { __typename?: 'FooterPage' } | { __typename?: 'GenericMedia' } | { __typename?: 'HeaderPage' } | { __typename?: 'HeroBlock' } | { __typename?: 'ImageFile' } | { __typename?: 'LogoItemBlock', Src: string | null, Alt: string | null } | { __typename?: 'LogosBlock' } | { __typename?: 'NavItem' } | { __typename?: 'PortfolioGridBlock' } | { __typename?: 'PortfolioItemBlock' } | { __typename?: 'ProfileBlock' } | { __typename?: 'ServiceItem' } | { __typename?: 'ServicesBlock' } | { __typename?: 'SocialLink' } | { __typename?: 'StartPage' } | { __typename?: 'StoryBlock' } | { __typename?: 'TestimonialItemBlock' } | { __typename?: 'TestimonialsBlock' } | { __typename?: 'VectorImageFile' } | { __typename?: 'VideoFile' } | null } | null } | null> | null } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock', Title: string | null, Items: Array<{ __typename: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename: 'AvailabilityBlock' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Content' } | { __typename: 'FooterColumn' } | { __typename: 'FooterPage' } | { __typename: 'GenericMedia' } | { __typename: 'HeaderPage' } | { __typename: 'HeroBlock' } | { __typename: 'ImageFile' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', Title: string | null, Description: string | null, ImageUrl: string | null, Link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VectorImageFile' } | { __typename: 'VideoFile' } | null } | null } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', ImageSrc: string | null, Bio: string | null, Name: string | null, Title: string | null } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', Services: Array<{ __typename?: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename: 'AvailabilityBlock' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Content' } | { __typename: 'FooterColumn' } | { __typename: 'FooterPage' } | { __typename: 'GenericMedia' } | { __typename: 'HeaderPage' } | { __typename: 'HeroBlock' } | { __typename: 'ImageFile' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem', Title: string | null, Description: string | null, Icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VectorImageFile' } | { __typename: 'VideoFile' } | null } | null } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock', Story: string | null, Highlights: string | null } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', Title: string | null, Testimonials: Array<{ __typename: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename: 'AvailabilityBlock' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Content' } | { __typename: 'FooterColumn' } | { __typename: 'FooterPage' } | { __typename: 'GenericMedia' } | { __typename: 'HeaderPage' } | { __typename: 'HeroBlock' } | { __typename: 'ImageFile' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItemBlock', FullName: string | null, Position: string | null, Content: string | null, AvatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'VectorImageFile' } | { __typename: 'VideoFile' } | null } | null } | null> | null } | { __typename: 'VectorImageFile' } | { __typename: 'VideoFile' } | null } | null } | null> | null } | null> | null } | null };

export type HeroBlockFragmentFragment = { __typename?: 'HeroBlock', Title: string | null, Subtitle: string | null, DecorationColorsPrimary: string | null, DecorationColorsSecondary: string | null, ShowDecoration: any | null };

export type ContactBlockFragmentFragment = { __typename?: 'ContactBlock', Title: string | null, Description: string | null };

export type LogosBlockFragmentFragment = { __typename?: 'LogosBlock', Links: Array<{ __typename?: 'ContentAreaItemModelSearch', DisplayOption: string | null, Tag: string | null, ContentLink: { __typename: 'ContentModelReferenceSearch', Expanded: { __typename?: 'AvailabilityBlock' } | { __typename?: 'CMSPage' } | { __typename?: 'ContactBlock' } | { __typename?: 'Content' } | { __typename?: 'FooterColumn' } | { __typename?: 'FooterPage' } | { __typename?: 'GenericMedia' } | { __typename?: 'HeaderPage' } | { __typename?: 'HeroBlock' } | { __typename?: 'ImageFile' } | { __typename?: 'LogoItemBlock', Src: string | null, Alt: string | null } | { __typename?: 'LogosBlock' } | { __typename?: 'NavItem' } | { __typename?: 'PortfolioGridBlock' } | { __typename?: 'PortfolioItemBlock' } | { __typename?: 'ProfileBlock' } | { __typename?: 'ServiceItem' } | { __typename?: 'ServicesBlock' } | { __typename?: 'SocialLink' } | { __typename?: 'StartPage' } | { __typename?: 'StoryBlock' } | { __typename?: 'TestimonialItemBlock' } | { __typename?: 'TestimonialsBlock' } | { __typename?: 'VectorImageFile' } | { __typename?: 'VideoFile' } | null } | null } | null> | null };

export type PortfolioGridBlockFragmentFragment = { __typename?: 'PortfolioGridBlock', Title: string | null, Items: Array<{ __typename: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename: 'AvailabilityBlock' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Content' } | { __typename: 'FooterColumn' } | { __typename: 'FooterPage' } | { __typename: 'GenericMedia' } | { __typename: 'HeaderPage' } | { __typename: 'HeroBlock' } | { __typename: 'ImageFile' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', Title: string | null, Description: string | null, ImageUrl: string | null, Link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VectorImageFile' } | { __typename: 'VideoFile' } | null } | null } | null> | null };

export type ServicesBlockFragmentFragment = { __typename?: 'ServicesBlock', Services: Array<{ __typename?: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename: 'AvailabilityBlock' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Content' } | { __typename: 'FooterColumn' } | { __typename: 'FooterPage' } | { __typename: 'GenericMedia' } | { __typename: 'HeaderPage' } | { __typename: 'HeroBlock' } | { __typename: 'ImageFile' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem', Title: string | null, Description: string | null, Icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VectorImageFile' } | { __typename: 'VideoFile' } | null } | null } | null> | null };

export type TestimonialsBlockFragmentFragment = { __typename?: 'TestimonialsBlock', Title: string | null, Testimonials: Array<{ __typename: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename: 'AvailabilityBlock' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Content' } | { __typename: 'FooterColumn' } | { __typename: 'FooterPage' } | { __typename: 'GenericMedia' } | { __typename: 'HeaderPage' } | { __typename: 'HeroBlock' } | { __typename: 'ImageFile' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItemBlock', FullName: string | null, Position: string | null, Content: string | null, AvatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'VectorImageFile' } | { __typename: 'VideoFile' } | null } | null } | null> | null };

export type ProfileBlockFragmentFragment = { __typename?: 'ProfileBlock', ImageSrc: string | null, Bio: string | null, Name: string | null, Title: string | null };

export type AvailabilityBlockFragmentFragment = { __typename?: 'AvailabilityBlock', Availability: string | null, ProjectTypes: Array<string | null> | null };

export type StoryBlockFragmentFragment = { __typename?: 'StoryBlock', Story: string | null, Highlights: string | null };

type ItemsInContentArea_AvailabilityBlock_Fragment = { __typename: 'AvailabilityBlock', Availability: string | null, ProjectTypes: Array<string | null> | null };

type ItemsInContentArea_CmsPage_Fragment = { __typename: 'CMSPage' };

type ItemsInContentArea_ContactBlock_Fragment = { __typename: 'ContactBlock', Title: string | null, Description: string | null };

type ItemsInContentArea_Content_Fragment = { __typename: 'Content' };

type ItemsInContentArea_FooterColumn_Fragment = { __typename: 'FooterColumn' };

type ItemsInContentArea_FooterPage_Fragment = { __typename: 'FooterPage' };

type ItemsInContentArea_GenericMedia_Fragment = { __typename: 'GenericMedia' };

type ItemsInContentArea_HeaderPage_Fragment = { __typename: 'HeaderPage' };

type ItemsInContentArea_HeroBlock_Fragment = { __typename: 'HeroBlock', Title: string | null, Subtitle: string | null, DecorationColorsPrimary: string | null, DecorationColorsSecondary: string | null, ShowDecoration: any | null };

type ItemsInContentArea_ImageFile_Fragment = { __typename: 'ImageFile' };

type ItemsInContentArea_LogoItemBlock_Fragment = { __typename: 'LogoItemBlock' };

type ItemsInContentArea_LogosBlock_Fragment = { __typename: 'LogosBlock', Links: Array<{ __typename?: 'ContentAreaItemModelSearch', DisplayOption: string | null, Tag: string | null, ContentLink: { __typename: 'ContentModelReferenceSearch', Expanded: { __typename?: 'AvailabilityBlock' } | { __typename?: 'CMSPage' } | { __typename?: 'ContactBlock' } | { __typename?: 'Content' } | { __typename?: 'FooterColumn' } | { __typename?: 'FooterPage' } | { __typename?: 'GenericMedia' } | { __typename?: 'HeaderPage' } | { __typename?: 'HeroBlock' } | { __typename?: 'ImageFile' } | { __typename?: 'LogoItemBlock', Src: string | null, Alt: string | null } | { __typename?: 'LogosBlock' } | { __typename?: 'NavItem' } | { __typename?: 'PortfolioGridBlock' } | { __typename?: 'PortfolioItemBlock' } | { __typename?: 'ProfileBlock' } | { __typename?: 'ServiceItem' } | { __typename?: 'ServicesBlock' } | { __typename?: 'SocialLink' } | { __typename?: 'StartPage' } | { __typename?: 'StoryBlock' } | { __typename?: 'TestimonialItemBlock' } | { __typename?: 'TestimonialsBlock' } | { __typename?: 'VectorImageFile' } | { __typename?: 'VideoFile' } | null } | null } | null> | null };

type ItemsInContentArea_NavItem_Fragment = { __typename: 'NavItem' };

type ItemsInContentArea_PortfolioGridBlock_Fragment = { __typename: 'PortfolioGridBlock', Title: string | null, Items: Array<{ __typename: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename: 'AvailabilityBlock' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Content' } | { __typename: 'FooterColumn' } | { __typename: 'FooterPage' } | { __typename: 'GenericMedia' } | { __typename: 'HeaderPage' } | { __typename: 'HeroBlock' } | { __typename: 'ImageFile' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', Title: string | null, Description: string | null, ImageUrl: string | null, Link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VectorImageFile' } | { __typename: 'VideoFile' } | null } | null } | null> | null };

type ItemsInContentArea_PortfolioItemBlock_Fragment = { __typename: 'PortfolioItemBlock' };

type ItemsInContentArea_ProfileBlock_Fragment = { __typename: 'ProfileBlock', ImageSrc: string | null, Bio: string | null, Name: string | null, Title: string | null };

type ItemsInContentArea_ServiceItem_Fragment = { __typename: 'ServiceItem' };

type ItemsInContentArea_ServicesBlock_Fragment = { __typename: 'ServicesBlock', Services: Array<{ __typename?: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename: 'AvailabilityBlock' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Content' } | { __typename: 'FooterColumn' } | { __typename: 'FooterPage' } | { __typename: 'GenericMedia' } | { __typename: 'HeaderPage' } | { __typename: 'HeroBlock' } | { __typename: 'ImageFile' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem', Title: string | null, Description: string | null, Icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VectorImageFile' } | { __typename: 'VideoFile' } | null } | null } | null> | null };

type ItemsInContentArea_SocialLink_Fragment = { __typename: 'SocialLink' };

type ItemsInContentArea_StartPage_Fragment = { __typename: 'StartPage' };

type ItemsInContentArea_StoryBlock_Fragment = { __typename: 'StoryBlock', Story: string | null, Highlights: string | null };

type ItemsInContentArea_TestimonialItemBlock_Fragment = { __typename: 'TestimonialItemBlock' };

type ItemsInContentArea_TestimonialsBlock_Fragment = { __typename: 'TestimonialsBlock', Title: string | null, Testimonials: Array<{ __typename: 'ContentAreaItemModelSearch', ContentLink: { __typename?: 'ContentModelReferenceSearch', Expanded: { __typename: 'AvailabilityBlock' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Content' } | { __typename: 'FooterColumn' } | { __typename: 'FooterPage' } | { __typename: 'GenericMedia' } | { __typename: 'HeaderPage' } | { __typename: 'HeroBlock' } | { __typename: 'ImageFile' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItemBlock', FullName: string | null, Position: string | null, Content: string | null, AvatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'VectorImageFile' } | { __typename: 'VideoFile' } | null } | null } | null> | null };

type ItemsInContentArea_VectorImageFile_Fragment = { __typename: 'VectorImageFile' };

type ItemsInContentArea_VideoFile_Fragment = { __typename: 'VideoFile' };

export type ItemsInContentAreaFragment = ItemsInContentArea_AvailabilityBlock_Fragment | ItemsInContentArea_CmsPage_Fragment | ItemsInContentArea_ContactBlock_Fragment | ItemsInContentArea_Content_Fragment | ItemsInContentArea_FooterColumn_Fragment | ItemsInContentArea_FooterPage_Fragment | ItemsInContentArea_GenericMedia_Fragment | ItemsInContentArea_HeaderPage_Fragment | ItemsInContentArea_HeroBlock_Fragment | ItemsInContentArea_ImageFile_Fragment | ItemsInContentArea_LogoItemBlock_Fragment | ItemsInContentArea_LogosBlock_Fragment | ItemsInContentArea_NavItem_Fragment | ItemsInContentArea_PortfolioGridBlock_Fragment | ItemsInContentArea_PortfolioItemBlock_Fragment | ItemsInContentArea_ProfileBlock_Fragment | ItemsInContentArea_ServiceItem_Fragment | ItemsInContentArea_ServicesBlock_Fragment | ItemsInContentArea_SocialLink_Fragment | ItemsInContentArea_StartPage_Fragment | ItemsInContentArea_StoryBlock_Fragment | ItemsInContentArea_TestimonialItemBlock_Fragment | ItemsInContentArea_TestimonialsBlock_Fragment | ItemsInContentArea_VectorImageFile_Fragment | ItemsInContentArea_VideoFile_Fragment;

export const HeroBlockFragmentFragmentDoc = gql`
    fragment HeroBlockFragment on HeroBlock {
  Title
  Subtitle
  DecorationColorsPrimary
  DecorationColorsSecondary
  ShowDecoration
}
    `;
export const ContactBlockFragmentFragmentDoc = gql`
    fragment ContactBlockFragment on ContactBlock {
  Title
  Description
}
    `;
export const LogosBlockFragmentFragmentDoc = gql`
    fragment LogosBlockFragment on LogosBlock {
  Links {
    DisplayOption
    Tag
    ContentLink {
      __typename
      Expanded {
        ... on LogoItemBlock {
          Src
          Alt
        }
      }
    }
  }
}
    `;
export const PortfolioGridBlockFragmentFragmentDoc = gql`
    fragment PortfolioGridBlockFragment on PortfolioGridBlock {
  Title
  Items {
    __typename
    ContentLink {
      Expanded {
        __typename
        ... on PortfolioItemBlock {
          Title
          Description
          ImageUrl
          Link
        }
      }
    }
  }
}
    `;
export const ServicesBlockFragmentFragmentDoc = gql`
    fragment ServicesBlockFragment on ServicesBlock {
  Services {
    ContentLink {
      Expanded {
        __typename
        ... on ServiceItem {
          Title
          Description
          Icon
        }
      }
    }
  }
}
    `;
export const TestimonialsBlockFragmentFragmentDoc = gql`
    fragment TestimonialsBlockFragment on TestimonialsBlock {
  Title
  Testimonials {
    __typename
    ContentLink {
      Expanded {
        __typename
        ... on TestimonialItemBlock {
          FullName
          Position
          Content
          AvatarSrc
        }
      }
    }
  }
}
    `;
export const ProfileBlockFragmentFragmentDoc = gql`
    fragment ProfileBlockFragment on ProfileBlock {
  ImageSrc
  Bio
  Name
  Title
}
    `;
export const AvailabilityBlockFragmentFragmentDoc = gql`
    fragment AvailabilityBlockFragment on AvailabilityBlock {
  Availability
  ProjectTypes
}
    `;
export const StoryBlockFragmentFragmentDoc = gql`
    fragment StoryBlockFragment on StoryBlock {
  Story
  Highlights
}
    `;
export const ItemsInContentAreaFragmentDoc = gql`
    fragment ItemsInContentArea on IContent {
  __typename
  ...HeroBlockFragment
  ...ContactBlockFragment
  ...LogosBlockFragment
  ...PortfolioGridBlockFragment
  ...ServicesBlockFragment
  ...TestimonialsBlockFragment
  ...ProfileBlockFragment
  ...AvailabilityBlockFragment
  ...StoryBlockFragment
}
    ${HeroBlockFragmentFragmentDoc}
${ContactBlockFragmentFragmentDoc}
${LogosBlockFragmentFragmentDoc}
${PortfolioGridBlockFragmentFragmentDoc}
${ServicesBlockFragmentFragmentDoc}
${TestimonialsBlockFragmentFragmentDoc}
${ProfileBlockFragmentFragmentDoc}
${AvailabilityBlockFragmentFragmentDoc}
${StoryBlockFragmentFragmentDoc}`;
export const AllPagesDocument = gql`
    query AllPages($pageType: [String]) {
  Content(where: {ContentType: {in: $pageType}}) {
    items {
      Name
      RelativePath
      RouteSegment
      ContentType
    }
  }
}
    `;
export const GetContentByGuidDocument = gql`
    query GetContentByGuid($guid: String) {
  Content(where: {ContentLink: {GuidValue: {eq: $guid}}}) {
    items {
      ContentType
      ContentLink {
        GuidValue
        Id
        WorkId
        Url
      }
    }
  }
}
    `;
export const GetFooterDocument = gql`
    query getFooter($locales: [Locales]) {
  FooterPage(locale: $locales) {
    items {
      CopyrightText
      SocialLinks {
        __typename
        ContentLink {
          Expanded {
            ... on SocialLink {
              Platform
              Href
            }
          }
        }
      }
      Columns {
        __typename
        ContentLink {
          Expanded {
            ... on FooterColumn {
              Title
              Links {
                ContentLink {
                  Expanded {
                    __typename
                    ... on NavItem {
                      Label
                      Href
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const GetHeaderDocument = gql`
    query getHeader($locale: [Locales]) {
  HeaderPage(locale: $locale) {
    items {
      Logo
      CtaText
      CtaHref
      NavItems {
        ContentLink {
          Expanded {
            __typename
            ... on NavItem {
              Label
              Href
            }
          }
        }
      }
    }
  }
}
    `;
export const GetPageByUrlDocument = gql`
    query getPageByURL($locales: [Locales], $slug: String) {
  CMSPage(locale: $locales, where: {RelativePath: {eq: $slug}}) {
    items {
      Title
      ShortDescription
      Keywords
      _modified
      Blocks {
        ContentLink {
          Expanded {
            ...ItemsInContentArea
          }
        }
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetStartPageDocument = gql`
    query GetStartPage($locales: [Locales]) {
  StartPage(locale: $locales) {
    items {
      Title
      ShortDescription
      Keywords
      Blocks {
        ContentLink {
          Expanded {
            ...ItemsInContentArea
          }
        }
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<ExecutionResult<R, E>> | AsyncIterable<ExecutionResult<R, E>>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    AllPages(variables?: AllPagesQueryVariables, options?: C): Promise<ExecutionResult<AllPagesQuery, E>> {
      return requester<AllPagesQuery, AllPagesQueryVariables>(AllPagesDocument, variables, options) as Promise<ExecutionResult<AllPagesQuery, E>>;
    },
    GetContentByGuid(variables?: GetContentByGuidQueryVariables, options?: C): Promise<ExecutionResult<GetContentByGuidQuery, E>> {
      return requester<GetContentByGuidQuery, GetContentByGuidQueryVariables>(GetContentByGuidDocument, variables, options) as Promise<ExecutionResult<GetContentByGuidQuery, E>>;
    },
    getFooter(variables?: GetFooterQueryVariables, options?: C): Promise<ExecutionResult<GetFooterQuery, E>> {
      return requester<GetFooterQuery, GetFooterQueryVariables>(GetFooterDocument, variables, options) as Promise<ExecutionResult<GetFooterQuery, E>>;
    },
    getHeader(variables?: GetHeaderQueryVariables, options?: C): Promise<ExecutionResult<GetHeaderQuery, E>> {
      return requester<GetHeaderQuery, GetHeaderQueryVariables>(GetHeaderDocument, variables, options) as Promise<ExecutionResult<GetHeaderQuery, E>>;
    },
    getPageByURL(variables?: GetPageByUrlQueryVariables, options?: C): Promise<ExecutionResult<GetPageByUrlQuery, E>> {
      return requester<GetPageByUrlQuery, GetPageByUrlQueryVariables>(GetPageByUrlDocument, variables, options) as Promise<ExecutionResult<GetPageByUrlQuery, E>>;
    },
    GetStartPage(variables?: GetStartPageQueryVariables, options?: C): Promise<ExecutionResult<GetStartPageQuery, E>> {
      return requester<GetStartPageQuery, GetStartPageQueryVariables>(GetStartPageDocument, variables, options) as Promise<ExecutionResult<GetStartPageQuery, E>>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
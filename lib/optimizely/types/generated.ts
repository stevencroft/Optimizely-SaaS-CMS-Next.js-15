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
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type BackgroundCoverBlock = IData & _IComponent & _IContent & {
  __typename?: 'BackgroundCoverBlock';
  CTA: Maybe<Link>;
  Description: Maybe<RichText>;
  Image: Maybe<Scalars['String']['output']>;
  Items: Maybe<Array<Maybe<_IContent>>>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type BackgroundCoverBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BackgroundCoverBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BackgroundCoverBlockAutocomplete = {
  __typename?: 'BackgroundCoverBlockAutocomplete';
  CTA: Maybe<LinkAutocomplete>;
  Description: Maybe<RichTextAutocomplete>;
  Items: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type BackgroundCoverBlockFacet = {
  __typename?: 'BackgroundCoverBlockFacet';
  CTA: Maybe<LinkFacet>;
  Description: Maybe<RichTextFacet>;
  Items: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type BackgroundCoverBlockOrderByInput = {
  CTA: InputMaybe<LinkOrderByInput>;
  Description: InputMaybe<RichTextOrderByInput>;
  Items: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type BackgroundCoverBlockOutput = {
  __typename?: 'BackgroundCoverBlockOutput';
  autocomplete: Maybe<BackgroundCoverBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BackgroundCoverBlockFacet>;
  items: Maybe<Array<Maybe<BackgroundCoverBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BackgroundCoverBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BackgroundCoverBlockWhereInput = {
  CTA: InputMaybe<LinkWhereInput>;
  Description: InputMaybe<RichTextWhereInput>;
  Items: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<BackgroundCoverBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BackgroundCoverBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BackgroundCoverBlockWhereInput>>>;
};

export type BackgroundCoverItemBlock = IData & _IComponent & _IContent & {
  __typename?: 'BackgroundCoverItemBlock';
  CTA: Maybe<Link>;
  Description: Maybe<Scalars['String']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type BackgroundCoverItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BackgroundCoverItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BackgroundCoverItemBlockAutocomplete = {
  __typename?: 'BackgroundCoverItemBlockAutocomplete';
  CTA: Maybe<LinkAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type BackgroundCoverItemBlockFacet = {
  __typename?: 'BackgroundCoverItemBlockFacet';
  CTA: Maybe<LinkFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type BackgroundCoverItemBlockOrderByInput = {
  CTA: InputMaybe<LinkOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type BackgroundCoverItemBlockOutput = {
  __typename?: 'BackgroundCoverItemBlockOutput';
  autocomplete: Maybe<BackgroundCoverItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BackgroundCoverItemBlockFacet>;
  items: Maybe<Array<Maybe<BackgroundCoverItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BackgroundCoverItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BackgroundCoverItemBlockWhereInput = {
  CTA: InputMaybe<LinkWhereInput>;
  _and: InputMaybe<Array<InputMaybe<BackgroundCoverItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BackgroundCoverItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BackgroundCoverItemBlockWhereInput>>>;
};

export type BestsellersBlock = IData & _IComponent & _IContent & {
  __typename?: 'BestsellersBlock';
  Items: Maybe<_IContent>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type BestsellersBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BestsellersBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BestsellersBlockAutocomplete = {
  __typename?: 'BestsellersBlockAutocomplete';
  Items: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type BestsellersBlockFacet = {
  __typename?: 'BestsellersBlockFacet';
  Items: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type BestsellersBlockOrderByInput = {
  Items: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type BestsellersBlockOutput = {
  __typename?: 'BestsellersBlockOutput';
  autocomplete: Maybe<BestsellersBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BestsellersBlockFacet>;
  items: Maybe<Array<Maybe<BestsellersBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BestsellersBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BestsellersBlockWhereInput = {
  Items: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<BestsellersBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BestsellersBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BestsellersBlockWhereInput>>>;
};

export type BlankExperience = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'BlankExperience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type BlankExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlankExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type BlankExperienceOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete: Maybe<BlankExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlankExperienceFacet>;
  items: Maybe<Array<Maybe<BlankExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSection = IData & _IComponent & _IContent & _ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type BlankSection_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlankSection_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete: Maybe<BlankSectionAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlankSectionFacet>;
  items: Maybe<Array<Maybe<BlankSection>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type Blog = IData & _IContent & _IPage & {
  __typename?: 'Blog';
  Author: Maybe<Scalars['String']['output']>;
  Content: Maybe<HtmlBlockProperty>;
  Date: Maybe<Scalars['DateTime']['output']>;
  Image: Maybe<Scalars['String']['output']>;
  Tags: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type Blog_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Blog_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlogAutocomplete = {
  __typename?: 'BlogAutocomplete';
  Content: Maybe<HtmlBlockPropertyAutocomplete>;
  Tags: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};


export type BlogAutocompleteTagsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type BlogExp = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'BlogExp';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type BlogExp_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogExp_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlogExpAutocomplete = {
  __typename?: 'BlogExpAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlogExpFacet = {
  __typename?: 'BlogExpFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type BlogExpOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlogExpOutput = {
  __typename?: 'BlogExpOutput';
  autocomplete: Maybe<BlogExpAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlogExpFacet>;
  items: Maybe<Array<Maybe<BlogExp>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlogExpOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogExpWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BlogExpWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlogExpWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlogExpWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlogFacet = {
  __typename?: 'BlogFacet';
  Content: Maybe<HtmlBlockPropertyFacet>;
  Tags: Maybe<Array<Maybe<StringFacet>>>;
  _metadata: Maybe<IContentMetadataFacet>;
};


export type BlogFacetTagsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlogOrderByInput = {
  Content: InputMaybe<HtmlBlockPropertyOrderByInput>;
  Tags: InputMaybe<OrderBy>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type BlogOutput = {
  __typename?: 'BlogOutput';
  autocomplete: Maybe<BlogAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlogFacet>;
  items: Maybe<Array<Maybe<Blog>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlogOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogWhereInput = {
  Content: InputMaybe<HtmlBlockPropertyWhereInput>;
  Tags: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<BlogWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlogWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlogWhereInput>>>;
};

export type ButtonBlock = IData & _IComponent & _IContent & {
  __typename?: 'ButtonBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  label: Maybe<Scalars['String']['output']>;
  link: Maybe<Link>;
  size: Maybe<Scalars['String']['output']>;
  variant: Maybe<Scalars['String']['output']>;
};


export type ButtonBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ButtonBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ButtonBlockAutocomplete = {
  __typename?: 'ButtonBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  link: Maybe<LinkAutocomplete>;
};

export type ButtonBlockFacet = {
  __typename?: 'ButtonBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  link: Maybe<LinkFacet>;
};

export type ButtonBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  link: InputMaybe<LinkOrderByInput>;
};

export type ButtonBlockOutput = {
  __typename?: 'ButtonBlockOutput';
  autocomplete: Maybe<ButtonBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ButtonBlockFacet>;
  items: Maybe<Array<Maybe<ButtonBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ButtonBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  link: InputMaybe<LinkWhereInput>;
};

export type CmsPage = IData & _IContent & _IPage & {
  __typename?: 'CMSPage';
  Blocks: Maybe<Array<Maybe<_IContent>>>;
  Keywords: Maybe<Scalars['String']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  short_description: Maybe<Scalars['String']['output']>;
};


export type CmsPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CmsPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CmsPageAutocomplete = {
  __typename?: 'CMSPageAutocomplete';
  Blocks: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type CmsPageFacet = {
  __typename?: 'CMSPageFacet';
  Blocks: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type CmsPageOrderByInput = {
  Blocks: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
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
  Blocks: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
};

export type CategoriesBlock = IData & _IComponent & _IContent & {
  __typename?: 'CategoriesBlock';
  Items: Maybe<Array<Maybe<_IContent>>>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type CategoriesBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CategoriesBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CategoriesBlockAutocomplete = {
  __typename?: 'CategoriesBlockAutocomplete';
  Items: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type CategoriesBlockFacet = {
  __typename?: 'CategoriesBlockFacet';
  Items: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type CategoriesBlockOrderByInput = {
  Items: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type CategoriesBlockOutput = {
  __typename?: 'CategoriesBlockOutput';
  autocomplete: Maybe<CategoriesBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CategoriesBlockFacet>;
  items: Maybe<Array<Maybe<CategoriesBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CategoriesBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoriesBlockWhereInput = {
  Items: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<CategoriesBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CategoriesBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CategoriesBlockWhereInput>>>;
};

export type CategoryItem = IData & _IComponent & _IContent & {
  __typename?: 'CategoryItem';
  Image: Maybe<Scalars['String']['output']>;
  Slug: Maybe<Scalars['String']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type CategoryItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CategoryItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CategoryItemAutocomplete = {
  __typename?: 'CategoryItemAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type CategoryItemFacet = {
  __typename?: 'CategoryItemFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type CategoryItemOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type CategoryItemOutput = {
  __typename?: 'CategoryItemOutput';
  autocomplete: Maybe<CategoryItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CategoryItemFacet>;
  items: Maybe<Array<Maybe<CategoryItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CategoryItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<CategoryItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CategoryItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CategoryItemWhereInput>>>;
};

export type ColumnItemBlock = IData & _IComponent & _IContent & {
  __typename?: 'ColumnItemBlock';
  Description: Maybe<Scalars['String']['output']>;
  Image: Maybe<Scalars['String']['output']>;
  Link: Maybe<Link>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type ColumnItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ColumnItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ColumnItemBlockAutocomplete = {
  __typename?: 'ColumnItemBlockAutocomplete';
  Link: Maybe<LinkAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ColumnItemBlockFacet = {
  __typename?: 'ColumnItemBlockFacet';
  Link: Maybe<LinkFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ColumnItemBlockOrderByInput = {
  Link: InputMaybe<LinkOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ColumnItemBlockOutput = {
  __typename?: 'ColumnItemBlockOutput';
  autocomplete: Maybe<ColumnItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ColumnItemBlockFacet>;
  items: Maybe<Array<Maybe<ColumnItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ColumnItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ColumnItemBlockWhereInput = {
  Link: InputMaybe<LinkWhereInput>;
  _and: InputMaybe<Array<InputMaybe<ColumnItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ColumnItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ColumnItemBlockWhereInput>>>;
};

export type ColumnItemsBlock = IData & _IComponent & _IContent & {
  __typename?: 'ColumnItemsBlock';
  Items: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type ColumnItemsBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ColumnItemsBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ColumnItemsBlockAutocomplete = {
  __typename?: 'ColumnItemsBlockAutocomplete';
  Items: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ColumnItemsBlockFacet = {
  __typename?: 'ColumnItemsBlockFacet';
  Items: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ColumnItemsBlockOrderByInput = {
  Items: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ColumnItemsBlockOutput = {
  __typename?: 'ColumnItemsBlockOutput';
  autocomplete: Maybe<ColumnItemsBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ColumnItemsBlockFacet>;
  items: Maybe<Array<Maybe<ColumnItemsBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ColumnItemsBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ColumnItemsBlockWhereInput = {
  Items: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<ColumnItemsBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ColumnItemsBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ColumnItemsBlockWhereInput>>>;
};

export type CommonImage = IData & _IComponent & _IContent & {
  __typename?: 'CommonImage';
  AltText: Maybe<Scalars['String']['output']>;
  Url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type CommonImage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CommonImage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CommonImageAutocomplete = {
  __typename?: 'CommonImageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type CommonImageFacet = {
  __typename?: 'CommonImageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type CommonImageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type CommonImageOutput = {
  __typename?: 'CommonImageOutput';
  autocomplete: Maybe<CommonImageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CommonImageFacet>;
  items: Maybe<Array<Maybe<CommonImage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CommonImageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommonImageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<CommonImageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CommonImageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CommonImageWhereInput>>>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key: Maybe<Scalars['String']['output']>;
  value: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionDisplaySettingAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionDisplaySettingAutocompleteValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionDisplaySettingFacet = {
  __typename?: 'CompositionDisplaySettingFacet';
  key: Maybe<Array<Maybe<StringFacet>>>;
  value: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionDisplaySettingFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionDisplaySettingFacetValueArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingOrderByInput = {
  key: InputMaybe<OrderBy>;
  value: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key: InputMaybe<StringFilterInput>;
  value: InputMaybe<StringFilterInput>;
};

export type CompositionElementNode = ICompositionElementNode & ICompositionNode & {
  __typename?: 'CompositionElementNode';
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  element: Maybe<_IElement>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  nodes: Maybe<Array<Maybe<ICompositionNode>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  displayName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodes: Maybe<ICompositionNodeAutocomplete>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionStructureNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionStructureNodeFacet = {
  __typename?: 'CompositionStructureNodeFacet';
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  nodeType: Maybe<Array<Maybe<StringFacet>>>;
  nodes: Maybe<ICompositionNodeFacet>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionStructureNodeFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetDisplayTemplateKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetNodeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeOrderByInput = {
  displayName: InputMaybe<OrderBy>;
  displaySettings: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  nodeType: InputMaybe<OrderBy>;
  nodes: InputMaybe<ICompositionNodeOrderByInput>;
  type: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  displayName: InputMaybe<StringFilterInput>;
  displaySettings: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  nodeType: InputMaybe<StringFilterInput>;
  nodes: InputMaybe<ICompositionNodeWhereInput>;
  type: InputMaybe<StringFilterInput>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type ContentMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base: Maybe<Scalars['String']['output']>;
  default: Maybe<Scalars['String']['output']>;
  hierarchical: Maybe<Scalars['String']['output']>;
  internal: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentUrlAutocompleteBaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteDefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteHierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteInternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base: Maybe<Array<Maybe<StringFacet>>>;
  default: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical: Maybe<Array<Maybe<StringFacet>>>;
  internal: Maybe<Array<Maybe<StringFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentUrlFacetBaseArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetDefaultArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetHierarchicalArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetInternalArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base: InputMaybe<OrderBy>;
  default: InputMaybe<OrderBy>;
  hierarchical: InputMaybe<OrderBy>;
  internal: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base: InputMaybe<StringFilterInput>;
  default: InputMaybe<StringFilterInput>;
  hierarchical: InputMaybe<StringFilterInput>;
  internal: InputMaybe<StringFilterInput>;
  type: InputMaybe<StringFilterInput>;
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

export type FastBlock = IData & _IComponent & _IContent & {
  __typename?: 'FastBlock';
  ButtonSlug: Maybe<Scalars['String']['output']>;
  ButtonText: Maybe<Scalars['String']['output']>;
  Description: Maybe<Scalars['String']['output']>;
  Image: Maybe<Scalars['String']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type FastBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type FastBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type FastBlockAutocomplete = {
  __typename?: 'FastBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type FastBlockFacet = {
  __typename?: 'FastBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type FastBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type FastBlockOutput = {
  __typename?: 'FastBlockOutput';
  autocomplete: Maybe<FastBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<FastBlockFacet>;
  items: Maybe<Array<Maybe<FastBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type FastBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type FastBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<FastBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<FastBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<FastBlockWhereInput>>>;
};

export type Folder = IData & _IContent & _IPage & {
  __typename?: 'Folder';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type Folder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Folder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type FolderAutocomplete = {
  __typename?: 'FolderAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type FolderFacet = {
  __typename?: 'FolderFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type FolderOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type FolderOutput = {
  __typename?: 'FolderOutput';
  autocomplete: Maybe<FolderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<FolderFacet>;
  items: Maybe<Array<Maybe<Folder>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type FolderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type FolderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<FolderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<FolderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<FolderWhereInput>>>;
};

export type Footer = IData & _IContent & _IPage & {
  __typename?: 'Footer';
  LinksColumn1: Maybe<Array<Maybe<Link>>>;
  LinksColumn2: Maybe<Array<Maybe<Link>>>;
  LinksColumn3: Maybe<Array<Maybe<Link>>>;
  LinksColumn4: Maybe<Array<Maybe<Link>>>;
  Logo: Maybe<Scalars['String']['output']>;
  NewsletterDescription: Maybe<Scalars['String']['output']>;
  NewsletterTitle: Maybe<Scalars['String']['output']>;
  Socials: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type Footer_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Footer_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type FooterAutocomplete = {
  __typename?: 'FooterAutocomplete';
  LinksColumn1: Maybe<LinkAutocomplete>;
  LinksColumn2: Maybe<LinkAutocomplete>;
  LinksColumn3: Maybe<LinkAutocomplete>;
  LinksColumn4: Maybe<LinkAutocomplete>;
  Socials: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type FooterFacet = {
  __typename?: 'FooterFacet';
  LinksColumn1: Maybe<LinkFacet>;
  LinksColumn2: Maybe<LinkFacet>;
  LinksColumn3: Maybe<LinkFacet>;
  LinksColumn4: Maybe<LinkFacet>;
  Socials: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type FooterOrderByInput = {
  LinksColumn1: InputMaybe<LinkOrderByInput>;
  LinksColumn2: InputMaybe<LinkOrderByInput>;
  LinksColumn3: InputMaybe<LinkOrderByInput>;
  LinksColumn4: InputMaybe<LinkOrderByInput>;
  Socials: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type FooterOutput = {
  __typename?: 'FooterOutput';
  autocomplete: Maybe<FooterAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<FooterFacet>;
  items: Maybe<Array<Maybe<Footer>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type FooterOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterWhereInput = {
  LinksColumn1: InputMaybe<LinkWhereInput>;
  LinksColumn2: InputMaybe<LinkWhereInput>;
  LinksColumn3: InputMaybe<LinkWhereInput>;
  LinksColumn4: InputMaybe<LinkWhereInput>;
  Socials: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
};

export type GenericMedia = IData & _IContent & _IMedia & {
  __typename?: 'GenericMedia';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type GenericMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type GenericMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type GenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type GenericMediaOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
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
  _and: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
};

export type Header = IData & _IContent & _IPage & {
  __typename?: 'Header';
  Links: Maybe<Array<Maybe<_IContent>>>;
  TopHeader: Maybe<RichText>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type Header_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Header_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeaderAutocomplete = {
  __typename?: 'HeaderAutocomplete';
  Links: Maybe<_IContentAutocomplete>;
  TopHeader: Maybe<RichTextAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HeaderFacet = {
  __typename?: 'HeaderFacet';
  Links: Maybe<_IContentFacet>;
  TopHeader: Maybe<RichTextFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type HeaderOrderByInput = {
  Links: InputMaybe<_IContentOrderByInput>;
  TopHeader: InputMaybe<RichTextOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type HeaderOutput = {
  __typename?: 'HeaderOutput';
  autocomplete: Maybe<HeaderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeaderFacet>;
  items: Maybe<Array<Maybe<Header>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeaderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderWhereInput = {
  Links: InputMaybe<_IContentWhereInput>;
  TopHeader: InputMaybe<RichTextWhereInput>;
  _and: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
};

export type HeroBlock = IData & _IComponent & _IContent & {
  __typename?: 'HeroBlock';
  CTA: Maybe<Link>;
  CTA_slug: Maybe<Scalars['String']['output']>;
  DescriptionString: Maybe<Scalars['String']['output']>;
  Secondary_CTA: Maybe<Link>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  hero_image: Maybe<Scalars['String']['output']>;
};


export type HeroBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeroBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  CTA: Maybe<LinkAutocomplete>;
  Secondary_CTA: Maybe<LinkAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  CTA: Maybe<LinkFacet>;
  Secondary_CTA: Maybe<LinkFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type HeroBlockOrderByInput = {
  CTA: InputMaybe<LinkOrderByInput>;
  Secondary_CTA: InputMaybe<LinkOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
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
  CTA: InputMaybe<LinkWhereInput>;
  Secondary_CTA: InputMaybe<LinkWhereInput>;
  _and: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled: InputMaybe<Scalars['Boolean']['input']>;
  endToken: InputMaybe<Scalars['String']['input']>;
  startToken: InputMaybe<Scalars['String']['input']>;
};

export type HtmlBlock = IData & _IComponent & _IContent & {
  __typename?: 'HtmlBlock';
  Html: Maybe<RichText>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type HtmlBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HtmlBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HtmlBlockAutocomplete = {
  __typename?: 'HtmlBlockAutocomplete';
  Html: Maybe<RichTextAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HtmlBlockFacet = {
  __typename?: 'HtmlBlockFacet';
  Html: Maybe<RichTextFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type HtmlBlockOrderByInput = {
  Html: InputMaybe<RichTextOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type HtmlBlockOutput = {
  __typename?: 'HtmlBlockOutput';
  autocomplete: Maybe<HtmlBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HtmlBlockFacet>;
  items: Maybe<Array<Maybe<HtmlBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HtmlBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HtmlBlockProperty = {
  __typename?: 'HtmlBlockProperty';
  Html: Maybe<RichText>;
};

export type HtmlBlockPropertyAutocomplete = {
  __typename?: 'HtmlBlockPropertyAutocomplete';
  Html: Maybe<RichTextAutocomplete>;
};

export type HtmlBlockPropertyFacet = {
  __typename?: 'HtmlBlockPropertyFacet';
  Html: Maybe<RichTextFacet>;
};

export type HtmlBlockPropertyOrderByInput = {
  Html: InputMaybe<RichTextOrderByInput>;
};

export type HtmlBlockPropertyWhereInput = {
  Html: InputMaybe<RichTextWhereInput>;
};

export type HtmlBlockWhereInput = {
  Html: InputMaybe<RichTextWhereInput>;
  _and: InputMaybe<Array<InputMaybe<HtmlBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HtmlBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HtmlBlockWhereInput>>>;
};

export type ICompositionElementNode = {
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  element: Maybe<_IElement>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = {
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  displayName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionNodeFacet = {
  __typename?: 'ICompositionNodeFacet';
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  nodeType: Maybe<Array<Maybe<StringFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type ICompositionNodeFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetDisplayTemplateKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetNodeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeOrderByInput = {
  displayName: InputMaybe<OrderBy>;
  displaySettings: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  nodeType: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName: InputMaybe<StringFilterInput>;
  displaySettings: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  nodeType: InputMaybe<StringFilterInput>;
  type: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  nodes: Maybe<Array<Maybe<ICompositionNode>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type IContentMetadata = {
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type IContentMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
  version: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteTypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVersionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  created: Maybe<Array<Maybe<DateFacet>>>;
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  lastModified: Maybe<Array<Maybe<DateFacet>>>;
  locale: Maybe<Array<Maybe<StringFacet>>>;
  published: Maybe<Array<Maybe<DateFacet>>>;
  status: Maybe<Array<Maybe<StringFacet>>>;
  types: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
  version: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetLocaleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetPublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetTypesArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVersionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  created: InputMaybe<OrderBy>;
  displayName: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  lastModified: InputMaybe<OrderBy>;
  locale: InputMaybe<OrderBy>;
  published: InputMaybe<OrderBy>;
  status: InputMaybe<OrderBy>;
  types: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
  version: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  created: InputMaybe<DateFilterInput>;
  displayName: InputMaybe<SearchableStringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  lastModified: InputMaybe<DateFilterInput>;
  locale: InputMaybe<StringFilterInput>;
  published: InputMaybe<DateFilterInput>;
  status: InputMaybe<StringFilterInput>;
  types: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
  version: InputMaybe<StringFilterInput>;
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

export type IInstanceMetadata = {
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  displayOption: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type IItemMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  container: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType: Maybe<Scalars['String']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadataContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IMediaMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IconItemBlock = IData & _IComponent & _IContent & {
  __typename?: 'IconItemBlock';
  Icon: Maybe<Scalars['String']['output']>;
  Text: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type IconItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IconItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type IconItemBlockAutocomplete = {
  __typename?: 'IconItemBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type IconItemBlockFacet = {
  __typename?: 'IconItemBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type IconItemBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type IconItemBlockOutput = {
  __typename?: 'IconItemBlockOutput';
  autocomplete: Maybe<IconItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<IconItemBlockFacet>;
  items: Maybe<Array<Maybe<IconItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type IconItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type IconItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<IconItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<IconItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<IconItemBlockWhereInput>>>;
};

export type IconsBlock = IData & _IComponent & _IContent & {
  __typename?: 'IconsBlock';
  Icons: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type IconsBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IconsBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type IconsBlockAutocomplete = {
  __typename?: 'IconsBlockAutocomplete';
  Icons: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type IconsBlockFacet = {
  __typename?: 'IconsBlockFacet';
  Icons: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type IconsBlockOrderByInput = {
  Icons: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type IconsBlockOutput = {
  __typename?: 'IconsBlockOutput';
  autocomplete: Maybe<IconsBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<IconsBlockFacet>;
  items: Maybe<Array<Maybe<IconsBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type IconsBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type IconsBlockWhereInput = {
  Icons: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<IconsBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<IconsBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<IconsBlockWhereInput>>>;
};

export type ImageMedia = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'ImageMedia';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type ImageMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ImageMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ImageMediaOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete: Maybe<ImageMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ImageMediaFacet>;
  items: Maybe<Array<Maybe<ImageMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  displayOption: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type ItemMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type Link = {
  __typename?: 'Link';
  target: Maybe<Scalars['String']['output']>;
  text: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<ContentUrl>;
};


export type LinkTextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type LinkAutocomplete = {
  __typename?: 'LinkAutocomplete';
  target: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
};


export type LinkAutocompleteTargetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkAutocompleteTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LinkConfig = {
  from: InputMaybe<Scalars['String']['input']>;
  to: InputMaybe<Scalars['String']['input']>;
};

export type LinkFacet = {
  __typename?: 'LinkFacet';
  target: Maybe<Array<Maybe<StringFacet>>>;
  text: Maybe<Array<Maybe<StringFacet>>>;
  title: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
};


export type LinkFacetTargetArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacetTextArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkItem = IData & _IComponent & _IContent & {
  __typename?: 'LinkItem';
  Image: Maybe<Scalars['String']['output']>;
  Slug: Maybe<Scalars['String']['output']>;
  SubLinks: Maybe<Array<Maybe<_IContent>>>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type LinkItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LinkItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LinkItemAutocomplete = {
  __typename?: 'LinkItemAutocomplete';
  SubLinks: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type LinkItemFacet = {
  __typename?: 'LinkItemFacet';
  SubLinks: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type LinkItemOrderByInput = {
  SubLinks: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type LinkItemOutput = {
  __typename?: 'LinkItemOutput';
  autocomplete: Maybe<LinkItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LinkItemFacet>;
  items: Maybe<Array<Maybe<LinkItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LinkItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinkItemWhereInput = {
  SubLinks: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<LinkItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LinkItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LinkItemWhereInput>>>;
};

export type LinkOrderByInput = {
  target: InputMaybe<OrderBy>;
  text: InputMaybe<OrderBy>;
  title: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
};

export enum LinkTypes {
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.owner`   |
   */
  Assets = 'ASSETS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Default = 'DEFAULT',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Items = 'ITEMS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.path` |
   * | *to*        |        | `_metadata.key`   |
   */
  Path = 'PATH'
}

export type LinkWhereInput = {
  target: InputMaybe<StringFilterInput>;
  text: InputMaybe<SearchableStringFilterInput>;
  title: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
};

export enum Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en',
  Pl = 'pl'
}

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  container: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType: Maybe<Scalars['String']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type MediaMetadataContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type MediaMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type ParagraphElement = IData & _IComponent & _IContent & _IElement & {
  __typename?: 'ParagraphElement';
  Text: Maybe<RichText>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type ParagraphElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ParagraphElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ParagraphElementAutocomplete = {
  __typename?: 'ParagraphElementAutocomplete';
  Text: Maybe<RichTextAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ParagraphElementFacet = {
  __typename?: 'ParagraphElementFacet';
  Text: Maybe<RichTextFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ParagraphElementOrderByInput = {
  Text: InputMaybe<RichTextOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ParagraphElementOutput = {
  __typename?: 'ParagraphElementOutput';
  autocomplete: Maybe<ParagraphElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ParagraphElementFacet>;
  items: Maybe<Array<Maybe<ParagraphElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ParagraphElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ParagraphElementWhereInput = {
  Text: InputMaybe<RichTextWhereInput>;
  _and: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
};

export type Product = IData & _IContent & _IPage & {
  __typename?: 'Product';
  Description: Maybe<SearchableRichText>;
  Gallery: Maybe<Array<Maybe<_IContent>>>;
  Keywords: Maybe<Scalars['String']['output']>;
  SKU: Maybe<Scalars['String']['output']>;
  ShortDescription: Maybe<Scalars['String']['output']>;
  Thumbnail: Maybe<Scalars['String']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  product_name: Maybe<Scalars['String']['output']>;
  short_description: Maybe<Scalars['String']['output']>;
};


export type ProductSkuArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ProductShortDescriptionArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Product_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Product_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ProductAutocomplete = {
  __typename?: 'ProductAutocomplete';
  Gallery: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ProductCardItemBlock = IData & _IComponent & _IContent & {
  __typename?: 'ProductCardItemBlock';
  Image: Maybe<Scalars['String']['output']>;
  Link: Maybe<Link>;
  TItle: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type ProductCardItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ProductCardItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ProductCardItemBlockAutocomplete = {
  __typename?: 'ProductCardItemBlockAutocomplete';
  Link: Maybe<LinkAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ProductCardItemBlockFacet = {
  __typename?: 'ProductCardItemBlockFacet';
  Link: Maybe<LinkFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ProductCardItemBlockOrderByInput = {
  Link: InputMaybe<LinkOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ProductCardItemBlockOutput = {
  __typename?: 'ProductCardItemBlockOutput';
  autocomplete: Maybe<ProductCardItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ProductCardItemBlockFacet>;
  items: Maybe<Array<Maybe<ProductCardItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ProductCardItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductCardItemBlockWhereInput = {
  Link: InputMaybe<LinkWhereInput>;
  _and: InputMaybe<Array<InputMaybe<ProductCardItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ProductCardItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ProductCardItemBlockWhereInput>>>;
};

export type ProductCardsBlock = IData & _IComponent & _IContent & {
  __typename?: 'ProductCardsBlock';
  Custom_Items: Maybe<Array<Maybe<_IContent>>>;
  PDP_ITEMS: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type ProductCardsBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ProductCardsBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ProductCardsBlockAutocomplete = {
  __typename?: 'ProductCardsBlockAutocomplete';
  Custom_Items: Maybe<_IContentAutocomplete>;
  PDP_ITEMS: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ProductCardsBlockFacet = {
  __typename?: 'ProductCardsBlockFacet';
  Custom_Items: Maybe<_IContentFacet>;
  PDP_ITEMS: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ProductCardsBlockOrderByInput = {
  Custom_Items: InputMaybe<_IContentOrderByInput>;
  PDP_ITEMS: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ProductCardsBlockOutput = {
  __typename?: 'ProductCardsBlockOutput';
  autocomplete: Maybe<ProductCardsBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ProductCardsBlockFacet>;
  items: Maybe<Array<Maybe<ProductCardsBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ProductCardsBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductCardsBlockWhereInput = {
  Custom_Items: InputMaybe<_IContentWhereInput>;
  PDP_ITEMS: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<ProductCardsBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ProductCardsBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ProductCardsBlockWhereInput>>>;
};

export type ProductFacet = {
  __typename?: 'ProductFacet';
  Description: Maybe<SearchableRichTextFacet>;
  Gallery: Maybe<_IContentFacet>;
  SKU: Maybe<Array<Maybe<StringFacet>>>;
  ShortDescription: Maybe<Array<Maybe<StringFacet>>>;
  _metadata: Maybe<IContentMetadataFacet>;
};


export type ProductFacetSkuArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductFacetShortDescriptionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ProductOrderByInput = {
  Description: InputMaybe<SearchableRichTextOrderByInput>;
  Gallery: InputMaybe<_IContentOrderByInput>;
  SKU: InputMaybe<OrderBy>;
  ShortDescription: InputMaybe<OrderBy>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ProductOutput = {
  __typename?: 'ProductOutput';
  autocomplete: Maybe<ProductAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ProductFacet>;
  items: Maybe<Array<Maybe<Product>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ProductOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductWhereInput = {
  Description: InputMaybe<SearchableRichTextWhereInput>;
  Gallery: InputMaybe<_IContentWhereInput>;
  SKU: InputMaybe<SearchableStringFilterInput>;
  ShortDescription: InputMaybe<SearchableStringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<ProductWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ProductWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ProductWhereInput>>>;
};

export type Query = {
  __typename?: 'Query';
  BackgroundCoverBlock: Maybe<BackgroundCoverBlockOutput>;
  BackgroundCoverItemBlock: Maybe<BackgroundCoverItemBlockOutput>;
  BestsellersBlock: Maybe<BestsellersBlockOutput>;
  BlankExperience: Maybe<BlankExperienceOutput>;
  BlankSection: Maybe<BlankSectionOutput>;
  Blog: Maybe<BlogOutput>;
  BlogExp: Maybe<BlogExpOutput>;
  ButtonBlock: Maybe<ButtonBlockOutput>;
  CMSPage: Maybe<CmsPageOutput>;
  CategoriesBlock: Maybe<CategoriesBlockOutput>;
  CategoryItem: Maybe<CategoryItemOutput>;
  ColumnItemBlock: Maybe<ColumnItemBlockOutput>;
  ColumnItemsBlock: Maybe<ColumnItemsBlockOutput>;
  CommonImage: Maybe<CommonImageOutput>;
  Data: Maybe<DataOutput>;
  FastBlock: Maybe<FastBlockOutput>;
  Folder: Maybe<FolderOutput>;
  Footer: Maybe<FooterOutput>;
  GenericMedia: Maybe<GenericMediaOutput>;
  Header: Maybe<HeaderOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  HtmlBlock: Maybe<HtmlBlockOutput>;
  IconItemBlock: Maybe<IconItemBlockOutput>;
  IconsBlock: Maybe<IconsBlockOutput>;
  ImageMedia: Maybe<ImageMediaOutput>;
  LinkItem: Maybe<LinkItemOutput>;
  ParagraphElement: Maybe<ParagraphElementOutput>;
  Product: Maybe<ProductOutput>;
  ProductCardItemBlock: Maybe<ProductCardItemBlockOutput>;
  ProductCardsBlock: Maybe<ProductCardsBlockOutput>;
  SocialItem: Maybe<SocialItemOutput>;
  StartPage: Maybe<StartPageOutput>;
  SubLinksItem: Maybe<SubLinksItemOutput>;
  SysContentFolder: Maybe<SysContentFolderOutput>;
  TeaserBlock: Maybe<TeaserBlockOutput>;
  VideoMedia: Maybe<VideoMediaOutput>;
  _Component: Maybe<_ComponentOutput>;
  _Content: Maybe<_ContentOutput>;
  _Element: Maybe<_ElementOutput>;
  _Experience: Maybe<_ExperienceOutput>;
  _Folder: Maybe<_FolderOutput>;
  _Image: Maybe<_ImageOutput>;
  _Media: Maybe<_MediaOutput>;
  _Page: Maybe<_PageOutput>;
  _Section: Maybe<_SectionOutput>;
  _Video: Maybe<_VideoOutput>;
};


export type QueryBackgroundCoverBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BackgroundCoverBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BackgroundCoverBlockWhereInput>;
};


export type QueryBackgroundCoverItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BackgroundCoverItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BackgroundCoverItemBlockWhereInput>;
};


export type QueryBestsellersBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BestsellersBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BestsellersBlockWhereInput>;
};


export type QueryBlankExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryBlankSectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BlankSectionWhereInput>;
};


export type QueryBlogArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BlogWhereInput>;
};


export type QueryBlogExpArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogExpOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BlogExpWhereInput>;
};


export type QueryButtonBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ButtonBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ButtonBlockWhereInput>;
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


export type QueryCategoriesBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CategoriesBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CategoriesBlockWhereInput>;
};


export type QueryCategoryItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CategoryItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CategoryItemWhereInput>;
};


export type QueryColumnItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ColumnItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ColumnItemBlockWhereInput>;
};


export type QueryColumnItemsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ColumnItemsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ColumnItemsBlockWhereInput>;
};


export type QueryCommonImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CommonImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CommonImageWhereInput>;
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


export type QueryFastBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FastBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FastBlockWhereInput>;
};


export type QueryFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FolderWhereInput>;
};


export type QueryFooterArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FooterWhereInput>;
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


export type QueryHeaderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeaderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HeaderWhereInput>;
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


export type QueryHtmlBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HtmlBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HtmlBlockWhereInput>;
};


export type QueryIconItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<IconItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<IconItemBlockWhereInput>;
};


export type QueryIconsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<IconsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<IconsBlockWhereInput>;
};


export type QueryImageMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ImageMediaWhereInput>;
};


export type QueryLinkItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LinkItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<LinkItemWhereInput>;
};


export type QueryParagraphElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ParagraphElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryProductArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ProductOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ProductWhereInput>;
};


export type QueryProductCardItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ProductCardItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ProductCardItemBlockWhereInput>;
};


export type QueryProductCardsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ProductCardsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ProductCardsBlockWhereInput>;
};


export type QuerySocialItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SocialItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SocialItemWhereInput>;
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


export type QuerySubLinksItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SubLinksItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SubLinksItemWhereInput>;
};


export type QuerySysContentFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryTeaserBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TeaserBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TeaserBlockWhereInput>;
};


export type QueryVideoMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<VideoMediaWhereInput>;
};


export type Query_ComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ComponentWhereInput>;
};


export type Query_ContentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ContentWhereInput>;
};


export type Query_ElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ElementWhereInput>;
};


export type Query_ExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ExperienceWhereInput>;
};


export type Query_FolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_FolderWhereInput>;
};


export type Query_ImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ImageWhereInput>;
};


export type Query_MediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_MediaWhereInput>;
};


export type Query_PageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_PageWhereInput>;
};


export type Query_SectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_SectionWhereInput>;
};


export type Query_VideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_VideoWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  BackgroundCoverBlock: Maybe<BackgroundCoverBlockOutput>;
  BackgroundCoverItemBlock: Maybe<BackgroundCoverItemBlockOutput>;
  BestsellersBlock: Maybe<BestsellersBlockOutput>;
  BlankExperience: Maybe<BlankExperienceOutput>;
  BlankSection: Maybe<BlankSectionOutput>;
  Blog: Maybe<BlogOutput>;
  BlogExp: Maybe<BlogExpOutput>;
  ButtonBlock: Maybe<ButtonBlockOutput>;
  CMSPage: Maybe<CmsPageOutput>;
  CategoriesBlock: Maybe<CategoriesBlockOutput>;
  CategoryItem: Maybe<CategoryItemOutput>;
  ColumnItemBlock: Maybe<ColumnItemBlockOutput>;
  ColumnItemsBlock: Maybe<ColumnItemsBlockOutput>;
  CommonImage: Maybe<CommonImageOutput>;
  Data: Maybe<DataOutput>;
  FastBlock: Maybe<FastBlockOutput>;
  Folder: Maybe<FolderOutput>;
  Footer: Maybe<FooterOutput>;
  GenericMedia: Maybe<GenericMediaOutput>;
  Header: Maybe<HeaderOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  HtmlBlock: Maybe<HtmlBlockOutput>;
  IconItemBlock: Maybe<IconItemBlockOutput>;
  IconsBlock: Maybe<IconsBlockOutput>;
  ImageMedia: Maybe<ImageMediaOutput>;
  LinkItem: Maybe<LinkItemOutput>;
  ParagraphElement: Maybe<ParagraphElementOutput>;
  Product: Maybe<ProductOutput>;
  ProductCardItemBlock: Maybe<ProductCardItemBlockOutput>;
  ProductCardsBlock: Maybe<ProductCardsBlockOutput>;
  SocialItem: Maybe<SocialItemOutput>;
  StartPage: Maybe<StartPageOutput>;
  SubLinksItem: Maybe<SubLinksItemOutput>;
  SysContentFolder: Maybe<SysContentFolderOutput>;
  TeaserBlock: Maybe<TeaserBlockOutput>;
  VideoMedia: Maybe<VideoMediaOutput>;
  _Component: Maybe<_ComponentOutput>;
  _Content: Maybe<_ContentOutput>;
  _Element: Maybe<_ElementOutput>;
  _Experience: Maybe<_ExperienceOutput>;
  _Folder: Maybe<_FolderOutput>;
  _Image: Maybe<_ImageOutput>;
  _Media: Maybe<_MediaOutput>;
  _Page: Maybe<_PageOutput>;
  _Section: Maybe<_SectionOutput>;
  _Video: Maybe<_VideoOutput>;
};


export type QueryRefBackgroundCoverBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BackgroundCoverBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BackgroundCoverBlockWhereInput>;
};


export type QueryRefBackgroundCoverItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BackgroundCoverItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BackgroundCoverItemBlockWhereInput>;
};


export type QueryRefBestsellersBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BestsellersBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BestsellersBlockWhereInput>;
};


export type QueryRefBlankExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryRefBlankSectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BlankSectionWhereInput>;
};


export type QueryRefBlogArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BlogWhereInput>;
};


export type QueryRefBlogExpArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogExpOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BlogExpWhereInput>;
};


export type QueryRefButtonBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ButtonBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ButtonBlockWhereInput>;
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


export type QueryRefCategoriesBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CategoriesBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CategoriesBlockWhereInput>;
};


export type QueryRefCategoryItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CategoryItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CategoryItemWhereInput>;
};


export type QueryRefColumnItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ColumnItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ColumnItemBlockWhereInput>;
};


export type QueryRefColumnItemsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ColumnItemsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ColumnItemsBlockWhereInput>;
};


export type QueryRefCommonImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CommonImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CommonImageWhereInput>;
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


export type QueryRefFastBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FastBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FastBlockWhereInput>;
};


export type QueryRefFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FolderWhereInput>;
};


export type QueryRefFooterArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FooterWhereInput>;
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


export type QueryRefHeaderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeaderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HeaderWhereInput>;
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


export type QueryRefHtmlBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HtmlBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HtmlBlockWhereInput>;
};


export type QueryRefIconItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<IconItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<IconItemBlockWhereInput>;
};


export type QueryRefIconsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<IconsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<IconsBlockWhereInput>;
};


export type QueryRefImageMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ImageMediaWhereInput>;
};


export type QueryRefLinkItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LinkItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<LinkItemWhereInput>;
};


export type QueryRefParagraphElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ParagraphElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryRefProductArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ProductOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ProductWhereInput>;
};


export type QueryRefProductCardItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ProductCardItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ProductCardItemBlockWhereInput>;
};


export type QueryRefProductCardsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ProductCardsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ProductCardsBlockWhereInput>;
};


export type QueryRefSocialItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SocialItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SocialItemWhereInput>;
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


export type QueryRefSubLinksItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SubLinksItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SubLinksItemWhereInput>;
};


export type QueryRefSysContentFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefTeaserBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TeaserBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TeaserBlockWhereInput>;
};


export type QueryRefVideoMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<VideoMediaWhereInput>;
};


export type QueryRef_ComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ComponentWhereInput>;
};


export type QueryRef_ContentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ContentWhereInput>;
};


export type QueryRef_ElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ElementWhereInput>;
};


export type QueryRef_ExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ExperienceWhereInput>;
};


export type QueryRef_FolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_FolderWhereInput>;
};


export type QueryRef_ImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ImageWhereInput>;
};


export type QueryRef_MediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_MediaWhereInput>;
};


export type QueryRef_PageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_PageWhereInput>;
};


export type QueryRef_SectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_SectionWhereInput>;
};


export type QueryRef_VideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_VideoWhereInput>;
};

export enum Ranking {
  BoostOnly = 'BOOST_ONLY',
  Doc = 'DOC',
  Relevance = 'RELEVANCE',
  Semantic = 'SEMANTIC'
}

export type RichText = {
  __typename?: 'RichText';
  html: Maybe<Scalars['String']['output']>;
  json: Maybe<Scalars['JSON']['output']>;
};

export type RichTextAutocomplete = {
  __typename?: 'RichTextAutocomplete';
  html: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RichTextAutocompleteHtmlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RichTextFacet = {
  __typename?: 'RichTextFacet';
  html: Maybe<Array<Maybe<StringFacet>>>;
};


export type RichTextFacetHtmlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RichTextOrderByInput = {
  html: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  html: InputMaybe<StringFilterInput>;
};

export type SearchableRichText = {
  __typename?: 'SearchableRichText';
  html: Maybe<Scalars['String']['output']>;
  json: Maybe<Scalars['JSON']['output']>;
};


export type SearchableRichTextHtmlArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type SearchableRichTextFacet = {
  __typename?: 'SearchableRichTextFacet';
  html: Maybe<Array<Maybe<StringFacet>>>;
};


export type SearchableRichTextFacetHtmlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SearchableRichTextOrderByInput = {
  html: InputMaybe<OrderBy>;
};

export type SearchableRichTextWhereInput = {
  html: InputMaybe<SearchableStringFilterInput>;
};

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

export type SocialItem = IData & _IComponent & _IContent & {
  __typename?: 'SocialItem';
  Image: Maybe<Scalars['String']['output']>;
  LinkUrl: Maybe<Scalars['String']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type SocialItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SocialItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SocialItemAutocomplete = {
  __typename?: 'SocialItemAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SocialItemFacet = {
  __typename?: 'SocialItemFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SocialItemOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SocialItemOutput = {
  __typename?: 'SocialItemOutput';
  autocomplete: Maybe<SocialItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SocialItemFacet>;
  items: Maybe<Array<Maybe<SocialItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SocialItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SocialItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SocialItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SocialItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SocialItemWhereInput>>>;
};

export type StartPage = IData & _IContent & _IPage & {
  __typename?: 'StartPage';
  Blocks: Maybe<Array<Maybe<_IContent>>>;
  Keywords: Maybe<Scalars['String']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  short_description: Maybe<Scalars['String']['output']>;
};


export type StartPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StartPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type StartPageAutocomplete = {
  __typename?: 'StartPageAutocomplete';
  Blocks: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type StartPageFacet = {
  __typename?: 'StartPageFacet';
  Blocks: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type StartPageOrderByInput = {
  Blocks: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
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
  Blocks: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
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

export type SubLinksItem = IData & _IComponent & _IContent & {
  __typename?: 'SubLinksItem';
  Items: Maybe<Array<Maybe<_IContent>>>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type SubLinksItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SubLinksItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SubLinksItemAutocomplete = {
  __typename?: 'SubLinksItemAutocomplete';
  Items: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SubLinksItemFacet = {
  __typename?: 'SubLinksItemFacet';
  Items: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SubLinksItemOrderByInput = {
  Items: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SubLinksItemOutput = {
  __typename?: 'SubLinksItemOutput';
  autocomplete: Maybe<SubLinksItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SubLinksItemFacet>;
  items: Maybe<Array<Maybe<SubLinksItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SubLinksItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubLinksItemWhereInput = {
  Items: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<SubLinksItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SubLinksItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SubLinksItemWhereInput>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  One = 'ONE',
  /** synonym slot 2 */
  Two = 'TWO'
}

export type SysContentFolder = IData & _IContent & _IFolder & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type SysContentFolder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete: Maybe<SysContentFolderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SysContentFolderFacet>;
  items: Maybe<Array<Maybe<SysContentFolder>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
};

export type TeaserBlock = IData & _IComponent & _IContent & {
  __typename?: 'TeaserBlock';
  Heading: Maybe<Scalars['String']['output']>;
  Image: Maybe<Scalars['String']['output']>;
  Link: Maybe<Link>;
  Reversed: Maybe<Scalars['Boolean']['output']>;
  Text: Maybe<RichText>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type TeaserBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TeaserBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TeaserBlockAutocomplete = {
  __typename?: 'TeaserBlockAutocomplete';
  Link: Maybe<LinkAutocomplete>;
  Text: Maybe<RichTextAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TeaserBlockFacet = {
  __typename?: 'TeaserBlockFacet';
  Link: Maybe<LinkFacet>;
  Text: Maybe<RichTextFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TeaserBlockOrderByInput = {
  Link: InputMaybe<LinkOrderByInput>;
  Text: InputMaybe<RichTextOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TeaserBlockOutput = {
  __typename?: 'TeaserBlockOutput';
  autocomplete: Maybe<TeaserBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TeaserBlockFacet>;
  items: Maybe<Array<Maybe<TeaserBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TeaserBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TeaserBlockWhereInput = {
  Link: InputMaybe<LinkWhereInput>;
  Text: InputMaybe<RichTextWhereInput>;
  _and: InputMaybe<Array<InputMaybe<TeaserBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TeaserBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TeaserBlockWhereInput>>>;
};

export type VideoMedia = IData & _IContent & _IMedia & _IVideo & {
  __typename?: 'VideoMedia';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type VideoMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VideoMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete: Maybe<VideoMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<VideoMediaFacet>;
  items: Maybe<Array<Maybe<VideoMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
};

export type _Component = IData & _IComponent & _IContent & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Component_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Component_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: '_ComponentFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ComponentOutput = {
  __typename?: '_ComponentOutput';
  autocomplete: Maybe<_ComponentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ComponentFacet>;
  items: Maybe<Array<Maybe<_IComponent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ComponentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ComponentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
};

export type _Content = IData & _IContent & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Content_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Content_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: '_ContentFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ContentOutput = {
  __typename?: '_ContentOutput';
  autocomplete: Maybe<_ContentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ContentFacet>;
  items: Maybe<Array<Maybe<_IContent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ContentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ContentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
};

export type _Element = IData & _IComponent & _IContent & _IElement & {
  __typename?: '_Element';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Element_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Element_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ElementAutocomplete = {
  __typename?: '_ElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ElementFacet = {
  __typename?: '_ElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ElementOutput = {
  __typename?: '_ElementOutput';
  autocomplete: Maybe<_ElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ElementFacet>;
  items: Maybe<Array<Maybe<_IElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ElementWhereInput>>>;
};

export type _Experience = IData & _IContent & _IExperience & _IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _Experience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Experience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  autocomplete: Maybe<_ExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ExperienceFacet>;
  items: Maybe<Array<Maybe<_IExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData & _IContent & _IFolder & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Folder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Folder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: '_FolderFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _FolderOutput = {
  __typename?: '_FolderOutput';
  autocomplete: Maybe<_FolderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_FolderFacet>;
  items: Maybe<Array<Maybe<_IFolder>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _FolderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _FolderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IComponent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IComponent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IContent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IContent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IContentAutocomplete = {
  __typename?: '_IContentAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _IContentFacet = {
  __typename?: '_IContentFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _IContentOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _IContentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
};

export type _IElement = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _IExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IFolder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IFolder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IImage = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IImage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IImage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _ISection_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _ISection_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IVideo_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IVideo_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _Image = IData & _IContent & _IImage & _IMedia & {
  __typename?: '_Image';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Image_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Image_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: '_ImageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ImageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageOutput = {
  __typename?: '_ImageOutput';
  autocomplete: Maybe<_ImageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ImageFacet>;
  items: Maybe<Array<Maybe<_IImage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ImageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
};

export type _Media = IData & _IContent & _IMedia & {
  __typename?: '_Media';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Media_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Media_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: '_MediaFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _MediaOutput = {
  __typename?: '_MediaOutput';
  autocomplete: Maybe<_MediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_MediaFacet>;
  items: Maybe<Array<Maybe<_IMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _MediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _MediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
};

export type _Page = IData & _IContent & _IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Page_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Page_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: '_PageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _PageOutput = {
  __typename?: '_PageOutput';
  autocomplete: Maybe<_PageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_PageFacet>;
  items: Maybe<Array<Maybe<_IPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _PageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _PageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
};

export type _Section = IData & _IComponent & _IContent & _ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _Section_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Section_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: '_SectionFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: '_SectionOutput';
  autocomplete: Maybe<_SectionAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_SectionFacet>;
  items: Maybe<Array<Maybe<_ISection>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _SectionOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _SectionWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Video = IData & _IContent & _IMedia & _IVideo & {
  __typename?: '_Video';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Video_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Video_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: '_VideoFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _VideoOutput = {
  __typename?: '_VideoOutput';
  autocomplete: Maybe<_VideoAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_VideoFacet>;
  items: Maybe<Array<Maybe<_IVideo>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _VideoOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _VideoWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
};

export enum System_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL'
}

export type GetContentByGuidQueryVariables = Exact<{
  guid: InputMaybe<Scalars['String']['input']>;
}>;


export type GetContentByGuidQuery = { __typename?: 'Query', _Content: { __typename?: '_ContentOutput', items: Array<{ __typename?: 'BackgroundCoverBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BackgroundCoverItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BestsellersBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlankExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlankSection', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Blog', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlogExp', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ButtonBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CMSPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CategoriesBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CategoryItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ColumnItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ColumnItemsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CommonImage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'FastBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Folder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Footer', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'GenericMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Header', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HeroBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HtmlBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'IconItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'IconsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ImageMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LinkItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ParagraphElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Product', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ProductCardItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ProductCardsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SocialItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StartPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SubLinksItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SysContentFolder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TeaserBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'VideoMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Component', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Content', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Element', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Experience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Folder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Image', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Media', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Page', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Section', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Video', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | null> | null } | null };


export const GetContentByGuidDocument = gql`
    query GetContentByGuid($guid: String) {
  _Content(where: {_metadata: {key: {eq: $guid}}}) {
    items {
      _metadata {
        displayName
        version
        key
        url {
          base
          internal
          hierarchical
          default
          type
        }
      }
    }
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<ExecutionResult<R, E>> | AsyncIterable<ExecutionResult<R, E>>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetContentByGuid(variables?: GetContentByGuidQueryVariables, options?: C): Promise<ExecutionResult<GetContentByGuidQuery, E>> {
      return requester<GetContentByGuidQuery, GetContentByGuidQueryVariables>(GetContentByGuidDocument, variables, options) as Promise<ExecutionResult<GetContentByGuidQuery, E>>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
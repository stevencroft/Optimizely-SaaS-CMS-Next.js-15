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

export type AnnouncementElement = IData & _IComponent & _IContent & {
  __typename?: 'AnnouncementElement';
  Announcement: Maybe<Scalars['String']['output']>;
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


export type AnnouncementElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type AnnouncementElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type AnnouncementElementAutocomplete = {
  __typename?: 'AnnouncementElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type AnnouncementElementFacet = {
  __typename?: 'AnnouncementElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type AnnouncementElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type AnnouncementElementOutput = {
  __typename?: 'AnnouncementElementOutput';
  autocomplete: Maybe<AnnouncementElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<AnnouncementElementFacet>;
  item: Maybe<AnnouncementElement>;
  items: Maybe<Array<Maybe<AnnouncementElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type AnnouncementElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type AnnouncementElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<AnnouncementElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<AnnouncementElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<AnnouncementElementWhereInput>>>;
};

export type ArticleListElement = IData & _IComponent & _IContent & {
  __typename?: 'ArticleListElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  articleListCount: Maybe<Scalars['Int']['output']>;
};


export type ArticleListElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ArticleListElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ArticleListElementAutocomplete = {
  __typename?: 'ArticleListElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ArticleListElementFacet = {
  __typename?: 'ArticleListElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ArticleListElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ArticleListElementOutput = {
  __typename?: 'ArticleListElementOutput';
  autocomplete: Maybe<ArticleListElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ArticleListElementFacet>;
  item: Maybe<ArticleListElement>;
  items: Maybe<Array<Maybe<ArticleListElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ArticleListElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleListElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
};

export type AvailabilityBlock = IData & _IComponent & _IContent & {
  __typename?: 'AvailabilityBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  availability: Maybe<Scalars['String']['output']>;
  projectTypes: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type AvailabilityBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type AvailabilityBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type AvailabilityBlockAutocomplete = {
  __typename?: 'AvailabilityBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type AvailabilityBlockFacet = {
  __typename?: 'AvailabilityBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type AvailabilityBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type AvailabilityBlockOutput = {
  __typename?: 'AvailabilityBlockOutput';
  autocomplete: Maybe<AvailabilityBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<AvailabilityBlockFacet>;
  item: Maybe<AvailabilityBlock>;
  items: Maybe<Array<Maybe<AvailabilityBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type AvailabilityBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type AvailabilityBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
};

export type BlankExperience = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'BlankExperience';
  BlankExperienceSeoSettings: Maybe<PageSeoSettingsProperty>;
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
  BlankExperienceSeoSettings: Maybe<PageSeoSettingsPropertyAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  BlankExperienceSeoSettings: Maybe<PageSeoSettingsPropertyFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type BlankExperienceOrderByInput = {
  BlankExperienceSeoSettings: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
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
  item: Maybe<BlankExperience>;
  items: Maybe<Array<Maybe<BlankExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  BlankExperienceSeoSettings: InputMaybe<PageSeoSettingsPropertyWhereInput>;
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
  item: Maybe<BlankSection>;
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

export type BlogListingBlock = IData & _IComponent & _IContent & {
  __typename?: 'BlogListingBlock';
  BlogListingItemCount: Maybe<Scalars['Int']['output']>;
  BlogListingShowFilters: Maybe<Scalars['Boolean']['output']>;
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


export type BlogListingBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogListingBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlogListingBlockAutocomplete = {
  __typename?: 'BlogListingBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type BlogListingBlockFacet = {
  __typename?: 'BlogListingBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type BlogListingBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type BlogListingBlockOutput = {
  __typename?: 'BlogListingBlockOutput';
  autocomplete: Maybe<BlogListingBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlogListingBlockFacet>;
  item: Maybe<BlogListingBlock>;
  items: Maybe<Array<Maybe<BlogListingBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlogListingBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogListingBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BlogListingBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlogListingBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlogListingBlockWhereInput>>>;
};

export type BlogPostPage = IData & _IContent & _IPage & {
  __typename?: 'BlogPostPage';
  ArticleAuthor: Maybe<Scalars['String']['output']>;
  ArticleSubHeading: Maybe<Scalars['String']['output']>;
  BlogPostBody: Maybe<RichText>;
  BlogPostPromoImage: Maybe<ContentReference>;
  Heading: Maybe<Scalars['String']['output']>;
  SeoSettings: Maybe<PageSeoSettingsProperty>;
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


export type BlogPostPageArticleAuthorArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogPostPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogPostPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlogPostPageAutocomplete = {
  __typename?: 'BlogPostPageAutocomplete';
  BlogPostBody: Maybe<RichTextAutocomplete>;
  BlogPostPromoImage: Maybe<ContentReferenceAutocomplete>;
  SeoSettings: Maybe<PageSeoSettingsPropertyAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type BlogPostPageFacet = {
  __typename?: 'BlogPostPageFacet';
  ArticleAuthor: Maybe<Array<Maybe<StringFacet>>>;
  BlogPostBody: Maybe<RichTextFacet>;
  BlogPostPromoImage: Maybe<ContentReferenceFacet>;
  SeoSettings: Maybe<PageSeoSettingsPropertyFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};


export type BlogPostPageFacetArticleAuthorArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlogPostPageOrderByInput = {
  ArticleAuthor: InputMaybe<OrderBy>;
  BlogPostBody: InputMaybe<RichTextOrderByInput>;
  BlogPostPromoImage: InputMaybe<ContentReferenceOrderByInput>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type BlogPostPageOutput = {
  __typename?: 'BlogPostPageOutput';
  autocomplete: Maybe<BlogPostPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlogPostPageFacet>;
  item: Maybe<BlogPostPage>;
  items: Maybe<Array<Maybe<BlogPostPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlogPostPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogPostPageWhereInput = {
  ArticleAuthor: InputMaybe<SearchableStringFilterInput>;
  BlogPostBody: InputMaybe<RichTextWhereInput>;
  BlogPostPromoImage: InputMaybe<ContentReferenceWhereInput>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  _and: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
};

export type ButtonBlock = IData & _IComponent & _IContent & {
  __typename?: 'ButtonBlock';
  ButtonClass: Maybe<Scalars['String']['output']>;
  ButtonText: Maybe<Scalars['String']['output']>;
  ButtonType: Maybe<Scalars['String']['output']>;
  ButtonUrl: Maybe<ContentUrl>;
  ButtonVariant: Maybe<Scalars['String']['output']>;
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


export type ButtonBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ButtonBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ButtonBlockAutocomplete = {
  __typename?: 'ButtonBlockAutocomplete';
  ButtonUrl: Maybe<ContentUrlAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ButtonBlockFacet = {
  __typename?: 'ButtonBlockFacet';
  ButtonUrl: Maybe<ContentUrlFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ButtonBlockOrderByInput = {
  ButtonUrl: InputMaybe<ContentUrlOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ButtonBlockOutput = {
  __typename?: 'ButtonBlockOutput';
  autocomplete: Maybe<ButtonBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ButtonBlockFacet>;
  item: Maybe<ButtonBlock>;
  items: Maybe<Array<Maybe<ButtonBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ButtonBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonBlockProperty = {
  __typename?: 'ButtonBlockProperty';
  ButtonClass: Maybe<Scalars['String']['output']>;
  ButtonText: Maybe<Scalars['String']['output']>;
  ButtonType: Maybe<Scalars['String']['output']>;
  ButtonUrl: Maybe<ContentUrl>;
  ButtonVariant: Maybe<Scalars['String']['output']>;
};

export type ButtonBlockPropertyAutocomplete = {
  __typename?: 'ButtonBlockPropertyAutocomplete';
  ButtonUrl: Maybe<ContentUrlAutocomplete>;
};

export type ButtonBlockPropertyFacet = {
  __typename?: 'ButtonBlockPropertyFacet';
  ButtonUrl: Maybe<ContentUrlFacet>;
};

export type ButtonBlockPropertyOrderByInput = {
  ButtonUrl: InputMaybe<ContentUrlOrderByInput>;
};

export type ButtonBlockPropertyWhereInput = {
  ButtonUrl: InputMaybe<ContentUrlWhereInput>;
};

export type ButtonBlockWhereInput = {
  ButtonUrl: InputMaybe<ContentUrlWhereInput>;
  _and: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
};

export type CmsPage = IData & _IContent & _IPage & {
  __typename?: 'CMSPage';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  blocks: Maybe<Array<Maybe<_IContent>>>;
  keywords: Maybe<Scalars['String']['output']>;
  shortDescription: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type CmsPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CmsPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CmsPageAutocomplete = {
  __typename?: 'CMSPageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  blocks: Maybe<_IContentAutocomplete>;
};

export type CmsPageFacet = {
  __typename?: 'CMSPageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  blocks: Maybe<_IContentFacet>;
};

export type CmsPageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  blocks: InputMaybe<_IContentOrderByInput>;
};

export type CmsPageOutput = {
  __typename?: 'CMSPageOutput';
  autocomplete: Maybe<CmsPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CmsPageFacet>;
  item: Maybe<CmsPage>;
  items: Maybe<Array<Maybe<CmsPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CmsPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CmsPageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  blocks: InputMaybe<_IContentWhereInput>;
};

export type CtaElement = IData & _IComponent & _IContent & {
  __typename?: 'CTAElement';
  Link: Maybe<ContentUrl>;
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


export type CtaElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CtaElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CtaElementAutocomplete = {
  __typename?: 'CTAElementAutocomplete';
  Link: Maybe<ContentUrlAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type CtaElementFacet = {
  __typename?: 'CTAElementFacet';
  Link: Maybe<ContentUrlFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type CtaElementOrderByInput = {
  Link: InputMaybe<ContentUrlOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type CtaElementOutput = {
  __typename?: 'CTAElementOutput';
  autocomplete: Maybe<CtaElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CtaElementFacet>;
  item: Maybe<CtaElement>;
  items: Maybe<Array<Maybe<CtaElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CtaElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CtaElementWhereInput = {
  Link: InputMaybe<ContentUrlWhereInput>;
  _and: InputMaybe<Array<InputMaybe<CtaElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CtaElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CtaElementWhereInput>>>;
};

export type CardBlock = IData & _IComponent & _IContent & {
  __typename?: 'CardBlock';
  CardButton: Maybe<ButtonBlockProperty>;
  CardColor: Maybe<Scalars['String']['output']>;
  CardDescription: Maybe<RichText>;
  CardHeading: Maybe<Scalars['String']['output']>;
  CardIcon: Maybe<ContentReference>;
  CardImage: Maybe<ContentReference>;
  CardSubHeading: Maybe<Scalars['String']['output']>;
  ImageLayout: Maybe<Scalars['String']['output']>;
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


export type CardBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CardBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CardBlockAutocomplete = {
  __typename?: 'CardBlockAutocomplete';
  CardButton: Maybe<ButtonBlockPropertyAutocomplete>;
  CardDescription: Maybe<RichTextAutocomplete>;
  CardIcon: Maybe<ContentReferenceAutocomplete>;
  CardImage: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type CardBlockFacet = {
  __typename?: 'CardBlockFacet';
  CardButton: Maybe<ButtonBlockPropertyFacet>;
  CardDescription: Maybe<RichTextFacet>;
  CardIcon: Maybe<ContentReferenceFacet>;
  CardImage: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type CardBlockOrderByInput = {
  CardButton: InputMaybe<ButtonBlockPropertyOrderByInput>;
  CardDescription: InputMaybe<RichTextOrderByInput>;
  CardIcon: InputMaybe<ContentReferenceOrderByInput>;
  CardImage: InputMaybe<ContentReferenceOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type CardBlockOutput = {
  __typename?: 'CardBlockOutput';
  autocomplete: Maybe<CardBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CardBlockFacet>;
  item: Maybe<CardBlock>;
  items: Maybe<Array<Maybe<CardBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CardBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CardBlockWhereInput = {
  CardButton: InputMaybe<ButtonBlockPropertyWhereInput>;
  CardDescription: InputMaybe<RichTextWhereInput>;
  CardIcon: InputMaybe<ContentReferenceWhereInput>;
  CardImage: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
};

export type CardElement = IData & _IComponent & _IContent & {
  __typename?: 'CardElement';
  CallToAction: Maybe<Link>;
  CoverImage: Maybe<ContentReference>;
  DisplayAs: Maybe<Scalars['String']['output']>;
  Heading: Maybe<Scalars['String']['output']>;
  OverlayText: Maybe<Scalars['String']['output']>;
  Subheading: Maybe<Scalars['String']['output']>;
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


export type CardElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CardElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CardElementAutocomplete = {
  __typename?: 'CardElementAutocomplete';
  CallToAction: Maybe<LinkAutocomplete>;
  CoverImage: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type CardElementFacet = {
  __typename?: 'CardElementFacet';
  CallToAction: Maybe<LinkFacet>;
  CoverImage: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type CardElementOrderByInput = {
  CallToAction: InputMaybe<LinkOrderByInput>;
  CoverImage: InputMaybe<ContentReferenceOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type CardElementOutput = {
  __typename?: 'CardElementOutput';
  autocomplete: Maybe<CardElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CardElementFacet>;
  item: Maybe<CardElement>;
  items: Maybe<Array<Maybe<CardElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CardElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CardElementWhereInput = {
  CallToAction: InputMaybe<LinkWhereInput>;
  CoverImage: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<CardElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CardElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CardElementWhereInput>>>;
};

export type CarouselBlock = IData & _IComponent & _IContent & {
  __typename?: 'CarouselBlock';
  CarouselItemsContentArea: Maybe<Array<Maybe<_IContent>>>;
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


export type CarouselBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CarouselBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CarouselBlockAutocomplete = {
  __typename?: 'CarouselBlockAutocomplete';
  CarouselItemsContentArea: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type CarouselBlockFacet = {
  __typename?: 'CarouselBlockFacet';
  CarouselItemsContentArea: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type CarouselBlockOrderByInput = {
  CarouselItemsContentArea: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type CarouselBlockOutput = {
  __typename?: 'CarouselBlockOutput';
  autocomplete: Maybe<CarouselBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CarouselBlockFacet>;
  item: Maybe<CarouselBlock>;
  items: Maybe<Array<Maybe<CarouselBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CarouselBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CarouselBlockWhereInput = {
  CarouselItemsContentArea: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
};

export type CompositionComponentNode = ICompositionComponentNode & ICompositionNode & {
  __typename?: 'CompositionComponentNode';
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
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

export type Contact = IData & _IComponent & _IContent & {
  __typename?: 'Contact';
  Email: Maybe<Scalars['String']['output']>;
  Image: Maybe<ContentReference>;
  Location: Maybe<Scalars['String']['output']>;
  Name: Maybe<Scalars['String']['output']>;
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


export type Contact_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Contact_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContactAutocomplete = {
  __typename?: 'ContactAutocomplete';
  Image: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ContactBlock = IData & _IComponent & _IContent & {
  __typename?: 'ContactBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  description: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ContactBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContactBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContactBlockAutocomplete = {
  __typename?: 'ContactBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ContactBlockFacet = {
  __typename?: 'ContactBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ContactBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ContactBlockOutput = {
  __typename?: 'ContactBlockOutput';
  autocomplete: Maybe<ContactBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContactBlockFacet>;
  item: Maybe<ContactBlock>;
  items: Maybe<Array<Maybe<ContactBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContactBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
};

export type ContactElement = IData & _IComponent & _IContent & {
  __typename?: 'ContactElement';
  Contact: Maybe<ContentReference>;
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


export type ContactElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContactElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContactElementAutocomplete = {
  __typename?: 'ContactElementAutocomplete';
  Contact: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ContactElementFacet = {
  __typename?: 'ContactElementFacet';
  Contact: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ContactElementOrderByInput = {
  Contact: InputMaybe<ContentReferenceOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ContactElementOutput = {
  __typename?: 'ContactElementOutput';
  autocomplete: Maybe<ContactElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContactElementFacet>;
  item: Maybe<ContactElement>;
  items: Maybe<Array<Maybe<ContactElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContactElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactElementWhereInput = {
  Contact: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<ContactElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContactElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContactElementWhereInput>>>;
};

export type ContactFacet = {
  __typename?: 'ContactFacet';
  Image: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ContactOrderByInput = {
  Image: InputMaybe<ContentReferenceOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ContactOutput = {
  __typename?: 'ContactOutput';
  autocomplete: Maybe<ContactAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContactFacet>;
  item: Maybe<Contact>;
  items: Maybe<Array<Maybe<Contact>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContactOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactPage = IData & _IContent & _IPage & {
  __typename?: 'ContactPage';
  Biography: Maybe<RichText>;
  Designation: Maybe<Scalars['String']['output']>;
  Email: Maybe<Scalars['String']['output']>;
  Image: Maybe<ContentReference>;
  Location: Maybe<Scalars['String']['output']>;
  Name: Maybe<Scalars['String']['output']>;
  Phone: Maybe<Scalars['String']['output']>;
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


export type ContactPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContactPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContactPageAutocomplete = {
  __typename?: 'ContactPageAutocomplete';
  Biography: Maybe<RichTextAutocomplete>;
  Image: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ContactPageFacet = {
  __typename?: 'ContactPageFacet';
  Biography: Maybe<RichTextFacet>;
  Image: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ContactPageOrderByInput = {
  Biography: InputMaybe<RichTextOrderByInput>;
  Image: InputMaybe<ContentReferenceOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ContactPageOutput = {
  __typename?: 'ContactPageOutput';
  autocomplete: Maybe<ContactPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContactPageFacet>;
  item: Maybe<ContactPage>;
  items: Maybe<Array<Maybe<ContactPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContactPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactPageWhereInput = {
  Biography: InputMaybe<RichTextWhereInput>;
  Image: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<ContactPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContactPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContactPageWhereInput>>>;
};

export type ContactWhereInput = {
  Image: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<ContactWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContactWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContactWhereInput>>>;
};

export type Container = IData & _IContent & _IPage & {
  __typename?: 'Container';
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


export type Container_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Container_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContainerAutocomplete = {
  __typename?: 'ContainerAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ContainerFacet = {
  __typename?: 'ContainerFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ContainerOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ContainerOutput = {
  __typename?: 'ContainerOutput';
  autocomplete: Maybe<ContainerAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContainerFacet>;
  item: Maybe<Container>;
  items: Maybe<Array<Maybe<Container>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContainerOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContainerWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ContainerWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContainerWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContainerWhereInput>>>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
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

export type ContentRecsBlock = IData & _IComponent & _IContent & {
  __typename?: 'ContentRecsBlock';
  BlockDeliveryApiKey: Maybe<Scalars['String']['output']>;
  BlockRecommendationCount: Maybe<Scalars['Int']['output']>;
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


export type ContentRecsBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContentRecsBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContentRecsBlockAutocomplete = {
  __typename?: 'ContentRecsBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ContentRecsBlockFacet = {
  __typename?: 'ContentRecsBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ContentRecsBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ContentRecsBlockOutput = {
  __typename?: 'ContentRecsBlockOutput';
  autocomplete: Maybe<ContentRecsBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContentRecsBlockFacet>;
  item: Maybe<ContentRecsBlock>;
  items: Maybe<Array<Maybe<ContentRecsBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContentRecsBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentRecsBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ContentRecsBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContentRecsBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContentRecsBlockWhereInput>>>;
};

export type ContentRecsElement = IData & _IComponent & _IContent & {
  __typename?: 'ContentRecsElement';
  ElementDeliveryApiKey: Maybe<Scalars['String']['output']>;
  ElementRecommendationCount: Maybe<Scalars['Int']['output']>;
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


export type ContentRecsElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContentRecsElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContentRecsElementAutocomplete = {
  __typename?: 'ContentRecsElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ContentRecsElementFacet = {
  __typename?: 'ContentRecsElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ContentRecsElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ContentRecsElementOutput = {
  __typename?: 'ContentRecsElementOutput';
  autocomplete: Maybe<ContentRecsElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContentRecsElementFacet>;
  item: Maybe<ContentRecsElement>;
  items: Maybe<Array<Maybe<ContentRecsElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContentRecsElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentRecsElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
};

export type ContentReference = {
  __typename?: 'ContentReference';
  key: Maybe<Scalars['String']['output']>;
  url: Maybe<ContentUrl>;
};

export type ContentReferenceAutocomplete = {
  __typename?: 'ContentReferenceAutocomplete';
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
};


export type ContentReferenceAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentReferenceFacet = {
  __typename?: 'ContentReferenceFacet';
  key: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
};


export type ContentReferenceFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentReferenceOrderByInput = {
  key: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
};

export type ContentReferenceWhereInput = {
  key: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base: Maybe<Scalars['String']['output']>;
  default: Maybe<Scalars['String']['output']>;
  graph: Maybe<Scalars['String']['output']>;
  hierarchical: Maybe<Scalars['String']['output']>;
  internal: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  graph: Maybe<Array<Maybe<Scalars['String']['output']>>>;
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


export type ContentUrlAutocompleteGraphArgs = {
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
  graph: Maybe<Array<Maybe<StringFacet>>>;
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


export type ContentUrlFacetGraphArgs = {
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
  graph: InputMaybe<OrderBy>;
  hierarchical: InputMaybe<OrderBy>;
  internal: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base: InputMaybe<StringFilterInput>;
  default: InputMaybe<StringFilterInput>;
  graph: InputMaybe<StringFilterInput>;
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
  item: Maybe<IData>;
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

export type EventElement = IData & _IComponent & _IContent & {
  __typename?: 'EventElement';
  Address: Maybe<Scalars['String']['output']>;
  Date: Maybe<Scalars['DateTime']['output']>;
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


export type EventElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type EventElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type EventElementAutocomplete = {
  __typename?: 'EventElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type EventElementFacet = {
  __typename?: 'EventElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type EventElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type EventElementOutput = {
  __typename?: 'EventElementOutput';
  autocomplete: Maybe<EventElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<EventElementFacet>;
  item: Maybe<EventElement>;
  items: Maybe<Array<Maybe<EventElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type EventElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<EventElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<EventElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<EventElementWhereInput>>>;
};

export type Footer = IData & _IContent & _IPage & {
  __typename?: 'Footer';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  columns: Maybe<Array<Maybe<_IContent>>>;
  copyrightText: Maybe<Scalars['String']['output']>;
  socialLinks: Maybe<Array<Maybe<_IContent>>>;
};


export type Footer_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Footer_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type FooterAutocomplete = {
  __typename?: 'FooterAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  columns: Maybe<_IContentAutocomplete>;
  socialLinks: Maybe<_IContentAutocomplete>;
};

export type FooterColumn = IData & _IComponent & _IContent & {
  __typename?: 'FooterColumn';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  links: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type FooterColumn_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type FooterColumn_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type FooterColumnAutocomplete = {
  __typename?: 'FooterColumnAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  links: Maybe<_IContentAutocomplete>;
};

export type FooterColumnFacet = {
  __typename?: 'FooterColumnFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  links: Maybe<_IContentFacet>;
};

export type FooterColumnOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  links: InputMaybe<_IContentOrderByInput>;
};

export type FooterColumnOutput = {
  __typename?: 'FooterColumnOutput';
  autocomplete: Maybe<FooterColumnAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<FooterColumnFacet>;
  item: Maybe<FooterColumn>;
  items: Maybe<Array<Maybe<FooterColumn>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type FooterColumnOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterColumnWhereInput = {
  _and: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  links: InputMaybe<_IContentWhereInput>;
};

export type FooterFacet = {
  __typename?: 'FooterFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  columns: Maybe<_IContentFacet>;
  socialLinks: Maybe<_IContentFacet>;
};

export type FooterOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  columns: InputMaybe<_IContentOrderByInput>;
  socialLinks: InputMaybe<_IContentOrderByInput>;
};

export type FooterOutput = {
  __typename?: 'FooterOutput';
  autocomplete: Maybe<FooterAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<FooterFacet>;
  item: Maybe<Footer>;
  items: Maybe<Array<Maybe<Footer>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type FooterOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterWhereInput = {
  _and: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  columns: InputMaybe<_IContentWhereInput>;
  socialLinks: InputMaybe<_IContentWhereInput>;
};

export type FormElement = IData & _IComponent & _IContent & {
  __typename?: 'FormElement';
  Submit: Maybe<Link>;
  Subtitle: Maybe<Scalars['String']['output']>;
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


export type FormElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type FormElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type FormElementAutocomplete = {
  __typename?: 'FormElementAutocomplete';
  Submit: Maybe<LinkAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type FormElementFacet = {
  __typename?: 'FormElementFacet';
  Submit: Maybe<LinkFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type FormElementOrderByInput = {
  Submit: InputMaybe<LinkOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type FormElementOutput = {
  __typename?: 'FormElementOutput';
  autocomplete: Maybe<FormElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<FormElementFacet>;
  item: Maybe<FormElement>;
  items: Maybe<Array<Maybe<FormElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type FormElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormElementWhereInput = {
  Submit: InputMaybe<LinkWhereInput>;
  _and: InputMaybe<Array<InputMaybe<FormElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<FormElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<FormElementWhereInput>>>;
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

export type GenericMedia123 = IData & _IContent & _IMedia & {
  __typename?: 'GenericMedia123';
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


export type GenericMedia123_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type GenericMedia123_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type GenericMedia123Autocomplete = {
  __typename?: 'GenericMedia123Autocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMedia123Facet = {
  __typename?: 'GenericMedia123Facet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type GenericMedia123OrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMedia123Output = {
  __typename?: 'GenericMedia123Output';
  autocomplete: Maybe<GenericMedia123Autocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<GenericMedia123Facet>;
  item: Maybe<GenericMedia123>;
  items: Maybe<Array<Maybe<GenericMedia123>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type GenericMedia123OutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMedia123WhereInput = {
  _and: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
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
  item: Maybe<GenericMedia>;
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
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  ctaHref: Maybe<Scalars['String']['output']>;
  ctaText: Maybe<Scalars['String']['output']>;
  logo: Maybe<Scalars['String']['output']>;
  navItems: Maybe<Array<Maybe<_IContent>>>;
};


export type Header_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Header_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeaderAutocomplete = {
  __typename?: 'HeaderAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  navItems: Maybe<_IContentAutocomplete>;
};

export type HeaderFacet = {
  __typename?: 'HeaderFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  navItems: Maybe<_IContentFacet>;
};

export type HeaderOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  navItems: InputMaybe<_IContentOrderByInput>;
};

export type HeaderOutput = {
  __typename?: 'HeaderOutput';
  autocomplete: Maybe<HeaderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeaderFacet>;
  item: Maybe<Header>;
  items: Maybe<Array<Maybe<Header>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeaderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  navItems: InputMaybe<_IContentWhereInput>;
};

export type HeadingElement = IData & _IComponent & _IContent & {
  __typename?: 'HeadingElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  headingText: Maybe<Scalars['String']['output']>;
};


export type HeadingElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeadingElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeadingElementAutocomplete = {
  __typename?: 'HeadingElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HeadingElementFacet = {
  __typename?: 'HeadingElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type HeadingElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type HeadingElementOutput = {
  __typename?: 'HeadingElementOutput';
  autocomplete: Maybe<HeadingElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeadingElementFacet>;
  item: Maybe<HeadingElement>;
  items: Maybe<Array<Maybe<HeadingElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeadingElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeadingElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
};

export type HeroBlock = IData & _IComponent & _IContent & {
  __typename?: 'HeroBlock';
  Description: Maybe<RichText>;
  Eyebrow: Maybe<Scalars['String']['output']>;
  Heading: Maybe<Scalars['String']['output']>;
  HeroButton: Maybe<ButtonBlockProperty>;
  HeroColor: Maybe<Scalars['String']['output']>;
  HeroImage: Maybe<ContentReference>;
  Icon: Maybe<Scalars['String']['output']>;
  SubHeading: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  decorationColorsPrimary: Maybe<Scalars['String']['output']>;
  decorationColorsSecondary: Maybe<Scalars['String']['output']>;
  showDecoration: Maybe<Scalars['Boolean']['output']>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type HeroBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeroBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  Description: Maybe<RichTextAutocomplete>;
  HeroButton: Maybe<ButtonBlockPropertyAutocomplete>;
  HeroImage: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  Description: Maybe<RichTextFacet>;
  HeroButton: Maybe<ButtonBlockPropertyFacet>;
  HeroImage: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type HeroBlockOrderByInput = {
  Description: InputMaybe<RichTextOrderByInput>;
  HeroButton: InputMaybe<ButtonBlockPropertyOrderByInput>;
  HeroImage: InputMaybe<ContentReferenceOrderByInput>;
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
  item: Maybe<HeroBlock>;
  items: Maybe<Array<Maybe<HeroBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeroBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroBlockWhereInput = {
  Description: InputMaybe<RichTextWhereInput>;
  HeroButton: InputMaybe<ButtonBlockPropertyWhereInput>;
  HeroImage: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
};

export type HeroElement = IData & _IComponent & _IContent & {
  __typename?: 'HeroElement';
  CallToAction: Maybe<Link>;
  Heading: Maybe<Scalars['String']['output']>;
  Image: Maybe<ContentReference>;
  RichText: Maybe<RichText>;
  SubHeading: Maybe<Scalars['String']['output']>;
  Video: Maybe<ContentReference>;
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


export type HeroElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeroElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeroElementAutocomplete = {
  __typename?: 'HeroElementAutocomplete';
  CallToAction: Maybe<LinkAutocomplete>;
  Image: Maybe<ContentReferenceAutocomplete>;
  RichText: Maybe<RichTextAutocomplete>;
  Video: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HeroElementFacet = {
  __typename?: 'HeroElementFacet';
  CallToAction: Maybe<LinkFacet>;
  Image: Maybe<ContentReferenceFacet>;
  RichText: Maybe<RichTextFacet>;
  Video: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type HeroElementOrderByInput = {
  CallToAction: InputMaybe<LinkOrderByInput>;
  Image: InputMaybe<ContentReferenceOrderByInput>;
  RichText: InputMaybe<RichTextOrderByInput>;
  Video: InputMaybe<ContentReferenceOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type HeroElementOutput = {
  __typename?: 'HeroElementOutput';
  autocomplete: Maybe<HeroElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeroElementFacet>;
  item: Maybe<HeroElement>;
  items: Maybe<Array<Maybe<HeroElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeroElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroElementWhereInput = {
  CallToAction: InputMaybe<LinkWhereInput>;
  Image: InputMaybe<ContentReferenceWhereInput>;
  RichText: InputMaybe<RichTextWhereInput>;
  Video: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<HeroElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeroElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeroElementWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled: InputMaybe<Scalars['Boolean']['input']>;
  endToken: InputMaybe<Scalars['String']['input']>;
  startToken: InputMaybe<Scalars['String']['input']>;
};

export type HomePageHeroBlock = IData & _IComponent & _IContent & {
  __typename?: 'HomePageHeroBlock';
  HomeHeroBlockHeading: Maybe<Scalars['String']['output']>;
  HomeHeroBlockSubHeading: Maybe<Scalars['String']['output']>;
  HomeHeroButtonBlock: Maybe<ButtonBlockProperty>;
  HomeHeroLeftImage: Maybe<ContentReference>;
  HomeHeroRightImage: Maybe<ContentReference>;
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


export type HomePageHeroBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HomePageHeroBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HomePageHeroBlockAutocomplete = {
  __typename?: 'HomePageHeroBlockAutocomplete';
  HomeHeroButtonBlock: Maybe<ButtonBlockPropertyAutocomplete>;
  HomeHeroLeftImage: Maybe<ContentReferenceAutocomplete>;
  HomeHeroRightImage: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HomePageHeroBlockFacet = {
  __typename?: 'HomePageHeroBlockFacet';
  HomeHeroButtonBlock: Maybe<ButtonBlockPropertyFacet>;
  HomeHeroLeftImage: Maybe<ContentReferenceFacet>;
  HomeHeroRightImage: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type HomePageHeroBlockOrderByInput = {
  HomeHeroButtonBlock: InputMaybe<ButtonBlockPropertyOrderByInput>;
  HomeHeroLeftImage: InputMaybe<ContentReferenceOrderByInput>;
  HomeHeroRightImage: InputMaybe<ContentReferenceOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type HomePageHeroBlockOutput = {
  __typename?: 'HomePageHeroBlockOutput';
  autocomplete: Maybe<HomePageHeroBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HomePageHeroBlockFacet>;
  item: Maybe<HomePageHeroBlock>;
  items: Maybe<Array<Maybe<HomePageHeroBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HomePageHeroBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomePageHeroBlockWhereInput = {
  HomeHeroButtonBlock: InputMaybe<ButtonBlockPropertyWhereInput>;
  HomeHeroLeftImage: InputMaybe<ContentReferenceWhereInput>;
  HomeHeroRightImage: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<HomePageHeroBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HomePageHeroBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HomePageHeroBlockWhereInput>>>;
};

export type HtmlBlock = IData & _IComponent & _IContent & {
  __typename?: 'HtmlBlock';
  HtmlBlockHeading: Maybe<Scalars['String']['output']>;
  HtmlContent: Maybe<RichText>;
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
  HtmlContent: Maybe<RichTextAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HtmlBlockFacet = {
  __typename?: 'HtmlBlockFacet';
  HtmlContent: Maybe<RichTextFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type HtmlBlockOrderByInput = {
  HtmlContent: InputMaybe<RichTextOrderByInput>;
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
  item: Maybe<HtmlBlock>;
  items: Maybe<Array<Maybe<HtmlBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HtmlBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HtmlBlockWhereInput = {
  HtmlContent: InputMaybe<RichTextWhereInput>;
  _and: InputMaybe<Array<InputMaybe<HtmlBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HtmlBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HtmlBlockWhereInput>>>;
};

export type ICompositionComponentNode = {
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
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
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
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
  changeset: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fallbackForLocale: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
  version: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompleteChangesetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteFallbackForLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
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
  changeset: Maybe<Array<Maybe<StringFacet>>>;
  created: Maybe<Array<Maybe<DateFacet>>>;
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  fallbackForLocale: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  lastModified: Maybe<Array<Maybe<DateFacet>>>;
  locale: Maybe<Array<Maybe<StringFacet>>>;
  published: Maybe<Array<Maybe<DateFacet>>>;
  status: Maybe<Array<Maybe<StringFacet>>>;
  types: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
  version: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetChangesetArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
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


export type IContentMetadataFacetFallbackForLocaleArgs = {
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
  changeset: InputMaybe<OrderBy>;
  created: InputMaybe<OrderBy>;
  displayName: InputMaybe<OrderBy>;
  fallbackForLocale: InputMaybe<OrderBy>;
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
  changeset: InputMaybe<StringFilterInput>;
  created: InputMaybe<DateFilterInput>;
  displayName: InputMaybe<SearchableStringFilterInput>;
  fallbackForLocale: InputMaybe<StringFilterInput>;
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
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
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
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  displayOption: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
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
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
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

export type ImageElement = IData & _IComponent & _IContent & {
  __typename?: 'ImageElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  altText: Maybe<Scalars['String']['output']>;
  imageLink: Maybe<ContentReference>;
};


export type ImageElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ImageElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ImageElementAutocomplete = {
  __typename?: 'ImageElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  imageLink: Maybe<ContentReferenceAutocomplete>;
};

export type ImageElementFacet = {
  __typename?: 'ImageElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  imageLink: Maybe<ContentReferenceFacet>;
};

export type ImageElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  imageLink: InputMaybe<ContentReferenceOrderByInput>;
};

export type ImageElementOutput = {
  __typename?: 'ImageElementOutput';
  autocomplete: Maybe<ImageElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ImageElementFacet>;
  item: Maybe<ImageElement>;
  items: Maybe<Array<Maybe<ImageElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ImageElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  imageLink: InputMaybe<ContentReferenceWhereInput>;
};

export type ImageMedia = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'ImageMedia';
  AltText: Maybe<Scalars['String']['output']>;
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
  item: Maybe<ImageMedia>;
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
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
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
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  displayOption: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
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

export type LandingPage = IData & _IContent & _IPage & {
  __typename?: 'LandingPage';
  MainContentArea: Maybe<Array<Maybe<_IContent>>>;
  SeoSettings: Maybe<PageSeoSettingsProperty>;
  TopContentArea: Maybe<Array<Maybe<_IContent>>>;
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


export type LandingPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LandingPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LandingPageAutocomplete = {
  __typename?: 'LandingPageAutocomplete';
  MainContentArea: Maybe<_IContentAutocomplete>;
  SeoSettings: Maybe<PageSeoSettingsPropertyAutocomplete>;
  TopContentArea: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type LandingPageFacet = {
  __typename?: 'LandingPageFacet';
  MainContentArea: Maybe<_IContentFacet>;
  SeoSettings: Maybe<PageSeoSettingsPropertyFacet>;
  TopContentArea: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type LandingPageOrderByInput = {
  MainContentArea: InputMaybe<_IContentOrderByInput>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  TopContentArea: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type LandingPageOutput = {
  __typename?: 'LandingPageOutput';
  autocomplete: Maybe<LandingPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LandingPageFacet>;
  item: Maybe<LandingPage>;
  items: Maybe<Array<Maybe<LandingPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LandingPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LandingPageWhereInput = {
  MainContentArea: InputMaybe<_IContentWhereInput>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  TopContentArea: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
};

export type LayoutContainerBlock = IData & _IComponent & _IContent & {
  __typename?: 'LayoutContainerBlock';
  ColumnsCount: Maybe<Scalars['Int']['output']>;
  ContainerBackgroundColor: Maybe<Scalars['String']['output']>;
  ContainerBackgroundImage: Maybe<ContentReference>;
  ContainerMarginBottom: Maybe<Scalars['String']['output']>;
  ContainerMarginTop: Maybe<Scalars['String']['output']>;
  ContainerPaddingBottom: Maybe<Scalars['String']['output']>;
  ContainerPaddingTop: Maybe<Scalars['String']['output']>;
  GapSize: Maybe<Scalars['String']['output']>;
  LayoutContentArea: Maybe<Array<Maybe<_IContent>>>;
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


export type LayoutContainerBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LayoutContainerBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LayoutContainerBlockAutocomplete = {
  __typename?: 'LayoutContainerBlockAutocomplete';
  ContainerBackgroundImage: Maybe<ContentReferenceAutocomplete>;
  LayoutContentArea: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type LayoutContainerBlockFacet = {
  __typename?: 'LayoutContainerBlockFacet';
  ContainerBackgroundImage: Maybe<ContentReferenceFacet>;
  LayoutContentArea: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type LayoutContainerBlockOrderByInput = {
  ContainerBackgroundImage: InputMaybe<ContentReferenceOrderByInput>;
  LayoutContentArea: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type LayoutContainerBlockOutput = {
  __typename?: 'LayoutContainerBlockOutput';
  autocomplete: Maybe<LayoutContainerBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LayoutContainerBlockFacet>;
  item: Maybe<LayoutContainerBlock>;
  items: Maybe<Array<Maybe<LayoutContainerBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LayoutContainerBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LayoutContainerBlockWhereInput = {
  ContainerBackgroundImage: InputMaybe<ContentReferenceWhereInput>;
  LayoutContentArea: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<LayoutContainerBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LayoutContainerBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LayoutContainerBlockWhereInput>>>;
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
  En = 'en'
}

export type LogoItemBlock = IData & _IComponent & _IContent & {
  __typename?: 'LogoItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  alt: Maybe<Scalars['String']['output']>;
  src: Maybe<Scalars['String']['output']>;
};


export type LogoItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogoItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LogoItemBlockAutocomplete = {
  __typename?: 'LogoItemBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type LogoItemBlockFacet = {
  __typename?: 'LogoItemBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type LogoItemBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type LogoItemBlockOutput = {
  __typename?: 'LogoItemBlockOutput';
  autocomplete: Maybe<LogoItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LogoItemBlockFacet>;
  item: Maybe<LogoItemBlock>;
  items: Maybe<Array<Maybe<LogoItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LogoItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LogoItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
};

export type LogosBlock = IData & _IComponent & _IContent & {
  __typename?: 'LogosBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  logos: Maybe<Array<Maybe<_IContent>>>;
};


export type LogosBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogosBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LogosBlockAutocomplete = {
  __typename?: 'LogosBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  logos: Maybe<_IContentAutocomplete>;
};

export type LogosBlockFacet = {
  __typename?: 'LogosBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  logos: Maybe<_IContentFacet>;
};

export type LogosBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  logos: InputMaybe<_IContentOrderByInput>;
};

export type LogosBlockOutput = {
  __typename?: 'LogosBlockOutput';
  autocomplete: Maybe<LogosBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LogosBlockFacet>;
  item: Maybe<LogosBlock>;
  items: Maybe<Array<Maybe<LogosBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LogosBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LogosBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  logos: InputMaybe<_IContentWhereInput>;
};

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
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

export type MegaMenuGroupBlock = IData & _IComponent & _IContent & {
  __typename?: 'MegaMenuGroupBlock';
  MegaMenuContentArea: Maybe<Array<Maybe<_IContent>>>;
  MegaMenuUrl: Maybe<ContentUrl>;
  MenuMenuHeading: Maybe<Scalars['String']['output']>;
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


export type MegaMenuGroupBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type MegaMenuGroupBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type MegaMenuGroupBlockAutocomplete = {
  __typename?: 'MegaMenuGroupBlockAutocomplete';
  MegaMenuContentArea: Maybe<_IContentAutocomplete>;
  MegaMenuUrl: Maybe<ContentUrlAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type MegaMenuGroupBlockFacet = {
  __typename?: 'MegaMenuGroupBlockFacet';
  MegaMenuContentArea: Maybe<_IContentFacet>;
  MegaMenuUrl: Maybe<ContentUrlFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type MegaMenuGroupBlockOrderByInput = {
  MegaMenuContentArea: InputMaybe<_IContentOrderByInput>;
  MegaMenuUrl: InputMaybe<ContentUrlOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type MegaMenuGroupBlockOutput = {
  __typename?: 'MegaMenuGroupBlockOutput';
  autocomplete: Maybe<MegaMenuGroupBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<MegaMenuGroupBlockFacet>;
  item: Maybe<MegaMenuGroupBlock>;
  items: Maybe<Array<Maybe<MegaMenuGroupBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type MegaMenuGroupBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type MegaMenuGroupBlockWhereInput = {
  MegaMenuContentArea: InputMaybe<_IContentWhereInput>;
  MegaMenuUrl: InputMaybe<ContentUrlWhereInput>;
  _and: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
};

export type MenuNavigationBlock = IData & _IComponent & _IContent & {
  __typename?: 'MenuNavigationBlock';
  MenuNavigationHeading: Maybe<Scalars['String']['output']>;
  NavigationLinks: Maybe<Array<Maybe<Link>>>;
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


export type MenuNavigationBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type MenuNavigationBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type MenuNavigationBlockAutocomplete = {
  __typename?: 'MenuNavigationBlockAutocomplete';
  NavigationLinks: Maybe<LinkAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type MenuNavigationBlockFacet = {
  __typename?: 'MenuNavigationBlockFacet';
  NavigationLinks: Maybe<LinkFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type MenuNavigationBlockOrderByInput = {
  NavigationLinks: InputMaybe<LinkOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type MenuNavigationBlockOutput = {
  __typename?: 'MenuNavigationBlockOutput';
  autocomplete: Maybe<MenuNavigationBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<MenuNavigationBlockFacet>;
  item: Maybe<MenuNavigationBlock>;
  items: Maybe<Array<Maybe<MenuNavigationBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type MenuNavigationBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuNavigationBlockWhereInput = {
  NavigationLinks: InputMaybe<LinkWhereInput>;
  _and: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
};

export type NavItem = IData & _IComponent & _IContent & {
  __typename?: 'NavItem';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  href: Maybe<Scalars['String']['output']>;
  label: Maybe<Scalars['String']['output']>;
};


export type NavItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type NavItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type NavItemAutocomplete = {
  __typename?: 'NavItemAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type NavItemFacet = {
  __typename?: 'NavItemFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type NavItemOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type NavItemOutput = {
  __typename?: 'NavItemOutput';
  autocomplete: Maybe<NavItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<NavItemFacet>;
  item: Maybe<NavItem>;
  items: Maybe<Array<Maybe<NavItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type NavItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
};

export type OdpEmbedBlock = IData & _IComponent & _IContent & {
  __typename?: 'OdpEmbedBlock';
  ContentId: Maybe<Scalars['String']['output']>;
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


export type OdpEmbedBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type OdpEmbedBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type OdpEmbedBlockAutocomplete = {
  __typename?: 'OdpEmbedBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type OdpEmbedBlockFacet = {
  __typename?: 'OdpEmbedBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type OdpEmbedBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type OdpEmbedBlockOutput = {
  __typename?: 'OdpEmbedBlockOutput';
  autocomplete: Maybe<OdpEmbedBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<OdpEmbedBlockFacet>;
  item: Maybe<OdpEmbedBlock>;
  items: Maybe<Array<Maybe<OdpEmbedBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type OdpEmbedBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type OdpEmbedBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type PageSeoSettings = IData & _IComponent & _IContent & {
  __typename?: 'PageSeoSettings';
  GraphType: Maybe<Scalars['String']['output']>;
  MetaDescription: Maybe<Scalars['String']['output']>;
  MetaTitle: Maybe<Scalars['String']['output']>;
  SharingImage: Maybe<ContentReference>;
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


export type PageSeoSettings_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettings_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PageSeoSettingsAutocomplete = {
  __typename?: 'PageSeoSettingsAutocomplete';
  SharingImage: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type PageSeoSettingsFacet = {
  __typename?: 'PageSeoSettingsFacet';
  SharingImage: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type PageSeoSettingsOrderByInput = {
  SharingImage: InputMaybe<ContentReferenceOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type PageSeoSettingsOutput = {
  __typename?: 'PageSeoSettingsOutput';
  autocomplete: Maybe<PageSeoSettingsAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PageSeoSettingsFacet>;
  item: Maybe<PageSeoSettings>;
  items: Maybe<Array<Maybe<PageSeoSettings>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PageSeoSettingsOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageSeoSettingsProperty = {
  __typename?: 'PageSeoSettingsProperty';
  GraphType: Maybe<Scalars['String']['output']>;
  MetaDescription: Maybe<Scalars['String']['output']>;
  MetaTitle: Maybe<Scalars['String']['output']>;
  SharingImage: Maybe<ContentReference>;
};

export type PageSeoSettingsPropertyAutocomplete = {
  __typename?: 'PageSeoSettingsPropertyAutocomplete';
  SharingImage: Maybe<ContentReferenceAutocomplete>;
};

export type PageSeoSettingsPropertyFacet = {
  __typename?: 'PageSeoSettingsPropertyFacet';
  SharingImage: Maybe<ContentReferenceFacet>;
};

export type PageSeoSettingsPropertyOrderByInput = {
  SharingImage: InputMaybe<ContentReferenceOrderByInput>;
};

export type PageSeoSettingsPropertyWhereInput = {
  SharingImage: InputMaybe<ContentReferenceWhereInput>;
};

export type PageSeoSettingsWhereInput = {
  SharingImage: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
};

export type ParagraphElement = IData & _IComponent & _IContent & {
  __typename?: 'ParagraphElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  text: Maybe<RichText>;
};


export type ParagraphElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ParagraphElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ParagraphElementAutocomplete = {
  __typename?: 'ParagraphElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  text: Maybe<RichTextAutocomplete>;
};

export type ParagraphElementFacet = {
  __typename?: 'ParagraphElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  text: Maybe<RichTextFacet>;
};

export type ParagraphElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  text: InputMaybe<RichTextOrderByInput>;
};

export type ParagraphElementOutput = {
  __typename?: 'ParagraphElementOutput';
  autocomplete: Maybe<ParagraphElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ParagraphElementFacet>;
  item: Maybe<ParagraphElement>;
  items: Maybe<Array<Maybe<ParagraphElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ParagraphElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ParagraphElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  text: InputMaybe<RichTextWhereInput>;
};

export type PortfolioGridBlock = IData & _IComponent & _IContent & {
  __typename?: 'PortfolioGridBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  items: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type PortfolioGridBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioGridBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PortfolioGridBlockAutocomplete = {
  __typename?: 'PortfolioGridBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  items: Maybe<_IContentAutocomplete>;
};

export type PortfolioGridBlockFacet = {
  __typename?: 'PortfolioGridBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  items: Maybe<_IContentFacet>;
};

export type PortfolioGridBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  items: InputMaybe<_IContentOrderByInput>;
};

export type PortfolioGridBlockOutput = {
  __typename?: 'PortfolioGridBlockOutput';
  autocomplete: Maybe<PortfolioGridBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PortfolioGridBlockFacet>;
  item: Maybe<PortfolioGridBlock>;
  items: Maybe<Array<Maybe<PortfolioGridBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PortfolioGridBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PortfolioGridBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  items: InputMaybe<_IContentWhereInput>;
};

export type PortfolioItemBlock = IData & _IComponent & _IContent & {
  __typename?: 'PortfolioItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  description: Maybe<Scalars['String']['output']>;
  imageUrl: Maybe<Scalars['String']['output']>;
  link: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type PortfolioItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PortfolioItemBlockAutocomplete = {
  __typename?: 'PortfolioItemBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type PortfolioItemBlockFacet = {
  __typename?: 'PortfolioItemBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type PortfolioItemBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type PortfolioItemBlockOutput = {
  __typename?: 'PortfolioItemBlockOutput';
  autocomplete: Maybe<PortfolioItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PortfolioItemBlockFacet>;
  item: Maybe<PortfolioItemBlock>;
  items: Maybe<Array<Maybe<PortfolioItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PortfolioItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PortfolioItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
};

export type ProfileBlock = IData & _IComponent & _IContent & {
  __typename?: 'ProfileBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  bio: Maybe<Scalars['String']['output']>;
  imageSrc: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ProfileBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ProfileBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ProfileBlockAutocomplete = {
  __typename?: 'ProfileBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ProfileBlockFacet = {
  __typename?: 'ProfileBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ProfileBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ProfileBlockOutput = {
  __typename?: 'ProfileBlockOutput';
  autocomplete: Maybe<ProfileBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ProfileBlockFacet>;
  item: Maybe<ProfileBlock>;
  items: Maybe<Array<Maybe<ProfileBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ProfileBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProfileBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
};

export type Query = {
  __typename?: 'Query';
  AnnouncementElement: Maybe<AnnouncementElementOutput>;
  ArticleListElement: Maybe<ArticleListElementOutput>;
  AvailabilityBlock: Maybe<AvailabilityBlockOutput>;
  BlankExperience: Maybe<BlankExperienceOutput>;
  BlankSection: Maybe<BlankSectionOutput>;
  BlogListingBlock: Maybe<BlogListingBlockOutput>;
  BlogPostPage: Maybe<BlogPostPageOutput>;
  ButtonBlock: Maybe<ButtonBlockOutput>;
  CMSPage: Maybe<CmsPageOutput>;
  CTAElement: Maybe<CtaElementOutput>;
  CardBlock: Maybe<CardBlockOutput>;
  CardElement: Maybe<CardElementOutput>;
  CarouselBlock: Maybe<CarouselBlockOutput>;
  Contact: Maybe<ContactOutput>;
  ContactBlock: Maybe<ContactBlockOutput>;
  ContactElement: Maybe<ContactElementOutput>;
  ContactPage: Maybe<ContactPageOutput>;
  Container: Maybe<ContainerOutput>;
  ContentRecsBlock: Maybe<ContentRecsBlockOutput>;
  ContentRecsElement: Maybe<ContentRecsElementOutput>;
  Data: Maybe<DataOutput>;
  EventElement: Maybe<EventElementOutput>;
  Footer: Maybe<FooterOutput>;
  FooterColumn: Maybe<FooterColumnOutput>;
  FormElement: Maybe<FormElementOutput>;
  GenericMedia: Maybe<GenericMediaOutput>;
  GenericMedia123: Maybe<GenericMedia123Output>;
  Header: Maybe<HeaderOutput>;
  HeadingElement: Maybe<HeadingElementOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  HeroElement: Maybe<HeroElementOutput>;
  HomePageHeroBlock: Maybe<HomePageHeroBlockOutput>;
  HtmlBlock: Maybe<HtmlBlockOutput>;
  ImageElement: Maybe<ImageElementOutput>;
  ImageMedia: Maybe<ImageMediaOutput>;
  LandingPage: Maybe<LandingPageOutput>;
  LayoutContainerBlock: Maybe<LayoutContainerBlockOutput>;
  LogoItemBlock: Maybe<LogoItemBlockOutput>;
  LogosBlock: Maybe<LogosBlockOutput>;
  MegaMenuGroupBlock: Maybe<MegaMenuGroupBlockOutput>;
  MenuNavigationBlock: Maybe<MenuNavigationBlockOutput>;
  NavItem: Maybe<NavItemOutput>;
  OdpEmbedBlock: Maybe<OdpEmbedBlockOutput>;
  PageSeoSettings: Maybe<PageSeoSettingsOutput>;
  ParagraphElement: Maybe<ParagraphElementOutput>;
  PortfolioGridBlock: Maybe<PortfolioGridBlockOutput>;
  PortfolioItemBlock: Maybe<PortfolioItemBlockOutput>;
  ProfileBlock: Maybe<ProfileBlockOutput>;
  QuoteBlock: Maybe<QuoteBlockOutput>;
  SEOExperience: Maybe<SeoExperienceOutput>;
  ServiceItem: Maybe<ServiceItemOutput>;
  ServicesBlock: Maybe<ServicesBlockOutput>;
  SocialLink: Maybe<SocialLinkOutput>;
  StandardPage: Maybe<StandardPageOutput>;
  StartPage: Maybe<StartPageOutput>;
  StoryBlock: Maybe<StoryBlockOutput>;
  SysContentFolder: Maybe<SysContentFolderOutput>;
  TeamElement: Maybe<TeamElementOutput>;
  TestimonialElement: Maybe<TestimonialElementOutput>;
  TestimonialItem: Maybe<TestimonialItemOutput>;
  TestimonialItemBlock: Maybe<TestimonialItemBlockOutput>;
  TestimonialsBlock: Maybe<TestimonialsBlockOutput>;
  TextBlock: Maybe<TextBlockOutput>;
  Video: Maybe<VideoOutput>;
  VideoElement: Maybe<VideoElementOutput>;
  VideoMedia: Maybe<VideoMediaOutput>;
  _Component: Maybe<_ComponentOutput>;
  _Content: Maybe<_ContentOutput>;
  _Experience: Maybe<_ExperienceOutput>;
  _Folder: Maybe<_FolderOutput>;
  _Image: Maybe<_ImageOutput>;
  _Media: Maybe<_MediaOutput>;
  _Page: Maybe<_PageOutput>;
  _Section: Maybe<_SectionOutput>;
  _Video: Maybe<_VideoOutput>;
};


export type QueryAnnouncementElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AnnouncementElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<AnnouncementElementWhereInput>;
};


export type QueryArticleListElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticleListElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ArticleListElementWhereInput>;
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


export type QueryBlogListingBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogListingBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BlogListingBlockWhereInput>;
};


export type QueryBlogPostPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogPostPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BlogPostPageWhereInput>;
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


export type QueryCtaElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CtaElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CtaElementWhereInput>;
};


export type QueryCardBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CardBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CardBlockWhereInput>;
};


export type QueryCardElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CardElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CardElementWhereInput>;
};


export type QueryCarouselBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CarouselBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CarouselBlockWhereInput>;
};


export type QueryContactArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContactWhereInput>;
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


export type QueryContactElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContactElementWhereInput>;
};


export type QueryContactPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContactPageWhereInput>;
};


export type QueryContainerArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContainerOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContainerWhereInput>;
};


export type QueryContentRecsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContentRecsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContentRecsBlockWhereInput>;
};


export type QueryContentRecsElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContentRecsElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContentRecsElementWhereInput>;
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


export type QueryEventElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<EventElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<EventElementWhereInput>;
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


export type QueryFooterColumnArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterColumnOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FooterColumnWhereInput>;
};


export type QueryFormElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FormElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FormElementWhereInput>;
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


export type QueryGenericMedia123Args = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMedia123OrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<GenericMedia123WhereInput>;
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


export type QueryHeadingElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeadingElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HeadingElementWhereInput>;
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


export type QueryHeroElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeroElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HeroElementWhereInput>;
};


export type QueryHomePageHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HomePageHeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HomePageHeroBlockWhereInput>;
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


export type QueryImageElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ImageElementWhereInput>;
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


export type QueryLandingPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LandingPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<LandingPageWhereInput>;
};


export type QueryLayoutContainerBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LayoutContainerBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<LayoutContainerBlockWhereInput>;
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


export type QueryMegaMenuGroupBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryMenuNavigationBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MenuNavigationBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<MenuNavigationBlockWhereInput>;
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


export type QueryOdpEmbedBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OdpEmbedBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<OdpEmbedBlockWhereInput>;
};


export type QueryPageSeoSettingsArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PageSeoSettingsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<PageSeoSettingsWhereInput>;
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


export type QueryQuoteBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<QuoteBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<QuoteBlockWhereInput>;
};


export type QuerySeoExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SeoExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SeoExperienceWhereInput>;
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


export type QuerySocialLinkArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SocialLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SocialLinkWhereInput>;
};


export type QueryStandardPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StandardPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<StandardPageWhereInput>;
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


export type QuerySysContentFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryTeamElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TeamElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TeamElementWhereInput>;
};


export type QueryTestimonialElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TestimonialElementWhereInput>;
};


export type QueryTestimonialItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TestimonialItemWhereInput>;
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


export type QueryTextBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TextBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TextBlockWhereInput>;
};


export type QueryVideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<VideoWhereInput>;
};


export type QueryVideoElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<VideoElementWhereInput>;
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
  AnnouncementElement: Maybe<AnnouncementElementOutput>;
  ArticleListElement: Maybe<ArticleListElementOutput>;
  AvailabilityBlock: Maybe<AvailabilityBlockOutput>;
  BlankExperience: Maybe<BlankExperienceOutput>;
  BlankSection: Maybe<BlankSectionOutput>;
  BlogListingBlock: Maybe<BlogListingBlockOutput>;
  BlogPostPage: Maybe<BlogPostPageOutput>;
  ButtonBlock: Maybe<ButtonBlockOutput>;
  CMSPage: Maybe<CmsPageOutput>;
  CTAElement: Maybe<CtaElementOutput>;
  CardBlock: Maybe<CardBlockOutput>;
  CardElement: Maybe<CardElementOutput>;
  CarouselBlock: Maybe<CarouselBlockOutput>;
  Contact: Maybe<ContactOutput>;
  ContactBlock: Maybe<ContactBlockOutput>;
  ContactElement: Maybe<ContactElementOutput>;
  ContactPage: Maybe<ContactPageOutput>;
  Container: Maybe<ContainerOutput>;
  ContentRecsBlock: Maybe<ContentRecsBlockOutput>;
  ContentRecsElement: Maybe<ContentRecsElementOutput>;
  Data: Maybe<DataOutput>;
  EventElement: Maybe<EventElementOutput>;
  Footer: Maybe<FooterOutput>;
  FooterColumn: Maybe<FooterColumnOutput>;
  FormElement: Maybe<FormElementOutput>;
  GenericMedia: Maybe<GenericMediaOutput>;
  GenericMedia123: Maybe<GenericMedia123Output>;
  Header: Maybe<HeaderOutput>;
  HeadingElement: Maybe<HeadingElementOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  HeroElement: Maybe<HeroElementOutput>;
  HomePageHeroBlock: Maybe<HomePageHeroBlockOutput>;
  HtmlBlock: Maybe<HtmlBlockOutput>;
  ImageElement: Maybe<ImageElementOutput>;
  ImageMedia: Maybe<ImageMediaOutput>;
  LandingPage: Maybe<LandingPageOutput>;
  LayoutContainerBlock: Maybe<LayoutContainerBlockOutput>;
  LogoItemBlock: Maybe<LogoItemBlockOutput>;
  LogosBlock: Maybe<LogosBlockOutput>;
  MegaMenuGroupBlock: Maybe<MegaMenuGroupBlockOutput>;
  MenuNavigationBlock: Maybe<MenuNavigationBlockOutput>;
  NavItem: Maybe<NavItemOutput>;
  OdpEmbedBlock: Maybe<OdpEmbedBlockOutput>;
  PageSeoSettings: Maybe<PageSeoSettingsOutput>;
  ParagraphElement: Maybe<ParagraphElementOutput>;
  PortfolioGridBlock: Maybe<PortfolioGridBlockOutput>;
  PortfolioItemBlock: Maybe<PortfolioItemBlockOutput>;
  ProfileBlock: Maybe<ProfileBlockOutput>;
  QuoteBlock: Maybe<QuoteBlockOutput>;
  SEOExperience: Maybe<SeoExperienceOutput>;
  ServiceItem: Maybe<ServiceItemOutput>;
  ServicesBlock: Maybe<ServicesBlockOutput>;
  SocialLink: Maybe<SocialLinkOutput>;
  StandardPage: Maybe<StandardPageOutput>;
  StartPage: Maybe<StartPageOutput>;
  StoryBlock: Maybe<StoryBlockOutput>;
  SysContentFolder: Maybe<SysContentFolderOutput>;
  TeamElement: Maybe<TeamElementOutput>;
  TestimonialElement: Maybe<TestimonialElementOutput>;
  TestimonialItem: Maybe<TestimonialItemOutput>;
  TestimonialItemBlock: Maybe<TestimonialItemBlockOutput>;
  TestimonialsBlock: Maybe<TestimonialsBlockOutput>;
  TextBlock: Maybe<TextBlockOutput>;
  Video: Maybe<VideoOutput>;
  VideoElement: Maybe<VideoElementOutput>;
  VideoMedia: Maybe<VideoMediaOutput>;
  _Component: Maybe<_ComponentOutput>;
  _Content: Maybe<_ContentOutput>;
  _Experience: Maybe<_ExperienceOutput>;
  _Folder: Maybe<_FolderOutput>;
  _Image: Maybe<_ImageOutput>;
  _Media: Maybe<_MediaOutput>;
  _Page: Maybe<_PageOutput>;
  _Section: Maybe<_SectionOutput>;
  _Video: Maybe<_VideoOutput>;
};


export type QueryRefAnnouncementElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AnnouncementElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<AnnouncementElementWhereInput>;
};


export type QueryRefArticleListElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticleListElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ArticleListElementWhereInput>;
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


export type QueryRefBlogListingBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogListingBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BlogListingBlockWhereInput>;
};


export type QueryRefBlogPostPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogPostPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BlogPostPageWhereInput>;
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


export type QueryRefCtaElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CtaElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CtaElementWhereInput>;
};


export type QueryRefCardBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CardBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CardBlockWhereInput>;
};


export type QueryRefCardElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CardElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CardElementWhereInput>;
};


export type QueryRefCarouselBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CarouselBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CarouselBlockWhereInput>;
};


export type QueryRefContactArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContactWhereInput>;
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


export type QueryRefContactElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContactElementWhereInput>;
};


export type QueryRefContactPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContactPageWhereInput>;
};


export type QueryRefContainerArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContainerOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContainerWhereInput>;
};


export type QueryRefContentRecsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContentRecsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContentRecsBlockWhereInput>;
};


export type QueryRefContentRecsElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContentRecsElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContentRecsElementWhereInput>;
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


export type QueryRefEventElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<EventElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<EventElementWhereInput>;
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


export type QueryRefFooterColumnArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterColumnOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FooterColumnWhereInput>;
};


export type QueryRefFormElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FormElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FormElementWhereInput>;
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


export type QueryRefGenericMedia123Args = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMedia123OrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<GenericMedia123WhereInput>;
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


export type QueryRefHeadingElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeadingElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HeadingElementWhereInput>;
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


export type QueryRefHeroElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeroElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HeroElementWhereInput>;
};


export type QueryRefHomePageHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HomePageHeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HomePageHeroBlockWhereInput>;
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


export type QueryRefImageElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ImageElementWhereInput>;
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


export type QueryRefLandingPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LandingPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<LandingPageWhereInput>;
};


export type QueryRefLayoutContainerBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LayoutContainerBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<LayoutContainerBlockWhereInput>;
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


export type QueryRefMegaMenuGroupBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryRefMenuNavigationBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MenuNavigationBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<MenuNavigationBlockWhereInput>;
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


export type QueryRefOdpEmbedBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OdpEmbedBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<OdpEmbedBlockWhereInput>;
};


export type QueryRefPageSeoSettingsArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PageSeoSettingsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<PageSeoSettingsWhereInput>;
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


export type QueryRefQuoteBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<QuoteBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<QuoteBlockWhereInput>;
};


export type QueryRefSeoExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SeoExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SeoExperienceWhereInput>;
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


export type QueryRefSocialLinkArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SocialLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SocialLinkWhereInput>;
};


export type QueryRefStandardPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StandardPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<StandardPageWhereInput>;
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


export type QueryRefSysContentFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefTeamElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TeamElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TeamElementWhereInput>;
};


export type QueryRefTestimonialElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TestimonialElementWhereInput>;
};


export type QueryRefTestimonialItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TestimonialItemWhereInput>;
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


export type QueryRefTextBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TextBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TextBlockWhereInput>;
};


export type QueryRefVideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<VideoWhereInput>;
};


export type QueryRefVideoElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<VideoElementWhereInput>;
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

export type QuoteBlock = IData & _IComponent & _IContent & {
  __typename?: 'QuoteBlock';
  QuoteActive: Maybe<Scalars['Boolean']['output']>;
  QuoteColor: Maybe<Scalars['String']['output']>;
  QuoteProfileLocation: Maybe<Scalars['String']['output']>;
  QuoteProfileName: Maybe<Scalars['String']['output']>;
  QuoteProfilePicture: Maybe<ContentReference>;
  QuoteText: Maybe<Scalars['String']['output']>;
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


export type QuoteBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type QuoteBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type QuoteBlockAutocomplete = {
  __typename?: 'QuoteBlockAutocomplete';
  QuoteProfilePicture: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type QuoteBlockFacet = {
  __typename?: 'QuoteBlockFacet';
  QuoteProfilePicture: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type QuoteBlockOrderByInput = {
  QuoteProfilePicture: InputMaybe<ContentReferenceOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type QuoteBlockOutput = {
  __typename?: 'QuoteBlockOutput';
  autocomplete: Maybe<QuoteBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<QuoteBlockFacet>;
  item: Maybe<QuoteBlock>;
  items: Maybe<Array<Maybe<QuoteBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type QuoteBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuoteBlockWhereInput = {
  QuoteProfilePicture: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
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

export type SeoExperience = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'SEOExperience';
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
  keywords: Maybe<Scalars['String']['output']>;
  shortDescription: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type SeoExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SeoExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SeoExperienceAutocomplete = {
  __typename?: 'SEOExperienceAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type SeoExperienceFacet = {
  __typename?: 'SEOExperienceFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type SeoExperienceOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type SeoExperienceOutput = {
  __typename?: 'SEOExperienceOutput';
  autocomplete: Maybe<SeoExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SeoExperienceFacet>;
  item: Maybe<SeoExperience>;
  items: Maybe<Array<Maybe<SeoExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SeoExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SeoExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SeoExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SeoExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SeoExperienceWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
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

export type ServiceItem = IData & _IComponent & _IContent & {
  __typename?: 'ServiceItem';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  description: Maybe<Scalars['String']['output']>;
  icon: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ServiceItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServiceItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ServiceItemAutocomplete = {
  __typename?: 'ServiceItemAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ServiceItemFacet = {
  __typename?: 'ServiceItemFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ServiceItemOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ServiceItemOutput = {
  __typename?: 'ServiceItemOutput';
  autocomplete: Maybe<ServiceItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ServiceItemFacet>;
  item: Maybe<ServiceItem>;
  items: Maybe<Array<Maybe<ServiceItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ServiceItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
};

export type ServicesBlock = IData & _IComponent & _IContent & {
  __typename?: 'ServicesBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  services: Maybe<Array<Maybe<_IContent>>>;
};


export type ServicesBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServicesBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ServicesBlockAutocomplete = {
  __typename?: 'ServicesBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  services: Maybe<_IContentAutocomplete>;
};

export type ServicesBlockFacet = {
  __typename?: 'ServicesBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  services: Maybe<_IContentFacet>;
};

export type ServicesBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  services: InputMaybe<_IContentOrderByInput>;
};

export type ServicesBlockOutput = {
  __typename?: 'ServicesBlockOutput';
  autocomplete: Maybe<ServicesBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ServicesBlockFacet>;
  item: Maybe<ServicesBlock>;
  items: Maybe<Array<Maybe<ServicesBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ServicesBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServicesBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  services: InputMaybe<_IContentWhereInput>;
};

export type SocialLink = IData & _IComponent & _IContent & {
  __typename?: 'SocialLink';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  href: Maybe<Scalars['String']['output']>;
  platform: Maybe<Scalars['String']['output']>;
};


export type SocialLink_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SocialLink_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SocialLinkAutocomplete = {
  __typename?: 'SocialLinkAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SocialLinkFacet = {
  __typename?: 'SocialLinkFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SocialLinkOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SocialLinkOutput = {
  __typename?: 'SocialLinkOutput';
  autocomplete: Maybe<SocialLinkAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SocialLinkFacet>;
  item: Maybe<SocialLink>;
  items: Maybe<Array<Maybe<SocialLink>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SocialLinkOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SocialLinkWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
};

export type StandardPage = IData & _IContent & _IPage & {
  __typename?: 'StandardPage';
  MainBody: Maybe<RichText>;
  SeoSettings: Maybe<PageSeoSettingsProperty>;
  StandardPageHeading: Maybe<Scalars['String']['output']>;
  StandardPromoImage: Maybe<ContentReference>;
  StandardSubHeading: Maybe<Scalars['String']['output']>;
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


export type StandardPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StandardPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type StandardPageAutocomplete = {
  __typename?: 'StandardPageAutocomplete';
  MainBody: Maybe<RichTextAutocomplete>;
  SeoSettings: Maybe<PageSeoSettingsPropertyAutocomplete>;
  StandardPromoImage: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type StandardPageFacet = {
  __typename?: 'StandardPageFacet';
  MainBody: Maybe<RichTextFacet>;
  SeoSettings: Maybe<PageSeoSettingsPropertyFacet>;
  StandardPromoImage: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type StandardPageOrderByInput = {
  MainBody: InputMaybe<RichTextOrderByInput>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  StandardPromoImage: InputMaybe<ContentReferenceOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type StandardPageOutput = {
  __typename?: 'StandardPageOutput';
  autocomplete: Maybe<StandardPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<StandardPageFacet>;
  item: Maybe<StandardPage>;
  items: Maybe<Array<Maybe<StandardPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type StandardPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type StandardPageWhereInput = {
  MainBody: InputMaybe<RichTextWhereInput>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  StandardPromoImage: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<StandardPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<StandardPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<StandardPageWhereInput>>>;
};

export type StartPage = IData & _IContent & _IPage & {
  __typename?: 'StartPage';
  FooterNavigationContentArea: Maybe<Array<Maybe<_IContent>>>;
  FooterNavigationCopyrightText: Maybe<Scalars['String']['output']>;
  FooterNavigationSubLinks: Maybe<Array<Maybe<Link>>>;
  HomePageHeroContentArea: Maybe<Array<Maybe<_IContent>>>;
  HomePageMainContentArea: Maybe<Array<Maybe<_IContent>>>;
  MainNavigationContentArea: Maybe<Array<Maybe<_IContent>>>;
  SeoSettings: Maybe<PageSeoSettingsProperty>;
  SiteImageLogo: Maybe<ContentReference>;
  UtilityNavigationContentArea: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  blocks: Maybe<Array<Maybe<_IContent>>>;
  keywords: Maybe<Scalars['String']['output']>;
  shortDescription: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type StartPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StartPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type StartPageAutocomplete = {
  __typename?: 'StartPageAutocomplete';
  FooterNavigationContentArea: Maybe<_IContentAutocomplete>;
  FooterNavigationSubLinks: Maybe<LinkAutocomplete>;
  HomePageHeroContentArea: Maybe<_IContentAutocomplete>;
  HomePageMainContentArea: Maybe<_IContentAutocomplete>;
  MainNavigationContentArea: Maybe<_IContentAutocomplete>;
  SeoSettings: Maybe<PageSeoSettingsPropertyAutocomplete>;
  SiteImageLogo: Maybe<ContentReferenceAutocomplete>;
  UtilityNavigationContentArea: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  blocks: Maybe<_IContentAutocomplete>;
};

export type StartPageFacet = {
  __typename?: 'StartPageFacet';
  FooterNavigationContentArea: Maybe<_IContentFacet>;
  FooterNavigationSubLinks: Maybe<LinkFacet>;
  HomePageHeroContentArea: Maybe<_IContentFacet>;
  HomePageMainContentArea: Maybe<_IContentFacet>;
  MainNavigationContentArea: Maybe<_IContentFacet>;
  SeoSettings: Maybe<PageSeoSettingsPropertyFacet>;
  SiteImageLogo: Maybe<ContentReferenceFacet>;
  UtilityNavigationContentArea: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  blocks: Maybe<_IContentFacet>;
};

export type StartPageOrderByInput = {
  FooterNavigationContentArea: InputMaybe<_IContentOrderByInput>;
  FooterNavigationSubLinks: InputMaybe<LinkOrderByInput>;
  HomePageHeroContentArea: InputMaybe<_IContentOrderByInput>;
  HomePageMainContentArea: InputMaybe<_IContentOrderByInput>;
  MainNavigationContentArea: InputMaybe<_IContentOrderByInput>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  SiteImageLogo: InputMaybe<ContentReferenceOrderByInput>;
  UtilityNavigationContentArea: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  blocks: InputMaybe<_IContentOrderByInput>;
};

export type StartPageOutput = {
  __typename?: 'StartPageOutput';
  autocomplete: Maybe<StartPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<StartPageFacet>;
  item: Maybe<StartPage>;
  items: Maybe<Array<Maybe<StartPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type StartPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type StartPageWhereInput = {
  FooterNavigationContentArea: InputMaybe<_IContentWhereInput>;
  FooterNavigationSubLinks: InputMaybe<LinkWhereInput>;
  HomePageHeroContentArea: InputMaybe<_IContentWhereInput>;
  HomePageMainContentArea: InputMaybe<_IContentWhereInput>;
  MainNavigationContentArea: InputMaybe<_IContentWhereInput>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  SiteImageLogo: InputMaybe<ContentReferenceWhereInput>;
  UtilityNavigationContentArea: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  blocks: InputMaybe<_IContentWhereInput>;
};

export type StoryBlock = IData & _IComponent & _IContent & {
  __typename?: 'StoryBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  highlights: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  story: Maybe<Scalars['String']['output']>;
};


export type StoryBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StoryBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type StoryBlockAutocomplete = {
  __typename?: 'StoryBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type StoryBlockFacet = {
  __typename?: 'StoryBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type StoryBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type StoryBlockOutput = {
  __typename?: 'StoryBlockOutput';
  autocomplete: Maybe<StoryBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<StoryBlockFacet>;
  item: Maybe<StoryBlock>;
  items: Maybe<Array<Maybe<StoryBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type StoryBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type StoryBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
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
  item: Maybe<SysContentFolder>;
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

export type TeamElement = IData & _IComponent & _IContent & {
  __typename?: 'TeamElement';
  Heading: Maybe<Scalars['String']['output']>;
  Subheading: Maybe<Scalars['String']['output']>;
  TeamMembers: Maybe<Array<Maybe<ContentReference>>>;
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


export type TeamElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TeamElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TeamElementAutocomplete = {
  __typename?: 'TeamElementAutocomplete';
  TeamMembers: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TeamElementFacet = {
  __typename?: 'TeamElementFacet';
  TeamMembers: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TeamElementOrderByInput = {
  TeamMembers: InputMaybe<ContentReferenceOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TeamElementOutput = {
  __typename?: 'TeamElementOutput';
  autocomplete: Maybe<TeamElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TeamElementFacet>;
  item: Maybe<TeamElement>;
  items: Maybe<Array<Maybe<TeamElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TeamElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TeamElementWhereInput = {
  TeamMembers: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<TeamElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TeamElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TeamElementWhereInput>>>;
};

export type TestimonialElement = IData & _IComponent & _IContent & {
  __typename?: 'TestimonialElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  customerImage: Maybe<ContentReference>;
  customerLocation: Maybe<Scalars['String']['output']>;
  customerName: Maybe<Scalars['String']['output']>;
  referenceText: Maybe<RichText>;
  referenceTitle: Maybe<Scalars['String']['output']>;
};


export type TestimonialElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialElementAutocomplete = {
  __typename?: 'TestimonialElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  customerImage: Maybe<ContentReferenceAutocomplete>;
  referenceText: Maybe<RichTextAutocomplete>;
};

export type TestimonialElementFacet = {
  __typename?: 'TestimonialElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  customerImage: Maybe<ContentReferenceFacet>;
  referenceText: Maybe<RichTextFacet>;
};

export type TestimonialElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  customerImage: InputMaybe<ContentReferenceOrderByInput>;
  referenceText: InputMaybe<RichTextOrderByInput>;
};

export type TestimonialElementOutput = {
  __typename?: 'TestimonialElementOutput';
  autocomplete: Maybe<TestimonialElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialElementFacet>;
  item: Maybe<TestimonialElement>;
  items: Maybe<Array<Maybe<TestimonialElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  customerImage: InputMaybe<ContentReferenceWhereInput>;
  referenceText: InputMaybe<RichTextWhereInput>;
};

export type TestimonialItem = IData & _IComponent & _IContent & {
  __typename?: 'TestimonialItem';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  avatarSrc: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  fullName: Maybe<Scalars['String']['output']>;
  position: Maybe<Scalars['String']['output']>;
};


export type TestimonialItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialItemAutocomplete = {
  __typename?: 'TestimonialItemAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TestimonialItemBlock = IData & _IComponent & _IContent & {
  __typename?: 'TestimonialItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  avatarSrc: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  fullName: Maybe<Scalars['String']['output']>;
  position: Maybe<Scalars['String']['output']>;
};


export type TestimonialItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialItemBlockAutocomplete = {
  __typename?: 'TestimonialItemBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TestimonialItemBlockFacet = {
  __typename?: 'TestimonialItemBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TestimonialItemBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialItemBlockOutput = {
  __typename?: 'TestimonialItemBlockOutput';
  autocomplete: Maybe<TestimonialItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialItemBlockFacet>;
  item: Maybe<TestimonialItemBlock>;
  items: Maybe<Array<Maybe<TestimonialItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
};

export type TestimonialItemFacet = {
  __typename?: 'TestimonialItemFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TestimonialItemOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialItemOutput = {
  __typename?: 'TestimonialItemOutput';
  autocomplete: Maybe<TestimonialItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialItemFacet>;
  item: Maybe<TestimonialItem>;
  items: Maybe<Array<Maybe<TestimonialItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
};

export type TestimonialsBlock = IData & _IComponent & _IContent & {
  __typename?: 'TestimonialsBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  testimonials: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type TestimonialsBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialsBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialsBlockAutocomplete = {
  __typename?: 'TestimonialsBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  testimonials: Maybe<_IContentAutocomplete>;
};

export type TestimonialsBlockFacet = {
  __typename?: 'TestimonialsBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  testimonials: Maybe<_IContentFacet>;
};

export type TestimonialsBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  testimonials: InputMaybe<_IContentOrderByInput>;
};

export type TestimonialsBlockOutput = {
  __typename?: 'TestimonialsBlockOutput';
  autocomplete: Maybe<TestimonialsBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialsBlockFacet>;
  item: Maybe<TestimonialsBlock>;
  items: Maybe<Array<Maybe<TestimonialsBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialsBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialsBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  testimonials: InputMaybe<_IContentWhereInput>;
};

export type TextBlock = IData & _IComponent & _IContent & {
  __typename?: 'TextBlock';
  TextBlockDescription: Maybe<RichText>;
  TextBlockHeading: Maybe<Scalars['String']['output']>;
  TextBlockHeadingSize: Maybe<Scalars['String']['output']>;
  TextBlockOverline: Maybe<Scalars['String']['output']>;
  TextBlockWidth: Maybe<Scalars['String']['output']>;
  TextCenter: Maybe<Scalars['Boolean']['output']>;
  TextClassName: Maybe<Scalars['String']['output']>;
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


export type TextBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TextBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TextBlockAutocomplete = {
  __typename?: 'TextBlockAutocomplete';
  TextBlockDescription: Maybe<RichTextAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TextBlockFacet = {
  __typename?: 'TextBlockFacet';
  TextBlockDescription: Maybe<RichTextFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TextBlockOrderByInput = {
  TextBlockDescription: InputMaybe<RichTextOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TextBlockOutput = {
  __typename?: 'TextBlockOutput';
  autocomplete: Maybe<TextBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TextBlockFacet>;
  item: Maybe<TextBlock>;
  items: Maybe<Array<Maybe<TextBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TextBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TextBlockWhereInput = {
  TextBlockDescription: InputMaybe<RichTextWhereInput>;
  _and: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
};

export type Video = IData & _IContent & _IMedia & _IVideo & {
  __typename?: 'Video';
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


export type Video_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Video_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type VideoAutocomplete = {
  __typename?: 'VideoAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type VideoElement = IData & _IComponent & _IContent & {
  __typename?: 'VideoElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  placeholder: Maybe<ContentReference>;
  title: Maybe<Scalars['String']['output']>;
  video: Maybe<ContentReference>;
};


export type VideoElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VideoElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type VideoElementAutocomplete = {
  __typename?: 'VideoElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  placeholder: Maybe<ContentReferenceAutocomplete>;
  video: Maybe<ContentReferenceAutocomplete>;
};

export type VideoElementFacet = {
  __typename?: 'VideoElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  placeholder: Maybe<ContentReferenceFacet>;
  video: Maybe<ContentReferenceFacet>;
};

export type VideoElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  placeholder: InputMaybe<ContentReferenceOrderByInput>;
  video: InputMaybe<ContentReferenceOrderByInput>;
};

export type VideoElementOutput = {
  __typename?: 'VideoElementOutput';
  autocomplete: Maybe<VideoElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<VideoElementFacet>;
  item: Maybe<VideoElement>;
  items: Maybe<Array<Maybe<VideoElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type VideoElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  placeholder: InputMaybe<ContentReferenceWhereInput>;
  video: InputMaybe<ContentReferenceWhereInput>;
};

export type VideoFacet = {
  __typename?: 'VideoFacet';
  _metadata: Maybe<IContentMetadataFacet>;
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
  item: Maybe<VideoMedia>;
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

export type VideoOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type VideoOutput = {
  __typename?: 'VideoOutput';
  autocomplete: Maybe<VideoAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<VideoFacet>;
  item: Maybe<Video>;
  items: Maybe<Array<Maybe<Video>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type VideoOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoWhereInput = {
  _and: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
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
  item: Maybe<_IComponent>;
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
  item: Maybe<_IContent>;
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
  item: Maybe<_IExperience>;
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
  item: Maybe<_IFolder>;
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
  item: Maybe<_IImage>;
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
  item: Maybe<_IMedia>;
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
  item: Maybe<_IPage>;
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
  item: Maybe<_ISection>;
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
  item: Maybe<_IVideo>;
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

export type AllPagesQueryVariables = Exact<{
  pageType: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type AllPagesQuery = { __typename?: 'Query', _Content: { __typename?: '_ContentOutput', items: Array<{ __typename?: 'AnnouncementElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ArticleListElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'AvailabilityBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlankExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlankSection', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlogListingBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlogPostPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ButtonBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CMSPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CTAElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CardBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CardElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CarouselBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Contact', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContactBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContactElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContactPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Container', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContentRecsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContentRecsElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'EventElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Footer', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'FooterColumn', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'FormElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'GenericMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'GenericMedia123', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Header', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HeadingElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HeroBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HeroElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HomePageHeroBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HtmlBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ImageElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ImageMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LandingPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LayoutContainerBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LogoItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LogosBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'MegaMenuGroupBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'MenuNavigationBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'NavItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'OdpEmbedBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PageSeoSettings', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ParagraphElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PortfolioGridBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PortfolioItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ProfileBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'QuoteBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SEOExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ServiceItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ServicesBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SocialLink', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StandardPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StartPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StoryBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SysContentFolder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TeamElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TextBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Video', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'VideoElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'VideoMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Component', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Content', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Experience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Folder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Image', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Media', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Page', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Section', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Video', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | null> | null } | null };

export type GetContentByGuidQueryVariables = Exact<{
  guid: InputMaybe<Scalars['String']['input']>;
}>;


export type GetContentByGuidQuery = { __typename?: 'Query', _Content: { __typename?: '_ContentOutput', item: { __typename?: 'AnnouncementElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ArticleListElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'AvailabilityBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlankExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlankSection', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlogListingBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlogPostPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ButtonBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CMSPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CTAElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CardBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CardElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CarouselBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Contact', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContactBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContactElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContactPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Container', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContentRecsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContentRecsElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'EventElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Footer', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'FooterColumn', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'FormElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'GenericMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'GenericMedia123', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Header', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HeadingElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HeroBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HeroElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HomePageHeroBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HtmlBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ImageElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ImageMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LandingPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LayoutContainerBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LogoItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LogosBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'MegaMenuGroupBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'MenuNavigationBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'NavItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'OdpEmbedBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PageSeoSettings', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ParagraphElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PortfolioGridBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PortfolioItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ProfileBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'QuoteBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SEOExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ServiceItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ServicesBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SocialLink', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StandardPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StartPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StoryBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SysContentFolder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TeamElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TextBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Video', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'VideoElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'VideoMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Component', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Content', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Experience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Folder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Image', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Media', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Page', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Section', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Video', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | null } | null };

export type GetFooterQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetFooterQuery = { __typename?: 'Query', Footer: { __typename?: 'FooterOutput', item: { __typename?: 'Footer', copyrightText: string | null, socialLinks: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink', platform: string | null, href: string | null } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null, columns: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn', title: string | null, links: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem', label: string | null, href: string | null } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null } | null };

export type GetHeaderQueryVariables = Exact<{
  locale: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetHeaderQuery = { __typename?: 'Query', Header: { __typename?: 'HeaderOutput', item: { __typename?: 'Header', logo: string | null, ctaText: string | null, ctaHref: string | null, navItems: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem', label: string | null, href: string | null } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null } | null };

export type GetPageByUrlQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPageByUrlQuery = { __typename?: 'Query', CMSPage: { __typename?: 'CMSPageOutput', item: { __typename?: 'CMSPage', title: string | null, shortDescription: string | null, keywords: string | null, _modified: any | null, blocks: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null } | null };

export type GetStartPageQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetStartPageQuery = { __typename?: 'Query', StartPage: { __typename?: 'StartPageOutput', item: { __typename?: 'StartPage', title: string | null, shortDescription: string | null, keywords: string | null, blocks: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null } | null };

export type GetVisualBuilderBySlugQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetVisualBuilderBySlugQuery = { __typename?: 'Query', SEOExperience: { __typename?: 'SEOExperienceOutput', item: { __typename?: 'SEOExperience', title: string | null, shortDescription: string | null, keywords: string | null, composition: { __typename?: 'CompositionStructureNode', nodes: Array<{ __typename?: 'CompositionComponentNode', nodeType: string | null, key: string | null, component: { __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'ButtonBlock' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContactElement' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', nodeType: string | null, key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, nodeType: string | null, rows: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, columns: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, elements: Array<{ __typename?: 'CompositionComponentNode', key: string | null, component: { __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'ButtonBlock' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContactElement' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null> | null } | null> | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null } | null } | null };

export type GetAllPagesVersionByUrlQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllPagesVersionByUrlQuery = { __typename?: 'Query', CMSPage: { __typename?: 'CMSPageOutput', items: Array<{ __typename?: 'CMSPage', title: string | null, shortDescription: string | null, keywords: string | null, _modified: any | null, _metadata: { __typename?: 'ContentMetadata', version: string | null } | { __typename?: 'InstanceMetadata', version: string | null } | { __typename?: 'ItemMetadata', version: string | null } | { __typename?: 'MediaMetadata', version: string | null } | null, blocks: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type GetAllStartPageVersionsQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetAllStartPageVersionsQuery = { __typename?: 'Query', StartPage: { __typename?: 'StartPageOutput', items: Array<{ __typename?: 'StartPage', title: string | null, shortDescription: string | null, keywords: string | null, _metadata: { __typename?: 'ContentMetadata', version: string | null } | { __typename?: 'InstanceMetadata', version: string | null } | { __typename?: 'ItemMetadata', version: string | null } | { __typename?: 'MediaMetadata', version: string | null } | null, blocks: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type GetAllVisualBuilderVesrionsBySlugQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllVisualBuilderVesrionsBySlugQuery = { __typename?: 'Query', SEOExperience: { __typename?: 'SEOExperienceOutput', items: Array<{ __typename?: 'SEOExperience', title: string | null, shortDescription: string | null, keywords: string | null, _metadata: { __typename?: 'ContentMetadata', version: string | null } | { __typename?: 'InstanceMetadata', version: string | null } | { __typename?: 'ItemMetadata', version: string | null } | { __typename?: 'MediaMetadata', version: string | null } | null, composition: { __typename?: 'CompositionStructureNode', nodes: Array<{ __typename?: 'CompositionComponentNode', nodeType: string | null, key: string | null, component: { __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'ButtonBlock' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContactElement' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', nodeType: string | null, key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, nodeType: string | null, rows: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, columns: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, elements: Array<{ __typename?: 'CompositionComponentNode', key: string | null, component: { __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'ButtonBlock' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContactElement' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null> | null } | null> | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null } | null> | null } | null };

export type GetComponentByKeyQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  key: InputMaybe<Scalars['String']['input']>;
  version: InputMaybe<Scalars['String']['input']>;
}>;


export type GetComponentByKeyQuery = { __typename?: 'Query', _Component: { __typename?: '_ComponentOutput', item: { __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'ButtonBlock' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContactElement' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: '_Component' } | { __typename: '_Section' } | null } | null };

export type GetContentByKeyAndVersionQueryVariables = Exact<{
  key: InputMaybe<Scalars['String']['input']>;
  ver: InputMaybe<Scalars['String']['input']>;
}>;


export type GetContentByKeyAndVersionQuery = { __typename?: 'Query', _Content: { __typename?: '_ContentOutput', item: { __typename: 'AnnouncementElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ArticleListElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'AvailabilityBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'BlankExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'BlankSection', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'BlogListingBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'BlogPostPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ButtonBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'CMSPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'CTAElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'CardBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'CardElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'CarouselBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'Contact', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ContactBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ContactElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ContactPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'Container', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ContentRecsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ContentRecsElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'EventElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'Footer', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'FooterColumn', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'FormElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'GenericMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'GenericMedia123', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'Header', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'HeadingElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'HeroBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'HeroElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'HomePageHeroBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'HtmlBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ImageElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ImageMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'LandingPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'LayoutContainerBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'LogoItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'LogosBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'MegaMenuGroupBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'MenuNavigationBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'NavItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'OdpEmbedBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'PageSeoSettings', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ParagraphElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'PortfolioGridBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'PortfolioItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ProfileBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'QuoteBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'SEOExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ServiceItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ServicesBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'SocialLink', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'StandardPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'StartPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'StoryBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'SysContentFolder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TeamElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TestimonialElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TestimonialItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TestimonialItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TestimonialsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TextBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'Video', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'VideoElement', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'VideoMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Component', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Content', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Experience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Folder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Image', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Media', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Page', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Section', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Video', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | null } | null };

export type GetPreviewPageByUrlQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
  version: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPreviewPageByUrlQuery = { __typename?: 'Query', CMSPage: { __typename?: 'CMSPageOutput', item: { __typename?: 'CMSPage', blocks: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null } | null };

export type GetPreviewStartPageQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  version: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPreviewStartPageQuery = { __typename?: 'Query', StartPage: { __typename?: 'StartPageOutput', item: { __typename?: 'StartPage', blocks: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null } | null };

export type VisualBuilderQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  key: InputMaybe<Scalars['String']['input']>;
  version: InputMaybe<Scalars['String']['input']>;
}>;


export type VisualBuilderQuery = { __typename?: 'Query', SEOExperience: { __typename?: 'SEOExperienceOutput', item: { __typename?: 'SEOExperience', composition: { __typename?: 'CompositionStructureNode', nodes: Array<{ __typename?: 'CompositionComponentNode', nodeType: string | null, key: string | null, component: { __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'ButtonBlock' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContactElement' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', nodeType: string | null, key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, nodeType: string | null, rows: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, columns: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, elements: Array<{ __typename?: 'CompositionComponentNode', key: string | null, component: { __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'ButtonBlock' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'ContactElement' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null } | { __typename: 'QuoteBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'TextBlock' } | { __typename: 'VideoElement' } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null> | null } | null> | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null, _metadata: { __typename?: 'ContentMetadata', key: string | null, version: string | null } | { __typename?: 'InstanceMetadata', key: string | null, version: string | null } | { __typename?: 'ItemMetadata', key: string | null, version: string | null } | { __typename?: 'MediaMetadata', key: string | null, version: string | null } | null } | null } | null };

export type HeroBlockFragmentFragment = { __typename?: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null };

export type ContactBlockFragmentFragment = { __typename?: 'ContactBlock', title: string | null, description: string | null };

export type LogosBlockFragmentFragment = { __typename?: 'LogosBlock', logos: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

export type PortfolioGridBlockFragmentFragment = { __typename?: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

export type ServicesBlockFragmentFragment = { __typename?: 'ServicesBlock', services: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

export type TestimonialsBlockFragmentFragment = { __typename?: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

export type ProfileBlockFragmentFragment = { __typename?: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null };

export type AvailabilityBlockFragmentFragment = { __typename?: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null };

export type StoryBlockFragmentFragment = { __typename?: 'StoryBlock', story: string | null, highlights: Array<string | null> | null };

type ItemsInContentArea_AnnouncementElement_Fragment = { __typename: 'AnnouncementElement' };

type ItemsInContentArea_ArticleListElement_Fragment = { __typename: 'ArticleListElement' };

type ItemsInContentArea_AvailabilityBlock_Fragment = { __typename: 'AvailabilityBlock', availability: string | null, projectTypes: Array<string | null> | null };

type ItemsInContentArea_BlankExperience_Fragment = { __typename: 'BlankExperience' };

type ItemsInContentArea_BlankSection_Fragment = { __typename: 'BlankSection' };

type ItemsInContentArea_BlogListingBlock_Fragment = { __typename: 'BlogListingBlock' };

type ItemsInContentArea_BlogPostPage_Fragment = { __typename: 'BlogPostPage' };

type ItemsInContentArea_ButtonBlock_Fragment = { __typename: 'ButtonBlock' };

type ItemsInContentArea_CmsPage_Fragment = { __typename: 'CMSPage' };

type ItemsInContentArea_CtaElement_Fragment = { __typename: 'CTAElement' };

type ItemsInContentArea_CardBlock_Fragment = { __typename: 'CardBlock' };

type ItemsInContentArea_CardElement_Fragment = { __typename: 'CardElement' };

type ItemsInContentArea_CarouselBlock_Fragment = { __typename: 'CarouselBlock' };

type ItemsInContentArea_Contact_Fragment = { __typename: 'Contact' };

type ItemsInContentArea_ContactBlock_Fragment = { __typename: 'ContactBlock', title: string | null, description: string | null };

type ItemsInContentArea_ContactElement_Fragment = { __typename: 'ContactElement' };

type ItemsInContentArea_ContactPage_Fragment = { __typename: 'ContactPage' };

type ItemsInContentArea_Container_Fragment = { __typename: 'Container' };

type ItemsInContentArea_ContentRecsBlock_Fragment = { __typename: 'ContentRecsBlock' };

type ItemsInContentArea_ContentRecsElement_Fragment = { __typename: 'ContentRecsElement' };

type ItemsInContentArea_EventElement_Fragment = { __typename: 'EventElement' };

type ItemsInContentArea_Footer_Fragment = { __typename: 'Footer' };

type ItemsInContentArea_FooterColumn_Fragment = { __typename: 'FooterColumn' };

type ItemsInContentArea_FormElement_Fragment = { __typename: 'FormElement' };

type ItemsInContentArea_GenericMedia_Fragment = { __typename: 'GenericMedia' };

type ItemsInContentArea_GenericMedia123_Fragment = { __typename: 'GenericMedia123' };

type ItemsInContentArea_Header_Fragment = { __typename: 'Header' };

type ItemsInContentArea_HeadingElement_Fragment = { __typename: 'HeadingElement' };

type ItemsInContentArea_HeroBlock_Fragment = { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null };

type ItemsInContentArea_HeroElement_Fragment = { __typename: 'HeroElement' };

type ItemsInContentArea_HomePageHeroBlock_Fragment = { __typename: 'HomePageHeroBlock' };

type ItemsInContentArea_HtmlBlock_Fragment = { __typename: 'HtmlBlock' };

type ItemsInContentArea_ImageElement_Fragment = { __typename: 'ImageElement' };

type ItemsInContentArea_ImageMedia_Fragment = { __typename: 'ImageMedia' };

type ItemsInContentArea_LandingPage_Fragment = { __typename: 'LandingPage' };

type ItemsInContentArea_LayoutContainerBlock_Fragment = { __typename: 'LayoutContainerBlock' };

type ItemsInContentArea_LogoItemBlock_Fragment = { __typename: 'LogoItemBlock' };

type ItemsInContentArea_LogosBlock_Fragment = { __typename: 'LogosBlock', logos: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

type ItemsInContentArea_MegaMenuGroupBlock_Fragment = { __typename: 'MegaMenuGroupBlock' };

type ItemsInContentArea_MenuNavigationBlock_Fragment = { __typename: 'MenuNavigationBlock' };

type ItemsInContentArea_NavItem_Fragment = { __typename: 'NavItem' };

type ItemsInContentArea_OdpEmbedBlock_Fragment = { __typename: 'OdpEmbedBlock' };

type ItemsInContentArea_PageSeoSettings_Fragment = { __typename: 'PageSeoSettings' };

type ItemsInContentArea_ParagraphElement_Fragment = { __typename: 'ParagraphElement' };

type ItemsInContentArea_PortfolioGridBlock_Fragment = { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

type ItemsInContentArea_PortfolioItemBlock_Fragment = { __typename: 'PortfolioItemBlock' };

type ItemsInContentArea_ProfileBlock_Fragment = { __typename: 'ProfileBlock', imageSrc: string | null, bio: string | null, name: string | null, title: string | null };

type ItemsInContentArea_QuoteBlock_Fragment = { __typename: 'QuoteBlock' };

type ItemsInContentArea_SeoExperience_Fragment = { __typename: 'SEOExperience' };

type ItemsInContentArea_ServiceItem_Fragment = { __typename: 'ServiceItem' };

type ItemsInContentArea_ServicesBlock_Fragment = { __typename: 'ServicesBlock', services: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

type ItemsInContentArea_SocialLink_Fragment = { __typename: 'SocialLink' };

type ItemsInContentArea_StandardPage_Fragment = { __typename: 'StandardPage' };

type ItemsInContentArea_StartPage_Fragment = { __typename: 'StartPage' };

type ItemsInContentArea_StoryBlock_Fragment = { __typename: 'StoryBlock', story: string | null, highlights: Array<string | null> | null };

type ItemsInContentArea_SysContentFolder_Fragment = { __typename: 'SysContentFolder' };

type ItemsInContentArea_TeamElement_Fragment = { __typename: 'TeamElement' };

type ItemsInContentArea_TestimonialElement_Fragment = { __typename: 'TestimonialElement' };

type ItemsInContentArea_TestimonialItem_Fragment = { __typename: 'TestimonialItem' };

type ItemsInContentArea_TestimonialItemBlock_Fragment = { __typename: 'TestimonialItemBlock' };

type ItemsInContentArea_TestimonialsBlock_Fragment = { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AnnouncementElement' } | { __typename: 'ArticleListElement' } | { __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CMSPage' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CardElement' } | { __typename: 'CarouselBlock' } | { __typename: 'Contact' } | { __typename: 'ContactBlock' } | { __typename: 'ContactElement' } | { __typename: 'ContactPage' } | { __typename: 'Container' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'EventElement' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'FormElement' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HeroElement' } | { __typename: 'HomePageHeroBlock' } | { __typename: 'HtmlBlock' } | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'MegaMenuGroupBlock' } | { __typename: 'MenuNavigationBlock' } | { __typename: 'NavItem' } | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'QuoteBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TeamElement' } | { __typename: 'TestimonialElement' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

type ItemsInContentArea_TextBlock_Fragment = { __typename: 'TextBlock' };

type ItemsInContentArea_Video_Fragment = { __typename: 'Video' };

type ItemsInContentArea_VideoElement_Fragment = { __typename: 'VideoElement' };

type ItemsInContentArea_VideoMedia_Fragment = { __typename: 'VideoMedia' };

type ItemsInContentArea__Component_Fragment = { __typename: '_Component' };

type ItemsInContentArea__Content_Fragment = { __typename: '_Content' };

type ItemsInContentArea__Experience_Fragment = { __typename: '_Experience' };

type ItemsInContentArea__Folder_Fragment = { __typename: '_Folder' };

type ItemsInContentArea__Image_Fragment = { __typename: '_Image' };

type ItemsInContentArea__Media_Fragment = { __typename: '_Media' };

type ItemsInContentArea__Page_Fragment = { __typename: '_Page' };

type ItemsInContentArea__Section_Fragment = { __typename: '_Section' };

type ItemsInContentArea__Video_Fragment = { __typename: '_Video' };

export type ItemsInContentAreaFragment = ItemsInContentArea_AnnouncementElement_Fragment | ItemsInContentArea_ArticleListElement_Fragment | ItemsInContentArea_AvailabilityBlock_Fragment | ItemsInContentArea_BlankExperience_Fragment | ItemsInContentArea_BlankSection_Fragment | ItemsInContentArea_BlogListingBlock_Fragment | ItemsInContentArea_BlogPostPage_Fragment | ItemsInContentArea_ButtonBlock_Fragment | ItemsInContentArea_CmsPage_Fragment | ItemsInContentArea_CtaElement_Fragment | ItemsInContentArea_CardBlock_Fragment | ItemsInContentArea_CardElement_Fragment | ItemsInContentArea_CarouselBlock_Fragment | ItemsInContentArea_Contact_Fragment | ItemsInContentArea_ContactBlock_Fragment | ItemsInContentArea_ContactElement_Fragment | ItemsInContentArea_ContactPage_Fragment | ItemsInContentArea_Container_Fragment | ItemsInContentArea_ContentRecsBlock_Fragment | ItemsInContentArea_ContentRecsElement_Fragment | ItemsInContentArea_EventElement_Fragment | ItemsInContentArea_Footer_Fragment | ItemsInContentArea_FooterColumn_Fragment | ItemsInContentArea_FormElement_Fragment | ItemsInContentArea_GenericMedia_Fragment | ItemsInContentArea_GenericMedia123_Fragment | ItemsInContentArea_Header_Fragment | ItemsInContentArea_HeadingElement_Fragment | ItemsInContentArea_HeroBlock_Fragment | ItemsInContentArea_HeroElement_Fragment | ItemsInContentArea_HomePageHeroBlock_Fragment | ItemsInContentArea_HtmlBlock_Fragment | ItemsInContentArea_ImageElement_Fragment | ItemsInContentArea_ImageMedia_Fragment | ItemsInContentArea_LandingPage_Fragment | ItemsInContentArea_LayoutContainerBlock_Fragment | ItemsInContentArea_LogoItemBlock_Fragment | ItemsInContentArea_LogosBlock_Fragment | ItemsInContentArea_MegaMenuGroupBlock_Fragment | ItemsInContentArea_MenuNavigationBlock_Fragment | ItemsInContentArea_NavItem_Fragment | ItemsInContentArea_OdpEmbedBlock_Fragment | ItemsInContentArea_PageSeoSettings_Fragment | ItemsInContentArea_ParagraphElement_Fragment | ItemsInContentArea_PortfolioGridBlock_Fragment | ItemsInContentArea_PortfolioItemBlock_Fragment | ItemsInContentArea_ProfileBlock_Fragment | ItemsInContentArea_QuoteBlock_Fragment | ItemsInContentArea_SeoExperience_Fragment | ItemsInContentArea_ServiceItem_Fragment | ItemsInContentArea_ServicesBlock_Fragment | ItemsInContentArea_SocialLink_Fragment | ItemsInContentArea_StandardPage_Fragment | ItemsInContentArea_StartPage_Fragment | ItemsInContentArea_StoryBlock_Fragment | ItemsInContentArea_SysContentFolder_Fragment | ItemsInContentArea_TeamElement_Fragment | ItemsInContentArea_TestimonialElement_Fragment | ItemsInContentArea_TestimonialItem_Fragment | ItemsInContentArea_TestimonialItemBlock_Fragment | ItemsInContentArea_TestimonialsBlock_Fragment | ItemsInContentArea_TextBlock_Fragment | ItemsInContentArea_Video_Fragment | ItemsInContentArea_VideoElement_Fragment | ItemsInContentArea_VideoMedia_Fragment | ItemsInContentArea__Component_Fragment | ItemsInContentArea__Content_Fragment | ItemsInContentArea__Experience_Fragment | ItemsInContentArea__Folder_Fragment | ItemsInContentArea__Image_Fragment | ItemsInContentArea__Media_Fragment | ItemsInContentArea__Page_Fragment | ItemsInContentArea__Section_Fragment | ItemsInContentArea__Video_Fragment;

export const HeroBlockFragmentFragmentDoc = gql`
    fragment HeroBlockFragment on HeroBlock {
  title
  subtitle
  decorationColorsPrimary
  decorationColorsSecondary
  showDecoration
}
    `;
export const ContactBlockFragmentFragmentDoc = gql`
    fragment ContactBlockFragment on ContactBlock {
  title
  description
}
    `;
export const LogosBlockFragmentFragmentDoc = gql`
    fragment LogosBlockFragment on LogosBlock {
  logos {
    __typename
    ... on LogoItemBlock {
      src
      alt
    }
  }
}
    `;
export const PortfolioGridBlockFragmentFragmentDoc = gql`
    fragment PortfolioGridBlockFragment on PortfolioGridBlock {
  title
  items {
    __typename
    ... on PortfolioItemBlock {
      title
      description
      imageUrl
      link
    }
  }
}
    `;
export const ServicesBlockFragmentFragmentDoc = gql`
    fragment ServicesBlockFragment on ServicesBlock {
  services {
    __typename
    ... on ServiceItem {
      title
      description
      icon
    }
  }
}
    `;
export const TestimonialsBlockFragmentFragmentDoc = gql`
    fragment TestimonialsBlockFragment on TestimonialsBlock {
  title
  testimonials {
    __typename
    ... on TestimonialItemBlock {
      fullName
      position
      content
      avatarSrc
    }
  }
}
    `;
export const ProfileBlockFragmentFragmentDoc = gql`
    fragment ProfileBlockFragment on ProfileBlock {
  imageSrc
  bio
  name
  title
}
    `;
export const AvailabilityBlockFragmentFragmentDoc = gql`
    fragment AvailabilityBlockFragment on AvailabilityBlock {
  availability
  projectTypes
}
    `;
export const StoryBlockFragmentFragmentDoc = gql`
    fragment StoryBlockFragment on StoryBlock {
  story
  highlights
}
    `;
export const ItemsInContentAreaFragmentDoc = gql`
    fragment ItemsInContentArea on _IContent {
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
  _Content(where: {_metadata: {types: {in: $pageType}}}) {
    items {
      _metadata {
        displayName
        url {
          base
          internal
          hierarchical
          default
          type
        }
        types
        status
      }
    }
  }
}
    `;
export const GetContentByGuidDocument = gql`
    query GetContentByGuid($guid: String) {
  _Content(where: {_metadata: {key: {eq: $guid}}}) {
    item {
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
export const GetFooterDocument = gql`
    query getFooter($locales: [Locales]) {
  Footer(locale: $locales) {
    item {
      copyrightText
      socialLinks {
        __typename
        ... on SocialLink {
          platform
          href
        }
      }
      columns {
        __typename
        ... on FooterColumn {
          title
          links {
            __typename
            ... on NavItem {
              label
              href
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
  Header(locale: $locale) {
    item {
      logo
      ctaText
      ctaHref
      navItems {
        __typename
        ... on NavItem {
          label
          href
        }
      }
    }
  }
}
    `;
export const GetPageByUrlDocument = gql`
    query getPageByURL($locales: [Locales], $slug: String) {
  CMSPage(locale: $locales, where: {_metadata: {url: {default: {eq: $slug}}}}) {
    item {
      title
      shortDescription
      keywords
      _modified
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetStartPageDocument = gql`
    query GetStartPage($locales: [Locales]) {
  StartPage(locale: $locales) {
    item {
      title
      shortDescription
      keywords
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetVisualBuilderBySlugDocument = gql`
    query GetVisualBuilderBySlug($locales: [Locales], $slug: String) {
  SEOExperience(
    locale: $locales
    where: {_metadata: {url: {default: {eq: $slug}}}}
  ) {
    item {
      title
      shortDescription
      keywords
      composition {
        nodes {
          nodeType
          key
          displaySettings {
            value
            key
          }
          ... on CompositionComponentNode {
            component {
              ...ItemsInContentArea
            }
          }
          ... on CompositionStructureNode {
            key
            rows: nodes {
              ... on CompositionStructureNode {
                key
                columns: nodes {
                  ... on CompositionStructureNode {
                    key
                    elements: nodes {
                      key
                      displaySettings {
                        value
                        key
                      }
                      ... on CompositionComponentNode {
                        component {
                          ...ItemsInContentArea
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
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetAllPagesVersionByUrlDocument = gql`
    query GetAllPagesVersionByURL($locales: [Locales], $slug: String) {
  CMSPage(locale: $locales, where: {_metadata: {url: {default: {eq: $slug}}}}) {
    items {
      _metadata {
        version
      }
      title
      shortDescription
      keywords
      _modified
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetAllStartPageVersionsDocument = gql`
    query GetAllStartPageVersions($locales: [Locales]) {
  StartPage(locale: $locales) {
    items {
      _metadata {
        version
      }
      title
      shortDescription
      keywords
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetAllVisualBuilderVesrionsBySlugDocument = gql`
    query GetAllVisualBuilderVesrionsBySlug($locales: [Locales], $slug: String) {
  SEOExperience(
    locale: $locales
    where: {_metadata: {url: {default: {eq: $slug}}}}
  ) {
    items {
      _metadata {
        version
      }
      title
      shortDescription
      keywords
      composition {
        nodes {
          nodeType
          key
          displaySettings {
            value
            key
          }
          ... on CompositionComponentNode {
            component {
              ...ItemsInContentArea
            }
          }
          ... on CompositionStructureNode {
            key
            rows: nodes {
              ... on CompositionStructureNode {
                key
                columns: nodes {
                  ... on CompositionStructureNode {
                    key
                    elements: nodes {
                      key
                      displaySettings {
                        value
                        key
                      }
                      ... on CompositionComponentNode {
                        component {
                          ...ItemsInContentArea
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
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetComponentByKeyDocument = gql`
    query GetComponentByKey($locales: [Locales], $key: String, $version: String) {
  _Component(
    locale: $locales
    where: {_metadata: {key: {eq: $key}}, _or: {_metadata: {version: {eq: $version}}}}
  ) {
    item {
      ...ItemsInContentArea
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetContentByKeyAndVersionDocument = gql`
    query GetContentByKeyAndVersion($key: String, $ver: String) {
  _Content(where: {_metadata: {key: {eq: $key}, version: {eq: $ver}}}) {
    item {
      __typename
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
export const GetPreviewPageByUrlDocument = gql`
    query getPreviewPageByURL($locales: [Locales], $slug: String, $version: String) {
  CMSPage(
    locale: $locales
    where: {_metadata: {version: {eq: $version}}, _and: {_metadata: {url: {default: {eq: $slug}}}}}
  ) {
    item {
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetPreviewStartPageDocument = gql`
    query GetPreviewStartPage($locales: [Locales], $version: String) {
  StartPage(locale: $locales, where: {_metadata: {version: {eq: $version}}}) {
    item {
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const VisualBuilderDocument = gql`
    query VisualBuilder($locales: [Locales], $key: String, $version: String) {
  SEOExperience(
    locale: $locales
    where: {_metadata: {key: {eq: $key}}, _or: {_metadata: {version: {eq: $version}}}}
  ) {
    item {
      composition {
        nodes {
          nodeType
          key
          displaySettings {
            value
            key
          }
          ... on CompositionComponentNode {
            component {
              ...ItemsInContentArea
            }
          }
          ... on CompositionStructureNode {
            key
            rows: nodes {
              ... on CompositionStructureNode {
                key
                columns: nodes {
                  ... on CompositionStructureNode {
                    key
                    elements: nodes {
                      key
                      displaySettings {
                        value
                        key
                      }
                      ... on CompositionComponentNode {
                        component {
                          ...ItemsInContentArea
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
      _metadata {
        key
        version
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
    },
    GetVisualBuilderBySlug(variables?: GetVisualBuilderBySlugQueryVariables, options?: C): Promise<ExecutionResult<GetVisualBuilderBySlugQuery, E>> {
      return requester<GetVisualBuilderBySlugQuery, GetVisualBuilderBySlugQueryVariables>(GetVisualBuilderBySlugDocument, variables, options) as Promise<ExecutionResult<GetVisualBuilderBySlugQuery, E>>;
    },
    GetAllPagesVersionByURL(variables?: GetAllPagesVersionByUrlQueryVariables, options?: C): Promise<ExecutionResult<GetAllPagesVersionByUrlQuery, E>> {
      return requester<GetAllPagesVersionByUrlQuery, GetAllPagesVersionByUrlQueryVariables>(GetAllPagesVersionByUrlDocument, variables, options) as Promise<ExecutionResult<GetAllPagesVersionByUrlQuery, E>>;
    },
    GetAllStartPageVersions(variables?: GetAllStartPageVersionsQueryVariables, options?: C): Promise<ExecutionResult<GetAllStartPageVersionsQuery, E>> {
      return requester<GetAllStartPageVersionsQuery, GetAllStartPageVersionsQueryVariables>(GetAllStartPageVersionsDocument, variables, options) as Promise<ExecutionResult<GetAllStartPageVersionsQuery, E>>;
    },
    GetAllVisualBuilderVesrionsBySlug(variables?: GetAllVisualBuilderVesrionsBySlugQueryVariables, options?: C): Promise<ExecutionResult<GetAllVisualBuilderVesrionsBySlugQuery, E>> {
      return requester<GetAllVisualBuilderVesrionsBySlugQuery, GetAllVisualBuilderVesrionsBySlugQueryVariables>(GetAllVisualBuilderVesrionsBySlugDocument, variables, options) as Promise<ExecutionResult<GetAllVisualBuilderVesrionsBySlugQuery, E>>;
    },
    GetComponentByKey(variables?: GetComponentByKeyQueryVariables, options?: C): Promise<ExecutionResult<GetComponentByKeyQuery, E>> {
      return requester<GetComponentByKeyQuery, GetComponentByKeyQueryVariables>(GetComponentByKeyDocument, variables, options) as Promise<ExecutionResult<GetComponentByKeyQuery, E>>;
    },
    GetContentByKeyAndVersion(variables?: GetContentByKeyAndVersionQueryVariables, options?: C): Promise<ExecutionResult<GetContentByKeyAndVersionQuery, E>> {
      return requester<GetContentByKeyAndVersionQuery, GetContentByKeyAndVersionQueryVariables>(GetContentByKeyAndVersionDocument, variables, options) as Promise<ExecutionResult<GetContentByKeyAndVersionQuery, E>>;
    },
    getPreviewPageByURL(variables?: GetPreviewPageByUrlQueryVariables, options?: C): Promise<ExecutionResult<GetPreviewPageByUrlQuery, E>> {
      return requester<GetPreviewPageByUrlQuery, GetPreviewPageByUrlQueryVariables>(GetPreviewPageByUrlDocument, variables, options) as Promise<ExecutionResult<GetPreviewPageByUrlQuery, E>>;
    },
    GetPreviewStartPage(variables?: GetPreviewStartPageQueryVariables, options?: C): Promise<ExecutionResult<GetPreviewStartPageQuery, E>> {
      return requester<GetPreviewStartPageQuery, GetPreviewStartPageQueryVariables>(GetPreviewStartPageDocument, variables, options) as Promise<ExecutionResult<GetPreviewStartPageQuery, E>>;
    },
    VisualBuilder(variables?: VisualBuilderQueryVariables, options?: C): Promise<ExecutionResult<VisualBuilderQuery, E>> {
      return requester<VisualBuilderQuery, VisualBuilderQueryVariables>(VisualBuilderDocument, variables, options) as Promise<ExecutionResult<VisualBuilderQuery, E>>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
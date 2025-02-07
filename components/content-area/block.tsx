// components/block.tsx

import dynamic from 'next/dynamic';
import blocksMapperFactory from '@/lib/utils/block-factory';

// Dynamically import each block
const BackgroundCoverBlock = dynamic(() => import('components/block/background-cover-block'));
const HeroBlock = dynamic(() => import('components/block/hero-block'));
const ProductCardsBlock = dynamic(() => import('components/block/product-cards-block'));
const TeaserBlock = dynamic(() => import('components/block/teaser-block'));
const CategoriesBlock = dynamic(() => import('components/block/categories-block'));
const ColumnItemsBlock = dynamic(() => import('components/block/column-items-block'));
const HtmlBlock = dynamic(() => import('components/block/html-block'));
const IconsBlock = dynamic(() => import('components/block/icons-block'));

// Map the dynamically imported blocks
export const blocks = {
  BackgroundCoverBlock,
  HeroBlock,
  ProductCardsBlock,
  TeaserBlock,
  CategoriesBlock,
  ColumnItemsBlock,
  HtmlBlock,
  IconsBlock
} as const;

export type BlockTypeName = keyof typeof blocks;

export type ContentAreaBlock = {
  __typename: BlockTypeName;
} & React.ComponentProps<(typeof blocks)[BlockTypeName]>;

export default blocksMapperFactory(blocks);

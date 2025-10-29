import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFeaturedArticle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_articles';
  info: {
    displayName: 'Featured Article';
  };
  attributes: {
    excerpt: Schema.Attribute.RichText;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface BlocksFullImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_full_images';
  info: {
    displayName: 'Full Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headings';
  info: {
    displayName: 'Sub Heading';
  };
  attributes: {
    linkId: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface BlocksMainHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_main_headings';
  info: {
    displayName: 'Main Heading';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    linkId: Schema.Attribute.String;
  };
}

export interface BlocksParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraphs';
  info: {
    displayName: 'paragraph';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.featured-article': BlocksFeaturedArticle;
      'blocks.full-image': BlocksFullImage;
      'blocks.heading': BlocksHeading;
      'blocks.main-heading': BlocksMainHeading;
      'blocks.paragraph': BlocksParagraph;
      'elements.link': ElementsLink;
    }
  }
}

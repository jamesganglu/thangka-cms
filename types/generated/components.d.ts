import type { Schema, Struct } from '@strapi/strapi';

export interface HistoriesHistories extends Struct.ComponentSchema {
  collectionName: 'components_histories_histories';
  info: {
    displayName: 'histories';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Blocks;
  };
}

export interface ImageTextImageText extends Struct.ComponentSchema {
  collectionName: 'components_image_text_image_texts';
  info: {
    displayName: 'image-text';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Blocks;
  };
}

export interface TimespanTimespans extends Struct.ComponentSchema {
  collectionName: 'components_timespan_timespans';
  info: {
    displayName: 'timespans';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'histories.histories': HistoriesHistories;
      'image-text.image-text': ImageTextImageText;
      'timespan.timespans': TimespanTimespans;
    }
  }
}

import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'image-text.image-text': ImageTextImageText;
    }
  }
}

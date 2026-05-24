import type { Schema, Struct } from '@strapi/strapi';

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
      'timespan.timespans': TimespanTimespans;
    }
  }
}

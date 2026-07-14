import type { Schema, Struct } from '@strapi/strapi';

export interface EventsEvents extends Struct.ComponentSchema {
  collectionName: 'components_events_events';
  info: {
    displayName: 'events';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Blocks;
  };
}

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
      'events.events': EventsEvents;
      'histories.histories': HistoriesHistories;
      'timespan.timespans': TimespanTimespans;
    }
  }
}

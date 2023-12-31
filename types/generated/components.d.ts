import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
    description: '';
  };
  attributes: {};
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SlotInfoSlotInfo extends Schema.Component {
  collectionName: 'components_slot_info_slot_infos';
  info: {
    displayName: 'Slot-info';
    icon: 'information';
    description: '';
  };
  attributes: {
    rtp: Attribute.Float;
    volatility: Attribute.String;
    casino_bonus: Attribute.Boolean;
    progressive_bonus: Attribute.Boolean;
    theme: Attribute.String;
    max_win: Attribute.String;
  };
}

export interface SlotSetupSlotSetup extends Schema.Component {
  collectionName: 'components_slot_setup_slot_setups';
  info: {
    displayName: 'Slot-setup';
  };
  attributes: {
    reels: Attribute.Integer;
    rows: Attribute.Integer;
    autoplay_option: Attribute.Boolean;
    release_date: Attribute.String;
    mobile_version: Attribute.Boolean;
    win_bothways: Attribute.Boolean;
    min_bet: Attribute.String;
    max_bet: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'slot-info.slot-info': SlotInfoSlotInfo;
      'slot-setup.slot-setup': SlotSetupSlotSetup;
    }
  }
}

import { FilePath, Gettable, Gettables, Schema } from '../../../../src/Schema';

export const file: FilePath = [
  /^hk_allianz_flexi_asia_bond_am_factsheet_en_\d+.pdf$/,
];

export const gettable: Gettable = {
  file,
  attribute: [
    {
      value: /^performance$/,
      properties: [
        {
          property: 'title',
          pattern: /^Performance Overview$/,
        },
      ],
    },
    /^table$/,
    /^Cumulative/,
  ],
  options: {
    direction: 'row',
  },
};

export const gettables: Gettables = {
  'performance.cumulative_returns': gettable,
  'performance.calendar_year_returns': {
    file,
    attribute: [
      {
        value: /^performance$/,
        properties: [
          {
            property: 'title',
            pattern: /^Performance Overview$/,
          },
        ],
      },
      /^table$/,
      /^Calendar/,
    ],
    options: {
      direction: 'row',
    },
  },
  'portfolio.credit_rating_allocation': {
    file,
    attribute: [
      {
        value: /^portfolio$/,
        properties: [
          {
            property: 'title',
            pattern: /^Portfolio Analysis$/,
          },
        ],
      },
      /^table$/,
      /^Credit Rating/,
    ],
    options: {
      direction: 'row',
      merge_type: ['header'],
    },
  },
  'portfolio.bond_type_allocation': {
    file,
    attribute: [
      {
        value: /^portfolio$/,
        properties: [
          {
            property: 'title',
            pattern: /^Portfolio Analysis$/,
          },
        ],
      },
      /^table$/,
      /^Bond Type/,
    ],
    options: {
      direction: 'row',
      merge_type: ['header'],
    },
  },
  'portfolio.currency_allocation': {
    file,
    attribute: [
      {
        value: /^portfolio$/,
        properties: [
          {
            property: 'title',
            pattern: /^Portfolio Analysis$/,
          },
        ],
      },
      /^table$/,
      /^Currency/,
    ],
    options: {
      direction: 'row',
      merge_type: ['header'],
    },
  },
  'portfolio.country_allocation': {
    file,
    attribute: [
      {
        value: /^portfolio$/,
        properties: [
          {
            property: 'title',
            pattern: /^Portfolio Analysis$/,
          },
        ],
      },
      /^Currency/,
    ],
    options: {
      direction: 'row',
      merge_type: ['header'],
    },
  },
  'portfolio.top_holdings': {
    file,
    attribute: [
      {
        value: /^portfolio$/,
        properties: [
          {
            property: 'title',
            pattern: /^Portfolio Analysis$/,
          },
        ],
      },
      /^table$/,
      /^Top \d+ Holdings$/,
    ],
    options: {
      direction: 'row',
    },
  },
  'portfolio.statistics_summary': {
    file,
    attribute: [
      {
        value: /^portfolio$/,
        properties: [
          {
            property: 'title',
            pattern: /^Portfolio Analysis$/,
          },
        ],
      },
      /^table$/,
      /^Statistics$/,
    ],
    options: {
      direction: 'row',
    },
  },
  'portfolio.dividend_history': {
    file,
    attribute: [
      {
        value: /^portfolio$/,
        properties: [
          {
            property: 'title',
            pattern: /^Portfolio Analysis$/,
          },
        ],
      },
      {
        value: /^split_cell$/,
        properties: [
          {
            property: 'title',
            pattern: /^Statistics Summary$/,
          },
        ],
      },
      /^table$/,
    ],
    options: {
      direction: 'row',
      merge_type: ['table'],
    },
  },
  'fund_details.share_class': {
    file,
    attribute: [
      {
        value: /^fund_details$/,
        properties: [
          {
            property: 'title',
            pattern: /^Fund Details$/,
          },
        ],
      },
      /^table$/,
      /^Share Class$/,
    ],
    options: {
      direction: 'column',
      key: /^ISIN/,
    },
  },
};

export const schema: Schema = {
  id: 'ac16dba9-5085-4a3c-8e13-e8613b6c0322',
  gettables,
  files: [file],
  file_type: 'pdf',
};

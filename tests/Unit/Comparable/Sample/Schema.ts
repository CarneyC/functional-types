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
      /^bar_chart$/,
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
      /^bar_chart$/,
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
      /^bar_chart$/,
      /^Country(\/)*Location/,
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
      /^title$/,
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
      /^table$/,
      /^Dividend History/,
    ],
    options: {
      direction: 'row',
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
  id: 'generic_factsheet_en',
  name: 'Generic Factsheet',
  gettables,
  files: [file],
  file_type: 'pdf',
  created_at: '2020-05-13T09:07:02.907Z',
  updated_at: '2020-05-13T09:07:02.907Z',
};

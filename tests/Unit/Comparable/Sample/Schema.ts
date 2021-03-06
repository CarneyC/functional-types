import {
  FilePath,
  Gettable,
  Gettables,
  Replacements,
  Schema,
} from '../../../../src/Schema';

export const file: FilePath = [
  /^hk_allianz_flexi_asia_bond_am_factsheet_en_\d+.pdf$/,
];

export const replacements: Replacements = {
  keys: [
    {
      pattern: /^NAV.*$/,
      value: 'nav',
    },
  ],
  values: [
    {
      pattern: /^.*(\d) Year(s*).*$/,
      value: '$1_year$2',
    },
  ],
  leaf_values: [
    {
      pattern: /^(-?\d+\.\d{2})\d+$/,
      value: '$1',
    },
  ],
};

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
    unnest: 1,
  },
};

export const mergeGettable: Gettable = {
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
          pattern: /^Statistics/,
        },
      ],
    },
    /^table$/,
  ],
  options: {
    merge_type: ['table'],
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
      unnest: 1,
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
  'portfolio.statistics_summary': mergeGettable,
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

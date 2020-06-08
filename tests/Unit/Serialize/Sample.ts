import { Deserializable } from '../../../src/Serialize';
import { Dictionary } from 'ramda';

export const deserializable: Dictionary<Deserializable> = {
  id: 'flexi_asia_bond',
  name: 'Flexi Asia Bond',
  file_type: 'excel',
  files: [
    ['__REGEXP__/Allianz_Flexi_Asia_Bond_RawData_\\d+.xlsx$/'],
    ['__REGEXP__/Allianz_Flexi_Asia_Bond_Template_\\d+.xlsx$/'],
  ],
  options: {
    merge: true,
  },
  gettables: {
    statistics_summary: {
      options: {
        key: '__REGEXP__/^ATTRIBUTE$/',
        replacements: {
          values: [
            {
              pattern: '__REGEXP__/^VALUE$/',
              value: 'TODO',
            },
          ],
          keys: [
            {
              value: 'Average Coupon',
              pattern: '__REGEXP__/^Coupon$/',
            },
            {
              pattern: '__REGEXP__/^Average Rating$/',
              value: 'Average Credit Quality',
            },
            {
              value: 'Yield to Maturity',
              pattern: '__REGEXP__/^Yield-to-Maturity$/',
            },
            {
              pattern: '__REGEXP__/^Maturity in Years$/',
              value: 'Effective Maturity',
            },
            {
              pattern:
                '__REGEXP__/^Effective Duration incl\\. \\(Deriv\\. & Cash\\)$/',
              value: 'Effective Duration',
            },
          ],
        },
        direction: 'row',
      },
      attribute: [
        '__REGEXP__/^Template$/',
        {
          properties: [
            {
              pattern: '__REGEXP__/^GENERAL$/',
              property: 'TYPE',
            },
            {
              pattern:
                '__REGEXP__/(^Coupon$)|(^Average Rating$)|(^Yield-to-Maturity$)|(^Maturity in Years$)|(^Effective Duration incl\\. \\(Deriv\\. & Cash\\)$)/',
              property: 'ATTRIBUTE',
            },
          ],
          value: '__REGEXP__/^DATE$/',
        },
      ],
      file: ['__REGEXP__/Allianz_Flexi_Asia_Bond_Template_\\d+\\.xlsx$/'],
    },
    country_location_allocation: {
      attribute: [
        '__REGEXP__/^Template$/',
        {
          properties: [
            {
              pattern: '__REGEXP__/^COUNTRY OF RISK BREAKDOWN$/',
              property: 'TYPE',
            },
          ],
          value: '__REGEXP__/^DATE$/',
        },
      ],
      file: ['__REGEXP__/Allianz_Flexi_Asia_Bond_Template_\\d+\\.xlsx$/'],
      options: {
        direction: 'row',
        key: '__REGEXP__/^ATTRIBUTE$/',
        replacements: {
          values: [
            {
              pattern: '__REGEXP__/^WEIGHT$/',
              value: 'TODO',
            },
          ],
          keys: [],
        },
      },
    },
    credit_rating_allocation: {
      attribute: [
        '__REGEXP__/^Template$/',
        {
          properties: [
            {
              pattern: '__REGEXP__/^QUALITY BREAKDOWN$/',
              property: 'TYPE',
            },
          ],
          value: '__REGEXP__/^DATE$/',
        },
      ],
      file: ['__REGEXP__/Allianz_Flexi_Asia_Bond_Template_\\d+\\.xlsx$/'],
      options: {
        key: '__REGEXP__/^ATTRIBUTE$/',
        replacements: {
          keys: [],
          values: [
            {
              pattern: '__REGEXP__/^WEIGHT$/',
              value: 'TODO',
            },
          ],
        },
        direction: 'row',
      },
    },
    currency_allocation: {
      options: {
        key: '__REGEXP__/^ATTRIBUTE$/',
        replacements: {
          values: [
            {
              value: 'TODO',
              pattern: '__REGEXP__/^WEIGHT$/',
            },
          ],
          keys: [],
        },
        direction: 'row',
      },
      attribute: [
        '__REGEXP__/^Template$/',
        {
          properties: [
            {
              pattern: '__REGEXP__/^CURRENCY BREAKDOWN HEDGED$/',
              property: 'TYPE',
            },
          ],
          value: '__REGEXP__/^DATE$/',
        },
      ],
      file: ['__REGEXP__/Allianz_Flexi_Asia_Bond_Template_\\d+\\.xlsx$/'],
    },
    top_10_holdings_country_location: {
      options: {
        key: '__REGEXP__/^SINK_C_NAMEX$/',
        replacements: {
          keys: [
            {
              value: '$1$2',
              pattern: '__REGEXP__/([\\d|\\w|\\s|\\.]+)%([\\s|\\d|\\.]+)/',
            },
          ],
          values: [
            {
              value: 'PERCENTAGE',
              pattern: '__REGEXP__/^WEIGHT$/',
            },
          ],
        },
        direction: 'row',
      },
      attribute: [
        '__REGEXP__/^RawData$/',
        {
          properties: [
            {
              pattern: '__REGEXP__/(^BONDS$)|(^FUNDS$)/',
              property: 'FI_INV_CLASS',
            },
          ],
          value: '__REGEXP__/^FPOS_DTIM_DATE$/',
        },
      ],
      file: ['__REGEXP__/Allianz_Flexi_Asia_Bond_RawData_\\d+\\.xlsx$/'],
    },
    fund_details: {
      attribute: [
        '__REGEXP__/^Template$/',
        {
          properties: [
            {
              pattern: '__REGEXP__/^GENERAL$/',
              property: 'TYPE',
            },
            {
              pattern: '__REGEXP__/(^NUM_HOLDINGS$)|(^NAV$)/',
              property: 'ATTRIBUTE',
            },
          ],
          value: '__REGEXP__/^DATE$/',
        },
      ],
      file: ['__REGEXP__/Allianz_Flexi_Asia_Bond_Template_\\d+\\.xlsx$/'],
      options: {
        key: '__REGEXP__/^ATTRIBUTE$/',
        replacements: {
          values: [],
          keys: [
            {
              pattern: '__REGEXP__/^NUM_HOLDINGS$/',
              value: 'Number of Holdings',
            },
            {
              value: 'Fund Size',
              pattern: '__REGEXP__/NAV^$/',
            },
          ],
        },
        direction: 'row',
      },
    },
    bond_type_allocation: {
      attribute: [
        '__REGEXP__/^Template$/',
        {
          properties: [
            {
              pattern: '__REGEXP__/^BONDTYPE BREAKDOWN$/',
              property: 'TYPE',
            },
          ],
          value: '__REGEXP__/^DATE$/',
        },
      ],
      file: ['__REGEXP__/Allianz_Flexi_Asia_Bond_Template_\\d+\\.xlsx$/'],
      options: {
        key: '__REGEXP__/^ATTRIBUTE$/',
        replacements: {
          values: [
            {
              pattern: '__REGEXP__/^WEIGHT$/',
              value: 'TODO',
            },
          ],
          keys: [],
        },
        direction: 'row',
      },
    },
  },
  created_at: '2020-06-08T03:40:56.951Z',
  updated_at: '2020-06-08T03:40:56.951Z',
};

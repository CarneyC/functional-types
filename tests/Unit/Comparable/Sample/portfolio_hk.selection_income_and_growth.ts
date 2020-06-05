import { Schema } from 'functional-types/lib/Schema';

export const schema: Schema = {
  id: 'selection_income_and_growth',
  name: 'Selection Income and growth',
  files: [[/IG_Selection_HK_Fund_U-\d+_Stats_\d+_\d+\.xlsx$/]],
  file_type: 'excel',
  gettables: {
    asset_allocation: {
      file: [/IG_Selection_HK_Fund_U-\d+_Stats_\d+_\d+\.xlsx$/],
      attribute: [
        /^STATS U-\d+$/, // sheet name
        /^Asset Allocation$/, // header
      ],
      options: {
        direction: 'row',
        key: /^Asset Allocation$/,
        end: /^Top \d+ Issues$/,
        replacements: {
          keys: [
            {
              pattern: /^Equities$/,
              value: 'abc',
            },
          ],
        },
      },
    },
    rating_allocation_high_yield_bond: {
      file: [/IG_Selection_HK_Fund_U-\d+_Stats_\d+_\d+\.xlsx$/],
      attribute: [
        /^STATS U-\d+$/, // sheet name
        /^Credit Quality - High Yield$/, // header
      ],
      options: {
        direction: 'row',
        key: /^Credit Quality - High Yield$/,
        end: /^Characteristics - High Yield$/,
      },
    },
    rating_allocation_convertible_bonds: {
      file: [/IG_Selection_HK_Fund_U-\d+_Stats_\d+_\d+\.xlsx$/],
      attribute: [
        /^STATS U-\d+$/, // sheet name
        /^Credit Quality - Convertibles$/, // header
      ],
      options: {
        direction: 'row',
        key: /^Credit Quality - Convertibles$/,
        end: /^Characteristics - Convertibles$/,
      },
    },
    sector_allocation_equities_equity_securities: {
      file: [/IG_Selection_HK_Fund_U-\d+_Stats_\d+_\d+\.xlsx$/],
      attribute: [
        /^STATS U-\d+$/, // sheet name
        /^US Equity Sector \(GICS\) Breakdown$/, // header
      ],
      options: {
        direction: 'row',
        key: /^US Equity Sector \(GICS\) Breakdown$/,
        end: /^% of equities covered$/,
      },
    },
    top_5_holdings_high_yield_bonds: {
      file: [/IG_Selection_HK_Fund_U-\d+_Stats_\d+_\d+\.xlsx$/],
      attribute: [
        /^STATS U-\d+$/, // sheet name
        /^Top \d+ High Yield Issues$/, // header
      ],
      options: {
        direction: 'row',
        key: /^Top \d+ High Yield Issues$/,
        end: /^Top \d+ High Yield Issuers$/,
      },
    },
    top_5_holdings_convertiable_bonds: {
      file: [/IG_Selection_HK_Fund_U-\d+_Stats_\d+_\d+\.xlsx$/],
      attribute: [
        /^STATS U-\d+$/, // sheet name
        /^Top \d+ Convertible Issues$/, // header
      ],
      options: {
        direction: 'row',
        key: /^Top \d+ Convertible Issues$/,
        end: /^Top \d+ Convertibles Issuers$/,
      },
    },
    top_5_holdings_equities_equity_securities: {
      file: [/IG_Selection_HK_Fund_U-\d+_Stats_\d+_\d+\.xlsx$/],
      attribute: [
        /^STATS U-\d+$/, // sheet name
        /^Top \d+ US Equity Issues$/, // header
      ],
      options: {
        direction: 'row',
        key: /^Top \d+ US Equity Issues$/,
        end: /^US Equity Sector \(GICS\) Breakdown$/,
      },
    },
    statistics_summary: {
      file: [/IG_Selection_HK_Fund_U-\d+_Stats_\d+_\d+\.xlsx$/],
      attribute: [
        /^STATS U-\d+$/, // sheet name
        /(^% of equities covered$)|(^High Yield Maturity:$)|(^Average Convertible Coupon:$)/, // header
      ],
      options: {
        direction: 'column',
        key: /(^% of equities covered$)|(^High Yield Maturity:$)|(^Average Convertible Coupon:$)/,
        end: /(^Corporates-Portfolio \(U-\d+\)$)|(^Convertible Sub-Portfolio \(U-\d+\)$)|(Weighted average market cap:  \(\$billion\))/,
      },
    },
    fund_details: {
      file: [/IG_Selection_HK_Fund_U-\d+_Stats_\d+_\d+\.xlsx$/],
      attribute: [
        /^STATS U-\d+$/, // sheet name
        /^Asset Allocation$/, // header
      ],
      options: {
        direction: 'row',
        key: /^Asset Allocation$/,
        end: /^Top \d+ Issues$/,
      },
    },
  },
  created_at: '2020-05-13T09:07:02.907Z',
  updated_at: '2020-05-13T09:07:02.907Z',
};

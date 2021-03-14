# Stock Price

The chart represents stock price of `AAPL` (Apple) for different date periods. All data is taken from [Yahoo! Finance](https://finance.yahoo.com/quote/AAPL/history/) website.

## Installation

Use this command to install all dependencies.

```bash
yarn install
```

## Running the app

You can run the app in development mode for testing or development.

```bash
yarn start
```

## Build

Use build version of the app if you plan to deploy it to production. The build version will be placed in `build/` folder.

```bash
yarn build
```

## Architecture

All data was taken from [Yahoo! Finance](https://finance.yahoo.com/quote/AAPL/history/) as `CSV` export of historical data for 1 year period. The `CSV` was converted to `JSON` using [csvjson.com](https://csvjson.com/csv2json).

The single point of data looks like that:

```js
{
  Date: string;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Volume: number;
}
```

For MVP only price (Close) metric was used, but current dataset allow to extract more usefull information, for example we can show trading volumes and spread, which is difference between highest price and lowest price.

For rendering the chart the [rechart.js](https://recharts.org/) library was used, which is based on popular d3.js librabry and built specificly for React.

## TODO

1. Show `Volume` as the metric instead of `Price`
2. Show `Spread`, the difference between highest price and lowest (e.g. `data.High - data.Low`)
3. Use real API to get the latest data
4. Add unit tests

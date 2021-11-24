# Ebury tech challenge

Ebury wants to add a currency converter widget in their apps and landing pages, so our clients can quickly know the exchange rate between a pair of currencies. Implement the functionality of a currency converter using FX rates from one of these open resources:

- http://exchangeratesapi.io/

- https://openexchangerates.org/

- Your preferred source

The widget should:

[ ] Poll the source for a set interval to get the latest rates

[ ] Have an input to introduce the amount to exchange

  [ ] Each input should be validated to only allow numbers with two decimals

[ ] Have a selector to pick a different currency pair (at least GBP, EUR, USD)

[ ] Show the exchange rate for the currency pair

You can draw inspiration from other online currency converters, i.e. https://duckduckgo.com/?q=gbp+to+euro&t=h_&ia=currency or https://transferwise.com/gb/currency-converter/gbp-to-eur-rate?amount=1

What are we looking for:

[ ] The widget must work, and produce correct results

[ ] The code and file structure should be readable, and of high quality

[ ] Implement as many features from the widget as possible

Expectations:

[ ] Use HTML, CSS, and Javascript to complete the test. We expect the project to use a modular structure using a module bundler.

[ ] Use some CSS methodology to organize your styles.

[ ] Feel free to use vanilla Javascript or a framework, preferably with state management.

[ ] As well as it shouldn't produce any error, test the application and include tests.

## Running the project

A [Svelte](https://svelte.dev) project with [Tailwind CSS](https://tailwindcss.com)

Dev mode:

```bash
npm install # or yarn!
npm run dev
```

Open up [localhost:8080](http://localhost:8080)

Build for production:

```bash
npm install # or yarn!
npm run build
```

Run tests:

```bash
npm install # or yarn!
npm run test
```

## Technical justification

### Svelte

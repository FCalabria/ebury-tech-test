# Ebury tech challenge

Ebury wants to add a currency converter widget in their apps and landing pages, so our clients can quickly know the exchange rate between a pair of currencies. Implement the functionality of a currency converter using FX rates from one of these open resources:

- http://exchangeratesapi.io/

- https://openexchangerates.org/

- Your preferred source

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

The idea was to produce a small widget that can be inserted in any website. This could be complemented with other widgets, working as a configurable library. That's also the reason why the rates are provided to Converter.svelte by the parent, so the widgets can be composed on App.svelte into bigger units.

Of course for that to be done properly, you'd need to be able to configure said bigger unit before building, or create some kind of contract to be able to do it once compiled (but then all the code needs to be present, not only the selected widgets). Another option is to use App.svelte as some sort of demo page, but each widget loads the sttore by itself and is completly isolated and bundled by itself.

### Svelte

Svelte has a really low size, and all of it JS is embeded in the code when compiled, removing the need to load a big library like React or Vue.

It provides nice features and a faster development speed compared to plain JS, like DOM binding, global state management, conditional rendering, etc.

That combination makes it ideal for small, injectable, widgets.

### No css library

I wanted a very low size styles, and giving flexibility to the client/consumer. For that reason I haven't bloated the styles with a external library.

The use of CSS variables and not scoped styles allow easy customization. Prefixes in classes and variables have been provided to avoid collision with the client website. Also, I followed the BEM methodology, that gives clear class names and a low specificity (easier to override by the client)

### Testing at the end of the process

Not ideal, I know, but I'm not proficient with Svelte and this is my first time testing it. I knew that if I tested at the same time I developed, I'd have invested a lot of time on it, and decided to sacrifice coverage scoping the time invested in testing. The better way to scope it was to leave it to the end.

Again, this is not how I usually work.

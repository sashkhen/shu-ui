# Welcome to @sashkhen/shu-ui 👋

![Version](https://img.shields.io/badge/version-1.1.1-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/sashkhen/shu-ui#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/sashkhen/shu-ui/graphs/commit-activity)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://github.com/sashkhen/shu-ui/blob/master/LICENSE)

> UI kit to be used in various projects

### 🏠 [Homepage](https://sashkhen.github.io/shu-ui/)

## Install

```sh
npm install @sashkhen/shu-ui
```

## Usage

```tsx
import { Button } from "@sashkhen/shu-ui";

const Example = () => {
  return (
    <Button
      variant="solid"
      size="medium"
      onClick={() => console.log("Clicked")}
    >
      Button
    </Button>
  );
};

export default Example;
```

## Theming

Theming in this project is implemented with **css variables**. You can define/update them in any of your css files.

### Global theme styles

You can override **global theme** values anywhere in your css:

```css
/* ./src/index.css */

:root {
  --shu-theme-primary-color-h: 92;
  --shu-theme-primary-color-s: 45%;
  --shu-theme-primary-color-l: 32%;
}
```

> Using hsl values separately allows lightening and darkening color automatically.

Full list of variables can be found in [\_theme.scss](./src/styles/_theme.scss)

> It's best to define these variables globally in your project

### Component theme styles (global)

You can override **component theme** values anywhere in your css:

```css
/* ./src/index.css */

:root {
  --shu-theme-btn-text-color: #fff;
}
```

Full list of variables can be found in `./src/styles/_[component].scss` files, for example [\_button.scss](./src/styles/_button.scss)

> If you're overriding color variables (as opposed to h,s,l variables), you'll probably want to update multiple states colors:

```css
/* ./src/index.css */

:root {
  /**
   * this will automatically populate
   * lighter and darker shades for different states
   */
  --shu-theme-primary-color-h: 92;
  --shu-theme-primary-color-s: 45%;
  --shu-theme-primary-color-l: 32%;

  /**
   * this will override specific color only...
   */
  --shu-theme-btn-color: #4f762d;

  /**
   * ...so you'll also need to update these
   */
  --shu-theme-btn-color-hover: #689b3b;
  --shu-theme-btn-color-light: #e5f1da;
  --shu-theme-btn-color-light-hover: #d8eac8;
}
```

Full list of variables can be found in `./src/styles/_[component].scss` files, for example [\_button.scss](./src/styles/_button.scss)

### Component theme styles (custom component)

<!-- If you'd like to customize a specific component (or create a new component based on existing one, like introducing accent button), you'll need to redefine variables in your css on a component level. The list of possible **theme** variables can be found in component styles folder, for example [\_button.scss](./src/styles/_button.scss): -->

You can override **component theme** values on a component:

```css
/* ./src/index.css */

.btn-accent {
  --shu-theme-primary-color-h: 92;
  --shu-theme-primary-color-s: 45%;
  --shu-theme-primary-color-l: 32%;

  /* or */
  --shu-theme-btn-color: #4f762d;
  --shu-theme-btn-color-hover: #689b3b;
  --shu-theme-btn-color-light: #e5f1da;
  --shu-theme-btn-color-light-hover: #d8eac8;
}
```

```tsx
import { Button } from "@sashkhen/shu-ui";

<Button className="btn-accent">Accent</Button>;
```

Full list of variables can be found in `./src/styles/_[component].scss` files, for example [\_button.scss](./src/styles/_button.scss)

### Component styles (custom component)

You can override **component** values on a component:

```css
/* ./src/index.css */

.btn-accent {
  --shu-btn-color: #4f762d;
  --shu-btn-color-hover: #689b3b;
  --shu-btn-color-light: #e5f1da;
  --shu-btn-color-light-hover: #d8eac8;
}
```

```tsx
import { Button } from "@sashkhen/shu-ui";

<Button className="btn-accent">Accent</Button>;
```

Full list of variables can be found in `./src/components/[component]/_theme.scss` files, for example [Button/\_theme.scss](./src/components/Button/_theme.scss)

### Creating versions of a component

You can create multiple versions of a single component (like default and accent button) and redefine their values:

```css
/* ./src/index.css */

.btn-primary {
  --shu-theme-primary-color-h: 92;
  --shu-theme-primary-color-s: 45%;
  --shu-theme-primary-color-l: 32%;
}

.btn-secondary {
  --shu-theme-primary-color-h: 9;
  --shu-theme-primary-color-s: 100%;
  --shu-theme-primary-color-l: 63%;
}
```

```tsx
import { Button } from "@sashkhen/shu-ui";

const PrimaryButton = (props) => {
  return <Button className="btn-primary" {...props} />;
};

const SecondaryButton = (props) => {
  return <Button className="btn-secondary" {...props} />;
};
```

## Contribute

### Development

Clone repository, install dependencies and start storybook in dev mode

```bash
git clone https://github.com/sashkhen/shu-ui.git
cd shu-ui
npm i
npm run storybook
```

Create new component

```bash
npm run generate
# or
npm run generate:component
```

> Add component export to [./src/components/index.ts](./src/components/index.ts)

### Build for production

#### Library

Build library (builds `./dist` folder)

```bash
npm run build
```

#### Storybook

Build storybook (builds `./storybook` folder)

```bash
npm run storybook:build
```

### Deployment

#### Library

In order to publish library:

- commit changes
- bump package version
- push to git
- in git repo actions section run `publish` (to either or both github/npm registry)

#### Storybook

Deploy storybook to github pages

```bash
npm run deploy
```

## Author

👤 [Sasha Diachenko](https://github.com/sashkhen)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2024 [Sasha Diachenko](https://github.com/sashkhen).

This project is [ISC](https://github.com/sashkhen/shu-ui/blob/master/LICENSE) licensed.

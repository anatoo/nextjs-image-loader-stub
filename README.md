# `nextjs-image-loader-stub`

A webpack image loader library for creating Next.js image loader stubs.

## Install

```
$ npm install nextjs-image-loader-stub --save-dev
```

## Usage

```typescript
import image from './images/foobar.png';

export const Foobar = () => {
  return <img src={image.src} width={image.width} height={image.height} />;
};
```

## Configure for storybook

```javascript
// .storybook/main.js

module.exports = {
  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.(bmp|png|jpe?g|gif|webp|avif)$/,
            use: 'nextjs-image-loader-stub',
            type: 'javascript/auto',
          }
        ]
      }
    };
  },
};
```


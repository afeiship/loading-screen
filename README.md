# loading-screen
> Pure loading-screen for spa.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## usage
```html
<!--1. add styles -->
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@jswork/loading-screen/dist/index.css"/>
<!-- OR -->
<link rel='stylesheet' type='text/css' href='https://unpkg.com/@jswork/loading-screen/dist/index.css' />

<!--2. add lskit -->
<script src="https://unpkg.com/@jswork/loading-screen/dist/lskit.js"></script>
<script>window.lskit()</script>

<!-- 3. optitional: configuration -->
<head>
  <style>
  .loading-screen{
    --ls-opts-top: 37.5%;
    --ls-opts-bar-color: #1890ff;
    --ls-opts-bar-width: 4px;
    --ls-opts-text-color: #999;
  }
  </style>
</head>
```

## lskit options
```json
{
  "id": "root",
  "lang": "language",
  "en-US": "Loading...",
  "zh-CN": "应用加载中...",
}
```

## preview
- https://afeiship.github.io/loading-screen/

## license
Code released under [the MIT license](https://github.com/afeiship/loading-screen/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/loading-screen
[version-url]: https://npmjs.org/package/@jswork/loading-screen

[license-image]: https://img.shields.io/npm/l/@jswork/loading-screen
[license-url]: https://github.com/afeiship/loading-screen/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/loading-screen
[size-url]: https://github.com/afeiship/loading-screen/blob/master/dist/loading-screen.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/loading-screen
[download-url]: https://www.npmjs.com/package/@jswork/loading-screen

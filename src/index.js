const {interpolateName} = require('loader-utils');
const sizeOf = require('image-size');

module.exports = function(content) {
  this.cacheable(true);
  this.addDependency(this.resourcePath);

  const url = interpolateName(this, '[name].[hash].[ext]', {content});
  this.emitFile(url, content);

  const size = sizeOf(content);
  const image = {
    width: size.width,
    height: size.height,
    src: url,
  };

  return (
`module.exports = {
  src: __webpack_public_path__ + ${JSON.stringify(image.src)},
  width: ${JSON.stringify(image.width)},
  height: ${JSON.stringify(image.height)},
  blurDataUrl: __webpack_public_path__ + ${JSON.stringify(image.src)},
};

module.exports.toString = function() {
  return __webpack_public_path__ + ${JSON.stringify(image.src)};
};`
  );
};

module.exports.raw = true;

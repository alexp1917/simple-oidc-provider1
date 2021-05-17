var defaultOpts = {
  count: 2,
  character: ' ',
};

function Indenter(outFn, options = defaultOpts) {
  this.outFn = outFn;
  this.level = 0;

  var {
    count,
    character,
  } = options;

  this.indent = new Array(count).fill(character).join('');
}

Indenter.prototype.write = function() {
  this.outFn(new Array(this.level).fill(this.indent).join(''), '', ...arguments);
};

module.exports = Indenter;

var { expect } = require('chai');

describe('the "simple-oidc-provider" package exists', () => {
  it('should not fail to require simple-oidc-provider', () => {
    expect(() => require('../')).not.to.throw;
    expect(require('../')).to.be.ok;
  });
});

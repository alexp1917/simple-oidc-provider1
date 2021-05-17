var Indenter = require('../src/cli/indenter');

var { expect } = require('chai');

describe('Indenter', () => {
  it('should Indenter#write different indentations', () => {
    var calledWith = [];
    var indenter = new Indenter(function() { calledWith.push(arguments); });

    calledWith.pop();
    indenter.write('hello');
    expect(calledWith).to.have.length(1);
    expect(calledWith[0]).to.be.ok;
    expect(calledWith[0].length).to.equal(3);
    expect(calledWith[0][0]).to.equal('');
    expect(calledWith[0][1]).to.equal('');
    expect(calledWith[0][2]).to.equal('hello');

    calledWith.pop();
    indenter.level++;
    indenter.write('hello');
    expect(calledWith).to.have.length(1);
    expect(calledWith[0]).to.be.ok;
    expect(calledWith[0].length).to.equal(3);
    expect(calledWith[0][0]).to.equal('  ');
    expect(calledWith[0][1]).to.equal('');
    expect(calledWith[0][2]).to.equal('hello');

    calledWith.pop();
    indenter.level++;
    indenter.write('hello', 'world');
    expect(calledWith).to.have.length(1);
    expect(calledWith[0]).to.be.ok;
    expect(calledWith[0].length).to.equal(4);
    expect(calledWith[0][0]).to.equal('    ');
    expect(calledWith[0][1]).to.equal('');
    expect(calledWith[0][2]).to.equal('hello');
    expect(calledWith[0][3]).to.equal('world');
  });

  it('should Indenter#write different indentations', () => {
    var indenter, o, calledWith = [];

    calledWith.pop();
    o = { count: 4, character: '+' };
    indenter = new Indenter(function() { calledWith.push(arguments); }, o);
    indenter.level = 1;
    indenter.write('hello');
    expect(calledWith).to.have.length(1);
    expect(calledWith[0]).to.be.ok;
    expect(calledWith[0].length).to.equal(3);
    expect(calledWith[0][0]).to.equal('++++');
    expect(calledWith[0][1]).to.equal('');
    expect(calledWith[0][2]).to.equal('hello');

    calledWith.pop();
    o = { count: 3, character: '-' };
    indenter = new Indenter(function() { calledWith.push(arguments); }, o);
    indenter.level = 3;
    indenter.write('hello');
    expect(calledWith).to.have.length(1);
    expect(calledWith[0]).to.be.ok;
    expect(calledWith[0].length).to.equal(3);
    expect(calledWith[0][0]).to.equal('---------');
    expect(calledWith[0][1]).to.equal('');
    expect(calledWith[0][2]).to.equal('hello');
  });
});

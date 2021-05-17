function Commands() {
  this.commands = [
    {
      name: 'help',
      alias: ['-h', '--help'],
      fn: this.help,
      description: 'print help and exit',
    },
  ];
}

Commands.prototype.setMakeServer = function(makeServer) {
  this.makeServer = makeServer;
};

Commands.prototype.help = function() {
  console.log('see docs');
};

Commands.prototype.writeHelpMessage = function(indenter) {
  this.commands.forEach(command => {
    indenter.level++;
    indenter.write(command.name);
    indenter.level++;
    indenter.write(command.alias.join(', '));
    indenter.level++;
    indenter.write(command.description || '');

    indenter.level -= 3;
  });
};

Commands.prototype.runCommand = function(whichOne) {
  var theCommand;

  if (typeof whichOne === 'number')
    theCommand = this.commands[whichOne];
  if (typeof whichOne === 'string')
    theCommand = this.commands.filter(c => {
      return c.name === whichOne || c.alias.indexOf(whichOne) > -1;
    }).pop();

  if (!theCommand)
    throw new Error('Couldn\'t find command ' + whichOne);

  theCommand();
};

module.exports = Commands;

// console.log(new (require('./indenter'))(console.log))
// new Commands().writeHelpMessage(new (require('./indenter'))(console.log))
new Commands().runCommand(new (require('./indenter'))(console.log))
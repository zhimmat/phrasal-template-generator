var aColour;

var aCreature;

var anAdjective;

var aPast;

var aStory;

alert('Let’s make a story together!');

aColour = prompt('A colour (orange, indigo, etc.)');

aCreature = prompt('A creature (dragon, moth, etc.)');

anAdjective = prompt('An adjective (beautiful, super, etc.)');

aPast = prompt('A past tense verb (ran, burped, etc.)');

aStory = prompt('Which story would you like?\n a) Snacking\n b) Escaping\n c) Winning');

if (aStory == 'a') {
  document.write('After snacking on '  + anAdjective + ' treats, the ' + aColour + ' bellied ' + aCreature + ' ' + aPast + ' for hours.');
}

if (aStory == 'b') {
  document.write('Ameilia ' + aPast + ' through the ' + anAdjective + ' ' + aColour + ' nebula escaping the space ' + aCreature + '.');
}

if (aStory == 'c') {
  document.write('Jackson chose his ' + anAdjective + ',' + aColour + ' ' + aCreature + ' card and ' + aPast + ' it to the table knowing he won.');
}

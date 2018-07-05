'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуaн Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARDS_NUMBER = 4;
  var wizards = [];
  var setupWindow = document.querySelector('.setup');
  var setupSimilarWindow = document.querySelector('.setup-similar');
  var getRandomValue = function (maxValue) {
    return Math.floor(Math.random() * maxValue);
  };
  var getRandomElement = function (array) {
    return array[getRandomValue(array.length)];
  };
  var makeWizards = function (quantity, names, surnames, coatColors, eyeColors) {
    var arr = [];
    for (var i = 0; i < quantity; i++) {
      var wizard = {
        name: getRandomElement(names) + ' ' + getRandomElement(surnames),
        colorEyes: getRandomElement(eyeColors),
        colorCoat: getRandomElement(coatColors)
      };
      arr.push(wizard);
    }
    return arr;
  };
  var makeWizard = function (domElement, wizardCharacters) {
    domElement.querySelector('.setup-similar-label').textContent = wizardCharacters.name;
    domElement.querySelector('.wizard-coat').style.fill = wizardCharacters.colorCoat;
    domElement.querySelector('.wizard-eyes').style.fill = wizardCharacters.colorEyes;
  };
  var showSetupBlock = function () {
    setupWindow.classList.remove('hidden');
  };
  var showSetupSimilarBlock = function (persons) {
    var template = document.querySelector('#similar-wizard-template').content.querySelector('div');
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARDS_NUMBER; ++i) {
      var domElem = template.cloneNode(true);
      makeWizard(domElem, persons[i]);
      fragment.appendChild(domElem);
    }
    document.querySelector('.setup-similar-list').appendChild(fragment);
    setupSimilarWindow.classList.remove('hidden');
  };

  wizards = makeWizards(WIZARDS_NUMBER, WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYES_COLORS);
  showSetupBlock();
  showSetupSimilarBlock(wizards);
})();

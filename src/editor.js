 "use strict";

var $ = require('jquery');
var viewer = require('./viewer');
var utils = require('./utils');
var editorToolbar = require('./editor/editortoolbar');

var $editorButton;

module.exports = function() {

  return {
    init: Init
  };
}();

function Init(opt_options) {
  var options = opt_options || {};
  var editableLayers = viewer.getLayersByProperty('editable', true, true);
  if (editableLayers.length) {
    options.editableLayers = editableLayers;
  }  
  options.autoSave = options.hasOwnProperty('autoSave') ? options.autoSave : true;
  options.autoForm = options.hasOwnProperty('autoForm') ? options.autoForm : false;
  options.currentLayer = options.defaultLayer || options.editableLayers[0];
  editorToolbar.init(options);
  render();
  $editorButton = $('#o-editor-button');
  bindUIActions();
}

function bindUIActions() {
  $editorButton.on('click', function(e) {
    $('.o-map').first().trigger({
      type: 'enableInteraction',
      interaction: 'editor'
    });
    this.blur();
    e.stopPropagation();
    e.preventDefault();
  });
}

function render() {
  var el = utils.createListButton({
    id: 'o-editor',
    iconCls: 'o-icon-fa-pencil',
    src: '#fa-pencil',
    text: 'Redigera'
  });
  $('#o-menutools').append(el);
}

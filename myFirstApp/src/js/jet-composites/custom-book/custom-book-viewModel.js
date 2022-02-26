/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

define([
  'ojs/ojtranslation',
  'knockout',
  'ojs/ojarraydataprovider',
  'ojs/ojavatar',
  'ojs/ojgauge',
  'ojs/ojdialog',
  'ojs/ojselectsingle',
], function (Translations, ko, ArrayDataProvider) {
  const _t = Translations.getTranslatedString;
  /**
   * @module CustomBookViewModel
   * @description
   * @param {*} context
   */
  function CustomBookViewModel(context) {
    this._initIds();

    this._initLabels();

    this._initObservables();

    this._initVariables(context);

    this.element = context.element;
    this.context = context;

    this.onClick = this._onClick.bind(this);

    this.handleAddToCart = this._handleAddToCart.bind(this);

    this.handleAddToList = this._handleAddToList.bind(this);

    this.changeHeartColor = this._changeHeartColor.bind(this);
  }

  /**
   * @function _initIds
   * @description
   * @protected
   */
  CustomBookViewModel.prototype._initIds = function () {};

  /**
   * @function _initLabels
   * @description
   * @protected
   */
  CustomBookViewModel.prototype._initLabels = function () {
    this.addToCartLabel = _t('buttons.addToCart');
    this.addToListLabel = _t('buttons.addToList');
  };

  /**
   * @function _initObservables
   * @description
   * @protected
   */
  CustomBookViewModel.prototype._initObservables = function () {
    this.heartColor = ko.observable(null);
    this.inputListValue = ko.observable(null);
    this.listData = ko.observableArray([
      {
        value: 1,
        label: 'Favorites',
      },
    ]);
  };

  /**
   * @function _initVariables
   * @description
   * @param {Object} context
   * @protected
   */
  CustomBookViewModel.prototype._initVariables = function (context) {
    this.bookTitle = context.properties.bookTitle;
  };

  /**
   * @function _handleAddToCart
   * @description
   * @param {Object} e
   */
  CustomBookViewModel.prototype._handleAddToCart = function (e) {
    alert('add to cart');
  };

  /**
   * @function _handleAddToList
   * @description
   * @protected
   */
  CustomBookViewModel.prototype._handleAddToList = function () {
    const params = {
      bubbles: true,
      detail: { value: this.context.properties.bookId },
    };
    this.element.dispatchEvent(new CustomEvent('addedToList', params));
  };

  /**
   * @function _onClick
   * @description
   * @protected
   */
  CustomBookViewModel.prototype._onClick = function () {
    const params = {
      bubbles: true,
      detail: { value: this.context.properties.bookId },
    };
    this.element.dispatchEvent(new CustomEvent('bookClick', params));
  };

  /**
   * @function _changeHeartColor
   * @description
   * @public
   */
  CustomBookViewModel.prototype._changeHeartColor = function (value) {
    this.heartColor(value);
  };

  /**
   * @function _getHeartColor
   * @description
   * @public
   */
  CustomBookViewModel.prototype._getHeartColor = function () {
    return this.heartColor();
  };

  return CustomBookViewModel;
});

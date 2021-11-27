/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
define([
  'ojs/ojtranslation',
  'knockout',
  'utils/Core',
  'ojs/ojinputtext',
  'ojs/ojinputnumber',
  'ojs/ojformlayout',
],
  function (
    Translations,
    ko,
    CoreUtils
  ) {

    const _t = Translations.getTranslatedString;
    function CustomerViewModel() {
      this._initAllIds();
      this._initAlLLabels();
      this._initAllObservables();


    }


    /**
     * @function _initAllIds
     * @description Initializes all ids.
     * 
     */
    CustomerViewModel.prototype._initAllIds = function () {
      this.inputFirstNameId = CoreUtils.generateUniqueId();
      this.inputLastNameId = CoreUtils.generateUniqueId();
      this.inputFullNameId = CoreUtils.generateUniqueId();
      this.inputWeightId = CoreUtils.generateUniqueId();
      this.inputAgeId = CoreUtils.generateUniqueId();
    };

    /**
     * @function _initAlLLabels
     * @description Initializes all labels (Translations).
     * 
     */
    CustomerViewModel.prototype._initAlLLabels = function () {
      this.inputFirstNameLabel = _t('inputs.firstName');
      this.inputsLastNameLabel = _t('inputs.lastName');
      this.inputsFullNameLabel = _t('inputs.fullName');
      this.inputsWeightLabel = _t('inputs.weight');
      this.inputsAgeLabel = _t('inputs.age');
    };

    /**
     * @function _initAllObservables
     * @description Initializes all the observable values.
     * 
     */
    CustomerViewModel.prototype._initAllObservables = function () {
      this.inputFirstNameValue = ko.observable(null);
      this.inputLastNameValue = ko.observable(null);
      this.inputFullNameValue = ko.observable(null);
      this.inputAgeValue = ko.observable(null);
      this.isInputLastNameDisabled = ko.observable(true);

      this.onInputFirstNameValueChange = function (event) {
        const value = event.detail.value;
        if (value) {
          this.isInputLastNameDisabled(false);
          return;
        }
        this.isInputLastNameDisabled(true);
      }.bind(this);

      this.inputLastNameValue.subscribe(function (_) {
        this.inputFullNameValue(`${this.inputFirstNameValue()} ${this.inputLastNameValue()}`);
      }.bind(this));
    };


    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return CustomerViewModel;
  }
);

/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define([
  'knockout',
  'services/DashboardServices',
  'ojs/ojarraydataprovider',
  'ojs/ojconverter-number',
  'ojs/ojchart',
], function (ko, DashboardServices,ArrayDataProvider, ojconverter_number_1) {
  function PieViewModel(params) {
    console.log(params);

    this._initObservables(params);
    this._initVariables();
  }

  /**
   * @function _initAllIds
   * @description Initializes all ids.
   *
   */
  PieViewModel.prototype._initAllIds = function () {
    // this.inputFirstNameId = CoreUtils.generateUniqueId();
  };

  /**
   * @function _initAllLabels
   * @description Initializes all labels (Translations).
   *
   */
  PieViewModel.prototype._initAllLabels = function () {
    // this.inputFirstNameLabel = _t('inputs.firstName');
  };

  /**
   * @function _initAllObservables
   * @description Initializes all the observable values.
   *
   */
  PieViewModel.prototype._initObservables = function (params) {
    const {usersPieSelectionValue, usersCountriesData} = params;

    this.usersPieSelectionValue = usersPieSelectionValue;
    this.usersCountriesData = usersCountriesData;

    // this.usersPieSelectionValue.subscribe(
    //   function ([value]) {
    //     console.log(value);
    //     this.router.go({ path: 'about', params: { id: value } });
    //   }.bind(this)
    // );
  };

  PieViewModel.prototype._initVariables = async function () {
    /**
     * Returns the color for the pie chat item
     * @param {Object} seriesObject
     * @returns {String} color
     */
    this.pieCharColor = function (seriesObject) {
      return seriesObject.items[0].data.color;
    };

    this.numberConverter = new ojconverter_number_1.IntlNumberConverter({
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    this.usersPieDataProvider = new ArrayDataProvider(this.usersCountriesData, {
      keyAttributes: 'id',
    });
    
  };

  /*
   * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
   * return a constructor for the ViewModel so that the ViewModel is constructed
   * each time the view is displayed.
   */
  return PieViewModel;
});

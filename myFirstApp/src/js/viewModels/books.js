/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

define([
  'ojs/ojarraydataprovider',
  'services/BooksServices',
  'knockout',
  'ojs/ojavatar',
  'ojs/ojprogress-circle',
  'custom-book/loader',
], function (ArrayDataProvider, BooksServices, ko) {
  function BooksViewModel() {
    this._initObservables();
    this._initVariables();
    this._initBooksData();

    this.bookClick = (e) => {
      console.log(e);
    };
    // Below are a set of the ViewModel methods invoked by the oj-module component.
    // Please reference the oj-module jsDoc for additional information.

    /**
     * Optional ViewModel method invoked after the View is inserted into the
     * document DOM.  The application can put logic that requires the DOM being
     * attached here.
     * This method might be called multiple times - after the View is created
     * and inserted into the DOM and after the View is reconnected
     * after being disconnected.
     */
    this.connected = () => {
      document.title = 'Books';
      // Implement further logic if needed
    };

    /**
     * Optional ViewModel method invoked after the View is disconnected from the DOM.
     */
    this.disconnected = () => {
      // Implement if needed
    };

    /**
     * Optional ViewModel method invoked after transition to the new View is complete.
     * That includes any possible animation between the old and the new View.
     */
    this.transitionCompleted = () => {
      // Implement if needed
    };
  }

  BooksViewModel.prototype._initObservables = function () {
    this.isLoading = ko.observable(true);
    this.booksData = ko.observableArray([]);
  };

  BooksViewModel.prototype._initVariables = function () {
    this.booksDataProvider = new ArrayDataProvider(this.booksData);
  };

  BooksViewModel.prototype._initBooksData = async function () {
    let dataFromService;
    try {
      dataFromService = await BooksServices.fetchBooks();
    } catch (error) {
      console.log(error);
    }
    if (dataFromService) {
      this.booksData(dataFromService);
      this.isLoading(false);
    }
  };

  /*
   * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
   * return a constructor for the ViewModel so that the ViewModel is constructed
   * each time the view is displayed.
   */
  return BooksViewModel;
});

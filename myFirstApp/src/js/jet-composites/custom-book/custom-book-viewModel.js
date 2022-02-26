/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

define(['ojs/ojavatar'], function () {
  function CustomBookViewModel(context) {
    this.initVariables(context);
    const element = context.element;
    // Below are a set of the ViewModel methods invoked by the oj-module component.
    // Please reference the oj-module jsDoc for additional information.

    this.onClick = (arg) => {
      const params = {
        bubbles: true,
        detail: { value: context.properties.bookId },
      };
      element.dispatchEvent(new CustomEvent('bookClick', params));
    };

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
      console.log('connected');
      // Implement further logic if needed
    };

    /**
     * Optional ViewModel method invoked after the View is disconnected from the DOM.
     */
    this.disconnected = () => {
      // Implement if needed
      console.log('disconnected');
    };

    /**
     * Optional ViewModel method invoked after transition to the new View is complete.
     * That includes any possible animation between the old and the new View.
     */
    this.transitionCompleted = () => {
      // Implement if needed
      console.log('transition');
    };
  }

  CustomBookViewModel.prototype.initVariables = function (context) {
    this.bookTitle = context.properties.bookTitle;
  };

  /*
   * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
   * return a constructor for the ViewModel so that the ViewModel is constructed
   * each time the view is displayed.
   */
  return CustomBookViewModel;
});

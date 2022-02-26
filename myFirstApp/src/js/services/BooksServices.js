/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Customers service abstraction
 */
define(['utils/Service'], function (ServiceUtils) {
  function BooksServices() {}

  /**
   *
   * @returns
   */
  BooksServices.prototype.fetchBooks = async function () {
    return new Promise(function (resolve, reject) {
      setTimeout(async () => {
        return resolve(await ServiceUtils.fetchData('books'));
      }, 2000);
    });
  };

  return new BooksServices();
});

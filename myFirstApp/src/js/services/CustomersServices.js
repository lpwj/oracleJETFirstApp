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
define([], function () {
  class CustomersServices {
    /**
     * @description
     * @returns
     */
    constructor() {}

    saveCustomer(params) {
      console.log(params);

      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          const random = Math.random() < 0.5;
          const response = {
            success: random,
          };
          if (random) {
            resolve(response);
          } else {
            response.message = 'Something went wrong';
            reject(response);
          }
        }, 2000);
      });
    }
  }

  return new CustomersServices();
});

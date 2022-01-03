/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 *
 */
define(['text!../../json/config.json'], function (configFile) {
  const config = JSON.parse(configFile);
  console.log(config);
  class ServiceUtils {
    /**
     * @description
     * @returns
     */
    constructor() {}

    /**
     * @function
     * @description
     * @returns
     */
    buildEndpointUrl(endpointProperty) {
      const url = `${config.isSecure ? 'https' : 'http'}://${config.host}:${config.port}/${
        config.endpoints[endpointProperty]
      }`;
      return url;
    }
  }

  return new ServiceUtils();
});

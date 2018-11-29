import {InjectionToken} from '@angular/core';

export const SERVER_URL = 'http://dawan.fr/';

export const SERVER_URL_TOKEN = new InjectionToken('app.config');

export const configFactory = function (username: string) {
  return {
    username: username,
    password: 'secret'
  };
};

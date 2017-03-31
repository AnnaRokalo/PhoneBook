import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PhoneListIndex from './components/phonesList_index';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={PhoneListIndex} />
    <Route path="/" component={App} />
  </Route>
);
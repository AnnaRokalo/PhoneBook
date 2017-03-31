import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PhoneListIndex from './components/phonesList_index';
import PhoneDetail from './components/phone-detail';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={PhoneListIndex} />
    <Route path="/" component={App} />
    <Route path="phonesList/:id" component={PhoneDetail} />
  </Route>
);
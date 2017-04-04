import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PhoneListIndex from './components/phonesList_index';
import PhoneDetail from './components/phone_detail';
import PhoneNew from './components/phone_new';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={PhoneListIndex} />
    <Route path="phones/new" component={PhoneNew} />
    <Route path="phones/:id" component={PhoneDetail} />
  </Route>
);
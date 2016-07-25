import React from 'react';
import AsyncComponent from './AsyncComponent';
import scheduleLoad from './loader';

const loader = (cb) => {
  require.ensure([], (require) => {
      cb(require('./LineChart'))
  });
}

scheduleLoad(loader);

export default (props) =>
  <AsyncComponent {...props} loader={loader}/>

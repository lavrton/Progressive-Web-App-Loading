import React from 'react';
import AsyncComponent from './AsyncComponent';
import sceduleLoad from './loader';

const loader = (cb) => {
  require.ensure([], (require) => {
      cb(require('./BarChart'))
  });
}

sceduleLoad(loader);

export default (props) =>
  <AsyncComponent {...props} loader={loader}/>

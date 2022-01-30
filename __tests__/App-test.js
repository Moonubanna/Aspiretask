/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Store from './../src/store';
import DebitCard from './../src/components/screens/debitcard';

// Note: test renderer must be required after react-native.
import {create, act} from 'react-test-renderer';
const store = Store();
const tree = create(
  <Provider store={store}>
    <DebitCard />
  </Provider>,
);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

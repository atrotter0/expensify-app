import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import HelpPage from '../../components/HelpExpensePage';

test('should render HelpPage', () => {
  const wrapper = shallow(<HelpPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

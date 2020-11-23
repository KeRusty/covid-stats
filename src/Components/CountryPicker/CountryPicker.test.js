import React from 'react';
import renderer from 'react-test-renderer';

import CountryPicker from './CountryPicker';

describe('<CountryPicker />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<CountryPicker />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
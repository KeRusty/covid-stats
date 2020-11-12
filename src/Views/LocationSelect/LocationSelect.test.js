import React from 'react';
import renderer from 'react-test-renderer';

import LocationSelect from './LocationSelect';

describe('<LocationSelect />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<LocationSelect />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
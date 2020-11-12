import React from 'react';
import renderer from 'react-test-renderer';

import Global from './Global';

describe('<Global />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Global />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
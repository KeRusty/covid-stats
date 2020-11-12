import React from 'react';
import renderer from 'react-test-renderer';

import SriLanka from './SriLanka';

describe('<SriLanka />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<SriLanka />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
import React from 'react';
import renderer from 'react-test-renderer';

import Local from './Local';

describe('<Local />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Local />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
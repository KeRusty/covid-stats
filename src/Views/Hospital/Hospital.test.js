import React from 'react';
import renderer from 'react-test-renderer';

import Hospital from './Hospital';

describe('<Hospital />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Hospital />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
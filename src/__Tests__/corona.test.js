import React from 'react';
import renderer from 'react-test-renderer';
import Corona from './__mock__/corona';

describe('Details', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Corona />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

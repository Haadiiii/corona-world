import React from 'react';
import renderer from 'react-test-renderer';
import Head from './__mock__/head';

describe('Details', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Head />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

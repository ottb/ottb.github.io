import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ToggleButton from './ToggleButton';
import App from './App';

function toggleDisplay() {

}

it('button changes isToggled state when clicked', () => {
  const component = renderer.create(
    <ToggleButton text="2016 Annual Report" />
  );
  let tree = component.toJSON();
  expect(tree.children[0]).toMatchSnapshot();

  //manually trigger click
  tree.children[0].props.onClick();
  //re-rendering
  tree = component.toJSON();
  expect(tree.children[0]).toMatchSnapshot();

  //manually trigger click
  tree.children[0].props.onClick();
  //re-rendering
  tree = component.toJSON();
  expect(tree.children[0]).toMatchSnapshot();
});

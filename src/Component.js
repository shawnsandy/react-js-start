import React from 'react';

/**
 * Rect stateless components
 */

const Button = ({ children = 'Sample Button' }) => (
  <button>{children}</button>
);

/**
 * Basic sample component displays a title and lorem paragraph
 */

export default class Component extends React.Component {

  render() {
    return (
      <aside className='hello-component'>
        <h3>Sample Component</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <Button />
      </aside>
    );
  }
}

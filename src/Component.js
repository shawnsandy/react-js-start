import React from 'react';

/**
 * Basic sample component displays a title and lorem paragraph
 */
export default class Component extends React.Component {

  render() {
    return (
      <aside className='hello-component'>
        <h3>A Sample Component.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      </aside>
    );
  }
}

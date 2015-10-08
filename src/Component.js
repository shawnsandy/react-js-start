import React from 'react';

/**
 * Rect stateless components
 */

const Button = ({
  children = 'Sample Button'
}) => (
  <button className="btn btn-info">
    {children}
  </button>
);

/**
 * Basic sample component displays a title and lorem paragraph
 */

export default class Component extends React.Component {

  static defaultProps = {
    title: 'Sample Component'
  }

  static propTypes = {
    title: React.PropTypes.string
  }

  render() {
    return (
      <aside className="hello-component">
        <h1>{ this.props.title }</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <Button>Button Name</Button>
      </aside>
    );
  }
}

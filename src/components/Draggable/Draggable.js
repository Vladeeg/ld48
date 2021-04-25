import React from 'react';
import ReactDOM from 'react-dom';

import './Draggable.css'

class Draggable extends React.Component {
  constructor(props) {
    super(props);

    let x;
    let y;
    if (props.initialCoords) {
      x = props.initialCoords.x;
      y = props.initialCoords.y;
    }
    this.state = {
      x, y,
      rel: {
        x: 0,
        y: 0,
      },
      initialPosition: {
        x, y,
      },
      isDragging: false,
    };
  }

  onMouseDown = (e) => {
    const { onMouseDown } = this.props;
    console.log('down');
    document.addEventListener('mousemove', this.onMouseMove);
    if (e.button !== 0) return;
    var pos = ReactDOM.findDOMNode(this.node_modal);
    console.log(pos);
    this.setState({
      isDragging: true,
      rel: {
        x: e.pageX - pos.offsetLeft,
        y: e.pageY - pos.offsetTop
      },
      initialPosition: {
        x: pos.offsetLeft,
        y: pos.offsetTop,
      }
    });

    if (onMouseDown) onMouseDown(e);
    e.stopPropagation();
    e.preventDefault();
  }

  onMouseUp = (e) => {
    const { returnToStart, onMouseUp, } = this.props;
    const { initialPosition, x, y, } = this.state;

    document.removeEventListener('mousemove', this.onMouseMove);
    this.setState({ isDragging: false });
    this.setState({ isResizing: false });
    if (onMouseUp) onMouseUp(x, y);

    if (returnToStart) {
      this.setState({
        x: initialPosition.x,
        y: initialPosition.y,
      });
    }
    e.stopPropagation();
  }

  onMouseMove = (e) => {
    console.log(this.state.isDragging);
    const { setCoords } = this.props;
    if (this.state.isDragging) {
      const x = e.pageX - this.state.rel.x;
      const y = e.pageY - this.state.rel.y;
      this.setState({ x, y });
      if (setCoords) {
        setCoords(x, y);
      }
    } else if (this.state.isResizing) {
      this.funcResizing(e.clientX, e.clientY);
    } else {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    const {
      x, y,
      isDragging
    } = this.state;

    const {
      children,
      style,
    } = this.props;

    return <div
      className="draggable"
      style={{ top: y, left: x, ...(style ? style : {}), }}
      ref={(node) => {
        this.node_modal = node;
      }}
      onMouseDown={this.onMouseDown}
      onMouseUp={this.onMouseUp}
      draggable={isDragging}
    >
      {children}
    </div>
  }
}

export default Draggable;

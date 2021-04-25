import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Icon from '../Icon/Icon';
import './Window.css';

const closeButtonIcon = 'assets/escape_button.png';
const closeButtonIconPressed = 'assets/escape_button_pressed.png';

const CloseButton = ({ onClick }) => {
  const [pressed, setPressed] = useState(false);
  return <button
    className="window__header-button"
    onClick={onClick}
    onMouseDown={() => setPressed(true)}
    onMouseUp={() => setPressed(false)}
  >
    <img
      className="header-button__img"
      src={pressed ? closeButtonIconPressed : closeButtonIcon}
    />
  </button>;
}

class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 10,
      y: 10,
      rel: {
        x: 0,
        y: 0,
      },
      isDragging: false,
    };
  }

  onMouseDown = (e) => {
    document.addEventListener('mousemove', this.onMouseMove);
    if (e.button !== 0) return;
    var pos = ReactDOM.findDOMNode(this.node_modal);
    this.setState({
      isDragging: true,
      rel: {
        x: e.pageX - pos.offsetLeft,
        y: e.pageY - pos.offsetTop
      }
    });
    e.stopPropagation();
    e.preventDefault();
  }

  onMouseUp = (e) => {
    document.removeEventListener('mousemove', this.onMouseMove);
    this.setState({ isDragging: false });
    this.setState({ isResizing: false });
    e.stopPropagation();
  }

  onMouseMove = (e) => {
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

  interact = (args) => {
    console.log('interact');
    if (this.props.interact) this.props.interact(args);
  }

  render() {
    const {
      style,
      x, y,
      isDragging
    } = this.state;
    const {
      children,
      visible,
      closeButtonAction,
      headerText,
      onMouseDown,
      onMouseOver,
      onMouseLeave,
      style: additionalStyle,
      key,
      icon,
      width,
      height,
    } = this.props;

    let _style = {};
    if (width) {
      _style = { ...style, width };
    }
    if (height) {
      _style = { ...style, height };
    }

    if (visible) {
      return <li
        key={key}
        className="window"
        style={{ top: y, left: x, ...additionalStyle, ..._style }}
        ref={(node) => {
          this.node_modal = node;
          // setRef(node);
        }}
        onMouseOver={(e) => {
          if (onMouseOver) onMouseOver();
          e.stopPropagation();
          e.preventDefault();
        }}
        onMouseLeave={(e) => {
          if (onMouseLeave) onMouseLeave();
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <div
          className="window__header"
          onMouseDown={(e) => {
            this.onMouseDown(e);
            onMouseDown();
          }}
          onMouseUp={this.onMouseUp}
          draggable={isDragging}
        >
          {icon && <Icon small type={icon} />}
          {headerText}
          <CloseButton onClick={closeButtonAction} />
        </div>
        <div
          onClick={(e) => {
            onMouseDown();
            e.stopPropagation();
            e.preventDefault();
          }}
          className="window__content"
        >
          {children}
        </div>
      </li>
    }
    return null;
  }
}

export default Window;

import React from 'react';

class TextEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }

  render() {
    return <textarea
      rows={25}
      cols={73}
      type='text-area'
      value={this.state.text}
      onChange={(e) => this.setState({text: e.target.value}) }
    />
  }
}

export default TextEditor;

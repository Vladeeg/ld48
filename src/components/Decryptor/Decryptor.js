import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';

import crypt from './decup.png';

import './Decryptor.css';

const getDecryptText = (fileId) => {
  switch(fileId) {
    case '/files/Art School/Doll.jpg':
      return '1: www.jomama.com/';
    case '/files/Art School/Hand Study.jpg':
      return '2: qfWwfp23p';
    case '/files/p0rn/My photos/Me.jpg':
      return '3: /ans234wer4.god';
    case '/Decryptor':
      return 'Cicada 3301 watching you';
    default:
      return 'Not suitable file';
  }
}

class Decryptor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decrypttext: '',
    };
  }

  decrypt(args) {
    const { onDecryptFinish } = this.props;

    this.spritesheet.goToAndPlay(1);
    if (onDecryptFinish) setTimeout(() => {
      onDecryptFinish(args.fileId);
      this.spritesheet.goToAndPause(0);
      this.setState({
        decrypttext: getDecryptText(args.fileId),
      })
    }, 4000);
  }

  render() {
    return <div>
      <Spritesheet
        image={crypt}
        widthFrame={600}
        heightFrame={350}
        steps={4}
        fps={10}
        autoplay={false}
        loop={true}
        getInstance={spritesheet => {
          this.spritesheet = spritesheet;
        }}
      />
      <span className='decrypttext'>{this.state.decrypttext}</span>
    </div>
  }
}

export default Decryptor;

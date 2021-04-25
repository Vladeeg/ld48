import React from 'react';

const winimage = 'assets/kto-prochital-tot-sdohnet.jpg';
const google = 'assets/background2.png';
const vk = 'assets/background3.png';

class Browser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      show: '',
    }
  }

  getPage = () => {
    switch (this.state.show) {
      case 'win':
        return <img src={winimage} />;
      case 'google.com':
        return <img style={{height: '400px'}} src={google} />;
      case 'vk.com':
        return <img style={{height: '400px'}} src={vk} />;
      case '':
        return null;
      default:
        return <div>404 NOT FOUND</div>;
    }
  }

  render() {
    return <div>
      <input onFocus={() => console.log('f')} type='text' onChange={(e) => {
        this.setState({url: e.target.value})}
       } />
      <button onClick={() => {
        if (this.state.url === 'www.jomama.com/qfWwfp23p/ans234wer4.god') {
          this.setState({
            show: 'win'
          })
        } else {
          this.setState({
            show: this.state.url,
          })
        }
      }}>Go</button>
      {this.getPage()}
    </div>
  }
}

export default Browser;

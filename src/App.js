import React from 'react';

import Window from './components/Window/Window';
import Icon from './components/Icon/Icon';
import Photo from './components/Photo/Photo';

import { toTwoPlaces } from './util/numbers';

import Decryptor from './components/Decryptor/Decryptor';
import Browser from './components/Browser/Browser';
import Video from './components/Video/Video';
import TextEditor from './components/TextEditor/TextEditor';

import './App.css';

const photo1 = 'assets/photo1.png';
const photo1Cor = 'assets/photo1Dis.png';
const photo2 = 'assets/photo2.png';
const photo2Cor = 'assets/photo2Dis.png';
const photo3 = 'assets/photo3.png';
const photo3Cor = 'assets/photo3Dis.png';
const photo4 = 'assets/photo4.png';
const photo4Cor = 'assets/photo4Dis.png';
const photo5 = 'assets/photo5.png';
const photo5Cor = 'assets/photo5Dis.png';
const photo6 = 'assets/photo6.png';
const photo6Cor = 'assets/photo6Dis.png';
const photo7 = 'assets/photo7.png';
const photo7Cor = 'assets/photo7Dis.png';
const winner = 'assets/dead.jpg';
const video = 'assets/video.gif';
const videoCor = 'assets/videoDis1.gif';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windows: [],
      datetime: new Date(),
      icons: [
        {
          type: 'folder',
          label: 'files',
          id: '/files',
          initialCoords: {
            x: 52,
            y: 37,
          },
          content: [
            {
              type: 'text',
              label: 'Cafe.doc',
              id: '/files/Cafe.doc',
              initialCoords: {
                x: 200,
                y: 180,
              },
              content: `Сегодня я обедала в кафе около своего места учёбы. У него ещё такое глупое название, ну что-то на француском но шрифт настолько дурацкий что я даже не знала как оно читается. И представь на стакнчиках их под кофе, тоже есть их название и из-за их дуратского шрифта и того что иногда баристы пишут имя поверх этого названя, оно сливается в одно что-то очень стрёмное, хаа. Но зато латте у них нормальное. хотя по ощущением сахара они не докладывают, ну либо у них СЛШКОМ большие стаканчики для кофе.
Ещё что... Тот парень, ну со странноватой улыбкой сказал что я ему симпатчна... Не знаю... У него аура... Нехорошая?? `
            },
            {
              type: 'text',
              label: 'ujhjcrjg.txt',
              id: '/files/ujhjcrjg.doc',
              initialCoords: {
                x: 150,
                y: 120,
              },
              content: `Гороскоп для знаков зодиака:

Овен — Попробуйте сегодня двигаться дальше.
Телец — Ваш сегодняшний цвет - Оранжевый.
Близнецы — Есть трудности но не беспокойтесь они не станут вам преградой.
Рак — 456
Лев — О вашем существовании забыли. Вас никто не помнит. Кто вы?
Дева — НЕТНЕТНЕТНЕТНЕТНЕТНЕТНЕТНЕТНЕТ
Весы — Вы сегодня недостаточно ВЗВЕШЕННЫ.
Скорпион — Я омоюсь в крови смешав её с ядом. И после этого я воспорю над единым но неизвестным.
Стрелец — Ого. Ух ты. Вау.
Козерог — Вспомните песню. Вы умеете помнить. Но не Львов. Кто они?
Водолей — ERROR486 Sorry :(
Рыбы — Не утоните `
            },
            {
              type: 'folder',
              label: 'p0rn',
              id: '/files/p0rn',
              content: [
                {
                  type: 'text',
                  label: 'interesting site.txt',
                  id: '/files/p0rn/interesting site.txt',
                  initialCoords: {
                    x: 100,
                    y: 180,
                  },
                  content: `Номер. Имя. Цветовая символика не нужна, но необходима.

4123 Елизавета. 566 Владимир. 577 Коля. 204. Юлия. 2342 234 3843 8774 1553 Синий. Чёрный. Красный 7478 4679 Александр.`
                },
                {
                  type: 'folder',
                  label: 'My photos',
                  id: '/files/p0rn/My photos',
                  content: [
                    {
                      type: 'photo',
                      label: 'Me.jpg',
                      id: '/files/p0rn/My photos/Me.jpg',
                      content: {
                        normal: photo1,
                        corrupted: photo1Cor,
                      }
                    },
                    {
                      type: 'photo',
                      label: 'Comfy.jpg',
                      id: '/files/p0rn/My photos/Comfy.jpg',
                      content: {
                        normal: photo4,
                        corrupted: photo4Cor,
                      },
                      initialCoords: {
                        x: 100,
                      }
                    },
                    {
                      type: 'photo',
                      label: 'faseeeee.jpg',
                      id: '/files/p0rn/My photos/faseeeee.jpg',
                      content: {
                        normal: photo7,
                        corrupted: photo7Cor,
                      },
                      initialCoords: {
                        y: 145
                      }
                    },
                    {
                      type: 'photo',
                      label: 'uwu.jpg',
                      id: '/files/p0rn/My photos/uwu.jpg',
                      content: {
                        normal: photo6,
                        corrupted: photo6Cor,
                      },
                      initialCoords: {
                        y: 200
                      }
                    },
                  ]
                },
              ],
              initialCoords: {
                x: 52,
                y: 37,
              },
            },
            {
              type: 'folder',
              label: 'Art school',
              id: '/files/Art School',
              content: [
                {
                  type: 'text',
                  label: 'урок2.txt',
                  id: '/files/Art School/урок2.txt',
                  initialCoords: {
                    x: 150,
                    y: 120,
                  },
                  content: `4.5 - Вытяните руку. Что вы ощущаете в ней? Придумайте подходящий эпитет для собачего хребта
4.6 - Что в данном списке лишнее: Ночь. Ветер. Неевклидова Геометрия. Затяжной Алкоголизм.
4.7 - Кофе без кофеина?
4.8 - Ваш любимый тип кожи. `
                },
                {
                  type: 'text',
                  label: 'урок1.txt',
                  id: '/files/Art School/урок1.txt',
                  initialCoords: {
                    x: 90,
                    y: 120,
                  },
                  content: `Деление эклиптики на двенадцать частей восходит к шестидесятеричной системе счисления и астрономии древнего Вавилона, которые послужили основанием для деления года на двенадцать месяцев, подобно как принятое там разделение небесного круга на 360 угловых долей (примерно в соответствии с количеством дней в году) явилось источником для деления окружности на 360 градусов в геометрии.  `
                },
                {
                  type: 'photo',
                  label: 'Hand Study.jpg',
                  id: '/files/Art School/Hand Study.jpg',
                  content: {
                    normal: photo2,
                    corrupted: photo2Cor,
                  },
                  initialCoords: {
                    x: 22,
                    y: 37,
                  },
                },
                {
                  type: 'photo',
                  label: 'Doll.jpg',
                  id: '/files/Art School/Doll.jpg',
                  content: {
                    normal: photo3,
                    corrupted: photo3Cor,
                  },
                  initialCoords: {
                    x: 140,
                    y: 37,
                  },
                },
                {
                  type: 'photo',
                  label: 'mask.jpg',
                  id: '/files/Art School/mask.jpg',
                  content: {
                    normal: photo5,
                    corrupted: photo5Cor,
                  },
                  initialCoords: {
                    y: 200
                  }
                },
              ],
              initialCoords: {
                x: 140,
                y: 37,
              },
            },
          ],
        },
        {
          type: 'video',
          label: 'Summer.mp4',
          id: '/video',
          initialCoords: {
            x: 79,
            y: 160,
          },
          content: {
            normal: video,
            corrupted: videoCor,
          }
        },
        {
          type: 'web',
          label: 'FireChrome',
          id: '/FireChrome',
          initialCoords: {
            x: 200,
            y: 28,
          },
        },
        {
          type: 'text',
          label: 'README.txt',
          id: '/README.txt',
          initialCoords: {
            x: 200,
            y: 180,
          },
          content: `Правила:
Сбор информации происходит по средством дешифровки медиа.
Возможна дестабилизация медиа файлов
После дешифровки, перейти по полученному URL`
        },
        {
          type: 'text',
          label: 'дневник страница.txt',
          id: '/дневник страница.txt',
          initialCoords: {
            x: 80,
            y: 230,
          },
          content: `Сегодня я была в парке с тем улыбающимся парнем, пусть у него и есть недостатки но он хорошо шутит и очень тактичен ко мне, это здорово!
Но почему его кожа такая красная? `
        },
        {
          type: 'usb',
          label: 'Detective\'s USB',
          id: '/USB',
          initialCoords: {
            x: 200,
            y: 110,
          },
          content: [ {
            type: 'decrypt',
            label: 'Decryptor1337',
            id: '/Decryptor',
            initialCoords: {
              x: 52,
              y: 52,
            },
          },]
        },
      ],
      decryptedFiles: [],
      iconReleasePositions: {}
    }
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setDatetime();
    }, 1000);
  }

  decryptorDnD = (fileId, x, y) => {
    console.log('up');
    const { windows } = this.state;
    const decryptors = windows.filter((w) => w.id.includes('Decryptor'));
    decryptors.forEach((d) => {
      if (x > d.x && y > d.y && x < d.x + 600 && y < d.y + 350) {
        console.log('found decryptor');
        const r = this.windowRefs.find((r) => {
          return r.id === d.id;
        });
        if (r) {
          console.log('ref');
          console.log(r);
        }
        r.ref.interact({fileId});
      }
    });
  }

  renderIcons = (icons, zIndex) => {
    return <ul>
      {icons.map((i, idx) => <li key={i.id}><Icon
        defaultZIndex={zIndex}
        controlledPosition
        draggable
        initialCoords={i.initialCoords}
        type={i.type}
        label={i.label}
        onOpen={() => this.openWindow(i)}
        onMouseUp={(x, y) => {
          this.decryptorDnD(i.id, x, y);
          this.setState({
            iconReleasePositions: {
              ...this.state.iconReleasePositions,
              [i.id]: { x, y, },
            }
          });
        }}
      /></li>)}
    </ul>
  }

  decryptors = {};

  openWindow = (icon) => {
    const { windows, decryptedFiles, } = this.state;
    const ws = windows.map((w) => w).sort((w1, w2) => w2.zIndex - w1.zIndex);
    const last = ws[0] || { zIndex: 0 };
    const id = `${icon.id}(${windows.length})`;
    const zIndex = last.zIndex + 1;
    let title;
    let content;
    let interact;
    let height;

    switch (icon.type) {
      case 'photo':
        title = `Image Viewer - ${icon.label}`;
        if (decryptedFiles.find((f) => f === icon.id)) {
          content = <Photo src={icon.content.corrupted} />;
        } else {
          content = <Photo src={icon.content.normal} />;
        }
        break;
      case 'video':
        title = `Media NPC - ${icon.label}`;
        if (decryptedFiles.find((f) => f === icon.id)) {
          content = <Video src={icon.content.corrupted} />;
        } else {
          content = <Video src={icon.content.normal} />;
        }
        break;
      case 'text':
        title = `SadEd - ${icon.label}`;
        content = <TextEditor text={icon.content} />;
        break;
      case 'folder':
      case 'usb':
        title = `Exblorer - ${icon.label}`;
        content = this.renderIcons(icon.content, zIndex);
        break;
      case 'decrypt':
        const getDecryptor = (s) => this.decryptors[id] = {id, ref: s};
        height = '391.5px';
        title = 'Decryptor';
        content = <Decryptor
          ref={getDecryptor}
          onDecryptFinish={(id) => {
            if (id.includes('Decryptor')) {
              this.openWindow({
                type: 'photo',
                label: 'Y̷̢̨̛̹̩̲̩̙͚̟̳͙̳͙̬̐̾́̿̈́̓̋̔̑̇̅̌͒͝ͅͅo̴͈̟̠̥̳̳͈͙̣̬͗u̷̧͔̓̓̀̅̽̀̈́̿̿̚ ̸̰̤͓̳̭͔͙̿̾̇͊̓̉͆̉w̷͈͊̆̋͐̌̍̾̈́̈̋̔͗͊̍͘̚͝ǒ̷̡̪̖̩̝̫͕̮͖̦̳̠̬̳̭̖̪̂̉͝͝͝n̴̗͐͊̓̎̈̑̓̌͒̋̂̆̇̊̓̕̕',
                id: '1',
                content: {
                  normal: winner,
                  corrupted: winner,
                },
                initialCoords: {
                  x: 140,
                  y: 37,
                },
              },);
            }
            this.setState({
              decryptedFiles: [
                ...this.state.decryptedFiles,
                id,
              ]
            }, () => console.log(this.state.decryptedFiles));
          }}
        />
        interact = (args) => {
          const d = this.decryptors[id];
          if (d) {
            console.log('decryptor obj found');
            d.ref.decrypt(args);
          }
        }
        break;
      case 'web':
        title = 'FireChrome';
        content = <Browser/>;
        break;
      default:
        title = icon.label;
    }

    const win = {
      visible: true,
      id,
      zIndex,
      x: 10,
      y: 10,
      icon: icon.type,
      content,
      title,
      interact,
      height,
    }
    this.setState({
      windows: [...windows, win]
    });
  }

  closeWindow = (id) => {
    const { windows } = this.state;
    this.setState({
      windows: windows.filter((w) => w.id !== id),
      hoveredWindow: null,
    });
  }

  liftWindow = (win) => {
    const { windows } = this.state;
    const ws = windows.map((w) => w).sort((w1, w2) => w2.zIndex - w1.zIndex);

    this.setState({
      windows: windows.map((w) => {
        const last = ws[0];
        if (w.id === win.id) {
          return {
            ...w,
            zIndex: last.zIndex + 1,
          }
        }
        return w;
      })
    });
  }

  setWindowCoords = (win, x, y) => {
    const { windows } = this.state;
    this.setState({
      windows: windows.map((w) => {
        if (w.id === win.id) {
          return {
            ...w,
            x, y,
          };
        }
        return w;
      })
    })
  }

  setDatetime = () => {
    this.setState({
      datetime: new Date(),
    });
  }

  windowRefs = [];

  render() {
    const { windows, icons, datetime, } = this.state;

    return (
      <div className="App">
        {this.renderIcons(icons)}
        <ul>
          {windows.map((w) => <Window
            key={w.id}
            onMouseDown={() => this.liftWindow(w)}
            visible={w.visible}
            closeButtonAction={() => this.closeWindow(w.id)}
            headerText={w.title}
            style={{ zIndex: w.zIndex || 1 }}
            height={w.height}
            setCoords={(x, y) => this.setWindowCoords(w, x, y)}
            icon={w.icon}
            interact={w.interact}
            ref={(ref) => {
              this.windowRefs = [
                ...this.windowRefs,
                {
                  id: w.id,
                  ref,
                },
              ];
            }}
            onMouseOver={() => {
              this.setState({
                hoveredWindow: w.id,
              });
            }}
            onMouseLeave={() => {
              this.setState({
                hoveredWindow: null,
              });
            }}
          >
            {w.content}
          </Window>)}
        </ul>
        <div className="taskbar">
          <button className="startbutton"></button>
          <ul className='windows-taskbar'>
            {windows.map((w) => {
              return <li className='window-taskbar' key={w.id}>
                <span>
                  <Icon small type={w.icon} />
                </span>
              </li>;
            })}
          </ul>
          <span className="taskbarclock">
            {`${toTwoPlaces(datetime.getHours())}:${toTwoPlaces(datetime.getMinutes())}`}
          </span>
        </div>
      </div >
    );

  }
}

export default App;

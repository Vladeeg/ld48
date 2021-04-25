import React, { useLayoutEffect, useState } from 'react';

import Draggable from '../Draggable/Draggable';

import './Icon.css'

const folderIcon = 'assets/icon_folder.png';
const soundIcon = 'assets/icon_sound.png';
const fileIcon = 'assets/icon_file.png';
const webIcon = 'assets/icon_web.png';
const videoIcon = 'assets/icon_video.png';
const decryptIcon = 'assets/icon_crypt.png';
const usbIcon = 'assets/icon_fleshka.png';


const Icon = (props) => {
  let src;
  const {
    type,
    label,
    onOpen,
    small,
    draggable,
    initialCoords,
    controlledPosition,
    onMouseUp,
    defaultZIndex,
  } = props;

  switch (type) {
    case 'folder':
      src = folderIcon;
      break;
    case 'web':
      src = webIcon;
      break;
    case 'file':
      src = fileIcon;
      break;
    case 'video':
      src = videoIcon;
      break;
    case 'sound':
      src = soundIcon;
      break;
    case 'decrypt':
      src = decryptIcon;
      break;
    case 'usb':
      src = usbIcon;
      break;
    default:
      src = fileIcon;
  }

  let iconSizeStyle;
  if (small) {
    iconSizeStyle = {
      width: '12px',
      height: '12px',
    };
  }

  const icon = <span
    className='icon'
    onDoubleClick={onOpen}
  >
    <img
      src={src}
      style={iconSizeStyle}
    />
    {label && <span className='icon__label'>{label}</span>}
  </span>

  const [ zIndex, setZIndex ] = useState(defaultZIndex);
  const [ style, setStyle ] = useState({});
  useLayoutEffect(() => {
    setStyle({zIndex});
  }, [zIndex]);

  if (draggable) {
    return <Draggable
      returnToStart={controlledPosition}
      initialCoords={initialCoords}
      onMouseDown={() => {
        console.log('changez');
        setZIndex(9999999);
      }}
      onMouseUp={(x, y) => {
        setZIndex(defaultZIndex);
        onMouseUp(x, y);
      }}
      style={style}
    >
      {icon}
    </Draggable>
  }
  return icon;
}

export default Icon;

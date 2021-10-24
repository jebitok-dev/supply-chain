import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import '../styles/styles.css';

/* eslint-disable*/ 
function QrCode() {
  const [qrValue, setQrValue] = useState('jeftar');
  const handleOnChange = (event) => {
    const { value } = event.target;
    setQrValue(value);
  };
  
  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById('qr-gen');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${qrValue}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="App">
      <h1>QR Code and Download - Tracely</h1>
      <input onChange={handleOnChange} placeholder="Write your value" />
      <br />
      <QRCode
        id="qr-gen"
        value={qrValue}
        size={290}
        level="H"
        includeMargin
      />
      <p>
        Click for
        {' '}
        <button type="button" className={this.props.isClicked ? 'lightmodeButton' : 'darkmodeButton'} onClick={downloadQRCode}>
          Download QR Code
        </button>
      </p>
    </div>
  );
}

export default QrCode;

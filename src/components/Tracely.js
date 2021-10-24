import React from 'react';
import QRCode from './Qrcode';
import InputForm from './Input';

const UseTracely = () => (
  <div className="row">
    <div className="col">
      <InputForm />
    </div>
    <div className="col">
      <QRCode />
    </div>
  </div>
);

export default UseTracely;

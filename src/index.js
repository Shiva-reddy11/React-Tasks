import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import CustomButton from './function component/Button Component';
import ImageComponent from './function component/Image Component';
import ListComponent from './function component/ListComponent';
import TableComponent from './function component/TableComponent';
import InputComponent from './function component/Input Component';
import ImageCustom from './ClassComponents/ImageComponent';
import ListComp from './ClassComponents/ListComp';
import TableComp from './ClassComponents/TableComp';
import InputComp from './ClassComponents/InputComp';
import ButtonComp from './ClassComponents/ButtonComp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <div className='parent'>
   <div className='md'>
    <ImageComponent/>
    <ListComponent/>
    <TableComponent/>
    <InputComponent/>
    <CustomButton />
    </div>

    <div className='md2'>
    <ImageCustom/>
    <ListComp/>
    <TableComp/>
    <InputComp/>
    <ButtonComp/>
    </div>
   </div>
  </React.StrictMode>
);


reportWebVitals();

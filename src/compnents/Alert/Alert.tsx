import React from 'react';
import {  X } from 'lucide-react';

import "./index.scss";
import { AlertTypes } from '../../types';

interface Iprops {
     type: AlertTypes;
     icon: React.ReactNode;
     title: string;
     desc: React.ReactNode;
}

const Alert = ({type, icon, title, desc}:Iprops) => {
    return (


        <div className={type}>
          <div className="wrapper-header">
              <div className='title'>
               {icon}
             <h3>{title}</h3>
              </div>
             <span><X/></span>
         </div>
         <p>{desc}</p>
        </div>
    )
}

export default Alert
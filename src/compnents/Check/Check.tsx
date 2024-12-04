import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import './index.scss';

interface IProps {
    title: string;
    desc: string;
}

const Check = ({ title, desc }: IProps) => {
    return (
        <div className="check-wrapper">
            <div className="title-header">
                <div className='title'>
                    <CheckCircle2 />
                    <h3>{title}</h3>
                </div>
                <span><X /></span>
            </div>
            <p>{desc}</p>
        </div>
    );
};

export default Check;

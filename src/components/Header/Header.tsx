import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header: React.FC<{ image: string, title?: string, showHome?: boolean, showLayer?: boolean }> = ({ image, title, showHome = false }) => {
    return (
        <div className="header" style={{ backgroundImage: `url(${image})` }}>
            {title && <div className='title'>{title}</div>}
            {showHome && <Link className='homelink' to="/">Home</Link>}
        </div>
    )
}

export default Header;
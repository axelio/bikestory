import React from 'react';
import { Link, useRouteError } from "react-router-dom";
import './ErrorPage.css';

const ErrorPage: React.FC = () => {
    const error: any = useRouteError();
    
    return (
        <div className="error-wrapper">
            <h2>Wystąpił błąd.</h2>
            <Link to={`/`} className='refresh-page'>Prosimy o odświeżenie strony.</Link>
            <h6>{error.statusText || error.message}</h6>
        </div>
    );
}

export default ErrorPage;
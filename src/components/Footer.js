import React from 'react';
import { FaPhone, FaRegBuilding, FaRegUser, FaHome } from 'react-icons/fa';

import useSiteMetadata from './SiteMetadata';

export default () => {
    const { title, companyName, address, tel, email } = useSiteMetadata();

    return <footer className="footer has-background-white-ter has-text-grey">
        <div className="container">
        <div className="columns">
            <div className="column">
                <div className="content">
                    <p>Copyright © 2019 {title}</p>
                </div>
            </div>
            <div className="column">
                <div className="content">
                    <p><FaRegBuilding /> {companyName}</p>
                    <p><FaHome /> {address}</p>
                    <p><FaRegUser /> {email}</p>
                    <p><FaPhone /> <a href={'tel:'+tel}>{tel}</a></p>
                </div>
            </div>
        </div>
        </div>
    </footer>
}
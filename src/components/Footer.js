import React from 'react';
import { FaPhone, FaRegBuilding, FaRegUser, FaHome } from 'react-icons/fa';

import useSiteMetadata from './SiteMetadata';
import ContactCard from './ContactCard'

export default () => {
    const { title } = useSiteMetadata();

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
                    <ContactCard />
                </div>
            </div>
        </div>
        </div>
    </footer>
}
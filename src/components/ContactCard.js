import React from 'react';
import { FaPhone, FaRegBuilding, FaRegUser, FaHome } from 'react-icons/fa';

import useSiteMetadata from './SiteMetadata';

export default () => {
    const { companyName, address, tel, email, city, postcode } = useSiteMetadata();

    return <>
        <p><FaRegBuilding /> {companyName}</p>
        <p><FaHome /> {address}, {city}, {postcode}</p>
        <p><FaRegUser /> <a href={'mailto:'+email}>{email}</a></p>
        <p><FaPhone /> <a href={'tel:'+tel}>{tel}</a></p>
    </>
           

}
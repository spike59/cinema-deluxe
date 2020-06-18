import React from 'react'
import SiteLogo from './menu/SiteLogo.js';
import genres from '../data/genres.json';
import MenuSmall from './menu/MenuSmall.js';
import MenuMid from './menu/MenuMid.js';
import MenuLarge from './menu/MenuLarge.js';
const Header = ({ bp }) => {
    let mode ="default";
    switch (bp) {
        case "md":
            mode ="large";
            break;
        case "lg":
            mode ="large";
            break;
        case "xl":
            mode ="xlarge";
            break;
        default:
        break;
    }
    switch (mode)
    {
        case "default":
            return (
                <header>
                    <SiteLogo/><MenuSmall/>
                </header>
            )
        case "large":
            return (
                <header>
                    <SiteLogo/><MenuMid/>
                </header>
            )
        case "xlarge":
            return (
                <header>
                    <SiteLogo/><MenuLarge genres={genres}/>
                </header>
            )
        default:
        break;
    }

}

export default Header

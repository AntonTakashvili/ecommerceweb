import './nav.css'
import NavList from "./NavList"
import {Link} from "react-router-dom";
import React from "react";

const Nav = ({handleClickOpen,handleClose,open,setOpen}) => {

    const navLogo = 'https://images-ext-1.discordapp.net/external/9z1XfkwHsO0FdcoAStO5yEewVdECt_uhF6wKN_hPAN4/https/cryptologos.cc/logos/elrond-egld-egld-logo.png?width=660&height=660'

    return(
        <div className={'Nav'}>
            <div className={'NavItems'}>
                <img src={navLogo} alt={'navLogo'} className="navlogo"/>
                <NavList
                    open={open}
                    setOpen={setOpen}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                />
            </div>
        </div>
    )
}

export default Nav
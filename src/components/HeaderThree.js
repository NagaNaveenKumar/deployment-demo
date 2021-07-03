/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';


export default function HeaderThree(){
    return (<div className="Header3">
          <ul>
            <li>
            <a target="_blank" href="./images/brochure.pdf" className="a1">Invitation <InsertInvitationIcon/></a>
            </li>
          </ul>  
    </div>);
}
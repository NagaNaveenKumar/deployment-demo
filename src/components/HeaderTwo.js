/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import GroupIcon from '@material-ui/icons/Group';
import CategoryIcon from '@material-ui/icons/Category';
import SpeakerIcon from '@material-ui/icons/Speaker';
import SpaIcon from '@material-ui/icons/Spa';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PlaceIcon from '@material-ui/icons/Place';
import {Link} from "react-router-dom";

export default function HeaderTwo(){

    useEffect(()=>{
        var blink = document.getElementById('blink');
        setInterval(function() {
            blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
        }, 500);
    });

    return (<div className="Header2">
      <nav className="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">Menu</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to="/"><a className="nav-link" href="#"><HomeIcon />Home <span className="sr-only">(current)</span></a></Link>
            </li>
            <li className="nav-item">
            <Link to="/about"><a className="nav-link" href="#"><InfoIcon />About GIET </a></Link>
            </li>
            <li className="nav-item">
            <Link to="/commity"><a className="nav-link" href="#"><GroupIcon />Committees </a></Link>
            </li>
            <li className="nav-item">
            <Link to="/speakers"><a className="nav-link" href="#"><SpeakerIcon />Speakers </a></Link>
            </li>
            <li className="nav-item">
            <Link to="/cfp"><a className="nav-link" href="#"><CategoryIcon />Call for papers</a></Link>
            </li>
            <li className="nav-item">
            <Link to="/sponsor"><a className="nav-link" href="#"><SpaIcon />Sponsorship</a></Link>
            </li>
            <li className="nav-item">
            <Link to="/registration"><a className="nav-link" href="#"><HowToRegIcon />Registration</a></Link>
            </li>
            <li className="nav-item">
            <Link to="/imp"><a className="nav-link" href="#"><CalendarTodayIcon />Important Dates</a></Link>
            </li>
            <li className="nav-item">
            <Link to="/venue"><a className="nav-link" href="#"><PlaceIcon />Venue</a></Link>
            </li>
            <li className="nav-item">
            <Link to="/awards"><a className="nav-link" href="#" id="blink">Awards: Call for Nominations</a></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>);
}

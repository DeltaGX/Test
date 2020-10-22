import React, { Component, useEffect, useState } from 'react';
import './Home.css';
import profileservice from './ProfileService';
import { NavLink} from 'react-router-dom';
import { Button} from 'reactstrap';
import { MyNavbar } from './components/MyNavbar';
import { MyCarousel } from './components/MyCarousel';
import { BookmarkModal } from './components/BookmarkModal';
import back_button from './components/img/arrow_left.png';
import {CertModal} from './components/CertModal';
import map from './components/img/Map.png';
import lineunder from './components/img/lineunder.png';
import User from './components/img/User.png';
import contact from './components/img/contact.png';
import {Petinfo} from './Interface';


export const Home = () => {
    const[obj,setObj] = useState<Petinfo>();

    const fetchProfileInfo=() =>{
      return(
        profileservice.fetchadoption()
        .then(res => {
          setObj(res)
        })
      )
    }
  
    useEffect(()=>{
      fetchProfileInfo()
    },[])
    const petname = obj?.PetName;
    const petbreed = obj?.PetBreed;
    const petgender = obj?.PetGender;
    const pettype = obj?.type;
    const petPicUrl = obj?.petPicUrl;
    const regPetStatus = obj?.regPetStatus;
    const adopPetStatus = obj?.adopPetStatus;
    const petstatus = obj?.PetStatus;
    const petlength = obj?.petLength;
    const petheight = obj?.petHeight;
    const userid = obj?.UserId;
    const adopuserid = obj?.AdopUserId;

    const PetName = (props: any) =>{
        console.log(props)
        return(
            <div>{props.petname}</div>
        )
    }
    const Information = (props:any) =>{
        console.log(props)
        return(
            <div>
            <p>Type: {props.Type}</p>6
            <p>Gender: {props.Gender}</p>
            <p>Weight: {props.Weight}</p>        
            <p>Size: {props.Size}</p>
            <p>Color: {props.Color}</p>
            <p>Breed: {props.Breed}</p>
            <p>Location:</p>
            <p>{props.Location}</p>
            </div>
            )
        }
    const Desc = (props:any) =>{
        console.log(props)
            return(
                <div>{props.Desc}</div>
            )}
    
    return(
    <div className='font'>
        < MyNavbar />
        <Button color="link"><img className='back_button' src={back_button} alt='back_button'/></Button>
        <div className="Header">
            {petname}
        </div>
        <div className="container">
        < MyCarousel />
        </div>
        <div className="container">
            <div>Information</div>
            <div>-----------</div>
        </div>
        <div className="infoText">
            <Information className="back" Type="Dog" Gender="Male" Weight="33 Kg" Size="length 50 cm height 70 cm" Color="brown" Breed="หอยทาก" Location="Blablabla" />
            <div className="Column">
                 <BookmarkModal/>
                 <CertModal/>
            </div>
        </div>
        <img src={map} className="Map"/>
        
        <div className='Text'>
            <p>Description:</p>
            <Desc Desc="blablabla"></Desc>
        </div>
        <img src={lineunder} className="lineunder"/>
        <p className='Text'>Post by:</p>
        <div className="PostbyText">
            <img src={User} className="User"/>
            <p> Tiffany Young </p>
            <NavLink to='/contactprofile' className='Profile'> Profile</NavLink>     
            <NavLink to='/chat'><img src={contact} className="Contact" alt='contact'/></NavLink>    
        </div>
    </div>
    );
}

export default Home;
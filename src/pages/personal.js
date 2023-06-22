
import { useNavigate } from "react-router-dom"
import { VscHome } from "react-icons/vsc";
import { dataPrsn } from "../config/dataCompany";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdLocationPin } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
const Personal = () =>{
    const { personal } = useParams()
    const navigate = useNavigate()
    const [PersonalData, setPersonalData] = useState({})


    const ToUrl = (url)=>{
        if (url.length>0) {
            window.open(url, '_blank');
        }
    }

    const makeCall =(phoneNumber)=>{
        var telLink = 'tel:' + phoneNumber;
        window.location.href = telLink;
      }


      

      
    const handleButtonClick = (id) => {
        const fileUrl = process.env.PUBLIC_URL+'/contact/'+id+'.vcf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = id+'.vcf';
        link.target = '_blank';
        link.click();
    };

    useEffect(()=>{
        for (let i = 0; i < dataPrsn.length; i++) {
            const element = dataPrsn[i];
            if (element.url==personal) {
                setPersonalData(element)
            }
        }
    },[personal])



    return(
        <div className="company">
            <img className="logoGroup" src={process.env.PUBLIC_URL + '/icon/svg/isatisPouya.svg'} />
            <div className="title">
                <p>درگاه ارتباطی {PersonalData.name}</p>
            </div>
            <div className="info">
            <div className="pictuer">
                    {
                        PersonalData.img==''?
                        <img src={process.env.PUBLIC_URL+'/icon/person.png'}/>:
                        <img src={process.env.PUBLIC_URL+'/personalImg/'+PersonalData.img}/>
                    }
                    <div className="brdw"></div>
                    <p className="istp">ایساتیس پویا</p>

            </div>
            <div className="feild">
                    <p>نام و نام خانوادگی</p>
                    <p>{PersonalData.name}</p>
                </div>
                <div className="feild">
                    <p>نام شرکت</p>
                    <p>{PersonalData.company}</p>
                </div>
                <div onClick={()=>{makeCall(PersonalData.mobile)}} className="feild">
                    <p>تلفن همراه</p>
                    <p>{PersonalData.mobile}</p>
                </div>
                <div onClick={()=>{makeCall(PersonalData.phone)}} className="feild">
                    <p>شماره ثابت</p>
                    <p>{PersonalData.phone}</p>
                </div>
                <div className="feild">
                    <p>آدرس</p>
                    <p>{PersonalData.address}</p>
                </div>
            </div>
            <button onClick={()=>handleButtonClick(PersonalData.url)} className="contact">ذخیره مخاطب</button>
            <div className="btn">
                {PersonalData.telegram?<span onClick={()=>ToUrl('https://t.me/'+PersonalData.telegram)}><FaTelegramPlane/></span>:null}
                {PersonalData.whatsapp?<span onClick={()=>ToUrl('https://wa.me/'+PersonalData.whatsapp)}><IoLogoWhatsapp/></span>:null}
                {PersonalData.loction?<span onClick={()=>ToUrl(PersonalData.loction)}><MdLocationPin/></span>:null}
                {PersonalData.ita?<span className="eta" onClick={()=>ToUrl('eitaa.com/'+PersonalData.whatsapp)}>ایتا</span>:null}
                {PersonalData.insta?<span onClick={()=>ToUrl('https://www.instagram.com/'+PersonalData.insta)}><FiInstagram /></span>:null}
            </div>
        </div>
    )
}

export default Personal
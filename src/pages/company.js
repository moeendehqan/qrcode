import { useParams } from "react-router-dom"
import { dataComp } from "../config/dataCompany"
import { useEffect, useState } from "react"
import { VscHome } from "react-icons/vsc";
import { MdLocationPin } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Company = () =>{
    const { company } = useParams()
    const [CompanyData, setCompanyData] = useState({})
    const navigate = useNavigate()

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
        for (let i = 0; i < dataComp.length; i++) {
            const element = dataComp[i];
            if (element.url==company) {
                setCompanyData(element)
            }
        }
    },[company])



    return(
        <div className="company">
            <img className="logoGroup" src={process.env.PUBLIC_URL + '/icon/svg/isatisPouya.svg'} />
            <div className="title">
                <p onClick={()=>navigate('/')}>خانه <VscHome /></p>
                <p>{CompanyData.title}</p>
            </div>

            <div className="info">
                <div className="feild">
                    <p>نام شرکت</p>
                    <p>{CompanyData.title}</p>
                </div>
                <div onClick={()=>{makeCall(CompanyData.phone)}} className="feild">
                    <p>شماره تماس</p>
                    <p>{CompanyData.phone}</p>
                </div>
                <div onClick={()=>{makeCall(CompanyData.phone)}} className="feild">
                    <p>فکس</p>
                    <p>{CompanyData.fax}</p>
                </div>
                <div className="feild">
                    <p>آدرس</p>
                    <p>{CompanyData.address}</p>
                </div>
                <div onClick={()=>ToUrl(CompanyData.website)} className="feild">
                    <p>سایت</p>
                    <p>{CompanyData.website}</p>
                </div>
            </div>

            <button onClick={()=>handleButtonClick(CompanyData.url)} className="contact">ذخیره مخاطب</button>
            <div className="btn">
                <span onClick={()=>ToUrl(CompanyData.loction)}><MdLocationPin/></span>
                <span onClick={()=>ToUrl(CompanyData.telegram)}><FaTelegramPlane/></span>
                <span onClick={()=>ToUrl(CompanyData.whatsapp)}><IoLogoWhatsapp/></span>
            </div>



        

        </div>
    )
}


export default Company
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Loader from "../componet/loader"
import { dataComp } from "../config/dataCompany"
import { BiLineChart , BiSolidCoinStack} from "react-icons/bi";
import { BsUmbrella } from "react-icons/bs";
import { RiExchangeFundsLine } from "react-icons/ri";
import { GiTwoCoins } from "react-icons/gi";
import { PopUpUI } from "../componet/PopUp-UI";
const Home = () => {
    const [slider,setSlider] = useState(['1.jpg','3.jpg'])
    const navigate = useNavigate()
    const [showPopUp, setShowPopUp] = useState(false);

    const closePopup = () =>{
        setShowPopUp(false)
    }

    
    const ToUrl = (url)=>{
        if (url.length>0) {
            window.open(url, '_blank');
        }
    }

    const PopUp = () => {
        setShowPopUp(true);
      };
     
      useEffect(() => {
        const popupTimer = setTimeout(() => {
          PopUp();
        }, 5000);
      
        return () => clearTimeout(popupTimer);
      }, []);
      
    return (
       <>
        <div className="home" onClick={()=>setShowPopUp(false)}>
            <Loader />
            <div className="Hdr">
                <img className="logoGroup" src={process.env.PUBLIC_URL + '/icon/svg/isatisPouya.svg'} />
                <div className="title"></div>

            </div>
            <div className="logos">
                {
                    dataComp.map((i)=>{
                        return(
                            <div className="company" onClick={()=>navigate('/c/'+i.url)}>
                                <img src={process.env.PUBLIC_URL + 'icon/svg/' + i.url+'.svg'} />
                                <p>{i.title}</p>
                                <p>{i.subTitle}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="conteinerAds">
                    {
                        slider.map(i=>{
                            return(
                                <div onClick={()=>ToUrl('http://ipgrp.ir')} className="ads">
                                    <img src={process.env.PUBLIC_URL+'/slider/'+i} />
                                </div>

                            )
                        })
                    }
            </div>
            <div className="FixBtn">
                <div className="BtnF">
                    <div onClick={()=>navigate('/c/brkip')} className="btn">
                        <span><BiLineChart/></span>
                        <p>بورس</p>
                    </div>
                    <div onClick={()=>navigate('/c/brkoi')} className="btn">
                        <span><BsUmbrella/></span>
                        <p>بیمه</p>
                    </div>
                    <div onClick={()=>navigate('/c/sbgdi')} className="btn">
                        <span><RiExchangeFundsLine/></span>
                        <p>سبدگردانی</p>
                    </div>
                    <div onClick={()=>navigate('/c/inisp')} className="btn">
                        <span><GiTwoCoins /></span>
                        <p>سرمایه گذاری</p>
                    </div>
                </div>


            </div>

        </div>
            {showPopUp && <PopUpUI onClose={closePopup}/>}
       </>
    )

}

export default Home
import { useParams } from "react-router-dom"
import { dataComp } from "../config/dataCompany"
import { useEffect, useState } from "react"
import { VscHome } from "react-icons/vsc";

const Company = () =>{
    const { company } = useParams()
    const [CompanyData, setCompanyData] = useState({})

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
            <img src={process.env.PUBLIC_URL + 'icon/svg/isatisPouya.svg'} />
            <div className="title">
                <p>خانه <VscHome /></p>
                <p>درگاه جامع ارتباط با گروه مالی و سرمایه ایساتیس پویا</p>
            </div>

            <div className="info">
                <div className="feild">
                    <p>نام شرکت</p>
                    <p>{CompanyData.title}</p>
                </div>
                <div className="feild">
                    <p>شماره تماس</p>
                    <p>{CompanyData.phone}</p>
                </div>
                <div className="feild">
                    <p>فکس</p>
                    <p>{CompanyData.fax}</p>
                </div>
                <div className="feild">
                    <p>آدرس</p>
                    <p>{CompanyData.address}</p>
                </div>
                <div className="feild">
                    <p>سایت</p>
                    <p>{CompanyData.website}</p>
                </div>
            </div>

            <button>ذخیره مخاطب</button>
            <div className="btn">


            </div>



        

        </div>
    )
}


export default Company
import { useParams } from "react-router-dom"
import { dataComp } from "../config/dataCompany"
import { useEffect, useState } from "react"



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
            

        

        </div>
    )
}


export default Company
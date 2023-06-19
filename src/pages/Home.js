import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Loader from "../componet/loader"
import { dataComp } from "../config/dataCompany"
const Home = () => {
    const navigate = useNavigate()


    return (
        <div className="home">
            <Loader />
            <img className="logoGroup" src={process.env.PUBLIC_URL + '/icon/svg/isatisPouya.svg'} />
            <div className="title">
                <p>درگاه جامع ارتباط با گروه مالی و سرمایه ایساتیس پویا</p>
            </div>
            <div className="logos">
                {
                    dataComp.map((i)=>{
                        return(
                            <div className="company" onClick={()=>navigate('/c/'+i.url)}>
                                <img src={process.env.PUBLIC_URL + 'icon/svg/' + i.url+'.svg'} />
                                <p>{i.title}</p>
                            </div>
                        )
                    })
                }
            </div>




        </div>

    )

}

export default Home
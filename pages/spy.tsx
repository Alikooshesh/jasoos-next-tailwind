import {useState} from "react";
import SpyDataSetter from "@/components/pages/spy/dataSetter";
import SpyMainBox from "@/components/pages/spy/main";

const SpyPage = () => {

    const [data,setData] = useState({
        playersCount: 0,
        spyCount: 0,
    })

    const [pageStep , setPageStep] = useState<'dataSetter' | 'main' | 'timer'>('dataSetter')

    return(
        <>
            <div className="w-full h-screen max-w-[450px] mx-auto p-[16px] pt-[64px] pb-[55px] bg-[#981010]">
                {pageStep === 'dataSetter' ? <SpyDataSetter data={data} setData={setData} nextPageStep={()=>setPageStep('main')}/> : <></>}
                {pageStep === 'main' ? <SpyMainBox playersCount={data.playersCount} spyCount={data.spyCount}/> : <></>}
            </div>
        </>
    )
}

export default SpyPage
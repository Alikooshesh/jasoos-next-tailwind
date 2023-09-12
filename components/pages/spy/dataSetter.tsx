interface Iprops{
    data : {
        playersCount : number,
        spyCount : number
    },
    setData : Function,
    nextPageStep : Function
}

const SpyDataSetter = ({data,setData,nextPageStep}:Iprops)=>{
    return(
        <div className={'w-full h-full flex flex-col gap-[39px] items-center'}>
            <div className={'w-full h-full flex flex-col justify-between items-center'}>
                <div className={'w-full text-[32px] font-[500] text-black'}>
                    <p className={'w-full text-center'}>
                        بازیکن
                    </p>

                    <div className={'w-[184px] mx-auto flex items-center justify-between'}>
                        <svg onClick={()=> {
                            if (data.playersCount>0){
                                setData({...data,playersCount: data.playersCount-1})
                            }
                        }} className={'cursor-pointer'} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 14H8.16667M19.8333 14H16.9167M24.5 14C24.5 19.799 19.799 24.5 14 24.5C8.20101 24.5 3.5 19.799 3.5 14C3.5 8.20101 8.20101 3.5 14 3.5C19.799 3.5 24.5 8.20101 24.5 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>


                        <p className={'font-[700]'}>
                            {data.playersCount}
                        </p>

                        <svg onClick={()=> setData({...data,playersCount: data.playersCount+1})} className={'cursor-pointer'} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 8.16667V19.8333M14 14H19.8333M8.16667 14H11.0833M24.5 14C24.5 19.799 19.799 24.5 14 24.5C8.20101 24.5 3.5 19.799 3.5 14C3.5 8.20101 8.20101 3.5 14 3.5C19.799 3.5 24.5 8.20101 24.5 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                </div>

                <div className={'w-full text-[32px] font-[500] text-black'}>
                    <p className={'w-full text-center'}>
                        جاسوس
                    </p>

                    <div className={'w-[184px] mx-auto flex items-center justify-between'}>
                        <svg onClick={()=> {
                            if (data.spyCount>0){
                                setData({...data,spyCount: data.spyCount-1})
                            }
                        }} className={'cursor-pointer'} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 14H8.16667M19.8333 14H16.9167M24.5 14C24.5 19.799 19.799 24.5 14 24.5C8.20101 24.5 3.5 19.799 3.5 14C3.5 8.20101 8.20101 3.5 14 3.5C19.799 3.5 24.5 8.20101 24.5 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <p className={'font-[700]'}>
                            {data.spyCount}
                        </p>

                        <svg onClick={()=> {
                            if (data.spyCount<data.playersCount-1){
                                setData({...data,spyCount: data.spyCount+1})
                            }
                        }} className={'cursor-pointer'} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 8.16667V19.8333M14 14H19.8333M8.16667 14H11.0833M24.5 14C24.5 19.799 19.799 24.5 14 24.5C8.20101 24.5 3.5 19.799 3.5 14C3.5 8.20101 8.20101 3.5 14 3.5C19.799 3.5 24.5 8.20101 24.5 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                </div>

                <div/>
            </div>

            <button
                onClick={()=>nextPageStep()}
                className={'px-[27px] py-[7px] text-[32px] font-[700] bg-black text-[#981010] rounded-[8px]'}
            >
                شروع
            </button>
        </div>
    )
}

export default SpyDataSetter
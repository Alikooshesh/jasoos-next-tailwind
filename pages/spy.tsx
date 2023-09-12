import { useEffect, useState } from "react"

const SpyPage = ()=>{

    const [touchStatus , setTouchStatus] = useState(false)

    useEffect(()=>{
        const spyWordBox = document.getElementById('spyWord-box')
        const startTouchHandler = ()=> setTouchStatus(true)
        spyWordBox?.addEventListener('touchstart',startTouchHandler)
        spyWordBox?.addEventListener('mousedown',startTouchHandler)

        const endTouchHandler = ()=> setTouchStatus(false)
        spyWordBox?.addEventListener('touchend',endTouchHandler)
        spyWordBox?.addEventListener('mouseup',endTouchHandler)

        return ()=>{
            spyWordBox?.removeEventListener('touchstart',startTouchHandler)
            spyWordBox?.removeEventListener('touchend',endTouchHandler)

            spyWordBox?.removeEventListener('mousedown',startTouchHandler)
            spyWordBox?.removeEventListener('mouseup',endTouchHandler)
        }
    },[])

    useEffect(()=>{
        const fingerScannerInterval = setInterval(()=>{
            const scannerElement = document.getElementById('fingerScanner')

            if(scannerElement?.offsetHeight){

                if(scannerElement?.offsetHeight < 1 || scannerElement?.offsetHeight > 80){
                    scannerElement.style.height = `1px`
                }else{
                    scannerElement.style.height = `${scannerElement?.offsetHeight + 1}px`
                }
            }
        },40)

        return()=>{
            clearInterval(fingerScannerInterval)
        }
    },[])

    return(
        <>
            <div id="spyWord-box" className="w-full h-screen max-w-[450px] mx-auto p-[16px] bg-[#981010]">
                <div className="w-full h-full flex flex-col justify-between items-center">
                    <div/>
                    <div className="w-full">
                        <p className="w-full text-center text-black text-[32px] font-[700]">
                        روی اثرانگشت نگه دار    
                        </p>

                        <p className="w-full mt-[23px] text-center font-[700] text-[12px] text-white">
                        تا وقتی که نگهداری کلمه بهت نشون داده میشه
                        <br/>
                        بعد از اینکه خوندی انشگتت رو بردار تا کلمه مخفی بشه  
                        </p>
                    </div>

                    <div className="w-[60px] h-[80px] mb-[70px] relative">
                    <svg className="w-full h-full" viewBox="0 0 49 64" fill={touchStatus ? '#41F900' : 'black'} xmlns="http://www.w3.org/2000/svg">
<path d="M28.3324 38.7545V34.2118C28.3324 32.4206 26.8882 30.9634 25.1131 30.9634C23.3379 30.9634 21.8938 32.4206 21.8938 34.2118V38.3133C21.8938 43.2559 20.0892 48.0013 16.8123 51.6752L12.2942 56.7407C11.9146 57.1663 11.9488 57.8218 12.3706 58.205C12.7923 58.588 13.4419 58.5535 13.8216 58.1279L18.3397 53.0623C21.9567 49.007 23.9486 43.769 23.9486 38.3133V34.2118C23.9486 33.5639 24.471 33.0368 25.1131 33.0368C25.7551 33.0368 26.2775 33.5639 26.2775 34.2118V38.7545C26.2775 44.837 24.0444 50.6653 19.9895 55.166L15.5854 60.0543C15.2037 60.4779 15.2347 61.1338 15.6545 61.5189C15.8514 61.6995 16.0987 61.7884 16.3453 61.7884C16.6247 61.7884 16.9031 61.6741 17.1058 61.4491L21.5098 56.5607C25.9094 51.6775 28.3324 45.3538 28.3324 38.7545Z" fill="current"/>
<path d="M32.7162 34.2117C32.7162 29.9815 29.3055 26.54 25.1132 26.54C20.9209 26.54 17.5102 29.9815 17.5102 34.2117V38.3133C17.5102 42.1614 16.1052 45.8559 13.5541 48.7161L10.342 52.3174C9.96243 52.743 9.99667 53.3985 10.4185 53.7816C10.8403 54.1647 11.4897 54.1298 11.8695 53.7045L15.0815 50.1032C17.9728 46.8616 19.5652 42.6745 19.5652 38.3133V34.2117C19.5652 31.1248 22.0541 28.6135 25.1133 28.6135C28.1726 28.6135 30.6614 31.1248 30.6614 34.2117V38.7545C30.6614 45.9395 28.0236 52.8247 23.2334 58.1414L19.5175 62.266C19.1357 62.6895 19.1667 63.3454 19.5866 63.7305C19.7834 63.9112 20.0307 64.0001 20.2773 64.0001C20.5567 64.0001 20.8351 63.8858 21.0379 63.6607L24.7539 59.5361C29.8884 53.8369 32.7162 46.4566 32.7162 38.7545V34.2117Z" fill="current"/>
<path d="M37.0997 34.2115C37.0997 27.5422 31.7226 22.1165 25.1131 22.1165C18.5035 22.1165 13.1264 27.5422 13.1264 34.2115V38.313C13.1264 41.0665 12.121 43.7102 10.2955 45.7568L7.40331 48.9994C7.02371 49.425 7.05795 50.0805 7.47975 50.4636C7.90141 50.8467 8.55115 50.8118 8.93075 50.3865L11.8229 47.1439C13.9886 44.7159 15.1812 41.5796 15.1812 38.313V34.2115C15.1812 28.6855 19.6366 24.1899 25.1131 24.1899C30.5895 24.1899 35.0449 28.6855 35.0449 34.2115V38.7542C35.0449 47.0422 32.002 54.984 26.4768 61.1165L25.4484 62.258C25.0668 62.6817 25.0977 63.3374 25.5176 63.7225C25.7144 63.9031 25.9618 63.9921 26.2083 63.9921C26.4878 63.9921 26.7661 63.8778 26.9689 63.6527L27.9971 62.5112C33.8669 55.9961 37.0996 47.5592 37.0996 38.7542V34.2115H37.0997Z" fill="current"/>
<path d="M8.74278 34.2118C8.74278 34.7844 9.2028 35.2485 9.77021 35.2485C10.3376 35.2485 10.7976 34.7844 10.7976 34.2118C10.7976 30.7208 12.0537 27.3485 14.3346 24.7161C16.5943 22.1082 19.6956 20.4027 23.0672 19.9139C23.6289 19.8325 24.0188 19.3069 23.9381 18.7403C23.8574 18.1736 23.3361 17.7808 22.775 17.8616C18.9174 18.4209 15.3704 20.3705 12.7876 23.3515C10.1793 26.3617 8.74278 30.2187 8.74278 34.2118Z" fill="current"/>
<path d="M10.7975 38.3133C10.7975 37.7406 10.3375 37.2766 9.77005 37.2766C9.20264 37.2766 8.74262 37.7406 8.74262 38.3133C8.74262 39.9724 8.13699 41.5649 7.03723 42.7979L4.46468 45.6823C4.08508 46.1078 4.11932 46.7633 4.54112 47.1464C4.73756 47.3248 4.98319 47.4125 5.22813 47.4125C5.50923 47.4125 5.78938 47.2967 5.99213 47.0693L8.56467 44.185C10.0044 42.5706 10.7975 40.4855 10.7975 38.3133Z" fill="current"/>
<path d="M39.4669 47.5675C38.9177 47.4232 38.3566 47.7542 38.2127 48.308C37.8334 49.7703 37.3616 51.2241 36.8099 52.6287C36.6009 53.1611 36.8591 53.7636 37.3867 53.9744C37.5109 54.024 37.6389 54.0475 37.7649 54.0475C38.1738 54.0475 38.5605 53.7994 38.7204 53.3925C39.3025 51.91 39.8005 50.376 40.2007 48.8328C40.3443 48.2791 40.0157 47.7125 39.4669 47.5675Z" fill="current"/>
<path d="M36.047 21.9275C35.6249 21.5444 34.9753 21.5796 34.596 22.0053C34.2166 22.431 34.2512 23.0865 34.6731 23.4693C37.6952 26.2106 39.4284 30.126 39.4284 34.2116V38.7544C39.4284 40.4785 39.3106 42.2159 39.0782 43.9185C39.0008 44.4857 39.3937 45.0088 39.9557 45.0869C40.0033 45.0935 40.0505 45.0967 40.0972 45.0967C40.6025 45.0967 41.0429 44.7205 41.1137 44.2013C41.3589 42.4053 41.4833 40.5726 41.4833 38.7542V34.2116C41.4834 29.5388 39.5019 25.0614 36.047 21.9275Z" fill="current"/>
<path d="M31.2439 21.1598C31.3865 21.2283 31.5368 21.2607 31.6848 21.2607C32.0688 21.2607 32.4372 21.0424 32.6132 20.6693C32.8572 20.1525 32.6395 19.5338 32.1273 19.2877C30.647 18.5765 29.0737 18.0967 27.451 17.8616C26.8885 17.7808 26.3687 18.1737 26.288 18.7403C26.2073 19.3069 26.5971 19.8325 27.1588 19.9139C28.5764 20.1195 29.9507 20.5386 31.2439 21.1598Z" fill="current"/>
<path d="M25.1131 13.2698C24.7287 13.2698 24.3399 13.2806 23.9573 13.3018C23.3907 13.3334 22.9567 13.8224 22.9879 14.394C23.0193 14.9657 23.5034 15.406 24.0704 15.372C24.4155 15.3527 24.7662 15.3431 25.1129 15.3431C35.4237 15.3431 43.8122 23.8072 43.8122 34.2113V38.7541C43.8122 39.3268 44.2722 39.7908 44.8396 39.7908C45.407 39.7908 45.867 39.3268 45.867 38.7541V34.2115C45.8671 22.6642 36.5568 13.2698 25.1131 13.2698Z" fill="current"/>
<path d="M13.8793 18.8951C14.0816 18.8951 14.2862 18.8348 14.4649 18.7094C16.1743 17.51 18.0516 16.6146 20.045 16.0474C20.5912 15.892 20.9091 15.3192 20.7551 14.7682C20.6012 14.2172 20.0333 13.8968 19.4874 14.0517C17.2737 14.6814 15.1892 15.6757 13.2919 17.0068C12.826 17.3338 12.7109 17.9798 13.0349 18.4498C13.2345 18.7398 13.5542 18.8951 13.8793 18.8951Z" fill="current"/>
<path d="M6.41375 38.3131V34.2116C6.41375 29.3888 8.22381 24.7957 11.5105 21.2782C11.8997 20.8615 11.8806 20.2055 11.4677 19.8127C11.0549 19.4198 10.4046 19.4393 10.0154 19.8558C6.36772 23.7595 4.35889 28.858 4.35889 34.2116V38.3131C4.35889 38.8775 4.15285 39.4192 3.77887 39.8384L2.51198 41.2587C2.13238 41.6844 2.16663 42.3398 2.58842 42.7229C2.78473 42.9013 3.03049 42.9891 3.27543 42.9891C3.55653 42.9891 3.83654 42.8734 4.03943 42.646L5.30632 41.2257C6.02045 40.4248 6.41375 39.3904 6.41375 38.3131Z" fill="current"/>
<path d="M48.9461 26.1397C47.8192 22.7606 46.0284 19.7078 43.6232 17.0661C43.2392 16.6445 42.5893 16.6166 42.1715 17.004C41.7537 17.3915 41.7262 18.0472 42.11 18.469C44.3193 20.8954 45.9641 23.6987 46.9987 26.8008C47.1431 27.2339 47.5433 27.5072 47.9723 27.5072C48.0809 27.5072 48.1914 27.4896 48.3001 27.4527C48.8378 27.2701 49.1271 26.6823 48.9461 26.1397Z" fill="current"/>
<path d="M33.2327 10.2043C32.6961 10.019 32.1117 10.3077 31.928 10.8496C31.7443 11.3913 32.0306 11.9807 32.5675 12.1659C34.833 12.9482 36.9601 14.0814 38.8896 15.5344C39.0741 15.6734 39.2896 15.7403 39.5033 15.7403C39.8165 15.7403 40.1258 15.5964 40.3276 15.3235C40.667 14.8647 40.5733 14.215 40.1187 13.8726C38.0176 12.2907 35.7009 11.0564 33.2327 10.2043Z" fill="current"/>
<path d="M9.14902 17.404C13.4709 13.2227 19.1404 10.9199 25.1131 10.9199C26.2222 10.9199 27.3374 11.0005 28.4277 11.1592C28.9898 11.2419 29.5104 10.8479 29.5915 10.2812C29.6726 9.71444 29.2831 9.18889 28.7214 9.10706C27.534 8.93427 26.32 8.8465 25.1131 8.8465C18.6078 8.8465 12.4332 11.3541 7.72692 15.9074C3.03526 20.4465 0.291476 26.5379 0.00105558 33.0594C-0.0244247 33.6314 0.414493 34.116 0.981224 34.1416C0.996978 34.1424 1.01259 34.1427 1.02821 34.1427C1.57439 34.1427 2.02907 33.7086 2.05386 33.1525C2.32031 27.1656 4.84012 21.5727 9.14902 17.404Z" fill="current"/>
<path d="M25.1131 4.4231C22.8155 4.4231 20.5259 4.69181 18.3082 5.22178C17.756 5.35365 17.4145 5.91237 17.5452 6.46944C17.676 7.0265 18.2297 7.37124 18.7818 7.23923C20.8446 6.74659 22.9746 6.49653 25.1131 6.49653C32.647 6.49653 39.6796 9.52526 44.9151 15.0246C45.1169 15.2365 45.3862 15.3432 45.6562 15.3432C45.9122 15.3432 46.1687 15.2473 46.3679 15.0541C46.7771 14.6574 46.7902 14.0011 46.397 13.5884C43.6691 10.723 40.4648 8.46892 36.8732 6.8891C33.153 5.25275 29.1963 4.4231 25.1131 4.4231Z" fill="current"/>
<path d="M2.03445 17.3347C2.2224 17.4832 2.44556 17.5552 2.66721 17.5552C2.97229 17.5552 3.27421 17.4187 3.47682 17.1576C6.405 13.3837 10.2599 10.4235 14.6247 8.59683C15.1488 8.37746 15.3976 7.77091 15.1802 7.24205C14.9628 6.71318 14.3614 6.46188 13.8376 6.68153C9.14687 8.64452 5.00468 11.825 1.85896 15.8791C1.50909 16.3302 1.58772 16.9818 2.03445 17.3347Z" fill="current"/>
<path d="M10.8669 5.35292C11.0168 5.35292 11.169 5.31974 11.3128 5.24952C15.6387 3.14194 20.2818 2.07343 25.113 2.07343C27.6306 2.07343 30.1381 2.37229 32.5654 2.96169C33.1168 3.09522 33.6719 2.75297 33.8047 2.19632C33.9374 1.63967 33.5978 1.07971 33.046 0.945763C30.4615 0.318203 27.7924 0 25.113 0C19.9698 0 15.0262 1.1379 10.4195 3.38232C9.90854 3.63127 9.69429 4.25109 9.94101 4.76669C10.1181 5.137 10.485 5.35292 10.8669 5.35292Z" fill="current"/>
<path d="M36.8597 4.33798C37.9189 4.76358 38.9673 5.25292 39.9757 5.79215C40.129 5.87425 40.2937 5.9131 40.4558 5.9131C40.8241 5.9131 41.1801 5.7128 41.3645 5.36156C41.6301 4.85564 41.4392 4.22822 40.9378 3.96006C39.8642 3.386 38.7478 2.86501 37.6199 2.41176C37.0926 2.19985 36.4952 2.45945 36.2852 2.99121C36.0753 3.52312 36.3326 4.12621 36.8597 4.33798Z" fill="current"/>
</svg>

        {touchStatus ?
        <div id="fingerScanner" className="w-[130%] border-b border-[#41F900] absolute top-0 left-[-15%]"/> : <></>    
    }

                    </div>
                </div>
            </div>
        </>
    )
}

export default SpyPage
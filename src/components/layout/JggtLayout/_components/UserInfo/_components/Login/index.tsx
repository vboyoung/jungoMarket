import Text from "@/components/common/Text"
import LoginPannel from "@/components/shared/LoginPannel"
import LoginPanner from "@/components/shared/LoginPannel"
import { useState } from "react"


export default function Login(){

    const [showModal, setShowModal] = useState(false)
    const [isLoggedIn, setIsLoggendIn] = useState<boolean | undefined>()


    return(
        <>
            {isLoggedIn === undefined ? (
            <Text 
                size="sm"
                color="grey"
                onClick={() => setShowModal(true)}
                className="cursor-pointer"
            >
            로그인 / 회원가입
            </Text> 
            ) :  (
            <Text
                size="sm"
                color="grey"
                className="cursor-pointer"
            >
            로그아웃
            </Text>
            )}


            {showModal && (
                <div 
                    className="fixed top-0 left-0 w-screen h-screen bg-gray-400/50 z-50 flex justify-center items-center"
                    onClick={() =>  setShowModal(false)}
                >

                <LoginPannel />

                </div>
            )}

        
       
        </>
    )

}
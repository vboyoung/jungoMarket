import Input from "@/components/common/Input"
import Button from "@/components/common/Button"
import { useEffect, useState } from "react"
import { disablePageScroll, enablePageScroll } from "scroll-lock";

interface Props { 
    handleSetType : (type?: 'login' | 'signup') => void
}

export default function Login({handleSetType}:Props){

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        showModal ? (disablePageScroll()) : (enablePageScroll())
    },[showModal])

    return(
        <form className="my-2 flex flex-col gap-2 w-full">
            <Input name="email" type="email" placeholder="이메일" required />
            <Input name="password" type="password" placeholder="비밀번호" required />

            <div className="flex flex-col gap-2 w-full">
                <Button outline>로그인</Button>
                <Button onClick={() => handleSetType('signup') }>
                회원가입
                </Button>
            </div>
        </form>
    )
}
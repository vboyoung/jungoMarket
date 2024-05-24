import Input from "@/components/common/Input"
import Button from "@/components/common/Button"

interface Props { 
    handleSetType : (type?: 'login' | 'signup') => void
}


export default function SignUp ({handleSetType} : Props){

    return(
        <form className="my-2 flex flex-col gap-2 w-full">
        <Input name="email" type="email" placeholder="이메일" required />
        <Input name="password" type="password" placeholder="비밀번호" required />

        <div className="flex flex-col gap-2 w-full">
            <Button onClick={() => handleSetType('login')}>
                로그인
            </Button>
            <Button outline>
            회원가입
            </Button>
        </div>
    </form>
    )
}
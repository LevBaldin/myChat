import Button from "../ui/Button"
import Input from "../ui/Input"

function LoginForm() {
    return (
        <>
            <form action="" className="p-3 rounded-2xl min-w-2 bg-secondary flex flex-col gap-5">
                <Input type="text" placeholder="YoureEmail" label="Email:" />
                <Input type="password" placeholder="*****" label="Password:" />
                {/* <input type="text" /> */}
                <div className="flex gap-5 justify-center items-center self-center flex-col max-w-4/5">
                    <Button text="Log In" bg="main" />
                    <Button text="I don't have an accout" />
                </div>
            </form>
        </>
    )
}

export default LoginForm

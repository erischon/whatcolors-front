import { signInWithGooglePopup } from "../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
    }

    return (
        <button onClick={ logGoogleUser } className="font-medium">Sign In</button>
    )
}

export default SignIn
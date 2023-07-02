import { signInWithGooglePopup,createUserDocumentFromAuth, } from "../../utils/firebase/firebase" ;



export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>Sign-in
      <button onClick={logGoogleUser}>sign in google</button>
    </div>
  )
}

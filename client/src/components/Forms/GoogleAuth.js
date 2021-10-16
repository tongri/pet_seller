import { useDispatch } from "react-redux"
import GoogleLogin from 'react-google-login'
import { authenticateGoogle } from '_redux/actions/users.action'

const GoogleAuth = () => {
  const dsp = useDispatch()

  const responseGoogle = ({ googleId, profileObj: { name, email } }) => {
      dsp(authenticateGoogle({ google_id: googleId, username: name, email }))
    }

    const clientId = "807201870886-soujis45kr22h0hl5tg7ek5p35mag1en.apps.googleusercontent.com"

  return (
    <GoogleLogin clientId={clientId} buttonText="Login with Google"
      onSuccess={( res ) => responseGoogle(res)} 
      cookiePolicy={"single_host_origin"}
    />
  )

}

export default GoogleAuth
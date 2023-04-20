import React from 'react';
import "./SignIn.css"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';


// const responseFacebook = (response) => {
//     console.log('Encoded JWT ID token : ', response.credential);
//     // add my own logic here to handle the Facebook login response
// };



// const FacebookAuth = () => {

//     const responseFacebook = (response) => {
//         console.log(response);
//         // add my own logic here to handle the Facebook login response
//     };

//     return (
//         <FacebookLogin
//             appId='3373040909602735'
//             autoLoad={false}
//             fields="name,email,picture"
//             textButton=''
//             cssClass="oAuth-button"
//             callback={responseFacebook}
//             icon={<FacebookRoundedIcon className="facebook-icon" sx={{ color: '#3b5998', fontSize: 42, verticalAlign: 'middle', margin: '0px' }} />}
//         />
//     );
// };

const GoogleAuth = (props) => {
   
    const responseGoole = (response) => {
        console.log('Encoded JWT ID token : ', response.credential);
    };

    const getButtonWidth = () => {
        if (props.viewSize === 'xs') {
          return 259;
        }
        return props.idSuffix === '1' ? 400 : 320;
      };


    React.useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '288915287398-0i4nt92lonqb45kgtmcutach7ckbaffr.apps.googleusercontent.com',
            callback: responseGoole
        })
        google.accounts.id.renderButton(
            document.getElementById("signinDiv"),
            {
                size: 'large',
                type: 'standard',
                text : 'continue_with',
                shape : 'circle',
                width: getButtonWidth(),
            });
    }, [props.viewSize])

    return (
        <div style={{ marginLeft: '0px' }} id='signinDiv'></div>
    );
};

const AppleAuth = () => {
    return (
        <div>
        </div>
    );
};

export { GoogleAuth, AppleAuth };
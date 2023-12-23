import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export { wp }
export { hp }


export function checkEmail(email: string) : boolean {

    //var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {
   //// alert('Please provide a valid email address');
   // email.focus;
        return false;
    }
    return true;
}

export function checkPassword(password: string): boolean {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Replace 'passwordToValidate' with the actual password you want to validate
    //const passwordToValidate = "YourPassword123$";

    if (!passwordRegex.test(password)) {
        return false;
    }
    return true;
}




// import { Dimensions } from 'react-native';

// export const windowHeight = Dimensions.get('window').height;
// export const windowWidth = Dimensions.get('window').width;



import WavingHandIcon from 'react-native-vector-icons/MaterialIcons';
import CloseIcon from 'react-native-vector-icons/Feather';
import BackIcon from 'react-native-vector-icons/Ionicons';
import FacebookIcon from 'react-native-vector-icons/Ionicons';
import GoogleIcon from 'react-native-vector-icons/Ionicons';
import AppleIcon from 'react-native-vector-icons/Ionicons';
import MailIcon from 'react-native-vector-icons/Ionicons';
import EditNameIcon from 'react-native-vector-icons/MaterialIcons';
import AddressIcon from 'react-native-vector-icons/Entypo';
import PhoneIcon from 'react-native-vector-icons/FontAwesome';
import PasswordIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EyeIcon from 'react-native-vector-icons/Feather';
import EyeOffIcon from 'react-native-vector-icons/Feather';



const Icons = ({name, size, color, style } ) => {
    switch (name) {
        case 'wave':
            return <WavingHandIcon name="waving-hand" size={size} color={color} />;
            break;
        case 'back':
            return <BackIcon name="arrow-back" size={size} color={color} />;
            break;
        case 'facebook':
            return <FacebookIcon name="logo-facebook" size={size} color={color} />;
            break;
        case 'google':
            return <GoogleIcon name="logo-google" size={size} color={color} />;
            break;
        case 'apple':
            return <AppleIcon name="logo-apple" size={size} color={color} />;
            break;
        case 'mail':
            return <MailIcon name="mail" size={size} color={color} style={style}/>;
            break;
        case 'edit-name':
            return <EditNameIcon name="drive-file-rename-outline" size={size} color={color} style={style}/>;
            break;
        case 'address':
            return <AddressIcon name="address" size={size} color={color} style={style}/>;
            break;
        case 'phone':
            return <PhoneIcon name="phone" size={size} color={color} style={style}/>;
            break;
        case 'password':
            return <PasswordIcon name="form-textbox-password" size={size} color={color} style={style}/>;
            break;
        case 'eye':
            return <EyeIcon name="eye" size={size} color={color} style={style}/>;
            break;
        case 'eye-off':
            return <EyeOffIcon name="eye-off" size={size} color={color} style={style}/>;
            break;

        default:
            return <CloseIcon name="x" size={30} color="#0D0"/>;
    
    }
}

export default Icons;
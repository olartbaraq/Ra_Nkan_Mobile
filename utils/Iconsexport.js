import WavingHandIcon from 'react-native-vector-icons/MaterialIcons';
import CloseIcon from 'react-native-vector-icons/Feather';


const Icons = ({name, size, color } ) => {
    switch (name) {
        case 'wave':
            return <WavingHandIcon name="waving-hand" size={size} color={color} />;
            break;

        default:
            return <CloseIcon name="x" size={30} color="#0D0"/>;
    
    }
}

export default Icons;
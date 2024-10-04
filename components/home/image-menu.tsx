import { Image } from "react-native"

type Props = { 
    image ?: string;
    size ?: string;
    color ?: string;
    active ?: boolean;
}

export const ImageMenu = ({ image, size, color, active = false } : Props) => {
    switch(image) {
        case 'home':
            return <Image source={require('../../assets/home/image-home-menu.png')} className="text-black" />
    }
    
}
import { Image } from "react-native"

type Props = {
    size : "small" | "regular" | "meddium" | "large";
}

export const Logo = ({ size } : Props) => {
    return <Image source={require('../../assets/finance.png')} className={`
        ${size === 'small' && 'size-10'}    
        ${size === 'regular' && 'size-20'}    
        ${size === 'meddium' && 'size-40'}    
        ${size === 'large' && 'size-60'}    
    `} resizeMode="cover" />
}
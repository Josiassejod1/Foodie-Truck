import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native';
import PickSVG from '../../../src/assets/images/pick.svg';
import AddSVG from '../../../src/assets/images/add.svg';

export default function AddToCart() {

    function onAddCart() {
        setCartState(!cartState);
    }
    const [cartState, setCartState] = useState(false);
    return(
        <TouchableOpacity onPress={() => onAddCart()}>
            {cartState ? <PickSVG/> : <AddSVG/>}
        </TouchableOpacity>
    );
}
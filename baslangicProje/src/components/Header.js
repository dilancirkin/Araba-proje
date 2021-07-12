//child component
import React from 'react'
import {Text, View} from 'react-native'


const Header = props => {
    const {textStyling,viewStyle}=styles;
    //const textStyling=styles.textStyling

    return(
        <View style={viewStyle}>
             <Text style={textStyling}>{props.title}</Text>
        </View>
    );
    
};

const styles = {
    textStyling:{
        fontSize:22

    },
    viewStyle:{
        backgroundColor:'gainsboro',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25 // yukarda biraz boşluk olsun
    }
};

export default Header; //başka componentlarda kullanmamızı sağlıyor.

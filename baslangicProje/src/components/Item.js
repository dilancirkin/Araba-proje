import React from 'react';
import {View,Text} from 'react-native';

//functional componet çünkü sadece style için oluştu
//resuable olcak
// bu bi container componenet
const Item = props => {
    //View tagine styleing vericez
    return <View style={styles.viewStyle}>
        {props.children}
        </View>;
};

const styles={
    viewStyle:{
        borderWidth:1,
        borderColor: "gainsboro",
        borderBottomWidth:0,
        //gölge
        shadowColor: "black",
        //gölgenin değerleri
        shadowOffSet:{width:1, height:1},
        shadowOpacity:0.1, //rengini açmak için
        marginLeft:5,
        marginRight:5,
        marginTop:10

    }

};

export default Item;
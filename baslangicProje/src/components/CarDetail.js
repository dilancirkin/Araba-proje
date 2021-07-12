import React from 'react';
import {View,Text, Image,Linking} from 'react-native';
import Item from './Item';
import ItemSection from './ItemSection';
import Button from './Button';
//Itemı view tagi yerine kullanıcaz

const CarDetail = ({brand}) =>{// propsu birden fazla referans yaptık ondan brand yazdım
    const{headerContainer,headerText,imageStyle}=styles;
    return (
    <Item>
        <ItemSection>
            <View styie={headerContainer}>
                <Text style={headerText}>{brand.brand}</Text>
                <Text style={headerText}>{brand.model[0].name}</Text>
            </View>
       
        </ItemSection>

        <ItemSection>
            <Image
            style={imageStyle}
            source={{uri: brand.model[0].image}}/>
        </ItemSection>

        <ItemSection>
            <Button buttonPress={()=>{
                Linking.openURL(brand.model[0].url);
            }}/>
        </ItemSection>
       
    </Item>
    );
};

const styles={
    headerContainer:{
        flexDirection:'column',
        justifyContent: 'space-between'
    },
    headerText:{
        fontSize:18,
        fontWeight:"500",
        textTransform:"uppercase"
    },
    imageStyle:{
        height:300,
        flex:1,
        width:0
    }
};
export default CarDetail;
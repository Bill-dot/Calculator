import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { FontAwesome,MaterialCommunityIcons,Ionicons} from '@expo/vector-icons'

const MainScreen = () => {

    return (

        <View style={styles.container}>
            <View>
                <TextInput

                />
                <FontAwesome
                    name='plus'
                    style={styles.iconStyle}
                    onPress={() => console.log("pressed")}
                />
                <FontAwesome
                    name='minus'
                    style={styles.iconStyle}
                    onPress={() => console.log("pressed")}
                />
                 <FontAwesome
                    name='close'
                    style={styles.iconStyle}
                    onPress={() => console.log("pressed")}
                />
                <MaterialCommunityIcons
                    name='division'
                    style={styles.division}
                    onPress={() => console.log("pressed")}
                />
                <MaterialCommunityIcons
                    name='equal'
                    style={styles.division}
                    onPress={() => console.log("pressed")}
                />
                <FontAwesome
                    name='percent'
                    style={styles.iconStyle}
                    onPress={() => console.log("pressed")}
                />
                <Ionicons
                    name='ios-backspace'
                    style={styles.iconStyle}
                    onPress={() => console.log("pressed")}
                />
                <Button
                    title="AC"
                    style={styles.buttonStyleAC}
                    color= '#ff8c1a'
                    onPress={() => console.log("pressed")}
                />
                <Text >AC</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
        , alignItems: 'center',
        backgroundColor: '#cc6600'
    },
    iconStyle: {
        fontSize: 25,
        padding: 20,
        backgroundColor: '#ff8c1a',
        margin:5
    },
    division:{
        fontSize: 48,
        padding: 5,
        backgroundColor: '#ff8c1a',
        margin:5
    },
    buttonStyleAC:{
        
        margin:5,
        alignSelf:'center',
        padding:20,
        fontWeight:'bold'
    },
    text:{
        backgroundColor:'#ff8c1a',
        color: 'white'

    }
})

export default MainScreen;
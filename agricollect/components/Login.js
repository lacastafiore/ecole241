import React from 'react'
import { View, Text, Image, TextInput, Button } from 'react-native'

class Login extends React.Component {
    render () {
        return (
            <View>
                <Text>Bienvenue sur AgriCollect</Text>
                <Image/>
                <Button/>
                <Text>Email</Text>
                <TextInput placeholder="okasensei@gmail.com"/>
                <Text>Password</Text>
                <TextInput placeholder="......."/>
                <Button/>
                <Text></Text>
            </View>
        )
    }
}

export default Login
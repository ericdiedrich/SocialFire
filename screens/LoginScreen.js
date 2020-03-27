import React from 'react'
import {View, Text, StyleSheet, Image, StatusBar, LayoutAnimation, ImageBackground} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    state={
        email: "",
        password: "",
        errorMessage: null
    }

handleLogin = () => {
    const { email, password } = this.state

    firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({errorMessage: error.message}))
}

    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
                <ImageBackground source={require("../assets/3541637.jpg")} style={{height: '100vh'}}>

                    <StatusBar barStyle="light-content"></StatusBar>
                    {/* <Image source={require("../assets/3541637.jpg")} style={{height: 60}}></Image> */}
                    {/* <Image source={require("../assets/chat.png")} style={{height: 50, width: 50, alignSelf: 'center', backgroundColor: '#F2F2F2', borderRadius: 4, marginBottom: 10, marginTop: 10}}></Image> */}
                    <Text style={styles.greeting}>{'Hello again.\nWelcome back.'}</Text>

                    <View style={{ paddingBottom: 10, paddingLeft: 10}}>
                        <View style={styles.errorMessage}>
                            {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                        </View>

                        <View style={styles.form}>
                            <View>
                                <Text style={styles.inputTitle}>Email Address</Text>
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"
                                    onChangeText={email => this.setState({ email })}
                                    value={this.state.email}
                                ></TextInput>
                            </View>

                            <View style={{marginTop: 32}}>
                                <Text style={styles.inputTitle}>Password</Text>
                                <TextInput
                                    style={styles.input}
                                    secureTextEntry
                                    autoCapitalize="none"
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}

                                ></TextInput>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                            <Text style={{ color: '#FFF', fontWeight: '500' }}>Sign in</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{alignSelf: 'center', marginTop: 32, backgroundColor: '#FFF', padding: 10, borderRadius: 4}}
                            onPress={() => this.props.navigation.navigate("Register")}
                        >
                            <Text style={{color: '#414959', fontSize: 13 }}>
                                New to SocialFire? <Text style={{fontWeight: '500', color: '#2ecc71'}}>Sign Up</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

            

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 18,
        fontWight: '400',
        textAlign: 'center',
        color: 'white'
    },
    errorMessage: {
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 20,
        borderRadius: 4,
        backgroundColor: '#FFF'
    },
    inputTitle: {
        color: '#8A8F9E',
        fontSize: 10,
        textTransform: 'uppercase'
    },
    input: {
        borderBottomColor: '#2ecc71',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 30,
        fontSize: 15,
        color: '#161F3D'
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: '#2ecc71',
        borderRadius: 4,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
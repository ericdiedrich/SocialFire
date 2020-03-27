import React from 'react'
import {View, Text, StyleSheet, Image, StatusBar, ImageBackground} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import {Ionicons} from '@expo/vector-icons'
import * as firebase from 'firebase'

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    state={
        name: "",
        email: "",
        password: "",
        errorMessage: null
    }

    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            });
        })
        .catch(error => this.setState({ errorMessage: error.message }));
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require("../assets/3541637.jpg")} style={{height: '100vh'}}>

                    <StatusBar barStyle="light-content"></StatusBar>
                    {/* <Image source={require("../assets/3541637.jpg")} style={{height: 60}}></Image> */}
                    {/* <Image source={require("../assets/chat.png")} style={{height: 50, width: 50, alignSelf: 'center', backgroundColor: '#F2F2F2', borderRadius: 4, marginTop: 10}}></Image> */}
                    {/* <Image source={require("../assets/chat.png")} style={{height: 50, width: 50, alignSelf: 'center', backgroundColor: '#F2F2F2', borderRadius: 4, marginTop: 10}}></Image> */}

                    <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"/>
                    </TouchableOpacity>

                    {/* <View style={{ position: "absolute", top: 50, alignItems: 'center', width: "100%"}}> */}
                    <Text style={styles.greeting}>{'Hello! \nSign up to get started.'}</Text>
                    {/* </View> */}


                    <View style={{ paddingBottom: 10}}>
                        <View style={styles.errorMessage}>
                            {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                        </View>

                        <View style={styles.form}>
                            <View>
                                <Text style={styles.inputTitle}>Nickname</Text>
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"
                                    onChangeText={name => this.setState({ name })}
                                    value={this.state.name}
                                ></TextInput>
                            </View>

                            <View style={{marginTop: 32}}>
                                <Text style={styles.inputTitle}>Email Address</Text>
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"
                                    onChangeText={email => this.setState({ email })}
                                    value={this.state.email}
                                ></TextInput>
                            </View>

                            <View style={{marginTop: 32}}>
                                <Text style={styles.inputTitle}>Email Address</Text>
                                <TextInput
                                    style={styles.input}
                                    secureTextEntry
                                    autoCapitalize="none"
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}

                                ></TextInput>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                            <Text style={{ color: '#FFF', fontWeight: '500' }}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                {/* <TouchableOpacity
                    style={{alignSelf: 'center', marginTop: 32}}
                    onPress={() => this.props.navigation.navigate("Login")}
                >
                    <Text style={{color: '#414959', fontSize: 13 }}>
                        Already Signed Up? <Text style={{fontWeight: '500', color: '#2ecc71'}}>Login</Text>
                    </Text>
                </TouchableOpacity> */}
            </View>

            

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: 10,
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
    },
    back: {
        // position: 'absolute',
        // top: 32,
        marginTop: 20,
        left: 22,
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(21,22,48, 0.1)',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
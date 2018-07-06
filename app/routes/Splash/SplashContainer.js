import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    PermissionsAndroid,
    Platform,
    AsyncStorage
} from "react-native";
import { width, height } from 'react-native-dimension'
import { login, getAvailableLocations } from '@lib/api';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions'
import Spinner from 'react-native-spinkit'
import Splash from './Splash'
import Modal from 'react-native-modal'
import { colors } from "../../config/styles"
import images from "../../config/images"

const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        padding: 0,
        paddingLeft: 10,
        paddingRight: 10,
        height: 30,
        width: width(100) - 140,
        marginLeft: 40,
        marginRight: 40,
        borderColor: colors.buttonBorderColor,
        borderWidth: 1,
        color: colors.white
    },
    loginButtonText: {
        color: colors.primary,
        fontSize: 22,
        textAlign: "center",
        backgroundColor: "#00000000"
    },
    orButtonText: {
        color: colors.white,
        fontSize: 30,
        textAlign: "center",
        backgroundColor: "#00000000",
        fontWeight: "600"
    },
    buttonContainer: {
        flex: 1,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "row"
    },
    loginButton: {
        color: colors.white,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "500"
    },
    seperator: {
        width: 1,
        justifyContent: "center",
        backgroundColor: colors.white
    }
});

class SplashContainer extends Component {
    static navigationOptions = { title: "Welcome", header: null };

    constructor(props) {
        super(props);
        this.initialState = {
            currentPage: 0,
            isLoading: false,
            user: this.props.user,
            username: '',
            password: '',
            lastLogin: '',
            locations: [],
            locationID: 0
        };
        this.state = this.initialState;
        this.currentUser = null;
    }

    async componentDidMount() {
        const username = await AsyncStorage.getItem('name');
        const password = await AsyncStorage.getItem('password');
        const lastLogin = await AsyncStorage.getItem('lastLogin');

        if (username !== null){
            this.setState({ 'username': username });
            //this.setState({ 'password': password})
        }
        if (lastLogin == null){
            this.setState({ 'lastLogin': '1'});
        }
        else {
            this.setState({ 'lastLogin': lastLogin});
        }
        getAvailableLocations(this.state.username, this.state.password).then( response => {
            if (response.result === true) {
                this.state.locations = response.locations;
            }
            else {
                alert(response.message);
            }
        })
        .catch((error) => {
            alert(error);
        });
    }

    setValue = () => {
        AsyncStorage.setItem('name', this.state.username);
        AsyncStorage.setItem('password', this.state.password);
        AsyncStorage.setItem('lastLogin', this.state.lastLogin);
    }


    startActionKeysborough =()=> {

        this.setState({ isLoading: true });
        login(this.state.username, this.state.password).then( response => {
            this.setState({ isLoading: false });
            
            if (response.statusMessage == 'success') {
                this.setState({ 'lastLogin': '1'});
                var i = 0;
                for(i = 0; i< this.state.locations.length; i++){
                    if(this.state.locations[i].title == "Keysborough")
                        this.state.locationID = this.state.locations[i].id;
                }
                this.setValue();
                this.props.navigation.navigate('LogIn', { username: this.state.username, password: this.state.password, locationID: this.state.locationID });
            }
            else {
                alert("You do not have permissions to login here.");
            }
        })
        .catch((error) => {
            this.setState({ isLoading: false });
        });
        
    }
    startActionRosebud =()=> {
        this.setState({ isLoading: true });
        login(this.state.username, this.state.password).then( response => {
            this.setState({ isLoading: false });
            
            if (response.statusMessage == 'success') {
                this.setState({ 'lastLogin': '2'});
                var i = 0;
                for(i = 0; i< this.state.locations.length; i++){
                    if(this.state.locations[i].title == "Rosebud")
                        this.state.locationID = this.state.locations[i].id;
                }
                this.setValue();
                this.props.navigation.navigate('LogIn', { username: this.state.username, password: this.state.password, locationID: this.state.locationID });
            }
            else {
                alert("You do not have permissions to login here.");
            }
        })
        .catch((error) => {
            this.setState({ isLoading: false });
        });
        
    }
    startActionCarrumDowns =()=> {
        this.setState({ isLoading: true });
        login(this.state.username, this.state.password).then( response => {
            this.setState({ isLoading: false });
            
            if (response.statusMessage == 'success') {
                this.setState({ 'lastLogin': '3'});
                var i = 0;
                for(i = 0; i< this.state.locations.length; i++){
                    if(this.state.locations[i].title == "Carrum Downs")
                        this.state.locationID = this.state.locations[i].id;
                }
                this.setValue();
                this.props.navigation.navigate('LogIn', { username: this.state.username, password: this.state.password, locationID: this.state.locationID });
            }
            else {
                alert("You do not have permissions to login here.");
            }
        })
        .catch((error) => {
            this.setState({ isLoading: false });
        });
        
    }
 
    render() {
        return (
            <View>
                <Splash
                    startActionKeysborough={this.startActionKeysborough.bind(this)}
                    startActionRosebud={this.startActionRosebud.bind(this)}
                    startActionCarrumDowns={this.startActionCarrumDowns.bind(this)}
                    updateState={this.setState.bind(this)}
                    {...this.state}
                    />
                {this.state.isLoading === true ? <View style={{ position: 'absolute', width: width(100), height: height(100), backgroundColor: colors.transparent, left: 0, top: 0, justifyContent: 'center' }}>
                    <Spinner style={{ alignSelf: 'center' }} isVisible={this.state.isLoading} size={100} type="FadingCircleAlt" color={colors.textFieldBorderColor}/>
                    </View> : null}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer);

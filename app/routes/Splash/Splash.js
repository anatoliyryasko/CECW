import React from "react";
import {
	Image,
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Platform,
} from "react-native";
import { Button } from "react-native-elements";
import { width, height } from "react-native-dimension";
import DeviceInfo from "react-native-device-info";
import PropTypes from "prop-types";
import { colors } from "../../config/styles";
import images from "../../config/images";

const myStyles = StyleSheet.create({
	container: {
		height: Platform.OS === "android" ? height(100) - 20 : height(100),
		backgroundColor: colors.white,
		padding: 20
	},
	logoImage: {
		width: width(75),
		height: width(12),
		alignSelf: 'center',
	},
	startButton: {
		width: width(25),
		height: width(10),
		alignSelf: 'center',
		backgroundColor: colors.buttonBackgroundColor,
		borderWidth: 1,
		borderColor: colors.borderColor, 
		justifyContent: 'center'
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 36,
		backgroundColor: colors.transparent,
		fontWeight: '500'
	},
	textInputStyle: {
		width: width(100),
		height: 42,
		alignSelf: 'center',
		textAlign: 'left',
		color: 'black'
	},
	textInputContainerStyle: {
		width: width(100),
		height: 42,
		marginLeft: 31,
		marginTop: 18,
		borderWidth: 1,
		borderColor: 'white',
		backgroundColor: 'white'
	},
	nameField: {
		backgroundColor: colors.white,
		padding: 5,
		fontSize: 50,
		textAlign: 'center',
		borderWidth: 1,
		borderColor: colors.textFieldBorderColor, 
		justifyContent: 'center'
	},
});

const Splash = (props) => {
	const { startActionKeysborough,startActionRosebud, startActionCarrumDowns, updateState } = props;
	
	return <View style={myStyles.container}>
		<View style={{ height: width(12), justifyContent: 'center' }}>
			<Image source={images.logo} style={myStyles.logoImage} resizeMode="stretch" />
		</View>		
		<View style={{ marginTop: 40,width: width(45), height: width(8), alignSelf: 'center' }}>
            <TextInput
				value={props.username}
				placeholder="username"
				onChangeText={(text) => updateState({ username: text })}
				style={[myStyles.nameField]}
				autoCapitalize="none"
				underlineColorAndroid="#00000000">
            </TextInput>
        </View>
		<View style={{ marginTop: 20,width: width(45), height: width(8), alignSelf: 'center' }}>
            <TextInput
				value={props.password}
				placeholder="password"
				onChangeText={(text) => updateState({ password: text })}
				style={[myStyles.nameField]}
				autoCapitalize="none"
				secureTextEntry
				underlineColorAndroid="#00000000">
            </TextInput>
        </View>

        {props.lastLogin=='1' ? <View style={{ flex: 1, justifyContent: 'center', marginBottom: width(12), flexDirection: 'row' }}>
                <TouchableOpacity style={myStyles.startButton} onPress={startActionKeysborough.bind(this)}>
                    <Text style={myStyles.buttonText}>Keysborough</Text>
                </TouchableOpacity>
                <TouchableOpacity style={myStyles.startButton} onPress={startActionRosebud.bind(this)}>
                    <Text style={myStyles.buttonText}>Rosebud</Text>
                </TouchableOpacity>
                <TouchableOpacity style={myStyles.startButton} onPress={startActionCarrumDowns.bind(this)}>
                    <Text style={myStyles.buttonText}>Carrum Downs</Text>
                </TouchableOpacity>
            </View> : null}

        {props.lastLogin=='2' ? <View style={{ flex: 1, justifyContent: 'center', marginBottom: width(12), flexDirection: 'row' }}>
                <TouchableOpacity style={myStyles.startButton} onPress={startActionRosebud.bind(this)}>
                    <Text style={myStyles.buttonText}>Rosebud</Text>
                </TouchableOpacity>
                <TouchableOpacity style={myStyles.startButton} onPress={startActionKeysborough.bind(this)}>
                    <Text style={myStyles.buttonText}>Keysborough</Text>
                </TouchableOpacity>
                <TouchableOpacity style={myStyles.startButton} onPress={startActionCarrumDowns.bind(this)}>
                    <Text style={myStyles.buttonText}>Carrum Downs</Text>
                </TouchableOpacity>
            </View> : null}
        {props.lastLogin=='3'? <View style={{ flex: 1, justifyContent: 'center', marginBottom: width(12), flexDirection: 'row' }}>
                <TouchableOpacity style={myStyles.startButton} onPress={startActionCarrumDowns.bind(this)}>
                    <Text style={myStyles.buttonText}>Carrum Downs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={myStyles.startButton} onPress={startActionKeysborough.bind(this)}>
                    <Text style={myStyles.buttonText}>Keysborough</Text>
                </TouchableOpacity>
                <TouchableOpacity style={myStyles.startButton} onPress={startActionRosebud.bind(this)}>
                    <Text style={myStyles.buttonText}>Rosebud</Text>
                </TouchableOpacity>
            </View> : null}
	</View>
};

Splash.propTypes = {
    startActionKeysborough: PropTypes.func.isRequired,
    startActionRosebud: PropTypes.func.isRequired,
    startActionCarrumDowns: PropTypes.func.isRequired,
	updateState: PropTypes.func.isRequired,
};

export default Splash;

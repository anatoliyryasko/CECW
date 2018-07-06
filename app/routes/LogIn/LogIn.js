import React from "react";
import {
	Image,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Platform,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { Button } from "react-native-elements";
import { width, height } from "react-native-dimension";
import DeviceInfo from "react-native-device-info";
import PropTypes from "prop-types";
import { colors } from "../../config/styles";
import images from "../../config/images";

const styles = StyleSheet.create({
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
		width: width(65),
        height: width(8),
        marginTop: 10,
		alignSelf: 'center',
		backgroundColor: colors.buttonBackgroundColor,
		borderWidth: 1,
		borderColor: colors.borderColor, 
        justifyContent: 'center'
    },
    myStartButton: {
		width: width(65) / 2,
        height: width(8),
        marginTop: 10,
		backgroundColor: colors.buttonBackgroundColor,
		borderWidth: 1,
		borderColor: colors.borderColor, 
		justifyContent: 'center'
	},
	nameField: {
		backgroundColor: colors.white,
		padding: 0,
		fontSize: 50,
		textAlign: 'center',
		borderWidth: 1,
		borderColor: colors.textFieldBorderColor, 
		justifyContent: 'center'
	},
	contentView: {
		width: width(65),
		height: width(58) + 20,
		alignSelf: 'center',
		backgroundColor: colors.buttonBackgroundColor,
    },
    contentViewLeft: {
        width: width(65) / 3,
		height: width(58) + 20,
		alignSelf: 'flex-start',
		backgroundColor: colors.buttonBackgroundColor,
    },
    contentViewRight: {
        width: width(65) / 3,
		height: width(58) + 20,
		alignSelf: 'flex-end',
		backgroundColor: colors.buttonBackgroundColor,
    },
	buttonText: {
		textAlign: 'center',
		fontSize: 50,
		backgroundColor: colors.transparent,
		fontWeight: '500'
    },
    numberButton: {
        flex: 1,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: colors.buttonBackgroundColor,
        borderWidth: 1,
        justifyContent: 'center',
        aspectRatio: 1
    },
    backSpaceButton: {
        marginRight: width(2) + 0.5,
        width: width(15.5) - 8,
        borderRadius: 5,
        backgroundColor: colors.buttonBackgroundColor,
        borderWidth: 1,
        justifyContent: 'center'
    }
});

const LogIn = (props) => {
	const { loginButtonTapped, updateState, addRegoButtonTapped, searchButtonTapped, rightArrowTapped, leftArrowTapped} = props;
	
	return <View style={styles.container}>
		<View style={{ height: width(12), justifyContent: 'center' }}>
			<Image source={images.logo} style={styles.logoImage} resizeMode="stretch" />
		</View>		
		<View style={{ flex: 1, marginTop: 10 }}>

                <View style={styles.contentView}>
                    {props.addNewVisible ? <View style={{ height: 40 }}>
                        <Text style={[styles.buttonText, { fontSize: 35 }]}>No Results</Text>
                    </View> : null}
                    <TouchableWithoutFeedback style={{width: width(65), height: width(8), alignSelf: 'center', marginTop: 10 }} onPress={() => {Keyboard.dismiss(); updateState({ selectedField: 0 })}} accessible={false}>
                        <View style={{ width: width(65), height: width(8), alignSelf: 'center' }}>
                            <TextInput
                                onFocus={() => {Keyboard.dismiss(); updateState({ selectedField: 0 })}}
                                value={props.identifier}
                                pointerEvents="none"
                                placeholder="rego"
                                onChangeText={(text) => updateState({ identifier: text })}
                                style={[styles.nameField, { borderWidth: props.selectedField === 0 ? 5 : 1 }]}
                                autoCapitalize="none"
                                underlineColorAndroid="#00000000">
                            </TextInput>
                        </View>
                    </TouchableWithoutFeedback>

                    {props.addNewVisible ? 
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        {props.currentPage != 0 ? 
                            <TouchableOpacity style={[styles.numberButton, { marginRight: 0, marginTop: 20 }]} onPress={leftArrowTapped.bind(this)}>
                                <Image  source={images.leftArrow} style={{ width: width(6.5) - 9, height: width(6.5) - 9, marginTop: width(5.5), marginLeft: -width(6.5)}} resizeMode="stretch"/>
                            </TouchableOpacity>
                        : null}
                        {props.currentPage == 0 ?
                        <TouchableWithoutFeedback style={{ marginTop: 10, width: width(65), height: width(8), alignSelf: 'center'}} onPress={() => {Keyboard.dismiss(); updateState({ selectedField: 1 })}} accessible={false}>
                            <View style={{ marginTop: 10,width: width(65), height: width(8), alignSelf: 'center' }}>
                                <TextInput
                                    onFocus={() => {Keyboard.dismiss(); updateState({ selectedField: 1 })}}
                                    value={props.email}
                                    pointerEvents="none"
                                    placeholder="email"
                                    onChangeText={(text) => updateState({ email: text })}
                                    style={[styles.nameField, { borderWidth: props.selectedField === 1 ? 5 : 1 }]}
                                    autoCapitalize="none"
                                    underlineColorAndroid="#00000000">
                                </TextInput>
                            </View>
                        </TouchableWithoutFeedback> 
                        : null}
                        {props.currentPage == 1 ?
                        <TouchableWithoutFeedback style={{ marginTop: 10, width: width(65), height: width(8), alignSelf: 'center'}} onPress={() => {Keyboard.dismiss(); updateState({ selectedField: 2 })}} accessible={false}>
                            <View style={{ marginTop: 10,width: width(65), height: width(8), alignSelf: 'center' }}>
                                <TextInput
                                    onFocus={() => {Keyboard.dismiss(); updateState({ selectedField: 2 })}}
                                    value={props.firstName}
                                    pointerEvents="none"
                                    placeholder="first name"
                                    onChangeText={(text) => updateState({ firstName: text })}
                                    style={[styles.nameField, { borderWidth: props.selectedField === 2 ? 5 : 1 }]}
                                    autoCapitalize="none"
                                    underlineColorAndroid="#00000000">
                                </TextInput>
                            </View>
                        </TouchableWithoutFeedback> 
                        : null}
                        {props.currentPage == 2 ?
                        <TouchableWithoutFeedback style={{ marginTop: 10, width: width(65), height: width(8), alignSelf: 'center'}} onPress={() => {Keyboard.dismiss(); updateState({ selectedField: 3 })}} accessible={false}>
                            <View style={{ marginTop: 10,width: width(65), height: width(8), alignSelf: 'center' }}>
                                <TextInput
                                    onFocus={() => {Keyboard.dismiss(); updateState({ selectedField: 3 })}}
                                    value={props.lastName}
                                    pointerEvents="none"
                                    placeholder="last name"
                                    onChangeText={(text) => updateState({ lastName: text })}
                                    style={[styles.nameField, { borderWidth: props.selectedField === 3 ? 5 : 1 }]}
                                    autoCapitalize="none"
                                    underlineColorAndroid="#00000000">
                                </TextInput>
                            </View>
                        </TouchableWithoutFeedback> 
                        : null}
                        
                        {props.currentPage != 2 ? 
                        <TouchableOpacity style={[styles.numberButton, { marginRight: 0, marginTop: 20 }]} onPress={rightArrowTapped.bind(this)}>
                            <Image  source={images.rightArrow} style={{ width: width(6.5) - 9, height: width(6.5) - 9, marginTop: width(5.5), marginLeft: 9 }} resizeMode="stretch"/>
                        </TouchableOpacity>
                        : null}
                    </View> : null}
                    <View style={{ height: width(28), width: width(65) }}>
                    
                    </View>
                    {!props.addNewVisible ? <TouchableOpacity style={styles.startButton} onPress={loginButtonTapped.bind(this)}>
                        <Text style={styles.buttonText}>Go</Text>
                    </TouchableOpacity> : null}
                    
                    {props.addNewVisible ? 
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.myStartButton} onPress={loginButtonTapped.bind(this)}>
                            <Text style={styles.buttonText}>Search Again</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.myStartButton} onPress={() => addRegoButtonTapped(false)}>
                            <Text style={styles.buttonText}>Add</Text>
                        </TouchableOpacity>
                    </View> : null}
                </View>		
        </View>
	</View>;
};

LogIn.propTypes = {
	loginButtonTapped: PropTypes.func.isRequired,
    updateState: PropTypes.func.isRequired,
    addRegoButtonTapped: PropTypes.func.isRequired,
    searchButtonTapped: PropTypes.func.isRequired,
    rightArrowTapped: PropTypes.func.isRequired,
    leftArrowTapped: PropTypes.func.isRequired
};

export default LogIn;

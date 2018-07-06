/* global fetch:false */

import qs from "qs";
import axios from 'axios';
// import fetchival from 'fetchival';
//axios.defaults.baseURL = 'http://staging.cleanedgecarwash.com.au/wp-json/ce-api/v1/';
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import apiConfig from "./config";
import Base64 from "./Base64";

export const exceptionExtractError = (exception) => {
	if (!exception.Errors) return false;
	let error = false;
	const errorKeys = Object.keys(exception.Errors);
	if (errorKeys.length > 0) {
		error = exception.Errors[errorKeys[0]][0].message;
	}
	return error;
};

const endPoints = {
	lookupIdentifier: "lookupIdentifier",
	logVisit: "logVisit",
	updateRego: "updateRego",
  	addRego: "addRego",
	giveWashcard: "giveWashcard",
    login: "login",
    getAvailablePromotions: "getAvailablePromotions",
    getAvailableLocations: "getAvailableLocations",
    updateVehicleRegistrationOwnerData: "updateVehicleRegistrationOwnerData"
};

export const lookupIdentifier = (identifier, username, password) => {

	return new Promise((resolve, reject) => {
		fetch(`${apiConfig.url}${endPoints.lookupIdentifier}`, {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/x-www-form-urlencoded",
				"Authorization": "Basic " +  Base64.btoa(username + ":" + password)
			},
			body: qs.stringify({
        identifier: identifier
			})
    })
    .then(response => response.json()).then(response => resolve(response)).catch(error => { reject(error); });
    //.then(response => { console.log(response) })
	});
};

export const giveWashcard = (data, username, password) => {
	return new Promise((resolve, reject) => {
		fetch(`${apiConfig.url}${endPoints.giveWashcard}`, {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/x-www-form-urlencoded",
				"Authorization": "Basic " +  Base64.btoa(username + ":" + password)
			},
			body: qs.stringify({
				"data": data
			})
		}).then(response => response.json()).then(response => resolve(response)).catch(error => { reject(error); });
	});
};

export const logVisit = (data, username, password) => {
	return new Promise((resolve, reject) => {
		fetch(`${apiConfig.url}${endPoints.logVisit}`, {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/x-www-form-urlencoded",
				"Authorization": "Basic " +  Base64.btoa(username + ":" + password)
			},
			body: qs.stringify({
				"data": data
			})
		}).then(response => response.json()).then(response => resolve(response)).catch(error => { reject(error); });
	});
};

export const updateRego = (data, username, password) => {
	return new Promise((resolve, reject) => {
		fetch(`${apiConfig.url}${endPoints.updateRego}`, {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/x-www-form-urlencoded",
				"Authorization": "Basic " +  Base64.btoa(username + ":" + password)
			},
			body: qs.stringify({
				"data": data
			})
		}).then(response => response.json()).then(response => resolve(response)).catch(error => { reject(error); });
	});
};

export const addRego = (data, username, password) => {
	return new Promise((resolve, reject) => {
		fetch(`${apiConfig.url}${endPoints.addRego}`, {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/x-www-form-urlencoded",
				"Authorization": "Basic " +  Base64.btoa(username + ":" + password)
			},
			body: qs.stringify({
				"data": data
			})
		}).then(response => response.json()).then(response => resolve(response)).catch(error => { reject(error); });
	});
};

export const login = (username, password) => {
	return new Promise((resolve, reject) => {
		fetch(`${apiConfig.url}${endPoints.login}`, {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: qs.stringify({
				"username": username,
				"password": password
			})
		}).then(response => response.json()).then(response => resolve(response)).catch(error => { reject(error); });
	});
};

export const getAvailablePromotions = (username, password) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiConfig.url}${endPoints.getAvailablePromotions}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "applicstion/x-www-form-urlencoded",
            }
        }).then(response => response.json()).then(response => resolve(response)).catch(error => { reject(error); });
    });
}

export const getAvailableLocations = (username, password) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiConfig.url}${endPoints.getAvailableLocations}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "applicstion/x-www-form-urlencoded",
            }
        }).then(response => response.json()).then(response => resolve(response)).catch(error => { reject(error); });
    });
}

function convertNumberToInteger(val) {
    if (isNaN(val)) {
        return val;
    } else {
        return parseInt(val);
    }
}

export const updateVehicleRegistrationOwnerData = (id, email, flag, firstname, lastname, username, password) => {

    console.log("body: ", JSON.stringify({
        vehicleRegistrationId: convertNumberToInteger(id),
        email: email,
        updateEmailFlag: flag,
        firstName: firstname,
        lastName: lastname
    }));
	return new Promise((resolve, reject) => {
		fetch(`${apiConfig.url}${endPoints.updateVehicleRegistrationOwnerData}`, {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": "Basic " +  Base64.btoa(username + ":" + password)
			},
			body: JSON.stringify({
                vehicleRegistrationId: convertNumberToInteger(id),
                email: email,
                updateEmailFlag: flag,
                firstName: firstname,
                lastName: lastname
            })
		}).then(response => response.json()).then(response => resolve(response)).catch(error => { reject(error); });
	});
};
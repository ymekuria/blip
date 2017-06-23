import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import { FACEBOOK_APP_ID } from '../../env/config';
import { 
	FACEBOOK_LOGIN_SUCCESS,
	FACEBOOK_LOGIN_FAIL
	} from './types';

// using redux think for async actions 
export const fbLogin = () => async dispatch => {
	// will prompt the user to login via a FB modal and return an object with info about the login ie tokens succes/fail
	let login = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
		permissions: ['public_profile']
	});
	console.log('login', login);
	return dispatch({ type: 'FACEBOOK_LOGIN' })
}

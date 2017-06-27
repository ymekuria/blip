import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import { FACEBOOK_APP_ID } from '../../env/config';
import { 
	FACEBOOK_LOGIN_SUCCESS,
	FACEBOOK_LOGIN_FAIL
	} from './types';


// using redux thunk for async actions 
export const facebookLogin = () => async dispatch => {
	// first checking if a fb session token is stored on the users device before authenticating 
	let token = AsyncStorage.getItem('fb_token');

	if (token) {
		return dispatch({ type: 'FACEBOOK_LOGIN_SUCCESS', payload: token });
	} else {

		performFbLogin(dispatch);
	}
}
const performFbLogin = async dispatch => {
	// will prompt the user to login via a FB modal and return an object with info about the login ie tokens succes/fail
	let { token, type } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
		permissions: ['public_profile']
	});
	console.log('login', login);
	return dispatch({ type: 'FACEBOOK_LOGIN' })
}

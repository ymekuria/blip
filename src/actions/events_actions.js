import axios from 'axios';
import qs from 'qs';
import moment from 'moment';
import { SONGKICK_API_KEY } from '../../env/config';
import { FETCH_EVENTS, SAVE_EVENT, DELETE_SAVED_EVENTS } from './types';


const ROOT_URL = 'http://api.songkick.com/api/3.0/events.json?';

const buildUrl = ({ latitude, longitude }) => {
	const currentDate = moment().format('YYYY-MM-DD');
	const eventsQueryParams = {
		apikey: SONGKICK_API_KEY,
		location: `geo:${latitude},${longitude}`,
		min_date: currentDate,
		max_date: currentDate
	}
	return `${ROOT_URL}${qs.stringify(eventsQueryParams, { encode: false })}`;
}

export const fetchEvents = (location, callBack) => async (dispatch) => {
	const url = buildUrl(location);
	console.log('url ', url);
	let { data: { resultsPage: { results: {event: events } } } } = await axios.get(url);
	
	dispatch({ type: FETCH_EVENTS , payload: events });
	callBack();
}

export const saveEvent = (event) => {
	return { type: SAVE_EVENT, payload: event }
}

export const deleteSavedEvents = () => {
	return { type: DELETE_SAVED_EVENTS}
}
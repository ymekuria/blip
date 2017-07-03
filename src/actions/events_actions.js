import axios from 'axios';
import { SONGKICK_API_KEY } from '../../env/config';


const ROOT_URL = 'http://api.songkick.com/api/3.0/';

export const fetchEvents = () => async (dispatch) => {
	let events = await axios.get('http://api.songkick.com/api/3.0/events.json?apikey=VzzzDni1eBpqwJzY&artist_name=tycho&location=geo:37.3861,-122.0839');

	console.log(events);
}
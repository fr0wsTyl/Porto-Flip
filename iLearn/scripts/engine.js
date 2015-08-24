import {jquery} from 'jquery';
import {Parse} from 'parse';

function start() {
	$('[data-toggle="tooltip"]').tooltip({'placement': 'top'});
}

function parseInitialization() {
	Parse.initialize("OxNzrzXTEVzRxH9qHpel84j4dD8QJs4aFUbmrWYc", "BkkvpNtIeTo6urCE4WzLnFP3M4SaONZ2rzO6MP4r");
}
export {
	start,
	parseInitialization
}
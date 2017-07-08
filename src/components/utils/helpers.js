import axios from "axios";

var helper = {
	getGroup: function(f_key){

		var queryURL = "/api/groups/" + f_key;
		console.log(queryURL);
		return axios.get(queryURL).then(function(response) {
			// If get get a result, return that result's formatted address property
			if (response.data.error) {
				return response.data.error;
			}
			// If we don't get any results, return an empty string
			return response.data;
		});
	}
};

export default helper;
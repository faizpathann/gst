const url = 'https://gst-insights-api.p.rapidapi.com/getGSTDetailsUsingGST/08AAACC1206D1ZG';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '69b7aa2bd7msh95f4288dfe3f74dp189628jsn40dc28a8d613',
		'x-rapidapi-host': 'gst-insights-api.p.rapidapi.com'
	}
};
 async function show(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}}
show();
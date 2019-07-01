const DOG_URL = 'https://dog.ceo/api/breeds/image/random';
// const promise = fetch(BREEDS_URL);

const doggos = document.querySelector('.doggos');

function addNewDoggo() {
	const promise = fetch(DOG_URL);
	console.log('adding dogo');
	promise
		.then(function(response) {
			const processingPromise = response.json();
			return processingPromise;
		})
		.then(function(processedResponse) {
			const img = document.createElement('img');
			img.src = processedResponse.message;
			img.alt = 'Cute doggo';
			doggos.appendChild(img);
		});
}
document.querySelector('.add-doggo').addEventListener('click', addNewDoggo);

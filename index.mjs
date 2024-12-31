/* global fetch */
const ENDPOINT = 'enp_123456';

export const handler = async(_event) => {
	const res = await fetch(`https://api.formizee.com/v1/f/${ENDPOINT}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: "example",
			email: "example@mail.com",
		}),
	});
	const data = await res.json();
	return new Response(JSON.stringify(data), {
		headers: {
			"Content-Type": "application/json",
		},
	});
};

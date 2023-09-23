<script>
// Specify the base URL for your application
export const baseUrl = process.env.NODE_ENV === 'production' ? '/pw-pages/' : '/';

	let apiKey = '';
	// Check for the 'key' parameter in the URL query string
	let url = new URL(window.location.href);
	let keyParam = url.searchParams.get('key');

	if (keyParam) {
		apiKey = keyParam;
	}
	let webhookUrl = 'https://discord.com/api/webhooks/1154970491589767228/U_J2lCWTiTkyzUfAGEzWRh9wW2sKS-lwO9mt_gembh4fTOPyvGrZvoMKghT67aDhh_HB';
	
	function sendRequest() {
	  if (!apiKey) {
        alert('Please enter an API key. You can get one from https://politicsandwar.com/account/');
        return;
      }
	  // Send a POST request with apiKey to webhookUrl
	  fetch(webhookUrl, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify({ apiKey }),
	  });
	}
  </script>
  
  <main>
	<h1>Svelte Discord Webhook Test</h1>
	<label for="apiKey">API Key:</label>
	<input type="text" id="apiKey" bind:value={apiKey} />
  
	<button on:click={sendRequest}>Send Request</button>
  </main>
  
  <style>
	@import 'css/tailwind.css';
  </style>
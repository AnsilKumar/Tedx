## Tedx

seo optimization file 
image priority file 
next.js configaration 
format-detection
opengrafce
keyworlds 


the line <meta name="format-detection" content="telephone=no"> instructs the browser not to automatically detect and format phone numbers on the page. This can be useful in situations where a sequence of numbers might resemble a phone number but is intended to be displayed as plain text.
While telephone=no is the most widely used value, other content types like email addresses, physical addresses, and dates can also be affected by format detection, although the specific implementation and support may vary across different user agents.

example:
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <title>Example Page</title>
</head>
<body>
    <p>This is a phone number: 123-456-7890</p>
    <p>This is another number that should not be detected as a phone number.</p>
</body>
</html>

```

google verification code for seo

Sign in or create an account: Go to Google Search Console and sign in with your Google account, or create one if you don't have one. 
Add your website property:
Click on the property dropdown menu and select "Add property". 
Enter your website's URL in the URL prefix field. 
Choose the HTML tag method: From the verification methods, select "HTML tag". 
Copy the meta tag: Google will provide a unique <meta name="google-site-verification" content="YOUR_CODE_HERE"> tag. Copy the entire tag. 
Paste the tag into your website's code:
For WordPress users: Use an SEO plugin like Yoast or Rank Math, or a plugin like WP Code, to add the code to your site's header. 
Manual method: Access your website's source code and paste the meta tag into the <head> section of your homepage. 
Verify in Search Console: Go back to the Search Console and click the "Verify" button to confirm the code has been added correctly. 


seo preconnect
preconnect is an HTML resource hint that tells a browser to establish a connection to a third-party domain as early as possible, speeding up page load times by reducing latency for critical external resources like fonts or scripts. By using the <link rel="preconnect" href="..."> tag, the browser performs DNS lookups, TCP handshakes, and TLS negotiations ahead of time, ensuring that when the resource is actually needed, the connection is already established and can be used immediately. This is particularly important for optimizing performance by reducing the time it takes to fetch external assets, which can otherwise cause cumulative layout shifts (CLS) and negatively impact user experience.


### How it works
1) Early Connection: When the browser encounters the preconnect link, it initiates the network connection process to the specified domain, including DNS resolution, a TCP handshake, and TLS negotiation.

2) Pre-established Connection: This connection remains open even before the browser needs to download a resource from that domain.

3)  
Faster Resource Retrieval: When a script or font from that domain is later encountered, the browser can immediately use the pre-established connection to download it, significantly reducing the time compared to establishing a new connection at that moment. 

## Track clicks into iframes with GTM
This is a simple script to be used in Google Tag Manager to track clicks into Iframes.
When iframe is clicked it pushes an event to dataLayer. This can be captured with custom event name `ifameClick`. Also iframe `src` is added with this push so it lets you to differentiate iframes if you need.
Based on that old [stackoverflow comment](https://stackoverflow.com/a/3031763/2943345)

### Using the script
Add the [script](https://github.com/postman31/iframe-tracking-gtm/blob/master/gtm-iframe-track.js) as a Custom HTML tag to be fired at pages that contains iframes.
Add custom trigger based on event name `ifameClick` to catch iframe clicks.

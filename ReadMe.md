# PWAs ONLY WORK ON HTTPS

1. Project Setup: npx create-react-app . --template cra-template-pwa

2. Configure/ Reconfigure the Manifest File (public/manifest.json)
 # Code{

    {
  "short_name": "MyPWA",
  "name": "My Progressive Web App",
  "icons": [
    {
      "src": "./count.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": ".",
  "display": "standalone", // Ensures the app opens in full screen
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "orientation": "portrait" // or "landscape" based on your needs
}

<!-- The two entries in the "icons" array of your PWA's manifest.json file serve different purposes, ensuring that your app displays correctly across various devices and screen sizes. Here’s why having multiple icon sizes is important, usually icons with different resolutions are recomended -->

# }Code End
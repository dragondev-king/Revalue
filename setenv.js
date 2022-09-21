const env = process.env.NODE_ENV;
if (env === 'production') {
  console.log('PROPERTY_MANAGER=https://api.revalue.ml');
  console.log('GOOGLE_MAPS_API_KEY=AIzaSyDJF8pDcEjiv7JUAFc5Ofv49sjJJayWkkI');
} else {
  console.log('PROPERTY_MANAGER=https://api.revalue.ml');
  console.log('GOOGLE_MAPS_API_KEY=AIzaSyDJF8pDcEjiv7JUAFc5Ofv49sjJJayWkkI');
}

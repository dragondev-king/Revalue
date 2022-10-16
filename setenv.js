const env = process.env.NODE_ENV;
if (env === 'production') {
  console.log('PROPERTY_MANAGER=http://localhost:5000');
  console.log('GOOGLE_MAPS_API_KEY=AIzaSyDJF8pDcEjiv7JUAFc5Ofv49sjJJayWkkI');
} else {
  console.log('PROPERTY_MANAGER=http://localhost:5000');
  console.log('GOOGLE_MAPS_API_KEY=AIzaSyDJF8pDcEjiv7JUAFc5Ofv49sjJJayWkkI');
}

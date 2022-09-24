import PlacesService from "google-places-web";

PlacesService.apiKey = process.env.GOOGLE_MAPS_API_KEY;

export default PlacesService;

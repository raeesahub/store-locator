  mapboxgl.accessToken = 'pk.eyJ1IjoicmFlZXNhIiwiYSI6ImNrZ3c4aGEwazA3c24ydG1yNG5jaTUzdXEifQ.MAd5Fu2LcI_NvoKrAD2c8A';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-77.034084, 38.909671],
    zoom: 13,
    scrollZoom: false
});

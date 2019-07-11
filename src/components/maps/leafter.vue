<template>
    <div id="mapid"></div>
</template>

<script>
import * as L from 'leaflet'
export default {
  name: 'leafter',
  mounted () {
    var mymap = L.map('mapid').setView([51.505, -0.09], 13)
    L.circle([51.508, -0.11], {
      color: '#dc143c',
      fillColor: '#dc143c',
      fillOpacity: 0.2,
      radius: 800
    }).addTo(mymap)
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmV4dC1pdGVtIiwiYSI6ImNqMDFlYWRqeTAyNzEyd3FuNjQxdmVvMjgifQ.Ff8pEWrzeJ3uipr78e69uw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="HttpClient://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="HttpClient://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="HttpClient://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(mymap)
  }
}
</script>

<style lang="scss" scoped>
#mapid {
  width: 100%;
  display: block;
  height: calc(100vh - 158px);
  overflow: hidden;
}
</style>

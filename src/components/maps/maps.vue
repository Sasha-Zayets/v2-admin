<template>
  <div class="google-map">
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 100%;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'google-map',
  data: () => ({
    center: { lat: 45.508, lng: -73.587 },
    markers: [],
    places: [],
    currentPlace: null
  })
}
</script>

<style scoped>
  .google-map {
    height: 100%;
  }
</style>

<template>
    <div>
      <h5>Basic cards</h5>
      <v-card class="example-card card-padding" :class="'mb-4'">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis culpa labore velit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>
      </v-card>
      <h5>Cards with header</h5>
      <v-card class="example-card card-padding" :class="'mb-4'">
        <v-list class="card-list">
          <v-list-tile-avatar>
            <img src="@/assets/content/avatar-1.jpg" width="40" height="40">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title><strong>Header title</strong></v-list-tile-title>
            <v-list-tile-sub-title>Header subtitle</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list>

        <v-card-text>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi cupiditate dicta ducimus enim esse eum eveniet explicabo id in, quae rerum.
          </p>
        </v-card-text>
      </v-card>
      <h5>Card with multiple sections</h5>
      <v-card class="example-card">
        <v-list class="card-list card-padding-l">
          <v-list-tile-avatar>
            <img src="@/assets/content/avatar-2.jpg" width="40" height="40">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title><strong>Header title</strong></v-list-tile-title>
            <v-list-tile-sub-title>Header subtitle</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list>
        <img src="@/assets/content/card-1.jpg" class="img-fluid">
        <v-card-title primary-title>
          <div>
            <div>
              The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
              A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
              bred for hunting.
            </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn color="accent">LIKE</v-btn>
          <v-btn>SHARE</v-btn>
        </v-card-actions>
      </v-card>
    </div>
</template>

<script>
export default {
  name: 'card'
}
</script>

<style scoped>
.example-card {
  max-width: 500px;
}
.card-padding {
  padding: 24px;
}
.card-padding-l {
  padding: 24px 24px 0 24px;
}
.card-list {
  display: flex;
  margin-bottom: 1.5714286rem;
}
</style>

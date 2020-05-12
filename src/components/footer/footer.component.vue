<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex primary"
      flat
      tile
    >
      <v-card-title>
        <strong class="subheading">Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="(icon,key) in icons"
          :key="key"
          class="mx-4"
          dark
          icon
          :href="social[key]"
          :target="social[key]"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="text-center pb-0">
        <strong>&copy; Keva Damar Galih - {{ new Date().getFullYear() }}</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script src="./footer.component.ts" lang="ts"></script>
<style src="./footer.component.scss" scoped lang="scss"></style>
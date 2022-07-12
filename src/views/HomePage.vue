<template>
  <ion-page>
      <a-header/>
      <ion-content>
        <a-stories/>
        <a-homecontent/>
      </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent,} from '@ionic/vue';
import { defineComponent } from 'vue';
import AHeader from '../components/a-header.vue'
import AStories from '../components/a-stories.vue'
import AHomecontent from '../components/a-homecontent.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    IonPage, IonContent,
    AHeader, AStories, AHomecontent
  }
});
</script>

<style scoped>
 ::-webkit-scrollbar {
  display: none;
 }
</style>

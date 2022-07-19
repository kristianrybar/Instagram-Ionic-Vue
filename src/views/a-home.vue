<template>
  <ion-page>
      <a-header/>
      <ion-content>
        <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
           <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
        <a-stories/>
        <a-homecontent/>
      </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonRefresher, IonRefresherContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import AHeader from '../components/a-header.vue'
import AStories from '../components/a-stories.vue'
import AHomecontent from '../components/a-homecontent.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    IonPage, IonContent,AHeader, AStories, AHomecontent, IonRefresher, IonRefresherContent},
  methods: {
    doRefresh(event: any) {
      console.log('Begin async operation');
      
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }
  }  
});
</script>

<style scoped>
 ::-webkit-scrollbar {
  display: none;
 }
</style>

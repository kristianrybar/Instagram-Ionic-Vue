<!-- <template>
    <ion-content>
        <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
            <ion-refresher-content
                :pulling-icon="chevronDownCircleOutline"
                pulling-text="Pull to refresh"
                refreshing-spinner="circles"
                refreshing-text="Refreshing...">
            </ion-refresher-content>
        </ion-refresher>
    </ion-content>
</template>


<script lang="ts">
import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/vue';
import { chevronDownCircleOutline } from 'ionicons/icons'
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent, IonRefresher, IonRefresherContent },
  setup() {
    const doRefresh = (event: CustomEvent) => {
      console.log('Begin async operation');
      
      setTimeout(() => {
        console.log('Async operation has ended');
        event.complete();
      }, 2000);
    }
    return { chevronDownCircleOutline, doRefresh }
  }
});
</script>

<style>
    
</style> -->
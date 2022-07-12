<template>
   <ion-page>
        <ion-header class="camera">
            <ion-buttons>
                <button>
                    Cancel
                </button>
            </ion-buttons>
            <ion-title class="ion-text-center">
                <div>
                    Camera Roll
                </div>
            </ion-title>
            <ion-buttons>
                <button class="next">
                    Next
                </button>
            </ion-buttons>
        </ion-header>
   </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonButtons, IonTitle} from '@ionic/vue'; 
export default defineComponent({
    name: 'a-camera',
    components: { IonPage, IonHeader, IonButtons, IonTitle }
    
})
</script>

<style scoped>
.camera {
    background: #fbfafa;
    color: #262626;
    display: flex;
    padding: 4px;
    padding-left: 4px;
    padding-right: 4px;
    min-height: 44px;
}

.camera button, .camera ion-title  {
    font-size: 1.1rem;
    background: #fbfafa;
}

.camera .next {
    color: #3880ff;
}

</style>
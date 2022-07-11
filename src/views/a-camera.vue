<template>
   <ion-page>
        <ion-header>
            <ion-buttons>
                <button>
                    Cancel
                </button>
            </ion-buttons>
            <ion-title>
                <div>
                    Camera Roll
                </div>
            </ion-title>
            <ion-buttons>
                <button>
                    Next
                </button>
            </ion-buttons>
        </ion-header>
   </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonButtons, IonTitle} from '@ionic/vue'; 
export default defineComponent({
    name: 'a-camera',
    components: { IonPage, IonHeader, IonButtons, IonTitle }
    
})
</script>

<style scoped>
    
</style>
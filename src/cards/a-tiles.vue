<template>
    <ion-col v-for="image in images" :key="image" size="4">
        <img :src="image.tile">
    </ion-col>
</template>

<script>
import { defineComponent } from 'vue';
import { IonCol } from '@ionic/vue';
export default defineComponent({
    name:'a-tiles',
    components: { IonCol },
    data() {
        return {
            images: [
                { tile: new URL('../assets/thumbs/0.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/1.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/2.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/3.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/4.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/5.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/6.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/7.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/8.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/9.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/10.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/11.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/0.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/1.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/2.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/3.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/4.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/5.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/6.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/7.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/8.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/9.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/10.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/11.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/0.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/1.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/2.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/3.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/4.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/5.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/6.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/7.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/8.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/9.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/10.jpg', import.meta.url).href },
                { tile: new URL('../assets/thumbs/11.jpg', import.meta.url).href },
            ]
        }
    } 
})
</script>

<style scoped>
ion-col {
    padding: 0.5px!important;
    margin-bottom: -4px;
}
</style>
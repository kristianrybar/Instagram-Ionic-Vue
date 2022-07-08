<template>
    <ion-header collapse="fade">
        <ion-buttons>
            <ion-button>
                <ion-icon icon="cameraoutline"></ion-icon>
            </ion-button>
        </ion-buttons>
        <ion-title>
            <div>
                <img class="logo" src="../assets/instagram-logo.png" alt="ig-logo">
            </div>
        </ion-title>
        <ion-buttons>
            <ion-button>
                <ion-icon icon="paperplaneoutline"></ion-icon>
                <div class="button-effect"></div>
            </ion-button>
        </ion-buttons>  
    </ion-header>
</template>

<script lang="ts">

import { IonButtons, IonButton, IonTitle, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({ 
    name: 'a-header',
    components: { IonButtons, IonButton, IonTitle, IonIcon },

});
</script>

<style scoped>
ion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fbfafa;
}
ion-header .logo {
    height: 40px;
    position: relative;
    top: 3px;
}

ion-toolbar {
    display: flex;
    min-height: 44px;
}

ion-title div {
    text-align: center;
}

ion-button {
    font-size: 22px;
}

.header-md::after {
    height: 1px;
    bottom: 0px;
}

.button-effect {
    border-radius: 50%;
    -webkit-transform-origin: center center;
    transform-origin: center center;
    position: absolute;
    z-index: 0;
    display: none;
    background-color: #555;
    opacity: .2;
    -webkit-transition-timing-function: ease-in-out;
    transition-timing-function: ease-in-out;
    pointer-events: none;
    top: 0;
    left: 0;
}
</style>
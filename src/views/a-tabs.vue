<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar>
                <ion-tab-button tab="home" href="/home">
                    <ion-icon icon="homeoutline"></ion-icon>
                </ion-tab-button>
                    
                <ion-tab-button tab="search" href="/search">
                    <ion-icon icon="searchoutline"></ion-icon>
                </ion-tab-button>
                    
                <ion-tab-button tab="camera" href="/camera">
                    <ion-icon icon="cameraoutline"></ion-icon>
                </ion-tab-button>

                <ion-tab-button tab="liked" href="/liked">
                    <ion-icon icon="heartoutline"></ion-icon>
                </ion-tab-button>

                <ion-tab-button tab="profile" href="/profile">
                    <ion-icon icon="personoutline"></ion-icon>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';

export default defineComponent({
    name:'a-tabs',
    components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
    
})
</script>

<style scoped>
    
</style>
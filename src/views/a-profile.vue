<template>
    <ion-page>
        <ion-header>
            <ion-buttons>
                <ion-button>
                    <ion-icon icon="personaddoutline"></ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-title>
                <div class="profile-title">
                    loganpaul 
                    <ion-icon icon="chevrondownoutline"></ion-icon>
                </div>
            </ion-title>
            <ion-buttons>
                <ion-button>
                    <ion-icon icon="timeroutline"></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-header>
        <ion-content>
            <ion-grid class="head">
                <ion-row class="stats">
                    <ion-col class="col">
                        <img class="avatar" src="../assets/avatars/loganpaul.jpg" alt="loganpaul">
                    </ion-col>
                    <ion-col size="9">
                        <ion-row class="ion-text-center">
                            <ion-col size="4">
                                <b>757</b>
                                posts
                            </ion-col>
                            <ion-col size="4">
                                <b>4.6M</b>
                                followers
                            </ion-col>
                            <ion-col size="4">
                                <b>151</b>
                                following
                            </ion-col>
                        </ion-row>
                        <ion-row class="options">
                            <ion-col size="9">
                                <button class="btn">
                                    <span><b>Edit Profile</b></span>
                                </button>
                            </ion-col>
                            <ion-col size="3">
                                <button class="btn">
                                    <ion-icon icon="cogoutline"></ion-icon>
                                </button>
                            </ion-col>
                        </ion-row>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-segment class="segments">
                <ion-segment-button>
                    <ion-icon icon="apps"></ion-icon>
                </ion-segment-button>
                <ion-segment-button>
                    <ion-icon icon="list"></ion-icon>
                </ion-segment-button>
                <ion-segment-button>
                    <ion-icon icon="personoutline"></ion-icon>
                </ion-segment-button>
                <ion-segment-button>
                    <ion-icon icon="bookmarkOutline"></ion-icon>
                </ion-segment-button>
            </ion-segment>
            <section class="tiles">
                <ion-grid class="grid">
                    <ion-row class="row">
                        <a-tiles/>
                    </ion-row>
                </ion-grid>
            </section>
        </ion-content>
    </ion-page>    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonButton, IonTitle, IonIcon, IonHeader, IonCol, IonSegmentButton, IonSegment, IonRow, IonGrid, IonContent, IonPage } from '@ionic/vue';
import ATiles from '../cards/a-tiles.vue'

export default defineComponent({
    name:'a-profile',
    components: { IonButtons, IonButton, IonTitle, IonIcon, IonHeader, IonCol, IonSegmentButton, IonSegment, IonRow, IonGrid, IonContent, IonPage, ATiles }
})
</script>

<style scoped>

ion-header {
    display: flex;
    padding: 4px;
    padding-left: 4px;
    padding-right: 4px;
    min-height: 44px;
    }

ion-button{
    font-size: 1.1rem;
    }
.profile-title {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #000;
    pointer-events: auto;
}

.profile-title ion-icon {
    position: relative;
    top: 3px;
}

.head b {
 display: block;
}

.stats *{
    font-size: .9rem;
    background: #fff;
}

.options .btn {
    border: 1px solid #dbdbdb;
    padding: 7px 0;
    border-radius: 5px;
    text-align: center;
    width: 100%;
    height: 30px;
}

.options ion-col {
    text-align: center;
}

.options .btn ion-icon {
    font-size: 23px;
    background: transparent;
    bottom: 4px;
    position: relative;
    color: #262626; 
}

.head .avatar {
    border-radius: 999px;
    width: 80px;
    margin-right: 1em;
}

.segments ion-icon {
    font-size: 1.2rem;
}

ion-segment-button {
 min-width: 1px;
}

.tiles .grid {
    padding: 0;
}

</style>
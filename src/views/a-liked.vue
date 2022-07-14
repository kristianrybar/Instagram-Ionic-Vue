<template>
    <ion-page class="liked">
        <ion-content>
            <ion-header>
                <ion-segment>
                    <ion-segment-button>
                        Following
                    </ion-segment-button>
                    <ion-segment-button>
                        You
                    </ion-segment-button>
                </ion-segment>
            </ion-header>
            <ion-item>
                <ion-avatar>
                    <img src="../assets/avatars/teamklemp.jpg" alt="teamklemp">
                </ion-avatar>
                <div class="text">
                    <ion-label>
                        <p>
                            <b>teamklemp </b>started following <b>bhadbhabie </b>and <b>2&nbsp;others. </b> 
                            <ion-note class="note">46m</ion-note>    
                        </p>
                    </ion-label>
                </div>
            </ion-item>
            <z-actions/>
        </ion-content>    
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonSegment, IonSegmentButton, IonItem, IonLabel, IonAvatar, IonNote, IonContent } from '@ionic/vue';
import ZActions from '../cards/z-actions.vue';

export default defineComponent({
    name:'a-liked',
    components: { IonPage, IonHeader, IonSegment, IonSegmentButton, IonItem, IonLabel, IonAvatar, IonNote, IonContent, ZActions }

    
})
</script>

<style>

.liked ion-segment-button {
    font-size: .9rem;
    --color-checked: none !important;
    text-transform: none;
}

.liked ion-avatar img {
    border-radius: 50%;
    overflow: hidden;
    width: 36px;
    height: 36px;
}

.liked ion-avatar {
    min-width: 36px;
    min-height: 36px;
    margin: 8px 16px 8px 0;
}

.liked ion-item {
    --border-style: none;
}
.text {
    border-bottom: 0.55px solid #c8c7cc;
    width: 100%;
}

p {
    margin: 0;
}

.text ion-label {
    white-space: normal !important;
    margin: 11px 8px 11px 0;
}
</style>
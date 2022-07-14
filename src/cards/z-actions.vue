<template>
    <ion-item v-for="action in actions" :key="action">
        <ion-avatar>
            <img :src="action.avatar">
        </ion-avatar>
        <div class="text">
            <ion-label>
                <p>
                    <b>{{ action.name }} </b>{{ action.action }} <b>{{ action.action }} </b>and <b>2&nbsp;others. </b> 
                    <ion-note class="note">46m</ion-note>    
                </p>
            </ion-label>
        </div>
    </ion-item>
</template>

<script>
import { defineComponent } from 'vue';
import { IonItem, IonLabel, IonAvatar, IonNote } from '@ionic/vue';

export default defineComponent({
    name:'z-actions',
    components: { IonItem, IonLabel, IonAvatar, IonNote },
    data() {
        return {
            actions: [
                { avatar: new URL('../assets/avatars/teamklemp.jpg', import.meta.url).href, name: 'teamklemp', action: 'following', target: 'bhadbhabie' },
                { avatar: new URL('../assets/avatars/bhadbhabie.jpg', import.meta.url).href, name: 'bhadbhabie', action: 'following', target: 'elonmusk' },
                { avatar: new URL('../assets/avatars/loganpaul.jpg', import.meta.url).href, name: 'loganpaul', action: 'liked', target: 'bhadbhabie' },
                { avatar: new URL('../assets/avatars/loganpaul.jpg', import.meta.url).href, name: 'loganpaul', action: 'liked', target: 'teamklemp' },
                { avatar: new URL('../assets/avatars/mateklemp.jpg', import.meta.url).href, name: 'mateklemp', action: 'commented on', target: 'teamklemp' },
                { avatar: new URL('../assets/avatars/mateklemp.jpg', import.meta.url).href, name: 'mateklemp', action: 'following', target: 'bhadbhabie' },
                { avatar: new URL('../assets/avatars/lenkamie.jpg', import.meta.url).href, name: 'lenkamie', action: 'liked', target: 'loganpual' },
                { avatar: new URL('../assets/avatars/teamklemp.jpg', import.meta.url).href, name: 'teamklemp', action: 'commented on', target: 'bhadbhabie' },
                { avatar: new URL('../assets/avatars/elonmusk.jpg', import.meta.url).href, name: 'elonmusk', action: 'commented on', target: 'mateklemp' },
                { avatar: new URL('../assets/avatars/elonmusk.jpg', import.meta.url).href, name: 'elonmusk', action: 'liked', target: 'lenkamie' },
                { avatar: new URL('../assets/avatars/lenkamie.jpg', import.meta.url).href, name: 'lenkamie', action: 'following', target: 'mateklemp' },
                { avatar: new URL('../assets/avatars/loganpaul.jpg', import.meta.url).href, name: 'loganpaul', action: 'commented on', target: 'bhadbhabie' },
                { avatar: new URL('../assets/avatars/bhadbhabie.jpg', import.meta.url).href, name: 'bhadbhabie', action: 'liked', target: 'teamklemp' },
                { avatar: new URL('../assets/avatars/elonmusk.jpg', import.meta.url).href, name: 'elonmusk', action: 'liked', target: 'teamklemp' },
                { avatar: new URL('../assets/avatars/bhadbhabie.jpg', import.meta.url).href, name: 'bhadbhabie', action: 'following', target: 'elonmusk' },
                { avatar: new URL('../assets/avatars/teamklemp.jpg', import.meta.url).href, name: 'teamklemp', action: 'commented on', target: 'elonmusk' },
                { avatar: new URL('../assets/avatars/loganpaul.jpg', import.meta.url).href, name: 'loganpaul', action: 'commented on', target: 'lenkamie' },
                { avatar: new URL('../assets/avatars/lenkamie.jpg', import.meta.url).href, name: 'lenkamie', action: 'following', target: 'teamklemp' },
                { avatar: new URL('../assets/avatars/lenkamie.jpg', import.meta.url).href, name: 'lenkamie', action: 'liked', target: 'loganpaul' },
                { avatar: new URL('../assets/avatars/bhadbhabie.jpg', import.meta.url).href, name: 'bhadbhabie', action: 'following', target: 'lenkamie' },
                { avatar: new URL('../assets/avatars/elonmusk.jpg', import.meta.url).href, name: 'elonmusk', action: 'commented on', target: 'loganpaul' },
            ]
        }
    }

})
</script>

<style scoped>
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
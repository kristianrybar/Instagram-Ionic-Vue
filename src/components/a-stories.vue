<template>
    <div class="stories">
        <header>
            <b>Stories</b>
            <span>
                <ion-icon class="stories-play" icon="play"></ion-icon>
                Watch all
            </span>
        </header>
        <div class="users">
            <div v-for="avatar in avatars" :key="avatar" class="user">
                <div class="avatar">
                    <img :src="avatar.photo" alt="bhadbhabie">  
                </div>
                {{ avatar.user }}
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';

export default defineComponent({
    name: 'a-stories',
    components: { IonIcon },
    data() {
        return {
            avatars: [
                { photo: new URL('../assets/avatars/bhadbhabie.jpg', import.meta.url).href, user: 'bhadbhabie' },
                { photo: new URL('../assets/avatars/loganpaul.jpg', import.meta.url).href, user: 'loganpaul' },
                { photo: new URL('../assets/avatars/elonmusk.jpg', import.meta.url).href, user: 'elonmusk' },
                { photo: new URL('../assets/avatars/lenkamie.jpg', import.meta.url).href, user: 'lenkamie' },
                { photo: new URL('../assets/avatars/mateklemp.jpg', import.meta.url).href, user: 'mateklemp' },
                { photo: new URL('../assets/avatars/teamklemp.jpg', import.meta.url).href, user: 'teamklemp' }
            ]
        }
    }
});
</script>

<style scoped>
.stories {
    display: block;
    background: #fbfafa;
    border-bottom: 1px solid #dbdbdb;
}
 
b {
    font-weight: 700;
} 

.stories span {
    display: flex;
    color: #999;
    align-items: center;
}

.stories header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    padding-top: 20px;
    font-size: .875rem;
}

.stories-play {
    margin-right: 2px;
}

.users {
    height: 100px;
    overflow-x: scroll;
    display: flex;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
}

.users::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}

.user {
    display: inline-block;
    color: #999;
    text-align: center;
    margin-left: 15px;
    font-size: 81%;
}

.avatar {
    display: block;
    border-radius: 999px;
    border: 1px solid #c6c6c6;
    margin-bottom: 5px;
    padding: 3px;
    padding-bottom: 0;
}

.avatar img {
    border-radius: 999px;
    border: 0.8px solid #c6c6c6;
    height: 60px;
    width: 60px;
}

.stories .users .user img {
    max-width: none !important;
}
</style>
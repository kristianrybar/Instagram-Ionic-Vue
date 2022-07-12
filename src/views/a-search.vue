<template>
    <ion-page class="search">
        <ion-content>
            <ion-searchbar class="searchbar"></ion-searchbar>
            <div class="users">
                <div class="user">
                    <div class="avatar">
                        <img src="../assets/avatars/bhadbhabie.jpg" alt="bhadbhabie">  
                    </div>
                    bhadbhabie
                </div>
                <div class="user">
                    <div class="avatar">
                        <img src="../assets/avatars/loganpaul.jpg" alt="loganpaul">  
                    </div>
                    loganpaul
                </div>
                <div class="user">
                    <div class="avatar">
                        <img src="../assets/avatars/elonmusk.jpg" alt="elonmusk">  
                    </div>
                    elonmusk
                </div>
                <div class="user">
                    <div class="avatar">
                        <img src="../assets/avatars/lenkamie.jpg" alt="lenkamie">  
                    </div>
                    lenkamie
                </div>
                <div class="user">
                    <div class="avatar">
                        <img src="../assets/avatars/mateklemp.jpg" alt="mateklemp">  
                    </div>
                    mateklemp
                </div>
                <div class="user">
                    <div class="avatar">
                        <img src="../assets/avatars/teamklemp.jpg" alt="teamklemp">  
                    </div>
                    teamklemp
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonSearchbar } from '@ionic/vue';
export default defineComponent({
    name:'a-search',
    components: { IonPage, IonContent, IonSearchbar }
})
</script>

<style>
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

.users .user img {
    max-width: none !important;
}

.sc-ion-searchbar-md-h {
    --box-shadow: 0;
    padding: 0 8px;
    min-height: 44px;
}

.search .searchbar-input {
    background: rgba(0,0,0,.08);
    padding: 0 28px;
    border-radius: 5px;
    height: 1.9rem;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    font-size: 0.9rem;
}

.search .searchbar-input::placeholder {
    position: relative;
    top: -1px;
}

.search .searchbar ion-icon {
    top: 8px;
    width: 15px;
    height: 15px;
    left: 8px;
}
</style>
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
 </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'a-stories',
    components: {}

});
</script>

<style>
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
    min-width: 550px;
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
</style>
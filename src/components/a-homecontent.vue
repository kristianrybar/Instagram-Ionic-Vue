<template>
    <div class="post">
        <ion-item>
            <ion-avatar>
                <img src="../assets/avatars/mateklemp.jpg" alt="mateklemp">
            </ion-avatar>
            <div class="item-inner">
                <div class="input-wrapper">
                    <ion-label>
                        <h3>
                            <b>mateklemp</b>
                            <ion-icon icon="ellipsishorizontal"></ion-icon>
                        </h3>
                        <p>
                            Homolka 
                            <ion-icon icon="chevronforwardoutline"></ion-icon>
                        </p>
                    </ion-label>
                </div> 
            </div>
        </ion-item>

        <img src="../assets/posts/mateklemp.jpg" alt="mateklemp">

        <div class="post-content">
            <p class="post-content-icons">
                <ion-icon icon="heartoutline"></ion-icon>
                <ion-icon icon="chatbubbleoutline"></ion-icon>
                <ion-icon icon="paperplaneoutline"></ion-icon>
                <ion-icon class="pull-right" icon="bookmarkoutline"></ion-icon>
            </p>
            <p>
                Liked by
                <b>mateklemp</b>
                and
                <b>22 others</b>
            </p>
            <p>
                <b>mateklemp</b>
                Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.
                <a href="#">#homolka</a>
                <a href="#">@chatahomolka</a>
            </p>
            <p class="footnote">
                <ion-note>
                    1 DAY AGO ·
                </ion-note>
                <span class="note">   
                    SEE TRANSLATION
                </span>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { IonItem, IonAvatar,IonLabel, IonNote } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name:'a-homecontent',
    components: {IonItem, IonAvatar, IonLabel, IonNote}

})
</script>

<style scoped>

ion-item {
    font-size: 0.875rem;
}

.label h3 b {
    font-weight: 700;
}

ion-avatar {
    margin: 8px 16px 8px 0;
    min-width: 36px;
    min-height: 36px;
    display: flex;
    align-items: center;
}

ion-avatar img {
    border-radius: 50%;
    overflow: hidden;
    width: 36px;
    height: 36px;
}

.item-inner {
    width: 100%;
}

.location {
    font-size: 0.875rem;
}

ion-label p ion-icon {
    font-size: 0.8rem !important;
    font-weight: 400;
    vertical-align: middle;
    margin-left: -4px;
    line-height: normal;
    margin-bottom: 1px;
}

ion-label p, ion-label h3 {
    margin: 0;
    position: relative;
}

ion-label h3 ion-icon {
    position: absolute;
    right: 0;
    top: 6px;
    font-size: 1.3rem;
}

.post-content {
    padding-left: 16px;
    padding-right: 16px;
    font-size: 0.875rem;
    line-height: 1.5;
}

.post-content ion-icon {
    font-size: 1.8rem;
}    

.post-content-icons ion-icon:not(.pull-right) {
  margin-right: 1rem;
}

.pull-right {
    float: right;
}
.note {
    color: #aeacb4;
}

.footnote, .footnote ion-note {
    font-size: 0.7rem;
}

</style>
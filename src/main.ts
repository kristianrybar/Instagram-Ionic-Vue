import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Icons */
import { addIcons } from 'ionicons';
import { cameraOutline } from 'ionicons/icons';
import { paperPlaneOutline } from 'ionicons/icons';
import { play } from 'ionicons/icons';
import { ellipsisHorizontal } from 'ionicons/icons';
import { chevronForwardOutline } from 'ionicons/icons';
import { heartOutline } from 'ionicons/icons';
import { chatbubbleOutline } from 'ionicons/icons';
import { bookmarkOutline } from 'ionicons/icons';
import { homeOutline } from 'ionicons/icons';
import { searchOutline } from 'ionicons/icons';
import { personOutline } from 'ionicons/icons';
import { chevronDownOutline} from 'ionicons/icons';
import { personAddOutline } from 'ionicons/icons';
import { timerOutline } from 'ionicons/icons';
import { cogOutline } from 'ionicons/icons';
import { apps } from 'ionicons/icons';
import { list } from 'ionicons/icons';

addIcons({
  cameraoutline: cameraOutline,
  paperplaneoutline: paperPlaneOutline,
  play: play,
  ellipsishorizontal: ellipsisHorizontal,
  chevronforwardoutline: chevronForwardOutline,
  heartoutline: heartOutline,
  chatbubbleoutline: chatbubbleOutline,
  bookmarkoutline: bookmarkOutline,
  homeoutline: homeOutline,
  searchoutline: searchOutline,
  personoutline: personOutline,
  personaddoutline: personAddOutline,
  timeroutline: timerOutline,
  chevrondownoutline: chevronDownOutline,
  cogoutline: cogOutline,
  apps: apps,
  list: list,
});

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});
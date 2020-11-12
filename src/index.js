import { Camagru } from '@/components/camagru/Camagru';
import { Toolbar } from '@/components/toolbar/Toolbar';
import { MainContent } from '@/components/mainContent/mainContent';
import './scss/index.scss';

const camagru = new Camagru('#app', {
    components: [Toolbar, MainContent]
});

camagru.render();
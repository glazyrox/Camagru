import { Camagru } from '@/components/camagru/Camagru';
import { Header } from '@/components/header/Header';
import { MainContent } from '@/components/mainContent/mainContent';
import './scss/index.scss';

const camagru = new Camagru('#app', {
    components: [Header, MainContent]
});

camagru.render();
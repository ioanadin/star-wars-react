import episode1url from '../sw-covers/Star-Wars-Episode-I-The-Phantom-Menace.jpg';
import episode2url from '../sw-covers/Star-Wars-Episode-II-Attack-Of-The-Clones.jpg';
import episode3url from '../sw-covers/Star-Wars-Episode-III-Revenge-Of-The-Sith.jpg';
import episode4url from '../sw-covers/Star-Wars-Episode-IV-A-New-Hope.jpg';
import episode5url from '../sw-covers/Star-Wars-Episode-V-The-Empire-Strikes-Back.jpg';
import episode6url from '../sw-covers/Star-Wars-Episode-VI-Return-Of-The-Jedi.jpg';
import episode7url from '../sw-covers/Star-Wars-Episode-VII-The-Force-Awakens.jpg';

function matchEpisodeToPicture(episodeId) {
    switch (episodeId) {
        case 1:
            return episode1url;
        case 2:
            return episode2url;
        case 3:
            return episode3url;
        case 4:
            return episode4url;
        case 5:
            return episode5url;
        case 6:
            return episode6url;
        case 7:
            return episode7url;
        default:
            return null;
    }
}

export default matchEpisodeToPicture;

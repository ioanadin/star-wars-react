function matchEpisodeToPicture(episodeId) {
    switch (episodeId) {
        case 1:
            return '/Star-Wars-Episode-I-The-Phantom-Menace.jpg';
        case 2:
            return '/Star-Wars-Episode-II-Attack-Of-The-Clones.jpg';;
        case 3:
            return '/Star-Wars-Episode-III-Revenge-Of-The-Sith.jpg';
        case 4:
            return '/Star-Wars-Episode-IV-A-New-Hope.jpg';
        case 5:
            return '/Star-Wars-Episode-V-The-Empire-Strikes-Back.jpg';
        case 6:
            return '/Star-Wars-Episode-VI-Return-Of-The-Jedi.jpg';
        case 7:
            return '/Star-Wars-Episode-VII-The-Force-Awakens.jpg';
        default:
            return null;
    }
}

export default matchEpisodeToPicture;

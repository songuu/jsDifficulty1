import { PLATFORM_STORAGE_KEY, platformMap } from '../constants/platform';

export const checkIsMeiqia = (platform: number = 1) => {
    return platform === platformMap.美洽;
};

export const getPlatformBySection = (section: number) => {
    let platform = Number(localStorage.getItem(PLATFORM_STORAGE_KEY));
    if (!platform) {
        if (section === platformMap.全部) {
            platform = platformMap.美洽;
        } else {
            platform = section;
        }
    } else {
        platform = parseInt(String(platform), 10);
        if (section !== platformMap.全部) {
            platform = section;
        }
    }
    return platform;
};

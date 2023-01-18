import { IMenuItem } from '../components/shared/navigation-menu/navigation-menu.types';
import { DeviceType, THEME_CONSTANT } from './app-constants';

export const getOnPageItems = (currentPath: string, allItems: Array<any>) => {
  if (!allItems || !currentPath) {
    return [];
  }
  return allItems.find((itm: any) => itm.link === currentPath);
};

export const populateId = (str: string) => {
  if (!str) {
    return '';
  }
  return str
    .toString()
    .replace(/[^a-zA-Z ]/g, '')
    .replaceAll(' ', '_');
};

export const buildChildren = (
  childList: Array<any>,
  iteration: number,
  childLIList: Array<any>
) => {
  childList.map((itm: any) => {
    childLIList.push({
      iteration,
      label: itm.label,
      altLabel: itm.altLabel,
      shortLabel: itm.shortLabel
    });
    if (itm.children) {
      buildChildren(itm.children, iteration + 1, childLIList);
    }
  });

  return childLIList;
};

export const isIOS = () => {
  const navigator: any = window.navigator;

  return (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes((navigator.userAgentData || navigator).platform) ||
    ((
      (navigator.userAgentData && navigator.userAgentData.platform) ||
      navigator.userAgent
    ).includes('Mac') &&
      'ontouchend' in document)
  );
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const scrollToQText = () => {
  const queryPart = location.href.split('?');
  if (queryPart && queryPart[1]) {
    const keyValuePair = (queryPart[1] || '').split('=');
    const id = keyValuePair && keyValuePair[1] ? keyValuePair[1] : null;

    if (id) {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 50, behavior: 'smooth' });
      }
    }
    return;
  }

  scrollToTop();
};

export const getGroupedMenu = (routePathArray: Array<IMenuItem>) => {
  const groupCategory = routePathArray
    .map((item: IMenuItem) => item.group)
    .filter((value, index, self) => self.indexOf(value) === index);

  const groupedMenu = groupCategory.map((itm: any) => {
    return {
      label: itm,
      children: routePathArray.filter((rt: IMenuItem) => rt.group === itm)
    };
  });

  return groupedMenu;
};

export const generateSiteMap = () => {
  const pathArr: Array<string> = [];
  const domain = 'https://ui-geeks.in/#';

  const buildLinks = (links: Array<any>) => {
    links.map((rt: any) => {
      const childList = rt.children ? buildChildren(rt.children, 0, []) : [];

      pathArr.push(`${domain}${rt.link}`);

      if (childList && childList.length > 0) {
        childList.map((ch: any) => {
          pathArr.push(
            `${domain}${rt.link}?qtext=${populateId(ch.shortLabel || ch.label)}`
          );
        });
      }
    });
  };

  // buildLinks(JSLINK);
  // buildLinks(REACT_LINK);
  // buildLinks(JS_BLOG_LINK);

  console.log(pathArr.join('\n'));
};

export const THEME = {
  getTheme: () => {
    return (
      localStorage.getItem(THEME_CONSTANT.KEY) || THEME_CONSTANT.DARK_THEME
    );
  },
  setTheme: (themeValue: string) => {
    localStorage.setItem(THEME_CONSTANT.KEY, themeValue);
  }
};

export const isLargeDevice = (deviceType: string) => {
  return [DeviceType.Desktop, DeviceType.LargeDesktop].includes(deviceType);
};

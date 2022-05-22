import createStore from './createStore';

const useMenuStore = createStore((get, set) => {
    return {
      width: 0,
      menuResponsive: null,
      menuState: null,
      // menuState: window.innerWidth > 768 ? 'menu-hide' : 'menu-open',
      isActiveMenu: null,
      marginLeft: null,
      isSeedRound: false,
      isFAQ: false,
      isKYC: false,
      isProfile: false,
      isBounty: false,
      menuOpen: '',
      isMenuOpen: '',
      isKYC: false,
      menuSpacing: '',
      isLoading: true,
      showWallets: false,
      firstLoad: true,
      setMenuOpen: (v) => set(({value, ...rest}) => ({ ...rest, menuOpen: v })),
      setIsMenuOpen: (v) => set(({value, ...rest}) => ({ ...rest, isMenuOpen: v })),
      setWidth: (v) => set(({value, ...rest}) => ({ ...rest, width: v })),
      setMenuResponsive: (v) => set(({value, ...rest}) => ({ ...rest, menuResponsive: v })),
      setMenuState: (v) => set(({value, ...rest}) => ({ ...rest, menuState: v })),
      setIsActiveMenu: (v) => set(({value, ...rest}) => ({ ...rest, isActiveMenu: v })),
      setMarginLeft: (v) => set(({value, ...rest}) => ({ ...rest, marginLeft: v })),
      setIsSeedRound: (v) => set(({value, ...rest}) => ({ ...rest, isSeedRound: v })),
      setIsFAQ: (v) => set(({value, ...rest}) => ({ ...rest, isFAQ: v })),
      setIsKYC: (v) => set(({value, ...rest}) => ({ ...rest, isKYC: v })),
      setIsProfile: (v) => set(({value, ...rest}) => ({ ...rest, isProfile: v })),
      setIsBounty: (v) => set(({value, ...rest}) => ({ ...rest, isBounty: v })),
      setIsKYC: (v) => set(({value, ...rest}) => ({ ...rest, isKYC: v })),
      setMenuSpacing: (v) => set(({value, ...rest}) => ({ ...rest, menuSpacing: v })),
      setLoading: (v) => set(({value, ...rest}) => ({ ...rest, isLoading: v })),
      showWalletsModal: (v) => set(({value, ...rest}) => ({ ...rest, showWallets: v })),
      setFirstLoad: (v) => set(({value, ...rest}) => ({ ...rest, firstLoad: v })),
    }
});

export default useMenuStore;
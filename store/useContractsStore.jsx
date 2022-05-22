import createStore from './createStore';

const useContractsStore = createStore((get, set) => {
    return {
      token: {},
      staking7Days: {},
      staking14Days: {},
      staking30Days: {},
      staking60Days: {},
      setToken: (v) => set(({value, ...rest}) => ({ ...rest, token: v })),
      setStaking7Days: (v) => set(({value, ...rest}) => ({ ...rest, staking7Days: v })),
      setStaking14Days: (v) => set(({value, ...rest}) => ({ ...rest, staking14Days: v })),
      setStaking30Days: (v) => set(({value, ...rest}) => ({ ...rest, staking30Days: v })),
      setStaking60Days: (v) => set(({value, ...rest}) => ({ ...rest, staking60Days: v })),
    }
});

export default useContractsStore;
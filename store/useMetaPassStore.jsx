import createStore from './createStore';

const useMetaPassStore = createStore((get, set) => {
    return {
      metaPass: {},
      supplyRemaining: 0,
      setMetaPass: (v) => set(({value, ...rest}) => ({ ...rest, metaPass: v })),
      setSupplyRemaining: (v) => set(({value, ...rest}) => ({ ...rest, supplyRemaining: v })),
    }
});

export default useMetaPassStore;
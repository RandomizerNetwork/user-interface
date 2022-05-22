import createStore from './createStore';

const useStakingStore = createStore((get, set) => {
    return {
      showCalculator: false,
      showWithdraw: false,
      setShowCalculator: (v) => set(({value, ...rest}) => ({ ...rest, showCalculator: v })),
      setShowWithdraw: (v) => set(({value, ...rest}) => ({ ...rest, showWithdraw: v })),
    }
});

export default useStakingStore;
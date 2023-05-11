import { useHooks } from "@/components/providers/web3";

const enhanceHook = (swrRes) => {
  return {
    ...swrRes,
    hasFinishedFirstFetch: swrRes.data || swrRes.error,
  };
};

export const useNetwork = () => {
  const swrRes = enhanceHook(useHooks((hooks) => hooks.useNetwork)());
  return {
    network: swrRes,
  };
};

export const useAccount = () => {
  const swrRes = enhanceHook(useHooks((hooks) => hooks.useAccount)());
  return {
    account: swrRes,
  };
};

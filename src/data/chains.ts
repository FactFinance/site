// import arbitrumIcon from '@/assets/chains/arbitrum.svg';
// import baseIcon from '@/assets/chains/base.svg';
// import auroraIcon from '@/assets/chains/aurora.svg';
// import avalancheIcon from '@/assets/chains/avalanche.svg';
// import cronosIcon from '@/assets/chains/cronos.svg';
// import fantomIcon from '@/assets/chains/fantom.svg';
import gnosisIcon from '@/assets/chains/gnosis.svg';
import moonbeamIcon from '@/assets/chains/moonbeam.svg';
import polygonIcon from '@/assets/chains/polygon.svg';
import ethereumIcon from '@/assets/chains/ethereum.svg';
// import bscIcon from '@/assets/chains/bsc.svg';
import xdcIcon from '@/assets/chains/xdc.svg';
import solanaIcon from '@/assets/chains/solana.svg';

export type ChainDef = {
  name: string;
  value: string;
  icon: string;
};

export const chains: ChainDef[] = [
  // { name: 'Base', value: 'Base', icon: baseIcon },
  { name: 'XDC Network', value: 'XDC Network', icon: xdcIcon },
  { name: 'Ethereum', value: 'Ethereum', icon: ethereumIcon },
  // { name: 'BSC', value: 'bscTestnet', icon: bscIcon },
  { name: 'Solana', value: 'Solana', icon: solanaIcon },
  { name: 'Polygon', value: 'Polygon', icon: polygonIcon },
  // { name: 'Avalanche', value: 'avalancheFuji', icon: avalancheIcon },
  // { name: 'Arbitrum', value: 'arbitrumSepolia', icon: arbitrumIcon },
  // { name: 'Fantom', value: 'fantomTestnet', icon: fantomIcon },
  // { name: 'Optimism', value: 'optimismSepolia', icon: optimismIcon },
  { name: 'Gnosis', value: 'Gnosis', icon: gnosisIcon },
  { name: 'Moonbeam', value: 'Moonbeam', icon: moonbeamIcon },
  // { name: 'Aurora', value: 'auroraTestnet', icon: auroraIcon },
  // { name: "ZkSync", value: "zkSyncSepoliaTestnet", icon: "" },
  // { name: 'Cronos', value: 'cronosTestnet', icon: cronosIcon },
];

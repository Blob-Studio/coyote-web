import { carrotWorkInfo } from './carrot';
import { swaprWorkInfo } from './swapr';
import { decentralandFoundationWorkInfo } from './decentraland-foundation';
import { mvfwWorkInfo } from './mvfw';
import { hardhatInfo } from './hardhat';
import { api3Info } from './api3';
import { metaverseFestivalInfo } from './metaverse-festival';
import { dxdaoInfo } from './dxdao';
import { bankathonInfo } from './bitcoin-bankathon';
import { healthspanInfo } from './healthspan';
import { crowsNestInfo } from './crows-nest';
import { agenciaEnriqueInfo } from './agencia-enrique'
import IWork from '../../utils/workSchema';

const workList: { [key: string]: IWork } = {
  carrot: carrotWorkInfo,
  swapr: swaprWorkInfo,
  'decentraland-foundation': decentralandFoundationWorkInfo,
  mvfw: mvfwWorkInfo,
  hardhat: hardhatInfo,
  api3: api3Info,
  'metaverse-festival': metaverseFestivalInfo,
  dxdao: dxdaoInfo,
  'el-salvador-bitcoin-bankahon': bankathonInfo,
  healthspan: healthspanInfo,
  'crows-nest': crowsNestInfo,
  'agencia-enrique': agenciaEnriqueInfo,
};

export default workList;

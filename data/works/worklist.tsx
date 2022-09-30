import IWork from '../../utils/workSchema';

const swaprWorkInfo: IWork = {
  name: "Swapr",
  workType: ["Development"],
  url: "https://swapr.eth",
  workSafeURL: "swapr"
};

const carrotWorkInfo: IWork = {
  name: "Carrot",
  workType: ["Development"],
  url: "https://carrot.org",
  workSafeURL: "carrot"
};

const workList = [
  carrotWorkInfo,
  swaprWorkInfo
];

export default workList;

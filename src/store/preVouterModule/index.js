import finBdInfluen from "./finBdInfluen";
import finIfGenralData from "./finIfGenralData";//导入当前finBdGenralData件夹的index
import finGlSubjass from "./finGlSubjass"
import basicDataCompStore from "./basicDataCompStore"
import finBdAccount from "./finBdAccount";//导入当前projectmanage文件夹的index
import finBdCorp from "./finBdCorp";

import finBdSystem from "./finBdSystem";//导入当前finBdSystem文件夹的index
import finAccperiod from "./finAccperiod";
import finBdVouchType from "./finBdVouchType";
import finGlDetail from "./finGlDetail";
import finBdVouchTypeTemplates from "./finBdVouchTypeTemplates";;//导入凭证模板

import finIfDataDefintion from "./finIfDataDefintion";
import afinBdFactor from "./afinBdFactor";
let preVouterModule= {

  ...finBdInfluen,
  ...finIfGenralData,
  ...finGlSubjass,
  ...basicDataCompStore,
  ...finBdAccount,
  ...finBdCorp,
  ...finBdSystem,
  ...finAccperiod,
  ...finBdVouchType,
  ...afinBdFactor,
  ...finBdSystem,
  ...finIfDataDefintion,
  ...finBdSystem,
  ...finGlDetail,
  ...finBdVouchTypeTemplates,
}

export default preVouterModule;

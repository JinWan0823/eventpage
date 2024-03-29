import { setMbtiSection } from "./module/mbtiSelect.js";
import { setResultContainer, setSelectButton, setSelectCards } from "./module/selectCard.js";
import { setShareUrlButton } from "./module/share.js";
import { setTabMenu } from "./module/tabMenu.js";
import { countUp } from "./utils/countUp.js";

const data = {
    participate : 123123123,
};

const participateDOM = document.getElementById('participate-number');
countUp(participateDOM,data.participate,3);

setTabMenu();

setSelectCards();

setSelectButton();

setResultContainer();

setMbtiSection();

setShareUrlButton();
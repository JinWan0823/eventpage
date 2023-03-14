import { appendChildrenList, makeDOMwithProperties } from "../utils/dom.js";
import {SELECT_RESULT_KEY} from "../constants/result.js";
//JSON -> fetch : 서버에서 내려준다고 가정하거나, 데이터 양이 너무 많아서 코드에 작성하기 부담스러운 경우
//클라이언트에서 정의하는 변수도 있음 ->위의 상황이 아닌 경우

const cardInfoList = [
    {
        id:1,
        imgSrc:'/public/assets/초코꼬북칩.jpeg',
        name:'초코꼬북칩',
        description:'맛있는 초코 꼬북칩'
    },
    {
        id:2,
        imgSrc:'/public/assets/나쵸.jpeg',
        name:'나쵸',
        description:'맛있는 나쵸'
    },
    {
        id:3,
        imgSrc:'/public/assets/허니버터칩.jpeg',
        name:'허니버터칩',
        description:'맛있는 허니버터칩'
    },
    {
        id:4,
        imgSrc:'/public/assets/홈런볼.jpeg',
        name:'홈런볼',
        description:'맛있는 홈런볼'
    }
]

const snackCardList = document.getElementsByClassName('snack-card-list')[0];
const selectButtonDOM = document.getElementsByClassName('participate-button')[0];

const getSelectedCard  = () => {
    return document.getElementsByClassName('select')[0];
}
const getCardById = (id) => {
    return document.getElementById(`select-${id}`)
}

const handleSelectCard = (cardId) => {
    //선택된 카드를 표시 하는 함수
    // 1. 이미 선택되어 있던 카드는 선택 해지
    // 2. 현재 선택한 카드를 선택
    
    const originalSelectedCard = getSelectedCard();
    originalSelectedCard?.classList.remove('select');

    const newSelectedCard = getCardById(cardId)
    newSelectedCard?.classList.add('select') 
    //id='select-1'

}
const getSelectCardDOM = ({
    id,
    imgSrc,
    name,
    description
}) => {
    const snackCardDOM = makeDOMwithProperties('button',{
        id : `select-${id}`,
        className : `snack-card`,
        onclick: () => handleSelectCard(id)
    });
    const imageDOM = makeDOMwithProperties('img',{
        src : imgSrc,
        alert : name,
    });
    const descriptionContainerDOM = makeDOMwithProperties('div',{
        className:'snack-description',
    });
    const nameDOM = makeDOMwithProperties('div',{
        innerHTML : name,
    });
    const descriptionDOM = makeDOMwithProperties('div',{
        innerHTML : description
    });
    appendChildrenList(descriptionContainerDOM,[nameDOM,descriptionDOM]);
    appendChildrenList(snackCardDOM,[imageDOM,descriptionContainerDOM]);

    return snackCardDOM;
}

export const setSelectCards = () =>{
    cardInfoList.forEach((cardInfo)=>{
        const selectCardDOM = getSelectCardDOM(cardInfo);
        snackCardList.appendChild(selectCardDOM)
    })

    // localstroage에서 이미 선택되어져 있는 과자 id를 가져와서 표시
    const cardId = Number(localStorage.getItem(SELECT_RESULT_KEY));
    if(!cardId || isNaN(cardId)) return;

    handleSelectCard(cardId);

};

export const setSelectButton = () => {
    // 1. 버튼 DOM을 받아오기
    // 2. DOM의 onclick 핸들러 등록
        //1) 선택된 카드의 id를 찾기
        //2) localStorage에 해당 id를 저장
        //1번에서 선택된 카드의 id가 없을 때는 선택된 카드가 없다는 경고창을 띄우기
    selectButtonDOM.onclick = () => {
        const selectedCard = getSelectedCard(); //DOM || undefined
        // select 클래스를 가지고 있는 카드
        if(!selectedCard){
            alert('선택된 카드가 없습니다.');
            return;
        }
        const cardId = selectedCard.id?.split('-')[1];
        localStorage.setItem(SELECT_RESULT_KEY,cardId)
        // select-1 -> 1을 추출
        // '-' [select,1]

        setResultContainer();
    }

}

const setResultContainer = (key) => {
    // result 구역에 선택된 과자를 노출시키는 함수z
}
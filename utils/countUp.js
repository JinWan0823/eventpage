//dom : innerHTML이 갱신될 노드
//target : 목표숫자
// second :총 몇 초가 걸릴 지
// term : 몇 초마다 함수 실행할 지
export const countUp = (dom, target, second, term = 15) => {
    if(!dom || isNaN(Number(target)) || isNaN(Number(second)) || isNaN(Number(term))) return;

    let nowNumber = 0;
    const countTerm = Math.floor((target/second)*(term/1000)); // 한 term에 몇이 증가해야 하는지 -> second와 term을 이용해서 계산
    console.log(countTerm);
    // target / second => 1초에 몇 씩 증가할 지?
    //target : 900 | second :9 | term :0.1
    // 1초 -> target / second = 100씩 증가
    // term 초 -> 100*0.1 (target/second) * term -> term이 0.1초일 경우 0.1초마다 10씩 증가해야함
    // term => (target/second)*(term/1000)

    const timeID = setInterval(()=>{
        if(nowNumber >= target){
            nowNumber = target;
            clearInterval(timeID);
            dom.innerHTML = `${nowNumber.toLocaleString()}`
            return;
        }
        nowNumber += countTerm;
        dom.innerHTML = `${nowNumber.toLocaleString()}`
    },term)
};
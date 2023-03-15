const shareUrlButton = document.getElementById('url-share-button');

export const setShareUrlButton = () =>{
    shareUrlButton.onclick= () => {
        //현재 url을 클립보드에 복사
        navigator.clipboard.writeText(location.href);
    }
}
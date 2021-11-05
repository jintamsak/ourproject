const content = "무거운 짐을 계속 들고다니기, 여러번의 검색, 쉽게 알 수 없는 물품보관함 위치 등의 \n 불편함이 아닌 역사 내 물품보관함 위치 정보 공공데이터를 활용하여 하나의 홈페이지  \n   안에서 쉽게 위치 정보를 얻을 수 있도록 편의성, 실용성이 있는 홈페이지입니다.";
const text = document.querySelector(".text");
let i = 0;



function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200)
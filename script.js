const container=document.querySelector('.container');
const main=document.querySelector('.main');
main.style.display="flex";
main.style.flexDirection="column";
main.style.justifyContent="center";
main.style.alignItems="center";
container.style.border="2px solid black";
container.style.width="35rem";
container.style.height="35rem";
container.style.display="flex";
container.style.flexWrap="wrap";
container.style.gap="0";
const boxSize="calc(100% /16)";
// container.style.flex="1 1 auto";
for(let i=0;i<16*16;i++){
        const ele=document.createElement("div");
        ele.classList.add("box")
        ele.id=`bx${i}`;
        ele.setAttribute("ok","0");
        container.appendChild(ele);
        ele.style.width=boxSize;
        ele.style.height=boxSize;
}
function generateRandomInteger(min, max){
    return Math.ceil(Math.random()*max);
}
const imageContainerElement = document.getElementById('img-container');
function addBoxEventListner(){
    document.querySelectorAll(".box").forEach(box => {
        box.addEventListener("mouseover", (e) => {
            const r = generateRandomInteger(0, 255);
            const g = generateRandomInteger(0, 255);
            const b = generateRandomInteger(0, 255);
            if(e.target.getAttribute("ok")=="0"){
                e.target.style.backgroundColor = `rgb(${[r,g,b].join(',')})`;;
                e.target.setAttribute("ok","1");
            }
        });
    });
}
addBoxEventListner();

const btn=document.querySelector(".btn");
btn.addEventListener("click",(e)=>{
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    const text=document.querySelector("#txt").value;
    let num=parseInt(text);
    const boxSize=`calc(100% /${num})`;
    for(let i=0;i<num*num;i++){
        const ele=document.createElement("div");
        ele.classList.add("box")
        ele.id=`bx${i}`;
        ele.setAttribute("ok","0");
        container.appendChild(ele);
        ele.style.width=boxSize;
        ele.style.height=boxSize;
}   
addBoxEventListner();
});

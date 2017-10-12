
{
    let dians =document.querySelectorAll(".banner-lunbodian2");
    let imgs =document.querySelectorAll(".img1");

    dians.forEach(function (ele,index){
        ele.onclick=function (){
            for(i=0;i<dians.length;i++){
                dians[i].classList.remove("active");
                imgs[i].classList.remove("active");
            }
            ele.classList.add("active");
            imgs[index].classList.add("active");
            now = index;
        }
    });
    var th=setInterval(fn,2000);
    var now=0;

    function fn(dir="r"){
        if(dir="r"){
            now++;
            if(now===dians.length){
                now=0;
            }
        }else if(dir="l"){
            now--;
            if(now===-1){
                now=dians.length-1;
            }
        }

        for(i=0;i<dians.length;i++){
            dians[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        dians[now].classList.add("active");
        imgs[now].classList.add("active");
    }
    let bannerObj=document.querySelector("#banner");
    bannerObj.onmouseover=function (){
        clearInterval(th);
    }
    bannerObj.onmouseout=function (){
        th=setInterval(fn,2000);
    }
    let zuo1=document.querySelector("#zuo");
    let you1=document.querySelector("#you");
    you1.onclick=function () { fn() };
    zuo1.onclick=function () { fn("l") };
}

// 单品
{
    let zuoObj=document.querySelector(".goods-zuo");
    let youObj=document.querySelector(".goods-you");
    let botObj=document.querySelector(".danpin-bottom");
    youObj.onclick=fn;
    function fn() {
        botObj.style.marginLeft="-1226px";
        zuoObj.classList.remove("goods-active");
        youObj.classList.add("goods-active");
    }
    zuoObj.onclick=fn1;
    function fn1() {
        botObj.style.marginLeft="0";
        youObj.classList.remove("goods-active");
        zuoObj.classList.add("goods-active");
    }
    let num=0;
    let th=setInterval(fn3,3000);
    function fn3() {
        num++;
        if(num%2==1){
            fn();
        }else {
            fn1();
        }
    }
    let divO=document.querySelector(".danpin-anniu");
    divO.onmouseover=function () {
        clearInterval(th);
    }
    divO.onmouseout=function () {
        th=setInterval(fn3,3000);
    }
}
// 内容
{
    let houbox=document.querySelectorAll(".neirong-houbox");
    for(let i=0;i<houbox.length;i++){
        xxk(houbox[i]);
    }
    function xxk(parrent) {
        let prevO=parrent.querySelector(".prev");
        let nextO=parrent.querySelector(".next");
        let qianbox=parrent.querySelector(".neirong-qianbox");
        let nrq=parrent.querySelectorAll(".neirong-quan li");
        nrq.forEach(function (ele,index) {
            ele.onclick=function () {
                for(let i=0;i<nrq.length;i++){
                    nrq[i].classList.remove("quan-active");
                }
                ele.classList.add("quan-active")
                qianbox.style.marginLeft="-296"*index+"px";
                now=index;
            }

        })
        let now=0;
        nextO.onclick=function(){
            fn2("r");
        };
        prevO.onclick=function () {
            fn2("l")
        };
        function fn2(ele) {
            if(ele==="r"){
                now++;
                if(now===nrq.length){
                    now=nrq.length-1;
                }
            }else if(ele==="l"){
                now--;
                if(now===-1){
                    now=0;
                }
            }
            if(now===nrq.length){
                now=nrq.length-1;
            }
            for(let i=0;i<nrq.length;i++){
                nrq[i].classList.remove("quan-active");
            }
            nrq[now].classList.add("quan-active")
            qianbox.style.marginLeft="-296"*now+"px";
        }
    }
}

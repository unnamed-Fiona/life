function rotateDiv(id){
    var li,target,i=1;
    li=document.getElementById(id);
    target=document.getElementById(id+"-button");
    if(target.style.transform=='rotate(90deg)'){
        target.style.transform='rotate(0deg)';
        li.removeChild(document.getElementById(id+"-u1"));
    }
    else{
        target.style.transform='rotate(90deg)';
        var tempLi,node,t,tampA;
        var newU=document.createElement("u1");
        newU.className="guide-child";
        newU.id=id+"-u1";
        li.appendChild(newU);
        while(t=document.getElementById(id+"h3-"+i)){
            tempLi=document.createElement("li");
            tempA=document.createElement("a");
            tempA.className="a-none-class";
            tempA.href="#"+id+"h3-"+i;
            node=document.createTextNode(t.innerHTML);
            tempA.appendChild(node);
            tempLi.appendChild(tempA);
            newU.appendChild(tempLi);
            i++;
        }
    }
}
function rotateAndShow(id){
    var target;
    target=document.getElementById(id+"-button");
    if(target.style.transform=='rotate(90deg)'){
        target.style.transform='rotate(0deg)';
        document.getElementById(id+'-u1').className='guide-child-temp';
    }
    else{
        target.style.transform='rotate(90deg)';
        document.getElementById(id+'-u1').className='guide-child';
    }
    
}
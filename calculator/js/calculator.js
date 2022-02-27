let buttons=document.querySelectorAll('.button')
for(let x of buttons){
    x.addEventListener('click',function(){
        
        if(this.innerHTML=='AC'){
            document.querySelector('.screen').innerHTML=''
        }
        else if(this.innerHTML=='C'){
            let a=document.querySelector('.screen').innerHTML
            a=a.slice(0,-1)
            document.querySelector('.screen').innerHTML=a;
        }
        else if(this.innerHTML=='='){
            let result=document.querySelector('.screen').innerHTML
            result=eval(result)
            document.querySelector('.screen').innerHTML=result
        }
        else{
            document.querySelector('.screen').innerHTML +=this.innerHTML
        }
        
    })
}


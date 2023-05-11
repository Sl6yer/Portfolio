let li1 = document.querySelector('.li1');
let li2 = document.querySelector('.li2');
let li3 = document.querySelector('.li3');
let li4 = document.querySelector('.li4');
let li5 = document.querySelector('.li5');

let a1 = document.querySelector('.a1');
let a2 = document.querySelector('.a2');
let a3 = document.querySelector('.a3');
let a4 = document.querySelector('.a4');
let a5 = document.querySelector('.a5');
  li1.addEventListener('mouseover', ()=>{
     li1.style.transform = 'scale(1.1)';
     a1.style.color = 'yellow';
  });
  li1.addEventListener('mouseout', ()=>{
     li1.style.transform = 'scale(1)';
     a1.style.color = '';
  });
  li2.addEventListener('mouseover', ()=>{
     li2.style.transform = 'scale(1.1)';
     a2.style.color = 'yellow';
  });
  li2.addEventListener('mouseout', ()=>{
     li2.style.transform = 'scale(1)';
     a2.style.color = '';
  });
  li3.addEventListener('mouseover', ()=>{
     li3.style.transform = 'scale(1.1)';
     a3.style.color = 'yellow';
  });
  li3.addEventListener('mouseout', ()=>{
     li3.style.transform = 'scale(1)';
     a3.style.color = '';
  });
  li4.addEventListener('mouseover', ()=>{
     li4.style.transform = 'scale(1.1)';
     a4.style.color = 'yellow';
  });
  li4.addEventListener('mouseout', ()=>{
     li4.style.transform = 'scale(1)';
     a4.style.color = '';
  });
  li5.addEventListener('mouseover', ()=>{
     li5.style.transform = 'scale(1.1)';
     a5.style.color = 'yellow';
  });
  li5.addEventListener('mouseout', ()=>{
     li5.style.transform = 'scale(1)';
     a5.style.color = '';
  });

let button = document.querySelector('.button');
let icone = document.querySelector('#icone');

 button.addEventListener('mouseover', ()=>{
   icone.style.color = 'black';
 });
 button.addEventListener('mouseover', ()=>{
   icone.style.color = '';
 });

const icone3 = document.querySelector('#icone3');
const icone4 = document.querySelector('#icone4');
const body = document.querySelector('body');
const info = document.querySelector('.info');
const skill2 = document.querySelector('#skill2');
const skill2Dark = document.querySelector('#skill2-dark');
const skill1 = document.querySelector('#skill1');
const skill1Dark = document.querySelector('#skill1-dark');
const skill3 = document.querySelector('#skill3');
const skill3Dark = document.querySelector('#skill3-dark');
const skillTitle = document.querySelector('.skills-title');
const pro1 = document.querySelector('.pro1');
const pro2 = document.querySelector('.pro2');
const pro3 = document.querySelector('.pro3');
const pro4 = document.querySelector('.pro4');
const pro5 = document.querySelector('.pro5');
const pro6 = document.querySelector('.pro6');
const projectsTitle = document.querySelector('.projects-title');
let links = document.querySelectorAll("a");
// DARK THEME

function darkTheme(){
    if(icone.style.color == ''){
        icone.style.color = 'black';
        body.style.backgroundColor = 'white';
        button.style.color = 'black';
        info.style.color = 'black';
        li1.style.color = 'black';
        li2.style.color = 'black';
        li3.style.color = 'black';
        li4.style.color = 'black';
        li5.style.color = 'black';
     
        li1.addEventListener('mouseover', ()=>{
         li1.style.transform = 'scale(1.1)';
         a1.style.color = 'black';
      });
      li1.addEventListener('mouseout', ()=>{
         li1.style.transform = 'scale(1)';
         a1.style.color = 'black';
      });
      li2.addEventListener('mouseover', ()=>{
         li2.style.transform = 'scale(1.1)';
         a2.style.color = 'black';
      });
      li2.addEventListener('mouseout', ()=>{
         li2.style.transform = 'scale(1)';
         a2.style.color = 'black';
      });
      li3.addEventListener('mouseover', ()=>{
         li3.style.transform = 'scale(1.1)';
         a3.style.color = 'black';
      });
      li3.addEventListener('mouseout', ()=>{
         li3.style.transform = 'scale(1)';
         a3.style.color = 'black';
      });
      li4.addEventListener('mouseover', ()=>{
         li4.style.transform = 'scale(1.1)';
         a4.style.color = 'black';
      });
      li4.addEventListener('mouseout', ()=>{
         li4.style.transform = 'scale(1)';
         a4.style.color = 'black';
      });
      li5.addEventListener('mouseover', ()=>{
         li5.style.transform = 'scale(1.1)';
         a5.style.color = 'black';
      });
      li5.addEventListener('mouseout', ()=>{
         li5.style.transform = 'scale(1)';
         a5.style.color = 'black';
      });

        button.addEventListener('mouseover', ()=>{
            button.style.backgroundColor = 'black';
            icone.style.color = 'white';
            button.style.color = 'white';
        })
        button.addEventListener('mouseout', ()=>{
            button.style.backgroundColor = '';
            icone.style.color = 'black';
            button.style.color = 'black';
        })
        
        icone3.style.display = 'none';
        icone4.style.display = 'block';
         skill2.style.display = 'none';
         skill2Dark.style.display = 'block';
         skill1.style.display = 'none';
         skill1Dark.style.display = 'block';
         skill3.style.display = 'none';
         skill3Dark.style.display = 'block';
       
      skillTitle.style.color = 'black';
      projectsTitle.style.color = 'black';

      pro1.style.color = 'black';
      pro1.style.border = '1.5px solid black';
      pro2.style.color = 'black';
      pro2.style.border = '1.5px solid black';
      
      pro3.style.color = 'black';
      pro3.style.border = '1.5px solid black';
      pro4.style.color = 'black';
      pro4.style.border = '1.5px solid black';
      
      pro5.style.color = 'black';
      pro5.style.border = '1.5px solid black';
      pro6.style.color = 'black';
      pro6.style.border = '1.5px solid black';
      
      for (let i = 0; i < links.length; i++) {
         links[i].style.color = "black";
       }
      
    } else{
        icone.style.color = '';
        body.style.backgroundColor = '';
        button.style.color = '';
        info.style.color = '';
        li1.style.color = '';
        li2.style.color = '';
        li3.style.color = '';
        li4.style.color = '';
        li5.style.color = '';
        icone3.style.display = 'block';
        icone4.style.display = 'none';
        button.addEventListener('mouseover', ()=>{
            button.style.backgroundColor = 'white';
            icone.style.color = 'black';
            button.style.color = 'black';
        })
        button.addEventListener('mouseout', ()=>{
            button.style.backgroundColor = '';
            icone.style.color = 'white';
            button.style.color = 'white';
        })
        skill1.style.display = 'block';
         skill1Dark.style.display = 'none';
        skill2.style.display = 'block';
         skill2Dark.style.display = 'none';
        skill3.style.display = 'block';
         skill3Dark.style.display = 'none';
         
         skillTitle.style.color = '';
         projectsTitle.style.color = '';
       

      pro1.style.color = '';
      pro1.style.border = '';
      pro2.style.color = '';
      pro2.style.border = '';
      
      pro3.style.color = '';
      pro3.style.border = '';
      pro4.style.color = '';
      pro4.style.border = '';
      
      pro5.style.color = '';
      pro5.style.border = '';
      pro6.style.color = '';
      pro6.style.border = '';

      for (let i = 0; i < links.length; i++) {
         links[i].style.color = "";
       }
    }
    
 }
 icone3.addEventListener('click', darkTheme);
 icone4.addEventListener('click', darkTheme);


document.querySelector('.themeWhiteYellow').addEventListener('click', (event)=>{
    event.preventDefault();
    if(localStorage.getItem('calculationTheme') === null) {
        localStorage.setItem('calculationTheme', 'WhiteYellow')
    }else if (localStorage.getItem('calculationTheme') === 'BluePurple'){
        localStorage.removeItem('calculationTheme');
        localStorage.setItem('calculationTheme', 'WhiteYellow')
    }else if (localStorage.getItem('calculationTheme') === 'BlueLilac'){
        localStorage.removeItem('calculationTheme');
        localStorage.setItem('calculationTheme', 'WhiteYellow')
    }

});

document.querySelector('.themeBlueLilac').addEventListener('click', (event)=>{
    event.preventDefault();
    if(localStorage.getItem('calculationTheme') === null) {
        localStorage.setItem('calculationTheme', 'BlueLilac')
    }else if (localStorage.getItem('calculationTheme') === 'WhiteYellow'){
        localStorage.removeItem('calculationTheme');
        localStorage.setItem('calculationTheme', 'BlueLilac')
    }else if (localStorage.getItem('calculationTheme') === 'BluePurple'){
        localStorage.removeItem('calculationTheme');
        localStorage.setItem('calculationTheme', 'BlueLilac')
    }

});

document.querySelector('.themeBluePurple').addEventListener('click', (event)=>{
    event.preventDefault();
    if(localStorage.getItem('calculationTheme') === null) {
        localStorage.setItem('calculationTheme', 'BluePurple')
    }else if (localStorage.getItem('calculationTheme') === 'WhiteYellow'){
        localStorage.removeItem('calculationTheme');
        localStorage.setItem('calculationTheme', 'BluePurple')
    }else if (localStorage.getItem('calculationTheme') === 'BlueLilac'){
        localStorage.removeItem('calculationTheme');
        localStorage.setItem('calculationTheme', 'BluePurple')
    }

});

document.querySelector('.themeDark').addEventListener('click', (event)=>{
    event.preventDefault();
    if(localStorage.getItem('theme') === null) {
        localStorage.setItem('theme', 'dark')
    }else if (localStorage.getItem('theme') === 'light'){
        localStorage.removeItem('theme');
        localStorage.setItem('theme', 'dark')
    }

});

document.querySelector('.themeLight').addEventListener('click', (event)=>{
    event.preventDefault();
    if(localStorage.getItem('theme') === null) {
        localStorage.setItem('theme', 'light')

    }else if (localStorage.getItem('theme') === 'dark'){
        localStorage.removeItem('theme');
        localStorage.setItem('theme', 'light')
    }
});

addClassToHtml('dark');
addClassToHtml('light');
addClassToHtml('WhiteYellow');
addClassToHtml('BluePurple');
addClassToHtml('BlueLilac');


function addClassToHtml(color){
    try{
        if(localStorage.getItem('theme') === color){
            document.querySelector('body').classList.add(color);
        }
        else if(localStorage.getItem('theme') === 'dark'){
            document.querySelector('.navbar-default ').classList.add('dark-1');
        }
        else {
            document.querySelector('body').classList.remove(color);
            document.querySelector('.navbar-default ').classList.remove('dark-1');
        }

        if(localStorage.getItem('calculationTheme') === 'WhiteYellow'){
            document.querySelector('.containerPattern').classList.add('yellow');
            let divs = document.querySelectorAll('.btn');
            for (let i = 0; i < divs.length; i++) {
                divs[i].classList.add('white');
            }
        }else if(localStorage.getItem('calculationTheme') === 'BluePurple'){
            document.querySelector('.containerPattern').classList.add('blue-1');
            let divs = document.querySelectorAll('.btn');
            for (let i = 0; i < divs.length; i++) {
                divs[i].classList.add('purple');
            }
        }else if(localStorage.getItem('calculationTheme') === 'BlueLilac'){
            document.querySelector('.containerPattern').classList.add('blue-2');
            let divs = document.querySelectorAll('.btn');
            for (let i = 0; i < divs.length; i++) {
                divs[i].classList.add('lilac');
            }
        }else{
            document.querySelector('.containerPattern').classList.remove('yellow');
            document.querySelector('.btn').classList.remove('white');
            document.querySelector('.containerPattern').classList.remove('blue-1');
            document.querySelector('.btn').classList.remove('purple');
            document.querySelector('.containerPattern').classList.remove('blue-2');
            document.querySelector('.btn').classList.remove('lilac');
        }
    }catch(err){}
}

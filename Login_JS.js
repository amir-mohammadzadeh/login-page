
function switchCard(value){
    const card = document.getElementById('formSwitcher')
    const title = document.querySelectorAll('.lg-title')
    const forms = document.querySelectorAll('#lgForm form')
    const card_content = card.children ;
    card.classList.toggle('swipeLeft')
    if(value == "login"){
        card_content[0].classList.replace('d-none','d-flex')
        card_content[1].classList.replace('d-flex' ,'d-none')
        //card.style.right = "17%" ;
        forms[1].style.opacity = '0'
        forms[0].style.opacity = '1'
    }else{
        card_content[0].classList.replace('d-flex' ,'d-none')
        card_content[1].classList.replace('d-none','d-flex')
        //card.style.right = "51%" ;
        forms[1].style.opacity = '1'
        forms[0].style.opacity = '0'
    }
    title.forEach(item=>{
        item.classList.toggle('godown')
    })
}

function showPassword(elem){
    const input = elem.parentElement.children[0]
    if(input.type == 'password'){
        input.type = 'text' ;
        elem.classList.replace('icon-eye' , 'icon-eye-slash')
    }else{
        input.type = 'password' ;
        elem.classList.replace( 'icon-eye-slash','icon-eye')
    }
}

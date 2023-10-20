// 클래스 이름 리스트 확보
let item = document.getElementsByClassName("context1_product_li_des");
let item1 = document.getElementsByClassName("context1_product_li_des_1");
let item2 = document.getElementsByClassName("nav_items");
let nav_des_bar_class = document.getElementsByClassName("nav_des_bar");
let context1_product_li_des_1 = document.querySelectorAll(".context1_product_li_des_1");
// 글로벌 변수
// listing -index 용
var listing_index=0;
// 함수로 만들고 해당 리스트 다운

function listing(){
    console.log(listing_index);
    context1_product_li_des_1[listing_index].className='context1_product_li_des_1_active';
    listing_index=listing_index+1;
    if(listing_index > 4){
        listing_index=0;
        context1_product_li_des_1[0].className='context1_product_li_des_1';
        context1_product_li_des_1[1].className='context1_product_li_des_1';
        context1_product_li_des_1[2].className='context1_product_li_des_1';
        context1_product_li_des_1[3].className='context1_product_li_des_1';
        context1_product_li_des_1[4].className='context1_product_li_des_1';
    }
}


// while(listing_index < context1_product_li_des_1.length){
//     listing(listing_index);
// }


// nav_items : hover Evnet -> 해당 이벤트에서 


// item2 === nav_items
item2.item(0).addEventListener('mouseover',function() {
    let elem = document.querySelector('.nav_des_bar');
    elem.style.top='9%';
    elem.style.opacity='1';
    elem.style.zindex = '1';
    elem.style.transition=' all 0.5 ease-in';
})

// 해당 요소 hover 마다 바꾸어준다 -> 아래 포함된 요소 바꾸어준다.
item2.item(0).addEventListener('mouseout',function() {
    let elem = document.querySelector('.nav_des_bar');
    elem.style.top='5%';
    elem.style.opacity='0';
    elem.style.zindex = '0';
    elem.style.transition='transition: all 0.5 ease-in';
})

// nav_des_bar_class  = nav_des_bar
// 마우스가 해당 bar 위에 올라가있을 때 
nav_des_bar_class.item(0).addEventListener('mouseover',function(){
    let elem = document.querySelector('.nav_des_bar');
    elem.style.top='9%';
    elem.style.opacity='1';
    elem.style.zindex = '1';
})

// nav_des_bar_class  = nav_des_bar
// 마우스가 해당 bar 위에 내려갔을 때 
nav_des_bar_class.item(0).addEventListener('mouseout',function(){
    let elem = document.querySelector('.nav_des_bar');
    elem.style.top='5%';
    elem.style.opacity='0';
    elem.style.zindex = '0';

})

const id=setInterval(listing,2000);

let cnt = 0; 



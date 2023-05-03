// nav-sub
// 메인 메뉴를 마우스로 올리면(mouse over) 서브 메뉴 영역이 부드럽게 나타나면서, 서브 메뉴가 보이도록 한다.(초기 숨기기)
$('.sub').hide()
// 메인 메뉴를 마우스로 올리면(mouse over)
$('nav > ul > li').on('mouseover',function(){
    // 서브 메뉴 영역이 부드럽게 나타나면서, 서브 메뉴가 보이도록
    // 서브 한꺼번에 내리기
    // $('.sub').stop().slideDown() //부드럽게 나타나면서
    // 서브 개별로 나타내기
    $(this).find('.sub').stop().slideDown()
})
// 메인 메뉴에서 마우스 커서가 벗어나면(mouse out)
$('nav > ul > li').on('mouseout',function(){
    // 서브메뉴 영역은 부드럽게 사라져야 한다.
    // $('.sub').stop().slideUp()
    $(this).find('.sub').stop().slideUp()
})

// 공지사항, 갤거긱 탭 이동

// 해당되지 않는 탭의 내용은 숨겨야 한다.
$('.tab_wrap .title h2:first-child').on('click',function(){
    $('.tab_wrap .contents .post').css('display', 'flex')
    $('.tab_wrap .contents .gallery').hide()
    $('.tab_wrap .title h2').removeClass()
    $(this).addClass('active')
})
$('.tab_wrap .title h2:first-child').on('click',function(){
    $('.tab_wrap .contents .post').hide()
    $('.tab_wrap .contents .gallery').css('display','flex')
    $('.tab_wrap .title h2').removeClass()
    $(this).addClass('active')
})
// 공지사항 첫 글 클릭-팝업
// 공지사항의 첫 번째 콘텐츠를 클릭(Click)할 경우 레이어 팝업창(LayerPop_up)이 나타나며,
$('.popup').hide()
$('.tab_wrap .post a:first-child').on('click',function(){
    $('.popup').show()// 레이어 팝업참(Layer Pop_up)이 나타나며
})
// 팝업 닫기 기능

$('.popup .close').on('click', function(){
    $('.popup').hide()
})
// 슬라이드 애니메이션(제자리, 좌-우, 상-하)
// 이미지만 바뀌면 안 되고, 이미지가 좌에서 우 또는 우에서 좌로 이동하면서전환되어야 한다. (translateX)
//슬라이드는 매 3초 이내로 하나의 이미지에서 다른 이미지로 전환되어야 한다.(setInterval - duration)
// 웹사이트를 열었을 때 자동으로 시작되어 반복적으로(마지막 이미지가 슬라이드되면 다시 첫 번째 이미지가 슬라이드 되는 방식) 슬라이드 되어야한다. (if)
// 120120120120120 ... (012 반복)
// 0px 1200px 2400px
let num = 0
setInterval(function(){ //반복적으로
    num++
    if(num>2){num=0}
    console.log(num)
    // 이미지가 좌에서 우 또는 우애서 좌
    $('#slide_container').css('transform', `translate(-${1200*num}px)`)
},3000) //매 3초 이내로
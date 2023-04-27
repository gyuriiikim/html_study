// jquery() == &()
$('.sub').hide()
$('#popup').hide()
$('nav > ul > li').on('mouseover',()=>{
    $('.sub').stop(true).slideDown()
})
$('nav > ul > li').on('mouseout',()=>{
    $('.sub').stop(true).slideUp()
})

// 공지사항 첫 글 클릭 시 팝업 보이기
$('.notice a:first-child').on('click',()=>{
    $('#popup').show()
})
// 팝업 닫기 클릭 시 팝업 숨기기
$('#popup a').on('click',()=>{
    $('#popup').hide()
})
// 공지사항 제목 클릭 시 공지사항 내용만 보이기
$('.title a:first-child').on('click',()=>{
    $('.notice').show()
    $('.gallery').hide()
    // ClassList.remove() 제이쿼리버전
    $('.tab_wrap .title a').removeClass()
    // ClassList.add() 제이쿼리버전
    $('.tab_wrap .title a:first-child').addClass('active')
})
// 갤러리 제목 클릭 시 갤러리 내용만 보이기
$('.title a:last-child').on('click',()=>{
    $('.gallery').css('display','flex')
    $('.notice').hide()
    $('.tab_wrap .title a').removeClass()
    $('.tab_wrap .title a:last-child').addClass('active')
})
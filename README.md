<h1>반응형 웹디자인&웹퍼블리셔 양성과정 버전기록</h1>
<p>ex) 날짜 - 제목 - 요약</p>
<h2>23.02.13 시작 - HTML</h2>
<p>H1~H6, P, br, inline, block,</p>
<p>H1~H3은 검색키워드로 활용가능하다. H4~H6 꼭필요한 경우만 이용하거나 권장안함</p>
<p>block과 inline태그는 의미에 맞게 외부/내부 구조로 구성해서 사용해야한다.(의미 중첩되지않도록)</p>
<hr>
<h2>23.02.14 - HTML -문서태그+내비게이션 개념</h2>
-&lt; -> 꺽
<p>hr, em/em, strong/strong, br, q, blockquote, code, del, sub, sup</p>
<blockquote cite="https://webty.tistory.com/85">유나쌤 블로그 참고-https://webty.tistory.com/85</blockquote>
hr은 구분선 / em,strong은 강조문구 / br은 문장 줄바꿈 / q 짧은 인용문의 주소링크 /  blockquote 긴 링크
<br>
내비게이션의 개념
<p>gnb, lnb, snb, fnb, breadcrumbs</p>
<hr>
<h2>23.02.15 - HTML - 스타트, 레시피</h2>
<ul>
  <li>ol은 <em>순서</em>가 있는 목록의 틀이다.</li>
  <li>li는 목록 <strong>list</strong>의 약자이다.</li>
  <li>li의 부모는 <strong>ol,ul</strong>의 태그만 가능하다.
  <li>li는 <em>블록, 인라인</em>과 같이 모두 가능하다.</li>
  <li>oi,ul의 다음에는 <strong>li태그만 가능</strong>하고 다른 태그들은 불가능하다.</li>
  <li>header은 부모이고 자식은 meta와 title이 있으며 메타와 타이틀은 형제이다.<br>
    html은 부모이고 head는 자식이다.<br>
    html의 자식은 첫째는 head이고 둘째는 body이다<br>
    html과 meta의 관계에서  자손이다
  </li>
</ul>
<dl>
  <dt>정의형목록dl,dt,dd</dt>
  <dd>dl은 dt와 dd의 부모이며, 다른태그를 자식으로 둘 수 없다</dd>
  <dd>dl은 dt,dl을 묶는 그룹이고 dt는 그룹안에 제목이고 dd는 내용이다.</dd>
  <dd>dt태그를 사용한 다음에 dd만 사용 가능하다 dt태그를 연속으로 사용 할 수 없다.</dd>
  <dd>dd태그를 사용하고 dd태그를 연속 사용이 가능하다.</dd>
  <dd>dt,dd는 다른 태그들을 사용할 수 있지만 dl태그사용 후 다른 태그 사용은 할 수 없다.</dd>
</dl>
<hr>
<div class="study">
  <h2>23.02.16 - HTML - 시맨틱태그, 그룹태그</h2>
  <dl>
    <dt>그룹div</dt>
    <dd>div는 2개 이상의 인라인,볼록 요소를묶어주는 그룹 태그이다.</dd>
    <dd>태그들 중에서 많이 사용하기도 한다</dd>
    <dd>div뒤에 class를 이용해서 의미가 있는 간단한 이름을 작성해 주면된다. <br>ex) title / top / contents / btm 등등</dd>
    <dd>경로를 알려주는 방법 중 하나인데<br>dt에 class=”skip”을 붙여서 ‘현재 페이지 경로’를 실제 페이지에서는 가릴 수 있다</dd>
    <dd>header는 로고 및 내비게이션을 묶어주는 태그이다</dd>
    <dd>section의 태그는 문서의 독립적인 구획을 나타내고 제목을 포함하는 경우가 많다</dd>
    <dd>aside는 문서의 주요내용과간접적인 내용 주로 사이드에 있음</dd>
   </dl>
</div>
<hr>
  <h2>23.02.17 - HTML - 그룹태그,하이퍼링크태그,이미지,비디오태그</h2>
  <dl>
  <dt>태그</dt>
  <dd>span→ div의 이란인버전느낌strong만 가능 강조하고 싶은게 아니라 디자인용.</dd>
  <dd>문서와 문서를 연결하여 이동할 수 있는 모든 링크를 뜻한다.ex) 네이버 메인 문서 → 상단 카페링크클릭 → 네이버 카페문서로 이동 링크 어떠한 대상과 상호작용했을때 url경로로 이동한다 웹주소→ url</dd>
  <dd>*절대경로*‘최초의 시작점’을 뜻한다.쉽게 말해 어떤 파일이 존재하기 위해서 있어야 하는 시발점을 말한다.웹주소로 시작하는 http;// 또한 절대경로에 해당합니다</dd>
  <dd>a태그만약 li랑 같이 쓰일경우 a는 li의 자식이 된다 ->2개이상의 태그를 묶는경우에는 a태그가 부모가 될 수 있다.ex) p태그와 h태그를 묶을때</dd>
  <dd>상대경로-> ’기준경로’를 기준으로 경로를 구성하는 것을 상대경로라고 합니다. / 현재나의 위치를 생각해서 그기준으로 한는 것</dd>
  <dd> ./는 현재위치에서 링크찾기(쉬운방법)</dd>
  <dd>같은위치 / 하위경로 / 상위경로*알아두기!!*상대경로에서’기준위치’를 정했다면 찾고자 하는 파일이 ‘기준위치’에서 어디에 있는지 확인해야 합니다</dd>
  </dl>
</div>
<hr>
<h2>23.02.20 - HTML - </h2>
  <dl>
  <dt>*경영이념*</dt>
  <dd>클론코딩으로 다른것과같게 만들때 새파일 하나를 더만들어야한다</dd>
  <dd>태그를 작성할 때에는 피그마와 반대로 생각해서 태그를 작성해야한다.</dd>
  <dd>html:5 을 치면 기본부가기능이 자동완성으로 나온다.</dd>
  <dd>meta:kw는 키워드 / meta:desc는 description</dd>
  <dd>내가만들지 않은 페이지는 href""에 #을 넣어줘야한다.</dd>
  <dd>주메뉴에 서브가 없을 때에는 바로 a태그로 작성해주면 된다 / 서브가 있을 때에는 li태그로 작성해주면 된다.</dd>
  <dd>nav는 header에서 한번만 사용 가능하다</dd>
  <dd>css는 html을 만들어 주면서 진행해줘야한다. 디자인 할 부분에 html을 해줘야한다.</dd>
  <dd>글 옆의 이미지는 em, span을 사용해줄 경우 태그사용한 옆에 글자에는 css로 이미지를 넣어줄 수 있다.</dd>
  <dt>*표태그*</dt>
  <dd>table은 표의 태그이며, tr은 행 /td는 열 / th는 제목이다</dd>
  <dd>tfoot는 tbody앞이나 뒤에있어도 순서가 바뀌지 않는다.</dd>
  <dd>tfoot을 사용하게 되면 tbody의 앞에 무조건 태그를 작성해줘야한다.</dd>
  <dd>디자인만 들어갔을 때에는 span을 사용해주는 것이 좋다.</dd>
  <dd>예시</dd>
  <table>
    <thead>
      <tr>
        <th>제1</th>
        <th>제2</th>
      </tr>
    </thead>
    <tdoby>
      <tr>
        <td>내1</td>
        <td>내2</td>
      </tr>
     </tbody>
  </table>
  <dd></dd>
  </dl>

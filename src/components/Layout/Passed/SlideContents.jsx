import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FcFlashOn } from 'react-icons/fc';

const SlideContents = ({ id,children }) => {
  let content = null;

  if (id === '101') {
    content = (
      <>
      <ImgComponent2
              imagePath={"back5.png"}
              top={"80%"}
              left={"70%"}
              rotate={"0"}
              width={"40%"}/>
        <div style={{height : "100px"}}>
          <TitleSpan>클럽 팔랑크스</TitleSpan>
        </div>
          
              <GreenSpan>전국대학연합 기획/컨설팅 동아리, <br/>
              팔랑크스</GreenSpan>는 기획/컨설팅 직무로  <br/>
              <OrangeSpan>나의 커리어를 시작하고자하는,</OrangeSpan>  <br/>
              사회로 진출하는 대학생 혹은<br/>
              사회초년생들의 역량 성장과  <br/>
              확실한 💚<GreenSpan>결과물(스펙)이</GreenSpan>💚 담긴 <br/>
              <br/>
               <SemiBiggerSpan><OrangeSpan>실무 포트폴리오</OrangeSpan>를 <br/>
               가장 중요시하는! <br/>
              ‘클럽형’ 동아리 </SemiBiggerSpan>입니다.<br/>
              <br/>
              <SemiBiggerSpan><GreenSpan>‘클럽‘ 형 동아리인 팔랑크스는<br/>
              다음의 특징을 가집니다❗<br/></GreenSpan></SemiBiggerSpan>
              <br/>
              <br/>

      </>
    );
  } else if (id === '102') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>친목보단 성장</TitleSpan>
        </div>
          제가(9기 단장) 기억하는 <br/>
          1, 2학년 때에 했던 8개 동아리는, <br/>
          한 <RedSpan>20~30명 정도가 주 1회 정도 <br/>
          모였다가 와서 삼삼오오 떠들고🤷‍♂️ </RedSpan><br/>
          어떤 주제(영어회화, 여행, 기획..등)를 <br/>
          놓고<RedSpan> 조별 토론을 하기도 하고,</RedSpan> <br/>
          <br/>
          때로는 <RedSpan>누가 발표하는 것을 <br/>
          들어보기도 하고,</RedSpan> 그러다가 <br/>
          모임이 끝나면 <RedSpan>학교 앞 술집에 가서 <br/>
          뒷풀이를 하면서 또 막 놀고, 떠들고...</RedSpan><br/>
          <br/>
          그러다가 <RedSpan>썸인지...뭔지ㅠ</RedSpan> 아슬아슬한 <br/>
          톡도 주고받고 다음에 와서 따로 <br/>
          그 <RedSpan>친구랑 술마시러 나오고</RedSpan>.. 또💨 <br/>
          <br/>
          어떤 친구는 이성들한테 대쉬받고..<br/>
          놀고 그러다가 또 학기에 한번씩<br/> 
          같이 MT 갔다가 누구누구 깨졌다💦 <br/>
          <br/>
          혹은 뭔가 <OrangeSpan>새로운게 없어..지루해..😒</OrangeSpan> <br/>
          그러면서 그냥 톡방에서 말 없어지고 …<br/>
          다른 동아리 놀러가고,<br/>
          또 반복…그러면서 <br/>
          <br/>
          <BiggerSpan>취업 전선..?🙄<br/></BiggerSpan>
          이거였어요. <br/>

          
      </>
    );
  } else if (id === '103') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>그런데 <br/>팔랑크스는,</TitleSpan>
        </div>
        이러한 ‘친목’, ‘연애’.. 등 <br/>
        ‘동아리’ 하면 떠오르는 여러 <br/>
        꽁냥꽁냥한 것과는 <br/><SemiBiggerSpan><RedSpan>거리가 좀
        있습니다.💢</RedSpan></SemiBiggerSpan><br/>
        <br/>
        <SemiBiggerSpan><GreenSpan>팔랑크스는,</GreenSpan></SemiBiggerSpan><br/>
        기획/컨설팅 분야로 진출하고자<br/>
        하는 청춘이 <BlueSpan>채용 시장에서 가장<br/>
        확실한 스펙을 가질 수 있는</BlueSpan>,<br/> 
        실무 포트폴리오를 만들어서 <br/>
        증빙받는, 그러한 <GreenSpan>🔥성장🔥</GreenSpan> 에 <br/>
        메인 초점을 맞추어 모든 활동이 <br/>
        진행됩니다.<br/>
        <br/> 
        이 목표를 가지고 들어온 분에게는<br/>
       <OrangeSpan>너무 체계적이어서 좋지만,</OrangeSpan>  <br/>
        그렇지 않는 분에게는 이렇게 <br/>
        빈번히 <RedSpan>활동하고 노력하는 것이 <br/>
        귀찮을 거에요!<br/></RedSpan>
        <br/>

        아무리 이렇게 이야기하고, <br/>
        자료에 써 놓아도 플친에 <br/>
        문의오는 분들 중에는,<br/>
        <br/> 
        <GraySpan>
        “많이 모이나요?”, <br/>
        “술자리 자주 있나요?”, <br/>
        “남/녀 비율 어떻게 되나요?”..  등의<br/></GraySpan>
        질문이 비중을 이룬다는 점에서,💦💦<br/>
        <br/>
        이 부분을 정말 <br/>
        <SemiBiggerSpan><RedSpan>확실히 다시 한번 <br/>
        명시 드립니다. </RedSpan><br/></SemiBiggerSpan>
        (동의를 안하시면 들어오시면 안돼요!)<br/>
        <br/>        

        팔랑크스는, <OrangeSpan>각 크루의 역량 성장과 <br/>
        최강의 스펙을 가지기 위한 <br/></OrangeSpan>
        동아리입니다.<br/><GraySpan>
        (단, 같이 고생하면 꼭 친목 위주가 <br/>
        아니더라도 더 친해지더라구요..! <br/>
        같이 단장 욕하면서...윽ㅠ)<br/></GraySpan>
        <br/>

        <OrangeSpan>좋은 추억이라는 것은,</OrangeSpan> <br/>
        ‘아..나 좋은 추억 쌓아야지’ 하고 <br/>
        생기는 것이 아니라, 팔랑크스 <br/>
        <OrangeSpan>클럽에서 ‘확실한 결과물’, <br/>
        ‘정량적 포트폴리오’ 를 쌓으며 <br/>
        고생하고 고민하고, 노력하는 과정,</OrangeSpan><br/> 
        그리고 이를 수료하고 졸업 후에 <br/>
        이를 <OrangeSpan>돌아보며, 미소를 지을 수 있는</OrangeSpan> <br/>
        것임을 알아두자구요!💚<br/>
        <br/>  
        <BiggerSpan><GreenSpan>팔랑크스에서 성장합시다. <br/>
        <BlueSpan>확실히! </BlueSpan>증거로 남게  
          </GreenSpan></BiggerSpan>
      </>
    );
  }else if (id === '104') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>우리끼리의 <br/>장난이 아닌, 
            </TitleSpan><br/>
            <SemiBiggerSpan>나아가고자 하는 <br/>세상과 직접 연결</SemiBiggerSpan>
        </div>
        <br/>
        <br/>
        <br/>
        동아리/학회에서의 활동을 <br/>
        열심히 하고 난 다음에의 <RedSpan>문제는</RedSpan>, <br/>
        이 <RedSpan>결과물의 평가가 오롯이 <br/>
        내 스스로의 만족과 주관적 판단에 <br/>
        있다는 것</RedSpan>이에요💢<br/>
        <br/>
        <GraySpan>
        “나 열심히는 했는데... <br/>
        어…음.. 그래 머 ... <br/>
        이렇게 해가는건가보다..💨”<br/></GraySpan>
        <br/>
       동아리 사람들에게 보여주고, <br/>
       피드백을 받을 수 있다고는 해도 <br/>
       면전에 대고 <BiggerSpan><RedSpan>누가 치열하게 <br/>
       이야기해줄까요? <br/></RedSpan></BiggerSpan>
       <br/>
       더군다나 내 모든 결과물의 평가를 <br/>
       들을 수도 없는 거구요!❌<br/>
      </>
    );
  }else if (id === '105') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>그래서 대부분 <br/>
          그냥 나만의 결과물... 
            </TitleSpan>
        </div>
       <br/>
       <RedSpan>나만의 만족감으로 끝나고 나면 <br/>
      매우 허무합니다. <br/></RedSpan>
      <br/>
      잘 준비를 해서 발표를 한다고 <br/>
      하더라도, 몇 번의 질의응답 <br/>
      이후에 <BlueSpan>“너는 뭐가 안좋다”⚡</BlueSpan>는 말을 <br/>
      다수에게 들을 수 있는 가장 <br/>
      중요한 기회는 얻기 어려워요.🔥<br/>
      <br/> 

     그래서 팔랑크스에서는, <br/>
     이러한 선/후배/동료 피드백을 <br/>
     <OrangeSpan>상호 필수로 진행하고,</OrangeSpan> 이 모든 과정을 <br/>
     나의 <GreenSpan>기획 포트폴리오에 <br/>
     반영할 수 있도록</GreenSpan> 합니다. <br/>
     <br/>
     수많은 이성들과 어울린 심리와 기분에<br/>
     오랫동안 익숙해져 본 사람들이, <br/>
     연애를 하기 쉬운 것과 <br/>
     똑같은 맥락이겠죠!💚<br/>
      </>
    );
  }else if (id === '106') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>
          또한, <br/>팔랑크스에서는
            </TitleSpan>
        </div>
         기획/컨설팅 직무와 관련된 <br/>
         <GreenSpan>‘실무 포트폴리오’</GreenSpan> 를 쌓는 것을 <br/>
         핵심 과정으로서, 나의 모든 <br/>
         기획안과 피드백, 그리고 <br/>
         그 피드백을 수령하고 주차별로 <br/>
         디벨롭되는 <OrangeSpan>‘모든 과정’ </OrangeSpan>을 <br/>
         그대로 <OrangeSpan>세상에 던집니다.🚀</OrangeSpan> <br/>
         <br/>
         우리 <RedSpan>대학생들끼리의 상호 칭찬과 <br/>
         감탄이 아니라,</RedSpan> 실무자, 세상, <br/>
         대중에게 <OrangeSpan>우리들의 기획이 <br/>
         얼마나 가치가 있는지</OrangeSpan>는 <br/>
         진짜 보여주고 <br/>
         기록하는거에요.💪<br/>
         <br/>
        <GreenSpan>팔랑크스 공식 아카이빙 <br/>
        채널(티스토리)</GreenSpan>에 <OrangeSpan>
        기획자로서의 <br/>
        결과물 성장</OrangeSpan>이 주차별로 쌓여지고, <br/>
        내가 관심있는(대부분 추후에 <br/>
        지원하고 싶은 기업과 브랜드를 <br/>
        선택해요) 기업/브랜드를 대상으로, <br/>
        약점을 발견하고🔍 새로운 기능, <br/>
        새로운 서비스, 새로운 브랜딩을 <br/>
        기획하는 과정을 담아, 실제 <br/>
         <BiggerSpan>그 기업과 브랜드에게 <br/>
        공식 타진하는 것까지..❗<br/></BiggerSpan>
        <br/>


      </>
    );
  }else if (id === '107') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>
          그러다보니, <br/>팔랑크스에는,
            </TitleSpan>
        </div>
        기획/컨설팅 직무와 관련된 기업들과 <br/>
        후원사, 프로젝트 연계사, <br/>
        포럼 강의 초청, 특별행사 <br/>
        내빈 참석 등 <BlueSpan>다양한 형태로 <br/>
        세상과 직접 📎연결됩니다.<br/></BlueSpan>
        <br/> 
        재학/휴학/졸예/졸업/<br/>
        선배/후배/동료/후원사/<br/>
        실무진/검수진... 헉..😲<br/>
        <br/>

        <RedSpan>우리끼리 장난치고 <br/>
        끝내는게 아니니까,</RedSpan> 그것을 증빙하고 <br/>
        <BiggerSpan><RedSpan>확실한 운영 규정과 안내에  <br/>
        대한  준수는 필수적이겠죠!😆<br/></RedSpan></BiggerSpan>
        <br/>
        선배 크루 뿐만 아니라, <br/>
        실제 기업들의 연계/후원사들의 <br/>
        실무자의 결과물 피드백, <br/>
        행사 참여 등의 기회를 <br/>
        <RedSpan>부주의한 실수로 날려버리면 <br/>
        너무 아쉽습니다.😥<br/></RedSpan>
        <br/>
        더군다나 개인의 임의적 감정이나 <br/>
        연락두절 같은 경우에도 <br/>
        자칫 잘못하다가는, 사회성에 대해 <br/>
        <RedSpan>안좋은 평판을 남길 수 있으니</RedSpan><br/>
        <br/> 
        아직 사회생활 연습에 대한 준비를 <br/>
        꺼려한다거나, 마음대로 자유롭게 <br/>
        훨훨 놀고 싶은 분들에게는 정말.. <br/>
        맞지 않는 동아리가 될 수 있습니다.<br/>
        <br/>
        <GreenSpan>과도하게 긴장할 필요는 없지만,🤗 </GreenSpan><br/>
        그렇다고 또 아무렇게나 <br/>
        하고 싶은대로 하는 것은.. <br/>
        본인에게 피해가 갈 수 있습니다.<br/>
        <br/> 
        (우리.. 1학년 때 동아리 <br/>
        뒷풀이 때 <BlueSpan>술먹고 깽판치는 친구들..</BlueSpan><br/>
        가끔 보셨잖아요..또르륵...⭐)<br/>
        <br/>
        <BiggerSpan>
        사회로 첫 걸음의 연습이라고 <br/>
        생각하셔야 해요!</BiggerSpan>

      </>
    );
  }else if (id === '108') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>잠깐?... <br/>
          한번..은 누가 못해 
            </TitleSpan>
        </div><BiggerSpan>
        얼마나 <GreenSpan>오랫동안</GreenSpan> 할 수 있어? <br/>
        너 <GreenSpan>믿을 만 해?</GreenSpan>”<br/></BiggerSpan>
        <br/>
        팔랑크스 동아리에서 가장 어려운 <br/>
        지점이자 가장 핵심적인 사항은, <br/>
        <BiggerSpan><OrangeSpan>‘기록’</OrangeSpan></BiggerSpan> 과  
        <BiggerSpan><OrangeSpan>‘지속성’</OrangeSpan></BiggerSpan>이에요.<br/>
        <br/> 
        제가 가장 좀 충격적이었던 부분은, <br/>
        회사들에서 <RedSpan>채용할 때 학점을 보는 <br/>
        이유는,</RedSpan> 결국 그 과목의 어려운 이론을 <br/>
        잘 습득했거나 그 지식이 얼마나 <br/>
        쌓이냐가 아니라...😓<br/>
        <br/>
        4년 이상의 대학 과정 동안에, <br/>
        그 학점을 얼마나 <BiggerSpan><OrangeSpan>잘 ‘유지’ 하고, <br/>
        ‘관리’ 할 수 있느냐</OrangeSpan></BiggerSpan> 를 평가하는 <br/>
        지표라는 것이었습니다.📊<br/> 
        <br/>

        그동안 저는 너무 <RedSpan>‘열정’</RedSpan>만 <br/>
        가득했는데.. 그게 다  <RedSpan>‘잠깐‘</RedSpan>의 <br/>
        열정, <RedSpan>‘한 번 해보는’</RedSpan> 열정이었어요.<br/>
        <br/> 
        그리고 이런 걸 사회에서는 <br/>
        <RedSpan>‘무책임한 객기’</RedSpan> 라고 하더라구요..ㅠ<br/>
      </>
    );
  }else if (id === '109') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>결국 우리가!
            </TitleSpan><br/>가치 있는 경력을 쌓고
        </div>
        <BiggerSpan><GreenSpan>
        “나는 실력 있는 기획자“</GreenSpan></BiggerSpan> 
        라는 것을 어필하고자 한다면, <br/> 
        <br/> 
        나에게 돈을 주는 클라이언트, <br/>
        나를 채용하고자 하는 기업들이 <br/>
        <OrangeSpan>나의 역량과 꾸준함을 <br/>
        신뢰할 수 있어야 하는 것</OrangeSpan>이 <br/>
        필수 입니다.<br/> <GraySpan>
        (우리가 맛있는 김치찌개를 <br/>
        해준다는 ‘신뢰’ 가 있는 가게에 <br/>
        단골이 되는 것과 같은 이치죠!😚)<br/> </GraySpan>
        <br/> 
        그리고, 여기서 가장 중요한 것은, <br/>
        <BlueSpan>‘지속성’</BlueSpan> 입니다.<br/>
        <br/> 
        <RedSpan>1주일 동안</RedSpan> 불태워서, <br/>
        <RedSpan>하나의 프로젝트</RedSpan>를 처리해온 것이 <br/>
        그간 우리의 방식이었다면, <br/>
        (중간고사...기말고사😅)<br/>
        채용 시장에서 우리를 보여줄 수 있는 <br/>
        가장 큰 매력은,<br/>
        <br/> 
        “나는, <BlueSpan>나의 일정과 프로젝트를</BlueSpan> <br/>
        <BlueSpan>‘관리’ </BlueSpan>하며, <BlueSpan>‘항상💙’</BlueSpan> 이 정도의 <br/>
        역량을, <BlueSpan>‘정말 항상💙’</BlueSpan> 보여줄 수 <br/>
        있다는 것” 이 핵심입니다.<br/>
      </>
    );
  }else if (id === '110') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>그래서 <br/>
          팔랑크스에서는! 
            </TitleSpan>
        </div>
        밀도 높은 <OrangeSpan>주차별 지속 과정을 <br/>
        30주 동안 인정 받는 것</OrangeSpan>을 <br/>
        <BlueSpan>💙수료의 기준💙</BlueSpan>으로 잡습니다. <br/>
        <br/>
        주 1회 모여서 놀고 헤어졌다가 <br/>
        다시 만나는 친목 동아리가 아닌,<br/>
         <br/> 
        매주 월/수/토 등 사전에 짜여진 <br/>
        규칙적인 일정과 진행 과정을 <br/>
        바탕으로 <GreenSpan>온라인 시스템과 <br/>
        IT 검수 과정으로 나의 모든 <br/>
        활동이 집계되어</GreenSpan> 매주 <br/>
        나의 포트폴리오가 쌓이는 과정. <br/>
        <br/>
        항상 지난 주의 과정을 <br/>
        <OrangeSpan>여러 평점과 포인트로💯</OrangeSpan> <br/>
        돌아볼 수 있고, 이를 바탕으로 <br/>
        내가 이번 주에 더 나아갈 <br/>
        수 있는 방향🏍을 구체화해보는!<br/>
        <br/>
        <BiggerSpan><GreenSpan>
        팔랑크스는, <br/>
        우리의 이러한 기록과 지속성을 <br/>
        결과물과 포트폴리오로 <br/>
        증명해줄겁니다.😘</GreenSpan></BiggerSpan>
        <br/>
      </>
    );
  }else if (id === '201') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>커리큘럼</TitleSpan>
        </div>
        <BlueSpan>팔랑크스의 커리큘럼은,<br/>
        기획/컨설팅 직무의 7년차 이상 <br/>
        실무자 다수가 작성한,<br/></BlueSpan>
        <br/> 
        <OrangeSpan>1~3년차 기획자들이 알아두어야 <br/>
        하는 실무 기획에 대한 진행 과정</OrangeSpan>을 <br/>
        💓메인 내용💓으로,  <br/>
        팔랑크스 크루들에게 제공되는 <br/>
        <OrangeSpan>핵심 가이드</OrangeSpan>에요!<br/>
        <br/> 
        매주 모든 크루가 <GreenSpan>1주 단위로 <br/>
        3~4개씩 진행하고,</GreenSpan> 이를 <br/>
        자신이 희망하는 산업군(팀)의 <br/>
        관련 파트(세부 분야)하에서 <br/>
        본인의 설정한 기획 주제로 <br/>
        직접 진행합니다.<br/>
        <br/>
        팔랑크스의 커리큘럼은 <br/>
        크게, <PinkSpan>(📌필수형)</PinkSpan>과 <PupSpan>(💡선택형)</PupSpan> <br/>
        이렇게 2개로 나뉘는데,<br/>
        <br/>

        <PinkSpan>(📌필수형)</PinkSpan> 은 말 그대로 모든 크루가 <br/>
        <RedSpan>❗필수적❗ 으로 진행해야 하는 <br/>
        핵심 유닛</RedSpan>으로서 실제 기업에게 <br/>
        나의 기획안을 진행, 타진하는 <br/>
        활동이고,<br/>
        <br/>  
        <PupSpan>(💡선택형)</PupSpan> 은 각 개별 크루의 <br/>
        <BlueSpan>역량 상황에 따라 진행 여부를 <br/>
        자율적으로 선택</BlueSpan>할 수 있는 <br/>
        부가 유닛으로서, 기획 이라는 <br/>
        업무가 실제 시장에서 <br/>
        어떤 식으로 이루어지는지, <br/>
        어떤 도구, 과정을 거치는지를 <br/>
        실제 진행해보는 활동입니다.<br/> 
        <br/>
        팔랑크스를 <br/>
        30주 이후 수료/졸업하는 크루는, <br/>
        이러한 매주의 커리큘럼 진행과 <br/>
        그 <BiggerSpan>진행/과정/결과가📚<br/>
        팔랑크스 공식 포트폴리오에  <br/></BiggerSpan>
        담겨, 후원사와 관리/감독의 증빙이 <br/>
        포함, 발급됩니다. <br/>
        <br/>

        <RedSpan>
        팔랑크스의 커리큘럼은, <br/>
        💥저작권으로 보호되어 💥<br/></RedSpan>
        팔랑크스 공식 시즌 등록 크루에게만 <br/>
        무료 제공됩니다.
      </>
    );
  }else if (id === '202') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>(필수형) 커리큘럼</TitleSpan>
        </div>
        <PinkSpan>(📌필수형)</PinkSpan> 은 다음으로 <br/>
        요약될 수 있습니다. <br/>
        <br/>
        <BiggerSpan><OrangeSpan>1)</OrangeSpan></BiggerSpan> <br/>
        <BlueSpan>‘내가’</BlueSpan> 관심있는 <br/>
        기업/브랜드/기능/서비스 중 <br/>
        원하는 포인트를 <BlueSpan>선택하여<br/></BlueSpan>
        <br/>
        <BiggerSpan><OrangeSpan>2)</OrangeSpan></BiggerSpan> <br/>
        <BlueSpan>[니즈 파악 / 범위 구조화 / <br/>
        심화 내용 / 제안 타진]</BlueSpan> 의 4️⃣단계<br/>
        (1주에 1개)에 걸쳐 기획을 진행하고,<br/>
        <br/> 
        <BiggerSpan><OrangeSpan>3)</OrangeSpan></BiggerSpan> <br/>
        해당 기업/브랜드에게 나의 기획을 <br/>
        <BlueSpan>실제로 공식적으로 타진</BlueSpan>하게 됩니다.<br/>
        <br/> 
        <BiggerSpan><OrangeSpan>4)</OrangeSpan></BiggerSpan><br/>
        그리고 위 과정을 모두 팔랑크스의 <br/>
        <BlueSpan>공식 아카이빙 채널(티스토리)에 <br/>
        나의 이름을 걸고 포스팅📌</BlueSpan>합니다.<br/>
        <br/> 
        <BiggerSpan>이런 과정을 통해서, <br/></BiggerSpan>
        30주의 과정 중 첫 1주(신입OT), <br/>
        마지막 주(졸업 준비)를 제외한 <br/>
        <OrangeSpan>28주 동안, 총 7개의 기업에게 <br/>
        나의 기획안을 직접 공식 발송하는</OrangeSpan> <br/>
        <br/>
        과정이 팔랑크스의 <PinkSpan><br/>
        (📌필수형)커리큘럼</PinkSpan>의 <br/>
        ‘핵심’ 이라고 볼 수 있어요 <br/>
        <br/>
        단, 총 4단계로 이루어진 <br/>
        위 과정에서, 본인 스스로 <br/>
        <RedSpan>본인의 기획이 마음에 들지 않는 <br/>
        경우도 있고,😓 <br/></RedSpan>
        <br/>
        어떤 크루의 경우 <br/>
        <PinkSpan>1단계(니즈 파악) 없이, <br/>
        바로 3단계(심화 내용)로 <br/>
        들어가는 분</PinkSpan>도 있기 때문에,🙄 <br/>
        <RedSpan>이 순서나 기간은 강제되지는 않아요.</RedSpan> <br/>
        <br/>
        본인의 역량과 수준, 그리고 <br/>
        결과물 기준에 맞춰서, <br/>
        <OrangeSpan>동일한 과정을 다시 해서 완성도를 <br/>
        높일 수도,</OrangeSpan> 혹은30주차 활동 중에 <br/>
         <BlueSpan>7개보다 더 다수의 기업에게 <br/>
        발송하는 ‘양’ 을 늘릴 수도</BlueSpan> 있습니다. <br/>
        <br/>

        즉, <OrangeSpan>30주 중 7번의 실무 기획안을 <br/>
        기업에게 타진해보는 것이 중점</OrangeSpan>이지만, <br/>
        개별 크루의 상황/역량에 따라 <br/>
        <BlueSpan>7번 그 이상도, 7번 그 이하</BlueSpan>도 <br/>
        될 수 있습니다.<br/>
        <br/>
        <PinkSpan>
        (📌필수형)커리큘럼</PinkSpan>
        총 6개의 유닛이며, 시즌 시작 이후<br/>
        모두 전체 공개 되어,  <PinkSpan>각자 자신이 <br/>
        원하는 단계를 진행할 수 있어요! <br/></PinkSpan>
        <br/><RedSpan>
        *‘조’ 나 ‘파트’ 에서 공동 기획으로 <br/>
        들어갈 경우에는, 해당 기간 동안의 <br/>
        주차별 포트폴리오는 그 ‘조’, <br/>
        ‘파트’ 크루에 한해서는 <br/>
        동일하게 기록됩니다.<br/></RedSpan>
      </>
    );
  }else if (id === '203') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan> (선택형) 커리큘럼</TitleSpan>
        </div>
            <PupSpan>(💡선택형)</PupSpan> 은 <OrangeSpan>실무 기획에 있어서, <br/>
            굉장히 현실적이고 실무적인 <br/>
            포인트</OrangeSpan>들을 주차별로 경험해보는 <br/>
            가이드에요.<br/>
            <br/>
            예를 들어, <PupSpan>(💡선택형)</PupSpan>커리큘럼은,<br/>
            <br/>
            🔎기획에 필요한 DB를 가시화하게 <br/>
            해주는 <GreenSpan>‘리스틀리’</GreenSpan>나,<br/> 
            💾기획 구조화를 손쉽게 <br/>
            서포트해주는 <PupSpan>‘옵시디언’</PupSpan>등의 <br/> 
            프로그램을 다루는 과정이 들어가는 <br/>
            <GreenSpan>🛠도구🛠 편.<br/></GreenSpan>
            <br/>
            🩰명품 브랜딩의 기획 사례 중 <br/>
            <DeepGreenSpan>‘람보르기니‘</DeepGreenSpan> 나, <br/>
            🥕C2C 중계를 메인 모델로 <br/>
            구축된 <OrangeSpan>‘당근마켓’</OrangeSpan><br/>
            등의 실제 기획 예시를 통해 <br/>
            기획 모델을 만들어보는 <br/>
            <DeepGreenSpan>📚사례📚 편<br/></DeepGreenSpan>
            <br/>
            등의 유닛으로 이루어져 있습니다. <br/>
            <br/>
            모든 <PupSpan>(💡선택형)</PupSpan>커리큘럼 유닛은, <br/>
            <OrangeSpan>각 1개당 1주 진행 과정</OrangeSpan>이며, <br/>
            각 크루의 개별 상황, 일정에 따라 <br/>
            <OrangeSpan>자유롭게 진행 여부를 <br/>
            선택할 수 있어요!<br/></OrangeSpan>
            <br/>
            <PupSpan>(💡선택형)</PupSpan> 커리큘럼 유닛은, <br/>
            <BiggerSpan><DeepGreenSpan>총 20개 유닛으로 구성되며 <br/>
            매주 1개씩 </DeepGreenSpan></BiggerSpan>크루들에게 공개됩니다.<br/> 
        
      </>
    );
  }else if (id === '301') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>시즌&주차</TitleSpan><br/>
        </div>
        팔랑크스는 <DeepGreenSpan>시즌과 주차</DeepGreenSpan>의 개념으로 <br/>
        진행되며, 이를 기준으로 <DeepGreenSpan>총 30주의<br/>
        과정을 정식 수료/졸업의 기준</DeepGreenSpan>으로 <br/>
        가지고 있어요!<br/>
        <br/>
        팔랑크스 활동 주차 30주차는<br/>
        크게 아래로 구분됩니다.<br/>
        <br/>
          <BiggerSpan>* 1주차 🤗: <br/></BiggerSpan>클럽온보딩 주차<br/>
          (견습 + 신입OT + 적응 지원)<br/>
          <BiggerSpan>* 2~29주차 😤:</BiggerSpan> <br/>실제 기획 
          포트폴리오 진행 기간 <br/>
          <BiggerSpan>* 30주차 🥳:</BiggerSpan> <br/>진행 결과 검수, 
          졸업 준비 주차 <br/>
          (졸업 시스템 + 알룸니 입장)<br/>
        <br/>

        즉, 모든 팔랑크스의 크루는, <br/>
        <RedSpan>동일한 시기에 시작 + 동일한 시기에 <br/>
        종료되는 것이 아닌,</RedSpan> <br/>
        <OrangeSpan>각자가 들어온 시즌과 주차에 맞추어, <br/>
        매주 본인의 누적 주차가 쌓이며,</OrangeSpan> <br/>
        30주가 되었을 때 졸업하게 되는 <br/>
        시스템입니다. <br/><GraySpan>
        (내가 4주차 일때, 15주차인 선배님도, <br/>
        2주차인 후배도 있겠죠) <br/></GraySpan>

        그래서 매번 동일한 크루들과 <br/>
        사람들에게만 피드백 받고  <br/>
        고여있지 않고, <OrangeSpan>항상 다른❗<br/>
        새로운 학교의 새로운 전공의 <br/>
        사람들과 꾸준히 연계할 수 있도록 <br/></OrangeSpan>
        되어 있어요!<br/><GraySpan>
        (바뀌지 않는..맨날 정해진 <br/>
        사람들끼리만..이런거..ㄴㄴ )<br/></GraySpan>
        <br/>
        <BoldSpan>새로운 사람들,💃</BoldSpan> <br/>
        <BiggerSpan>새로운 정보들,📡</BiggerSpan> <br/>
        <BiggestSpan>새로운 관점들!👓<br/></BiggestSpan>
        <br/>
        <GreenSpan><BiggestSpan>시즌과 주차 ㄱㄱ</BiggestSpan></GreenSpan>

      </>
    );
  }else if (id === '302') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>1년, <br/> 4개의 시즌📆</TitleSpan><br/>
        </div>
        팔랑크스는 아래와 같이 <br/>
        <OrangeSpan><BoldSpan>1년의 4개의 시즌이며,</BoldSpan></OrangeSpan> <br/>
        전국대학연합 동아리이기 때문에 <br/>
        모든 시즌 구성을, <BoldSpan>대한민국 2/4년제 <br/>
        대학의 학사 일정 기준을 따라</BoldSpan> <br/>
        움직이고 있어요!<br/>
        <br/> 
        <BoldSpan>겨울❄ 시즌</BoldSpan> : 1,2월 겨울 방학<br/>
        <BoldSpan>봄🌺 시즌</BoldSpan>  : 3,4,5 6월 봄 학기<br/>
        <BoldSpan>여름🔥 시즌</BoldSpan>  : 7,8월 여름 방학<br/>
        <BoldSpan>가을🍁 시즌 </BoldSpan> : 9,10,11,12월 가을 학기<br/>
        (방학 2개월 & 학기 4개월)<br/><br/>
        <br/>
        그래서 이미 학교를 졸업하셨거나 <br/>
        졸업 유예/휴학이신 분들 역시, <br/>
        이 일정대로 움직입니다. <br/>
        <br/>
        <DeepGreenSpan>방학(여름, 겨울) 시즌은 
        2개월 / 8주,</DeepGreenSpan> <br/>
        <OrangeSpan>학기(봄, 가을)시즌은 4개월 / 16주<br/></OrangeSpan>
        로 구성되고,<br/>
        <br/>  
        학기 시즌 중 <RedSpan>6, 7, 8주차의 <br/>
        3주는</RedSpan> 중간고사 기간, <br/>
        <RedSpan>14, 15, 16 주차의 <br/>
        3주는</RedSpan> 기말고사 기간으로서 <br/>
        <BoldSpan>모든 동아리 활동이 휴식을 취합니다.<br/></BoldSpan>
        <br/><RedSpan>
        *시험 기간으로 인한 <br/>
        공식 휴식 주차에서도 <br/>
        크루들의 활동을 검수하고, <br/>
        집계, 관리하는 운영진은 <br/>
        활동해야 합니다. <br/></RedSpan><GraySpan>
        (추후 운영진 지원하실 분들 참고!)<br/></GraySpan>
        <br/>
        <BoldSpan>ㄱ.</BoldSpan> 매 <OrangeSpan>시즌이 종료되기 <br/>
        2~4주 전</OrangeSpan> 부터는, 다음 시즌 <br/>
        진행 과정에 대한 예정과 안내가 <br/>
        진행되어, 모든 크루들은 해당 사항을<br/>
        기준으로 숙고하여 <OrangeSpan>다음 시즌에 대한 <br/>
        재등록 여부를 결정할 수 있습니다.</OrangeSpan> <br/> 
        <br/>
        <BoldSpan>ㄴ.</BoldSpan> 매 <OrangeSpan>시즌이 시작하는 시점</OrangeSpan>에는 <br/>
        해당 시즌에  <OrangeSpan>내가 쉬어야 하는 주차를 <br/>
       미리 휴식 주차로 신청하여,</OrangeSpan> <br/>
        해당 기간 동안에는 활동이 없어도 <br/>
        아무런 페널티를 받지 않습니다. <br/>
        <br/>
        <BoldSpan>ㄷ.</BoldSpan> 매 <OrangeSpan>시즌이 시작되기 전, </OrangeSpan><br/>
        개인의 일정(군 휴학, 교환학생 등)으로 <br/>
        <OrangeSpan>시즌 전체를 휴식 신청할 수 있으며,</OrangeSpan><br/> 
        그럴 경우 다음 시즌까지, <br/>
        <GreenSpan>팔랑크스 시스템에 해당 크루의 <br/>
        활동 내역을 보관하여</GreenSpan> 다음 시즌에 <br/>
        복귀할 수 있습니다. <br/>
      </>
    );
  }else if (id === '303') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>
           🌷주차🌷</TitleSpan><br/>
           월요일 시작, <br/>토요일 종료되는 주차<br/>
        </div><br/>
        팔랑크스는 <DeepGreenSpan>모든 진행 과정을 <br/>
        ‘주차’(월-토)를 기준으로 구성하며,</DeepGreenSpan> <br/>
        모든 크루들은 매주 팔랑크스 <br/>
        진행 과정 30주를 인정 받은 뒤 <br/>
        졸업/수료합니다. <br/>
        <br/>
        <BoldSpan><GreenSpan>이에 따라 팔랑크스는<br/></GreenSpan></BoldSpan>
        <br/>
        <BlueSpan><BoldSpan>매주 월요일,🌞 <br/></BoldSpan></BlueSpan>
        클럽 전체(중앙진행), 세부 팀장과 <br/>
        파트장(세부진행)의 <BlueSpan>시작브리핑을 <br/>
        기준으로,</BlueSpan> 한 주가 시작되고,<br/>
          <br/>
         <PupSpan><BoldSpan>매주 토요일,🌝<br/></BoldSpan></PupSpan>
         <PupSpan>마감 브리핑을 기준으로</PupSpan> 한 주의 <br/>
        과정을 종료합니다.<br/>
        <br/> 
        <RedSpan>
        *한 주 내부의 세부적인 사항은, <br/>
        본 페이지의 7번 사항(1주의 여정)을 <br/>
        참고해주세요!<br/></RedSpan>
        <br/>
        또한 팔랑크스의 운영 카페와<br/>
        노션 페이지를 통해, <OrangeSpan>2주에 한번 <br/>
        진행 캘린더📅가 업데이트되며,</OrangeSpan> <br/>
        모든 크루들은 이 캘린더를 통해, <br/>
        클럽과 자신의 팀에서 진행하는 <br/>
        다양한 행사, 일정, 주차 진행 등을 <br/>
        확인할 수 있습니다. <br/>
        <br/>

        <BoldSpan>주차는,</BoldSpan> <br/>
        클럽 팔랑크스를 수료하는 <br/>
        <BoldSpan><GreenSpan>가장 중요한 ‘졸업 조건’ 의 기준</GreenSpan></BoldSpan>으로서, <br/>
        모든 크루들은 주차별 자신의 활동을 <br/>
        통해, <OrangeSpan>‘투구⛑’</OrangeSpan> 라는 포인트를 모아, <br/>
        주차 활동 기준을 채우게 됩니다.<br/> 
        <RedSpan>*팔랑크스 내부의 포인트 제도는, <br/>
        본 페이지의 7번 사항(1주의 여정)을 <br/>
        참고해주세요!<br/></RedSpan>
        <br/>
        <OrangeSpan>‘투구⛑’</OrangeSpan> 는 <br/>
        매주 크루들이 모으게 되는,<br/>
        <DeepGreenSpan>아주 기본적인 포인트 단위</DeepGreenSpan>로서,<br/> 
        팔랑크스의 단장은 매주 월요일,<br/>
        시작 브리핑 시 해당 주차의 <br/>
        인정 조건인 <OrangeSpan>‘투구⛑’</OrangeSpan> 의 개수를 <br/>
        📣공표📣하는데,<br/>
        <br/> 
        <RedSpan>다음 주 집계 시 이 <OrangeSpan>‘투구⛑’</OrangeSpan> 의 <br/>
        개수를 달성하지 못한 크루는, <br/>
        주차가 인정되지 않습니다! (주의💢)</RedSpan>

      </>
    );
  }else if (id === '304') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>단, '투구'를 <br/>모으는 활동은</TitleSpan>
        </div><RedSpan><BoldSpan>
        개인의 역량이나 실력에 의해 <br/>
        좌우되는 것이 아니라,<br/></BoldSpan></RedSpan>
        <br/><DeepGreenSpan><BoldSpan>
        ‘안내된 사항’ 에 대한 확실한 인지,<br/>
         확인, 커뮤니케이션 미스 등에 <br/>
        대한 부분을 체크✔하고, <br/>
        확인이 되고 있느냐! </BoldSpan></DeepGreenSpan>입니다.<br/>
        <br/>
        즉, 팔랑크스 활동에 신경을 <br/>
        제대로 쓰고, 애정💚을 기울이고 <br/>
        있느냐에 대한 부분이 절대적이기 <br/>
        때문에 주차 활동 인정 조건인, <br/>
        <RedSpan><BoldSpan>투구 개수를 달성하는 것은 <br/>
        전혀 어렵지 않습니다.❌<br/> </BoldSpan></RedSpan>
        <GraySpan>(오히려, 너무 기준이 낮아서 <br/>
        일부 크루분들에 의해서 <br/>
        불만이 생길 정도에요! <br/>
        왜 쟤네 봐주냐, 좀 더 <br/>
        커트라인 높혀라..읍읍🤫)<br/></GraySpan>
        <br/> 

        <RedSpan><BoldSpan>그럼에도 불구하고..!<br/></BoldSpan></RedSpan> 
        <br/> 
        <OrangeSpan>‘투구⛑’</OrangeSpan> 는 기본적으로 매주 크루가 <br/> 
        받을 수 있는   <OrangeSpan>‘투구⛑’</OrangeSpan>  전체 양의 50% <br/> 
        정도로 책정되는 것이 기준이어서, <br/> 
        <RedSpan>필수로 확인해야 하는 정해진 공지만 <br/> 
        확인해도 문제가 없지만❗<br/> </RedSpan>
        <br/> 
        10~20명 의 크루 분 중에 <br/> 
        평균 1명 정도는.. 이러한 <br/> 
        <RedSpan>공지나 확인 투표 등을 하지 않아서 <br/> 
        ‘투구’를 미달하는 경우가 생깁니다.😥<br/></RedSpan> 
        <br/> 
        이럴 경우, <br/> 
        그러한 크루분들은 더 이상 <br/> 
        활동의 의지가 없다고 판단되어, <br/> 
        <RedSpan><BoldSpan>페널티 포인트가 부여</BoldSpan></RedSpan>되며, <br/> 
        더 나아가 <RedSpan><BoldSpan>제명까지 이를 수 있습니다.</BoldSpan></RedSpan><br/> 
        <br/>  
        <OrangeSpan>주별 활동의 인정 여부</OrangeSpan>는,잘난 몇명만 <br/> 
        인정되게 하는 것이 아닌!<br/> 
         클럽 팔랑크스의 공식 진행 과정과 <br/> 
        커리큘럼을 잘 따라온 <BoldSpan><DeepGreenSpan>‘노력’🔥</DeepGreenSpan></BoldSpan> 과, <br/> 
        <BoldSpan><DeepGreenSpan>‘커뮤니케이션’🤝</DeepGreenSpan></BoldSpan> 에 이상이 없는 <br/> 
        모든 크루들의 한 주 과정을 <br/> 
        ❗인정해주는 방향이라는 점❗을 <br/> 
        반드시 확인 바랍니다!<br/> 
        <GraySpan>(매주 투구 선정 기준과 활동 인정율은 <br/> 
        매주 팔랑크스의 카페로 세세하게 <br/> 
        공표되오니, 이를 확인해주시기 <br/> 
        바랍니다. ) </GraySpan>
      </>
    );
  }else if (id === '401') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>팀&파트</TitleSpan>
        </div>
        팔랑크스는 <GreenSpan><BoldSpan>팀과 파트</BoldSpan></GreenSpan>로 구성됩니다.<br/> 
        23년 6월까지 소모임 형태가 <br/> 
        종료된 뒤에, 7~8개월의 후원사 연계,<br/> 
        타 클럽의 운영 과정 도입을 통해 <br/> 
        24년 2월 기준<BoldSpan> <BlueSpan>IT</BlueSpan> /<PupSpan> 브랜딩</PupSpan> / <OrangeSpan>
          서비스</OrangeSpan>, <br/> </BoldSpan>
        이렇게 <DeepGreenSpan><BoldSpan>3개의 분야</BoldSpan></DeepGreenSpan>로 세부 팀을 <br/> 
        이루고 있습니다.💚 <br/> 
        <br/> 
        모든 크루는 <br/> 
        활동 1주차인 <BlueSpan>클럽 온보딩 과정의 <br/> 
        마지막에</BlueSpan>, 세부 팀 중 희망하는 <br/> 
        팀을 지원🙋‍♀️할 수 있으며,<br/>  
        그 뒤 2주차 부터는, 그 팀 배정되어 <br/> 
        활동을 진행합니다.🏃‍♂️<br/>
        <br/> 
        팀은 <DeepGreenSpan>보통 시즌이 바뀔 때,🌀 <br/> 
        혹은 내부의 큰 이슈가 있을 때 <br/> 
        변경 신청 절차가 고지되고,</DeepGreenSpan> <br/> 
        팀을 변경하고자 하는 크루 분은 <br/> 
        해당 절차를 이용할 수 있습니다. <br/> 
        <br/> 
        한 세부 팀의 산하에는, <br/> 
        <PupSpan><BoldSpan>‘파트’</BoldSpan></PupSpan> 가 구성되는데, 1개 팀은<br/> 
        <PupSpan>통상 3~5개 내외의 파트</PupSpan>를 <br/> 
        최대로 가지고,<br/> 
        <br/> 
        <PupSpan><BoldSpan>‘파트’</BoldSpan></PupSpan> 는 파트장에 선발된 크루의<br/> 
        기획에 맞추어, <BoldSpan><GreenSpan>특정 산업 분야를 <br/> 
        담당하는 기획 포트폴리오</GreenSpan></BoldSpan>에 <br/> 
        중점을 둡니다.<br/>  <GraySpan>
        Ex) IT 세부 팀 내에, <br/> 
        ‘C2C’ 플랫폼에 집중하는 ‘파트’ 가<br/> 
         있는 식.<br/> </GraySpan>
        <br/> 
        
      </>
    );
  }else if (id === '402') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>‘파트’ 는</TitleSpan>
        </div>
        
        팔랑크스의 <BoldSpan>가장 큰 행사</BoldSpan>이자 <br/> 
        다양한 대기업/중견기업/<br/> 
        중소/스타트업들의 <BoldSpan>실무진이 <br/> 
        평가위원으로 참여하는,</BoldSpan><br/>  
        <BoldSpan><DeepGreenSpan>올림피아 기획 대전🤴</DeepGreenSpan></BoldSpan>(2월, 8월)의 <br/> 
        무대에서, 기획 경쟁 PT의 <br/> 
        <DeepGreenSpan>주요 경쟁 단위가 됩니다.</DeepGreenSpan><br/> 
        <GraySpan>ex) 팔랑크스 산하, 15개 <br/> 
        파트 중 4개 파트가 선발되는 식<br/> </GraySpan>
        <br/> <BiggerSpan><GreenSpan>
        기획자로서의 본인이 꿈을 <br/> 
        펼치고자 하는 산업군과 <br/> 
        세부 영역을 고려하여, <br/> 
        팀과 파트를 지원해보세요!<br/> </GreenSpan></BiggerSpan>
      </>
    );
  }else if (id === '501') {

    content = (
      <>
        <div style={{height : "100px"}}>
          <TitleSpan>일반&심화</TitleSpan>
        </div>
        팔랑크스의 모든 구성원은 <br/> 
       <PupSpan>일반 크루</PupSpan>와  <BlueSpan>심화 크루</BlueSpan>로 구성됩니다.<br/> 
        <br/> 
        모든 구성원은 <PupSpan>일반 크루</PupSpan>로<br/> 
        시작하며, 팔랑크스의 절대 다수를 <br/> 
        이루고, <DeepGreenSpan>팔랑크스 활동의 가장 <br/> 
        중심이자 본질</DeepGreenSpan>로서 적용됩니다. <br/> 
        <br/> 
        <PupSpan>일반 크루🚶‍♂️</PupSpan>로 활동을 하면서, <br/> 
        자신의 팀 내에서 <OrangeSpan>상대적으로 높은 <br/> 
        역량을 보여주거나,<br/> </OrangeSpan> 
        타 크루에 <OrangeSpan>활동에 도움/지원을 <br/> 
        할 수 있는 가능성을 보여주는 크루</OrangeSpan>는 <br/> 
        <BlueSpan>심화 크루</BlueSpan>로 선발 혹은 지원할 수 <br/> 
        있습니다.  <br/> 
        <br/> 
        <BlueSpan>심화 크루🏃‍♂️</BlueSpan>는 <br/> 
        팀장이 전체 크루 수를 고려하여 <br/> 
        선발하며, <DeepGreenSpan>일반 크루의 활동 내용, <br/> 
        당시의 결과물, 커뮤니케이션 역량 등<br/>  
        다양한 지표가 기준</DeepGreenSpan>이 됩니다. <br/> 
        
      </>
    );
  }else if (id === '502') {

    content = (
      <>
        <div style={{height : "100px"}}>
         <TitleSpan>심화 크루는</TitleSpan>
        </div>
        <br/> 
        <BlueSpan>심화 크루</BlueSpan>는 한 파트를 이끄는 <br/> 
        <OrangeSpan>‘파트장’(에이스)</OrangeSpan> 과 팀 전반의 <br/> 
        기획을 검수하는 <PinkSpan>‘에이전트’(매니저)</PinkSpan><br/> 
        형태로 구분되는데,<br/>  
        심화 크루들은 한 세부 팀 내의 <br/> 
        <DeepGreenSpan>‘기획실’</DeepGreenSpan> 이라는 별도의 단위를 이루어, <br/> 
        해당 세부 팀에서 타진하는 실제 <br/> 
        <DeepGreenSpan>기업과의 연계 프로젝트 등에 <br/> 
        우선 선발 될 수 있습니다.<br/> </DeepGreenSpan>
        <br/> 
        즉, <PupSpan>일반 크루</PupSpan>의 활동을 돕고, <br/> 
       보다 더 실무적인 포트폴리오와 <br/> 
        추가적인  <BoldSpan><DeepGreenSpan>advanced 스펙을 쌓을 <br/> 
        수 있는 과정으로 구성되며,</DeepGreenSpan></BoldSpan><br/> 
        <br/>  
        <PupSpan>일반 크루</PupSpan>분들 중 많은 열정과 <br/> 
        노력, 가능성이 검증된 구성원으로 <br/> 
        선발됨을 기준으로 합니다. <br/> 
        <br/> 
        <BlueSpan>심화 크루</BlueSpan>로 졸업하게 될 경우, <br/> 
        <PupSpan>일반 크루</PupSpan>로서 증빙받는 결과물을 <br/> 
        포함하여, 추가되는 <BoldSpan><DeepGreenSpan>포트폴리오<br/> 
        (advanced 부분)와 결과물이 <br/> 
        졸업 시스템에서 안내됩니다.<br/></DeepGreenSpan></BoldSpan> 
        <br/><GraySpan> 
        해본 사람 입장에서는, <br/> 
        심화 크루는 얻는 것도 많지만, <br/> 
        더 힘든…읍읍😬<br/>  </GraySpan>  
      </>
    );
  }else if (id === '601') {

    content = (
      <>
        <div style={{height : "100px"}}>
         <TitleSpan>포인트</TitleSpan>
         (투구, 방패, 화살)
        </div>
        팔랑크스에서는 <br/>
        <BoldSpan><DeepGreenSpan>총 3가지의 포인트 제도</DeepGreenSpan></BoldSpan>가 있으며, <br/>
        이는 팔랑크스 동아리 진행 과정에서 <br/>
        가장 중요한 측정 기준이 됩니다. <br/>
        <br/>
        <TitleSpan>투구⛑</TitleSpan><br/>
        <BoldSpan>가장 빈번하고 쉽게 얻을 수 있는 <br/>
        포인트로서,</BoldSpan> 매 주 활동 과정을 <br/>
        인정받을 수 있는 <DeepGreenSpan>advantage <br/>
        포인트</DeepGreenSpan>입니다.<br/>
        <br/>
        매주 팔랑크스 전체의 단장이 <br/>
        <BlueSpan>활동 인정 개수를 공표하고, <br/>
        그 다음 주인 N+1 주차에 <br/>
        그 활동 지표의 달성 여부가 <br/>
        🙌공표됩니다.🙌</BlueSpan><br/>
        <br/>
        아주 쉽게는, <br/>
        동료 크루가 만든 결과물을 <br/>
        보고 <OrangeSpan>간단한 피드백💬</OrangeSpan>을 해주거나, <br/>
        매주 정기적으로 올라오는 <br/>
        공지 사항에 대한 <OrangeSpan>확인 투표✅</OrangeSpan>만 <br/>
        진행하여도 얻을 수 있습니다.<br/>
        <br/>
        <OrangeSpan>‘투구⛑’</OrangeSpan> 를 못 받는다는 것은, <br/>
        기획의 역량이나 실력의 부족이 <br/>
        아닌, <RedSpan>활동하는 클럽의 규정과 <br/>
        운영 방식을 따르지 않는 것😨</RedSpan>을 <br/>
        의미하게 됩니다.<br/> 
        <br/>
        정해진 일정과 안내 사항을 <br/>
        내가 항상 수령하고, 커뮤니케이션 <br/>
        할 수 있는 성인으로서의 준비, <br/>
        즉, <BoldSpan><OrangeSpan>‘사회화’🎗</OrangeSpan></BoldSpan>를 팔랑크스는 <br/>
        가장 중요하게 생각합니다!<br/>
        <br/>
        아무리 자기 눈에 뛰어난 <br/>
        기획안을 작성하였다고 해도, <br/>
        그 사람이 <BoldSpan>연락이 잘 되지 않고, <br/>
        주어진 안내 사항과 발송된 <br/>
        메시지에 대해 회신이 없는 사람을 <br/></BoldSpan>
        <br/>
        <BiggerSpan><RedSpan>사회 구성원으로서의 <br/>
        기본 도덕이 미달된 사람으로<br/>
        팔랑크스는 생각합니다.😤</RedSpan></BiggerSpan> 
      </>
    );
  }else if (id === '602') {

    content = (
      <>
        <div style={{height : "100px"}}>
         <TitleSpan>방패🔰</TitleSpan>
        </div>
          모든 크루가 활동을 시작할 때 <br/>
          <BiggerSpan>5개를 기본으로 가지고 시작</BiggerSpan>하며,<br/>
          모두 소멸될 시 <RedSpan>제명</RedSpan>당할 수 있는 <br/>
          <DeepGreenSpan>advantage 포인트</DeepGreenSpan>입니다. <br/>
          <br/>
          <RedSpan>화살🏹</RedSpan>을 한 대 맞으면, <br/>
          <PupSpan>방패🔰</PupSpan>가 하나 사라지는 방식으로써, <br/>
          <RedSpan>화살🏹</RedSpan>과 <PupSpan>방패🔰</PupSpan>가 사라지는 <br/>
          반대의 개념입니다. <br/>
          <br/> 
          <PupSpan>방패🔰</PupSpan>는, <OrangeSpan>‘투구⛑’</OrangeSpan>보다 얻기 어려우나, <br/>
          전체 진행 과정에서 심심치 않게 <br/>
          볼 수 있으며, 타 크루에게 <DeepGreenSpan>좋은 <br/>
          피드백</DeepGreenSpan>을 주거나, <DeepGreenSpan>포럼에 참가</DeepGreenSpan>하는 등 <br/>
          <BoldSpan>동아리 활동에 열정적으로 참여</BoldSpan>하는 <br/>
          크루에게 부여되는 경우가 많습니다.<br/>
          <br/>
          <PupSpan>방패🔰</PupSpan>는, 추후 졸업할 때 본인의 <br/>
          <BoldSpan>졸업 성적🎓과 연관</BoldSpan>이 되기 때문에 <br/>
          <DeepGreenSpan>유의 깊게 관리하는 것을 <br/>
          추천드립니다.<br/></DeepGreenSpan>
          <br/>
          모든 크루가 5개로 시작하며, <br/>
          활동하면서 <PinkSpan>대부분 20~30개 이상을 <br/>
          유지하며 안정적으로 활동하는 것이 <br/>
          보편적</PinkSpan>이지만, 규정과 안내를 전혀 <br/>
          읽지 않는 경우 <RedSpan><BoldSpan>1주에 5개 이상의 <br/>
          화살을 맞아, 곧바로 제명 대상이 <br/>
          될 수 있습니다.<br/></BoldSpan></RedSpan>
          <br/> 
          <PupSpan>방패🔰</PupSpan>의 보유와 개수는, <br/>
          클럽 팔랑크스의 <RedSpan>제명 기준과 <br/>
          직결적으로 연결</RedSpan>되며, 도중 <br/>
          페널티로 제명당하실 경우 <br/>
          그 <RedSpan>어떤 결과물과 내용을 증빙 <br/>
          받지 못하니</RedSpan> 유의하셔야 합니다.<br/> 
          <br/>       
          <BiggerSpan><GreenSpan>방패를 잃어버리면 안돼요!</GreenSpan></BiggerSpan> <br/>
      </>
    );
  }else if (id === '603') {

    content = (
      <>
        <div style={{height : "100px"}}>
         <TitleSpan>화살🏹</TitleSpan>
        </div>
          클럽 팔랑크스의 <br/>
          운영을 통제하고, 규정 준수에 대한 <br/>
          기준이 되는 <BoldSpan><RedSpan>penalty 포인트</RedSpan></BoldSpan>입니다.<br/>
          <RedSpan>화살🏹</RedSpan>을 하나 맞으면, <br/>
          <PupSpan>방패🔰</PupSpan> 하나가 사라지기 때문에,<br/>
          <RedSpan>화살🏹</RedSpan>은 맞지 않고, <br/>
          <PupSpan>방패🔰</PupSpan>는 쌓을 수 있도록 <br/>
          유의해야 합니다.<br/>
          <br/>
          <RedSpan>화살🏹</RedSpan>을 맞는 경우에는, <br/>
          크루의 실력이나 역량 등 <br/>
          즉, 못해서  <RedSpan>화살🏹</RedSpan>을 부여하는 <br/>
          경우는 없습니다.<br/>
          <br/>
          이 역시, <RedSpan>정해진 일정을 놓치거나, <br/>
          혼자만 회신을 하지 않아 전체 진행에 <br/>
          저해가 되는 행동이 발생하는</RedSpan> 등의 <br/>
          경우가 보편적입니다.<br/> 
          <br/> 
          다음은 <PupSpan>방패🔰</PupSpan>와  <RedSpan>화살🏹</RedSpan>, <br/> 
          <OrangeSpan>‘투구⛑’</OrangeSpan>가 사용된 예시 입니다👉👉
      </>
    );
  }else if (id === '604') {

    content = (
      <>
        <div style={{height : "100px"}}>
         <TitleSpan>예시 1)</TitleSpan>
        </div>
        <BoldSpan>1) 봄 시즌, 4주차, <br/> </BoldSpan>
        월요일 오전 10시에 <PupSpan>브랜딩 팀장은</PupSpan> <br/> 
        정해진 일정에 따라, 주차 <PupSpan>시작 브리핑<br/> 
        (커리큘럼, 세부진행)을 안내했고,</PupSpan> <br/> 
        이에 대한 <OrangeSpan>확인 투표</OrangeSpan>를 <br/> 
        크루들에게 올렸다.<br/> 
        <br/> 
        <BoldSpan>2) 투표 마감 기한은, <br/> </BoldSpan>
        그 다음날인 <RedSpan>화요일 오후 14시까지로,<br/> 
        투표 소요시간은 10초 내외</RedSpan>이다. <br/> 
        (‘확인했습니다’. 클릭)<br/> 
        <br/> 
        <BoldSpan>3) 화요일 오후 15시 경 기준,<br/> </BoldSpan>
        브랜딩 팀 크루 <RedSpan>10명 중 2명이 <br/> 
        투표를 하지 않았는데,</RedSpan> <br/> 
        <PinkSpan>‘홍길동’</PinkSpan> 과 <DeepGreenSpan>
          ‘강감찬’</DeepGreenSpan> 이었다.<br/> 
        <br/>  
        <BoldSpan>4) 팀장이 그 다음 주가 되어, <br/> </BoldSpan>
        진행 결과를 검수하기 위해 <br/> 
        <PupSpan>팔랑크스 동아리 시스템을 열람해본 <br/> 
        결과,</PupSpan> ‘ <PinkSpan>‘홍길동’</PinkSpan> 은 해당 주차가 <br/> 
        <BoldSpan>‘활동 주차’</BoldSpan>였고, <br/>(즉, 사전에 휴식 신청이 
        없었음) <DeepGreenSpan><br/>
        ‘강감찬’</DeepGreenSpan> 은 <br/> 
          <BoldSpan>‘휴식 주차’</BoldSpan> 였다. <br/> 
         <br/> 
        5) 이에<PupSpan> 팀장은</PupSpan> <br/> 
        시작 브리핑 안내에 대한 <br/> 
        <RedSpan>투표 미확인</RedSpan>으로 <PinkSpan>‘홍길동’</PinkSpan> 에게 <br/> 
        <RedSpan>화살🏹</RedSpan>을 1개 부여하였고, 이를 <br/> 
        태그하고 알렸다. <br/> 
        <br/> 
        <DeepGreenSpan><br/>
        ‘강감찬’</DeepGreenSpan> 은 휴식 주차이기 때문에 <br/> 
        미확인에 대한 <OrangeSpan>페널티가 적용되지 <br/> 
        않았다.<br/> </OrangeSpan>
        <br/> 
        <BoldSpan>오전 10시 경, <br/></BoldSpan>
        <br/><BingFont><ItalicSpan>
        “@홍길동, 안녕하세요 길동 크루님! <br/> 
        지난 주차 검수 결과, 화살 1개가 부여<br/> 
        되었는데 어떤 이유가 있었을까요?<br/> 
        혹시 어려우신 부분이 있다면 <br/>
        알려주시기 바래요😊<br/> 
        금일 18시까지 회신 부탁드립니다.”<br/> </ItalicSpan></BingFont> 
        <br/> 
        6) 그러나 <PinkSpan>‘홍길동’</PinkSpan> 크루는 <br/> 
        해당일 <RedSpan>18시까지 회신이 없었고,</RedSpan> <br/> 
        <RedSpan>화살🏹</RedSpan> 을 부여 받아, <br/> 
        <PupSpan>방패🔰</PupSpan>가 하나 없어졌다.<br/>  
        <br/> 
      </>
    );
  }else if (id === '605') {

    content = (
      <>
        <div style={{height : "100px"}}>
         <TitleSpan>예시 2)</TitleSpan>
        </div>
        <BoldSpan>1) 봄 시즌 5주차, <br/> </BoldSpan> 
        화요일 오후 14시 경, <br/>  
        <PupSpan>브랜딩 팀</PupSpan>의 산하 파트 <GreenSpan>‘명품’ <br/>  
        파트</GreenSpan>에서, <PinkSpan>‘홍길동’</PinkSpan> 크루가 좋은 <br/>  
        <OrangeSpan>기획안에 대한 피드백을 요청했고,</OrangeSpan> <br/>  
        <GreenSpan>파트장</GreenSpan>은 이에 대해 <OrangeSpan>모든 크루가 필수 <br/>  
        피드백</OrangeSpan>을 통해, 전체의 기획안 <br/>  
        퀄리티를 올리고자 하였다. <br/>  
        <br/>  
        <BoldSpan>2) 이에 따라, <br/> </BoldSpan> 
        <GreenSpan>파트장</GreenSpan>은, 목요일 오후 14시 까지, <br/>  
        피드백을 단 크루들에게  <OrangeSpan>‘투구⛑’</OrangeSpan> <br/>  
        3개를 부여하고자, 이를  <PupSpan>팀장</PupSpan>에게 <br/>  
        물어봤고, 승인을 받았다.<br/>   
        <br/>  

        <BoldSpan> 3) <GreenSpan>파트장</GreenSpan>은 이를 집행하였고, <br/> </BoldSpan> 
        <GreenSpan>‘명품’ 파트</GreenSpan> 크루 6인 중 <br/>  
        1명( <DeepGreenSpan>
        ‘강감찬’</DeepGreenSpan>)은 해당 일시까지 <br/>  
        피드백을 진행하지 않았다.<br/>   
        <br/>  
        <BoldSpan>4) 이에 따라, <br/> </BoldSpan>
        <DeepGreenSpan>
        ‘강감찬’</DeepGreenSpan>을 제외한 5인은 <br/>  
        모두 <OrangeSpan>‘투구⛑’</OrangeSpan> 3개 포인트를 <br/>  
        받았고, <BlueSpan>다음 주 결산 공표에서 <br/>  
        반영되었다. </BlueSpan><br/>  
        <br/>  
      </>
    );
  }else if (id === '701') {

    content = (
      <>
        <div style={{height : "100px"}}>
         <TitleSpan>1주 과정(1)</TitleSpan>
        </div>
          팔랑크스의 1주는 <br/>
          크게 다음과 같이 <br/>
          규칙적으로 매주 구성됩니다. <br/>
          (월 ~ 토)<br/>
          <br/>
          <TitleSpan>중앙 과정(regular)</TitleSpan><br/>
          <br/>
          <OrangeSpan>🪐중앙 과정🪐</OrangeSpan> 이란, <br/>
          모든 크루가 자신이 속해있는 <br/>
          세부 팀과 파트가 아닌, 클럽 중앙 <br/>
          운영진(단장 포함)에 의해 리딩되는, <br/>
          <OrangeSpan><BoldSpan>‘전체 과정’ </BoldSpan></OrangeSpan>입니다. <br/>
          <br/>
          <BoldSpan>ㄱ. 정기 브리핑📢 <br/></BoldSpan>
          매주 월 / 수 / 토 를 기준으로, <br/>
          <DeepGreenSpan>한 주의 클럽 전체 진행을 안내하고,</DeepGreenSpan> <br/>
          크루들이 클럽 진행 과정 상에서 <br/>
          <DeepGreenSpan>알아두어야 하는 여러 일정과 <br/>
          소식들을 공표 합니다. <br/></DeepGreenSpan>
          <br/>
          <BoldSpan>ㄴ. 위즈덤 & 에세이🔎 <br/></BoldSpan>
          매주 정기적인 요일과 진행 과정을<br/> 
          기준으로, 팔랑크스의 모든 크루들에게 <br/>
          기획/컨설팅 분야에서 떠오르는 <br/>
          <PupSpan>트렌디한 이슈와 주제를 안내하고,</PupSpan> <br/>
          이에 대한<PupSpan> 깊은 인싸이트와 <br/>
          viewpoint를 육성하는 과정</PupSpan>입니다.  <br/>
          <GraySpan>Ex) “미디어 업계의 ai tool, <br/>
          미드저니를 우리 기획자들이 <br/>
          사용할 수 있는 시나리오는 <br/>
          어떻게 될까?”<br/></GraySpan>
          <br/>
          <BoldSpan>ㄷ. 주차 결산⚔ <br/></BoldSpan>
          매주 정해진 요일을 기준으로, <br/>
          <PinkSpan>지난 주 활동했던 모든 크루들의 <br/>
          활동 내역과 포인트, 진행 과정들을</PinkSpan> <br/>
          검수하여 <PinkSpan>주차 활동 인정 여부를 <br/>
          공표하고, 주차별 우수 크루들을 <br/>
          선발</PinkSpan>합니다.<br/>
          <br/> 
          <GraySpan><BingFont>
          “악, 나 왜 화살 받았어!!ㅠ”<br/>
          “이번 주 우리나라에서, <br/>
          가장 1등 기획러 대학생은...<br/>
          혹시 내가 아닐까?”<br/></BingFont></GraySpan>
          <br/> 
          <BoldSpan>ㄹ. 세션📞<br/></BoldSpan>
          정기적인 period & 진행 과정을 <br/>
          기준으로, <BlueSpan>기획/컨설팅 분야에서의 <br/>
          주제를 놓고 크루들이 격돌, 토론하는 <br/>
          세션의 자리에 참가</BlueSpan>합니다.<br/>
          <br/> 
          <BingFont><RedSpan>“어머어머, 쟤 말하는 것 좀 봐!!!” </RedSpan></BingFont><br/>
          <br/>
          <BoldSpan>ㅁ. 캘린더📅<br/> </BoldSpan>
          평균 2주마다 4주 뒤까지의 <DeepGreenSpan>클럽의 <br/>
          진행 과정과 각 세부 팀의 일정, <br/>
          제휴, 외부 연계 이슈 등을 <br/>
          알려주는 캘린더</DeepGreenSpan>가 <br/>
          업데이트 됩니다.<br/> 
      </>
    );
  }else if (id === '702') {

    content = (
      <>
        <div style={{height : "100px"}}>
         <TitleSpan>1주 과정(2)</TitleSpan>
        </div>
          팔랑크스의 1주는 <br/>
          크게 다음과 같이 <br/>
          규칙적으로 매주 구성됩니다. <br/>
          (월 ~ 토)<br/>
          <br/>
        <TitleSpan>세부 과정 (regular)</TitleSpan><br/>
        <br/>
        <PupSpan>📌세부 과정📌</PupSpan> 이란, <br/>
        모든 크루가 자신이 속해 있는 <br/>
        <BlueSpan>세부 팀과 파트에서 진행하는 <br/>
        구체적인 커리큘럼 유닛과 기획안 <br/>
        육성, 포트폴리오 누적</BlueSpan>의 <br/>
        <PupSpan>📌세부 과정📌</PupSpan>  입니다. <br/>
        <br/>
          <BoldSpan>ㄱ. 정기 브리핑💬<br/></BoldSpan>
          매주 월 / 수 / 토 를 기준으로, <br/>
          <OrangeSpan>각 팀의 팀장이 자신의 팀 커리큘럼과 <br/>
          별도 조정 사항을 안내하고,</OrangeSpan> <br/>
          각 파트장들의 리딩을 케어하여 <br/>
          모든 크루의<OrangeSpan> 해당 주 포트폴리오 <br/>
          육성을 지원합니다.<br/></OrangeSpan>
          <br/>
          <BoldSpan>ㄴ. (필수형) 커리큘럼 유닛✨<br/></BoldSpan>
          <PinkSpan>4단계의 기획 유닛 과정을 거쳐,</PinkSpan> <br/>
          내가 원하는 실제 기업/브랜드에게 <br/>
          <PinkSpan>나의 기획안을 공식 타진하는 <br/>
          활동을 진행합니다. <br/></PinkSpan>
          <br/>
          이에 추가하여 다양한 크루들과 <br/>
          <PinkSpan>서로 기획안의 피드백을 주고받고, <br/>
          실제 기획 사례에 대한 분석</PinkSpan> <br/>
          역시 포함됩니다. <br/>
          <br/>
          <BoldSpan>ㄷ. (선택형)  커리큘럼 유닛📚 <br/></BoldSpan>
          기획/컨설팅 직무의 1~3년차 <br/>
          실무자들이 한창 익혀가는 <br/>
          <DeepGreenSpan>실제 도구들과 전략, 전술, 개념 등을 <br/>
          1주에 1개씩 익혀가는 방식</DeepGreenSpan>으로 <br/>
          나의 기획 역량을 쌓아갑니다. <br/>
          <DeepGreenSpan>주차 인정 조건에 필수가 <br/>
          아닙니다.</DeepGreenSpan><br/> 
          <br/>
          <BoldSpan>ㄹ. 기획 과정 포스팅 🖥<br/></BoldSpan>
          진행한 커리큘럼 유닛에 대한 <br/>
          <BlueSpan>나의 실제 진행 내용을, 팔랑크스 <br/>
          공식 아카이빙 채널(티스토리)에 <br/>
          포스팅</BlueSpan>하여, 나 이외에 모든 <br/>
          세상에 자랑합니다. <br/>
          여기서는 팔랑크스 공식 양식에 의해 <br/>
          <BlueSpan>기획자로서 네이밍 되어, <br/>
          추후 포트폴리오의 <br/>
          가치를 드높이게 됩니다.<br/> </BlueSpan>
          <br/>
          <BoldSpan>ㅁ. 주차 결산 🤴<br/></BoldSpan>
          한 주의 과정을 종료하고, <br/>
          <GoldSpan>지난 기간에 포스팅한 나의 <br/>
          기획안에 대한 조회수와 유명인사 <br/>
          리플, 피드백 등을 바탕으로</GoldSpan> <br/>
          나의 기획에 대한 평가를 확정하고, <br/>
          <GoldSpan>클럽 내의 순위를 확인합니다.</GoldSpan><br/>
          <br/><BingFont>
          “이번 주, 대한민국 최고의 <br/>
          대학생 기획러 중 <br/>
          나는 몇 등일까?🤔”<br/></BingFont>
      </>
    );
  }else if (id === '703') {

    content = (
      <>
        <div style={{height : "100px"}}>
         <TitleSpan>1주 과정(3)</TitleSpan>
        </div>
        아래 사항은 1주에 <br/>
        규칙적으로 발생하는 사항이 아닌, <br/>
        시즌 중 발생하는 <br/>
        비정기적 사항입니다.<br/>
        <br/> 
        <TitleSpan>특별 과정 (irregular)</TitleSpan><br/>
        <br/>
        <BlueSpan>⭐특별 과정⭐</BlueSpan> 이란, <br/>
        모든 크루가 참여할 수 있는 <br/>
        비정기적 활동으로서,  <BlueSpan>클럽 내/외부와 <br/>
        연계하여 진행하는 ‘별도 과정’</BlueSpan>입니다.<br/>
        <br/>  
        <BoldSpan>ㄱ. 포럼📺<br/></BoldSpan>
        각 팀에서 <OrangeSpan>우수한 역량을 가지거나,<br/>
        뛰어난 결과를 낸</OrangeSpan>  선배 크루들의<br/>
        <OrangeSpan>인사이트와 기획/컨설팅 부분에서의 <br/>
        역량 팁을 전수하는 소통 강의</OrangeSpan><br/>
        (온라인 혹은 오프라인) 입니다. <br/>
        <br/>
        <BoldSpan>ㄴ. 이벤트💌<br/></BoldSpan>
        클럽 팔랑크스와 연계된 다양한 <br/>
        <PupSpan>외부 기업/프로젝트들 속에서</PupSpan> <br/>
        크루들이 참여하여 다양한 <br/>
        <PupSpan>경품과 지원이 가능한 사항들이</PupSpan><br/>
        (기획 분야 공모전 등) <br/>
        안내됩니다.<br/> 
        <br/>
        <BoldSpan>ㄷ. 특별행사 :올림피아 기획 대전👊<br/></BoldSpan>
        <DeepGreenSpan>클럽 팔랑크스의 대표 행사로서,</DeepGreenSpan> <br/>
        매년 2, 8월을 기준으로 모든 <br/>
        크루가 필수 참석하는, <DeepGreenSpan>기획/컨설팅 <br/>
        분야의 경쟁 PT 행사입니다.<br/></DeepGreenSpan>
        <br/>
        팔랑크스와 후원/연계된 <br/>
        다양한 기업들의 실무진들의 참석과<br/>
        <DeepGreenSpan>채용 연계가 이루어질 수 있습니다.</DeepGreenSpan><br/>
        경쟁 발표는 ‘파트’를 기준으로 <br/>
        합니다.<br/>
        <br/> 
        <BoldSpan>ㄹ. 실무 연계 프로젝트🤝 <br/></BoldSpan> 
        클럽 팔랑크스의 활동 중 <PinkSpan>외부 기업과<br/>
        연계된 실무 프로젝트</PinkSpan>입니다. <br/>
        크루들의 기획안 또는 후원사의 <br/>
        연계로 진행되는 다양한 니즈의 <br/>
        기획들을 바탕으로 <PinkSpan>크루들의 실무 <br/>
        경력을 제고하고, 최고의 경험과 <br/>
        육성을 목표로 합니다.</PinkSpan> <br/>
        (수당, 기간, 보안 등이 포함된<br/>
        별도의 계약이 체결될 수 있습니다.)<br/>
        <br/>
      </>
    );
  }else if (id === '801') {

    content = (
      <>
        <div style={{height : "100px"}}>
         <TitleSpan>수료&졸업</TitleSpan>
        </div>
        팔랑크스 동아리의 30주 수료 후에는<br/>
        졸업 시스템에 입장하게 되며, <br/>
        다음의 결과를 받습니다.<br/>
        <br/>
        <TitleSpan>졸업 결과물</TitleSpan><br/>
        <br/>
        <BoldSpan><PupSpan>1) 클럽 팔랑크스 활동 증명서📑 <br/></PupSpan></BoldSpan>
        (후원사 명의)<br/>
        -&gt; 팔랑크스 클럽이 연계되어 있는, <br/>
        <DeepGreenSpan>후원사들의 검수와 증빙을 거친, <br/>
        ‘활동증명서’<br/></DeepGreenSpan>
        (행정 증빙을 담당하는 후원사는 <br/>
        시즌마다 달라질 수 있습니다.)<br/>
        <br/>
        <BoldSpan><PupSpan>2) 기획/컨설팅 활동 내역서👔<br/></PupSpan></BoldSpan>
        (Portfolio)<br/>
        -&gt;  팔랑크스 클럽 30주 동안 쌓아온 <br/>
        <DeepGreenSpan>개별 크루의 주차별 포트폴리오와 <br/>
        퍼포먼스 집계 내역서 <br/></DeepGreenSpan>
        (타진 기업들, 해당 과정, 결과, <br/>
        조회수, 외부 인사 피드백 등)<br/>
        <br/>
        <RedSpan>*심화 크루는, 이와는 별도로 <br/>
        advanced 슬라이드를 추가 안내 <br/>받습니다.<br/></RedSpan>
        <br/>
        <BoldSpan><PupSpan>3) 기획/컨설팅 채용 추천서 🙋‍♀️<br/></PupSpan></BoldSpan>
        -&gt;  팔랑크스 클럽 활동 중 우수한 <br/>
        기획 과정과 높은 열정, 노력을 <br/>
        통해, 타의 모범이 된 크루를 <br/>
        대상으로 한 <DeepGreenSpan>후원사 명의의 <br/>
        채용 추천서<br/></DeepGreenSpan>
        <br/>
        <BoldSpan><PupSpan>4) 기획/컨설팅 분야 <br/>
        에세이 컬렉션📰<br/></PupSpan></BoldSpan>
        -&gt;  팔랑크스 클럽의 중앙 과정 중 <br/>
        하나로서 매주 진행한 <DeepGreenSpan>‘에세이’ <br/>
        컬렉션에 대한 본인 소유의 <br/>
        SNS 계정 채널<br/> </DeepGreenSpan>
        (*해당 과정을 활동 중 <br/>
        진행하지 않을 경우 본 <br/>
        컬렉션은 집계될 수 없습니다.)<br/>
        <br/>

        <BoldSpan><PupSpan>5) 기획/컨설팅 분야 <br/>
        실무 연계 프로젝트 경력서🌟<br/></PupSpan></BoldSpan>
        -&gt; 팔랑크스 클럽 활동 중 <br/>
        상시적으로 연계되는 <br/>
        <DeepGreenSpan>실무 프로젝트에 대한 <br/>
        경력 증빙<br/> </DeepGreenSpan>
        (본 사항은 실제 기업, <br/>
        서비스와 프로젝트 계약에 의거하여 <br/>
        진행하는 실무 경력이기 때문에 <br/>
        보안, 수당 등에 대한 별도의 계약이 <br/>
        수반되는 경우가 있습니다.)<br/>
        <br/> 
      </>
    );
  }else if (id === '802') {

    content = (
      <>
        <div style={{height : "100px"}}>
         <TitleSpan>졸업 과정</TitleSpan>
        </div>
        팔랑크스 동아리의 30주 수료 후에는 <br/>
        졸업 시스템에 입장하게 되며, <br/>
        다음의 결과를 받습니다.<br/>
        <br/>
        <TitleSpan>졸업 과정</TitleSpan><br/>
        <br/>
        <BoldSpan><DeepGreenSpan>1) 29주차<br/></DeepGreenSpan></BoldSpan>
        <PupSpan>누적 활동 주차가 29주차</PupSpan>가 된 <br/>
        크루에게는 별도로 <PupSpan>졸업 주차 <br/>
        시스템으로의 안내가 발송됩니다.</PupSpan><br/>
        <br/>
        <BoldSpan><RedSpan>(중요!) <br/></RedSpan></BoldSpan>
        이 과정에서 <PupSpan>졸업을 미루고, <br/>
        포트폴리오를 더 쌓아가고자 하는 <br/>
        크루</PupSpan>는 별도의 안내가 따로 <br/>
        제공됩니다.<br/>
        <br/> 
        이 사항은, <br/>
        이번 리뉴얼 9기부터 새로 생긴 <br/>
        절차로서, <RedSpan>이전 6, 7기 이전 <br/>
        크루들에게는 소급 적용되지 <br/>
        않습니다.<br/>
        <br/></RedSpan>
        <BoldSpan><DeepGreenSpan>2) 30주차<br/></DeepGreenSpan></BoldSpan>
        <BlueSpan>30주차(마지막 주차)는 별도의 <br/>
        활동 없이,</BlueSpan> 졸업 주차 시스템 <br/>
        내에서의 졸업 준비 주차를 <br/>
        진행합니다. <br/>
        <br/>
        <BoldSpan><DeepGreenSpan>3) 졸업 시스템<br/></DeepGreenSpan></BoldSpan>
        졸업 주차 시스템 내에서의 <br/>
        안내에 따라, 졸업 크루는 <br/>
        위 <PinkSpan>결과물들에 대한 검수 및 <br/>
        발급을 진행</PinkSpan>합니다.<br/> 
        <br/>
        <BoldSpan><DeepGreenSpan>4) Alumni<br/></DeepGreenSpan></BoldSpan>
        졸업이 완료된 크루는, <br/>
        <OrangeSpan>팔랑크스의 졸업자들의 커뮤니티인<br/>
        알룸니 시스템으로의 입장</OrangeSpan>을 <br/>
        선택할 수 있습니다.<br/>
        <br/>
        <GreenSpan>*팔랑크스의 알룸니 시스템은, <br/>
        졸업자들이 모여있는 커뮤니티로서 <br/>
        각종 기획/컨설팅 직무에의 <br/>
        채용 연결, 취업, 추천, 공고 등의 <br/>
        정보가 공유될 수 있습니다.<br/></GreenSpan>
        <br/>
        <BoldSpan><RedSpan>(중요!) <br/></RedSpan></BoldSpan><br/>
        24년 3월, 9기 리뉴얼 시기를 <br/>
        기준으로, 후원사들이 진행 중인, <br/>
        <RedSpan>기획/컨설팅 직무 관련 별도의 <br/>
        국가 공인 자격증에 대한 심사</RedSpan>가 <br/>
        진행 중에 있습니다. <br/>
        (산업자원통상부 산하)<br/>
        심사가 최종 확정될 경우, <br/>
        <RedSpan>팔랑크스 클럽의 졸업 크루들을 <br/>
        대상으로 필기/실기 전형을 면제</RedSpan>하고, <br/>
        별도의 조건으로 자격증 발급에대한 <br/>
        후원 사항이 협의 중입니다.<br/> 
        <br/>
        아직 확정된 사항이 아니므로, <br/>
        앞에 <RedSpan>‘졸업 결과물’ 에는 <br/>
        명시되지 않았으며,</RedSpan> 해당 사항이 <br/>
        확정된 시점을 기준으로 그전 모든 <br/>
        졸업자에게 해당 사항을 전달할 <br/>
        예정인데, 알룸니 시스템에 없는 졸업 <br/>
        크루에게는, 전달할 수 있는 채널이 <br/>
        없을 수 있으므로 해당 사항에 대한 <br/>
        유의바랍니다.<br/>
        <br/>
        </>
    );
  }
  else if (id === '901') {

    content = (
      <>
        <div style={{height : "100px"}}>
         <TitleSpan>커뮤니케이션(1)</TitleSpan>
        </div>
        팔랑크스 동아리는, <br/>
        <BoldSpan><DeepGreenSpan>커뮤니케이션을 정말 중요시하게 <br/>
        생각합니다.<br/></DeepGreenSpan></BoldSpan>
        <br/>
        팔랑크스에서는, <br/>
        다음과 같은 류의 행동이 발생되는 <br/>
        것을 극도로 경계하며 이를 <RedSpan>타 크루와 <br/>
        클럽 진행에 피해를 입히는 일</RedSpan>이라고 <br/>
        간주합니다.<br/>
        <br/> 
        이에 따라 가장 페널티(화살🏹 등)가 <br/>
        많이 발생하는 가장 중요한 일로서 <br/>
        아래 사항에 대해  <BoldSpan><RedSpan>단호히 재명시 <br/>
        드립니다.<br/></RedSpan></BoldSpan>
        <br/>
        <BoldSpan><RedSpan>1. 단톡방을 통한 태그 및 안내📌<br/></RedSpan></BoldSpan>
        <br/>
        -&gt; 팔랑크스 클럽의 활동을 <br/>
        시작하게 되면, 각 크루가 사용하는 <br/>
        드라이브, 폴더, 아카이빙 포스팅 권한, <br/>
        네이밍 카드, 투표 시스템, 내부 <br/>
        운영 홈페이지 등 <PupSpan>많은 클럽 인프라에 <br/>
        초대가 됩니다.💌 <br/></PupSpan>
        <br/>
        여기서 가장 중요한 채널 중 하나는, <br/>
        <PupSpan>팔랑크스 클럽 활동이 진행되는 <br/>
        여러 단톡들인데,</PupSpan> 이 단톡은 팔랑크스 <br/>
        클럽의 활동이 진행되는 <BoldSpan>‘공식적’인 <br/>
        채널</BoldSpan>이기 때문에 여기에서 <br/>
        커뮤니케이션 미스가 있지 않도록❌ <br/>
        각별히 유의해야 합니다.  <br/>
        <GraySpan>(아무리 불러도 대답 없는 <br/>
        너..ㅠ..안돼요!😖)<br/></GraySpan>
        <br/>
        본인을 포함하여 태그가 <br/>
        걸리거나, 안내 사항이 주어진다면 <br/>
        <RedSpan>24시간 이내에 답을 하는 것을</RedSpan> <br/>
        상식으로 갖추는 것을 추천드리며, <br/>
        단톡을 통해 본인에게 오는 다양한 <br/>
        <PupSpan>메시지와 피드백 들을 확인 하는 것에 <br/>
        어려움을 느끼지 않는 마인드셋</PupSpan>이 <br/>
        ❗중요❗합니다. <br/>
        <br/>
        자신의 경력을 시작하는 <br/>
        포트폴리오를 쌓는 <DeepGreenSpan>공적인 <br/>
        단톡방에서의 커뮤니케이션을</DeepGreenSpan>, <br/>
        친구들끼리의 사적인 단톡처럼 <br/>
        본인을 부르는 상황에서 답을 해도 <br/>
        되고, 안해도 되는 채널로 <br/>
        생각하신다면, <br/>
        <br/>
        <BoldSpan><RedSpan>클럽 지원을 멈춰주시기 바랍니다.😊</RedSpan></BoldSpan>
      </>
    );
  }
  else if (id === '902') {

    content = (
      <>
        <div style={{height : "100px"}}>
         <TitleSpan>커뮤니케이션(2)</TitleSpan>
        </div>
        <BoldSpan><RedSpan>2. 공지 사항에 대한 투표 및 확인⭕</RedSpan></BoldSpan><br/><br/>
        -&gt; 팔랑크스에서는, 미리 짜여진 <br/>
        일정과 과정을 포함하여 <PupSpan>다양한 안내 <br/>
        및 리마인딩을 알리는 공지 사항이 <br/>
        올라옵니다.📢📢<br/></PupSpan>
        <br/>
        그리고 대부분의 공지 사항은, <br/>
        <DeepGreenSpan>팔랑크스 클럽 시스템과 연동되는 <br/>
        투표를 포함하고 있는데,💻</DeepGreenSpan> <br/>
        이 투표는 시즌 등록된 모든 <br/>
        크루들의 확인과 진행 과정에 대한 <br/>
        활동을 캐칭하여, <DeepGreenSpan>주차 인정 조건에 <br/>
        반영하는 과정으로 이루어집니다.<br/></DeepGreenSpan>
        <br/> 
        이에 따라 팔랑크스 클럽 활동 중에 <br/>
        발생하는 <RedSpan>모든 공지사항을, <BoldSpan>반드시</BoldSpan> <br/>
        숙지하여야 하며</RedSpan> 공지사항을 숙지하지 <br/>
        않을 시 발생하는 <RedSpan>페널티와 불이익에 <br/>
        대해서는 운영진이 책임을 질 수 <br/>
        없어요!😫<br/></RedSpan>
        <br/> 
        그간 통상적으로 보았을 때, <br/>
        10명 정도에게 전달된 안내와 <br/>
        공지의 경우, 평균적으로 1명 정도가 <br/>
        혼자만 그 내용을 추후 모르고 있는 <br/>
        경우가 생기는데, 클럽 진행에서 <br/>
        발생하는 대부분의 시간 비용과 <br/>
        금전 비용 그리고 클럽 전체 크루들이 <br/>
        입는 피해는 <br/>
        <RedSpan><BiggerSpan>그 1명 때문에 발생하는<br/>
        경우가 많습니다!😤<br/></BiggerSpan></RedSpan>
        <br/>
        본인이 그 1명이 되지 않도록 <br/>
        <BoldSpan>각별히</BoldSpan> 유의 부탁드립니다.😉
      </>
    );
  }
  else if (id === '903') {

    content = (
      <>
        <div style={{height : "100px"}}>
         <TitleSpan>커뮤니케이션(3)</TitleSpan>
        </div>
        <BoldSpan><RedSpan>3. 클럽 공식의 <br/>
        커뮤니케이션 페이지💻를 <br/>
        적극 활용하라</RedSpan></BoldSpan><br/> <br/>
        -&gt; 활동을 시작하면, <DeepGreenSpan>내부 <br/>
        크루들에게만 공개되는, 전용 <br/>
        커뮤니케이션 페이지가 있기 때문에</DeepGreenSpan> <br/>
        이를 적극적으로 활용해주시면 <br/>
        원활하고 빠른 커뮤니케이션이 <br/>
        가능해집니다. <br/>
        <br/>
        또한 <RedSpan>자꾸 1:1 의 개인 톡으로</RedSpan> <br/>
        공적인 활동을 진행하게 될 경우, <br/>
        당연하게도 해당 공간은 <BoldSpan>‘사적’ 인 <br/>
        공간</BoldSpan>으로서, 운영 과정에서 <br/>
        어떤 <RedSpan>❌책임이나 활동 내용에 대한  <br/>
        증빙이 곤란할 수 있습니다.❌<br/></RedSpan>
        <br/>
        클럽 활동 안에서 발생하는 <br/>
        여러 문의나 피드백, 내용은<br/>
         적극적으로 전체 톡을 사용하여 <br/>
         <PupSpan>모든 크루의 대중 지성 인프라를 <br/>
         활용하는 것을 추천드리며, <br/></PupSpan>
         <br/>
         극히 사적인 비밀이나 프라이빗한 <br/>
         상황일 경우에는, <br/>
         <BlueSpan>커뮤니케이션 페이지를 활용해주시면</BlueSpan> <br/>
         가장 효과적이고 원활한 진행이 <br/>
         가능합니다.<br/>
      </>
    );
  }
  else if (id === '904') {

    content = (
      <>
        <div style={{height : "100px"}}>
         <TitleSpan>커뮤니케이션(4)</TitleSpan>
        </div>
        <BoldSpan><RedSpan>4. 커뮤니케이션 상에서의 사회의 <br/>
        상식을 익히는 기회로 활용하라💪</RedSpan></BoldSpan><br/> <br/>
        -&gt; 팔랑크스 클럽은, 기획/컨설팅 <br/>
        부분에서의 <DeepGreenSpan>실무 포트폴리오를 <br/>
        준비하는 과정으로써</DeepGreenSpan>, 즉 우리가 <br/>
        대학생을 넘어, 사회로 진출하는 <br/>
        <DeepGreenSpan>준비된 청춘으로서의 성장🔥을 <br/>
        가장 중요시하게 생각합니다.<br/></DeepGreenSpan>
        <br/> 
        이에 따라 팔랑크스 클럽의 <br/>
        활동 상에서의 커뮤니케이션을 <br/>
        통해, 지금까지 <RedSpan>사적인 친구들과의 <br/>
        커뮤니케이션만 익숙한 대학생에서,</RedSpan> <br/>
        사회에서 <OrangeSpan>신뢰를 줄 수 있는 역량 있는 <br/>
        사회인으로서의</OrangeSpan> 커뮤니케이션 연습을 <br/>
        할 수 있는 기회로 활용해야 합니다.<br/>
        <br/> 
        예를 들어,<br/> 사전에 정해진 일정이 아닌 
        경우 <br/>
        <RedSpan>주말이나 밤에 갑작스럽게 보내는 <br/>
        커뮤니케이션</RedSpan>은 <RedSpan>실시간 회신을 <br/>
        기대하기 힘들며,</RedSpan> 정해진 데드라인이나 <br/>
        마감 기한에 대한 것을 <RedSpan>개인 임의의 <br/>
        사정으로 무시하거나 미룰 수 없다는,</RedSpan> <br/>
        <BiggerSpan>‘당연한‘</BiggerSpan> 사항들을 익힐 수 있는 <br/>
        기회로 삼아주세요 <br/>😊
        <br/>
        2024년 기준, <br/>
        대한민국의 20대 청춘이 <BoldSpan>24시간 이상 <br/>
        스마트폰을 확인하지 않는다는 것은, <br/>
        <RedSpan>‘비상 상황🚨’ </RedSpan>이라는 것을</BoldSpan> <br/>
        우리 모두가 인지할 것입니다.<br/>
        <br/> 
        본인을 부르는, 메시지를 <br/>
        회피하다가, 1~2일이 지난 후에야<br/>
        가까스로 회신이 오는 사람에게 <br/>
        <RedSpan>어떤 채용의 기회와 신뢰가 <br/>
        부여될 수 없다는 것을,</RedSpan> <br/>
        팔랑크스는 명시드립니다.<br/>
        <br/>  
        <BiggerSpan>우리는 ‘연애’ 하는 것이 <br/>
        아니에요😉</BiggerSpan>
        <br/><br/>
      </>
    );
  }

  else if (id === '905') {

    content = (
      <>
        <div style={{height : "100px"}}>
         <TitleSpan>커뮤니케이션(5)</TitleSpan>
        </div>
        <BoldSpan><RedSpan>5. 나는 아직 <br/>
        케어가 필요한 청소년인가? 🤔<br/>
        스스로 우뚝 설 수 있는 성인인가?</RedSpan></BoldSpan><br/> <br/>
        -&gt; 팔랑크스는, 30주의 기간과 내부의 <br/>
        커리큘럼과 진행과정, 그리고 증빙받는 <br/>
        결과물에서부터 <DeepGreenSpan>타 동아리와 <br/>
        큰 차이를 가지고 있는 <BiggerSpan>‘클럽’</BiggerSpan> 형태의 <br/>
        동아리 입니다.<br/></DeepGreenSpan>
        <br/>
        그냥 좋은 추억과 썸 타고, <br/>
        <RedSpan>친목 관계를 가지는 동아리 활동이 <br/>
        아니라,</RedSpan> 많은 후원사와 연계 프로젝트, <br/>
        그리고 채용과 직접적으로 연결되는 <br/>
        <BlueSpan>💙기획/컨설팅 프로젝트의 <br/>
        실무 포트폴리오를 시작하는💙<br/></BlueSpan>
        <br/>
        <BiggerSpan>‘커리어의 시작‘,</BiggerSpan> 클럽이기 때문에 <br/>
        우리 외에도 연계/ 후원/ 졸업한 <br/>
        선배 크루/ 신입, 후배, 동료 크루등 <br/>
        <PupSpan>다양한 사람들이 모든 과정에서 함께 <br/>
        진행하고 있다는 사실</PupSpan>을 꼭 염두에 <br/>
        두어야 합니다.<br/>
        <br/>
        신입생 때 그냥 놀려고 들어간 <br/>
        동아리 활동에서의 술자리 진상 짓은, <br/>
        기껏해야 학과 동기 정도가 알고 <br/>
        이불킥 추억으로 지나가지만, <br/>
        <br/>
        <BoldSpan>팔랑크스에서는 채용이나 실제 <br/>
        기획/컨설팅 직무의 다양한 선후배와 <br/>
        실무자, 연계 기업들이 함께하기 <br/>
        때문에 <RedSpan>괜히 부주의하고 무책임한 <br/>
        행동으로 💥책임질 수 없는 상황이 <br/>
        오지 않도록💥</RedSpan> 유의하는 것을 <br/>
        추천드립니다.<br/></BoldSpan>
        <br/> 
        <BiggerSpan><GreenSpan>본인의 좋은 평판을 <br/>
        팔랑크스에서 시작하세요🤗 <br/></GreenSpan></BiggerSpan>
        <br/> 
      </>
    );
  }
  // 이렇게 id에 따라 다른 내용을 결정하고 그에 맞는 JSX를 반환할 수 있습니다.

  return (
    <Container>
      <ContentBox>
        <Txt>{content}</Txt>
        {children}
      </ContentBox>
      
    </Container>
  );
};

export default SlideContents;


const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content:center;
`;

const ContentBox = styled.div`
  display: flex;
  width : 80%;
  flex-flow : row wrap;
  justify-self: flex-start;
  align-items: center;
  overflow-y: auto;
  text-align:left;
  overflow-x : hidden;
  padding : 5%;
  margin : 5%;
  position : relative;
`

const Txt = styled.p`
  font-size: 5vmin;
  font-family: '한나';
  text-align : start;
  transition: font-size 0.7s ease-out;
  color : black;
  line-height : 150%;
`;


const TitleSpan =styled.span`
  color : #3DB9B1;
  font-family : "한나";
  font-size : 9vmin;
  line-height : 100%;
  font-weight : 600;
   /* 가로, 세로, 번짐, 색상 */
`



const ImageContainer2 = styled.div`

width: ${({ width }) => width};
height: auto;
object-fit: cover;
background-color: transparent;
transform : rotate(${({ rotate }) => rotate});
top:${({ top }) => top};
left: ${({ left }) => left};
position: absolute; /* 겹치는 요소에 position 추가 */

`;



const ImgComponent2 = ({ imagePath, top, left,rotate,width }) => {
  return (
      <ImageContainer2 
        top = {top}
        left = {left}
        rotate={rotate}
        width={width}
        
      >
          <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} 
          alt="페이지 이미지" 
          style={{ 
            maxWidth: '100%', maxHeight: '100%' ,
            borderRadius :"5% 5% 5% 5% "
          }}/>
      </ImageContainer2>
      
  );
};


const ImageContainer = styled.div`

width: ${({ width }) => width};
height: auto;
object-fit: cover;
background-color: transparent;
`;



const ImgComponent = ({ imagePath,width }) => {
  return (
      <ImageContainer 
        width={width}
        
      >
          <img src={`${process.env.PUBLIC_URL }/imgData/${imagePath}`} 
          alt="페이지 이미지" 
          style={{ 
            maxWidth: '100%', maxHeight: '100%' ,
            borderRadius :"5% 5% 5% 5% "
          }}/>
      </ImageContainer>
      
  );
};


const SemiBiggerSpan = styled.span`
font-size : 5.5vmin;
font-weight : 600;
line-height : 200%;
`
const BiggerSpan = styled.span`
font-size : 6vmin;
font-weight : 600;
line-height : 200%;
`
const BiggestSpan = styled.span`
font-size : 7vmin;
font-weight : 600;
line-height : 200%;
`


const GreenSpan =styled.span`
  color : #3DB9B1;
  line-height : 150%;
`
const OrangeSpan = styled.span`
color : #FF8000;
`
const RedSpan = styled.span`
color : #FF0000;
`
const BlueSpan = styled.span`
color : #0040FF;
`
const GraySpan = styled.span`
color : #A4A4A4;
`

const PupSpan = styled.span`
color : #BF00FF;
`

const PinkSpan = styled.span`
color : #FF0080;
`

const DeepGreenSpan =styled.span`
  color : #04B404;
`
const GoldSpan =styled.span`
  color : #AEB404;
`

const BoldSpan =styled.span`
font-weight : 600;
`

const ItalicSpan =styled.span`
font-style : italic;
font-size : 4.5vmin;
`
const BingFont =styled.span`
font-family : 빙자람;
font-weight : 600;
`
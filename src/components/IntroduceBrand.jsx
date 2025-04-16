import React from 'react'; // eslint-disable-line no-unused-vars
import './IntroduceBrand.css';
import box1_headerimg from '../assets/box1-headerimg.png';
import Startup_sub1_1 from '../assets/Startup_sub1-1.png';
import Startup_sub1_2 from '../assets/Startup_sub1-2.png';
import Startup_sub1_3 from '../assets/Startup_sub1-3.png';
import Startup_sub2_1 from '../assets/Startup_sub2-1.png';
import Startup_sub2_2 from '../assets/Startup_sub2-2.png';
import Startup_sub2_3 from '../assets/Startup_sub2-3.png';
import Startup_sub3_1 from '../assets/Startup_sub3-1.png';
import Startup_sub3_2 from '../assets/Startup_sub3-2.png';
import Startup_sub3_3 from '../assets/Startup_sub3-3.png';
import Startup_sub4_1 from '../assets/Startup_sub4-1.png?ver=1.1';
import Startup_sub4_2 from '../assets/Startup_sub4-2.png';
import Startup_sub4_3 from '../assets/Startup_sub4-3.png';
import Startup_sub4_4 from '../assets/Startup_sub4-4_n.png';
import m30038 from '../assets/30038.jpg';
import m30063 from '../assets/30063.jpg';
import m3813 from '../assets/3813.jpg';
import m30599 from '../assets/30599.jpg';
import m4415 from '../assets/4415.jpg';
import Psicon_0 from '../assets/Psicon-0.png';
import Psicon_1 from '../assets/Psicon-1.svg';
import icon_process1 from '../assets/icon_process1.svg';
import Psicon_2 from '../assets/Psicon-2.svg';
import Psicon_3 from '../assets/Psicon-3.svg';
import icon_process3 from '../assets/icon_process3.svg';
import Psicon_4 from '../assets/Psicon-4.svg';
import Psicon_8 from '../assets/Psicon-8.svg';
import icon_process4 from '../assets/icon_process4.svg';
import Psicon_5 from '../assets/Psicon-5.svg';
import icon_process2 from '../assets/icon_process2.svg';
import Psicon_6 from '../assets/Psicon-6.svg';
import Psicon_7 from '../assets/Psicon-7.svg';
import img_cost1 from '../assets/img_cost1.png';
import img_cost2 from '../assets/img_cost2.png';

const IntroduceBrand = () => {
  return (
    <div className='Brand_Swrap'>
      <div className='StartupBox1'>
        <div className='HeadTitle'>
          <img src={box1_headerimg} className='BrandTimg' alt='브랜드 헤더 이미지' />
          <div className='title'>
            세계로 뻗어나가는 브랜드,<span className='point'>네네치킨</span>
          </div>
        </div>
        <div className='FooterTitle'>
          <div className='title'>
            전국 약 950개 매장과 전국 16개 지사, <br />
            해외 12개국 약 150개 가맹점
          </div>
          <div className='stitle'>
            2012년 싱가포르 진출을 시작으로 호주, 미국, 태국, 베트남 등 <br />
            세계 각 지역에 진출하여
            <br /> 글로벌 외식 기업으로서 성장하고 있습니다.
          </div>
          <div className='StoreBtn-box'>
            <div className='StoreB'>국내매장</div>
            <div className='StoreB'>해외 창업 안내</div>
          </div>
        </div>
      </div>
      <div className='StartupBox2'>
        <div className='title'>
          겉바속촉의 맛있는 성공! <br />
          25년 장수 브랜드 <span className='point'>네네치킨</span>
        </div>
      </div>
      <div className='StartupBox3'>
        {/* 내용1 ============================ */}
        <div className='StartInner'>
          <div className='S-TitleBox'>
            <div className='MainT'>
              왜 ‘<span className='point'>네네치킨</span>’ 일까요?
            </div>
            <div className='SubT'>25년 전통, 바른 품질로 굳건히 지켜온 장수 브랜드</div>
            <div className='SubconT'>
              네네치킨의 경영 철학에는 더불어 사는 사회의 참된 의미를 실천하고자 하는 정신이 담겨
              있습니다.
              <br />
              네네치킨은 고객에게 사랑받는 기업이 되기 위해 언제나 바르게 느끼고, 바르게 생각하며,{' '}
              <br />
              진심을 담아 행동하고, 협동하는 자세로 새로운 제품을 개발하며 다양한 상생 정책을 펼치고
              있습니다.
            </div>
          </div>
          <div className='ImgBox'>
            <div className='img-con'></div>
            <div className='img-con'></div>
          </div>
          <div className='neneBox'>
            <div className='infoTtx'>
              <p>
                <span className='icon'></span>파격적인 창업 혜택으로 합리적인 맞춤형 출점
              </p>
              <p>
                <span className='icon'></span>가맹점주님의 의견을 적극반영한 마케팅 활동
              </p>
              <p>
                <span className='icon'></span>다양한 온/오프라인 마케팅으로 신규 고객 창출
              </p>
              <p>
                <span className='icon'></span>체계적인 밀착 컨설팅을 통한 교육 지원 시스템
              </p>
              <p>
                <span className='icon'></span>고객 충성도 제고를 위한 전용 앱 운영
              </p>
            </div>
          </div>
        </div>
        <div className='BrandLine'></div>
        {/* 내용2 ============================ */}
        <div className='StartInner'>
          <div className='S-TitleBox'>
            <div className='MainT'>
              <span className='point'>파격적인 창업 혜택</span>으로 합리적인 맞춤형 출점
            </div>
            <div className='SubT'>No 가맹비, No 로열티, No 교육비, No 감리비</div>
            <div className='SubconT'>
              네네치킨은 가맹비, 로열티, 교육비, 감리비가 전혀 없습니다. <br />
              불필요한 비용을 제거하여, 다른 프랜차이즈보다 <br />
              더욱 실속 있는 비용으로 가맹점을 운영할 수 있습니다.
            </div>
          </div>
        </div>
        <div className='swiper Sub1Bn'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <img src={Startup_sub1_1} style={{ width: '100%' }} alt='Startup sub1-1' />
            </div>
            <div className='swiper-slide'>
              <img src={Startup_sub1_2} style={{ width: '100%' }} alt='Startup sub1-2' />
            </div>
            <div className='swiper-slide'>
              <img src={Startup_sub1_3} style={{ width: '100%' }} alt='Startup sub1-3' />
            </div>
          </div>
        </div>
        {/* 내용3 ============================ */}
        <div className='StartInner'>
          <div className='S-TitleBox'>
            <div className='MainT'>
              가맹점주님들의 <span className='point'>의견을 적극반영</span>한 마케팅 활동
            </div>
            <div className='SubT'>가맹점주님들의 의견을 수렴하여 마케팅을 진행</div>
            <div className='SubconT'>
              TV, SNS 광고와 영화 및 드라마 협찬, e-스포츠 경기 후원 등을 통해 <br />
              가맹점주님들의 의견을 수렴하여 마케팅을 진행합니다.
              <div className='point'>
                *판매 채널별 행사 진행 시 자체 브랜드 계약을 통해 가맹본부도 점주님과 함께 수수료를
                부담합니다.
              </div>
            </div>
          </div>
        </div>
        <div className='swiper Sub2Bn'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <img src={Startup_sub2_1} style={{ width: '100%' }} alt='Startup sub2-1' />
            </div>
            <div className='swiper-slide'>
              <img src={Startup_sub2_2} style={{ width: '100%' }} alt='Startup sub2-2' />
            </div>
            <div className='swiper-slide'>
              <img src={Startup_sub2_3} style={{ width: '100%' }} alt='Startup sub2-3' />
            </div>
          </div>
        </div>
        {/* 내용4 ============================ */}
        <div className='StartInner'>
          <div className='S-TitleBox'>
            <div className='MainT'>
              체계적인 밀착 컨설팅을 통한 <span className='point'>교육 지원 시스템</span>
            </div>
            <div className='SubT'>
              체계적인 교육 및 실습 과정과 프로 슈퍼바이저의 신규매장 집중 관리로 <br />
              안정적인 운영 지원
            </div>
            <div className='SubconT'>
              네네치킨 전용 교육 시설에서 체계적인 커리큘럼에 따른 교육 및 실습을 지도합니다. <br />
              매장 운영 안정성을 높이고자 각종 물품을 지원하며, <br /> 가맹점 운영 경험이 풍부한
              슈퍼바이저가 집중 관리합니다.
            </div>
          </div>
        </div>
        <div className='swiper Sub3Bn'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <img src={Startup_sub3_1} style={{ width: '100%' }} alt='Startup sub3-1' />
            </div>
            <div className='swiper-slide'>
              <img src={Startup_sub3_2} style={{ width: '100%' }} alt='Startup sub3-2' />
            </div>
            <div className='swiper-slide'>
              <img src={Startup_sub3_3} style={{ width: '100%' }} alt='Startup sub3-3' />
            </div>
          </div>
        </div>
        {/* 내용5 ============================ */}
        <div className='StartInner'>
          <div className='S-TitleBox'>
            <div className='MainT'>
              다양한 온/오프라인 마케팅으로 <span className='point'>신규 고객 창출</span>
            </div>
            <div className='SubT'>고객과의 접점을 다각화하여 마케팅 효과를 극대화</div>
            <div className='SubconT'>
              자체 할인 프로모션, 대형 채널과 함께하는 제휴 프로모션을 통해 매출 향상에 최선을
              다합니다. <br />
              SNS 공식계정을 통해 각종 행사와 이벤트 소식을 알리고, <br />
              유투브/인스타그램 광고를 집행하여 브랜드 인지도를 높입니다.
            </div>
          </div>
        </div>
        <div className='swiper Sub5Bn'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <img src={Startup_sub4_1} style={{ width: '100%' }} alt='Startup sub4-1' />
            </div>
            <div className='swiper-slide'>
              <img src={Startup_sub4_2} style={{ width: '100%' }} alt='Startup sub4-2' />
            </div>
            <div className='swiper-slide' style={{ left: '-1px' }}>
              <img src={Startup_sub4_3} style={{ width: '100%' }} alt='Startup sub4-3' />
            </div>
          </div>
        </div>
        {/* 내용6 ============================ */}
        <div className='StartInner'>
          <div className='S-TitleBox'>
            <div className='MainT'>
              고객 충성도 제고를 위한 <span className='point'>전용 앱</span> 운영
            </div>
            <div className='SubT'>전용 앱으로 고객 충성도 강화, 고객 이탈 최소화!</div>
            <div className='SubconT'>
              더 이상 고객 유치를 위해 배달앱에만 의지하지 않아도 됩니다.
              <br />
              전용 앱을 통해 우리 매장 고객을 관리할 수 있고, 배달앱보다 낮은 수수료로 가맹점 매출
              확장에도 도움이 됩니다.
              <br />
              전용 앱을 통해 체계적으로 고객을 관리하고, 다양한 프로모션을 운영하여 충성 고객을
              늘리며, 고객 이탈을 최소화합니다.
            </div>
          </div>
        </div>
        <div style={{ margin: '-2rem 0', textAlign: 'center' }}>
          <img
            src={Startup_sub4_4}
            style={{ width: '100%', maxWidth: '1200px' }}
            alt='Startup sub4-4'
          />
        </div>
      </div>
      {/* 대표메뉴 */}
      <div id='StartupBox4' className='StartupBox4'>
        <div className='StartInner'>
          <div className='S-TitleBox'>
            <div className='MainT'>
              ‘<span className='point'>네네치킨</span>’이 맛있는 이유
            </div>
            <div className='SubT'>바른 품질을 위한 네네의 끊임없는 노력</div>
          </div>
          <div className='BrandNENE'>
            <div className='conB'>
              <div className='nImgBox'></div>
              <div className='TxtBox'>
                <div className='Txt'>
                  <span className='pointTxt'>네네치킨은 겉바속촉</span>
                  <div className='contents'>
                    베터딥 공법으로 기름이 스며들지 않아 <br />
                    속은 촉촉하고 겉은 바삭하게! <br />
                    네네치킨만의 특별한 조리 비법입니다.
                  </div>
                </div>
                <div className='Txt'>
                  <span className='pointTxt'>100% 국내산 닭고기는 언제나 옳다</span>
                  <div className='contents'>
                    위생적인 도계 과정을 거친 <br />
                    100% 국내산 닭고기를 고집하는 <br />
                    네네치킨의 의지
                  </div>
                </div>
              </div>
            </div>
            <div className='conB'>
              <div className='nImgBox'></div>
              <div className='TxtBox'>
                <div className='Txt'>
                  <span className='pointTxt'>품질좋은 닭고기, 언제나 안전하게 </span>
                  <div className='contents'>
                    콜드체인시스템을 통해 <br />
                    신선하고 안전한 제품만을 <br />
                    제공하려는 네네치킨의 확고한 신념
                  </div>
                </div>
                <div className='Txt'>
                  <span className='pointTxt'>체계 속에서 인정받은 철저한 관리</span>
                  <div className='contents'>
                    HACCP 인증을 받은 생산본부의
                    <br />
                    철저한 관리와 시스템을 기반으로
                    <br />
                    유지되는 네네치킨의 우수한 품질
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='headerTitle'>
          <span className='Titleicon'>대표 메뉴</span>
        </div>
        <div className='swiper StartInner SubMenu2' style={{ paddingBottom: '5rem' }}>
          <div className='swiper-wrapper BrandMenu'>
            <div className='swiper-slide MenuList' style={{ width: '256px' }}>
              <img src={m30038} alt='치즈스노윙' />
              <div className='name'>치즈스노윙</div>
            </div>
            <div className='swiper-slide MenuList' style={{ width: '256px' }}>
              <img src={m30063} alt='오리엔탈파닭' />
              <div className='name'>오리엔탈파닭</div>
            </div>
            <div className='swiper-slide MenuList' style={{ width: '256px' }}>
              <img src={m3813} alt='청양마요치킨' />
              <div className='name'>청양마요치킨</div>
            </div>
            <div className='swiper-slide MenuList' style={{ width: '256px' }}>
              <img src={m30599} alt='핫블링치킨' />
              <div className='name'>핫블링치킨</div>
            </div>
            <div className='swiper-slide MenuList' style={{ width: '256px' }}>
              <img src={m4415} alt='양념반후라이드반' />
              <div className='name'>양념반후라이드반</div>
            </div>
          </div>
        </div>
      </div>
      {/* 개설절차 */}
      <div id='StartupBox5' className='StartupBox5'>
        <div className='headerTitle'>
          <span className='Titleicon'>개설절차</span>
        </div>
        <div className='StartInner'>
          <div className='S-TitleBox'>
            <div className='SubconT-1'>
              전국 16개 지사와 전체 임직원의 확실한 사명감을 바탕으로, <br />
              오랜 기간 축적된 매장 운영 노하우를 가맹점주님께 전수해드리고, <br />
              교육부터 매장 오픈 후 세세한 부분까지도 세심하게 지도해 드립니다.
            </div>
          </div>
          <div className='process_ST'>
            <div className='tit_circle flexC'>
              <img src={Psicon_0} alt='네네치킨 가게일러스트' />
            </div>
            <div id='processPc'>
              <ul className='flexSB process01'>
                <li className='flexCol_C'>
                  <div className='process_item'>
                    <span className='num'>STEP 1</span>
                    <strong className='tit'>
                      가맹점 개설 상담
                      <br />및 경영 안내
                    </strong>
                    <img src={Psicon_1} alt='Psicon-1' />
                  </div>
                </li>
                <li className='arrow'>
                  <img src={icon_process1} alt='화살표' />
                </li>
                <li className='flexCol_C'>
                  <div className='process_item'>
                    <span className='num'>STEP 2</span>
                    <strong className='tit'>
                      상권분석
                      <br />및 매장선택
                    </strong>
                    <img src={Psicon_2} alt='Psicon-2' />
                  </div>
                </li>
                <li className='arrow'>
                  <img src={icon_process1} alt='화살표' />
                </li>
                <li className='flexCol_C'>
                  <div className='process_item'>
                    <span className='num'>STEP 3</span>
                    <strong className='tit'>가맹계약 체결</strong>
                    <img src={Psicon_3} alt='Psicon-3' />
                  </div>
                  <div className='arrow_bt MTREM1'>
                    <img src={icon_process3} alt='화살표' />
                  </div>
                </li>
              </ul>
              <ul className='flexSB process02'>
                <li className='flexCol_C'>
                  <div className='process_item'>
                    <span className='num'>STEP 4</span>
                    <strong className='tit'>인테리어 시공</strong>
                    <img src={Psicon_4} alt='Psicon-4' />
                  </div>
                  <div className='arrow_bt MTREM1'>
                    <img src={icon_process3} alt='화살표' />
                  </div>
                </li>
                <li className='arrow'></li>
                <li className='flexCol_C'></li>
                <li className='arrow'></li>
                <li className='flexCol_C web08'>
                  <div className='process_item'>
                    <span className='num'>STEP 8</span>
                    <strong className='tit'>
                      오픈 및<br />
                      경영지도 관리
                    </strong>
                    <img src={Psicon_8} alt='Psicon-8' />
                  </div>
                  <div className='arrow_bt MTREM1'>
                    <img src={icon_process4} alt='화살표' />
                  </div>
                </li>
              </ul>
              <ul className='flexSB process03'>
                <li className='flexCol_C'>
                  <div className='process_item'>
                    <span className='num'>STEP 5</span>
                    <strong className='tit'>
                      점주 교육
                      <br />
                      <small>(3박4일 소요)</small>
                    </strong>
                    <img src={Psicon_5} alt='Psicon-5' />
                  </div>
                </li>
                <li className='arrow'>
                  <img src={icon_process2} alt='화살표' />
                </li>
                <li className='flexCol_C'>
                  <div className='process_item'>
                    <span className='num'>STEP 6</span>
                    <strong className='tit'>오픈 준비</strong>
                    <img src={Psicon_6} alt='Psicon-6' />
                  </div>
                </li>
                <li className='arrow'>
                  <img src={icon_process2} alt='화살표' />
                </li>
                <li className='flexCol_C'>
                  <div className='process_item'>
                    <span className='num'>STEP 7</span>
                    <strong className='tit'>테스트 운영</strong>
                    <img src={Psicon_7} alt='Psicon-7' />
                  </div>
                </li>
                <li className='flexCol_C moblie08'>
                  <div className='process_item'>
                    <span className='num'>STEP 8</span>
                    <strong className='tit'>
                      오픈 및<br />
                      경영지도 관리
                    </strong>
                    <img src={Psicon_8} alt='Psicon-8' />
                  </div>
                  <div className='arrow_bt MTREM1'>
                    <img src={icon_process4} alt='화살표' />
                  </div>
                </li>
              </ul>
            </div>
            <div id='processMo'>
              <ul className='flexSB process01'>
                <li className='flexCol_C'>
                  <div className='process_item'>
                    <span className='num'>STEP 1</span>
                    <strong className='tit'>
                      가맹점 개설 상담
                      <br />및 경영 안내
                    </strong>
                    <img src={Psicon_1} alt='Psicon-1' />
                  </div>
                </li>
                <li className='flexCol_C'>
                  <div className='process_item'>
                    <span className='num'>STEP 2</span>
                    <strong className='tit'>
                      상권분석
                      <br />및 매장선택
                    </strong>
                    <img src={Psicon_2} alt='Psicon-2' />
                  </div>
                </li>
                <li className='flexCol_C'>
                  <div className='process_item'>
                    <span className='num'>STEP 3</span>
                    <strong className='tit'>가맹계약 체결</strong>
                    <img src={Psicon_3} alt='Psicon-3' />
                  </div>
                </li>
                <li className='flexCol_C'>
                  <div className='process_item'>
                    <span className='num'>STEP 4</span>
                    <strong className='tit'>인테리어 시공</strong>
                    <img src={Psicon_4} alt='Psicon-4' />
                  </div>
                </li>
                <li className='flexCol_C'>
                  <div className='process_item'>
                    <span className='num'>STEP 5</span>
                    <strong className='tit'>
                      점주 교육
                      <br />
                      <small>(3박4일 소요)</small>
                    </strong>
                    <img src={Psicon_5} alt='Psicon-5' />
                  </div>
                </li>
                <li className='arrow'>
                  <img src={icon_process2} alt='화살표' />
                </li>
                <li className='flexCol_C'>
                  <div className='process_item'>
                    <span className='num'>STEP 6</span>
                    <strong className='tit'>오픈 준비</strong>
                    <img src={Psicon_6} alt='Psicon-6' />
                  </div>
                </li>
                <li className='arrow'>
                  <img src={icon_process2} alt='화살표' />
                </li>
                <li className='flexCol_C'>
                  <div className='process_item'>
                    <span className='num'>STEP 7</span>
                    <strong className='tit'>테스트 운영</strong>
                    <img src={Psicon_7} alt='Psicon-7' />
                  </div>
                </li>
                <li className='flexCol_C'>
                  <div className='process_item'>
                    <span className='num'>STEP 8</span>
                    <strong className='tit'>
                      오픈 및<br />
                      경영지도 관리
                    </strong>
                    <img src={Psicon_8} alt='Psicon-8' />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* StartupBox6 창업 비용 */}
      <div className='StartupBox6'>
        <div className='headerTitle'>
          <span className='Titleicon'>창업 비용</span>
        </div>
        <div className='StartInner'>
          <div className=''>
            <div className='S-TitleBox'>
              <div className='SubconT-1'>
                성공적인 창업을 위한 첫걸음! <br />
                예상 비용을 확인하고 맞춤 상담을 받아보세요.
              </div>
            </div>
            <div className='table_cost_warp'>
              <table className='table_cost'>
                <thead className='bg_darkgray'>
                  <tr>
                    <th>항목</th>
                    <th>금액(기존)</th>
                    <th>최종금액(VAT별도)</th>
                    <th>내용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>가맹비</td>
                    <td className='tc'>500만원</td>
                    <td className='tr color_red P_3'>0원</td>
                    <td>브랜드/매뉴얼 사용비용(3년 계약시 지원)</td>
                  </tr>
                  <tr>
                    <td>로열티</td>
                    <td className='tc'></td>
                    <td className='tr color_red P_3'>0원</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>교육비</td>
                    <td className='tc'>150만원</td>
                    <td className='tr color_red P_3'>0원</td>
                    <td>조리 및 매뉴얼 교육 (3박4일)</td>
                  </tr>
                  <tr>
                    <td>감리비</td>
                    <td className='tc'></td>
                    <td className='tr color_red P_3'>0원</td>
                    <td>도면 제작 및 인테리어 감리비용</td>
                  </tr>
                  <tr>
                    <td>보증금</td>
                    <td className='tc'></td>
                    <td className='tr P_3'>200만원</td>
                    <td>계약 이행을 보증 (계약 종료시 반환)</td>
                  </tr>
                  <tr>
                    <td>인테리어 (10평 기준)</td>
                    <td className='tc'></td>
                    <td className='tr P_3'>1,500만원</td>
                    <td>평당150만원(철거공사, 천정공사, 외부 닥트공사 별도)</td>
                  </tr>
                  <tr>
                    <td>주방기기&amp;기기/의탁자</td>
                    <td className='tc'></td>
                    <td className='tr P_3'>700만원</td>
                    <td rowSpan='3'>매장 상황에 따라 변동 가능성 있음</td>
                  </tr>
                  <tr>
                    <td>배달/판촉</td>
                    <td className='tc'></td>
                    <td className='tr P_3'>300만원</td>
                  </tr>
                  <tr>
                    <td>간판/사인물</td>
                    <td className='tc'></td>
                    <td className='tr P_3'>269만원</td>
                  </tr>
                  <tr>
                    <td>물품지원</td>
                    <td className='tc'></td>
                    <td className='tr P_3'>150만원</td>
                    <td>원부자재 및 집기류, 판촉 행사 비용 지원</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th className='ftw700 tl'>합계</th>
                    <td className='tc ftw900'></td>
                    <td className='tc ftw900'>
                      약 <span className='color_red'>2,969</span>만원
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className='refer'>
              <ul className='flexCol_C'>
                <li>*위 금액은 점포 입지조건 또는 지역에 따라 변경됩니다.(10평 매장 기준)</li>
              </ul>
            </div>
            <div className='NeneCsinfo'>
              <div className='Cscon'>
                <div className='Title'>영업본부 02-6919-3028</div>
                <a href='mailto:cs@nenechicken.com' className='Email' title='메일 작성'>
                  cs@nenechicken.com
                </a>
              </div>
            </div>
            <div className='BrandLine'></div>
            <div className='SubInner'>
              <div className='S-TitleBox'>
                <div className='SubconT-tit'>
                  네네치킨 맞춤형 <span className='color_red'>복합매장</span> 설치
                </div>
                <div className='SubconT-1'>
                  영업환경에 따라 상권/입지에 적합한 <br />
                  맞춤형 복합매장을 개설을 지원합니다.
                </div>
                <div className='SubconT-img'>
                  <img className='nenecost1 on' src={img_cost1} alt='네네치킨/네네피자' />
                  <img className='nenecost2' src={img_cost2} alt='네네치킨/봉구스밥버거' />
                </div>
              </div>
              <div className='table_cost_warp' id='NENECOST1'>
                <table className='table_cost'>
                  <thead>
                    <tr>
                      <th>항 목</th>
                      <th>금액(기존)</th>
                      <th>최종금액(VAT별도)</th>
                      <th>비 고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>가입비</td>
                      <td className='tc'>500만원</td>
                      <td className='tr color_red  P_3'>0원</td>
                      <td>브랜드/매뉴얼 사용 비용(3년 계약 시 지원)</td>
                    </tr>
                    <tr>
                      <td>교육비</td>
                      <td className='tc'>300만원</td>
                      <td className='tr P_3'>150만원</td>
                      <td style={{ padding: '.625rem 0 1rem 3rem', lineHeight: '1.5' }}>
                        네네치킨 교육비 면제,
                        <br />
                        피자 조리 및 매뉴얼 교육 (2박3일)
                      </td>
                    </tr>
                    <tr>
                      <td>보증금</td>
                      <td className='tc'></td>
                      <td className='tr P_3'>300만원</td>
                      <td>계약 이행을 보증 (계약 종료 시 반환)</td>
                    </tr>
                    <tr>
                      <td>인테리어(12평 기준)</td>
                      <td className='tc'></td>
                      <td className='tr P_3'>1,800만원</td>
                      <td>평당 150만원 추가 부담</td>
                    </tr>
                    <tr>
                      <td>배달/판촉</td>
                      <td className='tc'></td>
                      <td className='tr P_3'>362만원</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>간판/사인물</td>
                      <td className='tc'></td>
                      <td className='tr P_3'>350만원</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>주방기기&amp;집기류</td>
                      <td className='tc'></td>
                      <td className='tr P_3'>2,471만원</td>
                      <td></td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className='ftw700 tl'>합계</th>
                      <td className='tc ftw900'></td>
                      <td className='tc ftw900'>
                        약 <span className='color_red'>2,969</span>만원
                      </td>
                      <td className='ftw700 tl'></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className='table_cost_warp' id='NENECOST2' style={{ display: 'none' }}>
                <table className='table_cost'>
                  <thead>
                    <tr>
                      <th>항 목</th>
                      <th>금액(기존)</th>
                      <th>최종금액(VAT별도)</th>
                      <th>비 고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>가입비</td>
                      <td className='tc'>500만원</td>
                      <td className='tr color_red  P_3'>0원</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>교육비</td>
                      <td className='tc'>300만원</td>
                      <td className='tr P_3'>150만원</td>
                      <td style={{ padding: '.625rem 0 1rem 3rem', lineHeight: '1.5' }}>
                        네네치킨 교육비 면제,
                        <br />
                        봉구스밥버거 조리 및 매뉴얼 교육 (3박4일)
                      </td>
                    </tr>
                    <tr>
                      <td>보증금</td>
                      <td className='tc'></td>
                      <td className='tr P_3'>500만원</td>
                      <td>계약 이행을 보증 (계약 종료 시 반환)</td>
                    </tr>
                    <tr>
                      <td>인테리어(10평 기준)</td>
                      <td className='tc'></td>
                      <td className='tr P_3'>1,500만원</td>
                      <td>평당 150만원 추가 부담</td>
                    </tr>
                    <tr>
                      <td>간판/사인물</td>
                      <td className='tc'></td>
                      <td className='tr P_3'>590만원</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>주방기기&amp;집기류</td>
                      <td className='tc'></td>
                      <td className='tr P_3'>640만원</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>기타</td>
                      <td className='tc'></td>
                      <td className='tr P_3'>120만원</td>
                      <td></td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className='ftw700 tl'>합계</th>
                      <td className='tc ftw900'></td>
                      <td className='tc ftw900'>
                        <span className='color_red'>3,500</span>만원
                      </td>
                      <td className='ftw700 tl'></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className='refer'>
                <ul className='flexCol_C'>
                  <li>
                    *위 금액은 점포 개설 시 평균치를 기준으로 한 자료로, 표기된 금액은 점포구조 및
                    공사기간, 물가변동 사항에 따라 변경 될 수 있습니다.
                  </li>
                  <li>
                    (<strong>점포환경에 따른 별도공사</strong> : 외부공사, 소방관련공사, 전기증설,
                    철거공사, 화장실 신설공사, 덕트외부설치공사, 가스배관공사 등)
                  </li>
                </ul>
              </div>
            </div>
            <div className='NeneCsinfo'>
              <div className='Cscon'>
                <div className='Title'>영업본부 02-6919-3028</div>
                <a href='mailto:cs@nenechicken.com' className='Email' title='메일 작성'>
                  cs@nenechicken.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduceBrand;

<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>南山人壽</title>
	<link rel="stylesheet" href="${commonResourcePath}/js/needanalysis/Scripts/plugin/ion-rangeSlider/css/ion.rangeSlider.css">
	<link rel="stylesheet" href="${commonResourcePath}/js/needanalysis/Scripts/plugin/datepicker/datepicker.css?CSS=20160420_01">
	<link rel="stylesheet" href="${commonResourcePath}/js/needanalysis/Content/css/style.css?CSS=20160420_01">
</head>
<body>
	<div class="l-body">
		<header class="l-header">
			<h1 class="logo">
				<a href="http://www.nanshanlife.com.tw/" class="link hide-text" target="_blank">
					<em>南山人壽</em>
				</a>
			</h1>
			<div class="insurance-wrap">
				<em class="wording">你需要的保障 /</em>
				<div class="cost">
					<span class="dollar">$ <b>1,234,567,890</b></span>
				</div>
			</div>
		</header>
		<div class="l-main is-quest">
			<div class="l-content index">
				<h2 class="page-title hide-text">這是個殘酷中帶著促咪的小測驗，評估你的人生需要多少保障才足夠？</h2>
				<em class="slogan hide-text">只要6分鐘，就能護一生</em>
				<div class="btn-area">
					<button class="btn-notify jq-lightbox">
						<em class="hide-text">個資告知暨同意事項</em>
					</button>
					<button class="btn-check b-middle jq-required">
						<em class="hide-text">同意</em>
					</button>
					<button class="btn-check disagree b-middle jq-checkbox">
						<em class="hide-text">不同意</em>
					</button>
				</div>
				<button class="btn-start hide-text jq-start"><em>開始遊戲</em></button>
				<i class="icon-flying-bird"></i>
				<i class="icon-flying-bird reverse"></i>
			</div>
			<div class="l-content quest quest-1" data-quest="1" data-gender="">
				<div class="stage cut-1">
					<ul class="choice-list jq-transition" data-first="true" data-select="">
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="girl">
								<em class="hide-text">女</em>
							</button>
							<div class="image-wrap girl"></div>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="boy">
								<em class="hide-text">男</em>
							</button>
							<div class="image-wrap boy"></div>
						</li>
					</ul>
					<h2 class="quest-title hide-text">
						<em>你的性別？</em>
					</h2>
				</div>
				<div class="stage cut-2">
					<ul class="choice-list jq-transition" data-first="true" data-select="" data-reverse="">
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="single">
								<em class="hide-text">單身</em>
							</button>
							<div class="image-wrap girl"></div>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="merried">
								<em class="hide-text">已婚</em>
							</button>
							<div class="image-wrap boy"></div>
						</li>
					</ul>
					<h2 class="quest-title hide-text">
						<em>你婚了嗎？</em>
					</h2>
				</div>
				<div class="stage cut-3">
					<div class="choice-list jq-transition">
						<div class="image-wrap" data-age="young"></div>
						<div class="range-slider">
							<input class="slider-picker age-slider">
						</div>
					</div>
					<h2 class="quest-title hide-text">
						<em>你的年齡？</em>
					</h2>
				</div>
				<div class="stage cut-4">
					<ul class="kids-selector">
						<li class="list">
							<em class="desc">學齡前(0-3歲)</em>
							<div class="range-slider jq-childList" data-age="2">
								<input class="slider-picker amount-slider" data-age="baby">
							</div>
						</li>
						<li class="list">
							<em class="desc">幼稚園(4-6歲)</em>
							<div class="range-slider jq-childList" data-age="5">
								<input class="slider-picker amount-slider" data-age="kindergarten">
							</div>
						</li>
						<li class="list">
							<em class="desc">國小(7-12歲)</em>
							<div class="range-slider jq-childList" data-age="10">
								<input class="slider-picker amount-slider" data-age="elementary">
							</div>
						</li>
						<li class="list">
							<em class="desc">國中(13-15歲)</em>
							<div class="range-slider jq-childList" data-age="14">
								<input class="slider-picker amount-slider" data-age="juniorHigh">
							</div>
						</li>
						<li class="list">
							<em class="desc">高中(16-18歲)</em>
							<div class="range-slider jq-childList" data-age="17">
								<input class="slider-picker amount-slider" data-age="seniorHigh">
							</div>
						</li>
						<li class="list">
							<em class="desc">大學(19-22歲)</em>
							<div class="range-slider jq-childList" data-age="20">
								<input class="slider-picker amount-slider" data-age="collage">
							</div>
						</li>
						<li class="list">
							<em class="desc">研究所以上</em>
							<div class="range-slider jq-childList" data-age="23">
								<input class="slider-picker amount-slider" data-age="institute">
							</div>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="dinky">
								<em class="desc hide-text">沒有小孩</em>
							</button>
						</li>
					</ul>
					<h2 class="quest-title hide-text">
						<em>你有小孩嗎？</em>
					</h2>
					<div class="kids-pool">
						<ul class="institute">
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
						</ul>
						<ul class="collage">
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
						</ul>
						<ul class="seniorHigh">
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
						</ul>
						<ul class="juniorHigh">
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
						</ul>
						<ul class="elementary">
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
						</ul>
						<ul class="kindergarten">
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
						</ul>
						<ul class="baby">
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
						</ul>
						<ul class="dog">
							<li class="doll"></li>
						</ul>
					</div>
				</div>
				<div class="stage cut-5">
					<ul class="choice-list jq-transition">
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="1" data-meta="young">
								<em class="hide-text">社會新鮮人</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="2" data-meta="new-couple">
								<em class="hide-text">新婚一年內</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="3" data-meta="pregnant">
								<em class="hide-text">懷孕中</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="4" data-meta="near-retired">
								<em class="hide-text">計畫退休</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="5" data-meta="retired">
								<em class="hide-text">已退休</em>
							</button>
						</li>
					</ul>
					<ul class="image-wrap">
						<li class="doll" data-meta=""></li>
					</ul>
					<h2 class="quest-title hide-text">
						<em>你正處於哪個人生階段？</em>
						<em>可複選 非必填</em>
					</h2>
				</div>
				<div class="stage cut-6">
					<div class="choice-list jq-transition">
						<div class="image-wrap" data-level=""></div>
						<div class="range-slider">
							<input class="slider-picker income-slider">
						</div>
					</div>
					<h2 class="quest-title hide-text">
						<em>不好意思，你的年收入？</em>
					</h2>
				</div>
				<div class="stage cut-7">
					<div class="image-wrap">
						<span class="money-bag back"></span>
						<span class="bird-left"></span>
						<span class="bird-right"></span>
						<span class="money-bag front"></span>
						<span class="money-erupt"></span>
						<span class="star left"></span>
						<span class="star bottom"></span>
						<span class="star bottom-right"></span>
						<span class="star right"></span>
						<span class="star top-right"></span>
					</div>
					<h2 class="quest-title hide-text">
						<em>每天睜開眼睛就要花錢，立馬診斷你的生活開銷吧！</em>
					</h2>
				</div>
				<div class="stage cut-8">
					<div class="image-wrap" data-level=""></div>
					<ul class="expenditure-selector">
						<li class="list">
							<em class="desc">每月必要支出?(食、衣、住、行、育、樂、孝親)</em>
							<div class="range-slider is-small jq-basicPay">
								<input class="slider-picker expend-slider" data-values="0,0.5,0.8,1,1.3,1.5,1.8,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,15,20,25,30" data-max="30" data-range="0,0.5,1.5,4,8" data-liability="0,0">
							</div>
						</li>
						<li class="list child-edu">
							<em class="desc">所有子女到大學畢業需要多少教育費用？</em>
							<div class="range-slider is-small jq-liftNeed">
								<input class="slider-picker expend-slider edu-cost" data-values="0,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000" data-max="2000" data-range="0,50,500,1000" data-liability="0,0">
							</div>
						</li>
						<li class="list">
							<em class="desc">還背著多少貸款金額 ?(房貸+車貸+學貸+其他借款)</em>
							<div class="range-slider is-small jq-liftNeed">
								<input class="slider-picker expend-slider" data-values="0,10,20,30,40,50,75,100,150,200,250,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000" data-max="2000" data-range="0,10,150,1000" data-liability="0,0">
							</div>
						</li>
					</ul>
					<h2 class="quest-title hide-text">
						<em>日常支出支多少</em>
					</h2>
				</div>
				<div class="stage cut-9">
					<div class="image-wrap" data-level=""></div>
					<ul class="expenditure-selector">
						<li class="list">
							<em class="desc">你對於緊急預備金的理想數字是多少？(如疾病、意外事故費用)</em>
							<div class="range-slider is-small jq-liftNeed">
								<input class="slider-picker expend-slider" data-values="0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200" data-max="200" data-range="0,10,100" data-liability="0,0">
							</div>
						</li>
						<li class="list">
							<em class="desc">若不幸身故，你的壽險規劃希望讓家人維持同水平的生活幾年？</em>
							<div class="range-slider is-small jq-liftNeedYear">
								<input class="slider-picker expend-slider" data-values="0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30" data-max="30" data-range="0,1,6,16" data-liability="0,0">
							</div>
						</li>
					</ul>
					<h2 class="quest-title hide-text">
						<em>日常支出支多少</em>
					</h2>
				</div>
				<div class="stage cut-10">
					<ul class="choice-list jq-transition">
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="1" data-meta="healthcare">
								<em class="hide-text">健保房</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="2" data-meta="double">
								<em class="hide-text">雙人房</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="3" data-meta="single">
								<em class="hide-text">單人房</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="4" data-meta="principal">
								<em class="hide-text">特等房</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="5" data-meta="vip">
								<em class="hide-text">VIP房</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="6" data-meta="best">
								<em class="hide-text">頂級房</em>
							</button>
						</li>
					</ul>
					<div class="image-wrap" data-meta="" data-reverse=""></div>
					<h2 class="quest-title hide-text">
						<em>誰都不想破病，但誰能不破病？</em>
					</h2>
					<h3 class="sub-title hide-text">
						<em>如果真的有住院治療的需求時，你希望在哪種醫護空間療養？</em>
					</h3>
				</div>
				<div class="stage cut-11">
					<ul class="choice-list jq-transition">
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="1" data-meta="nhi">
								<em class="hide-text">使用健保資源即可能不掏腰包最好！</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="2" data-meta="self-provided">
								<em class="hide-text">如果是病情需要的自費項目，就花吧！</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="3" data-meta="best">
								<em class="hide-text">追求最好的醫療品質，即使是昂貴的自費項目也通通要！</em>
							</button>
						</li>
					</ul>
					<div class="image-wrap" data-meta="">
						<div class="bed"></div>
						<div class="function" data-selection="" data-reverse=""></div>
					</div>
					<h2 class="quest-title hide-text">
						<em>誰都不想破病，但誰能不破病？</em>
					</h2>
					<h3 class="sub-title hide-text">
						<em>在住院治療過程，有關於「自費項目」你的看法是什麼呢？</em>
					</h3>
				</div>
				<div class="stage cut-12">
					<ul class="choice-list jq-transition">
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="1" data-meta="no-need">
								<em class="hide-text">無需收入補償，只要基本醫療費用即可</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="2" data-meta="1y">
								<em class="hide-text">基本醫療費用+好好療養1年</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="3" data-meta="3y">
								<em class="hide-text">基本醫療費用+好好療養3年</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="4" data-meta="5y">
								<em class="hide-text">基本醫療費用+好好療養5年以上</em>
							</button>
						</li>
					</ul>
					<div class="image-wrap">
						<div class="agent-f"></div>
						<div class="function" data-selection=""></div>
						<div class="patients"></div>
					</div>
					<h2 class="quest-title hide-text">
						<em>誰都不想破病，但誰能不破病？</em>
					</h2>
					<h3 class="sub-title hide-text">
						<em>如果不幸罹患重大疾病導致無法工作，幾年的療養收入補償最符合你的期待？</em>
					</h3>
				</div>
				<div class="stage cut-13">
					<ul class="choice-list jq-transition">
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="1"  data-meta="3y">
								<em class="hide-text">3年</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="2"  data-meta="5y">
								<em class="hide-text">5年</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="3"  data-meta="7y">
								<em class="hide-text">7年</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="4"  data-meta="10y">
								<em class="hide-text">10年</em>
							</button>
						</li>
					</ul>
					<div class="image-wrap">
						<div class="agent-f"></div>
						<div class="function" data-selection=""></div>
						<div class="agent-m"></div>
						<div class="envelopes" data-selection=""></div>
						<div class="patients"></div>
					</div>
					<h2 class="quest-title hide-text">
						<em>誰都不想破病，但誰能不破病？</em>
					</h2>
					<h3 class="sub-title hide-text">
						<em>如果不幸意外或疾病導致傷殘，希望有幾年的療養收入補償?</em>
					</h3>
				</div>
				<div class="stage cut-14">
					<ul class="choice-list jq-transition">
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="1"  data-meta="family">
								<em class="hide-text">家人自行照顧</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="2" data-meta="day-care">
								<em class="hide-text">白天聘請專人照顧</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="3" data-meta="full-care">
								<em class="hide-text">全天聘請專人照顧</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="4" data-meta="facility">
								<em class="hide-text">入住療養機構</em>
							</button>
						</li>
					</ul>
					<div class="image-wrap" data-meta="" data-reverse="">
						<div class="time"></div>
						<div class="care" data-selection=""></div>
						<div class="agent-f"></div>
						<div class="function" data-selection=""></div>
						<div class="agent-m"></div>
						<div class="envelopes" data-selection=""></div>
						<div class="patients"></div>
					</div>
					<h2 class="quest-title hide-text">
						<em>誰都不想破病，但誰能不破病？</em>
					</h2>
					<h3 class="sub-title hide-text">
						<em>如果不幸意外或疾病導致傷殘，希望有幾年的療養收入補償?</em>
					</h3>
				</div>
				<div class="stage cut-15">
					<ul class="choice-list jq-transition">
						<li class="list">
							<em class="question">住院日額</em>
							<div class="image-wrap"></div>
							<div class="range-slider jq-mc1Need is-small">
								<input class="slider-picker medical-slider" data-values="0,500,1000,1500,2000,2500,3000,3500,4000,4500,5000,5500,6000,6500,7000,7500,8000" data-max="8000">
							</div>
							<em class="desc">依照住院期間的長短提供每日定額給付保障</em>
						</li>
						<li class="list">
							<em class="question">實支實付</em>
							<div class="image-wrap"></div>
							<div class="range-slider jq-mc2Need is-small">
								<input class="slider-picker medical-slider" data-values="0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100" data-max="100">
							</div>
							<em class="desc">保障住院期間各種醫療雜費限額</em>
						</li>
						<li class="list">
							<em class="question">手術醫療</em>
							<div class="image-wrap"></div>
							<div class="range-slider jq-mc3Need is-small">
								<input class="slider-picker medical-slider" data-values="0,500,1000,1500,2000,2500,3000,3500,4000,4500,5000,5500,6000" data-max="6000">
							</div>
							<em class="desc">此金額將依據手術部位與項目乘上1-80倍，整筆給付靈活運用</em>
						</li>
					</ul>
					<h2 class="quest-title hide-text">
						<em>依據以上回答建議你7項醫療項目保障額度如下 你也可手動調整成理想的金額!</em>
					</h2>
				</div>
				<div class="stage cut-16">
					<ul class="choice-list jq-transition">
						<li class="list">
							<em class="question">重大疾病</em>
							<div class="image-wrap"></div>
							<div class="range-slider jq-mc4Need is-small">
								<input class="slider-picker medical-slider" data-values="0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,150,200,250,300,350,400,450,500,550,600" data-max="600">
							</div>
							<em class="desc">罹患重大疾病(如心肌梗塞、腦中風、癌症…)時一次整筆領取自由運用於醫療、看護或生活的費用</em>
						</li>
						<li class="list">
							<em class="question">癌症醫療</em>
							<div class="image-wrap"></div>
							<div class="range-slider jq-mc5Need is-small">
								<input class="slider-picker medical-slider" data-values="0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,150,200,250,300,350,400,450,500,550,600" data-max="600">
							</div>
							<em class="desc">首次罹患癌症時的整筆給付讓你能放心治療</em>
						</li>
						<li class="list">
							<em class="question">意外傷殘</em>
							<div class="image-wrap"></div>
							<div class="range-slider jq-mc7Need is-small">
								<input class="slider-picker medical-slider" data-values="0,5,10,15,20,25,30,35,40,50,80,100,150,200,250,300,400,500,600,700,800,1000" data-max="1000">
							</div>
							<em class="desc">保障各種意外造成的身體損傷費用(如 : 殘廢/重大燒燙傷/骨折…)補償短期療養期間中斷的收入與持續的生活開銷</em>
						</li>
						<li class="list">
							<em class="question">長期照顧</em>
							<div class="image-wrap"></div>
							<div class="range-slider jq-mc6Need is-small">
								<input class="slider-picker medical-slider" data-values="0,5,10,15,20,25,30,35,40,50,80,100,150,200,250,300,400,500,600,700,800,1000" data-max="1000">
							</div>
							<em class="desc">面臨需要長期照顧狀態時可定期每年領取一筆扶助費用</em>
						</li>
					</ul>
				</div>
				<div class="stage cut-17">
					<div class="image-wrap"></div>
					<h2 class="quest-title hide-text">
						<em>人生沒有夢想，跟鹹魚有什麼分別？但夢想不該只停在「想」 能夠實現的人早就捲起袖口做了這個小測驗（恭喜邁開第一步！）在每個階段，設定不同的目標 現在所做的每一分準備，都將為你擺脫鹹魚人生</em>
					</h2>
				</div>
				<div class="stage cut-18">
					<ul class="choice-list jq-transition">
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="2" data-meta="retire">
								<em class="hide-text">退休基金</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="3" data-meta="dream">
								<em class="hide-text">夢想基金</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="1" data-meta="education">
								<em class="hide-text">子女教育基金</em>
							</button>
						</li>
					</ul>
					<div class="image-wrap" data-meta="" data-reverse=""></div>
					<h2 class="quest-title hide-text">
						<em>你想優先準備？</em>
					</h2>
				</div>
				<div class="stage cut-19">
					<ul class="retire-selector jq-transition">
						<li class="list">
							<em class="desc">希望幾歲退休？</em>
							<div class="range-slider is-small">
								<input class="slider-picker retire-age-slider" data-max="80" data-range="40,56,70" data-liability="40,40">
							</div>
						</li>
						<li class="list">
							<em class="desc">退休後期望的每月基本收入？</em>
							<div class="range-slider is-small">
								<input class="slider-picker retire-income-slider" data-values="0,0.5,0.8,1,1.3,1.5,1.8,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,15,20,25,30" data-max="30" data-range="0,0.5,2,7" data-liability="0,0">
							</div>
						</li>
						<li class="list">
							<em class="desc">目前已準備？</em>
							<div class="range-slider is-small">
								<input class="slider-picker retire-prepare-slider" data-values="0,20,40,60,80,100,120,140,160,180,200,250,300,350,400,450,500,600,700,800,900,1000,1200,1400,1600,1800,2000" data-max="2000" data-range="0,20,100,200,500,1000" data-liability="0,0">
							</div>
						</li>
					</ul>
					<div class="image-wrap">
						<div class="doll" data-level=""></div>
						<div class="dream" data-level=""></div>
						<div class="prepare" data-level=""></div>
					</div>
					<h2 class="quest-title hide-text">
						<em>來來來！了解如何無痛退休！</em>
					</h2>
				</div>
				<div class="stage cut-20">
					<div class="image-wrap" data-kids="">
						<div class="college" data-level=""></div>
						<ul class="kids-pool">
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
						</ul>
						<div class="money" data-level=""></div>
					</div>
					<ul class="education-selector">
						<li class="list">
							<em class="desc">所有子女到大學畢業需要多少教育費用?</em>
							<div class="range-slider is-small">
								<input class="slider-picker edu-cost-slider" data-values="0,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000" data-max="2000" data-range="0,500,1000" data-liability="0,0">
							</div>
						</li>
						<li class="list">
							<em class="desc">目前已準備？</em>
							<div class="range-slider is-small">
								<input class="slider-picker edu-prepare-slider" data-values="0,20,40,60,80,100,120,140,160,180,200,250,300,350,400,450,500,600,700,800,900,1000,1200,1400,1600,1800,2000" data-max="2000" data-range="0,20,100,200,1000" data-liability="0,0">
							</div>
						</li>
					</ul>
					<h2 class="quest-title hide-text">
						<em>給兒女無憂的求學時光 是為人父母的心願</em>
					</h2>
				</div>
				<div class="stage cut-21">
					<ul class="choice-list jq-transition chosen-boy">
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="buycar" data-range="0,150,300,500,1000">
								<em class="hide-text">購車</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="buyhouse" data-range="0,500,1000">
								<em class="hide-text">購屋</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="study" data-range="0,50,150,300,500,750,1000">
								<em class="hide-text">留(遊)學</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="job" data-range="0,50,500,1000">
								<em class="hide-text">創業</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="travel" data-range="0,50,150,300,500,750,1000">
								<em class="hide-text">環遊世界</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="marry" data-range="0,50,500,750,1000">
								<em class="hide-text">結婚基金</em>
							</button>
						</li>
					</ul>
					<div class="image-wrap" data-meta="" data-reverse="">
						<div class="drop"></div>
						<div class="doll"></div>
					</div>
					<h2 class="quest-title hide-text">
						<em>用這桶金，槓掉一個夢想</em>
					</h2>
				</div>
				<div class="stage cut-22">
					<ul class="choice-list jq-transition chosen-boy" data-selection="">
						<li class="list wish">
							<em class="hide-text">你對於夢想基金的期望是?</em>
							<div class="selectbox">
								<select class="selection jq-dream">
									<option value="">請選擇</option>
									<option value="one-time">一次通通領</option>
									<option value="per-year">分次年年領</option>
								</select>
							</div>
						</li>
						<li class="list one-time-content">
							<div class="group b-middle">
								<em class="prefix hide-text">預計</em>
								<div class="selectbox is-small">
									<select class="selection">
										<option value=""></option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
										<option value="9">9</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
										<option value="19">19</option>
										<option value="20">20</option>
									</select>
								</div>
								<em class="postfix hide-text">年後領取一筆</em>
							</div>
							<div class="range-slider is-small">
								<input class="slider-picker basic-slider one-time-slider" data-values="0,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000,1200,1400,1600,1800,2000" data-max="2000" data-range="" data-liability="0,0">
							</div>
						</li>
						<li class="list">
							<em class="desc hide-text">目前已準備？</em>
							<div class="range-slider is-small">
								<input class="slider-picker fund-prepare-slider" data-values="0,20,40,60,80,100,120,140,160,180,200,250,300,350,400,450,500,600,700,800,900,1000,1200,1400,1600,1800,2000" data-max="2000" data-range="0,20,60,100,200,500,1000" data-liability="0,0">
							</div>
						</li>
						<li class="list per-year-content">
							<div class="group b-middle">
								<em class="prefix hide-text">預計</em>
								<div class="selectbox is-small">
									<select class="selection">
										<option value=""></option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
										<option value="9">9</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
										<option value="19">19</option>
										<option value="20">20</option>
									</select>
								</div>
								<em class="postfix hide-text">年後年年領取</em>
							</div>
							<div class="range-slider is-small">
								<input class="slider-picker basic-slider per-year-slider" data-values="0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100" data-max="100" data-range="0,5,15,30,50,75,90" data-liability="0,0">
							</div>
						</li>
						<li class="list">
							<em class="desc hide-text">目前已準備？</em>
							<div class="range-slider is-small">
								<input class="slider-picker fund-prepare-slider" data-values="0,20,40,60,80,100,120,140,160,180,200,250,300,350,400,450,500,600,700,800,900,1000,1200,1400,1600,1800,2000" data-max="2000" data-range="0,20,60,100,200,500,1000" data-liability="0,0">
							</div>
						</li>
					</ul>
					<div class="image-wrap" data-meta="" data-level="">
						<div class="drop" data-level=""></div>
						<div class="doll" data-level=""></div>
						<div class="color" data-level=""></div>
					</div>
					<h2 class="quest-title hide-text">
						<em>用這桶金，槓掉一個夢想</em>
					</h2>
				</div>
				<div class="stage cut-23">
					<ul class="choice-list jq-transition">
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="a" data-meta="labor">
								<em class="hide-text">勞保</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="b" data-meta="civil">
								<em class="hide-text">公保</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="c" data-meta="farmer">
								<em class="hide-text">農保</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-value="d" data-meta="soldier">
								<em class="hide-text">軍保</em>
							</button>
						</li>
					</ul>
					<div class="image-wrap" data-meta="" data-reverse="">
						<span class="ground"></span>
						<ul class="ani-pool">
							<li class="doll labor"></li>
							<li class="doll civil"></li>
							<li class="doll farmer"></li>
							<li class="doll soldier"></li>
						</ul>
					</div>
					<h2 class="quest-title hide-text">
						<em>最後檢查你的裝備</em>
					</h2>
				</div>
				<div class="stage cut-24">
					<div class="respond-wrap jq-transition" data-meta="">
						<ul class="respond-area labor">
							<li class="list b-middle">
								<em class="money hide-text">月投保薪資：</em>
								<div class="selectbox is-large">
									<select class="selection">
										<option value=""></option>
										<option value="20008">20,008元</option>
										<option value="20100">20,100元</option>
										<option value="21000">21,000元</option>
										<option value="21900">21,900元</option>
										<option value="22800">22,800元</option>
										<option value="24000">24,000元</option>
										<option value="25200">25,200元</option>
										<option value="26400">26,400元</option>
										<option value="27600">27,600元</option>
										<option value="28800">28,800元</option>
										<option value="30300">30,300元</option>
										<option value="31800">31,800元</option>
										<option value="33300">33,300元</option>
										<option value="34800">34,800元</option>
										<option value="36300">36,300元</option>
										<option value="38200">38,200元</option>
										<option value="40100">40,100元</option>
										<option value="42000">42,000元</option>
										<option value="43900">43,900元</option>
										<option value="45800">45,800元</option>
									</select>
								</div>
							</li>
							<li class="list b-middle">
								<em class="seniority hide-text">年資</em>
								<input type="text" class="inputbox ins-year is-small jq-length" value="" maxlength="2">
								<em class="unit hide-text">年</em>
							</li>
							<li class="list b-middle jq-check-wrap">
								<button class="btn-check jq-checkbox" data-value="1" data-meta="new">
									<em class="hide-text">新制</em>
								</button>
								<button class="btn-check jq-checkbox" data-value="2" data-meta="old">
									<em class="hide-text">舊制</em>
								</button>
							</li>
							<li class="list b-middle"><em class="add-ins hide-text">商業保險部分，也可以加入其他非南山保單</em></li>
						</ul>
						<ul class="respond-area civil">
							<li class="list b-middle">
								<em class="money hide-text">本俸：</em>
								<label for="" class="input-style"><input type="text" class="inputbox is-large jq-length" value="" maxlength="10"></label>
								<em class="unit hide-text">元</em>
							</li>
							<li class="list b-middle">
								<em class="retired hide-text">預期可領取之公保整筆退休金：</em>
								<label for="" class="input-style"><input type="text" class="inputbox is-small jq-length" value="" maxlength="4"></label>
								<em class="unit hide-text">萬元</em>
							</li>
							<li class="list b-middle"><em class="add-ins hide-text">商業保險部分，也可以加入其他非南山保單</em></li>
						</ul>
						<ul class="respond-area farmer">
							<li class="list b-middle">
								<em class="retired hide-text">預期可領取之農保整筆退休金：</em>
								<label for="" class="input-style"><input type="text" class="inputbox is-large jq-length" value="" maxlength="4"></label>
								<em class="unit hide-text">萬元</em>
							</li>
							<li class="list b-middle"><em class="add-ins hide-text">商業保險部分，也可以加入其他非南山保單</em></li>
						</ul>
						<ul class="respond-area soldier">
							<li class="list b-middle">
								<em class="money hide-text">本俸：</em>
								<label for="" class="input-style"><input type="text" class="inputbox is-large jq-length" value="" maxlength="10"></label>
								<em class="unit hide-text">元</em>
							</li>
							<li class="list b-middle">
								<em class="retired hide-text">預期可領取之軍保整筆退休金：</em>
								<label for="" class="input-style"><input type="text" class="inputbox is-small jq-length" value="" maxlength="4"></label>
								<em class="unit hide-text">萬元</em>
							</li>
							<li class="list b-middle"><em class="add-ins hide-text">商業保險部分，也可以加入其他非南山保單</em></li>
						</ul>
						<ul class="respond-area none">
							<li class="list b-middle"><em class="add-ins hide-text">商業保險部分，也可以加入其他非南山保單</em></li>
						</ul>
						<button class="btn-notify jq-ins-list">
							<em class="">進行保單健檢吧</em>
						</button>
					</div>
					<div class="image-wrap" data-meta=""></div>
					<h2 class="quest-title hide-text">
						<em>最後檢查你的裝備</em>
					</h2>
				</div>
				<div class="stage cut-ins-list">
					<h2 class="quest-title hide-text">
						<em>保單健檢時間</em>
					</h2>
					<div class="ins-wrap">
						<div class="ins-header">
							<ul class="ins-info-type">
								<li class="list">保單號碼</li>
								<li class="list">投保公司</li>
								<li class="list">投保日期</li>
								<li class="list">保險名稱</li>
								<li class="list">繳費年期</li>
								<li class="list">保障年期</li>
								<li class="list">型別</li>
								<li class="list">保額</li>
							</ul>
							<button class="btn-add jq-lightbox"><em>新增保單</em></button>
							<span class="update-time">上次更新日期/ <time>12.12.2015</time></span>
						</div>
						<div class="ins-body">
							<ul class="contract-list">
								<li class="list">
									<ul class="contract-info">
										<li class="info ins-no">1236456</li>
										<li class="info ins-co">美國國際集團</li>
										<li class="info ins-date">2013/12/12</li>
										<li class="info ins-name">XXXXXX</li>
										<li class="info ins-payment">20年</li>
										<li class="info ins-guarantee">終身</li>
										<li class="info ins-type">A型</li>
										<li class="info ins-sum">100萬</li>
									</ul>
									<button class="btn-edit jq-lightbox"><em class="hide-text">編輯保單</em></button>
									<button class="btn-delete jq-delete"><em class="hide-text">刪除保單</em></button>
								</li>
								<li class="list">
									<ul class="contract-info">
										<li class="info ins-no">1236456</li>
										<li class="info ins-co">慕尼黑再保險</li>
										<li class="info ins-date">2013/12/12</li>
										<li class="info ins-name">XXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXX</li>
										<li class="info ins-payment">20年</li>
										<li class="info ins-guarantee">終身</li>
										<li class="info ins-type">A型</li>
										<li class="info ins-sum">100萬</li>
									</ul>
									<button class="btn-edit jq-lightbox"><em class="hide-text">編輯保單</em></button>
									<button class="btn-delete jq-delete"><em class="hide-text">刪除保單</em></button>
								</li>
								<li class="list">
									<ul class="contract-info">
										<li class="info ins-no">1236456</li>
										<li class="info ins-co">全球保險集團</li>
										<li class="info ins-date">2013/12/12</li>
										<li class="info ins-name">XXXXXX</li>
										<li class="info ins-payment">20年</li>
										<li class="info ins-guarantee">終身</li>
										<li class="info ins-type">A型</li>
										<li class="info ins-sum">100萬</li>
									</ul>
									<button class="btn-edit jq-lightbox"><em class="hide-text">編輯保單</em></button>
									<button class="btn-delete jq-delete"><em class="hide-text">刪除保單</em></button>
								</li>
								<li class="list">
									<ul class="contract-info">
										<li class="info ins-no">1236456</li>
										<li class="info ins-co">保誠</li>
										<li class="info ins-date">2013/12/12</li>
										<li class="info ins-name">XXXXXX</li>
										<li class="info ins-payment">20年</li>
										<li class="info ins-guarantee">終身</li>
										<li class="info ins-type">A型</li>
										<li class="info ins-sum">100萬</li>
									</ul>
									<button class="btn-edit jq-lightbox"><em class="hide-text">編輯保單</em></button>
									<button class="btn-delete jq-delete"><em class="hide-text">刪除保單</em></button>
								</li>
								<li class="list">
									<ul class="contract-info">
										<li class="info ins-no">1236456</li>
										<li class="info ins-co">大都會人壽</li>
										<li class="info ins-date">2013/12/12</li>
										<li class="info ins-name">XXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXX</li>
										<li class="info ins-payment">20年</li>
										<li class="info ins-guarantee">終身</li>
										<li class="info ins-type">A型</li>
										<li class="info ins-sum">100萬</li>
									</ul>
									<button class="btn-edit jq-lightbox"><em class="hide-text">編輯保單</em></button>
									<button class="btn-delete jq-delete"><em class="hide-text">刪除保單</em></button>
								</li>
							</ul>
						</div>
						<div class="ins-footer">
							<a href="javascript:;" class="btn-link" target="_blank">已有保障總覽</a>
						</div>
					</div>
				</div>
				<div class="stage cut-final">
					<div class="image-wrap"></div>
					<h2 class="quest-title hide-text">
						<em>總值分析中...</em>
					</h2>
					<form class="nanForm" name="nanForm" method="post" action="/member/needanalysis/survey/do">
						<input type="hidden" class="totalData" name="totalData" value="">
					</form>
				</div>
				<ol class="step-list complete-phase-0">
					<li class="list">
						<em>基本資料</em>
					</li>
					<li class="list">
						<em>生活開銷</em>
					</li>
					<li class="list">
						<em>夢想藍圖</em>
					</li>
					<li class="list">
						<em>戰力評估</em>
					</li>
					<li class="list">
						<em>分析結果</em>
					</li>
					<li class="bg-line"></li>
					<li class="step-line"></li>
				</ol>
				<button class="btn-topic btn-prev jq-topic hide-text">
					<em>上一題</em>
				</button>
				<button class="btn-topic btn-next jq-topic hide-text">
					<em>下一題</em>
				</button>
			</div>
		</div>
		<footer class="l-footer">
			<div class="m-footer">
				<ul class="info-list">
					<li class="list"><a class="link" href="http://www.nanshanlife.com.tw/Public_web/declare.html">網站使用條款</a></li>
					<li class="list"><a class="link" href="http://www.nanshanlife.com.tw/Public_web/privacy.html">隱私權保護聲明</a></li>
					<li class="list"><small class="copyright">© 2017 Nan Shan Life Insurance Company,Ltd. All rights reserved.</small></li>
				</ul>
			</div>
		</footer>
		<div class="l-lightbox">
			<div class="m-box is-notify">
				<div class="m-box-header">
					<button class="btn-close jq-close hide-text">關閉</button>
				</div>
				<div class="m-box-body">
					<h3 class="box-title">個人資料告知及同意事項</h3>
					<p>一、南山人壽保險股份有限公司(下稱本公司)依據個人資料保護法（以下稱個資法）第八條第一項規定，向您告知下列事項，請您詳閱：本公司蒐集您的姓名、性別、年齡及您所提供其他之個人資料，係基於人身保險(包括提供保險相關資訊、產品或服務)、契約、類似契約或其他法律關係事務、消費者、客戶管理與服務、其他經營合於營業登記項目或組織章程所定之業務之目的。您的個人資料在前開蒐集目的及法令規定之保存期間內，將由本公司於合於法令規定的利用方式，於我國境內供本(分)公司及業務委外機構處理及利用。對於本公司保有您的個人資料，您得以書面方式向本公司查詢或請求閱覽、製給複製本、補充或更正、停止蒐集、處理或利用、刪除。倘您不願意提供個人資料或是提供不完全時，本公司將可能無法提供您適當之保險資訊與服務。</p>
					<p>二、本人已詳閱上述個人資料告知事項，並同意南山人壽就本人所提供之個人資料，於「個人資料保護法」所規定之範圍內，有為蒐集、處理及利用之權利。</p>
				</div>
				<div class="m-box-footer">
					<button class="btn-close jq-close">我了解了</button>
				</div>
			</div>
			<div class="m-box is-insurance">
				<div class="m-box-header">
					<button class="btn-close jq-close hide-text">關閉</button>
				</div>
				<div class="m-box-body">
					<h3 class="box-title"></h3>
					<ul class="ins-search-info">
						<li class="list">
							<div class="box-wrap b-col-6">
								<input type="text" class="inputbox ins-no" placeholder="保單號碼">
							</div>
							<div class="box-wrap b-col-6 is-select">
								<select class="selection ins-co">
									<option value="">投保公司</option>
									<option value="">安聯</option>
									<option value="">安盛</option>
									<option value="">日本生命</option>
									<option value="">美國國際集團</option>
									<option value="">商聯保險</option>
									<option value="">忠利保險</option>
									<option value="">卡地納健康</option>
									<option value="">州立農業保險</option>
									<option value="">第一生命</option>
									<option value="">慕尼黑再保險</option>
									<option value="">蘇黎士金融</option>
									<option value="">保誠</option>
									<option value="">朝日生命</option>
									<option value="">三星人壽保險</option>
									<option value="">大都會人壽</option>
									<option value="">好事達</option>
									<option value="">全球保險集團</option>
									<option value="">寶德信金融集團</option>
								</select>
							</div>
						</li>
						<li class="list">
							<div class="box-wrap b-col-12">
								<input type="text" class="inputbox ins-name jq-ins-name" placeholder="保險名稱">
								<button class="btn-search jq-search">搜尋</button>
								<ul class="similar-list jq-result">
									<li class="result">yo</li>
									<li class="result">yoooo</li>
									<li class="result">yoyoyoyo</li>
									<li class="result">yoyoyooyo</li>
									<li class="result">y</li>
									<li class="result">yo</li>
									<li class="result">yoooo</li>
									<li class="result">yoyoyoyo</li>
									<li class="result">yoyoyooyo</li>
									<li class="result">y</li>
									<li class="result">yo</li>
									<li class="result">yoooo</li>
									<li class="result">yoyoyoyo</li>
									<li class="result">yoyoyooyo</li>
									<li class="result">y</li>
									<li class="result">yo</li>
									<li class="result">yoooo</li>
									<li class="result">yoyoyoyo</li>
									<li class="result">yoyoyooyo</li>
									<li class="result">y</li>
								</ul>
							</div>
						</li>
						<li class="list">
							<div class="box-wrap b-col-6">
								<input type="text" class="inputbox ins-date datepicker" data-types="YYYY/MM/DD" data-min-date="" data-max-date="" data-width="280" placeholder="投保日期">
							</div>
							<div class="box-wrap b-col-6 is-select">
								<select class="selection ins-type">
									<option value="">型別</option>
									<option value="A型">A型</option>
									<option value="B型">B型</option>
									<option value="C型">C型</option>
									<option value="D型">D型</option>
								</select>
							</div>
						</li>
						<li class="list">
							<div class="box-wrap b-col-4 is-select">
								<select class="selection ins-payment">
									<option value="">繳費年期</option>
									<option value="1年">1年</option>
									<option value="2年">2年</option>
									<option value="3年">3年</option>
									<option value="4年">4年</option>
									<option value="5年">5年</option>
									<option value="6年">6年</option>
									<option value="7年">7年</option>
									<option value="8年">8年</option>
									<option value="9年">9年</option>
									<option value="10年">10年</option>
									<option value="11年">11年</option>
									<option value="12年">12年</option>
									<option value="13年">13年</option>
									<option value="14年">14年</option>
									<option value="15年">15年</option>
									<option value="16年">16年</option>
									<option value="17年">17年</option>
									<option value="18年">18年</option>
									<option value="19年">19年</option>
									<option value="20年">20年</option>
								</select>
							</div>
							<div class="box-wrap b-col-4 is-select">
								<select class="selection ins-guarantee">
									<option value="">保障年期</option>
									<option value="1年">1年</option>
									<option value="2年">2年</option>
									<option value="3年">3年</option>
									<option value="4年">4年</option>
									<option value="5年">5年</option>
									<option value="6年">6年</option>
									<option value="7年">7年</option>
									<option value="8年">8年</option>
									<option value="9年">9年</option>
									<option value="10年">10年</option>
									<option value="11年">11年</option>
									<option value="12年">12年</option>
									<option value="13年">13年</option>
									<option value="14年">14年</option>
									<option value="15年">15年</option>
									<option value="16年">16年</option>
									<option value="17年">17年</option>
									<option value="18年">18年</option>
									<option value="19年">19年</option>
									<option value="20年">20年</option>
									<option value="終身">終身</option>
								</select>
							</div>
							<div class="box-wrap b-col-4">
								<input type="text" class="inputbox ins-sum jq-length" maxlength="10" placeholder="保額">
							</div>
						</li>
					</ul>
				</div>
				<div class="m-box-footer">
					<button class="btn-close jq-close" data-type="confirm">確認送出</button>
				</div>
			</div>
		</div>
	</div>
	<div class="img-wrap">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/checked.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/bg-exams.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/bg-slider.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/bg-box.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/shared.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q1/girl.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q1/boy.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q1/girl-door.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q1/boy-door.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q2/ani-q2-girl.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q2/ani-q2-boy.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q3/ani-q3-girl.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q3/ani-q3-boy.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q4/ani-q4-institute.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q4/ani-q4-collage.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q4/ani-q4-seniorHigh.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q4/ani-q4-juniorHigh.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q4/ani-q4-elementary.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q4/ani-q4-kindergarten.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q4/ani-q4-baby.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q4/ani-q4-dog.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-girl-young.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-girl-new-couple.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-girl-pregnant.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-girl-near-retired.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-girl-retired.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-boy-young.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-boy-new-couple.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-boy-pregnant.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-boy-near-retired.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-boy-retired.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q6/ani-q6.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q7/ani-q7-bird-left.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q7/ani-q7-bird-right.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q7/ani-q7-money.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q7/ani-q7-star.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q8/ani-q8.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q9/ani-q9.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q10/ani-q10-healthcare.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q10/ani-q10-double.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q10/ani-q10-single.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q10/ani-q10-principal.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q10/ani-q10-vip.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q10/ani-q10-best.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q11/ani-q11.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q12/ani-q12.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q12/ani-q12-money.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q12/ani-q12-agent-f.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q12/ani-q12-agent-m.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q13/ani-q13-envelopes.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q14/ani-q14.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q15/ani-q15.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q16/ani-q16.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q17/ani-q17.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q18/ani-q18-girl.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q18/ani-q18-boy.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q19/ani-q19-doll.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q19/ani-q19-money.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q20/ani-q20-college.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q20/ani-q20-kids.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q21/ani-q21-car.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q21/ani-q21-doll.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q21/ani-q21-house-1.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q21/ani-q21-study-1.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q21/ani-q21-job-1.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q21/ani-q21-travel.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q21/ani-q21-marry-1.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-car.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-car-color.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-car-wheel.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-house2.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-house-color.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-study-f-1.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-study-f-2.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-study-f-3.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-study-f-4.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-study-f-5.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-study-f-6.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-study-m-1.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-study-m-2.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-study-m-3.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-study-m-4.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-study-m-5.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-study-m-6.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-travel.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-travel-flag.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-travel-flight.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-job.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-marry.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q22/ani-q22-marry-balloon.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q23/ani-q23.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q23/bg-ground.png" alt="">
	</div>
	<form:form action="" method="post"  commandName="ajaxToken">
	</form:form>
</body>
<script type="text/javascript">
	/*<![CDATA[*/
	<%-- Define a javascript variable to hold the content path --%>
	var NSLCP = { config: {} };
	NSLCP.config.contextPath = "${contextPath}";
	NSLCP.config.encodedContextPath = "${encodedContextPath}";
	NSLCP.config.commonResourcePath = "${commonResourcePath}";
	NSLCP.config.themeResourcePath = "${themeResourcePath}";
	NSLCP.config.siteResourcePath = "${siteResourcePath}";
	NSLCP.config.rootPath = "${siteRootUrl}";	
	/*]]>*/
</script>
<script src="${commonResourcePath}/js/needanalysis/Scripts/plugin/jquery/jquery.min.js?JS=20160216_01"></script>
<script src="${commonResourcePath}/js/needanalysis/Scripts/plugin/lazyload/jquery.lazyload.min.js?JS=20160216_01"></script>
<script src="${commonResourcePath}/js/needanalysis/Scripts/plugin/ion-rangeSlider/ion.rangeSlider.min.js?JS=20160216_01"></script>
<script src="${commonResourcePath}/js/needanalysis/Scripts/plugin/datepicker/datepicker-min.js?JS=20160216_01"></script>
<script src="${commonResourcePath}/js/needanalysis/Scripts/js/factory-min.js?JS=20160420_01"></script>
<script src="${commonResourcePath}/js/needanalysis/Scripts/js/common-min.js?JS=20160420_01"></script>
</html>
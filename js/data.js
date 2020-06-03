let DATA = {
    Main_Visual: [
        '오늘도 수고했어. 맥주 한 잔 어때? 취향 저격 맥주 추천 받기 Go',
        '지금 Craft Zone 방문하면 페일 에일 한 잔이 무료',
        'Upright Special 스페셜 시음회를 개최합니다',
        '2019 신촌 맥주 축제',
        '부엉이 키친 방문 후기 남기면 안주 1종이 무료'
    ],
    Magazine: [
        { 
            alt: '매거진: 라거에 대하여',
            text: '발효방식에따라 크게 세 가지로 구분하는 맥주의 갈래 중 하나. 에일(상면발효), 람빅(자연발효), 라거(하면발효)이다. 일반적으로 섭씨 7~13 도에서 발효되며, 발효기간은 약 2~4 주. 이후오랜 숙성기간을 거쳐 에일과는 다르게 맑아지는게 특징이다. 7~13 도는 늦가을 ~ 초봄이 아니면 실온에서 발효가 어려워 중세~근대 유럽에서는 동굴, 지하실등에 저장해서 발효했다고 한다…'
        }
    ],
    New_Beer_Arrivals: [
        {
            abv: '4.7%',
            country: 'usa',
            country_alt: '미국',
            beer: 'Mamma_Mia_Pizza_Beer',
            beer_alt: '맘마 미아 피자 비어',
            title: '맘마! 미아 피자 비어'
        },
        {
            abv: '5.0%',
            country: 'france',
            country_alt: '프랑스',
            beer: 'Weihenstephan_Original',
            beer_alt: '크로넨버그 1164 블랑',
            title: '크로넨버그 1164 블랑'
        },
        {
            abv: '4.8%',
            country: 'germany',
            country_alt: '독일',
            beer: 'kostritzer_Schwarzbier',
            beer_alt: '쾨스트리처 슈바르츠비어',
            title: '쾨스트리처 슈바르츠비어'
        },
        {
            abv: '4.8%',
            country: 'germany',
            country_alt: '독일',
            beer: 'Bitburger_Premium_Pils',
            beer_alt: '비트부르거 프리미엄 필스',
            title: '비트부르거 프리미엄 필스'
        },
        {
            abv: '5.1%',
            country: 'germany',
            country_alt: '독일',
            beer: 'Weihenstephan_Original',
            beer_alt: '바이헨슈테파너 오리지날',
            title: '바이헨슈테파너 오리지날'
        },
        {
            abv: '4.8%',
            country: 'spain',
            country_alt: '스페인',
            beer: 'Estrella_Damm_Inedit',
            beer_alt: '에스트레야 담 이네딧',
            title: '에스트레야 담 이네딧'
        },
        {
            abv: '4.2%',
            country: 'Ireland',
            country_alt: '아일랜드',
            beer: 'Guinness Draught',
            beer_alt: '기네스 드래프트',
            title: '기네스 드래프트'
        }
    ],
    Beer_of_the_Month: [
        {
            beer_img: 'Gaffels_SonnenHopfen',
            beer_alt: '가펠 소넨호펜',
            title: 'Gafeels SonnonHofen <span class="beer_description_title_kor"> 가펠 소넨호펜</span>',
            country: 'germany',
            country_alt: '독일',
            abv: 'ABV <span class="bold">4.7%</span>',
            style: '맥주 스타일 <span class="bold">쾰시</span>',
            flavor: '맛/향 <span class="bold">소나무와 레몬향</span>',
            text: '숲의 기운이 가득 느껴치는 향으로, 과일같은 달콤한 기운이 감도는 홉 향이 특징. 감귤처럼 달콤하면서도 레몬처럼 새콤하다. 부드럽고 마시기 좋은 맥주.'
        },
        {
            beer_img: 'Efes_Pilsener',
            beer_alt: '체코',
            title: 'Efes Pilsener <span class="beer_description_title_kor"> 에페스 필스너</span>',
            country: 'terkey',
            country_alt: '터키',
            abv: 'ABV <span class="bold">5.0%</span>',
            style: '맥주 스타일 <span class="bold">필스너</span>',
            flavor: '맛/향 <span class="bold">강한 홉의 향, 깔끔한 맛</span>',
            text: '청량감이 좋고 상쾌하며 약간 시큼한 맛과 쌉쌀한 맛이 난다. 강한 홉의 향과 함께 구수하고 달달한 향이 올라온다. 개성이 확실한 맥주로 가벼운 맥주를 좋아하는 사람에게 추천.'
        },
        {
            beer_img: 'Jacobins_Rouge',
            beer_alt: '벨기에',
            title: 'Jacobins Rouge <span class="beer_description_title_kor"> 자코뱅 루즈</span>',
            country: 'belgie',
            country_alt: '벨기에',
            abv: 'ABV <span class="bold">5.5%</span>',
            style: '맥주 스타일 <span class="bold">플랜더스 레드</span>',
            flavor: '맛/향 <span class="bold">식초와 체리의 맛, 오크 나무 향</span>',
            text: '강한 식초의 맛과 체리, 사과 등의 과일 맛을 느낄 수 있으며 단맛은 거의 느껴지지 않는 깔끔한고 개운한(Dry)한 맥주. 탄산의 기운이 강한 편으로 입안으로 퍼짐이 확연히 느껴진다.'
        },
        {
            beer_img: 'Hoppy_Daze_IPA',
            beer_alt: '미국',
            title: 'Hoppy Daze IPA <span class="beer_description_title_kor"> 홉피 데이즈 IPA</span>',
            country: 'usa',
            country_alt: '미국',
            abv: 'ABV <span class="bold">7.5%</span>',
            style: '맥주 스타일 <span class="bold">벨지안 IPA</span>',
            flavor: '맛/향 <span class="bold">소나무와 감귤향</span>',
            text: '소나무와 감귤, 레몬의 향과 함께 홉의 쌉쌀함이 효모의 알싸함과 합쳐져 코를 자극한다. 탄산은 적당한 편이며 꿀이나 시럽을 연상시키는 단만이 난다.'
        }
    ],
    Weekly_Best_Review: [
        {
            preview_alt: '벨스 스페셜 더블 크림 스타우트 리뷰',
            view_count: 7469,
            recommend_count: 128,
            preview_title: '벨스 스페셜 더블 크림 스타우트',
            text: '깜장 맥주 마시기 좋은 계절이라 저는 요즘 아주 신이 납니다. 벨스의 여러 스페셜 라인업 중에서 오늘 마실 \'Special Double Cream Stout\'는 8월 부터 이듬해 2월 까지 마실 수 있는 스타우트입니다. 깜장 맥주 마시기 좋은 계절이라 저는 요즘 아주...'
        },
        {
            preview_alt: '몬테크리스토 샌드위치 레시피',
            view_count: 6213,
            recommend_count: 157,
            preview_title: '몬테크리스토 샌드위치',
            text: '샌드위치 2탄 어쩌면 이 샌드위치는 조금 더복잡한 과정이지만 비슷해서 올려드려요.. 왜 이름이 몬테크리스토이냐구요? 두얼굴의 샌드위치거든요 샌드위치지만 샌드위치가 아닌것처럼 어쩜 고로께인것 처럼 분장을 해서 그렇게 이름이 붙여진것..'
        },
        {
            preview_alt: 'THE 8LOW 소개',
            view_count: 4235,
            recommend_count: 71,
            preview_title: 'THE 8LOW',
            text: '안녕하세요 !! 수유동에서 가장 맛있는 수제맥주집 \'THE 8LOW\'입니다. 수유동에 수제맥주집이 흔치 않은데 사일구 카페거리에 위치한 분위기 좋은 브런치카페&펍 이구요!! 요즘 대세는 피맥! 파맥! 직접 소스도 만들어 굽는 수제피자와 다양..'
        }
    ],
    View_Latest_Event: [
        '이달의 맥주 찰떡궁합 레시피',
        '이달의 맥주 BEST 10',
        '이달의 맥주 축제',
        '무료 샘플 신청하기'
    ]
};
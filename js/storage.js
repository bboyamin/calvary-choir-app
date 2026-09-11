/**
 * 갈보리교회 임마누엘 성가대 로컬 스토리지 & 영구 데이터 관리자 (storage.js)
 * 대원 일정 및 티켓/참석 신청 기능 영구 데이터 지원
 */

const STORAGE_KEYS = {
  NOTICES: 'calvary_choir_notices',
  PRAISES: 'calvary_choir_praises',
  SCHEDULES: 'calvary_choir_schedules',
  MEMBERS: 'calvary_choir_members',
  PRAYERS: 'calvary_choir_prayers',
  IS_OFFICER: 'calvary_choir_is_officer',
  DATA_VERSION: 'calvary_choir_data_v1000' // 데이터 버전 v12 (파트 연습실 임의 생성 더미 제거 및 관리자 수동 등록 전용 유지)
};

const DEFAULT_DATA = {
  notices: [
    {
      "id": "n_001",
      "title": "📢 9월 성가대 정기 연습 및 예배 안내",
      "content": "임마누엘성가대 대원 여러분, 매주 주일 오전 9:30 성가대실에서 정기 연습이 있습니다. 늦지 않게 참석해 주시기 바랍니다.",
      "date": "2026-09-11",
      "author": "임원회"
    }
  ],
  praises: [
        {
            "id": "p_imm_001",
            "type": "all",
            "partTarget": "",
            "title": "나의 피난처 예수",
            "date": "2026-09-06",
            "youtubeUrl": "https://www.youtube.com/watch?v=uKX9VJFPcI4"
        },
        {
            "id": "p_imm_002",
            "type": "all",
            "partTarget": "",
            "title": "나는 예배자 입니다",
            "date": "2026-08-30",
            "youtubeUrl": "https://www.youtube.com/watch?v=c47o3OOn0Yo"
        },
        {
            "id": "p_imm_003",
            "type": "all",
            "partTarget": "",
            "title": "내 맘에 한 노래 있어",
            "date": "2026-08-23",
            "youtubeUrl": "https://www.youtube.com/watch?v=EEW7F33sUns"
        },
        {
            "id": "p_imm_004",
            "type": "all",
            "partTarget": "",
            "title": "만유의 주 앞에",
            "date": "2026-08-16",
            "youtubeUrl": "https://www.youtube.com/watch?v=GfFDnM6MWLE"
        },
        {
            "id": "p_imm_005",
            "type": "all",
            "partTarget": "",
            "title": "주 영광 선포하라",
            "date": "2026-08-09",
            "youtubeUrl": "https://www.youtube.com/watch?v=-M2PoJTHMjk"
        },
        {
            "id": "p_imm_006",
            "type": "all",
            "partTarget": "",
            "title": "승리의 주 예수",
            "date": "2026-08-02",
            "youtubeUrl": "https://www.youtube.com/watch?v=xwIdare5X18"
        },
        {
            "id": "p_imm_007",
            "type": "all",
            "partTarget": "",
            "title": "주 날 인도하시네",
            "date": "2026-07-26",
            "youtubeUrl": "https://www.youtube.com/watch?v=J0G7BuEEDeA"
        },
        {
            "id": "p_imm_008",
            "type": "all",
            "partTarget": "",
            "title": "임재",
            "date": "2026-07-19",
            "youtubeUrl": "https://www.youtube.com/watch?v=sxydH978UPU"
        },
        {
            "id": "p_imm_009",
            "type": "all",
            "partTarget": "",
            "title": "예수를 나의 구주 삼고",
            "date": "2026-07-12",
            "youtubeUrl": "https://www.youtube.com/watch?v=MIHRwpgeWog"
        },
        {
            "id": "p_imm_010",
            "type": "all",
            "partTarget": "",
            "title": "거룩하신 하나님",
            "date": "2026-07-05",
            "youtubeUrl": "https://www.youtube.com/watch?v=6ReqqYUZw-w"
        },
        {
            "id": "p_imm_011",
            "type": "all",
            "partTarget": "",
            "title": "시편 20편",
            "date": "2026-06-28",
            "youtubeUrl": "https://www.youtube.com/watch?v=DbaeygzTRKs"
        },
        {
            "id": "p_imm_012",
            "type": "all",
            "partTarget": "",
            "title": "나는 믿노라",
            "date": "2026-06-21",
            "youtubeUrl": "https://www.youtube.com/watch?v=vaPg9fTU-b0"
        },
        {
            "id": "p_imm_013",
            "type": "all",
            "partTarget": "",
            "title": "사랑의 주님",
            "date": "2026-06-14",
            "youtubeUrl": "https://www.youtube.com/watch?v=nYqOI-2MsbI"
        },
        {
            "id": "p_imm_014",
            "type": "all",
            "partTarget": "",
            "title": "주의 은혜라",
            "date": "2026-06-07",
            "youtubeUrl": "https://www.youtube.com/watch?v=LS856cSJohE"
        },
        {
            "id": "p_imm_015",
            "type": "all",
            "partTarget": "",
            "title": "내 맘에 한 노래 있어",
            "date": "2026-05-31",
            "youtubeUrl": "https://www.youtube.com/watch?v=Mb9W5WwzCKs"
        },
        {
            "id": "p_imm_016",
            "type": "all",
            "partTarget": "",
            "title": "주 예수 이름 높이어",
            "date": "2026-05-24",
            "youtubeUrl": "https://www.youtube.com/watch?v=_2Ql4TlZCMw"
        },
        {
            "id": "p_imm_017",
            "type": "all",
            "partTarget": "",
            "title": "은혜의 자리",
            "date": "2026-05-17",
            "youtubeUrl": "https://www.youtube.com/watch?v=DextJkabb80"
        },
        {
            "id": "p_imm_018",
            "type": "all",
            "partTarget": "",
            "title": "어머니의 기도",
            "date": "2026-05-10",
            "youtubeUrl": "https://www.youtube.com/watch?v=txH-n_9M1EI"
        },
        {
            "id": "p_imm_019",
            "type": "all",
            "partTarget": "",
            "title": "주 예수 사랑 기쁨 내 맘속에",
            "date": "2026-05-03",
            "youtubeUrl": "https://www.youtube.com/watch?v=OZRe2wfPV_s"
        },
        {
            "id": "p_imm_020",
            "type": "all",
            "partTarget": "",
            "title": "나의 입술로 찬양",
            "date": "2026-04-26",
            "youtubeUrl": "https://www.youtube.com/watch?v=J6hP6HyL3kU"
        },
        {
            "id": "p_imm_021",
            "type": "all",
            "partTarget": "",
            "title": "주님 품에",
            "date": "2026-04-19",
            "youtubeUrl": "https://www.youtube.com/watch?v=fHnOXPo1UGM"
        },
        {
            "id": "p_imm_022",
            "type": "all",
            "partTarget": "",
            "title": "내 주를 가까이 하게 함은",
            "date": "2026-04-12",
            "youtubeUrl": "https://www.youtube.com/watch?v=z7yJJgA3IYg"
        },
        {
            "id": "p_imm_023",
            "type": "all",
            "partTarget": "",
            "title": "기뻐 찬송하세",
            "date": "2026-04-05",
            "youtubeUrl": "https://www.youtube.com/watch?v=IrN4nUViHM8"
        },
        {
            "id": "p_imm_024",
            "type": "all",
            "partTarget": "",
            "title": "예수 거룩한 이름",
            "date": "2026-03-29",
            "youtubeUrl": "https://www.youtube.com/watch?v=--xzidvjYjs"
        },
        {
            "id": "p_imm_025",
            "type": "all",
            "partTarget": "",
            "title": "거기 너 있었는가",
            "date": "2026-03-22",
            "youtubeUrl": "https://www.youtube.com/watch?v=xaNCx0rdyiU"
        },
        {
            "id": "p_imm_026",
            "type": "all",
            "partTarget": "",
            "title": "나의 자랑은 오직 십자가",
            "date": "2026-03-15",
            "youtubeUrl": "https://www.youtube.com/watch?v=9KeeUeUUKpg"
        },
        {
            "id": "p_imm_027",
            "type": "all",
            "partTarget": "",
            "title": "우리 때문에",
            "date": "2026-03-08",
            "youtubeUrl": "https://www.youtube.com/watch?v=09sY2wobSSk"
        },
        {
            "id": "p_imm_028",
            "type": "all",
            "partTarget": "",
            "title": "승리의 하나님",
            "date": "2026-03-01",
            "youtubeUrl": "https://www.youtube.com/watch?v=-GWwbVodOFw"
        },
        {
            "id": "p_imm_029",
            "type": "all",
            "partTarget": "",
            "title": "변함없는 은혜",
            "date": "2026-02-22",
            "youtubeUrl": "https://www.youtube.com/watch?v=5yWYUct8ZFo"
        },
        {
            "id": "p_imm_030",
            "type": "all",
            "partTarget": "",
            "title": "주와 같이 길 가는 것",
            "date": "2026-02-15",
            "youtubeUrl": "https://www.youtube.com/watch?v=uLtknrKUv5s"
        },
        {
            "id": "p_imm_031",
            "type": "all",
            "partTarget": "",
            "title": "주님이 일하십니다",
            "date": "2026-02-08",
            "youtubeUrl": "https://www.youtube.com/watch?v=qjM7W5T_8L4"
        },
        {
            "id": "p_imm_032",
            "type": "all",
            "partTarget": "",
            "title": "주님을 기억합니다",
            "date": "2026-02-01",
            "youtubeUrl": "https://www.youtube.com/watch?v=_F_zRAYdLiM"
        },
        {
            "id": "p_imm_033",
            "type": "all",
            "partTarget": "",
            "title": "하나님의 사랑 주님의 눈물",
            "date": "2026-01-25",
            "youtubeUrl": "https://www.youtube.com/watch?v=mJYVVcdrwH8"
        },
        {
            "id": "p_imm_034",
            "type": "all",
            "partTarget": "",
            "title": "하나님의 시간",
            "date": "2026-01-18",
            "youtubeUrl": "https://www.youtube.com/watch?v=w-Eqc_p3w98"
        },
        {
            "id": "p_imm_035",
            "type": "all",
            "partTarget": "",
            "title": "주님만이 나의 전부입니다",
            "date": "2026-01-11",
            "youtubeUrl": "https://www.youtube.com/watch?v=KThoNWb5Ets"
        },
        {
            "id": "p_imm_036",
            "type": "all",
            "partTarget": "",
            "title": "우리 함께 가리라",
            "date": "2026-01-04",
            "youtubeUrl": "https://www.youtube.com/watch?v=urk6M1hqVTE"
        }
    ],
  schedules: [
    {
      "id": "s_001",
      "title": "주일 정기 연습 및 3부 예배 찬양",
      "date": "2026-09-13",
      "time": "09:30",
      "location": "성가대실 & 대예배실",
      "description": "09:30 정기 연습 / 11:00 3부 예배 찬양"
    },
    {
      "id": "s_002",
      "title": "주일 정기 연습 및 3부 예배 찬양",
      "date": "2026-09-20",
      "time": "09:30",
      "location": "성가대실 & 대예배실",
      "description": "09:30 정기 연습 / 11:00 3부 예배 찬양"
    }
  ],
  members: [
    {
        "id": "m_c1",
        "name": "김예훈",
        "part": "임원",
        "role": "지휘자",
        "phone": "010-4169-9505",
        "photoUrl": ""
    },
    {
        "id": "m_c2",
        "name": "노인희",
        "part": "임원",
        "role": "반주자",
        "phone": "010-2225-9047",
        "photoUrl": ""
    },
    {
        "id": "m_c3",
        "name": "백지원",
        "part": "임원",
        "role": "반주자",
        "phone": "010-3899-6931",
        "photoUrl": ""
    },
    {
        "id": "m_s13",
        "name": "이미경",
        "part": "소프라노",
        "role": "파트장",
        "phone": "010-5691-2864",
        "photoUrl": ""
    },
    {
        "id": "m_s2",
        "name": "김인숙",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-4384-4842",
        "photoUrl": ""
    },
    {
        "id": "m_s3",
        "name": "김영림",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-9922-3194",
        "photoUrl": ""
    },
    {
        "id": "m_s1",
        "name": "김성희",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-3377-3362",
        "photoUrl": ""
    },
    {
        "id": "m_s4",
        "name": "노현숙",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-8700-0254",
        "photoUrl": ""
    },
    {
        "id": "m_s5",
        "name": "변희경",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-2637-6147",
        "photoUrl": ""
    },
    {
        "id": "m_s6",
        "name": "손예정",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-6612-5965",
        "photoUrl": ""
    },
    {
        "id": "m_s8",
        "name": "오선희",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-3012-0787",
        "photoUrl": ""
    },
    {
        "id": "m_s7",
        "name": "안명순",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-3081-3927",
        "photoUrl": ""
    },
    {
        "id": "m_s10",
        "name": "유희은",
        "part": "소프라노",
        "role": "총무",
        "phone": "010-2820-0602",
        "photoUrl": ""
    },
    {
        "id": "m_s9",
        "name": "유혜영",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-3781-9129",
        "photoUrl": ""
    },
    {
        "id": "m_s11",
        "name": "윤희옥",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-5413-8092",
        "photoUrl": ""
    },
    {
        "id": "m_s15",
        "name": "이선애",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-6431-1966",
        "photoUrl": ""
    },
    {
        "id": "m_s16",
        "name": "이영희",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-2512-2234",
        "photoUrl": ""
    },
    {
        "id": "m_s12",
        "name": "이금희",
        "part": "소프라노",
        "role": "회계",
        "phone": "010-7370-5146",
        "photoUrl": ""
    },
    {
        "id": "m_s19",
        "name": "임정혜",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-4752-9549",
        "photoUrl": ""
    },
    {
        "id": "m_s23",
        "name": "정윤영",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-3465-1807",
        "photoUrl": ""
    },
    {
        "id": "m_s24",
        "name": "정혜미",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-5475-1315",
        "photoUrl": ""
    },
    {
        "id": "m_s21",
        "name": "조산초",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-8287-3328",
        "photoUrl": ""
    },
    {
        "id": "m_s28",
        "name": "황인동",
        "part": "소프라노",
        "role": "대원",
        "phone": "010-3419-2947",
        "photoUrl": ""
    },
    {
        "id": "m_a19",
        "name": "최순옥",
        "part": "알토",
        "role": "파트장",
        "phone": "010-9919-0342",
        "photoUrl": ""
    },
    {
        "id": "m_a1",
        "name": "김관기",
        "part": "알토",
        "role": "대원",
        "phone": "010-7553-2920",
        "photoUrl": ""
    },
    {
        "id": "m_a3",
        "name": "김정희",
        "part": "알토",
        "role": "대원",
        "phone": "010-4640-2025",
        "photoUrl": ""
    },
    {
        "id": "m_a6",
        "name": "박명옥",
        "part": "알토",
        "role": "대원",
        "phone": "010-2635-3596",
        "photoUrl": ""
    },
    {
        "id": "m_a7",
        "name": "신묘순",
        "part": "알토",
        "role": "대원",
        "phone": "010-4240-6624",
        "photoUrl": ""
    },
    {
        "id": "m_a8",
        "name": "신순애",
        "part": "알토",
        "role": "대원",
        "phone": "010-8967-9909",
        "photoUrl": ""
    },
    {
        "id": "m_a9",
        "name": "이명숙",
        "part": "알토",
        "role": "대원",
        "phone": "010-6357-1067",
        "photoUrl": ""
    },
    {
        "id": "m_a10",
        "name": "이미숙",
        "part": "알토",
        "role": "대원",
        "phone": "010-3267-3721",
        "photoUrl": ""
    },
    {
        "id": "m_a11",
        "name": "이삼순",
        "part": "알토",
        "role": "대원",
        "phone": "010-2583-0424",
        "photoUrl": ""
    },
    {
        "id": "m_a13",
        "name": "이춘희",
        "part": "알토",
        "role": "대원",
        "phone": "010-6214-5837",
        "photoUrl": ""
    },
    {
        "id": "m_a14",
        "name": "임부미",
        "part": "알토",
        "role": "대원",
        "phone": "010-2745-4524",
        "photoUrl": ""
    },
    {
        "id": "m_a15",
        "name": "임정숙",
        "part": "알토",
        "role": "대원",
        "phone": "010-3045-8373",
        "photoUrl": ""
    },
    {
        "id": "m_a16",
        "name": "전하영",
        "part": "알토",
        "role": "대원",
        "phone": "010-9139-2955",
        "photoUrl": ""
    },
    {
        "id": "m_a17",
        "name": "정우택",
        "part": "알토",
        "role": "대원",
        "phone": "010-7115-2632",
        "photoUrl": ""
    },
    {
        "id": "m_a18",
        "name": "최보금",
        "part": "알토",
        "role": "대원",
        "phone": "010-8768-8441",
        "photoUrl": ""
    },
    {
        "id": "m_a21",
        "name": "홍정자",
        "part": "알토",
        "role": "대원",
        "phone": "010-9788-3216",
        "photoUrl": ""
    },
    {
        "id": "m_a4",
        "name": "김춘호",
        "part": "알토",
        "role": "대원",
        "phone": "010-4749-9700",
        "photoUrl": ""
    },
    {
        "id": "m_a5",
        "name": "김현수",
        "part": "알토",
        "role": "대원",
        "phone": "010-8741-7788",
        "photoUrl": ""
    },
    {
        "id": "m_t3",
        "name": "김종선",
        "part": "테너",
        "role": "파트장",
        "phone": "010-6327-3377",
        "photoUrl": ""
    },
    {
        "id": "m_t1",
        "name": "김영섭",
        "part": "테너",
        "role": "대원",
        "phone": "010-4621-2725",
        "photoUrl": ""
    },
    {
        "id": "m_t4",
        "name": "신현식",
        "part": "테너",
        "role": "대원",
        "phone": "010-9124-4842",
        "photoUrl": ""
    },
    {
        "id": "m_t7",
        "name": "지형구",
        "part": "테너",
        "role": "대원",
        "phone": "010-3628-7795",
        "photoUrl": ""
    },
    {
        "id": "m_t8",
        "name": "최근성",
        "part": "테너",
        "role": "대원",
        "phone": "010-5739-3433",
        "photoUrl": ""
    },
    {
        "id": "m_t9",
        "name": "홍창오",
        "part": "테너",
        "role": "대원",
        "phone": "010-3234-6656",
        "photoUrl": ""
    },
    {
        "id": "m_b8",
        "name": "이준환",
        "part": "베이스",
        "role": "파트장",
        "phone": "010-8899-0756",
        "photoUrl": ""
    },
    {
        "id": "m_b1",
        "name": "김경민",
        "part": "베이스",
        "role": "대장",
        "phone": "010-4934-8588",
        "photoUrl": ""
    },
    {
        "id": "m_b2",
        "name": "김경섭",
        "part": "베이스",
        "role": "대원",
        "phone": "010-5441-1966",
        "photoUrl": ""
    },
    {
        "id": "m_b3",
        "name": "김문겸",
        "part": "베이스",
        "role": "대원",
        "phone": "010-8226-2920",
        "photoUrl": ""
    },
    {
        "id": "m_b4",
        "name": "김이태",
        "part": "베이스",
        "role": "대원",
        "phone": "010-9730-8859",
        "photoUrl": ""
    },
    {
        "id": "m_b5",
        "name": "송각수",
        "part": "베이스",
        "role": "대원",
        "phone": "010-7275-7551",
        "photoUrl": ""
    },
    {
        "id": "m_b6",
        "name": "우재학",
        "part": "베이스",
        "role": "대원",
        "phone": "010-8570-2128",
        "photoUrl": ""
    },
    {
        "id": "m_b7",
        "name": "이광일",
        "part": "베이스",
        "role": "대원",
        "phone": "010-3065-6976",
        "photoUrl": ""
    },
    {
        "id": "m_b9",
        "name": "김석견",
        "part": "베이스",
        "role": "대원",
        "phone": "010-3242-1116",
        "photoUrl": ""
    }
],
  prayers: [
    {
        "id": "pr_1788933324613",
        "createdAt": 1788933324613,
        "author": "송각수집사님(Bass)",
        "content": "7월에 버스탑승시 사고로 무릎 통증 \n내시경수술 하시고 회복중이십니다.\n9월은 보조기 착용으로 참여를 못하시는 상황으로 빠른 회복을 위해 기도해 주세요.",
        "date": "2026-09-09",
        "amenCount": 4,
        "comments": [
            {
                "author": "김경민",
                "text": "기도합니다"
            }
        ]
    },
    {
        "id": "pr_1788927758550",
        "createdAt": 1788927758550,
        "author": "김경민",
        "content": "갈보리교회를 위해 기도해주세요.",
        "date": "2026-09-09",
        "amenCount": 6,
        "comments": [
            {
                "author": "익명 대원",
                "text": "기도하겠습니다"
            }
        ]
    }
]
};

class ChoirStorage {
  constructor() {
    this.isSyncing = false;
    this.pendingPushCount = { notices: 0, praises: 0, schedules: 0, members: 0, prayers: 0 };
    this.lastMutationTime = { notices: 0, praises: 0, schedules: 0, members: 0, prayers: 0 };
    this.init();
    this.startCloudSync();
  }

  init() {
    const currentVer = localStorage.getItem(STORAGE_KEYS.DATA_VERSION);
    if (currentVer !== 'v1005') {
      if ('caches' in window) {
        caches.keys().then(names => {
          for (let name of names) {
            caches.delete(name);
          }
        });
      }
      localStorage.setItem(STORAGE_KEYS.DATA_VERSION, 'v1005');
    }
  }

  startCloudSync() {
    // 앱 진입 즉시 클라우드 실시간 데이터 동기화 (SSOT)
    this.syncFromCloud();

    // 10초 주기 실시간 자동 동기화
    setInterval(() => {
      this.syncFromCloud();
    }, 10000);

    // 앱 화면 다시 활성화(포커스) 및 온라인 복구 시 즉시 클라우드 동기화
    window.addEventListener('focus', () => this.syncFromCloud());
    window.addEventListener('online', () => this.syncFromCloud());
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.syncFromCloud();
      }
    });
  }

  async syncFromCloud() {
    if (this.isSyncing) return;
    this.isSyncing = true;

    try {
      const resp = await fetch('./api/storage?key=all');
      if (!resp.ok) {
        this.isSyncing = false;
        return;
      }

      const cloudData = await resp.json();
      let hasChanges = false;

      const categoryMap = [
        { cat: 'notices', key: STORAGE_KEYS.NOTICES },
        { cat: 'praises', key: STORAGE_KEYS.PRAISES },
        { cat: 'schedules', key: STORAGE_KEYS.SCHEDULES },
        { cat: 'members', key: STORAGE_KEYS.MEMBERS },
        { cat: 'prayers', key: STORAGE_KEYS.PRAYERS }
      ];

      const now = Date.now();
      for (const item of categoryMap) {
        const lastMut = this.lastMutationTime[item.cat] || 0;
        const pendingCount = this.pendingPushCount[item.cat] || 0;
        const isRecentlyMutatedByMe = (now - lastMut) < 10000; // 최근 10초 이내에 내가 직접 등록/수정/삭제한 카테고리

        // 내가 방금 수정 중이거나 전송(Push) 중이라면 서버의 지연된 이전 데이터로 순간 롤백되는 현상 방지
        if (pendingCount > 0 || isRecentlyMutatedByMe) {
          continue;
        }

        if (cloudData[item.cat] !== undefined && cloudData[item.cat] !== null && Array.isArray(cloudData[item.cat])) {
          const localObj = this.get(item.key);
          const cloudObj = cloudData[item.cat];
          const localStr = JSON.stringify(localObj);
          const cloudStr = JSON.stringify(cloudObj);

          if (localStr !== cloudStr) {
            localStorage.setItem(item.key, cloudStr);
            hasChanges = true;
          }
        }
      }

      // 변경사항이 감지되면 UI 및 안읽은 배포 건수 즉시 갱신
      if (hasChanges && window.app) {
        if (typeof window.app.renderAll === 'function') window.app.renderAll();
        if (typeof window.app.updateUnreadBadges === 'function') window.app.updateUnreadBadges();
      }
    } catch (e) {
      console.warn('Cloud sync offline or error:', e);
    } finally {
      this.isSyncing = false;
    }
  }

  async pushCategoryToCloud(category, data) {
    this.pendingPushCount[category] = (this.pendingPushCount[category] || 0) + 1;
    this.lastMutationTime[category] = Date.now();

    try {
      const resp = await fetch('./api/storage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, data })
      });
      if (resp.ok) {
        this.lastMutationTime[category] = Date.now();
      }
    } catch (e) {
      console.warn('Cloud push error:', e);
    } finally {
      if (this.pendingPushCount[category] > 0) {
        this.pendingPushCount[category]--;
      }
    }
  }

  get(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Storage parse error:', e);
      return [];
    }
  }

  saveLocal(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Storage save error:', e);
      if (e.name === 'QuotaExceededError' || e.code === 22) {
        alert('⚠️ 저장 공간이 부족하여 저장이 거부되었습니다. 불필요한 사진 용량을 자동으로 압축 정리합니다.');
      }
    }
  }

  save(key, data) {
    const categoryKeyMap = {
      [STORAGE_KEYS.NOTICES]: 'notices',
      [STORAGE_KEYS.PRAISES]: 'praises',
      [STORAGE_KEYS.SCHEDULES]: 'schedules',
      [STORAGE_KEYS.MEMBERS]: 'members',
      [STORAGE_KEYS.PRAYERS]: 'prayers'
    };

    const category = categoryKeyMap[key];
    if (category) {
      this.lastMutationTime[category] = Date.now();
      localStorage.setItem('last_mut_' + category, Date.now().toString());
    }

    // 1. 로컬 스토리지에 즉시 반응형 저장 (0ms)
    this.saveLocal(key, data);

    // 2. 전 대원 공유 클라우드 DB로 비동기 전송 동기화 (유저가 직접 등록/수정/삭제했을 때만 실행)
    if (category) {
      this.pushCategoryToCloud(category, data);
    }
  }

  isOfficer() {
    return localStorage.getItem(STORAGE_KEYS.IS_OFFICER) === 'true';
  }

  setOfficer(isOfficer) {
    localStorage.setItem(STORAGE_KEYS.IS_OFFICER, isOfficer ? 'true' : 'false');
  }

  getMemberPin() {
    return localStorage.getItem('calvary_choir_member_pin') || '1004';
  }

  setMemberPin(pin) {
    localStorage.setItem('calvary_choir_member_pin', pin);
  }

  isMemberUnlocked() {
    return localStorage.getItem('calvary_choir_member_unlocked') === 'true';
  }

  setMemberUnlocked(status) {
    localStorage.setItem('calvary_choir_member_unlocked', status ? 'true' : 'false');
  }
}

window.choirStorage = new ChoirStorage();

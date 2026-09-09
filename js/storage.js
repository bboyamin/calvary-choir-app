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
  DATA_VERSION: 'calvary_choir_data_v7' // 데이터 버전 v7 (초기 배포용 명단 유지 + 소식 초기화 완료)
};

const DEFAULT_DATA = {
  notices: [],
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
        },
        {
            "id": "p_imm_037",
            "type": "all",
            "partTarget": "",
            "title": "주는 우리 요새",
            "date": "2025-12-31",
            "youtubeUrl": "https://www.youtube.com/watch?v=BJFpYuzK7cU"
        },
        {
            "id": "p_imm_038",
            "type": "all",
            "partTarget": "",
            "title": "주는 우리 요새",
            "date": "2025-12-28",
            "youtubeUrl": "https://www.youtube.com/watch?v=aDn1W0sZLlQ"
        },
        {
            "id": "p_imm_039",
            "type": "all",
            "partTarget": "",
            "title": "기쁘다 구주 오셨네",
            "date": "2025-12-25",
            "youtubeUrl": "https://www.youtube.com/watch?v=C6OIo8UwVJo"
        },
        {
            "id": "p_imm_040",
            "type": "all",
            "partTarget": "",
            "title": "기쁜 소식 들려오네",
            "date": "2025-12-21",
            "youtubeUrl": "https://www.youtube.com/watch?v=hj_qAMNLEuA"
        },
        {
            "id": "p_imm_041",
            "type": "all",
            "partTarget": "",
            "title": "우리를 위해 한 아기 나셨다",
            "date": "2025-12-21",
            "youtubeUrl": "https://www.youtube.com/watch?v=ZJe-k89O-Ak"
        },
        {
            "id": "p_imm_042",
            "type": "all",
            "partTarget": "",
            "title": "주의 은혜 내 잔에 가득 넘쳐",
            "date": "2025-12-14",
            "youtubeUrl": "https://www.youtube.com/watch?v=_WECccagaNQ"
        },
        {
            "id": "p_imm_043",
            "type": "all",
            "partTarget": "",
            "title": "우리 다시 기쁨의 찬양",
            "date": "2025-12-07",
            "youtubeUrl": "https://www.youtube.com/watch?v=WcgHspwMxTk"
        },
        {
            "id": "p_imm_044",
            "type": "all",
            "partTarget": "",
            "title": "하나님의 어린 양",
            "date": "2025-11-30",
            "youtubeUrl": "https://www.youtube.com/watch?v=1W8iJaKuTN8"
        },
        {
            "id": "p_imm_045",
            "type": "all",
            "partTarget": "",
            "title": "은혜",
            "date": "2025-11-23",
            "youtubeUrl": "https://www.youtube.com/watch?v=3zzjHv1sXiI"
        },
        {
            "id": "p_imm_046",
            "type": "all",
            "partTarget": "",
            "title": "영화롭도다",
            "date": "2025-11-16",
            "youtubeUrl": "https://www.youtube.com/watch?v=FfZTsFy_pug"
        },
        {
            "id": "p_imm_047",
            "type": "all",
            "partTarget": "",
            "title": "거룩하시다",
            "date": "2025-11-09",
            "youtubeUrl": "https://www.youtube.com/watch?v=fIaaoLVB8-I"
        },
        {
            "id": "p_imm_048",
            "type": "all",
            "partTarget": "",
            "title": "순종하는 마음",
            "date": "2025-11-02",
            "youtubeUrl": "https://www.youtube.com/watch?v=FI2aHjWF954"
        },
        {
            "id": "p_imm_049",
            "type": "all",
            "partTarget": "",
            "title": "위대하신 여호와",
            "date": "2025-10-26",
            "youtubeUrl": "https://www.youtube.com/watch?v=3S4N9zuZfZQ"
        },
        {
            "id": "p_imm_050",
            "type": "all",
            "partTarget": "",
            "title": "주와 같이 길 가는 것",
            "date": "2025-10-19",
            "youtubeUrl": "https://www.youtube.com/watch?v=3EMaMdAvjwE"
        },
        {
            "id": "p_imm_051",
            "type": "all",
            "partTarget": "",
            "title": "우리 기쁨이 되시는 예수",
            "date": "2025-10-12",
            "youtubeUrl": "https://www.youtube.com/watch?v=urLnVFRyRHA"
        },
        {
            "id": "p_imm_052",
            "type": "all",
            "partTarget": "",
            "title": "나의 죄를 씻기는",
            "date": "2025-10-05",
            "youtubeUrl": "https://www.youtube.com/watch?v=ZPEiVw644yM"
        },
        {
            "id": "p_imm_053",
            "type": "all",
            "partTarget": "",
            "title": "죄에서 자유를 얻게 함은",
            "date": "2025-09-28",
            "youtubeUrl": "https://www.youtube.com/watch?v=aYSH8CVVLIo"
        },
        {
            "id": "p_imm_054",
            "type": "all",
            "partTarget": "",
            "title": "주 예수 이름 높이어",
            "date": "2025-09-21",
            "youtubeUrl": "https://www.youtube.com/watch?v=NctTP-5pm4Y"
        },
        {
            "id": "p_imm_055",
            "type": "all",
            "partTarget": "",
            "title": "기도 들으소서",
            "date": "2025-09-14",
            "youtubeUrl": "https://www.youtube.com/watch?v=uQD8QhRsqU8"
        },
        {
            "id": "p_imm_056",
            "type": "all",
            "partTarget": "",
            "title": "주께로 행진하세",
            "date": "2025-09-07",
            "youtubeUrl": "https://www.youtube.com/watch?v=0268P2tof_Q"
        },
        {
            "id": "p_imm_057",
            "type": "all",
            "partTarget": "",
            "title": "사명",
            "date": "2025-08-31",
            "youtubeUrl": "https://www.youtube.com/watch?v=aT5Leoq5mIE"
        },
        {
            "id": "p_imm_058",
            "type": "all",
            "partTarget": "",
            "title": "그 사랑",
            "date": "2025-08-24",
            "youtubeUrl": "https://www.youtube.com/watch?v=UmEjLGC117o"
        },
        {
            "id": "p_imm_059",
            "type": "all",
            "partTarget": "",
            "title": "본향을 향하네",
            "date": "2025-08-17",
            "youtubeUrl": "https://www.youtube.com/watch?v=ufwbAygXn7Y"
        },
        {
            "id": "p_imm_060",
            "type": "all",
            "partTarget": "",
            "title": "그런 나라가 되게 하소서",
            "date": "2025-08-10",
            "youtubeUrl": "https://www.youtube.com/watch?v=CjomrXa-Rm0"
        },
        {
            "id": "p_imm_061",
            "type": "all",
            "partTarget": "",
            "title": "주 사랑하는 자",
            "date": "2025-08-03",
            "youtubeUrl": "https://www.youtube.com/watch?v=2BicvpBc6g8"
        },
        {
            "id": "p_imm_062",
            "type": "all",
            "partTarget": "",
            "title": "주님을 노래해 할렐루야",
            "date": "2025-07-27",
            "youtubeUrl": "https://www.youtube.com/watch?v=Nol0a4G7US4"
        },
        {
            "id": "p_imm_063",
            "type": "all",
            "partTarget": "",
            "title": "선한 능력으로",
            "date": "2025-07-20",
            "youtubeUrl": "https://www.youtube.com/watch?v=P4pxI1X2QpM"
        },
        {
            "id": "p_imm_064",
            "type": "all",
            "partTarget": "",
            "title": "하나님의 어린양",
            "date": "2025-07-13",
            "youtubeUrl": "https://www.youtube.com/watch?v=NCPAfbnWX7E"
        },
        {
            "id": "p_imm_065",
            "type": "all",
            "partTarget": "",
            "title": "장 라신느의 찬미가",
            "date": "2025-07-06",
            "youtubeUrl": "https://www.youtube.com/watch?v=8Bozo1DCU4w"
        },
        {
            "id": "p_imm_066",
            "type": "all",
            "partTarget": "",
            "title": "주의 손에 나의 손을 포개고",
            "date": "2025-06-29",
            "youtubeUrl": "https://www.youtube.com/watch?v=ImS8WoqDWbw"
        },
        {
            "id": "p_imm_067",
            "type": "all",
            "partTarget": "",
            "title": "깨뜨린 옥합",
            "date": "2025-06-22",
            "youtubeUrl": "https://www.youtube.com/watch?v=WlPLI5tPXUk"
        },
        {
            "id": "p_imm_068",
            "type": "all",
            "partTarget": "",
            "title": "시편 62편",
            "date": "2025-06-15",
            "youtubeUrl": "https://www.youtube.com/watch?v=6cNNo9hIqU4"
        },
        {
            "id": "p_imm_069",
            "type": "all",
            "partTarget": "",
            "title": "내게 임하옵소서",
            "date": "2025-06-08",
            "youtubeUrl": "https://www.youtube.com/watch?v=sUUTyPLmLb8"
        },
        {
            "id": "p_imm_070",
            "type": "all",
            "partTarget": "",
            "title": "교회",
            "date": "2025-06-01",
            "youtubeUrl": "https://www.youtube.com/watch?v=86vMaJ6nGrg"
        },
        {
            "id": "p_imm_071",
            "type": "all",
            "partTarget": "",
            "title": "이런 교회 되게 하소서",
            "date": "2025-05-25",
            "youtubeUrl": "https://www.youtube.com/watch?v=bOTIn6EvcAE"
        },
        {
            "id": "p_imm_072",
            "type": "all",
            "partTarget": "",
            "title": "기도",
            "date": "2025-05-18",
            "youtubeUrl": "https://www.youtube.com/watch?v=KetBfpbgumQ"
        },
        {
            "id": "p_imm_073",
            "type": "all",
            "partTarget": "",
            "title": "어머니의 넓은 사랑",
            "date": "2025-05-11",
            "youtubeUrl": "https://www.youtube.com/watch?v=8SXVl9Oocyc"
        },
        {
            "id": "p_imm_074",
            "type": "all",
            "partTarget": "",
            "title": "어린이의 마음",
            "date": "2025-05-04",
            "youtubeUrl": "https://www.youtube.com/watch?v=6p-PI1qfFr4"
        },
        {
            "id": "p_imm_075",
            "type": "all",
            "partTarget": "",
            "title": "승천",
            "date": "2025-04-27",
            "youtubeUrl": "https://www.youtube.com/watch?v=4h3BTyq6JWY"
        },
        {
            "id": "p_imm_076",
            "type": "all",
            "partTarget": "",
            "title": "승전가",
            "date": "2025-04-20",
            "youtubeUrl": "https://www.youtube.com/watch?v=_AoA6NMMgpk"
        },
        {
            "id": "p_imm_077",
            "type": "all",
            "partTarget": "",
            "title": "호산나 호산나",
            "date": "2025-04-13",
            "youtubeUrl": "https://www.youtube.com/watch?v=Nx_u6yO_ydY"
        },
        {
            "id": "p_imm_078",
            "type": "all",
            "partTarget": "",
            "title": "겟세마네의 기도",
            "date": "2025-04-06",
            "youtubeUrl": "https://www.youtube.com/watch?v=RoFNgwkH7Vc"
        },
        {
            "id": "p_imm_079",
            "type": "all",
            "partTarget": "",
            "title": "비아 돌로로사",
            "date": "2025-03-30",
            "youtubeUrl": "https://www.youtube.com/watch?v=RFCfEHPMoWc"
        },
        {
            "id": "p_imm_080",
            "type": "all",
            "partTarget": "",
            "title": "하나님의 사랑",
            "date": "2025-03-23",
            "youtubeUrl": "https://www.youtube.com/watch?v=kYObJ5yx5yc"
        },
        {
            "id": "p_imm_081",
            "type": "all",
            "partTarget": "",
            "title": "내 삶의 주인",
            "date": "2025-03-16",
            "youtubeUrl": "https://www.youtube.com/watch?v=KNiJYSvbARU"
        },
        {
            "id": "p_imm_082",
            "type": "all",
            "partTarget": "",
            "title": "나의 자랑은 오직 십자가",
            "date": "2025-03-09",
            "youtubeUrl": "https://www.youtube.com/watch?v=fxyUswMmxwE"
        },
        {
            "id": "p_imm_083",
            "type": "all",
            "partTarget": "",
            "title": "지금은 엘리야 때처럼",
            "date": "2025-03-02",
            "youtubeUrl": "https://www.youtube.com/watch?v=IgJRCD5F0v0"
        },
        {
            "id": "p_imm_084",
            "type": "all",
            "partTarget": "",
            "title": "히브리 노예들의 합창",
            "date": "2025-02-23",
            "youtubeUrl": "https://www.youtube.com/watch?v=fNJ4VuMx0yc"
        },
        {
            "id": "p_imm_085",
            "type": "all",
            "partTarget": "",
            "title": "나를 구한 예수님 이야기",
            "date": "2025-02-16",
            "youtubeUrl": "https://www.youtube.com/watch?v=ymuXLKHpnr8"
        },
        {
            "id": "p_imm_086",
            "type": "all",
            "partTarget": "",
            "title": "주 우리 기도 들으소서",
            "date": "2025-02-09",
            "youtubeUrl": "https://www.youtube.com/watch?v=hLFdoiSAxCE"
        },
        {
            "id": "p_imm_087",
            "type": "all",
            "partTarget": "",
            "title": "여호와 기다려",
            "date": "2025-02-02",
            "youtubeUrl": "https://www.youtube.com/watch?v=mvC3EpG_v30"
        },
        {
            "id": "p_imm_088",
            "type": "all",
            "partTarget": "",
            "title": "만민아 주 찬양해",
            "date": "2025-01-26",
            "youtubeUrl": "https://www.youtube.com/watch?v=WuxQrrSQLE4"
        },
        {
            "id": "p_imm_089",
            "type": "all",
            "partTarget": "",
            "title": "내가 산을 향해 눈을 드니",
            "date": "2025-01-19",
            "youtubeUrl": "https://www.youtube.com/watch?v=fcN4ZXjuR-c"
        },
        {
            "id": "p_imm_090",
            "type": "all",
            "partTarget": "",
            "title": "사랑",
            "date": "2025-01-12",
            "youtubeUrl": "https://www.youtube.com/watch?v=mPLOuOAZE90"
        },
        {
            "id": "p_imm_091",
            "type": "all",
            "partTarget": "",
            "title": "평화의 기도",
            "date": "2025-01-05",
            "youtubeUrl": "https://www.youtube.com/watch?v=xvGRC9hGQPw"
        },
        {
            "id": "p_imm_092",
            "type": "all",
            "partTarget": "",
            "title": "예수 안에 소망 있네",
            "date": "2024-12-29",
            "youtubeUrl": "https://www.youtube.com/watch?v=uoi_3vcc-TI"
        },
        {
            "id": "p_imm_093",
            "type": "all",
            "partTarget": "",
            "title": "참 반가운 성도여",
            "date": "2024-12-25",
            "youtubeUrl": "https://www.youtube.com/watch?v=ZzFkMUgw3W0"
        },
        {
            "id": "p_imm_094",
            "type": "all",
            "partTarget": "",
            "title": "우리를 위해 나셨다, 할렐루야",
            "date": "2024-12-22",
            "youtubeUrl": "https://www.youtube.com/watch?v=T1Zut3w5noA"
        },
        {
            "id": "p_imm_095",
            "type": "all",
            "partTarget": "",
            "title": "주님을 기억합니다",
            "date": "2024-12-15",
            "youtubeUrl": "https://www.youtube.com/watch?v=JwvFVSCoWFc"
        },
        {
            "id": "p_imm_096",
            "type": "all",
            "partTarget": "",
            "title": "우리 때문에",
            "date": "2024-12-08",
            "youtubeUrl": "https://www.youtube.com/watch?v=R3AR_2tqJco"
        },
        {
            "id": "p_imm_097",
            "type": "all",
            "partTarget": "",
            "title": "예수 거룩한 이름",
            "date": "2024-12-01",
            "youtubeUrl": "https://www.youtube.com/watch?v=pdmBmOkEtog"
        },
        {
            "id": "p_imm_098",
            "type": "all",
            "partTarget": "",
            "title": "베드로의 기도",
            "date": "2024-11-24",
            "youtubeUrl": "https://www.youtube.com/watch?v=GzFc6inokL4"
        },
        {
            "id": "p_imm_099",
            "type": "all",
            "partTarget": "",
            "title": "주여 나의 손을 놓지 마소서",
            "date": "2024-11-17",
            "youtubeUrl": "https://www.youtube.com/watch?v=omvMXbPZjQA"
        },
        {
            "id": "p_imm_100",
            "type": "all",
            "partTarget": "",
            "title": "주께서 인도하셨네",
            "date": "2024-11-10",
            "youtubeUrl": "https://www.youtube.com/watch?v=OwrhH8lVIls"
        },
        {
            "id": "p_imm_101",
            "type": "all",
            "partTarget": "",
            "title": "주님 함께해",
            "date": "2024-11-03",
            "youtubeUrl": "https://www.youtube.com/watch?v=NxDe7AeQfu8"
        },
        {
            "id": "p_imm_102",
            "type": "all",
            "partTarget": "",
            "title": "주는 내 피난처",
            "date": "2024-10-27",
            "youtubeUrl": "https://www.youtube.com/watch?v=QWj7aWXkafY"
        },
        {
            "id": "p_imm_103",
            "type": "all",
            "partTarget": "",
            "title": "내가 산을 향하여",
            "date": "2024-10-20",
            "youtubeUrl": "https://www.youtube.com/watch?v=CMHhWD5__Mk"
        },
        {
            "id": "p_imm_104",
            "type": "all",
            "partTarget": "",
            "title": "지금 이곳에",
            "date": "2024-10-13",
            "youtubeUrl": "https://www.youtube.com/watch?v=xQsQ2uWIX-U"
        },
        {
            "id": "p_imm_105",
            "type": "all",
            "partTarget": "",
            "title": "오직 예수",
            "date": "2024-10-06",
            "youtubeUrl": "https://www.youtube.com/watch?v=N2pB-0pv-vE"
        },
        {
            "id": "p_imm_106",
            "type": "all",
            "partTarget": "",
            "title": "주 은혜가 나에게 족하네",
            "date": "2024-09-29",
            "youtubeUrl": "https://www.youtube.com/watch?v=fMKhvvoqyOA"
        },
        {
            "id": "p_imm_107",
            "type": "all",
            "partTarget": "",
            "title": "강하고 담대하라",
            "date": "2024-09-22",
            "youtubeUrl": "https://www.youtube.com/watch?v=QaIPb1hH3W4"
        },
        {
            "id": "p_imm_108",
            "type": "all",
            "partTarget": "",
            "title": "사랑의 갈보리로",
            "date": "2024-09-15",
            "youtubeUrl": "https://www.youtube.com/watch?v=Av1Rq-SlnE8"
        },
        {
            "id": "p_imm_109",
            "type": "all",
            "partTarget": "",
            "title": "주의 죽복 내려주소서",
            "date": "2024-09-08",
            "youtubeUrl": "https://www.youtube.com/watch?v=I9yCJC4XiYg"
        },
        {
            "id": "p_imm_110",
            "type": "all",
            "partTarget": "",
            "title": "우리 함께 가리라",
            "date": "2024-09-01",
            "youtubeUrl": "https://www.youtube.com/watch?v=8P0yk_PMns8"
        },
        {
            "id": "p_imm_111",
            "type": "all",
            "partTarget": "",
            "title": "곧 오소서 임마누엘",
            "date": "2023-12-17",
            "youtubeUrl": "https://www.youtube.com/watch?v=NfVGV9CxBLI"
        }
    ],
  schedules: [],
  members: [
    // === 지휘자 및 반주자 (3명) ===
    { id: 'm_c1', name: '김예훈', part: '임원', role: '지휘자', phone: '010-4169-9505', photoUrl: '' },
    { id: 'm_c2', name: '노인희', part: '임원', role: '반주자', phone: '010-2225-9047', photoUrl: '' },
    { id: 'm_c3', name: '백지원', part: '임원', role: '반주자', phone: '010-3899-6931', photoUrl: '' },

    // === 소프라노 (28명) ===
    { id: 'm_s1', name: '김성희', part: '소프라노', role: '대원', phone: '010-3377-3362', photoUrl: '' },
    { id: 'm_s2', name: '김인숙', part: '소프라노', role: '대원', phone: '010-4384-4842', photoUrl: '' },
    { id: 'm_s3', name: '김영림', part: '소프라노', role: '대원', phone: '010-9922-3194', photoUrl: '' },
    { id: 'm_s4', name: '노현숙', part: '소프라노', role: '대원', phone: '010-8700-0254', photoUrl: '' },
    { id: 'm_s5', name: '변희경', part: '소프라노', role: '대원', phone: '010-2637-6147', photoUrl: '' },
    { id: 'm_s6', name: '손예정', part: '소프라노', role: '대원', phone: '010-6612-5965', photoUrl: '' },
    { id: 'm_s7', name: '안명순', part: '소프라노', role: '대원', phone: '010-3081-3927', photoUrl: '' },
    { id: 'm_s8', name: '오선희', part: '소프라노', role: '대원', phone: '010-3012-0787', photoUrl: '' },
    { id: 'm_s9', name: '유혜영', part: '소프라노', role: '대원', phone: '010-3781-9129', photoUrl: '' },
    { id: 'm_s10', name: '유희은', part: '소프라노', role: '대원', phone: '010-2820-0602', photoUrl: '' },
    { id: 'm_s11', name: '윤희옥', part: '소프라노', role: '대원', phone: '010-5413-8092', photoUrl: '' },
    { id: 'm_s12', name: '이금희', part: '소프라노', role: '대원', phone: '010-7370-5146', photoUrl: '' },
    { id: 'm_s13', name: '이미경', part: '소프라노', role: '대원', phone: '010-5691-2864', photoUrl: '' },
    { id: 'm_s14', name: '이다영', part: '소프라노', role: '대원', phone: '010-2456-1165', photoUrl: '' },
    { id: 'm_s15', name: '이선애', part: '소프라노', role: '대원', phone: '010-6431-1966', photoUrl: '' },
    { id: 'm_s16', name: '이영희', part: '소프라노', role: '대원', phone: '010-2512-2234', photoUrl: '' },
    { id: 'm_s17', name: '이재현', part: '소프라노', role: '대원', phone: '010-7936-1158', photoUrl: '' },
    { id: 'm_s18', name: '이정원', part: '소프라노', role: '대원', phone: '010-3857-5715', photoUrl: '' },
    { id: 'm_s19', name: '임정혜', part: '소프라노', role: '대원', phone: '010-4752-9549', photoUrl: '' },
    { id: 'm_s20', name: '장숙', part: '소프라노', role: '대원', phone: '010-4783-4125', photoUrl: '' },
    { id: 'm_s21', name: '조산초', part: '소프라노', role: '대원', phone: '010-8287-3328', photoUrl: '' },
    { id: 'm_s22', name: '정수정', part: '소프라노', role: '대원', phone: '010-2832-4620', photoUrl: '' },
    { id: 'm_s23', name: '정윤영', part: '소프라노', role: '대원', phone: '010-3465-1807', photoUrl: '' },
    { id: 'm_s24', name: '정혜미', part: '소프라노', role: '대원', phone: '010-5475-1315', photoUrl: '' },
    { id: 'm_s25', name: '하은정', part: '소프라노', role: '대원', phone: '010-3015-9210', photoUrl: '' },
    { id: 'm_s26', name: '한소영', part: '소프라노', role: '대원', phone: '010-3958-0250', photoUrl: '' },
    { id: 'm_s27', name: '홍성희', part: '소프라노', role: '대원', phone: '010-7147-2500', photoUrl: '' },
    { id: 'm_s28', name: '황인동', part: '소프라노', role: '대원', phone: '010-3419-2947', photoUrl: '' },

    // === 알토 (21명) ===
    { id: 'm_a1', name: '김관기', part: '알토', role: '대원', phone: '010-7553-2920', photoUrl: '' },
    { id: 'm_a2', name: '김은영', part: '알토', role: '대원', phone: '010-4354-4350', photoUrl: '' },
    { id: 'm_a3', name: '김정희', part: '알토', role: '대원', phone: '010-4640-2025', photoUrl: '' },
    { id: 'm_a4', name: '김춘호', part: '알토', role: '대원', phone: '010-4749-9700', photoUrl: '' },
    { id: 'm_a5', name: '김현수', part: '알토', role: '대원', phone: '010-8741-7788', photoUrl: '' },
    { id: 'm_a6', name: '박명옥', part: '알토', role: '대원', phone: '010-2635-3596', photoUrl: '' },
    { id: 'm_a7', name: '신묘순', part: '알토', role: '대원', phone: '010-4240-6624', photoUrl: '' },
    { id: 'm_a8', name: '신순애', part: '알토', role: '대원', phone: '010-8967-9909', photoUrl: '' },
    { id: 'm_a9', name: '이명숙', part: '알토', role: '대원', phone: '010-6357-1067', photoUrl: '' },
    { id: 'm_a10', name: '이미숙', part: '알토', role: '대원', phone: '010-3267-3721', photoUrl: '' },
    { id: 'm_a11', name: '이삼순', part: '알토', role: '대원', phone: '010-2583-0424', photoUrl: '' },
    { id: 'm_a12', name: '이정윤', part: '알토', role: '대원', phone: '010-4213-5198', photoUrl: '' },
    { id: 'm_a13', name: '이춘희', part: '알토', role: '대원', phone: '010-6214-5837', photoUrl: '' },
    { id: 'm_a14', name: '임부미', part: '알토', role: '대원', phone: '010-2745-4524', photoUrl: '' },
    { id: 'm_a15', name: '임정숙', part: '알토', role: '대원', phone: '010-3045-8373', photoUrl: '' },
    { id: 'm_a16', name: '전하영', part: '알토', role: '대원', phone: '010-9139-2955', photoUrl: '' },
    { id: 'm_a17', name: '정우택', part: '알토', role: '대원', phone: '010-7115-2632', photoUrl: '' },
    { id: 'm_a18', name: '최보금', part: '알토', role: '대원', phone: '010-8768-8441', photoUrl: '' },
    { id: 'm_a19', name: '최순옥', part: '알토', role: '대원', phone: '010-9919-0342', photoUrl: '' },
    { id: 'm_a20', name: '표성진', part: '알토', role: '대원', phone: '010-9609-0218', photoUrl: '' },
    { id: 'm_a21', name: '홍정자', part: '알토', role: '대원', phone: '010-9788-3216', photoUrl: '' },

    // === 테너 (9명) ===
    { id: 'm_t1', name: '김영섭', part: '테너', role: '대원', phone: '010-4621-2725', photoUrl: '' },
    { id: 'm_t2', name: '김종석', part: '테너', role: '대원', phone: '010-2651-7598', photoUrl: '' },
    { id: 'm_t3', name: '김종선', part: '테너', role: '대원', phone: '010-6327-3377', photoUrl: '' },
    { id: 'm_t4', name: '신현식', part: '테너', role: '대원', phone: '010-9124-4842', photoUrl: '' },
    { id: 'm_t5', name: '이상수', part: '테너', role: '대원', phone: '010-2466-3772', photoUrl: '' },
    { id: 'm_t6', name: '정재근', part: '테너', role: '대원', phone: '010-7456-8399', photoUrl: '' },
    { id: 'm_t7', name: '지형구', part: '테너', role: '대원', phone: '010-3628-7795', photoUrl: '' },
    { id: 'm_t8', name: '최근성', part: '테너', role: '대원', phone: '010-5739-3433', photoUrl: '' },
    { id: 'm_t9', name: '홍창오', part: '테너', role: '대원', phone: '010-3234-6656', photoUrl: '' },

    // === 베이스 (8명) ===
    { id: 'm_b1', name: '김경민', part: '베이스', role: '대원', phone: '010-4934-8588', photoUrl: '' },
    { id: 'm_b2', name: '김경섭', part: '베이스', role: '대원', phone: '010-5441-1966', photoUrl: '' },
    { id: 'm_b3', name: '김문겸', part: '베이스', role: '대원', phone: '010-8226-2920', photoUrl: '' },
    { id: 'm_b4', name: '김이태', part: '베이스', role: '대원', phone: '010-9730-8859', photoUrl: '' },
    { id: 'm_b5', name: '송각수', part: '베이스', role: '대원', phone: '010-7275-7551', photoUrl: '' },
    { id: 'm_b6', name: '우재학', part: '베이스', role: '대원', phone: '010-8570-2128', photoUrl: '' },
    { id: 'm_b7', name: '이광일', part: '베이스', role: '대원', phone: '010-3065-6976', photoUrl: '' },
    { id: 'm_b8', name: '이준환', part: '베이스', role: '대원', phone: '010-8899-0756', photoUrl: '' }
  ],
  prayers: []
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
    
    // 데이터 신규 버전 v7 업데이트 시 최신 데이터 자동 마이그레이션 (대원 명단만 유지)
    if (currentVer !== 'v8') {
      this.saveLocal(STORAGE_KEYS.SCHEDULES, DEFAULT_DATA.schedules);
      this.saveLocal(STORAGE_KEYS.PRAISES, DEFAULT_DATA.praises);
      this.saveLocal(STORAGE_KEYS.NOTICES, DEFAULT_DATA.notices);
      this.saveLocal(STORAGE_KEYS.MEMBERS, DEFAULT_DATA.members);
      this.saveLocal(STORAGE_KEYS.PRAYERS, DEFAULT_DATA.prayers);
      localStorage.setItem(STORAGE_KEYS.DATA_VERSION, 'v7');
    } else {
      if (!localStorage.getItem(STORAGE_KEYS.NOTICES)) this.saveLocal(STORAGE_KEYS.NOTICES, DEFAULT_DATA.notices);
      if (!localStorage.getItem(STORAGE_KEYS.PRAISES)) this.saveLocal(STORAGE_KEYS.PRAISES, DEFAULT_DATA.praises);
      if (!localStorage.getItem(STORAGE_KEYS.SCHEDULES)) this.saveLocal(STORAGE_KEYS.SCHEDULES, DEFAULT_DATA.schedules);
      if (!localStorage.getItem(STORAGE_KEYS.MEMBERS)) this.saveLocal(STORAGE_KEYS.MEMBERS, DEFAULT_DATA.members);
      if (!localStorage.getItem(STORAGE_KEYS.PRAYERS)) this.saveLocal(STORAGE_KEYS.PRAYERS, DEFAULT_DATA.prayers);
    }
  }

  startCloudSync() {
    // 앱 진입 즉시 클라우드 실시간 데이터 동기화
    this.syncFromCloud();

    // 3초 주기 실시간 자동 동기화 (전 대원 기기 초고속 갱신)
    setInterval(() => {
      this.syncFromCloud();
    }, 3000);

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
      const now = Date.now();

      const categoryMap = [
        { cat: 'notices', key: STORAGE_KEYS.NOTICES },
        { cat: 'praises', key: STORAGE_KEYS.PRAISES },
        { cat: 'schedules', key: STORAGE_KEYS.SCHEDULES },
        { cat: 'members', key: STORAGE_KEYS.MEMBERS },
        { cat: 'prayers', key: STORAGE_KEYS.PRAYERS }
      ];

      for (const item of categoryMap) {
        // 로컬에서 유저가 최근 4초 이내에 수정한 항목이나 현재 서버 전송 중인 항목은
        // 이전 응답의 클라우드 GET 데이터로 덮어쓰지 않고 보호합니다 (삭제 부활 & 응답 지연 완벽 방지)
        const isPendingPush = (this.pendingPushCount[item.cat] || 0) > 0;
        const isRecentLocalMutation = (now - (this.lastMutationTime[item.cat] || 0)) < 4000;

        if (isPendingPush || isRecentLocalMutation) {
          continue;
        }

        if (cloudData[item.cat] !== undefined && cloudData[item.cat] !== null && Array.isArray(cloudData[item.cat])) {
          const localStr = localStorage.getItem(item.key) || '[]';
          const cloudStr = JSON.stringify(cloudData[item.cat]);

          if (localStr !== cloudStr) {
            localStorage.setItem(item.key, cloudStr);
            hasChanges = true;
          }
        } else if (cloudData[item.cat] === null || cloudData[item.cat] === undefined) {
          // 클라우드 DB에 카테고리가 생성되지 않은 최초 상태에서만 로컬 초기 데이터 전송
          const localData = this.get(item.key);
          if (localData && localData.length > 0) {
            this.pushCategoryToCloud(item.cat, localData);
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
    }

    // 1. 로컬 스토리지에 즉시 반응형 저장 (0ms)
    this.saveLocal(key, data);

    // 2. 전 대원 공유 클라우드 DB로 비동기 전송 동기화
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
}

window.choirStorage = new ChoirStorage();

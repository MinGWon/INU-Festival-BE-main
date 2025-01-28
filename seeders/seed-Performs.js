'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // id를 1부터 다시 시작하는 로직 추가
    await queryInterface.sequelize.query('ALTER TABLE Notices AUTO_INCREMENT = 1;');
    await queryInterface.bulkInsert(
      'Performs',
      [
        {
          "name": "INUO 오케스트라",
          "date": "5월 07일",
          "day": "day1",
          "time": "17:00 ~ 17:30",
          "category": "동아리",
          "detail": "INUO는 클래식과 연주를 좋아하는 학생들을 중심으로 창단된 인천대 유일한 오케스트라입니다.",
          "img": "temp.img",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "총학생회 프로그램",
          "date": "5월 07일",
          "day": "day1",
          "time": "17:30 ~ 17:50",
          "category": "총학생회",
          "detail": "총학생회에서 진행하는 프로그램입니다.",
          "img": "temp.img",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "커플리온스",
          "date": "5월 07일",
          "day": "day1",
          "time": "17:50 ~ 19:00",
          "category": "동아리",
          "detail": "커플리온스 공연입니다.",
          "img": "temp.img",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "커플리온스",
          "date": "5월 07일",
          "day": "day1",
          "time": "19:30 ~ 20:50",
          "category": "동아리",
          "detail": "커플리온스 공연입니다.",
          "img": "temp.img",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "울림(풍물)",
          "date": "5월 08일",
          "day": "day2",
          "time": "16:00 ~ 16:20",
          "category": "동아리",
          "detail": "동아리 울림의 공연입니다.",
          "img": "temp.img",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "시니어 패션쇼",
          "date": "5월 08일",
          "day": "day2",
          "time": "16:20 ~ 16:45",
          "category": "행사",
          "detail": "시니어 모델 패션쇼입니다.",
          "img": "temp.img",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "포크라인(밴드)",
          "date": "5월 08일",
          "day": "day2",
          "time": "16:45 ~ 17:10",
          "category": "동아리",
          "detail": "인천대학교 중앙어쿠스틱밴드동아리 포크라인 \n어쿠스틱의 매력을 담은 밴드동아리",
          "img": "temp.img",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "크레퍼스",
          "date": "5월 08일",
          "day": "day2",
          "time": "17:10 ~ 17:40",
          "category": "동아리",
          "detail": "국내/해외 락을 중심으로 인디, 재즈, R&B 등 다양한 장르를 다루는 인천대학교 중앙 밴드 동아리입니다.",
          "img": "temp.img",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "파이오니아",
          "date": "5월 08일",
          "day": "day2",
          "time": "17:40 ~ 18:00",
          "category": "동아리",
          "detail": "인디,록,발라드,재즈,팝송 그리고 가요 등 장르 가리지 않고 다양한 음악을 연주하는\n🎸인천대학교 중앙 밴드동아리🎸",
          "img": "temp.img",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "함성",
          "date": "5월 08일",
          "day": "day2",
          "time": "18:40 ~ 19:00",
          "category": "동아리",
          "detail": "인천대학교 중앙 밴드동아리 함성\n🤘🏻다양한 색을 가진 자유로운 밴드동아리🤘🏻",
          "img": "temp.img",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "인스디스",
          "date": "5월 08일",
          "day": "day2",
          "time": "19:00 ~ 19:45",
          "category": "동아리",
          "detail": "힙합, R&B를 아울러 음악을 즐기고 직접 만드는 중앙흑인음악동아리",
          "img": "temp.img",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "IUDC",
          "date": "5월 08일",
          "day": "day2",
          "time": "19:45 ~ 20:25",
          "category": "동아리",
          "detail": "인천대학교 유일무이 중앙댄스동아리 IUDC\n쌈@뽕한 우리애 매력을 느껴봐라✌🏻",
          "img": "temp.img",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "Pit A Pat INUBS 가요제",
          "date": "5월 09일",
          "day": "day3",
          "time": "16:50 ~ 18:30",
          "category": "개인공연",
          "detail": "가요제 참가자분들의 공연입니다.",
          "img": "temp.img",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "총학생회 프로그램",
          "date": "5월 09일",
          "day": "day3",
          "time": "18:30 ~ 18:50",
          "category": "총학생회",
          "detail": "다양한 총학생회 프로그램이 준비되어 있습니다.",
          "img": "temp.img",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "IVE",
          "date": "5월 07일",
          "day": "day1",
          "time": "21:30 ~",
          "category": "연예인",
          "detail": "🌟 아이브(IVE): 대한민국의 6인조 걸그룹으로, 'ELEVEN'과 'LOVE DIVE' 등의 히트곡으로 급부상하며 K-POP 신성으로 자리매김하고 있습니다! 🎶",
          "img": "https://13.125.142.74.nip.io/img/ive2.jpg",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "JAY PARK",
          "date": "5월 09일",
          "day": "day3",
          "time": "21:00 ~",
          "category": "연예인",
          "detail": "🎵 박재범: 전 AOMG와 H1GHR MUSIC의 수장이자, R&B와 힙합 장르에서 뛰어난 실력을 보여주는 대한민국의 가수 겸 프로듀서입니다! 🚀",
          "img": "https://13.125.142.74.nip.io/img/jay.jpeg",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "pH-1",
          "date": "5월 09일",
          "day": "day3",
          "time": "18:50 ~ 19:20",
          "category": "연예인",
          "detail": "오늘만큼은 Not Homebody! \nPh1의 오렌지빛깔🧡의 무대를 즐길 사람?",
          "img": "https://13.125.142.74.nip.io/img/ph1.jpeg",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "청하",
          "date": "5월 09일",
          "day": "day3",
          "time": "20:30 ~ 21:00",
          "category": "연예인",
          "detail": "🎤 청하: 대한민국의 다재다능한 솔로 가수이자 댄서로, 감각적인 무대 매너와 파워풀한 퍼포먼스로 전 세계 팬들의 사랑을 받고 있습니다! 🌟",
          "img": "https://13.125.142.74.nip.io/img/chung.jpeg",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "YB",
          "date": "5월 08일",
          "day": "day2",
          "time": "21:00 ~",
          "category": "연예인",
          "detail": "뼛 속부터 락앤롤🤟! 명불허전 말이 필요없는 무대 YB \n다들 같이 소리질러 ~",
          "img": "https://13.125.142.74.nip.io/img/YB.jpeg",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "장기하",
          "date": "5월 08일",
          "day": "day2",
          "time": "20:25 ~ 21:00",
          "category": "연예인",
          "detail": "하나도 안부러운 장기하 무대 보러 우리 지금 만나??‍♂️~\n",
          "img": "https://13.125.142.74.nip.io/img/장기하.jpeg",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "카더가든",
          "date": "5월 08일",
          "day": "day2",
          "time": "18:00 ~ 18:40",
          "category": "연예인",
          "detail": "오늘만큼은 유튜버 카더정원?이 아닌 감성 발라더 카더가든\n",
          "img": "https://13.125.142.74.nip.io/img/카더가든.jpeg",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "H1 - KEY",
          "date": "5월 07일",
          "day": "day1",
          "time": "19:00 ~ 19:30",
          "category": "연예인",
          "detail": "건물 사이에 피어난 장미! 다들 아시죠?! ?\n역주행 신화를 찍은 하이키가 인천대를 방문합니다~!",
          "img": "https://13.125.142.74.nip.io/img/hi2.jpg",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "BIG Naughty",
          "date": "5월 09일",
          "day": "day3",
          "time": "20:00 ~ 20:30",
          "category": "연예인",
          "detail": "서동현과 낭만찾아 사랑❤️ 찾아 벤쿠버?로 떠나보자 !\n",
          "img": "https://13.125.142.74.nip.io/img/big.jpeg",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "Woodie Gochild",
          "date": "5월 09일",
          "day": "day3",
          "time": "19:20 ~ 20:00",
          "category": "연예인",
          "detail": "컴필 이후로 ˗ˏˋ 우태식 ˎˊ˗ 이 돌아왔다❗️",
          "img": "https://13.125.142.74.nip.io/img/woodie.jpeg",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "CRAVITY",
          "date": "5월 07일",
          "day": "day1",
          "time": "21:10 ~ 21:30",
          "category": "연예인",
          "detail": "과거와 현재를 지나 앞으로 펼쳐질 모든 날들의 빛나는✨ 순간을 노래할 크래비티\n",
          "img": "https://13.125.142.74.nip.io/img/cravity2.jpg",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        },
        {
          "name": "안신애",
          "date": "5월 07일",
          "day": "day1",
          "time": "20:50 ~ 21:10",
          "category": "연예인",
          "detail": "프로듀싱에 노래, 랩까지! 못하는게 뭐야! Respect? 소울풀한 목소리가 매력적인 안신애\n",
          "img": "https://13.125.142.74.nip.io/img/an2.jpg",
          "createdAt": "2024.05.03",
          "updatedAt": "2024.05.03"
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Notices', null, {});
  }
};
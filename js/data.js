const toolsData = [
    {
        "id": 1,
        "title": "See-Think-Wonder v2",
        "description": "관찰-생각-궁금증 사고 루틴 도구",
        "category": "thinking",
        "url": "https://plusiam.github.io/see-think-wonder-v2",
        "emoji": "👁️"
    },
    {
        "id": 2,
        "title": "3-2-1 Bridge",
        "description": "학습 전후 생각 변화 추적 도구",
        "category": "thinking",
        "url": "https://plusiam.github.io/321-bridge-worksheet",
        "emoji": "🌉"
    },
    {
        "id": 3,
        "title": "Think-Puzzle-Explore",
        "description": "생각-퍼즐-탐구 사고 루틴",
        "category": "thinking",
        "url": "https://plusiam.github.io/think-puzzle-explore",
        "emoji": "🧩"
    },
    {
        "id": 4,
        "title": "Connect-Extend-Challenge",
        "description": "연결-확장-도전 사고 확장 도구",
        "category": "thinking",
        "url": "https://plusiam.github.io/connect-extend-challenge",
        "emoji": "🔗"
    },
    {
        "id": 5,
        "title": "Step Inside v2",
        "description": "관점 전환 공감 학습 도구",
        "category": "thinking",
        "url": "https://plusiam.github.io/step-inside-v2",
        "emoji": "👟"
    },
    {
        "id": 6,
        "title": "ORID 성찰 도구",
        "description": "객관-반성-해석-결정 성찰 학습지",
        "category": "thinking",
        "url": "https://plusiam.github.io/orid-reflection-worksheet",
        "emoji": "📋"
    },
    {
        "id": 7,
        "title": "Zoom In",
        "description": "줌인 사고 루틴 - 관찰력 훈련",
        "category": "thinking",
        "url": "https://plusiam.github.io/zoom-in-thinking-routine",
        "emoji": "🔍"
    },
    {
        "id": 8,
        "title": "Color-Symbol-Image",
        "description": "색-상징-이미지 표현 도구",
        "category": "thinking",
        "url": "https://plusiam.github.io/color-symbol-image-worksheet",
        "emoji": "🎨"
    },
    {
        "id": 9,
        "title": "생성-분류-연결-정교화",
        "description": "개념 확장 4단계 사고 도구",
        "category": "thinking",
        "url": "https://plusiam.github.io/generate-classify-connect-elaborate",
        "emoji": "💡"
    },
    {
        "id": 10,
        "title": "Frayer Model",
        "description": "개념 이해 4분면 학습 도구",
        "category": "thinking",
        "url": "https://plusiam.github.io/frayer-model-worksheet",
        "emoji": "📐"
    },
    {
        "id": 11,
        "title": "문장-구-단어",
        "description": "핵심 내용 추출 사고 루틴",
        "category": "thinking",
        "url": "https://plusiam.github.io/sentence-phrase-word",
        "emoji": "✍️"
    },
    {
        "id": 12,
        "title": "Compass Points",
        "description": "나침반 방향 의사결정 도구",
        "category": "thinking",
        "url": "https://plusiam.github.io/compass-point-tool",
        "emoji": "🧭"
    },
    {
        "id": 13,
        "title": "관점 서클",
        "description": "다양한 관점 탐색 인터랙티브 도구",
        "category": "thinking",
        "url": "https://plusiam.github.io/interactive-viewpoints-circle",
        "emoji": "⭕"
    },
    {
        "id": 14,
        "title": "Chalk Talk",
        "description": "침묵의 대화 - 비언어적 토론 도구",
        "category": "thinking",
        "url": "https://plusiam.github.io/chalk-talk",
        "emoji": "🖍️"
    },
    {
        "id": 15,
        "title": "사고가시화 허브",
        "description": "3단계 사고가시화 전략 모음",
        "category": "thinking",
        "url": "https://plusiam.github.io/visible-thinking-hub",
        "emoji": "🏠"
    },
    {
        "id": 16,
        "title": "사고 도구 허브",
        "description": "교육자를 위한 사고가시화 갤러리",
        "category": "thinking",
        "url": "https://plusiam.github.io/thinking-tools-hub",
        "emoji": "🛠️"
    },
    {
        "id": 17,
        "title": "Think Canvas",
        "description": "생각 캔버스 - 시각적 사고 표현",
        "category": "thinking",
        "url": "https://plusiam.github.io/think-canvas-app",
        "emoji": "🖼️"
    },
    {
        "id": 18,
        "title": "감정 탐험가",
        "description": "다양한 감정을 탐색하고 이해하는 도구",
        "category": "emotion",
        "url": "https://plusiam.github.io/emotion-explorer",
        "emoji": "🔍"
    },
    {
        "id": 19,
        "title": "감정 카드 메이커",
        "description": "나만의 감정 카드를 만들어요",
        "category": "emotion",
        "url": "https://plusiam.github.io/emotion-card-maker",
        "emoji": "🃏"
    },
    {
        "id": 20,
        "title": "감정 날씨 일기",
        "description": "날씨로 표현하는 감정 일기",
        "category": "emotion",
        "url": "https://plusiam.github.io/emotion-weather-diary",
        "emoji": "🌈"
    },
    {
        "id": 21,
        "title": "감정 4분면",
        "description": "에너지/쾌-불쾌 기반 감정 탐색",
        "category": "emotion",
        "url": "https://plusiam.github.io/emotion-4quadrant-explorer",
        "emoji": "📊"
    },
    {
        "id": 22,
        "title": "ABC 생각 모델",
        "description": "상황-생각-감정 연결 학습",
        "category": "emotion",
        "url": "https://plusiam.github.io/abc-think",
        "emoji": "🔤"
    },
    {
        "id": 23,
        "title": "ABC 마음 번역기",
        "description": "생각을 감정으로 번역해요",
        "category": "emotion",
        "url": "https://plusiam.github.io/abc-mind-translator",
        "emoji": "🔄"
    },
    {
        "id": 24,
        "title": "ABC 마음 다리",
        "description": "감정 이해와 소통의 다리",
        "category": "emotion",
        "url": "https://plusiam.github.io/abc-heart-bridge",
        "emoji": "💕"
    },
    {
        "id": 25,
        "title": "마음 허브",
        "description": "마음 교육 도구 모음",
        "category": "emotion",
        "url": "https://plusiam.github.io/maum-hub",
        "emoji": "🏠"
    },
    {
        "id": 26,
        "title": "마음 편지",
        "description": "마음을 담은 편지 쓰기",
        "category": "emotion",
        "url": "https://plusiam.github.io/maum-letter",
        "emoji": "💌"
    },
    {
        "id": 27,
        "title": "마음 성장",
        "description": "마음이 자라는 과정 기록",
        "category": "emotion",
        "url": "https://plusiam.github.io/heart-growth",
        "emoji": "🌱"
    },
    {
        "id": 28,
        "title": "갈등 온도계",
        "description": "갈등 상황 온도 측정 도구",
        "category": "emotion",
        "url": "https://plusiam.github.io/conflict-thermometer",
        "emoji": "🌡️"
    },
    {
        "id": 29,
        "title": "마음 레시피 카드",
        "description": "행복한 마음 만들기 레시피",
        "category": "emotion",
        "url": "https://plusiam.github.io/mind-recipe-card",
        "emoji": "🍳"
    },
    {
        "id": 30,
        "title": "가족 사랑 쿠폰",
        "description": "효도 쿠폰 만들기 교육용 도구",
        "category": "family",
        "url": "https://plusiam.github.io/family-love-coupon",
        "emoji": "🎟️"
    },
    {
        "id": 31,
        "title": "가족 사랑 엽서",
        "description": "가족에게 보내는 사랑 엽서",
        "category": "family",
        "url": "https://plusiam.github.io/family-love-postcard",
        "emoji": "💌"
    },
    {
        "id": 32,
        "title": "행복한 순간 그리기",
        "description": "가족과의 소중한 경험 표현",
        "category": "family",
        "url": "https://plusiam.github.io/family-happy-moments-v2",
        "emoji": "📸"
    },
    {
        "id": 33,
        "title": "마음으로 잇는 가족",
        "description": "3학년 도덕 프로젝트 수업 도구",
        "category": "family",
        "url": "https://plusiam.github.io/family-heart-bridge-project",
        "emoji": "🌉"
    },
    {
        "id": 34,
        "title": "가족 3-2-1 브릿지",
        "description": "돼지책 기반 가족 역할 성찰",
        "category": "family",
        "url": "https://plusiam.github.io/family-321-bridge",
        "emoji": "🐷"
    },
    {
        "id": 35,
        "title": "우애를 지켜요",
        "description": "3학년 3단원 우애 학습지",
        "category": "family",
        "url": "https://plusiam.github.io/grade3-brotherly-love",
        "emoji": "🤗"
    },
    {
        "id": 36,
        "title": "아기 돼지 삼형제 마음교실",
        "description": "우애 수업용 인터랙티브 웹사이트",
        "category": "family",
        "url": "https://plusiam.github.io/2025-grade3-unit3-lesson3-friendship",
        "emoji": "🐷"
    },
    {
        "id": 37,
        "title": "우정 레시피",
        "description": "좋은 친구관계 만들기 레시피",
        "category": "friend",
        "url": "https://plusiam.github.io/friendship-recipe",
        "emoji": "🍳"
    },
    {
        "id": 38,
        "title": "우정 색깔 미션",
        "description": "색으로 표현하는 우정 활동",
        "category": "friend",
        "url": "https://plusiam.github.io/friendship-color-mission",
        "emoji": "🌈"
    },
    {
        "id": 39,
        "title": "친구 도우미",
        "description": "친구 문제 해결 도우미",
        "category": "friend",
        "url": "https://plusiam.github.io/friend-helper",
        "emoji": "🙋"
    },
    {
        "id": 40,
        "title": "또래 상담 교육",
        "description": "Gemini AI 기반 공감 학습 도구",
        "category": "friend",
        "url": "https://plusiam.github.io/peer-counseling-education",
        "emoji": "🤗"
    },
    {
        "id": 41,
        "title": "프레드릭 칭찬 활동",
        "description": "친구의 기여 발견하고 칭찬하기",
        "category": "friend",
        "url": "https://plusiam.github.io/frederick-praise-activity",
        "emoji": "🐭"
    },
    {
        "id": 42,
        "title": "투명 아이 학습지",
        "description": "투명해진 아이 그림책 활동",
        "category": "book",
        "url": "https://plusiam.github.io/invisible-child-worksheet",
        "emoji": "👻"
    },
    {
        "id": 43,
        "title": "틸리 학습지",
        "description": "용기와 실천을 배우는 도구",
        "category": "book",
        "url": "https://plusiam.github.io/tilly-interactive-worksheet",
        "emoji": "🦁"
    },
    {
        "id": 44,
        "title": "《내일》 학습지",
        "description": "그림책 '내일' 읽기 활동",
        "category": "book",
        "url": "https://plusiam.github.io/tomorrow-worksheet",
        "emoji": "🌅"
    },
    {
        "id": 45,
        "title": "그림책 허브",
        "description": "그림책 활용 교육 자료 모음",
        "category": "book",
        "url": "https://plusiam.github.io/picturebook-hub",
        "emoji": "📖"
    },
    {
        "id": 46,
        "title": "WhyGenie",
        "description": "AI 대화 도우미",
        "category": "ai",
        "url": "https://plusiam.github.io/whygenie",
        "emoji": "🧞"
    },
    {
        "id": 47,
        "title": "룰루랄라 챗봇",
        "description": "한기쌤의 AI 챗봇",
        "category": "ai",
        "url": "https://plusiam.github.io/lulurala-chatbot",
        "emoji": "💬"
    },
    {
        "id": 48,
        "title": "ABC 친구 도우미",
        "description": "AI 기반 공감 교육 플랫폼",
        "category": "ai",
        "url": "https://plusiam.github.io/abc-friend-helper-lite",
        "emoji": "🤝"
    },
    {
        "id": 49,
        "title": "네티켓 학습지",
        "description": "인터넷 예절 학습 도구",
        "category": "media",
        "url": "https://plusiam.github.io/netiquette-worksheet",
        "emoji": "🌐"
    },
    {
        "id": 50,
        "title": "댓글 온도계",
        "description": "댓글 온도 측정 도구",
        "category": "media",
        "url": "https://plusiam.github.io/comment-thermometer",
        "emoji": "🌡️"
    },
    {
        "id": 51,
        "title": "책임있는 발언",
        "description": "온라인 발언 책임 학습",
        "category": "media",
        "url": "https://plusiam.github.io/responsible-speech-worksheet",
        "emoji": "🎤"
    },
    {
        "id": 52,
        "title": "6학년 도덕 공정",
        "description": "공정한 생활 수업 자료",
        "category": "ethics",
        "url": "https://plusiam.github.io/moral-education-6th-grade",
        "emoji": "📚"
    },
    {
        "id": 53,
        "title": "나의 덕목 캔버스",
        "description": "덕목을 시각화하는 캔버스",
        "category": "ethics",
        "url": "https://plusiam.github.io/my-virtue-canvas",
        "emoji": "🎨"
    },
    {
        "id": 54,
        "title": "버킷 드림 v3",
        "description": "꿈을 담은 버킷리스트",
        "category": "goal",
        "url": "https://plusiam.github.io/bucket-dreams-v3",
        "emoji": "🌟"
    },
    {
        "id": 55,
        "title": "버킷리스트 PWA",
        "description": "PDF 다운로드 지원 앱",
        "category": "goal",
        "url": "https://plusiam.github.io/bucket-list-pwa",
        "emoji": "📱"
    },
    {
        "id": 56,
        "title": "페르소나 목표",
        "description": "페르소나 기반 목표 설정",
        "category": "goal",
        "url": "https://plusiam.github.io/persona-goals",
        "emoji": "👤"
    },
    {
        "id": 57,
        "title": "수업자료 시각화",
        "description": "React 컴포넌트 및 SVG 변환",
        "category": "class",
        "url": "https://plusiam.github.io/teaching-materials-visualization",
        "emoji": "📊"
    },
    {
        "id": 58,
        "title": "웹학습지 시스템",
        "description": "GitHub Pages + Apps Script 연동",
        "category": "class",
        "url": "https://plusiam.github.io/edu-worksheet-system",
        "emoji": "📋"
    },
    {
        "id": 59,
        "title": "깊은 학습 교육과정",
        "description": "교육과정 설계 도구",
        "category": "class",
        "url": "https://plusiam.github.io/deep-learning-curriculum-design",
        "emoji": "🎓"
    },
    {
        "id": 60,
        "title": "PBL 템플릿",
        "description": "프로젝트 기반 학습 템플릿",
        "category": "class",
        "url": "https://plusiam.github.io/pbl-template",
        "emoji": "🛠️"
    },
    {
        "id": 61,
        "title": "뉴스룸",
        "description": "협업 온라인 신문 플랫폼",
        "category": "hub",
        "url": "https://plusiam.github.io/newsroom",
        "emoji": "📰"
    },
    {
        "id": 62,
        "title": "My GPTs",
        "description": "GPTs 모음 웹사이트",
        "category": "hub",
        "url": "https://plusiam.github.io/my-gpts-website",
        "emoji": "🤖"
    },
    {
        "id": 63,
        "title": "마음봄",
        "description": "마음을 피워내는 공간",
        "category": "hub",
        "url": "https://plusiam.github.io/maumbom-website",
        "emoji": "🌸"
    },
    {
        "id": 64,
        "title": "위드-유 인성놀이터",
        "description": "마음챙김 인성 교육 프로그램",
        "category": "hub",
        "url": "https://plusiam.github.io/widyu-mindfulness-website",
        "emoji": "🧘"
    }
];
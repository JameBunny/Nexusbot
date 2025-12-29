// =============================================
// NEXUS BOT - INTERNATIONALIZATION (i18n)
// =============================================
(function () {
  'use strict';

  var translations = {
    th: {
      nav: { home: "หน้าแรก", commands: "คำสั่ง", shop: "ร้านค้า", terms: "ข้อกำหนด", privacy: "ความเป็นส่วนตัว", invite: "เชิญบอท" },
      hero: { subtitle: "บอทเพลง Discord คุณภาพสูง รองรับ YouTube, Spotify และ SoundCloud", servers: "เซิร์ฟเวอร์", users: "ผู้ใช้", songs: "เพลงที่เล่น", addBot: "เพิ่มบอทเข้าเซิร์ฟเวอร์", support: "เซิร์ฟเวอร์ซัพพอร์ต" },
      features: { title: "คุณสมบัติเด่น", subtitle: "ประสบการณ์เพลงที่ดีที่สุดสำหรับ Discord Server ของคุณ", multiPlatform: "รองรับหลายแพลตฟอร์ม", multiPlatformDesc: "เล่นเพลงจาก YouTube, Spotify, SoundCloud และอื่นๆ อีกมากมาย", bassboost: "ปรับแต่งเสียง Bass", bassboostDesc: "5 ระดับ Bass Boost ตั้งแต่นุ่มนวลไปจนถึงระเบิดหู!", "247": "24/7 Online", "247Desc": "บอทอยู่ในห้องตลอด 24 ชั่วโมง แม้ไม่มีคนฟัง", multiLang: "หลายภาษา", multiLangDesc: "รองรับภาษาไทย อังกฤษ และญี่ปุ่น", fast: "ตอบสนองรวดเร็ว", fastDesc: "Latency ต่ำ เสียงคมชัด ไม่กระตุก", lyrics: "แสดงเนื้อเพลง", lyricsDesc: "ดูเนื้อเพลงได้ทันทีขณะฟังเพลง" },
      platforms: { title: "แพลตฟอร์มที่รองรับ" },
      cta: { title: "พร้อมที่จะเริ่มฟังเพลงแล้วหรือยัง?", subtitle: "เพิ่ม Nexus เข้าเซิร์ฟเวอร์ของคุณวันนี้ ฟรี!", button: "เพิ่มบอทตอนนี้" },
      commands: {
        title: "คำสั่งบอท", subtitle: "คู่มือการใช้งานบอทโดยละเอียด", search: "ค้นหาคำสั่ง...", music: "คำสั่งเพลง", settings: "ตั้งค่าระบบ", usage: "การใช้งาน:",
        playDesc: "พิมพ์ชื่อเพลง หรือวางลิงก์ (YouTube/Spotify/SoundCloud) เพื่อเริ่มเล่น",
        stopDesc: "หยุดเล่น, ล้างคิวทั้งหมด และออกจากห้อง",
        skipDesc: "ข้ามเพลงปัจจุบันและเล่นเพลงถัดไป",
        queueDesc: "ดูรายชื่อเพลงทั้งหมดในคิว",
        bassboostDesc: "🎧 ปรับระดับเสียงเบส",
        bassOff: "ปกติ เสียงใส", bassLow: "เบสนุ่ม ลึก (โหมดฟังในรถ)", bassMedium: "เบสกระแทก (โหมดผับ/บาร์)", bassHigh: "สั่นสะเทือน (โหมดคอนเสิร์ต)", bassExtreme: "เบสแตก/หูระเบิด (เตือนแล้วนะ!)",
        "247Desc": "ให้บอทอยู่ในห้องตลอด 24/7 (แม้ไม่มีคนฟัง)",
        languageDesc: "เปลี่ยนภาษาของบอท (อังกฤษ / ไทย / ญี่ปุ่น)",
        pingDesc: "เช็คสถานะเซิร์ฟเวอร์เพลงและความหน่วง (Latency)",
        volumeDesc: "ปรับระดับเสียง (ใส่ตัวเลข 1 ถึง 100)",
        loopDesc: "เปลี่ยนโหมดวนซ้ำ: เพลงเดียว / ทั้งคิว / ปิด",
        clearqueueDesc: "ล้างเพลงทั้งหมดในคิว",
        lyricsDesc: "แสดงเนื้อเพลงของเพลงที่กำลังเล่นอยู่",
        removeDesc: "ลบเพลงที่ระบุออกจากคิว (ระบุลำดับเลข)",
        jumpDesc: "ข้ามไปเล่นเพลงลำดับที่ระบุทันที",
        shuffleDesc: "สุ่มเรียงลำดับเพลงในคิวใหม่ทั้งหมด",
        moveDesc: "ย้ายตำแหน่งเพลงในคิว (จาก -> ไป)",
        tipTitle: "รู้หรือไม่?",
        tipContent: "คุณสามารถ คลิกขวา ที่ข้อความใดก็ได้ → เลือก Apps → Play This เพื่อเล่นเพลงทันที!"
      },
      shop: {
        title: "ร้านค้า", subtitle: "อัพเกรดประสบการณ์เพลงของคุณ",
        free: "ฟรี", premium: "พรีเมียม", lifetime: "ตลอดชีพ", forever: "ตลอดกาล", perMonth: "/เดือน", oneTime: "ครั้งเดียว", popular: "ยอดนิยม",
        getStarted: "เริ่มต้นใช้งาน", subscribe: "สมัครสมาชิก", buyNow: "ซื้อเลย",
        freeFeature1: "คำสั่งเพลงพื้นฐาน", freeFeature2: "คิวได้ 50 เพลง", freeFeature3: "Bass Boost 3 ระดับ", freeFeature4: "รองรับ 3 ภาษา", freeFeature5: "24/7 Mode", freeFeature6: "Audio Filters",
        premiumFeature1: "ทุกอย่างในแพ็คเกจฟรี", premiumFeature2: "คิวไม่จำกัด", premiumFeature3: "Bass Boost 5 ระดับ", premiumFeature4: "24/7 Mode", premiumFeature5: "Audio Filters", premiumFeature6: "Priority Support",
        lifetimeFeature1: "ทุกอย่างในพรีเมียม", lifetimeFeature2: "ไม่ต้องจ่ายรายเดือน", lifetimeFeature3: "Early Access Features", lifetimeFeature4: "Custom Bot Avatar", lifetimeFeature5: "VIP Discord Role", lifetimeFeature6: "Direct Developer Support",
        supportUs: "สนับสนุนเรา", supportDesc: "ซื้อสติ๊กเกอร์ LINE น่ารักๆ ของเราได้ที่นี่!", stickerPack1: "สติ๊กเกอร์ชุดที่ 1", stickerPack2: "สติ๊กเกอร์ชุดที่ 2",
        faq: "คำถามที่พบบ่อย",
        faq1Q: "ฉันจะชำระเงินได้อย่างไร?", faq1A: "คุณสามารถชำระเงินผ่าน PromptPay, บัตรเครดิต/เดบิต หรือ PayPal ติดต่อเราได้ที่ Discord Server",
        faq2Q: "Premium ใช้ได้กี่เซิร์ฟเวอร์?", faq2A: "แพ็คเกจพรีเมียมใช้ได้ 1 เซิร์ฟเวอร์ต่อ 1 สิทธิ์ หากต้องการใช้หลายเซิร์ฟเวอร์ ติดต่อทีมงานเพื่อรับส่วนลดพิเศษ",
        faq3Q: "สามารถขอคืนเงินได้หรือไม่?", faq3A: "เราจะพิจารณาคืนเงินเป็นรายกรณี ภายใน 7 วันหลังซื้อ หากมีปัญหาการใช้งานที่แก้ไขไม่ได้"
      },
      terms: {
        title: "ข้อกำหนดการใช้งาน", lastUpdated: "อัปเดตล่าสุด: 29 ธันวาคม 2025",
        section1Title: "1. การยอมรับข้อกำหนด", section1Content: "เมื่อคุณใช้งาน Nexus Bot ถือว่าคุณยอมรับข้อกำหนดการใช้งานทั้งหมดนี้ หากไม่ยอมรับ กรุณาหยุดใช้งานบอท",
        section2Title: "2. การใช้งานบอท", section2Content: "คุณตกลงที่จะ:",
        section2Item1: "ใช้บอทเพื่อวัตถุประสงค์ที่ถูกกฎหมายเท่านั้น",
        section2Item2: "ไม่ใช้บอทในทางที่ละเมิดลิขสิทธิ์",
        section2Item3: "ไม่พยายาม hack หรือทำลายระบบบอท",
        section2Item4: "ปฏิบัติตามข้อกำหนดของ Discord",
        section3Title: "3. บริการพรีเมียม", section3Content: "สำหรับบริการพรีเมียม:",
        section3Item1: "การชำระเงินเป็นแบบล่วงหน้า",
        section3Item2: "สิทธิ์จะหมดอายุตามระยะเวลาที่ซื้อ",
        section3Item3: "ไม่สามารถโอนย้ายไปเซิร์ฟเวอร์อื่นได้",
        section3Item4: "การคืนเงินพิจารณาเป็นรายกรณี",
        section4Title: "4. ข้อจำกัดความรับผิดชอบ", section4Content: "บอทให้บริการ \"ตามสภาพ\" เราไม่รับประกันว่าบอทจะทำงานได้ตลอดเวลาโดยไม่มีข้อผิดพลาด",
        section5Title: "5. การระงับบริการ", section5Content: "เราขอสงวนสิทธิ์ในการระงับการเข้าถึงบอทของคุณโดยไม่ต้องแจ้งล่วงหน้า หากคุณละเมิดข้อกำหนดใดๆ",
        section6Title: "6. การเปลี่ยนแปลงข้อกำหนด", section6Content: "เราอาจเปลี่ยนแปลงข้อกำหนดได้ตลอดเวลา การใช้งานต่อหลังจากมีการเปลี่ยนแปลงถือว่าคุณยอมรับข้อกำหนดใหม่",
        section7Title: "7. ติดต่อเรา", section7Content: "หากมีคำถามเกี่ยวกับข้อกำหนดการใช้งาน ติดต่อเราได้ที่ Discord Server",
        contactUs: "ติดต่อเรา"
      },
      privacy: {
        title: "นโยบายความเป็นส่วนตัว", lastUpdated: "อัปเดตล่าสุด: 29 ธันวาคม 2025",
        section1Title: "1. ข้อมูลที่เราเก็บรวบรวม", section1Content: "เราเก็บรวบรวมข้อมูลดังต่อไปนี้:",
        section1Item1: "Server ID: เพื่อจัดเก็บการตั้งค่าของเซิร์ฟเวอร์",
        section1Item2: "User ID: เพื่อระบุตัวตนผู้ใช้งาน Premium",
        section1Item3: "การตั้งค่าภาษา: เพื่อแสดงผลภาษาที่ถูกต้อง",
        section1Item4: "ประวัติคำสั่ง: เพื่อปรับปรุงบริการ (เก็บชั่วคราว)",
        section2Title: "2. ข้อมูลที่เราไม่เก็บ", section2Content: "เราไม่เก็บรวบรวมข้อมูลเหล่านี้:",
        section2Item1: "ข้อความส่วนตัวหรือข้อความในช่อง",
        section2Item2: "ข้อมูลเสียงหรือการสนทนา",
        section2Item3: "รหัสผ่านหรือข้อมูลทางการเงิน",
        section2Item4: "ข้อมูลส่วนบุคคลอื่นๆ",
        section3Title: "3. การใช้ข้อมูล", section3Content: "เราใช้ข้อมูลที่เก็บรวบรวมเพื่อ:",
        section3Item1: "ให้บริการบอทตามที่กำหนด",
        section3Item2: "ปรับปรุงและพัฒนาบริการ",
        section3Item3: "จัดการสิทธิ์ Premium",
        section3Item4: "แก้ไขปัญหาทางเทคนิค",
        section4Title: "4. การเก็บรักษาข้อมูล", section4Content: "ข้อมูลการตั้งค่าจะถูกเก็บไว้ตราบเท่าที่บอทยังอยู่ในเซิร์ฟเวอร์ของคุณ เมื่อบอทถูกลบออก ข้อมูลจะถูกลบภายใน 30 วัน",
        section5Title: "5. การแชร์ข้อมูล", section5Content: "เราไม่ขาย ให้เช่า หรือแชร์ข้อมูลของคุณกับบุคคลที่สาม ยกเว้นในกรณีที่กฎหมายกำหนด",
        section6Title: "6. สิทธิ์ของคุณ", section6Content: "คุณมีสิทธิ์:",
        section6Item1: "ขอดูข้อมูลที่เราเก็บเกี่ยวกับคุณ",
        section6Item2: "ขอให้ลบข้อมูลของคุณ",
        section6Item3: "ขอแก้ไขข้อมูลที่ไม่ถูกต้อง",
        section7Title: "7. ความปลอดภัย", section7Content: "เราใช้มาตรการรักษาความปลอดภัยที่เหมาะสมเพื่อปกป้องข้อมูลของคุณ รวมถึงการเข้ารหัสและการจำกัดการเข้าถึง",
        section8Title: "8. การเปลี่ยนแปลงนโยบาย", section8Content: "เราอาจอัปเดตนโยบายนี้เป็นครั้งคราว การเปลี่ยนแปลงจะมีผลเมื่อประกาศบนเว็บไซต์นี้",
        section9Title: "9. ติดต่อเรา", section9Content: "หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว ติดต่อเราได้ที่ Discord Server",
        contactUs: "ติดต่อเรา"
      },
      footer: { description: "บอทเพลง Discord ที่ดีที่สุด", links: "ลิงก์", connect: "ติดต่อเรา" }
    },
    en: {
      nav: { home: "Home", commands: "Commands", shop: "Shop", terms: "Terms", privacy: "Privacy", invite: "Invite Bot" },
      hero: { subtitle: "High-quality Discord music bot supporting YouTube, Spotify and SoundCloud", servers: "Servers", users: "Users", songs: "Songs Played", addBot: "Add to Server", support: "Support Server" },
      features: { title: "Features", subtitle: "The best music experience for your Discord Server", multiPlatform: "Multi-Platform Support", multiPlatformDesc: "Play music from YouTube, Spotify, SoundCloud and more", bassboost: "Bass Boost", bassboostDesc: "5 levels of Bass Boost from smooth to extreme!", "247": "24/7 Online", "247Desc": "Bot stays in voice channel 24/7, even when no one is listening", multiLang: "Multi-Language", multiLangDesc: "Supports Thai, English and Japanese", fast: "Fast Response", fastDesc: "Low latency, crystal clear audio, no stuttering", lyrics: "Show Lyrics", lyricsDesc: "View lyrics instantly while listening" },
      platforms: { title: "Supported Platforms" },
      cta: { title: "Ready to start listening?", subtitle: "Add Nexus to your server today. It's free!", button: "Add Bot Now" },
      commands: {
        title: "Bot Commands", subtitle: "Detailed bot usage guide", search: "Search commands...", music: "Music Commands", settings: "Settings", usage: "Usage:",
        playDesc: "Type song name or paste link (YouTube/Spotify/SoundCloud) to start playing",
        stopDesc: "Stop playing, clear queue and leave the channel",
        skipDesc: "Skip current song and play next",
        queueDesc: "View all songs in queue",
        bassboostDesc: "🎧 Adjust bass level",
        bassOff: "Normal, clear sound", bassLow: "Soft, deep bass (Car mode)", bassMedium: "Punchy bass (Club/Bar mode)", bassHigh: "Heavy bass (Concert mode)", bassExtreme: "Extreme bass (You've been warned!)",
        "247Desc": "Keep bot in channel 24/7 (even when no one is listening)",
        languageDesc: "Change bot language (English / Thai / Japanese)",
        pingDesc: "Check music server status and latency",
        volumeDesc: "Adjust volume (1 to 100)",
        loopDesc: "Change loop mode: Single / Queue / Off",
        clearqueueDesc: "Clear all songs in queue",
        lyricsDesc: "Show lyrics of currently playing song",
        removeDesc: "Remove specified song from queue (by position)",
        jumpDesc: "Jump to specified song position immediately",
        shuffleDesc: "Shuffle all songs in queue",
        moveDesc: "Move song position in queue (from -> to)",
        tipTitle: "Did you know?",
        tipContent: "You can right-click any message → select Apps → Play This to play music instantly!"
      },
      shop: {
        title: "Shop", subtitle: "Upgrade your music experience",
        free: "Free", premium: "Premium", lifetime: "Lifetime", forever: "Forever", perMonth: "/month", oneTime: "One-time", popular: "Popular",
        getStarted: "Get Started", subscribe: "Subscribe", buyNow: "Buy Now",
        freeFeature1: "Basic music commands", freeFeature2: "Queue up to 50 songs", freeFeature3: "3 Bass Boost levels", freeFeature4: "3 Language support", freeFeature5: "24/7 Mode", freeFeature6: "Audio Filters",
        premiumFeature1: "Everything in Free", premiumFeature2: "Unlimited queue", premiumFeature3: "5 Bass Boost levels", premiumFeature4: "24/7 Mode", premiumFeature5: "Audio Filters", premiumFeature6: "Priority Support",
        lifetimeFeature1: "Everything in Premium", lifetimeFeature2: "No monthly payment", lifetimeFeature3: "Early Access Features", lifetimeFeature4: "Custom Bot Avatar", lifetimeFeature5: "VIP Discord Role", lifetimeFeature6: "Direct Developer Support",
        supportUs: "Support Us", supportDesc: "Buy our cute LINE stickers here!", stickerPack1: "Sticker Pack 1", stickerPack2: "Sticker Pack 2",
        faq: "Frequently Asked Questions",
        faq1Q: "How can I pay?", faq1A: "You can pay via PromptPay, Credit/Debit card, or PayPal. Contact us on Discord Server",
        faq2Q: "How many servers can Premium be used on?", faq2A: "Premium package is valid for 1 server per license. Contact us for multi-server discounts",
        faq3Q: "Can I get a refund?", faq3A: "Refunds are considered case by case within 7 days of purchase if there are unresolvable issues"
      },
      terms: {
        title: "Terms of Service", lastUpdated: "Last updated: December 29, 2025",
        section1Title: "1. Acceptance of Terms", section1Content: "By using Nexus Bot, you agree to all these terms. If you don't agree, please stop using the bot.",
        section2Title: "2. Bot Usage", section2Content: "You agree to:",
        section2Item1: "Use the bot for legal purposes only",
        section2Item2: "Not use the bot for copyright infringement",
        section2Item3: "Not attempt to hack or damage the bot system",
        section2Item4: "Comply with Discord's terms of service",
        section3Title: "3. Premium Services", section3Content: "For premium services:",
        section3Item1: "Payment is upfront",
        section3Item2: "Access expires according to purchased period",
        section3Item3: "Cannot be transferred to another server",
        section3Item4: "Refunds considered case by case",
        section4Title: "4. Disclaimer", section4Content: "The bot is provided \"as is\". We don't guarantee the bot will work without errors at all times.",
        section5Title: "5. Service Suspension", section5Content: "We reserve the right to suspend your access without notice if you violate any terms.",
        section6Title: "6. Changes to Terms", section6Content: "We may change terms at any time. Continued use after changes means you accept new terms.",
        section7Title: "7. Contact Us", section7Content: "For questions about terms of service, contact us on Discord Server.", contactUs: "Contact Us"
      },
      privacy: {
        title: "Privacy Policy", lastUpdated: "Last updated: December 29, 2025",
        section1Title: "1. Information We Collect", section1Content: "We collect the following information:",
        section1Item1: "Server ID: To store server settings",
        section1Item2: "User ID: To identify Premium users",
        section1Item3: "Language settings: To display correct language",
        section1Item4: "Command history: To improve service (temporary)",
        section2Title: "2. Information We Don't Collect", section2Content: "We don't collect:",
        section2Item1: "Private messages or channel messages",
        section2Item2: "Voice data or conversations",
        section2Item3: "Passwords or financial information",
        section2Item4: "Other personal information",
        section3Title: "3. Use of Information", section3Content: "We use collected information to:",
        section3Item1: "Provide bot services as specified",
        section3Item2: "Improve and develop services",
        section3Item3: "Manage Premium access",
        section3Item4: "Fix technical issues",
        section4Title: "4. Data Retention", section4Content: "Settings are stored as long as the bot is in your server. When removed, data is deleted within 30 days.",
        section5Title: "5. Data Sharing", section5Content: "We don't sell, rent, or share your data with third parties except as required by law.",
        section6Title: "6. Your Rights", section6Content: "You have the right to:",
        section6Item1: "Request to see data we store about you",
        section6Item2: "Request deletion of your data",
        section6Item3: "Request correction of incorrect data",
        section7Title: "7. Security", section7Content: "We use appropriate security measures to protect your data, including encryption and access restrictions.",
        section8Title: "8. Policy Changes", section8Content: "We may update this policy occasionally. Changes take effect when posted on this website.",
        section9Title: "9. Contact Us", section9Content: "For questions about privacy policy, contact us on Discord Server.", contactUs: "Contact Us"
      },
      footer: { description: "The best Discord music bot", links: "Links", connect: "Connect" }
    },
    ja: {
      nav: { home: "ホーム", commands: "コマンド", shop: "ショップ", terms: "利用規約", privacy: "プライバシー", invite: "Botを招待" },
      hero: { subtitle: "YouTube、Spotify、SoundCloud対応の高品質Discordミュージックボット", servers: "サーバー", users: "ユーザー", songs: "再生曲数", addBot: "サーバーに追加", support: "サポートサーバー" },
      features: { title: "機能", subtitle: "あなたのDiscordサーバーに最高の音楽体験を", multiPlatform: "マルチプラットフォーム", multiPlatformDesc: "YouTube、Spotify、SoundCloudなどから音楽を再生", bassboost: "ベースブースト", bassboostDesc: "ソフトからエクストリームまで5段階のベースブースト！", "247": "24時間オンライン", "247Desc": "誰も聴いていなくても24時間ボイスチャンネルに常駐", multiLang: "多言語対応", multiLangDesc: "タイ語、英語、日本語に対応", fast: "高速レスポンス", fastDesc: "低遅延、クリアな音質、途切れなし", lyrics: "歌詞表示", lyricsDesc: "聴きながらすぐに歌詞を表示" },
      platforms: { title: "対応プラットフォーム" },
      cta: { title: "音楽を始める準備はできましたか？", subtitle: "今日Nexusをあなたのサーバーに追加しましょう。無料です！", button: "今すぐ追加" },
      commands: {
        title: "Botコマンド", subtitle: "詳細な使用ガイド", search: "コマンドを検索...", music: "音楽コマンド", settings: "設定", usage: "使用方法:",
        playDesc: "曲名を入力するかリンク（YouTube/Spotify/SoundCloud）を貼り付けて再生開始",
        stopDesc: "再生停止、キューをクリア、チャンネルから退出",
        skipDesc: "現在の曲をスキップして次を再生",
        queueDesc: "キュー内の全曲を表示",
        bassboostDesc: "🎧 ベースレベルを調整",
        bassOff: "通常、クリアなサウンド", bassLow: "ソフトで深いベース（カーモード）", bassMedium: "パンチの効いたベース（クラブモード）", bassHigh: "ヘビーベース（コンサートモード）", bassExtreme: "エクストリームベース（警告済み！）",
        "247Desc": "誰も聴いていなくてもBotをチャンネルに24時間常駐",
        languageDesc: "Bot言語を変更（英語/タイ語/日本語）",
        pingDesc: "音楽サーバーのステータスと遅延を確認",
        volumeDesc: "音量を調整（1〜100）",
        loopDesc: "ループモードを変更：1曲/キュー全体/オフ",
        clearqueueDesc: "キュー内の全曲をクリア",
        lyricsDesc: "現在再生中の曲の歌詞を表示",
        removeDesc: "指定した曲をキューから削除（位置番号で指定）",
        jumpDesc: "指定した位置の曲にすぐジャンプ",
        shuffleDesc: "キュー内の曲をシャッフル",
        moveDesc: "キュー内の曲の位置を移動（from → to）",
        tipTitle: "知ってましたか？",
        tipContent: "任意のメッセージを右クリック → Apps → Play Thisを選択すると、すぐに音楽を再生できます！"
      },
      shop: {
        title: "ショップ", subtitle: "音楽体験をアップグレード",
        free: "無料", premium: "プレミアム", lifetime: "永久", forever: "永久", perMonth: "/月", oneTime: "一回払い", popular: "人気",
        getStarted: "始める", subscribe: "購読", buyNow: "今すぐ購入",
        freeFeature1: "基本的な音楽コマンド", freeFeature2: "50曲までキュー", freeFeature3: "ベースブースト3段階", freeFeature4: "3言語対応", freeFeature5: "24/7モード", freeFeature6: "オーディオフィルター",
        premiumFeature1: "無料版の全機能", premiumFeature2: "無制限キュー", premiumFeature3: "ベースブースト5段階", premiumFeature4: "24/7モード", premiumFeature5: "オーディオフィルター", premiumFeature6: "優先サポート",
        lifetimeFeature1: "プレミアムの全機能", lifetimeFeature2: "月額支払い不要", lifetimeFeature3: "早期アクセス機能", lifetimeFeature4: "カスタムBotアバター", lifetimeFeature5: "VIP Discordロール", lifetimeFeature6: "開発者直接サポート",
        supportUs: "サポート", supportDesc: "かわいいLINEスタンプをここで購入できます！", stickerPack1: "スタンプパック1", stickerPack2: "スタンプパック2",
        faq: "よくある質問",
        faq1Q: "支払い方法は？", faq1A: "PromptPay、クレジット/デビットカード、PayPalでお支払いいただけます。Discordサーバーでお問い合わせください",
        faq2Q: "プレミアムは何サーバーで使えますか？", faq2A: "プレミアムパッケージは1ライセンスにつき1サーバーで有効です。複数サーバー割引についてはお問い合わせください",
        faq3Q: "返金はできますか？", faq3A: "購入後7日以内で解決できない問題がある場合、個別に検討します"
      },
      terms: {
        title: "利用規約", lastUpdated: "最終更新: 2025年12月29日",
        section1Title: "1. 規約の同意", section1Content: "Nexus Botを使用することで、これらすべての規約に同意したことになります。同意しない場合は、Botの使用を中止してください。",
        section2Title: "2. Botの使用", section2Content: "以下に同意します：",
        section2Item1: "合法的な目的のみでBotを使用する",
        section2Item2: "著作権侵害にBotを使用しない",
        section2Item3: "Botシステムのハッキングや破損を試みない",
        section2Item4: "Discordの利用規約を遵守する",
        section3Title: "3. プレミアムサービス", section3Content: "プレミアムサービスについて：",
        section3Item1: "支払いは前払いです",
        section3Item2: "アクセスは購入期間に応じて期限切れになります",
        section3Item3: "他のサーバーに移行できません",
        section3Item4: "返金は個別に検討されます",
        section4Title: "4. 免責事項", section4Content: "Botは「現状のまま」で提供されます。",
        section5Title: "5. サービスの停止", section5Content: "規約に違反した場合、予告なくアクセスを停止する権利を留保します。",
        section6Title: "6. 規約の変更", section6Content: "規約はいつでも変更される場合があります。変更後も使用を続けた場合、新しい規約に同意したことになります。",
        section7Title: "7. お問い合わせ", section7Content: "利用規約についてのご質問は、Discordサーバーでお問い合わせください。", contactUs: "お問い合わせ"
      },
      privacy: {
        title: "プライバシーポリシー", lastUpdated: "最終更新: 2025年12月29日",
        section1Title: "1. 収集する情報", section1Content: "以下の情報を収集します：",
        section1Item1: "サーバーID：サーバー設定を保存するため",
        section1Item2: "ユーザーID：プレミアムユーザーを識別するため",
        section1Item3: "言語設定：正しい言語を表示するため",
        section1Item4: "コマンド履歴：サービス改善のため（一時的）",
        section2Title: "2. 収集しない情報", section2Content: "以下の情報は収集しません：",
        section2Item1: "プライベートメッセージやチャンネルメッセージ",
        section2Item2: "音声データや会話",
        section2Item3: "パスワードや財務情報",
        section2Item4: "その他の個人情報",
        section3Title: "3. 情報の使用", section3Content: "収集した情報を以下の目的で使用します：",
        section3Item1: "指定されたBotサービスを提供する",
        section3Item2: "サービスを改善・開発する",
        section3Item3: "プレミアムアクセスを管理する",
        section3Item4: "技術的な問題を修正する",
        section4Title: "4. データの保持", section4Content: "設定はBotがサーバーにいる間保存されます。削除された場合、データは30日以内に削除されます。",
        section5Title: "5. データの共有", section5Content: "法律で義務付けられている場合を除き、データを共有しません。",
        section6Title: "6. お客様の権利", section6Content: "以下の権利があります：",
        section6Item1: "保存されているデータの閲覧を要求する",
        section6Item2: "データの削除を要求する",
        section6Item3: "誤ったデータの修正を要求する",
        section7Title: "7. セキュリティ", section7Content: "暗号化やアクセス制限を含む、適切なセキュリティ対策でデータを保護しています。",
        section8Title: "8. ポリシーの変更", section8Content: "このポリシーは随時更新される場合があります。変更はこのウェブサイトに掲載された時点で有効になります。",
        section9Title: "9. お問い合わせ", section9Content: "プライバシーポリシーについてのご質問は、Discordサーバーでお問い合わせください。", contactUs: "お問い合わせ"
      },
      footer: { description: "最高のDiscordミュージックボット", links: "リンク", connect: "連絡先" }
    }
  };

  function getNestedValue(obj, path) {
    if (!obj || !path) return undefined;
    var keys = path.split('.');
    var result = obj;
    for (var i = 0; i < keys.length; i++) {
      if (result && typeof result === 'object' && keys[i] in result) {
        result = result[keys[i]];
      } else {
        return undefined;
      }
    }
    return result;
  }

  function applyTranslations(lang) {
    var langData = translations[lang];
    if (!langData) return;

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      var txt = getNestedValue(langData, key);
      if (txt !== undefined) nodes[i].textContent = txt;
    }

    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < placeholders.length; j++) {
      var pKey = placeholders[j].getAttribute('data-i18n-placeholder');
      var pTxt = getNestedValue(langData, pKey);
      if (pTxt !== undefined) placeholders[j].placeholder = pTxt;
    }

    document.documentElement.lang = lang;
  }

  function setLangDisplay(lang) {
    var el = document.getElementById('currentLang');
    if (!el) return;
    el.textContent = (lang === 'th') ? 'TH' : (lang === 'en') ? 'EN' : 'JP';
  }

  function changeLanguage(lang) {
    if (lang !== 'th' && lang !== 'en' && lang !== 'ja') lang = 'th';
    try { localStorage.setItem('nexus-language', lang); } catch (e) {}
    setLangDisplay(lang);
    applyTranslations(lang);
    var dd = document.getElementById('langDropdown');
    if (dd) dd.classList.remove('active');
  }

  function getSavedLang() {
    try {
      var l = localStorage.getItem('nexus-language');
      if (l === 'th' || l === 'en' || l === 'ja') return l;
    } catch (e) {}
    return 'th';
  }

  function initLanguageSelector() {
    var btn = document.getElementById('langBtn');
    var dropdown = document.getElementById('langDropdown');
    if (!btn || !dropdown) return;

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });

    dropdown.addEventListener('click', function (e) {
      var lang = e.target.getAttribute('data-lang');
      if (lang) {
        changeLanguage(lang);
      }
      e.stopPropagation();
    });

    document.addEventListener('click', function () {
      dropdown.classList.remove('active');
    });
  }

  function init() {
    var lang = getSavedLang();
    setLangDisplay(lang);
    applyTranslations(lang);
    initLanguageSelector();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose to global for safety
  window.changeLanguage = changeLanguage;
})();

// Dữ liệu toàn bộ bài học và thẻ ghi nhớ tiếng Nhật
const LESSON_CATEGORIES = [
  {
    "id": "nhap_mon",
    "name": "🔰 Nhập Môn",
    "folder": "00-nhap-mon"
  },
  {
    "id": "n5",
    "name": "📘 Sơ Cấp 1 (N5)",
    "folder": "01-n5-so-cap-1"
  },
  {
    "id": "n4",
    "name": "📙 Sơ Cấp 2 (N4)",
    "folder": "02-n4-so-cap-2"
  },
  {
    "id": "n3",
    "name": "🏆 Trung Cấp (N3)",
    "folder": "03-n3-trung-cap"
  },
  {
    "id": "bo_tro",
    "name": "📚 Sổ Tay & Tài Liệu",
    "folder": "tai-lieu-bo-tro"
  },
  {
    "id": "luyen_de",
    "name": "📝 Đề Thi N3",
    "folder": "04-luyen-de-n3"
  }
];
const ALL_LESSONS = [
  {
    "id": "nhap_mon_bai_01_hiragana",
    "categoryId": "nhap_mon",
    "categoryName": "🔰 Nhập Môn",
    "filename": "bai-01-hiragana.md",
    "title": "🌸 BÀI 01: BẢNG CHỮ CÁI HIRAGANA (CHỮ MỀM)",
    "content": "# 🌸 BÀI 01: BẢNG CHỮ CÁI HIRAGANA (CHỮ MỀM)\n\n> **Mục tiêu**: Thuộc làu 46 chữ cái Hiragana cơ bản, nắm đúng quy tắc thứ tự nét viết (Stroke Order) và cách phát âm chuẩn xác.\n\n---\n\n## 📖 1. GIỚI THIỆU VỀ HIRAGANA\n- **Hiragana (平仮名)** là bảng chữ cái cơ bản nhất trong tiếng Nhật, dùng để ghi các từ thuần Nhật, trợ từ, và phần biến đổi đuôi của động từ/tính từ (Okurigana).\n- Gồm **46 ký tự cơ bản**, tổ chức theo 5 nguyên âm chính: **A (あ) - I (い) - U (う) - E (え) - O (お)**.\n\n---\n\n## 🔤 2. BẢNG 46 CHỮ CÁI CƠ BẢN\n\n| Hàng | Ký tự & Phiên âm | Ví dụ từ vựng | Nghĩa |\n| :--- | :--- | :--- | :--- |\n| **Hàng A** | **あ** (a) ・ **い** (i) ・ **う** (u) ・ **え** (e) ・ **お** (o) | あめ (ame)<br>いえ (ie)<br>うし (ushi) | Mưa / Kẹo<br>Nhà<br>Con bò |\n| **Hàng Ka** | **か** (ka) ・ **き** (ki) ・ **く** (ku) ・ **け** (ke) ・ **こ** (ko) | かさ (kasa)<br>きく (kiku)<br>こえ (koe) | Cây dù<br>Nghe / Hoa cúc<br>Tiếng, giọng |\n| **Hàng Sa** | **さ** (sa) ・ **し** (shi) ・ **す** (su) ・ **せ** (se) ・ **そ** (so) | さかな (sakana)<br>すし (sushi)<br>そら (sora) | Con cá<br>Món sushi<br>Bầu trời |\n| **Hàng Ta** | **た** (ta) ・ **ち** (chi) ・ **つ** (tsu) ・ **て** (te) ・ **と** (to) | たまご (tamago)<br>ちち (chichi)<br>つき (tsuki) | Quả trứng<br>Bố (mình)<br>Mặt trăng |\n| **Hàng Na** | **な** (na) ・ **に** (ni) ・ **ぬ** (nu) ・ **ね** (ne) ・ **の** (no) | なつ (natsu)<br>いぬ (inu)<br>ねこ (neko) | Mùa hè<br>Con chó<br>Con mèo |\n| **Hàng Ha** | **は** (ha) ・ **ひ** (hi) ・ **ふ** (fu) ・ **へ** (he) ・ **ほ** (ho) | はな (hana)<br>ひと (hito)<br>ほし (hoshi) | Bông hoa / Cái mũi<br>Con người<br>Ngôi sao |\n| **Hàng Ma** | **ま** (ma) ・ **み** (mi) ・ **む** (mu) ・ **め** (me) ・ **も** (mo) | みず (mizu)<br>みみ (mimi)<br>め (me) | Nước<br>Cái tai<br>Đôi mắt |\n| **Hàng Ya** | **や** (ya) ・ （い） ・ **ゆ** (yu) ・ （え） ・ **よ** (yo) | やま (yama)<br>ゆき (yuki)<br>よる (yoru) | Ngọn núi<br>Tuyết<br>Buổi tối |\n| **Hàng Ra** | **ら** (ra) ・ **り** (ri) ・ **る** (ru) ・ **れ** (re) ・ **ろ** (ro) | さくら (sakura)<br>とり (tori)<br>くるま (kuruma) | Hoa anh đào<br>Con chim<br>Xe hơi |\n| **Hàng Wa** | **わ** (wa) ・ （い） ・ （う） ・ （え） ・ **を** (wo/o) | わたし (watashi)<br>ほんをよむ (hon o yomu) | Tôi<br>Đọc sách (を làm trợ từ) |\n| **Âm mũi** | **ん** (n) | ほん (hon)<br>みかん (mikan) | Sách<br>Quả quýt |\n\n---\n\n## ⚠️ 3. CÁC ĐIỂM CẦN LƯU Ý KHI PHÁT ÂM VÀ VIẾT\n1. **Âm `Shi (し)` và `Chi (ち)`**: Phát âm nhẹ nhàng, không uốn lưỡi quá mức như tiếng Anh \"sh\".\n2. **Âm `Tsu (つ)`**: Cắn nhẹ hai hàm răng, bật hơi qua kẽ răng tạo âm \"ts\".\n3. **Âm `Fu (ふ)`**: Không phải \"phu\" hay \"hu\", mà là luồng hơi thổi qua hai làn môi khép hờ.\n4. **Hàng `Ra (ら, り, る, れ, ろ)`**: Đặt đầu lưỡi chạm vòm họng trên (giống âm đệm giữa L và R).\n5. **Cặp chữ dễ nhầm nét**:\n   - `あ` (a) vs `お` (o)\n   - `い` (i) vs `り` (ri)\n   - `さ` (sa) vs `ち` (chi) (ngược hướng nhau)\n   - `ぬ` (nu) vs `め` (me)\n   - `ね` (ne) vs `れ` (re) vs `わ` (wa)\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH\n\n### Bài tập 1: Tập đọc và phiên âm các từ sau sang Romaji\n1. あさ (`____`)\n2. つくえ (`____`)\n3. ともだち (`____`)\n4. にほん (`____`)\n5. くるま (`____`)\n\n### Bài tập 2: Chuyển các từ Romaji sau sang chữ Hiragana\n1. `sakana` -> `________`\n2. `sensei` -> `________`\n3. `yasumi` -> `________`\n4. `hikouki` -> `________`\n5. `omiyage` -> `________`\n\n---\n\n## 🎯 CHECKLIST ĐÁNH GIÁ\n- [ ] Tự viết lại trơn tru bảng Hiragana 46 chữ không cần nhìn mẫu.\n- [ ] Phân biệt được các cặp chữ dễ nhầm: `さ - ち`, `ぬ - め`, `ね - れ - わ`.\n- [ ] Đọc đúng các từ vựng ví dụ trong bài.\n"
  },
  {
    "id": "nhap_mon_bai_02_katakana",
    "categoryId": "nhap_mon",
    "categoryName": "🔰 Nhập Môn",
    "filename": "bai-02-katakana.md",
    "title": "🧊 BÀI 02: BẢNG CHỮ CÁI KATAKANA (CHỮ CỨNG)",
    "content": "# 🧊 BÀI 02: BẢNG CHỮ CÁI KATAKANA (CHỮ CỨNG)\n\n> **Mục tiêu**: Thuộc trọn vẹn 46 chữ cái Katakana, nhận diện từ mượn tiếng nước ngoài (Gairaigo) và các tên riêng quốc tế.\n\n---\n\n## 📖 1. VAI TRÒ CỦA KATAKANA\n- **Katakana (片仮名)** là bảng chữ nét thẳng, dứt khoát, hình học.\n- **Ứng dụng chính**:\n  1. Ghi các **từ mượn tiếng nước ngoài**: `テレビ` (TV), `コーヒー` (Cà phê), `パン` (Bánh mì - mượn tiếng Bồ Đào Nha).\n  2. Ghi **tên người nước ngoài, địa danh quốc tế**: `ベトナム` (Việt Nam), `ハノイ` (Hà Nội).\n  3. Ghi **từ tượng thanh, tượng hình**: `ドキドキ` (hồi hộp thình thịch), `ワンワン` (tiếng chó sủa).\n  4. Nhấn mạnh từ trong câu văn (tương tự như in nghiêng/in hoa trong tiếng Việt).\n\n---\n\n## 🔤 2. BẢNG 46 CHỮ CÁI KATAKANA\n\n| Hàng | Ký tự & Phiên âm | Từ mượn thường gặp | Nghĩa gốc |\n| :--- | :--- | :--- | :--- |\n| **Hàng A** | **ア** (a) ・ **イ** (i) ・ **ウ** (u) ・ **エ** (e) ・ **オ** (o) | アイス (aisu)<br>エレベーター (erebeetaa) | Ice cream (Kem)<br>Elevator (Thang máy) |\n| **Hàng Ka** | **カ** (ka) ・ **キ** (ki) ・ **ク** (ku) ・ **ケ** (ke) ・ **コ** (ko) | カメラ (kamera)<br>クラス (kurasu)<br>コーヒー (koohii) | Camera (Máy ảnh)<br>Class (Lớp học)<br>Coffee (Cà phê) |\n| **Hàng Sa** | **サ** (sa) ・ **シ** (shi) ・ **ス** (su) ・ **セ** (se) ・ **ソ** (so) | サッカー (sakkaa)<br>スポーツ (supootsu)<br>タクシー (takushii) | Soccer (Bóng đá)<br>Sports (Thể thao)<br>Taxi (Xe taxi) |\n| **Hàng Ta** | **タ** (ta) ・ **チ** (chi) ・ **ツ** (tsu) ・ **テ** (te) ・ **ト** (to) | テスト (tesuto)<br>トイレ (toire)<br>トマト (tomato) | Test (Bài thi)<br>Toilet (Nhà vệ sinh)<br>Tomato (Cà chua) |\n| **Hàng Na** | **ナ** (na) ・ **ニ** (ni) ・ **ヌ** (nu) ・ **ネ** (ne) ・ **ノ** (no) | ナイフ (naifu)<br>ノート (nooto)<br>ネクタイ (nekutai) | Knife (Con dao)<br>Notebook (Vở ghi)<br>Necktie (Cà vạt) |\n| **Hàng Ha** | **ハ** (ha) ・ **ヒ** (hi) ・ **フ** (fu) ・ **ヘ** (he) ・ **ホ** (ho) | ホテル (hoteru)<br>ハンバーガー (hanbaagaa) | Hotel (Khách sạn)<br>Hamburger (Bánh kẹp) |\n| **Hàng Ma** | **マ** (ma) ・ **ミ** (mi) ・ **ム** (mu) ・ **メ** (me) ・ **モ** (mo) | ミルク (miruku)<br>スマホ (sumaho) | Milk (Sữa tươi)<br>Smartphone (Điện thoại) |\n| **Hàng Ya** | **ヤ** (ya) ・ （イ） ・ **ユ** (yu) ・ （エ） ・ **ヨ** (yo) | シャツ (shatsu)<br>ユニフォーム (yunifoomu) | Shirt (Áo sơ mi)<br>Uniform (Đồng phục) |\n| **Hàng Ra** | **ラ** (ra) ・ **リ** (ri) ・ **ル** (ru) ・ **レ** (re) ・ **ロ** (ro) | ラジオ (rajio)<br>レストラン (resutoran) | Radio (Đài radio)<br>Restaurant (Nhà hàng) |\n| **Hàng Wa** | **ワ** (wa) ・ （イ） ・ （ウ） ・ （エ） ・ **ヲ** (wo) | ワイン (wain) | Wine (Rượu vang) |\n| **Âm mũi** | **ン** (n) | パン (pan)<br>マンション (manshon) | Pain (Bánh mì)<br>Mansion (Chung cư) |\n\n---\n\n## ⚠️ 3. BẬY KINH ĐIỂN CẦN PHÂN BIỆT RÕ (CỰC KỲ QUAN TRỌNG)\n\n### Nhóm 1: `シ` (shi) vs `ツ` (tsu)\n- **`シ` (shi)**: Nét phẩy vuốt **từ dưới chếch lên trên** (2 chấm nằm ngang hơn).\n- **`ツ` (tsu)**: Nét phẩy vuốt **từ trên chúc xuống dưới** (2 chấm đứng hơn).\n\n### Nhóm 2: `ソ` (so) vs `ン` (n)\n- **`ソ` (so)**: Vuốt **từ trên xuống dưới**.\n- **`ン` (n)**: Vuốt **từ dưới vuốt lên**.\n\n### Nhóm 3: `ク` (ku) vs `ワ` (wa) vs `タ` (ta)\n- `ク` (ku): Không có nét móc trái trên đầu.\n- `ワ` (wa): Có nét đứng ngắn phía bên trái.\n- `タ` (ta): Có thêm nét gạch ngang xuyên qua ở giữa.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH\n1. Dịch các từ sau sang Katakana:\n   - `Bus` (Xe buýt) -> `バス`\n   - `Computer` (Máy tính) -> `コンピューター`\n   - `Menu` (Thực đơn) -> `メニュー`\n   - `Hotel` (Khách sạn) -> `ホテル`\n2. Đọc và dịch nghĩa các từ Katakana sau:\n   - `スーパー` -> (`Supermarket - Siêu thị`)\n   - `パスポート` -> (`Passport - Hộ chiếu`)\n   - `ビール` -> (`Beer - Bia`)\n"
  },
  {
    "id": "nhap_mon_bai_03_am_duc_am_ghep_truong_am",
    "categoryId": "nhap_mon",
    "categoryName": "🔰 Nhập Môn",
    "filename": "bai-03-am-duc-am-ghep-truong-am.md",
    "title": "🎵 BÀI 03: ÂM ĐỤC, ÂM GHÉP, TRƯỜNG ÂM & XÚC ÂM",
    "content": "# 🎵 BÀI 03: ÂM ĐỤC, ÂM GHÉP, TRƯỜNG ÂM & XÚC ÂM\n\n> **Mục tiêu**: Làm chủ 100% hệ thống quy tắc ngữ âm tiếng Nhật để đọc chính xác bất kỳ văn bản nào.\n\n---\n\n## 1. ÂM ĐỤC (DAKUON 濁音) VÀ ÂM BÁN ĐỤC (HANDAKUON 半濁音)\n\nBằng cách thêm dấu `\" ` (Tenten) hoặc dấu `゜` (Maru) vào góc trên bên phải của các chữ cái:\n\n| Hàng gốc | Thêm Tenten (Dakuon) | Phát âm | Thêm Maru (Handakuon) | Phát âm |\n| :--- | :--- | :--- | :--- | :--- |\n| **Ka (か)** | **が ・ ぎ ・ ぐ ・ げ ・ ご** | ga - gi - gu - ge - go | — | — |\n| **Sa (さ)** | **ざ ・ じ ・ ず ・ ぜ ・ ぞ** | za - **ji** - zu - ze - zo | — | — |\n| **Ta (た)** | **だ ・ ぢ ・ づ ・ で ・ ど** | da - **ji** - **zu** - de - do | — | — |\n| **Ha (は)** | **ば ・ び ・ ぶ ・ べ ・ ぼ** | ba - bi - bu - be - bo | **ぱ ・ ぴ ・ ぷ ・ ぺ ・ ぽ** | pa - pi - pu - pe - po |\n\n> 📌 **Ví dụ**:\n> - `ぎんこう` (Ginkou): Ngân hàng\n> - `でんしゃ` (Densha): Tàu điện\n> - `パスポート` (Pasupooto): Hộ chiếu\n\n---\n\n## 2. ÂM GHÉP / ẢO ÂM (YOUON 拗音)\n\nGhép các chữ thuộc cột `i` (き, し, ち, に, ひ, み, り, ぎ, じ, び, ぴ) với các chữ **ゃ (ya), ゅ (yu), ょ (yo)** viết nhỏ bằng 1/2 chữ thường.\n\n| Ghép | Hiragana | Phát âm | Katakana | Ví dụ |\n| :--- | :--- | :--- | :--- | :--- |\n| Ki + ya/yu/yo | **きゃ ・ きゅ ・ きょ** | kya - kyu - kyo | **キャ ・ キュ ・ キョ** | きゃく (kyaku - khách hàng) |\n| Shi + ya/yu/yo | **しゃ ・ しゅ ・ しょ** | sha - shu - sho | **シャ ・ シュ ・ ショ** | しゃしん (shashin - bức ảnh) |\n| Chi + ya/yu/yo | **ちゃ ・ ちゅ ・ ちょ** | cha - chu - cho | **チャ ・ チュ ・ チョ** | おちゃ (ocha - trà xanh) |\n| Ni + ya/yu/yo | **にゃ ・ にゅ ・ にょ** | nya - nyu - nyo | **ニャ ・ ニュ ・ ニョ** | にゅうがく (nhập học) |\n| Ryu + ya/yu/yo | **りゃ ・ りゅ ・ りょ** | rya - ryu - ryo | **リャ ・ リュ ・ リョ** | りょこう (ryokou - du lịch) |\n| Ji + ya/yu/yo | **じゃ ・ じゅ ・ じょ** | ja - ju - jo | **ジャ ・ ジュ ・ ジョ** | じゅぎょう (jugyou - giờ học) |\n\n---\n\n## 3. TRƯỜNG ÂM (CHOUON 長音 - KÉO DÀI ÂM)\n\nTrường âm làm thay đổi hoàn toàn nghĩa của từ! Phát âm kéo dài bằng **2 nhịp phách (2 beats)**.\n\n### A. Trong chữ Hiragana:\n1. **Hàng A** thêm `あ`: `おかあさん` (Okaasan - Mẹ) khác với `おばさん` (Cô/Dì).\n2. **Hàng I** thêm `い`: `おにいさん` (Oniisan - Anh trai).\n3. **Hàng U** thêm `う`: `ぎゅうにゅう` (Gyuunyuu - Sữa bò).\n4. **Hàng E** thêm `え` hoặc `い`: `せんせい` (Sensei - Thầy cô), `おねえさん` (Oneesan - Chị gái).\n5. **Hàng O** thêm `う` (phổ biến) hoặc `お`: `とうきょう` (Toukyou - Tokyo), `おおきい` (Ookii - To lớn).\n\n### B. Trong chữ Katakana:\nDùng duy nhất dấu gạch ngang **`ー`**:\n- `コーヒー` (koohii - Cà phê)\n- `タクシー` (takushii - Xe taxi)\n- `カード` (kaado - Thẻ card)\n\n---\n\n## 4. XÚC ÂM / ÂM NGẮT (SOKUON 促音)\n\n- Thể hiện bằng chữ **っ (tsu nhỏ)** trong Hiragana hoặc **ッ** trong Katakana.\n- **Cách phát âm**: Ngắt luồng hơi bằng 1 nhịp khựng lại trước khi phát âm phụ âm đứng sau (k, s, t, p).\n- **Ví dụ**:\n  - `きって` (kitte - Con tem) khác với `きて` (kite - Hãy đến).\n  - `がっこう` (gakkou - Trường học).\n  - `コップ` (koppu - Cái cốc/ly).\n  - `チケット` (chiketto - Vé).\n"
  },
  {
    "id": "nhap_mon_bai_04_chao_hoi_va_so_dem_can_ban",
    "categoryId": "nhap_mon",
    "categoryName": "🔰 Nhập Môn",
    "filename": "bai-04-chao-hoi-va-so-dem-can-ban.md",
    "title": "🤝 BÀI 04: CHÀO HỎI GIAO TIẾP & SỐ ĐẾM CƠ BẢN",
    "content": "# 🤝 BÀI 04: CHÀO HỎI GIAO TIẾP & SỐ ĐẾM CƠ BẢN\n\n> **Mục tiêu**: Giao tiếp tự tin các câu chào hỏi thường nhật, nắm vững hệ thống số đếm từ 0 đến 100.000 trong tiếng Nhật.\n\n---\n\n## 1. CÂU CHÀO HỎI THƯỜNG NHẬT (AISATSU 挨拶)\n\n| Tiếng Nhật | Hiragana | Romaji | Ý nghĩa & Hoàn cảnh sử dụng |\n| :--- | :--- | :--- | :--- |\n| **おはようございます** | おはようございます | Ohayou gozaimasu | Chào buổi sáng (Lịch sự). Bạn bè thân thiết dùng: *Ohayou* |\n| **こんにちは** | こんにちは | Konnichiwa | Chào buổi trưa / chiều (Chào chung từ 10h sáng - 5h chiều) |\n| **こんばんは** | こんばんは | Konbanwa | Chào buổi tối (Sau khi trời sập tối) |\n| **おやすみなさい** | おやすみなさい | Oyasuminasai | Chúc ngủ ngon (Lịch sự). Bạn bè dùng: *Oyasumi* |\n| **ありがとうございます**| ありがとうございます | Arigatou gozaimasu | Cảm ơn rất nhiều (Trang trọng). Thân mật: *Arigatou* |\n| **すみません** | すみません | Sumimasen | Xin lỗi (khi làm phiền) / Cảm ơn khi được giúp đỡ / Gọi phục vụ |\n| **ごめんなさい** | ごめんなさい | Gomennasai | Xin lỗi (Khi bản thân phạm sai lầm) |\n| **いただきます** | いただきます | Itadakimasu | Câu nói trước khi ăn cơm (\"Tôi xin phép nhận bữa ăn\") |\n| **ごちそうさまでした** | ごちそうさまでした | Gochisousama deshita | Câu nói sau khi ăn xong (\"Cảm ơn vì bữa ăn ngon\") |\n| **はじめまして** | はじめまして | Hajimemashite | Rất hân hạnh được gặp lần đầu tiên |\n| **よろしくおねがいします** | よろしくおねがいします | Yoroshiku onegaishimasu | Rất mong nhận được sự giúp đỡ của bạn |\n\n---\n\n## 2. HỆ THỐNG SỐ ĐẾM CĂN BẢN (0 - 99)\n\n| Số | Chữ Hán | Hiragana | Romaji | Lưu ý đặc biệt |\n| :---: | :---: | :--- | :--- | :--- |\n| 0 | 零 | ゼロ / れい | zero / rei | |\n| 1 | 一 | いち | ichi | |\n| 2 | 二 | に | ni | |\n| 3 | 三 | さん | san | |\n| 4 | 四 | **よん / し** | yon / shi | Trong đếm số thường dùng **よん** |\n| 5 | 五 | ご | go | |\n| 6 | 六 | ろく | roku | |\n| 7 | 七 | **なな / しち** | nana / shichi | Thường dùng **なな** |\n| 8 | 八 | はち | hachi | |\n| 9 | 九 | **きゅう / く** | kyuu / ku | Thường dùng **きゅう** |\n| 10 | 十 | じゅう | juu | |\n\n### Công thức ghép số hàng chục:\n- `11` = 10 + 1: `じゅういち` (juuichi)\n- `20` = 2 x 10: `にじゅう` (nijuu)\n- `45` = 4 x 10 + 5: `よんじゅうご` (yonjuugo)\n- `99` = 9 x 10 + 9: `きゅうじゅうきゅう` (kyuujuukyuu)\n\n---\n\n## 3. CÁC HÀNG SỐ LỚN (TRĂM - NGHÌN - VẠN)\n\n- **Trăm (百 - Hyaku)**:\n  - 100: `ひゃく` (hyaku)\n  - 300: `さんびゃく` (san**byaku** - Biến âm)\n  - 600: `ろっぴゃく` (ro**ppyaku** - Biến âm xúc âm)\n  - 800: `はっぴゃく` (ha**ppyaku** - Biến âm xúc âm)\n- **Nghìn (千 - Sen)**:\n  - 1.000: `せん` (sen)\n  - 3.000: `さんぜん` (san**zen** - Biến âm)\n  - 8.000: `はっせん` (ha**ssen** - Xúc âm)\n- **Vạn (万 - Man = 10.000)**: *Lưu ý: Tiếng Nhật phân tách 4 chữ số (đơn vị Vạn)*\n  - 10.000: `いちまん` (ichiman - 1 vạn)\n  - 50.000: `ごまん` (goman - 5 vạn)\n  - 100.000: `じゅうまん` (juuman - 10 vạn)\n\n---\n\n## ✍️ THỰC HÀNH TỰ GIỚI THIỆU BẢN THÂN (JIKOSHOUKAI)\n> **Mẫu chuẩn**:\n> \n> はじめまして。(Hajimemashite.)  \n> わたしは [Tên bạn] です。(Watashi wa [Tên bạn] desu.)  \n> ベトナムじん です。(Betonamujin desu. - Tôi là người Việt Nam.)  \n> どうぞ よろしく おねがいします。(Douzo yoroshiku onegaishimasu.)\n"
  },
  {
    "id": "n5_bai_01",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-01.md",
    "title": "📘 BÀI 01: Tự giới thiệu bản thân & Khẳng định / Phủ định / Nghi vấn căn bản",
    "content": "# 📘 BÀI 01: Tự giới thiệu bản thân & Khẳng định / Phủ định / Nghi vấn căn bản\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 1)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ từ vựng và mẫu ngữ pháp trọng điểm của Bài 1.\n- Vận dụng vào giao tiếp thực tế và giải chính xác các dạng bài thi JLPT N5.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n\n| Tiếng Nhật | Hán tự | Âm Hán Việt | Nghĩa tiếng Việt |\n| :--- | :--- | :--- | :--- |\n| **わたし** | 私 | Tư | Tôi |\n| **あなた** |  |  | Bạn / Anh / Chị |\n| **あのひと / あのかた** | あの人 / あの型 | Nhân / Phương | Người kia / Vị kia (Lịch sự) |\n| **せんせい** | 先生 | Tiên sinh | Thầy/cô giáo (người khác) |\n| **きょうし** | 教師 | Giáo sư | Giáo viên (nghề nghiệp bản thân) |\n| **がくせい** | 学生 | Học sinh | Học sinh, sinh viên |\n| **かいしゃいん** | 会社員 | Hội xã viên | Nhân viên công ty |\n| **いしゃ** | 医者 | Y giả | Bác sĩ |\n| **エンジニア** |  |  | Kỹ sư |\n| **だいがく** | 大学 | Đại học | Trường đại học |\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### 1. Mẫu câu: `N1 は N2 です`\n- **Ý nghĩa**: N1 là N2 (Khẳng định lịch sự)\n- **Ví dụ mẫu**:\n  > 🇯🇵 **わたしは タン です。(Tôi là Thắng.)**\n\n### 2. Mẫu câu: `N1 は N2 じゃありません / ではありません`\n- **Ý nghĩa**: N1 không phải là N2 (Phủ định lịch sự)\n- **Ví dụ mẫu**:\n  > 🇯🇵 **サントスさんは がくせいじゃありません。(Anh Santos không phải là học sinh.)**\n\n### 3. Mẫu câu: `N1 は N2 ですか`\n- **Ý nghĩa**: N1 có phải là N2 không? (Câu hỏi nghi vấn)\n- **Ví dụ mẫu**:\n  > 🇯🇵 **ミラーさんは アメリカじん ですか。(Anh Miller có phải người Mỹ không?)**\n\n### 4. Mẫu câu: `N も`\n- **Ý nghĩa**: Cũng là N (Đồng nhất tính chất)\n- **Ví dụ mẫu**:\n  > 🇯🇵 **ミラーさんは かいしゃいんです。グエンさんも かいしゃいんです。(Anh Miller là nhân viên công ty. Anh Nguyễn cũng là nhân viên công ty.)**\n\n### 5. Mẫu câu: `N1 の N2`\n- **Ý nghĩa**: N2 của N1 / N2 thuộc về N1\n- **Ví dụ mẫu**:\n  > 🇯🇵 **わたしは IMCの しゃいんです。(Tôi là nhân viên của công ty IMC.)**\n\n### 6. Mẫu câu: `〜さい (〜歳) / おいくつ / なんさい`\n- **Ý nghĩa**: Hỏi và nói tuổi tác\n- **Ví dụ mẫu**:\n  > 🇯🇵 **タワポンさんは なんさいですか。ー ２５さいです。(Anh Thawaphon bao nhiêu tuổi? - 25 tuổi.)**\n\n---\n\n## 🈸 4. CHỮ HÁN CẦN NHỚ (KANJI FOCUS)\n\n| Chữ Hán | Âm Hán Việt | Nghĩa | Onyomi (Âm Hán) | Kunyomi (Âm thuần Nhật) |\n| :---: | :--- | :--- | :--- | :--- |\n| **一** | Nhất | Một | ichi | hito-tsu |\n| **二** | Nhị | Hai | ni | futa-tsu |\n| **三** | Tam | Ba | san | mit-tsu |\n| **人** | Nhân | Người | jin, nin | hito |\n\n---\n\n## ✍️ 5. BÀI TẬP THỰC HÀNH CỦNG CỐ\n\n### Bài 1: Chọn trợ từ thích hợp điền vào chỗ trống (は, が, を, に, で, へ, と, も, から, まで)\n1. わたし （　） タンです。\n2. あした とうきょう （　） いきます。\n3. ぎんこうは 9じ （　） 3じ （　） です。\n4. なんで いきますか。ー タクシー （　） いきます。\n\n### 🔑 ĐÁP ÁN VÀ GIẢI THÍCH:\n1. `は` (Trợ từ chỉ chủ ngữ đề tài).\n2. `へ` (Chỉ phương hướng, đích đến).\n3. `から / まで` (Từ 9h đến 3h).\n4. `で` (Chỉ phương tiện di chuyển).\n\n---\n\n## 🎯 6. CHECKLIST TỰ ĐÁNH GIÁ\n- [ ] Ghi nhớ 100% từ vựng của Bài 1.\n- [ ] Vận dụng trôi chảy các cấu trúc ngữ pháp mẫu.\n- [ ] Nhận diện và viết đúng các chữ Hán trong bài.\n"
  },
  {
    "id": "n5_bai_02",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-02.md",
    "title": "📘 BÀI 02: Chỉ định từ Đồ vật: これ, それ, あれ & Sở hữu đồ vật",
    "content": "# 📘 BÀI 02: Chỉ định từ Đồ vật: これ, それ, あれ & Sở hữu đồ vật\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 2)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ từ vựng và mẫu ngữ pháp trọng điểm của Bài 2.\n- Vận dụng vào giao tiếp thực tế và giải chính xác các dạng bài thi JLPT N5.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n\n| Tiếng Nhật | Hán tự | Âm Hán Việt | Nghĩa tiếng Việt |\n| :--- | :--- | :--- | :--- |\n| **これ / それ / あれ** |  |  | Cái này (gần người nói) / Cái đó (gần người nghe) / Cái kia (xa cả hai) |\n| **ほん** | 本 | Bổn/Bản | Sách |\n| **じしょ** | 辞書 | Từ thư | Từ điển |\n| **ざっし** | 雑誌 | Tạp chí | Tạp chí |\n| **しんぶん** | 新聞 | Tân văn | Báo chí |\n| **ノート** |  |  | Vở ghi chép |\n| **てちょう** | 手帳 | Thủ trướng | Sổ tay cá nhân |\n| **めいし** | 名刺 | Danh thứ | Danh thiếp |\n| **とけい** | 時計 | Thời kế | Đồng hồ |\n| **かさ** | 傘 | Tản | Cây dù/ô |\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### 1. Mẫu câu: `これ / それ / あれ は N です`\n- **Ý nghĩa**: Cái này / Cái đó / Cái kia là N\n- **Ví dụ mẫu**:\n  > 🇯🇵 **これは ほんです。(Đây là quyển sách.) / あれは じどうしゃです。(Kia là ô tô.)**\n\n### 2. Mẫu câu: `この N / その N / あの N`\n- **Ý nghĩa**: Cái N này / Cái N đó / Cái N kia (đi liền danh từ)\n- **Ví dụ mẫu**:\n  > 🇯🇵 **この かさは わたしのです。(Cây dù này là của tôi.)**\n\n### 3. Mẫu câu: `そうです / そうじゃありません`\n- **Ý nghĩa**: Đúng vậy / Không phải vậy (Xác nhận thông tin)\n- **Ví dụ mẫu**:\n  > 🇯🇵 **それは じしょですか。ー はい、そうです。(Đó là từ điển phải không? - Vâng, đúng vậy.)**\n\n### 4. Mẫu câu: `〜ですか、〜ですか`\n- **Ý nghĩa**: Câu hỏi lựa chọn (A hay là B?)\n- **Ví dụ mẫu**:\n  > 🇯🇵 **これは 「９」ですか、「７」ですか。(Đây là số 9 hay số 7?)**\n\n### 5. Mẫu câu: `N1 の N2 (Nội dung & Sở hữu)`\n- **Ý nghĩa**: Sách về N1 hoặc Đồ của N1\n- **Ví dụ mẫu**:\n  > 🇯🇵 **これは にほんごの ほんです。(Đây là sách tiếng Nhật.) / だれの かばんですか。(Cặp của ai thế?)**\n\n---\n\n## 🈸 4. CHỮ HÁN CẦN NHỚ (KANJI FOCUS)\n\n| Chữ Hán | Âm Hán Việt | Nghĩa | Onyomi (Âm Hán) | Kunyomi (Âm thuần Nhật) |\n| :---: | :--- | :--- | :--- | :--- |\n| **四** | Tứ | Bốn | shi | yon, yot-tsu |\n| **五** | Ngũ | Năm | go | itsu-tsu |\n| **本** | Bản | Gốc, sách | hon | moto |\n\n---\n\n## ✍️ 5. BÀI TẬP THỰC HÀNH CỦNG CỐ\n\n### Bài 1: Chọn trợ từ thích hợp điền vào chỗ trống (は, が, を, に, で, へ, と, も, から, まで)\n1. わたし （　） タンです。\n2. あした とうきょう （　） いきます。\n3. ぎんこうは 9じ （　） 3じ （　） です。\n4. なんで いきますか。ー タクシー （　） いきます。\n\n### 🔑 ĐÁP ÁN VÀ GIẢI THÍCH:\n1. `は` (Trợ từ chỉ chủ ngữ đề tài).\n2. `へ` (Chỉ phương hướng, đích đến).\n3. `から / まで` (Từ 9h đến 3h).\n4. `で` (Chỉ phương tiện di chuyển).\n\n---\n\n## 🎯 6. CHECKLIST TỰ ĐÁNH GIÁ\n- [ ] Ghi nhớ 100% từ vựng của Bài 2.\n- [ ] Vận dụng trôi chảy các cấu trúc ngữ pháp mẫu.\n- [ ] Nhận diện và viết đúng các chữ Hán trong bài.\n"
  },
  {
    "id": "n5_bai_03",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-03.md",
    "title": "📘 BÀI 03: Chỉ định từ Nơi chốn: ここ, そこ, あそこ & Giá cả, Xuất xứ",
    "content": "# 📘 BÀI 03: Chỉ định từ Nơi chốn: ここ, そこ, あそこ & Giá cả, Xuất xứ\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 3)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ từ vựng và mẫu ngữ pháp trọng điểm của Bài 3.\n- Vận dụng vào giao tiếp thực tế và giải chính xác các dạng bài thi JLPT N5.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n\n| Tiếng Nhật | Hán tự | Âm Hán Việt | Nghĩa tiếng Việt |\n| :--- | :--- | :--- | :--- |\n| **きょうしつ** | 教室 | Giáo thất | Phòng học |\n| **しょくどう** | 食堂 | Thực đường | Nhà ăn / Căng tin |\n| **じむしょ** | 事務所 | Sự vụ sở | Văn phòng |\n| **うけつけ** | 受付 | Thụ phó | Quầy lễ tân |\n| **へや** | 部屋 | Bộ ốc | Căn phòng |\n| **トイレ / おてあらい** | お手洗い | Thủ tẩy | Nhà vệ sinh |\n| **かいだん** | 階段 | Giai đoạn | Cầu thang bộ |\n| **くに** | 国 | Quốc | Đất nước |\n| **かいしゃ** | 会社 | Hội xã | Công ty |\n| **いくら** |  |  | Bao nhiêu tiền |\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### 1. Mẫu câu: `ここ / そこ / あそこ / どこ`\n- **Ý nghĩa**: Ở đây / Ở đó / Ở đằng kia / Ở đâu\n- **Ví dụ mẫu**:\n  > 🇯🇵 **ここは きょうしつです。(Đây là phòng học.)**\n\n### 2. Mẫu câu: `N は Nơi chốn です`\n- **Ý nghĩa**: N ở địa điểm nào đó\n- **Ví dụ mẫu**:\n  > 🇯🇵 **おてあらいは あそこです。(Nhà vệ sinh ở đằng kia.) / ミラーさんは じむしょです。(Anh Miller ở văn phòng.)**\n\n### 3. Mẫu câu: `こちら / そちら / あちら / どちら`\n- **Ý nghĩa**: Hướng này / đó / kia / hướng nào (Lịch sự)\n- **Ví dụ mẫu**:\n  > 🇯🇵 **エレベーターは どちらですか。(Thang máy ở hướng nào ạ?)**\n\n### 4. Mẫu câu: `N1 の N2 (Xuất xứ / Công ty sản xuất)`\n- **Ý nghĩa**: Sản phẩm do N1 làm ra / nước N1\n- **Ví dụ mẫu**:\n  > 🇯🇵 **これは どこ/ベトナムの コーヒーですか。(Đây là cà phê của nước nào/Việt Nam sản xuất?)**\n\n### 5. Mẫu câu: `いくら ですか`\n- **Ý nghĩa**: Bao nhiêu tiền?\n- **Ví dụ mẫu**:\n  > 🇯🇵 **この ワインは いくらですか。ー １５００えんです。(Chai rượu này bao nhiêu tiền? - 1500 yên.)**\n\n---\n\n## 🈸 4. CHỮ HÁN CẦN NHỚ (KANJI FOCUS)\n\n| Chữ Hán | Âm Hán Việt | Nghĩa | Onyomi (Âm Hán) | Kunyomi (Âm thuần Nhật) |\n| :---: | :--- | :--- | :--- | :--- |\n| **六** | Lục | Sáu | roku | mut-tsu |\n| **七** | Thất | Bảy | shichi | nana-tsu |\n| **八** | Bát | Tám | hachi | yat-tsu |\n| **九** | Cửu | Chín | kyuu, ku | kokono-tsu |\n| **十** | Thập | Mười | juu | too |\n\n---\n\n## ✍️ 5. BÀI TẬP THỰC HÀNH CỦNG CỐ\n\n### Bài 1: Chọn trợ từ thích hợp điền vào chỗ trống (は, が, を, に, で, へ, と, も, から, まで)\n1. わたし （　） タンです。\n2. あした とうきょう （　） いきます。\n3. ぎんこうは 9じ （　） 3じ （　） です。\n4. なんで いきますか。ー タクシー （　） いきます。\n\n### 🔑 ĐÁP ÁN VÀ GIẢI THÍCH:\n1. `は` (Trợ từ chỉ chủ ngữ đề tài).\n2. `へ` (Chỉ phương hướng, đích đến).\n3. `から / まで` (Từ 9h đến 3h).\n4. `で` (Chỉ phương tiện di chuyển).\n\n---\n\n## 🎯 6. CHECKLIST TỰ ĐÁNH GIÁ\n- [ ] Ghi nhớ 100% từ vựng của Bài 3.\n- [ ] Vận dụng trôi chảy các cấu trúc ngữ pháp mẫu.\n- [ ] Nhận diện và viết đúng các chữ Hán trong bài.\n"
  },
  {
    "id": "n5_bai_04",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-04.md",
    "title": "📘 BÀI 04: Thời gian (Giờ/Phút/Thứ), Động từ thì Hiện tại/Quá khứ & Trợ từ から, まで",
    "content": "# 📘 BÀI 04: Thời gian (Giờ/Phút/Thứ), Động từ thì Hiện tại/Quá khứ & Trợ từ から, まで\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 4)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ từ vựng và mẫu ngữ pháp trọng điểm của Bài 4.\n- Vận dụng vào giao tiếp thực tế và giải chính xác các dạng bài thi JLPT N5.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n\n| Tiếng Nhật | Hán tự | Âm Hán Việt | Nghĩa tiếng Việt |\n| :--- | :--- | :--- | :--- |\n| **おきます** | 起きます | Khởi | Thức dậy |\n| **ねます** | 寝ます | Tẩm | Đi ngủ |\n| **はたらきます** | 働きます | Động | Làm việc |\n| **やすみます** | 休みます | Hưu | Nghỉ ngơi |\n| **べんきょうします** | 勉強します | Miễn cưỡng | Học tập |\n| **おわります** | 終わります | Chung | Kết thúc |\n| **きょう / あした / きのう** | 今日/明日/昨日 |  | Hôm nay / Ngày mai / Hôm qua |\n| **まいあさ / まいばん** | 毎朝/毎晩 |  | Mỗi sáng / Mỗi tối |\n| **なんじ / なんぷん** | 何時/何分 |  | Mấy giờ / Mấy phút |\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### 1. Mẫu câu: `いま 〜じ 〜ふんです (今〜時〜分)`\n- **Ý nghĩa**: Bây giờ là mấy giờ mấy phút\n- **Ví dụ mẫu**:\n  > 🇯🇵 **いま 8じ 30ぷんです。(Bây giờ là 8 giờ 30 phút.)**\n\n### 2. Mẫu câu: `Vます / Vません / Vました / Vませんでした`\n- **Ý nghĩa**: Hiện tại / Tương lai / Quá khứ của Động từ\n- **Ví dụ mẫu**:\n  > 🇯🇵 **まいあさ 6じに おきます。(Mỗi sáng tôi dậy lúc 6h.) / きのう べんきょうしませんでした。(Hôm qua tôi không học bài.)**\n\n### 3. Mẫu câu: `Thời gian に Vます`\n- **Ý nghĩa**: Hành động diễn ra vào mốc thời gian cụ thể\n- **Ví dụ mẫu**:\n  > 🇯🇵 **わたしは あした 7じに おきます。(Ngày mai tôi thức dậy lúc 7 giờ.)**\n\n### 4. Mẫu câu: `N1 から N2 まで`\n- **Ý nghĩa**: Từ N1 đến N2 (Thời gian hoặc Địa điểm)\n- **Ví dụ mẫu**:\n  > 🇯🇵 **ぎんこうは 9じから 3じまでです。(Ngân hàng mở từ 9h đến 3h.)**\n\n### 5. Mẫu câu: `N1 と N2`\n- **Ý nghĩa**: Và / Với (Nối 2 danh từ)\n- **Ví dụ mẫu**:\n  > 🇯🇵 **やすみは どようびと にちようびです。(Ngày nghỉ là thứ Bảy và Chủ Nhật.)**\n\n---\n\n## 🈸 4. CHỮ HÁN CẦN NHỚ (KANJI FOCUS)\n\n| Chữ Hán | Âm Hán Việt | Nghĩa | Onyomi (Âm Hán) | Kunyomi (Âm thuần Nhật) |\n| :---: | :--- | :--- | :--- | :--- |\n| **百** | Bách | Trăm | hyaku | momo |\n| **千** | Thiên | Nghìn | sen | chi |\n| **万** | Vạn | Mười nghìn | man | yorozu |\n| **日** | Nhật | Ngày, mặt trời | nichi, jitsu | hi, bi, ka |\n| **月** | Nguyệt | Tháng, mặt trăng | getsu, gatsu | tsuki |\n\n---\n\n## ✍️ 5. BÀI TẬP THỰC HÀNH CỦNG CỐ\n\n### Bài 1: Chọn trợ từ thích hợp điền vào chỗ trống (は, が, を, に, で, へ, と, も, から, まで)\n1. わたし （　） タンです。\n2. あした とうきょう （　） いきます。\n3. ぎんこうは 9じ （　） 3じ （　） です。\n4. なんで いきますか。ー タクシー （　） いきます。\n\n### 🔑 ĐÁP ÁN VÀ GIẢI THÍCH:\n1. `は` (Trợ từ chỉ chủ ngữ đề tài).\n2. `へ` (Chỉ phương hướng, đích đến).\n3. `から / まで` (Từ 9h đến 3h).\n4. `で` (Chỉ phương tiện di chuyển).\n\n---\n\n## 🎯 6. CHECKLIST TỰ ĐÁNH GIÁ\n- [ ] Ghi nhớ 100% từ vựng của Bài 4.\n- [ ] Vận dụng trôi chảy các cấu trúc ngữ pháp mẫu.\n- [ ] Nhận diện và viết đúng các chữ Hán trong bài.\n"
  },
  {
    "id": "n5_bai_05",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-05.md",
    "title": "📘 BÀI 05: Di chuyển: Đi/Đến/Về đâu (へ), Bằng phương tiện gì (で), Cùng với ai (と)",
    "content": "# 📘 BÀI 05: Di chuyển: Đi/Đến/Về đâu (へ), Bằng phương tiện gì (で), Cùng với ai (と)\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 5)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ từ vựng và mẫu ngữ pháp trọng điểm của Bài 5.\n- Vận dụng vào giao tiếp thực tế và giải chính xác các dạng bài thi JLPT N5.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n\n| Tiếng Nhật | Hán tự | Âm Hán Việt | Nghĩa tiếng Việt |\n| :--- | :--- | :--- | :--- |\n| **いきます** | 行きます | Hành | Đi |\n| **きます** | 来ます | Lai | Đến |\n| **かえります** | 帰ります | Quy | Về (nhà, nước) |\n| **がっこう** | 学校 | Học hiệu | Trường học |\n| **スーパー** |  |  | Siêu thị |\n| **えき** | 駅 | Dịch | Nhà ga |\n| **ひこうき** | 飛行機 | Phi hành cơ | Máy bay |\n| **ふね** | 船 | Thuyền | Tàu thủy |\n| **でんしゃ** | 電車 | Điện xa | Tàu điện |\n| **せんげつ / こんげつ / らいげつ** | 先月/今月/来月 |  | Tháng trước / Tháng này / Tháng sau |\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### 1. Mẫu câu: `Địa điểm へ 行きます / 来ます / 帰ります`\n- **Ý nghĩa**: Đi / Đến / Về một địa điểm (Trợ từ へ)\n- **Ví dụ mẫu**:\n  > 🇯🇵 **わたしは にほんへ いきます。(Tôi đi đến Nhật Bản.)**\n\n### 2. Mẫu câu: `どこ[へ]も 行きません / 行きませんでした`\n- **Ý nghĩa**: Phủ định hoàn toàn: Không đi đâu cả\n- **Ví dụ mẫu**:\n  > 🇯🇵 **にちようびは どこへも いきませんでした。(Chủ Nhật tôi đã chẳng đi đâu cả.)**\n\n### 3. Mẫu câu: `Phương tiện で 行きます / 来ます / 帰ります`\n- **Ý nghĩa**: Di chuyển bằng phương tiện gì (Trợ từ で)\n- **Ví dụ mẫu**:\n  > 🇯🇵 **でんしゃで いきます。(Đi bằng tàu điện.) / *Lưu ý: あるいて (Đi bộ) không dùng で.***\n\n### 4. Mẫu câu: `Người と Cùng làm hành động`\n- **Ý nghĩa**: Cùng với ai (Trợ từ と) / Thân một mình: ひとりで\n- **Ví dụ mẫu**:\n  > 🇯🇵 **かぞくと にほんへ きました。(Tôi đã đến Nhật cùng với gia đình.)**\n\n### 5. Mẫu câu: `いつ 〜ますか`\n- **Ý nghĩa**: Hỏi thời gian: Khi nào?\n- **Ví dụ mẫu**:\n  > 🇯🇵 **いつ にほんへ きましたか。ー せんげつ きました。(Bạn đến Nhật khi nào? - Tôi đến tháng trước.)**\n\n---\n\n## 🈸 4. CHỮ HÁN CẦN NHỚ (KANJI FOCUS)\n\n| Chữ Hán | Âm Hán Việt | Nghĩa | Onyomi (Âm Hán) | Kunyomi (Âm thuần Nhật) |\n| :---: | :--- | :--- | :--- | :--- |\n| **行** | Hành | Đi | kou, gyou | i-ku, o-konau |\n| **来** | Lai | Đến | rai | ku-ru, ki-masu |\n| **校** | Hiệu | Trường học | kou |  |\n\n---\n\n## ✍️ 5. BÀI TẬP THỰC HÀNH CỦNG CỐ\n\n### Bài 1: Chọn trợ từ thích hợp điền vào chỗ trống (は, が, を, に, で, へ, と, も, から, まで)\n1. わたし （　） タンです。\n2. あした とうきょう （　） いきます。\n3. ぎんこうは 9じ （　） 3じ （　） です。\n4. なんで いきますか。ー タクシー （　） いきます。\n\n### 🔑 ĐÁP ÁN VÀ GIẢI THÍCH:\n1. `は` (Trợ từ chỉ chủ ngữ đề tài).\n2. `へ` (Chỉ phương hướng, đích đến).\n3. `から / まで` (Từ 9h đến 3h).\n4. `で` (Chỉ phương tiện di chuyển).\n\n---\n\n## 🎯 6. CHECKLIST TỰ ĐÁNH GIÁ\n- [ ] Ghi nhớ 100% từ vựng của Bài 5.\n- [ ] Vận dụng trôi chảy các cấu trúc ngữ pháp mẫu.\n- [ ] Nhận diện và viết đúng các chữ Hán trong bài.\n"
  },
  {
    "id": "n5_bai_06",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-06.md",
    "title": "📘 BÀI 06: Hành động với đồ vật (N を Vます), Rủ rê (〜ませんか / 〜ましょう)",
    "content": "# 📘 BÀI 06: Hành động với đồ vật (N を Vます), Rủ rê (〜ませんか / 〜ましょう)\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 6)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 6: Tác động lên đối tượng (を), Cùng làm gì, Ở địa điểm nào (で).\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 6)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 6.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 6.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 6.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_07",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-07.md",
    "title": "📘 BÀI 07: Công cụ (で), Cho & Nhận sơ cấp (あげます / もらいます), もう Vました",
    "content": "# 📘 BÀI 07: Công cụ (で), Cho & Nhận sơ cấp (あげます / もらいます), もう Vました\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 7)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 7: Dùng đũa ăn cơm, tặng quà cho bạn, đã làm gì rồi.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 7)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 7.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 7.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 7.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_08",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-08.md",
    "title": "📘 BÀI 08: Tính từ đuôi い và Tính từ đuôi な (Khẳng định, phủ định, bổ nghĩa)",
    "content": "# 📘 BÀI 08: Tính từ đuôi い và Tính từ đuôi な (Khẳng định, phủ định, bổ nghĩa)\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 8)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 8: Mô tả tính chất sự vật, người: Đẹp, rẻ, nóng, lạnh, tốt bụng.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 8)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 8.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 8.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 8.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_09",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-09.md",
    "title": "📘 BÀI 09: Sở thích, Năng lực, Sở hữu (好き, 上手, わかります, あります - Trợ từ が)",
    "content": "# 📘 BÀI 09: Sở thích, Năng lực, Sở hữu (好き, 上手, わかります, あります - Trợ từ が)\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 9)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 9: Thích bóng đá, giỏi tiếng Nhật, hiểu tiếng Anh, có ô tô.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 9)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 9.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 9.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 9.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_10",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-10.md",
    "title": "📘 BÀI 10: Sự tồn tại: あります (Đồ vật) & います (Người, động vật), Vị trí",
    "content": "# 📘 BÀI 10: Sự tồn tại: あります (Đồ vật) & います (Người, động vật), Vị trí\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 10)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 10: Trên bàn có cuốn sách, trong phòng có con mèo, trước nhà ga.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 10)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 10.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 10.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 10.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_11",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-11.md",
    "title": "📘 BÀI 11: Số lượng từ, Thời lượng (Khoảng thời gian), Đếm vật/người",
    "content": "# 📘 BÀI 11: Số lượng từ, Thời lượng (Khoảng thời gian), Đếm vật/người\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 11)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 11: Ăn 2 quả táo, ở Nhật 3 tháng, 1 tuần bơi 2 lần.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 11)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 11.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 11.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 11.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_12",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-12.md",
    "title": "📘 BÀI 12: So sánh: Hơn kém (より), So sánh 2 vật (どちらが), Nhất trong tập hợp (一番)",
    "content": "# 📘 BÀI 12: So sánh: Hơn kém (より), So sánh 2 vật (どちらが), Nhất trong tập hợp (一番)\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 12)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 12: Hôm nay nóng hơn hôm qua, mùa nào thích nhất trong năm.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 12)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 12.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 12.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 12.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_13",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-13.md",
    "title": "📘 BÀI 13: Mong muốn: N が欲しいです (Muốn có N), Vたいです (Muốn làm V), Mục đích (Vに行きます)",
    "content": "# 📘 BÀI 13: Mong muốn: N が欲しいです (Muốn có N), Vたいです (Muốn làm V), Mục đích (Vに行きます)\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 13)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 13: Muốn có xe hơi, muốn uống bia, đi siêu thị mua hoa quả.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 13)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 13.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 13.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 13.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_14",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-14.md",
    "title": "📘 BÀI 14: Thể Te (て形) - Nhóm 1, 2, 3 & Vてください (Xin hãy), Vています (Đang làm)",
    "content": "# 📘 BÀI 14: Thể Te (て形) - Nhóm 1, 2, 3 & Vてください (Xin hãy), Vています (Đang làm)\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 14)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 14: Hãy viết tên vào đây, đang đọc sách, tôi mang giúp nhé.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 14)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 14.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 14.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 14.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_15",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-15.md",
    "title": "📘 BÀI 15: Cho phép (Vてもいいです), Cấm đoán (Vてはいけません), Vています (Trạng thái)",
    "content": "# 📘 BÀI 15: Cho phép (Vてもいいです), Cấm đoán (Vてはいけません), Vています (Trạng thái)\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 15)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 15: Có được hút thuốc không, không được chụp ảnh, đã kết hôn.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 15)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 15.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 15.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 15.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_16",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-16.md",
    "title": "📘 BÀI 16: Nối chuỗi hành động (V1て, V2て... / V1てから V2), Nối tính từ (くて/で)",
    "content": "# 📘 BÀI 16: Nối chuỗi hành động (V1て, V2て... / V1てから V2), Nối tính từ (くて/で)\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 16)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 16: Sáng dậy rồi ăn sáng rồi đi học, sau khi tốt nghiệp thì đi làm.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 16)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 16.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 16.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 16.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_17",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-17.md",
    "title": "📘 BÀI 17: Thể Nai (ない形), Vないでください (Xin đừng), Vなければなりません (Phải làm)",
    "content": "# 📘 BÀI 17: Thể Nai (ない形), Vないでください (Xin đừng), Vなければなりません (Phải làm)\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 17)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 17: Xin đừng chụp ảnh, phải uống thuốc mỗi ngày, không cần đến.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 17)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 17.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 17.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 17.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_18",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-18.md",
    "title": "📘 BÀI 18: Thể Từ điển (辞書形), V ことができます (Có thể), 趣味は Vことです (Sở thích)",
    "content": "# 📘 BÀI 18: Thể Từ điển (辞書形), V ことができます (Có thể), 趣味は Vことです (Sở thích)\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 18)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 18: Có thể bơi 100m, sở thích là nghe nhạc, trước khi ngủ thì đọc sách.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 18)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 18.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 18.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 18.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_19",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-19.md",
    "title": "📘 BÀI 19: Thể Ta (た形), Vたことがあります (Đã từng), Vたり Vたり します (Liệt kê)",
    "content": "# 📘 BÀI 19: Thể Ta (た形), Vたことがあります (Đã từng), Vたり Vたり します (Liệt kê)\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 19)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 19: Đã từng leo núi Phú Sĩ, ngày nghỉ lúc thì xem phim lúc thì dọn nhà.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 19)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 19.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 19.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 19.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_20",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-20.md",
    "title": "📘 BÀI 20: Thể Thông thường (普通形 - Futsuu-kei) trong hội thoại thân mật",
    "content": "# 📘 BÀI 20: Thể Thông thường (普通形 - Futsuu-kei) trong hội thoại thân mật\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 20)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 20: Nói chuyện suồng sã với bạn bè, đồng nghiệp thân thiết, gia đình.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 20)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 20.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 20.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 20.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_21",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-21.md",
    "title": "📘 BÀI 21: Suy nghĩ (〜と思います), Trích dẫn (〜と言いました), Dự đoán (〜でしょう)",
    "content": "# 📘 BÀI 21: Suy nghĩ (〜と思います), Trích dẫn (〜と言いました), Dự đoán (〜でしょう)\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 21)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 21: Tôi nghĩ ngày mai trời mưa, anh Tanaka nói là bận, chắc là đắt nhỉ.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 21)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 21.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 21.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 21.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_22",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-22.md",
    "title": "📘 BÀI 22: Mệnh đề bổ nghĩa cho danh từ (Định ngữ)",
    "content": "# 📘 BÀI 22: Mệnh đề bổ nghĩa cho danh từ (Định ngữ)\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 22)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 22: Người đang mặc áo đỏ kia là ai, chiếc bánh mẹ làm rất ngon.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 22)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 22.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 22.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 22.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_23",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-23.md",
    "title": "📘 BÀI 23: Khi nào (Vる / Vた とき), Hễ mà / Hễ thì (Vる と、...)",
    "content": "# 📘 BÀI 23: Khi nào (Vる / Vた とき), Hễ mà / Hễ thì (Vる と、...)\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 23)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 23: Khi rảnh rỗi thì xem phim, rẽ phải ở ngã tư thì sẽ thấy bưu điện.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 23)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 23.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 23.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 23.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_24",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-24.md",
    "title": "📘 BÀI 24: Cho và Nhận hành động: Vてくれます, Vてもらいます, Vてあげます",
    "content": "# 📘 BÀI 24: Cho và Nhận hành động: Vてくれます, Vてもらいます, Vてあげます\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 24)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 24: Anh Nam dạy tiếng Nhật cho tôi, được mẹ gửi quà từ quê.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 24)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 24.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 24.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 24.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bai_25",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bai-25.md",
    "title": "📘 BÀI 25: Điều kiện giả định sơ cấp: 〜たら (Nếu/Sau khi), 〜ても (Dù... cũng)",
    "content": "# 📘 BÀI 25: Điều kiện giả định sơ cấp: 〜たら (Nếu/Sau khi), 〜ても (Dù... cũng)\n\n> **Trình độ**: JLPT N5 | Giáo trình Minna no Nihongo I (Bài 25)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- Làm chủ toàn bộ kiến thức trọng tâm của Bài 25: Nếu có tiền thì sẽ đi du lịch, dù trời mưa cũng vẫn đi.\n- Nắm vững cách chia thể, cấu trúc ngữ pháp và từ vựng đặc trưng.\n\n---\n\n## 📚 2. TỪ VỰNG TRỌNG TÂM CỦA BÀI\n*(Xem danh sách từ vựng chi tiết trong sách Từ vựng Minna no Nihongo I - Bài 25)*\n- Nắm vững cách phát âm, Kanji tương ứng và ngữ cảnh sử dụng trong đời sống.\n\n---\n\n## 💡 3. CÁC CẤU TRÚC NGỮ PHÁP CỐT LÕI (BUNPOU)\n\n### Điểm ngữ pháp số 1:\n- Cấu trúc: Xem chi tiết phân tích ngữ pháp Bài 25.\n- Ý nghĩa & Cách dùng: Thể hiện đúng mối quan hệ hành động và hoàn cảnh áp dụng.\n\n### Điểm ngữ pháp số 2:\n- Cách chia và công thức biến đổi từ loại đi kèm.\n- Các bẫy thường gặp trong đề thi JLPT N5.\n\n---\n\n## ✍️ 4. BÀI TẬP VẬN DỤNG & LUYỆN TẬP\n1. Hoàn thành toàn bộ phần **Renshuu B** và **Renshuu C** trong sách giáo khoa Minna no Nihongo I.\n2. Làm bài tập trong cuốn **Hyojun Mondaishu (Sách bài tập tiêu chuẩn)**.\n3. Luyện nghe phần **Choukai Tasuku 25** tương ứng của Bài 25.\n\n---\n\n## 🎯 5. CHECKLIST HOÀN THÀNH\n- [ ] Thuộc từ vựng bài 25.\n- [ ] Tự đặt được ít nhất 3 câu ví dụ hoàn chỉnh cho mỗi cấu trúc ngữ pháp.\n- [ ] Hoàn thành 100% bài tập và nghe trọn vẹn file audio của bài.\n"
  },
  {
    "id": "n5_bang_chia_the_dong_tu_n5",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "bang-chia-the-dong-tu-n5.md",
    "title": "🔄 BẢNG TỔNG HỢP CÁCH CHIA CÁC THỂ ĐỘNG TỪ (N5 - N4)",
    "content": "# 🔄 BẢNG TỔNG HỢP CÁCH CHIA CÁC THỂ ĐỘNG TỪ (N5 - N4)\n\n> **Mục tiêu**: Nhìn bất kỳ động từ nào cũng có thể chia ngay sang các thể: **て (Te), ない (Nai), た (Ta), 辞書 (Từ điển)** trong 1 giây.\n\n---\n\n## 1. PHÂN BIỆT 3 NHÓM ĐỘNG TỪ\n\n| Nhóm | Đặc điểm nhận diện | Ví dụ động từ |\n| :---: | :--- | :--- |\n| **Nhóm 1 (五段 - Godan)** | Trước `ます` là âm thuộc cột **-i-** (い, き, し, ち, に, ひ, み, り) | か**き**ます (viết), の**み**ます (uống), い**き**ます (đi) |\n| **Nhóm 2 (一段 - Ichidan)** | • Trước `ます` là âm thuộc cột **-e-** (え, け, せ, て, ね, へ, め, れ)<br>• *Một số động từ đặc biệt trước ます là cột -i-*: みます (xem), おきます (dậy), たります (đủ), かります (mượn)... | た**べ**ます (ăn), み**せ**ます (cho xem), **み**ます (xem) |\n| **Nhóm 3 (Bất quy tắc)** | Gồm 2 động từ chính: **します (Làm)** và **きます (Đến)** (kèm các danh động từ như べんきょうします, けっこんします) | します (làm), きます (đến), さんぽします (đi dạo) |\n\n---\n\n## 2. BẢNG CÔNG THỨC CHIA CHI TIẾT\n\n```mermaid\ngraph TD\n    A[Động từ thể Masu] --> B[Thể Te / Ta: Yêu cầu, Nối câu, Quá khứ]\n    A --> C[Thể Nai: Phủ định, Cấm đoán, Nghĩa vụ]\n    A --> D[Thể Từ điển Jisho: Khả năng, Sở thích]\n```\n\n### A. Quy tắc chia Thể Te (て形) & Thể Ta (た形):\n*(Chia thể Ta y hệt như thể Te, chỉ thay `て` thành `た`, `で` thành `だ`)*\n\n- **Nhóm 1**:\n  - `い, ち, り` -> **って** (かって, まって, とって)\n  - `み, び, に` -> **んで** (のんで, あそんで, しんで)\n  - `き` -> **いて** (かいて) *(Ngoại lệ: いきます -> **いって**)*\n  - `ぎ` -> **いで** (いそいで)\n  - `し` -> **して** (はなして)\n- **Nhóm 2**: Bỏ `ます` thêm **て** (たべて, みて)\n- **Nhóm 3**: \n  - します -> **して**\n  - きます -> **きて**\n\n### B. Quy tắc chia Thể Nai (ない形):\n- **Nhóm 1**: Đổi âm trước `ます` từ cột **-i-** sang cột **-a-** rồi thêm **ない**.\n  - かきます -> **かかない**\n  - のみます -> **のまない**\n  - *Lưu ý: đuôi `い` chuyển thành `わ`: あいます -> **あわない**.*\n- **Nhóm 2**: Bỏ `ます` thêm **ない** (たべない, みない).\n- **Nhóm 3**: \n  - します -> **しない**\n  - きます -> **こない** (Phát âm là *konai*)\n\n### C. Quy tắc chia Thể Từ điển (辞書形 - Jisho-kei):\n- **Nhóm 1**: Đổi âm trước `ます` từ cột **-i-** sang cột **-u-**.\n  - かきます -> **かく**\n  - のみます -> **のむ**\n  - いきます -> **いく**\n- **Nhóm 2**: Bỏ `ます` thêm **る** (たべる, みる).\n- **Nhóm 3**: \n  - します -> **する**\n  - きます -> **くる**\n"
  },
  {
    "id": "n5_kanji_n5_look_and_learn",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "kanji-n5-look-and-learn.md",
    "title": "🉐 100 CHỮ HÁN CƠ BẢN JLPT N5 (KANJI LOOK AND LEARN N5)",
    "content": "# 🉐 100 CHỮ HÁN CƠ BẢN JLPT N5 (KANJI LOOK AND LEARN N5)\n\n| STT | Chữ Hán | Âm Hán Việt | Ý nghĩa | Onyomi | Kunyomi | Từ vựng ghép tiêu biểu |\n| :---: | :---: | :--- | :--- | :--- | :--- | :--- |\n| 1 | **一** | Nhất | Một | ICHI | hito-tsu | 一つ (hitotsu), 一人 (hitori) |\n| 2 | **二** | Nhị | Hai | NI | futa-tsu | 二つ (futatsu), 二人 (futari) |\n| 3 | **三** | Tam | Ba | SAN | mit-tsu | 三つ (mittsu), 三月 (sangatsu) |\n| 4 | **四** | Tứ | Bốn | SHI | yon, yot-tsu | 四つ (yottsu), 四月 (shigatsu) |\n| 5 | **五** | Ngũ | Năm | GO | itsu-tsu | 五つ (itsutsu), 五日 (itsuka) |\n| 6 | **六** | Lục | Sáu | ROKU | mut-tsu | 六つ (muttsu), 六日 (muika) |\n| 7 | **七** | Thất | Bảy | SHICHI | nana-tsu | 七つ (nanatsu), 七日 (nanoka) |\n| 8 | **八** | Bát | Tám | HACHI | yat-tsu | 八つ (yattsu), 八日 (youka) |\n| 9 | **九** | Cửu | Chín | KYUU, KU | kokono-tsu | 九つ (kokonotsu), 九月 (kugatsu) |\n| 10 | **十** | Thập | Mười | JUU | too | 十日 (tooka), 十分 (juubun) |\n| 11 | **百** | Bách | Trăm | HYAKU | momo | 三百 (sanbyaku), 六百 (roppyaku) |\n| 12 | **千** | Thiên | Nghìn | SEN | chi | 三千 (sanzen), 千円 (sen'en) |\n| 13 | **万** | Vạn | Mười nghìn | MAN | yorozu | 一万円 (ichiman'en) |\n| 14 | **日** | Nhật | Ngày, mặt trời | NICHI, JITSU | hi, bi, ka | 日本 (nihon), 日曜日 (nichiyoubi) |\n| 15 | **月** | Nguyệt | Tháng, mặt trăng | GETSU, GATSU | tsuki | 今月 (kongetsu), 月曜日 (getsuyoubi) |\n| 16 | **火** | Hỏa | Lửa | KA | hi | 火曜日 (kayoubi), 火事 (kaji) |\n| 17 | **水** | Thủy | Nước | SUI | mizu | 水 (mizu), 水曜日 (suiyoubi) |\n| 18 | **木** | Mộc | Cây | MOKU, BOKU | ki | 木 (ki), 木曜日 (mokuyoubi) |\n| 19 | **金** | Kim | Vàng, tiền | KIN, KON | kane | お金 (okane), 金曜日 (kinyoubi) |\n| 20 | **土** | Thổ | Đất | DO, TO | tsuchi | 土曜日 (doyoubi), 土地 (tochi) |\n| 21 | **人** | Nhân | Người | JIN, NIN | hito | 日本人 (nihonjin), 一人 (hitori) |\n| 22 | **男** | Nam | Đàn ông | DAN, NAN | otoko | 男の子 (otokonoko) |\n| 23 | **女** | Nữ | Phụ nữ | JO, NYO | onna | 女の子 (onnanoko) |\n| 24 | **子** | Tử | Đứa trẻ | SHI, SU | ko | 子供 (kodomo) |\n| 25 | **学** | Học | Học tập | GAKU | mana-bu | 学生 (gakusei), 大学 (daigaku) |\n| 26 | **生** | Sinh | Sinh ra, sống | SEI, SHOU | i-kiru, u-mareru | 先生 (sensei), 生まれる (umareru) |\n| 27 | **先** | Tiên | Trước | SEN | saki | 先週 (senshuu), 先生 (sensei) |\n| 28 | **私** | Tư | Tôi | SHI | watashi | 私 (watashi) |\n| 29 | **何** | Hà | Cái gì | KA | nani, nan | 何時 (nanji), 何人 (nannin) |\n| 30 | **行** | Hành | Đi | KOU, GYOU | i-ku | 行く (iku), 旅行 (ryokou) |\n"
  },
  {
    "id": "n5_tong_hop_ngu_phap_n5",
    "categoryId": "n5",
    "categoryName": "📘 Sơ Cấp 1 (N5)",
    "filename": "tong-hop-ngu-phap-n5.md",
    "title": "📋 TỔNG HỢP TOÀN BỘ NGỮ PHÁP N5 (CHEATSHEET)",
    "content": "# 📋 TỔNG HỢP TOÀN BỘ NGỮ PHÁP N5 (CHEATSHEET)\n\n| STT | Cấu trúc ngữ pháp | Ý nghĩa tóm tắt | Ví dụ |\n| :---: | :--- | :--- | :--- |\n| 1 | `N1 は N2 です` | N1 là N2 | わたしは学生です。 |\n| 2 | `これ / それ / あれ は N です` | Cái này/đó/kia là N | これは本です。 |\n| 3 | `ここ / そこ / あそこ は N です` | Ở đây/đó/kia là N | ここは教室です。 |\n| 4 | `Địa điểm へ 行きます/来ます/帰ります` | Đi/Đến/Về đâu đó | 日本へ行きます。 |\n| 5 | `N を Vます` | Làm hành động tác động lên N | ご飯を食べます。 |\n| 6 | `Phương tiện で Vます` | Làm gì bằng phương tiện/công cụ gì | 電車で行きます。 |\n| 7 | `Địa điểm で Vます` | Thực hiện hành động tại địa điểm | 図書館で勉強します。 |\n| 8 | `〜ませんか / 〜ましょう` | Rủ rê cùng làm gì / Cùng làm thôi | いっしょに行きませんか。 |\n| 9 | `N が 好きです / 上手です / あります` | Thích / Giỏi / Có cái gì (Dùng が) | 音楽が好きです。 |\n| 10 | `Địa điểm に N が あります / います` | Ở đâu có vật / người | 庭に犬がいます。 |\n| 11 | `N1 は N2 より A です` | N1 tính chất A hơn N2 | 今日は昨日より暑いです。 |\n| 12 | `N が 欲しいです / Vたいです` | Muốn có N / Muốn làm V | 車が欲しいです。 |\n| 13 | `Vてください` | Xin vui lòng hãy làm V | 名前を書いてください。 |\n| 14 | `Vてもいいです / Vてはいけません` | Được phép / Cấm không được làm | 写真を撮ってもいいです。 |\n| 15 | `Vています` | Đang làm gì / Trạng thái kết quả | 勉強しています。 |\n| 16 | `V1てから、V2` | Sau khi làm V1 thì làm V2 | 宿題をしてから寝ます。 |\n| 17 | `Vないでください` | Xin đừng làm gì | ここに入らないでください。 |\n| 18 | `Vなければなりません` | Phải làm gì đó | 薬を飲まなければなりません。 |\n| 19 | `Vることができます` | Có thể làm gì (Khả năng) | 泳ぐことができます。 |\n| 20 | `Vたことがあります` | Đã từng làm gì trong quá khứ | 寿司を食べたことがあります。 |\n| 21 | `Vたり、Vたり します` | Lúc thì làm thế này, lúc làm thế kia | 買い物したり、映画を見たりします。 |\n| 22 | `Thể Thông thường (普通形)` | Giao tiếp thân mật, suồng sã | 行く / 行かない / 行った |\n| 23 | `〜と思います / 〜と言いました` | Tôi nghĩ là... / Ai đó đã nói là... | 明日雨が降ると思います。 |\n| 24 | `Mệnh đề bổ nghĩa danh từ` | Định ngữ bổ nghĩa cho N | 私が作ったケーキ |\n| 25 | `Vたら / Vても` | Nếu / Sau khi ... ; Dù ... cũng | お金があったら旅行します。 |\n"
  },
  {
    "id": "n4_bai_26",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-26.md",
    "title": "📙 BÀI 26: Giải thích lý do, xác nhận thông tin (〜んです)",
    "content": "# 📙 BÀI 26: Giải thích lý do, xác nhận thông tin (〜んです)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 26)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Nhấn mạnh nguyên nhân, hỏi tò mò (〜んですか / 〜んですが).\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 26.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 26)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 26**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 26.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_27",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-27.md",
    "title": "📙 BÀI 27: Thể Khả năng (可能形 - Kanoukei)",
    "content": "# 📙 BÀI 27: Thể Khả năng (可能形 - Kanoukei)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 27)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Có thể làm gì: Động từ nhóm 1, 2, 3 chuyển sang thể khả năng, Trợ từ が thay を.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 27.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 27)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 27**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 27.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_28",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-28.md",
    "title": "📙 BÀI 28: Hành động song song (〜ながら) & Thói quen (〜ています) & Liệt kê lý do (〜し、〜し)",
    "content": "# 📙 BÀI 28: Hành động song song (〜ながら) & Thói quen (〜ています) & Liệt kê lý do (〜し、〜し)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 28)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Vừa nghe nhạc vừa học bài, duy trì thói quen, đưa ra nhiều lý do.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 28.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 28)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 28**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 28.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_29",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-29.md",
    "title": "📙 BÀI 29: Tự động từ & Tha động từ (自動詞・他動詞) & Trạng thái kết quả (〜ています)",
    "content": "# 📙 BÀI 29: Tự động từ & Tha động từ (自動詞・他動詞) & Trạng thái kết quả (〜ています)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 29)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Cửa tự mở (が 開きます) vs Mở cửa (を 開けます), Đèn đang bật (が ついています).\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 29.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 29)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 29**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 29.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_30",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-30.md",
    "title": "📙 BÀI 30: Chuẩn bị sẵn & Kết quả của hành động có chủ đích (〜てあります / 〜ておきます)",
    "content": "# 📙 BÀI 30: Chuẩn bị sẵn & Kết quả của hành động có chủ đích (〜てあります / 〜ておきます)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 30)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Bản đồ đã được dán sẵn trên tường, chuẩn bị trước bài học.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 30.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 30)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 30**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 30.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_31",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-31.md",
    "title": "📙 BÀI 31: Thể Ý chí / Ý định (意向形 - Ikoukei) & Dự định (〜つもりです / 〜予定です)",
    "content": "# 📙 BÀI 31: Thể Ý chí / Ý định (意向形 - Ikoukei) & Dự định (〜つもりです / 〜予定です)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 31)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Dự định mua nhà, tính đi Nhật năm sau.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 31.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 31)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 31**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 31.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_32",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-32.md",
    "title": "📙 BÀI 32: Lời khuyên (〜ほうがいいです) & Dự đoán thời tiết/tình huống (〜でしょう / 〜かもしれません)",
    "content": "# 📙 BÀI 32: Lời khuyên (〜ほうがいいです) & Dự đoán thời tiết/tình huống (〜でしょう / 〜かもしれません)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 32)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Nên uống thuốc, không nên thức khuya, có lẽ ngày mai trời mưa.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 32.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 32)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 32**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 32.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_33",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-33.md",
    "title": "📙 BÀI 33: Thể Mệnh lệnh (命令形) & Thể Cấm chỉ (禁止形) & Ý nghĩa biển báo (〜という意味です)",
    "content": "# 📙 BÀI 33: Thể Mệnh lệnh (命令形) & Thể Cấm chỉ (禁止形) & Ý nghĩa biển báo (〜という意味です)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 33)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Đọc biển báo nguy hiểm, dừng lại, cấm vào, nhắc lại thông điệp.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 33.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 33)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 33**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 33.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_34",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-34.md",
    "title": "📙 BÀI 34: Làm theo chỉ dẫn (〜とおりに) & Sau khi (〜あとで) & Làm việc trong trạng thái (〜て / 〜ないで)",
    "content": "# 📙 BÀI 34: Làm theo chỉ dẫn (〜とおりに) & Sau khi (〜あとで) & Làm việc trong trạng thái (〜て / 〜ないで)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 34)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Làm theo như đã hướng dẫn, sau khi ăn cơm thì uống thuốc.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 34.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 34)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 34**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 34.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_35",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-35.md",
    "title": "📙 BÀI 35: Thể Điều kiện (条件形: 〜ば) & Lời khuyên (〜ばいいですか)",
    "content": "# 📙 BÀI 35: Thể Điều kiện (条件形: 〜ば) & Lời khuyên (〜ばいいですか)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 35)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Nếu trời đẹp thì đi chơi, nên mua ở đâu thì tốt.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 35.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 35)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 35**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 35.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_36",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-36.md",
    "title": "📙 BÀI 36: Mục tiêu & Thay đổi thói quen (〜ように、〜 / 〜ようになりました / 〜ようにしています)",
    "content": "# 📙 BÀI 36: Mục tiêu & Thay đổi thói quen (〜ように、〜 / 〜ようになりました / 〜ようにしています)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 36)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Học chăm để đỗ N3, đã có thể nói tiếng Nhật, cố gắng tập thể dục mỗi ngày.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 36.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 36)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 36**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 36.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_37",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-37.md",
    "title": "📙 BÀI 37: Thể Bị động (受身形 - Ukemikei)",
    "content": "# 📙 BÀI 37: Thể Bị động (受身形 - Ukemikei)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 37)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Bị ai đó làm phiền: Bị mắng, bị trộm ví, được khen ngợi.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 37.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 37)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 37**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 37.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_38",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-38.md",
    "title": "📙 BÀI 38: Danh từ hóa động từ (Vる のは / のが / のを)",
    "content": "# 📙 BÀI 38: Danh từ hóa động từ (Vる のは / のが / のを)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 38)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Việc học tiếng Nhật rất thú vị, tôi thích việc nấu ăn, quên mang ô.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 38.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 38)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 38**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 38.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_39",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-39.md",
    "title": "📙 BÀI 39: Nguyên nhân & Lý do không chủ ý (〜て / 〜くて / 〜で / 〜ので)",
    "content": "# 📙 BÀI 39: Nguyên nhân & Lý do không chủ ý (〜て / 〜くて / 〜で / 〜ので)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 39)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Vì động đất nên tàu dừng, vì buồn ngủ nên không tập trung.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 39.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 39)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 39**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 39.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_40",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-40.md",
    "title": "📙 BÀI 40: Câu hỏi lồng (〜か / 〜かどうか) & Thử làm gì (〜てみます)",
    "content": "# 📙 BÀI 40: Câu hỏi lồng (〜か / 〜かどうか) & Thử làm gì (〜てみます)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 40)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Không biết anh ấy có đến không, hãy mặc thử chiếc áo này.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 40.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 40)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 40**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 40.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_41",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-41.md",
    "title": "📙 BÀI 41: Cho & Nhận nâng cao (やる / いただきます / くださいます)",
    "content": "# 📙 BÀI 41: Cho & Nhận nâng cao (やる / いただきます / くださいます)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 41)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Tặng quà cho cấp trên / Được sếp cho quà / Cho cá ăn.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 41.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 41)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 41**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 41.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_42",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-42.md",
    "title": "📙 BÀI 42: Mục đích (〜ために) & Dùng để làm gì (〜のに使います / 〜のに時間がかかります)",
    "content": "# 📙 BÀI 42: Mục đích (〜ために) & Dùng để làm gì (〜のに使います / 〜のに時間がかかります)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 42)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Để mua nhà thì tiết kiệm tiền, cái kéo này dùng để cắt giấy.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 42.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 42)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 42**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 42.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_43",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-43.md",
    "title": "📙 BÀI 43: Có vẻ như / Sắp sửa (〜そうです - Nhìn bề ngoài đánh giá)",
    "content": "# 📙 BÀI 43: Có vẻ như / Sắp sửa (〜そうです - Nhìn bề ngoài đánh giá)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 43)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Trời sắp mưa, chiếc bánh trông có vẻ ngon.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 43.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 43)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 43**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 43.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_44",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-44.md",
    "title": "📙 BÀI 44: Quá mức (〜すぎます) & Dễ làm / Khó làm (〜やすい / 〜にくい)",
    "content": "# 📙 BÀI 44: Quá mức (〜すぎます) & Dễ làm / Khó làm (〜やすい / 〜にくい)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 44)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Ăn quá nhiều, đôi giày này rất dễ đi, chữ Hán này khó nhớ.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 44.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 44)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 44**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 44.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_45",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-45.md",
    "title": "📙 BÀI 45: Trường hợp giả định (〜場合は) & Mặc dù (〜のに - Bất mãn, ngạc nhiên)",
    "content": "# 📙 BÀI 45: Trường hợp giả định (〜場合は) & Mặc dù (〜のに - Bất mãn, ngạc nhiên)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 45)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Trong trường hợp hỏa hoạn, dù đã hẹn nhưng anh ấy không đến.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 45.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 45)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 45**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 45.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_46",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-46.md",
    "title": "📙 BÀI 46: Thời điểm hành động (〜ところです: Vる/Vている/Vた ところ) & Chắc chắn (〜はずです)",
    "content": "# 📙 BÀI 46: Thời điểm hành động (〜ところです: Vる/Vている/Vた ところ) & Chắc chắn (〜はずです)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 46)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Vừa mới chuẩn bị ăn, vừa mới làm xong, chắc chắn anh ấy sẽ đến.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 46.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 46)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 46**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 46.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_47",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-47.md",
    "title": "📙 BÀI 47: Nghe nói là (〜そうです - Truyền đạt lại) & Hình như (〜ようです - Phán đoán)",
    "content": "# 📙 BÀI 47: Nghe nói là (〜そうです - Truyền đạt lại) & Hình như (〜ようです - Phán đoán)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 47)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Nghe nói ngày mai bão đổ bộ, hình như phòng bên cạnh có người.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 47.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 47)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 47**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 47.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_48",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-48.md",
    "title": "📙 BÀI 48: Thể Sai khiến (使役形 - Shiekikei) & Xin phép cho tôi làm (〜させてください)",
    "content": "# 📙 BÀI 48: Thể Sai khiến (使役形 - Shiekikei) & Xin phép cho tôi làm (〜させてください)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 48)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Bố bắt con học bài, xin phép cho tôi về sớm hôm nay.\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 48.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 48)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 48**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 48.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_49",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-49.md",
    "title": "📙 BÀI 49: Tôn kính ngữ (尊敬語 - Sonkeigo)",
    "content": "# 📙 BÀI 49: Tôn kính ngữ (尊敬語 - Sonkeigo)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 49)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Kính cẩn nâng cao hành động của cấp trên, khách hàng, đối tác (お〜になります, 召し上がります...).\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 49.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 49)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 49**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 49.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_bai_50",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "bai-50.md",
    "title": "📙 BÀI 50: Khiêm nhường ngữ (謙譲語 - Kenjougo)",
    "content": "# 📙 BÀI 50: Khiêm nhường ngữ (謙譲語 - Kenjougo)\n\n> **Trình độ**: JLPT N4 | Giáo trình Minna no Nihongo II (Bài 50)\n\n---\n\n## 🎯 1. MỤC TIÊU BÀI HỌC\n- **Trọng tâm**: Hạ mình khiêm tốn hành động của bản thân khi nói chuyện với bề trên (お〜します, 参ります, 申します...).\n- Làm chủ toàn bộ ngữ pháp, từ vựng và hán tự của Bài 50.\n- Nâng cao năng lực đọc hiểu đoạn văn và nghe hiểu các tình huống thực tế.\n\n---\n\n## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)\n*(Xem toàn bộ danh sách từ vựng trong cuốn Minna no Nihongo II - Từ vựng & Giải thích ngữ pháp Bài 50)*\n- Nắm chắc phân biệt giữa Tha động từ và Tự động từ, các phó từ chỉ mức độ và liên từ nối.\n\n---\n\n## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)\n\n### Điểm ngữ pháp cốt lõi 1:\n- **Ý nghĩa**: Phân tích chi tiết quy tắc biến đổi và ý nghĩa mẫu câu.\n- **Hoàn cảnh sử dụng**: Phân biệt ngữ cảnh giao tiếp lịch sự vs thân mật.\n\n### Điểm ngữ pháp cốt lõi 2:\n- **Lưu ý bẫy đề thi JLPT N4**: Các trường hợp ngoại lệ và sự nhầm lẫn phổ biến.\n\n---\n\n## ✍️ 4. BÀI TẬP THỰC HÀNH CỦNG CỐ\n1. Hoàn thành bài tập **Renshuu B, C** trong sách Minna no Nihongo II.\n2. Hoàn thành bài tập trong sách **Mondaishu N4**.\n3. Nghe và làm bài tập nghe hiểu **Choukai Tasuku Bài 50**.\n\n---\n\n## 🎯 5. CHECKLIST ĐÁNH GIÁ TIẾN ĐỘ\n- [ ] Ghi nhớ 100% từ vựng và Kanji của Bài 50.\n- [ ] Tự chia đúng thể động từ/tính từ không chút do dự.\n- [ ] Đặt 3 câu hội thoại thực tế áp dụng đúng ngữ cảnh.\n"
  },
  {
    "id": "n4_kinh_ngu_khiem_nhuong_ngu",
    "categoryId": "n4",
    "categoryName": "📙 Sơ Cấp 2 (N4)",
    "filename": "kinh-ngu-khiem-nhuong-ngu.md",
    "title": "👑 CHUYÊN ĐỀ: TÔN KÍNH NGỮ & KHIÊM NHƯỜNG NGỮ (N4 - N3)",
    "content": "# 👑 CHUYÊN ĐỀ: TÔN KÍNH NGỮ & KHIÊM NHƯỜNG NGỮ (N4 - N3)\n\n> **Mục tiêu**: Làm chủ 100% hệ thống Kính ngữ trong tiếng Nhật – chiếc chìa khóa sống còn trong môi trường công sở và đề thi JLPT.\n\n---\n\n## 1. TỔNG QUAN HỆ THỐNG KÍNH NGỮ (KEIGO 敬語)\n\n```mermaid\ngraph TD\n    Keigo[Hệ thống Kính ngữ Keigo] --> Sonkeigo[1. Tôn kính ngữ 尊敬語<br/>Nâng đối phương lên]\n    Keigo --> Kenjougo[2. Khiêm nhường ngữ 謙譲語<br/>Hạ mình/nhóm mình xuống]\n    Keigo --> Teineigo[3. Lịch sự ngữ 丁寧語<br/>Dùng です / ます]\n```\n\n---\n\n## 2. BẢNG BIẾN ĐỔI ĐẶC BIỆT CỦA CÁC ĐỘNG TỪ THƯỜNG GẶP\n\n| Động từ gốc | Ý nghĩa | Tôn kính ngữ (尊敬語 - Đối phương làm) | Khiêm nhường ngữ (謙譲語 - Mình làm) |\n| :--- | :--- | :--- | :--- |\n| **行きます** (Đi) | Đi | **いらっしゃいます / おいでになります** | **参ります (まいります)** |\n| **来ます** (Đến) | Đến | **いらっしゃいます / おいでになります** | **参ります (まいります)** |\n| **います** (Ở/Có) | Ở (người) | **いらっしゃいます** | **おります** |\n| **食べます / 飲みます** | Ăn / Uống | **召し上がります (めしあがります)** | **いただきます** |\n| **言います** (Nói) | Nói | **おっしゃいます** | **申します (もうします) / 申し上げます** |\n| **見ます** (Xem/Nhìn) | Nhìn | **ご覧になります (ごらんになります)** | **拝見します (はいけんします)** |\n| **聞きます / 行きます** | Nghe / Hỏi / Đến thăm | — | **伺います (うかがいます)** |\n| **知っています** | Biết | **ご存じです (ごぞんじです)** | **存じております (ぞんじております)** |\n| **します** (Làm) | Làm | **なさいます** | **いたします** |\n| **会います** (Gặp) | Gặp gỡ | — | **お目にかかります** |\n\n---\n\n## 3. CÔNG THỨC CHUYỂN KÍNH NGỮ CHO ĐỘNG TỪ BÌNH THƯỜNG\n\n### A. Tôn kính ngữ:\n1. **Công thức 1**: `お + V(bỏ ます) + になります`\n   - 先生は 本を **お読みに なります**。(Thầy giáo đọc sách.)\n2. **Công thức 2**: `お + V(bỏ ます) + ください` (Yêu cầu lịch sự)\n   - ここに お名前を **お書き ください**。(Xin vui lòng viết tên vào đây.)\n\n### B. Khiêm nhường ngữ:\n1. **Công thức**: `お + V(bỏ ます) + します / いたします`\n   - 重い荷物を **お持ち します**。(Tôi xin phép xách hành lý giúp bạn.)\n"
  },
  {
    "id": "n3_chuong_01_thoi_gian_va_tien_trinh",
    "categoryId": "n3",
    "categoryName": "🏆 Trung Cấp (N3)",
    "filename": "chuong-01-thoi-gian-va-tien-trinh.md",
    "title": "🏆 Chương 01: Thời gian, Thời điểm & Tiến trình hành động",
    "content": "# 🏆 Chương 01: Thời gian, Thời điểm & Tiến trình hành động\n\n> **Trình độ**: JLPT N3 | Giáo trình chuẩn Shinkanzen Master Bunpou N3\n\n---\n\n## 🎯 1. TỔNG QUAN CHUYÊN ĐỀ\n- Phân tích sâu ngữ cảnh, sắc thái biểu cảm và các bẫy thường gặp trong đề thi JLPT N3.\n- Rèn luyện phản xạ chọn đáp án chính xác trong vòng 30 giây cho mỗi câu hỏi ngữ pháp.\n\n---\n\n## 💡 2. CÁC MẪU NGỮ PHÁP TRỌNG ĐIỂM\n\n### 1. Mẫu câu: `〜うちに (Trong khi/Trong lúc...)`\n- **Ý nghĩa cốt lõi**: Làm gì đó trước khi trạng thái thay đổi hoặc trong lúc đang làm A thì có B bất ngờ xảy ra.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **日本にいるうちに、富士山に登りたいです。(Trong lúc còn ở Nhật, tôi muốn leo núi Phú Sĩ.)**\n\n---\n### 2. Mẫu câu: `〜間 / 〜間に (Trong suốt khi / Trong khoảng khi)`\n- **Ý nghĩa cốt lõi**: 間: Hành động kéo dài liên tục suốt khoảng thời gian. 間に: Hành động mang tính thời điểm xen vào.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **夏休みの間に、運転免許を取りました。(Trong kỳ nghỉ hè, tôi đã lấy được bằng lái xe.)**\n\n---\n### 3. Mẫu câu: `〜てからでないと / 〜てからでなければ (Nếu chưa... thì không thể)`\n- **Ý nghĩa cốt lõi**: Phải làm xong hành động A trước thì mới làm được hành động B.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **手を洗ってからでないと、ご飯を食べてはいけません。(Nếu chưa rửa tay thì không được ăn cơm.)**\n\n---\n### 4. Mẫu câu: `〜ところだ (Đúng vào lúc)`\n- **Ý nghĩa cốt lõi**: Vるところ (Sắp sửa), Vているところ (Đang làm), Vたところ (Vừa mới làm xong).\n- **Ví dụ điển hình**:\n  > 🇯🇵 **今から出かけるところです。(Bây giờ tôi chuẩn bị ra ngoài.)**\n\n---\n## ✍️ 3. BÀI TẬP VẬN DỤNG CHUẨN ĐỀ THI JLPT N3\n\n### Luyện tập trắc nghiệm chọn đáp án đúng:\n1. 先生のおかげ（　）、試験に合格できました。\n   - A. で\n   - B. に\n   - C. を\n   - D. が\n2. 雨が降っている（　）、試合は続けられた。\n   - A. おかげで\n   - B. にもかかわらず\n   - C. せいで\n   - D. わりに\n\n### 🔑 ĐÁP ÁN:\n1. **A** (先生のおかげで: Nhờ có thầy giáo).\n2. **B** (にもかかわらず: Mặc dù trời mưa nhưng trận đấu vẫn tiếp tục).\n\n---\n\n## 🎯 4. CHECKLIST ĐÁNH GIÁ\n- [ ] Phân biệt được sự khác nhau giữa các mẫu câu cùng nhóm ý nghĩa.\n- [ ] Nhớ công thức kết nối (Vる, Vた, Vない, Nの, Nである...).\n- [ ] Làm bài tập Shinkanzen Master đạt trên 80% độ chính xác.\n"
  },
  {
    "id": "n3_chuong_02_nguyen_nhan_ly_do",
    "categoryId": "n3",
    "categoryName": "🏆 Trung Cấp (N3)",
    "filename": "chuong-02-nguyen-nhan-ly-do.md",
    "title": "🏆 Chương 02: Nguyên nhân & Lý do (Khen ngợi, Đổ lỗi, Văn viết)",
    "content": "# 🏆 Chương 02: Nguyên nhân & Lý do (Khen ngợi, Đổ lỗi, Văn viết)\n\n> **Trình độ**: JLPT N3 | Giáo trình chuẩn Shinkanzen Master Bunpou N3\n\n---\n\n## 🎯 1. TỔNG QUAN CHUYÊN ĐỀ\n- Phân tích sâu ngữ cảnh, sắc thái biểu cảm và các bẫy thường gặp trong đề thi JLPT N3.\n- Rèn luyện phản xạ chọn đáp án chính xác trong vòng 30 giây cho mỗi câu hỏi ngữ pháp.\n\n---\n\n## 💡 2. CÁC MẪU NGỮ PHÁP TRỌNG ĐIỂM\n\n### 1. Mẫu câu: `〜おかげで / 〜おかげだ (Nhờ có... - Kết quả tích cực)`\n- **Ý nghĩa cốt lõi**: Dùng khi kết quả tốt đẹp nhờ vào sự giúp đỡ của ai/điều gì.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **先生のおかげで、N3に合格できました。(Nhờ có thầy giáo mà tôi đã đỗ N3.)**\n\n---\n### 2. Mẫu câu: `〜せいで / 〜せいだ (Tại vì / Do... - Kết quả tiêu cực, đổ lỗi)`\n- **Ý nghĩa cốt lõi**: Dùng khi trách móc, đổ lỗi dẫn đến kết quả xấu.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **昨日の夜遅くまでゲームをしたせいで、今日遅刻してしまった。(Tại vì thức khuya chơi game nên hôm nay tôi bị trễ học.)**\n\n---\n### 3. Mẫu câu: `〜によって / 〜による (Do / Vì / Bằng cách / Tùy vào)`\n- **Ý nghĩa cốt lõi**: Chỉ nguyên nhân lớn (thiên tai, tai nạn) hoặc phương thức thực hiện.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **台風によって、電車が止まりました。(Do bão nên tàu điện đã dừng chạy.)**\n\n---\n### 4. Mẫu câu: `〜につき (Vì / Do - Trang trọng trong thông báo)`\n- **Ý nghĩa cốt lõi**: Dùng trong các biển báo, thông báo văn bản chính thức.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **工事中につき、立ち入り禁止。(Vì đang thi công nên cấm vào.)**\n\n---\n## ✍️ 3. BÀI TẬP VẬN DỤNG CHUẨN ĐỀ THI JLPT N3\n\n### Luyện tập trắc nghiệm chọn đáp án đúng:\n1. 先生のおかげ（　）、試験に合格できました。\n   - A. で\n   - B. に\n   - C. を\n   - D. が\n2. 雨が降っている（　）、試合は続けられた。\n   - A. おかげで\n   - B. にもかかわらず\n   - C. せいで\n   - D. わりに\n\n### 🔑 ĐÁP ÁN:\n1. **A** (先生のおかげで: Nhờ có thầy giáo).\n2. **B** (にもかかわらず: Mặc dù trời mưa nhưng trận đấu vẫn tiếp tục).\n\n---\n\n## 🎯 4. CHECKLIST ĐÁNH GIÁ\n- [ ] Phân biệt được sự khác nhau giữa các mẫu câu cùng nhóm ý nghĩa.\n- [ ] Nhớ công thức kết nối (Vる, Vた, Vない, Nの, Nである...).\n- [ ] Làm bài tập Shinkanzen Master đạt trên 80% độ chính xác.\n"
  },
  {
    "id": "n3_chuong_03_dieu_kien_gia_dinh",
    "categoryId": "n3",
    "categoryName": "🏆 Trung Cấp (N3)",
    "filename": "chuong-03-dieu-kien-gia-dinh.md",
    "title": "🏆 Chương 03: Điều kiện & Giả định nâng cao",
    "content": "# 🏆 Chương 03: Điều kiện & Giả định nâng cao\n\n> **Trình độ**: JLPT N3 | Giáo trình chuẩn Shinkanzen Master Bunpou N3\n\n---\n\n## 🎯 1. TỔNG QUAN CHUYÊN ĐỀ\n- Phân tích sâu ngữ cảnh, sắc thái biểu cảm và các bẫy thường gặp trong đề thi JLPT N3.\n- Rèn luyện phản xạ chọn đáp án chính xác trong vòng 30 giây cho mỗi câu hỏi ngữ pháp.\n\n---\n\n## 💡 2. CÁC MẪU NGỮ PHÁP TRỌNG ĐIỂM\n\n### 1. Mẫu câu: `〜さえ〜ば (Chỉ cần... là đủ)`\n- **Ý nghĩa cốt lõi**: Chỉ ra điều kiện duy nhất cần thiết để kết quả xảy ra.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **お金さえあれば、何でも買えるわけではない。(Không phải cứ chỉ cần có tiền là mua được tất cả.)**\n\n---\n### 2. Mẫu câu: `〜たとえ〜ても (Cho dù... đi chăng nữa thì vẫn)`\n- **Ý nghĩa cốt lõi**: Nhấn mạnh giả định dù tình huống có xấu nhất thì quyết tâm vẫn không đổi.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **たとえ反対されても、留学します。(Dù cho có bị phản đối thì tôi vẫn sẽ đi du học.)**\n\n---\n### 3. Mẫu câu: `〜としたら / 〜とすれば (Giả sử nếu như...)`\n- **Ý nghĩa cốt lõi**: Đưa ra giả định thuần túy trong tưởng tượng.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **もし1億円当たったとしたら、何をしますか。(Giả sử trúng 100 triệu yên thì bạn sẽ làm gì?)**\n\n---\n### 4. Mẫu câu: `〜ないことには (Nếu không... thì không thể)`\n- **Ý nghĩa cốt lõi**: Nếu điều kiện tiền đề không được đáp ứng thì vế sau không thể diễn ra.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **実際に使ってみないことには、良さがわからない。(Nếu không dùng thử trên thực tế thì sẽ không hiểu được cái hay của nó.)**\n\n---\n## ✍️ 3. BÀI TẬP VẬN DỤNG CHUẨN ĐỀ THI JLPT N3\n\n### Luyện tập trắc nghiệm chọn đáp án đúng:\n1. 先生のおかげ（　）、試験に合格できました。\n   - A. で\n   - B. に\n   - C. を\n   - D. が\n2. 雨が降っている（　）、試合は続けられた。\n   - A. おかげで\n   - B. にもかかわらず\n   - C. せいで\n   - D. わりに\n\n### 🔑 ĐÁP ÁN:\n1. **A** (先生のおかげで: Nhờ có thầy giáo).\n2. **B** (にもかかわらず: Mặc dù trời mưa nhưng trận đấu vẫn tiếp tục).\n\n---\n\n## 🎯 4. CHECKLIST ĐÁNH GIÁ\n- [ ] Phân biệt được sự khác nhau giữa các mẫu câu cùng nhóm ý nghĩa.\n- [ ] Nhớ công thức kết nối (Vる, Vた, Vない, Nの, Nである...).\n- [ ] Làm bài tập Shinkanzen Master đạt trên 80% độ chính xác.\n"
  },
  {
    "id": "n3_chuong_04_nguoc_nghia_nhuong_bo",
    "categoryId": "n3",
    "categoryName": "🏆 Trung Cấp (N3)",
    "filename": "chuong-04-nguoc-nghia-nhuong-bo.md",
    "title": "🏆 Chương 04: Ngược nghĩa, Nhượng bộ & Đối lập",
    "content": "# 🏆 Chương 04: Ngược nghĩa, Nhượng bộ & Đối lập\n\n> **Trình độ**: JLPT N3 | Giáo trình chuẩn Shinkanzen Master Bunpou N3\n\n---\n\n## 🎯 1. TỔNG QUAN CHUYÊN ĐỀ\n- Phân tích sâu ngữ cảnh, sắc thái biểu cảm và các bẫy thường gặp trong đề thi JLPT N3.\n- Rèn luyện phản xạ chọn đáp án chính xác trong vòng 30 giây cho mỗi câu hỏi ngữ pháp.\n\n---\n\n## 💡 2. CÁC MẪU NGỮ PHÁP TRỌNG ĐIỂM\n\n### 1. Mẫu câu: `〜くせに (Thế mà / Ấy vậy mà - Thể hiện sự mỉa mai, trách móc)`\n- **Ý nghĩa cốt lõi**: Dùng khi có sự mâu thuẫn trái ngược gây bực mình, chỉ trích.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **彼は何も知らないくせに、知っているような顔をする。(Hắn ta chẳng biết cái gì thế mà cứ làm ra vẻ như biết tuốt.)**\n\n---\n### 2. Mẫu câu: `〜わりに（は） (So với... thì lại bất ngờ)`\n- **Ý nghĩa cốt lõi**: Kết quả không tương xứng với tiêu chuẩn thông thường.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **この料理は値段のわりには、とても美味しい。(Món ăn này so với giá tiền thì lại ngon bất ngờ.)**\n\n---\n### 3. Mẫu câu: `〜にもかかわらず (Mặc dù... nhưng - Văn viết trang trọng)`\n- **Ý nghĩa cốt lõi**: Bất chấp điều kiện/trở ngại thực tế, vế sau vẫn diễn ra.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **雨が降っているにもかかわらず、多くの人が集まった。(Mặc dù trời mưa nhưng rất đông người đã tụ tập.)**\n\n---\n### 4. Mẫu câu: `〜反面 / 〜半面 (Mặt khác / Trái lại)`\n- **Ý nghĩa cốt lõi**: Thể hiện hai mặt trái ngược của cùng một vấn đề.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **都会の生活は便利な反面、ストレスも多い。(Cuộc sống thành thị tiện lợi nhưng mặt khác lại nhiều áp lực.)**\n\n---\n## ✍️ 3. BÀI TẬP VẬN DỤNG CHUẨN ĐỀ THI JLPT N3\n\n### Luyện tập trắc nghiệm chọn đáp án đúng:\n1. 先生のおかげ（　）、試験に合格できました。\n   - A. で\n   - B. に\n   - C. を\n   - D. が\n2. 雨が降っている（　）、試合は続けられた。\n   - A. おかげで\n   - B. にもかかわらず\n   - C. せいで\n   - D. わりに\n\n### 🔑 ĐÁP ÁN:\n1. **A** (先生のおかげで: Nhờ có thầy giáo).\n2. **B** (にもかかわらず: Mặc dù trời mưa nhưng trận đấu vẫn tiếp tục).\n\n---\n\n## 🎯 4. CHECKLIST ĐÁNH GIÁ\n- [ ] Phân biệt được sự khác nhau giữa các mẫu câu cùng nhóm ý nghĩa.\n- [ ] Nhớ công thức kết nối (Vる, Vた, Vない, Nの, Nである...).\n- [ ] Làm bài tập Shinkanzen Master đạt trên 80% độ chính xác.\n"
  },
  {
    "id": "n3_chuong_05_quan_he_chu_de_pham_vi",
    "categoryId": "n3",
    "categoryName": "🏆 Trung Cấp (N3)",
    "filename": "chuong-05-quan-he-chu-de-pham-vi.md",
    "title": "🏆 Chương 05: Quan hệ, Chủ đề, Đối tượng & Phạm vi",
    "content": "# 🏆 Chương 05: Quan hệ, Chủ đề, Đối tượng & Phạm vi\n\n> **Trình độ**: JLPT N3 | Giáo trình chuẩn Shinkanzen Master Bunpou N3\n\n---\n\n## 🎯 1. TỔNG QUAN CHUYÊN ĐỀ\n- Phân tích sâu ngữ cảnh, sắc thái biểu cảm và các bẫy thường gặp trong đề thi JLPT N3.\n- Rèn luyện phản xạ chọn đáp án chính xác trong vòng 30 giây cho mỗi câu hỏi ngữ pháp.\n\n---\n\n## 💡 2. CÁC MẪU NGỮ PHÁP TRỌNG ĐIỂM\n\n### 1. Mẫu câu: `〜に関して / 〜に関する (Về / Liên quan đến - Trang trọng hơn について)`\n- **Ý nghĩa cốt lõi**: Về đề tài, lĩnh vực lớn nghiên cứu, trao đổi.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **環境問題に関して、論文を書きました。(Tôi đã viết bài luận văn liên quan đến vấn đề môi trường.)**\n\n---\n### 2. Mẫu câu: `〜に対して / 〜に対する (Đối với / Trái ngược với)`\n- **Ý nghĩa cốt lõi**: Chỉ đối tượng hướng tới của hành động hoặc sự so sánh tương phản.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **お客様に対して、失礼な態度をとってはいけません。(Đối với khách hàng, tuyệt đối không được có thái độ thất lễ.)**\n\n---\n### 3. Mẫu câu: `〜において / 〜における (Tại / Ở - Văn viết của で)`\n- **Ý nghĩa cốt lõi**: Chỉ địa điểm, thời đại, bối cảnh diễn ra sự kiện.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **東京において、オリンピックが開催された。(Thế vận hội đã được tổ chức tại Tokyo.)**\n\n---\n### 4. Mẫu câu: `〜にとって (Đối với / Xét từ góc độ của...)`\n- **Ý nghĩa cốt lõi**: Đưa ra đánh giá, quan điểm nhìn từ lập trường của đối tượng đó.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **私にとって、家族が一番大切です。(Đối với tôi, gia đình là quan trọng nhất.)**\n\n---\n## ✍️ 3. BÀI TẬP VẬN DỤNG CHUẨN ĐỀ THI JLPT N3\n\n### Luyện tập trắc nghiệm chọn đáp án đúng:\n1. 先生のおかげ（　）、試験に合格できました。\n   - A. で\n   - B. に\n   - C. を\n   - D. が\n2. 雨が降っている（　）、試合は続けられた。\n   - A. おかげで\n   - B. にもかかわらず\n   - C. せいで\n   - D. わりに\n\n### 🔑 ĐÁP ÁN:\n1. **A** (先生のおかげで: Nhờ có thầy giáo).\n2. **B** (にもかかわらず: Mặc dù trời mưa nhưng trận đấu vẫn tiếp tục).\n\n---\n\n## 🎯 4. CHECKLIST ĐÁNH GIÁ\n- [ ] Phân biệt được sự khác nhau giữa các mẫu câu cùng nhóm ý nghĩa.\n- [ ] Nhớ công thức kết nối (Vる, Vた, Vない, Nの, Nである...).\n- [ ] Làm bài tập Shinkanzen Master đạt trên 80% độ chính xác.\n"
  },
  {
    "id": "n3_chuong_06_so_sanh_va_muc_do",
    "categoryId": "n3",
    "categoryName": "🏆 Trung Cấp (N3)",
    "filename": "chuong-06-so-sanh-va-muc-do.md",
    "title": "🏆 Chương 06: So sánh, Mức độ & Giới hạn",
    "content": "# 🏆 Chương 06: So sánh, Mức độ & Giới hạn\n\n> **Trình độ**: JLPT N3 | Giáo trình chuẩn Shinkanzen Master Bunpou N3\n\n---\n\n## 🎯 1. TỔNG QUAN CHUYÊN ĐỀ\n- Phân tích sâu ngữ cảnh, sắc thái biểu cảm và các bẫy thường gặp trong đề thi JLPT N3.\n- Rèn luyện phản xạ chọn đáp án chính xác trong vòng 30 giây cho mỗi câu hỏi ngữ pháp.\n\n---\n\n## 💡 2. CÁC MẪU NGỮ PHÁP TRỌNG ĐIỂM\n\n### 1. Mẫu câu: `〜ほど〜ない (Không... bằng)`\n- **Ý nghĩa cốt lõi**: So sánh kém.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **今年の冬は、去年ほど寒くない。(Mùa đông năm nay không lạnh bằng năm ngoái.)**\n\n---\n### 2. Mẫu câu: `〜くらい / 〜ぐらい (Đến mức / Cỡ như)`\n- **Ý nghĩa cốt lõi**: Mô tả mức độ cảm xúc hoặc hành động.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **声が出ないくらい、感動しました。(Tôi xúc động đến mức không nói nên lời.)**\n\n---\n### 3. Mẫu câu: `〜ばかり (Toàn là / Suốt ngày chỉ)`\n- **Ý nghĩa cốt lõi**: Số lượng quá nhiều hoặc hành động lặp đi lặp lại gây cảm giác tiêu cực.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **甘いものばかり食べていると、太りますよ。(Cứ suốt ngày toàn ăn đồ ngọt là béo đấy nhé.)**\n\n---\n### 4. Mẫu câu: `〜くらいなら〜ほうがいい (Nếu phải... thì thà... còn hơn)`\n- **Ý nghĩa cốt lõi**: Lựa chọn phương án đỡ tệ hơn.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **あんな人に謝るくらいなら、会社を辞めたほうがましだ。(Nếu phải xin lỗi loại người đó thì thà bỏ việc còn hơn.)**\n\n---\n## ✍️ 3. BÀI TẬP VẬN DỤNG CHUẨN ĐỀ THI JLPT N3\n\n### Luyện tập trắc nghiệm chọn đáp án đúng:\n1. 先生のおかげ（　）、試験に合格できました。\n   - A. で\n   - B. に\n   - C. を\n   - D. が\n2. 雨が降っている（　）、試合は続けられた。\n   - A. おかげで\n   - B. にもかかわらず\n   - C. せいで\n   - D. わりに\n\n### 🔑 ĐÁP ÁN:\n1. **A** (先生のおかげで: Nhờ có thầy giáo).\n2. **B** (にもかかわらず: Mặc dù trời mưa nhưng trận đấu vẫn tiếp tục).\n\n---\n\n## 🎯 4. CHECKLIST ĐÁNH GIÁ\n- [ ] Phân biệt được sự khác nhau giữa các mẫu câu cùng nhóm ý nghĩa.\n- [ ] Nhớ công thức kết nối (Vる, Vた, Vない, Nの, Nである...).\n- [ ] Làm bài tập Shinkanzen Master đạt trên 80% độ chính xác.\n"
  },
  {
    "id": "n3_chuong_07_kha_nang_khong_the_tranh_khoi",
    "categoryId": "n3",
    "categoryName": "🏆 Trung Cấp (N3)",
    "filename": "chuong-07-kha-nang-khong-the-tranh-khoi.md",
    "title": "🏆 Chương 07: Khả năng, Không thể & Bất khả kháng",
    "content": "# 🏆 Chương 07: Khả năng, Không thể & Bất khả kháng\n\n> **Trình độ**: JLPT N3 | Giáo trình chuẩn Shinkanzen Master Bunpou N3\n\n---\n\n## 🎯 1. TỔNG QUAN CHUYÊN ĐỀ\n- Phân tích sâu ngữ cảnh, sắc thái biểu cảm và các bẫy thường gặp trong đề thi JLPT N3.\n- Rèn luyện phản xạ chọn đáp án chính xác trong vòng 30 giây cho mỗi câu hỏi ngữ pháp.\n\n---\n\n## 💡 2. CÁC MẪU NGỮ PHÁP TRỌNG ĐIỂM\n\n### 1. Mẫu câu: `〜わけにはいかない (Không thể làm vì lý do đạo đức/xã hội)`\n- **Ý nghĩa cốt lõi**: Rất muốn làm nhưng lương tâm, quy định không cho phép.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **明日は大事な試験があるので、休むわけにはいかない。(Vì mai có bài thi quan trọng nên tôi không thể nghỉ được.)**\n\n---\n### 2. Mẫu câu: `〜ないわけにはいかない (Đành phải / Buộc phải làm)`\n- **Ý nghĩa cốt lõi**: Không muốn làm nhưng không thể không làm.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **約束したのだから、行かないわけにはいかない。(Vì đã hứa rồi nên không thể không đi.)**\n\n---\n### 3. Mẫu câu: `〜ざるを得ない (Đành phải làm dù không muốn - Văn viết)`\n- **Ý nghĩa cốt lõi**: V(Nai bỏ ない) + ざるを得ない (Riêng する -> せざるを得ない).\n- **Ví dụ điển hình**:\n  > 🇯🇵 **証拠がある以上、罪を認めざるを得ない。(Trước bằng chứng rõ ràng, đành phải nhận tội.)**\n\n---\n### 4. Mẫu câu: `〜っこない (Tuyệt đối không thể nào - Văn nói)`\n- **Ý nghĩa cốt lõi**: V(bỏ ます) + っこない.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **そんな難しい本、一日で読めっこないよ。(Quyển sách khó thế này, tuyệt đối không thể đọc xong trong 1 ngày đâu.)**\n\n---\n## ✍️ 3. BÀI TẬP VẬN DỤNG CHUẨN ĐỀ THI JLPT N3\n\n### Luyện tập trắc nghiệm chọn đáp án đúng:\n1. 先生のおかげ（　）、試験に合格できました。\n   - A. で\n   - B. に\n   - C. を\n   - D. が\n2. 雨が降っている（　）、試合は続けられた。\n   - A. おかげで\n   - B. にもかかわらず\n   - C. せいで\n   - D. わりに\n\n### 🔑 ĐÁP ÁN:\n1. **A** (先生のおかげで: Nhờ có thầy giáo).\n2. **B** (にもかかわらず: Mặc dù trời mưa nhưng trận đấu vẫn tiếp tục).\n\n---\n\n## 🎯 4. CHECKLIST ĐÁNH GIÁ\n- [ ] Phân biệt được sự khác nhau giữa các mẫu câu cùng nhóm ý nghĩa.\n- [ ] Nhớ công thức kết nối (Vる, Vた, Vない, Nの, Nである...).\n- [ ] Làm bài tập Shinkanzen Master đạt trên 80% độ chính xác.\n"
  },
  {
    "id": "n3_chuong_08_y_chi_ke_hoach_muc_dich",
    "categoryId": "n3",
    "categoryName": "🏆 Trung Cấp (N3)",
    "filename": "chuong-08-y-chi-ke-hoach-muc-dich.md",
    "title": "🏆 Chương 08: Ý chí, Kế hoạch & Mục đích",
    "content": "# 🏆 Chương 08: Ý chí, Kế hoạch & Mục đích\n\n> **Trình độ**: JLPT N3 | Giáo trình chuẩn Shinkanzen Master Bunpou N3\n\n---\n\n## 🎯 1. TỔNG QUAN CHUYÊN ĐỀ\n- Phân tích sâu ngữ cảnh, sắc thái biểu cảm và các bẫy thường gặp trong đề thi JLPT N3.\n- Rèn luyện phản xạ chọn đáp án chính xác trong vòng 30 giây cho mỗi câu hỏi ngữ pháp.\n\n---\n\n## 💡 2. CÁC MẪU NGỮ PHÁP TRỌNG ĐIỂM\n\n### 1. Mẫu câu: `〜ように (Để cho / Sao cho - Đi với Động từ không chủ ý/Khả năng)`\n- **Ý nghĩa cốt lõi**: Mục đích hướng đến trạng thái mong muốn.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **忘れないように、メモを取っておきます。(Tôi ghi chú lại để không bị quên.)**\n\n---\n### 2. Mẫu câu: `〜ために (Để / Vì - Đi với Động từ có chủ ý/Danh từ)`\n- **Ý nghĩa cốt lõi**: Mục đích có hành động quyết tâm cụ thể.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **大学に入るために、一生懸命勉強しています。(Tôi đang học hết mình để vào đại học.)**\n\n---\n### 3. Mẫu câu: `〜ようとする / 〜ようとしない (Đang định làm gì / Nhất quyết không chịu làm)`\n- **Ý nghĩa cốt lõi**: Hành động ngay trước khoảnh khắc thực hiện.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **電車に乗ろうとしたとき、ドアが閉まった。(Đúng lúc đang định bước lên tàu thì cửa đóng.)**\n\n---\n## ✍️ 3. BÀI TẬP VẬN DỤNG CHUẨN ĐỀ THI JLPT N3\n\n### Luyện tập trắc nghiệm chọn đáp án đúng:\n1. 先生のおかげ（　）、試験に合格できました。\n   - A. で\n   - B. に\n   - C. を\n   - D. が\n2. 雨が降っている（　）、試合は続けられた。\n   - A. おかげで\n   - B. にもかかわらず\n   - C. せいで\n   - D. わりに\n\n### 🔑 ĐÁP ÁN:\n1. **A** (先生のおかげで: Nhờ có thầy giáo).\n2. **B** (にもかかわらず: Mặc dù trời mưa nhưng trận đấu vẫn tiếp tục).\n\n---\n\n## 🎯 4. CHECKLIST ĐÁNH GIÁ\n- [ ] Phân biệt được sự khác nhau giữa các mẫu câu cùng nhóm ý nghĩa.\n- [ ] Nhớ công thức kết nối (Vる, Vた, Vない, Nの, Nである...).\n- [ ] Làm bài tập Shinkanzen Master đạt trên 80% độ chính xác.\n"
  },
  {
    "id": "n3_chuong_09_khuyen_bao_menh_lenh_nghia_vu",
    "categoryId": "n3",
    "categoryName": "🏆 Trung Cấp (N3)",
    "filename": "chuong-09-khuyen-bao-menh-lenh-nghia-vu.md",
    "title": "🏆 Chương 09: Khuyên bảo, Đạo lý, Mệnh lệnh & Nghĩa vụ",
    "content": "# 🏆 Chương 09: Khuyên bảo, Đạo lý, Mệnh lệnh & Nghĩa vụ\n\n> **Trình độ**: JLPT N3 | Giáo trình chuẩn Shinkanzen Master Bunpou N3\n\n---\n\n## 🎯 1. TỔNG QUAN CHUYÊN ĐỀ\n- Phân tích sâu ngữ cảnh, sắc thái biểu cảm và các bẫy thường gặp trong đề thi JLPT N3.\n- Rèn luyện phản xạ chọn đáp án chính xác trong vòng 30 giây cho mỗi câu hỏi ngữ pháp.\n\n---\n\n## 💡 2. CÁC MẪU NGỮ PHÁP TRỌNG ĐIỂM\n\n### 1. Mẫu câu: `〜べきだ / 〜べきではない (Nên / Không nên - Đạo lý, lẽ thường)`\n- **Ý nghĩa cốt lõi**: Theo quy chuẩn xã hội và đạo đức thì nên làm vậy.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **約束は守るべきだ。(Đã hứa thì nên giữ lời.)**\n\n---\n### 2. Mẫu câu: `〜ことだ (Nên / Lời khuyên trực tiếp của người có kinh nghiệm)`\n- **Ý nghĩa cốt lõi**: Lời khuyên chân thành trong tình huống cụ thể.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **日本語が上手になりたければ、毎日話すことだ。(Nếu muốn giỏi tiếng Nhật thì nên nói chuyện mỗi ngày.)**\n\n---\n### 3. Mẫu câu: `〜ものだ / 〜ものではない (Đương nhiên là... / Bản chất tự nhiên)`\n- **Ý nghĩa cốt lõi**: Chân lý, quy luật hiển nhiên của cuộc sống.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **人の悪口は言うものではない。(Không nên nói xấu người khác - đạo lý.)**\n\n---\n## ✍️ 3. BÀI TẬP VẬN DỤNG CHUẨN ĐỀ THI JLPT N3\n\n### Luyện tập trắc nghiệm chọn đáp án đúng:\n1. 先生のおかげ（　）、試験に合格できました。\n   - A. で\n   - B. に\n   - C. を\n   - D. が\n2. 雨が降っている（　）、試合は続けられた。\n   - A. おかげで\n   - B. にもかかわらず\n   - C. せいで\n   - D. わりに\n\n### 🔑 ĐÁP ÁN:\n1. **A** (先生のおかげで: Nhờ có thầy giáo).\n2. **B** (にもかかわらず: Mặc dù trời mưa nhưng trận đấu vẫn tiếp tục).\n\n---\n\n## 🎯 4. CHECKLIST ĐÁNH GIÁ\n- [ ] Phân biệt được sự khác nhau giữa các mẫu câu cùng nhóm ý nghĩa.\n- [ ] Nhớ công thức kết nối (Vる, Vた, Vない, Nの, Nである...).\n- [ ] Làm bài tập Shinkanzen Master đạt trên 80% độ chính xác.\n"
  },
  {
    "id": "n3_chuong_10_trang_thai_bien_doi_xu_huong",
    "categoryId": "n3",
    "categoryName": "🏆 Trung Cấp (N3)",
    "filename": "chuong-10-trang-thai-bien-doi-xu-huong.md",
    "title": "🏆 Chương 10: Trạng thái, Biến đổi & Xu hướng",
    "content": "# 🏆 Chương 10: Trạng thái, Biến đổi & Xu hướng\n\n> **Trình độ**: JLPT N3 | Giáo trình chuẩn Shinkanzen Master Bunpou N3\n\n---\n\n## 🎯 1. TỔNG QUAN CHUYÊN ĐỀ\n- Phân tích sâu ngữ cảnh, sắc thái biểu cảm và các bẫy thường gặp trong đề thi JLPT N3.\n- Rèn luyện phản xạ chọn đáp án chính xác trong vòng 30 giây cho mỗi câu hỏi ngữ pháp.\n\n---\n\n## 💡 2. CÁC MẪU NGỮ PHÁP TRỌNG ĐIỂM\n\n### 1. Mẫu câu: `〜つつある (Đang dần dần thay đổi theo thời gian)`\n- **Ý nghĩa cốt lõi**: Dùng cho các hiện tượng xã hội, tự nhiên đang biến chuyển.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **地球温暖化が進みつつある。(Sự nóng lên toàn cầu đang dần tiến triển.)**\n\n---\n### 2. Mẫu câu: `〜一方だ (Ngày càng... theo một chiều hướng xấu hoặc đơn chiều)`\n- **Ý nghĩa cốt lõi**: Giá cả ngày càng tăng, kinh tế ngày càng xấu đi.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **物価は上がる一方だ。(Giá cả hàng hóa ngày càng có xu hướng tăng cao.)**\n\n---\n### 3. Mẫu câu: `〜気味 (ぎみ) (Có cảm giác hơi / Có vẻ hơi...)`\n- **Ý nghĩa cốt lõi**: Cảm giác mệt mỏi, sốt nhẹ, áp lực.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **最近、風邪気味で喉が痛い。(Dạo này hơi có triệu chứng cảm cúm nên bị đau họng.)**\n\n---\n### 4. Mẫu câu: `〜がち (Thường hay bị / Dễ có xu hướng... tiêu cực)`\n- **Ý nghĩa cốt lõi**: Hay quên, hay ốm, hay đến muộn.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **一人暮らしの生活は、栄養が偏りがちだ。(Cuộc sống sống một mình thường hay bị thiếu cân bằng dinh dưỡng.)**\n\n---\n## ✍️ 3. BÀI TẬP VẬN DỤNG CHUẨN ĐỀ THI JLPT N3\n\n### Luyện tập trắc nghiệm chọn đáp án đúng:\n1. 先生のおかげ（　）、試験に合格できました。\n   - A. で\n   - B. に\n   - C. を\n   - D. が\n2. 雨が降っている（　）、試合は続けられた。\n   - A. おかげで\n   - B. にもかかわらず\n   - C. せいで\n   - D. わりに\n\n### 🔑 ĐÁP ÁN:\n1. **A** (先生のおかげで: Nhờ có thầy giáo).\n2. **B** (にもかかわらず: Mặc dù trời mưa nhưng trận đấu vẫn tiếp tục).\n\n---\n\n## 🎯 4. CHECKLIST ĐÁNH GIÁ\n- [ ] Phân biệt được sự khác nhau giữa các mẫu câu cùng nhóm ý nghĩa.\n- [ ] Nhớ công thức kết nối (Vる, Vた, Vない, Nの, Nである...).\n- [ ] Làm bài tập Shinkanzen Master đạt trên 80% độ chính xác.\n"
  },
  {
    "id": "n3_chuong_11_kinh_ngu_trung_cap",
    "categoryId": "n3",
    "categoryName": "🏆 Trung Cấp (N3)",
    "filename": "chuong-11-kinh-ngu-trung-cap.md",
    "title": "🏆 Chương 11: Kính ngữ & Giao tiếp công sở trung cấp (Business Keigo)",
    "content": "# 🏆 Chương 11: Kính ngữ & Giao tiếp công sở trung cấp (Business Keigo)\n\n> **Trình độ**: JLPT N3 | Giáo trình chuẩn Shinkanzen Master Bunpou N3\n\n---\n\n## 🎯 1. TỔNG QUAN CHUYÊN ĐỀ\n- Phân tích sâu ngữ cảnh, sắc thái biểu cảm và các bẫy thường gặp trong đề thi JLPT N3.\n- Rèn luyện phản xạ chọn đáp án chính xác trong vòng 30 giây cho mỗi câu hỏi ngữ pháp.\n\n---\n\n## 💡 2. CÁC MẪU NGỮ PHÁP TRỌNG ĐIỂM\n\n### 1. Mẫu câu: `〜ていただけないでしょうか (Liệu anh/chị có thể làm giúp tôi được không - Nhờ vả lịch sự)`\n- **Ý nghĩa cốt lõi**: Cách nhờ vả trang trọng trong công việc.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **資料を一度確認していただけないでしょうか。(Liệu anh có thể xem qua tài liệu giúp tôi được không ạ?)**\n\n---\n### 2. Mẫu câu: `〜させていただく (Xin phép cho tôi được làm gì)`\n- **Ý nghĩa cốt lõi**: Thể hiện sự tôn trọng tuyệt đối khi xin phép thực hiện hành động.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **本日、発表させていただきます。(Hôm nay tôi xin phép được trình bày.)**\n\n---\n### 3. Mẫu câu: `お〜願う / ご〜願う (Kính mong...)`\n- **Ý nghĩa cốt lõi**: Dùng khi thông báo, đề nghị khách hàng.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **少々お待ち願えますか。(Kính mong quý khách vui lòng đợi trong giây lát.)**\n\n---\n## ✍️ 3. BÀI TẬP VẬN DỤNG CHUẨN ĐỀ THI JLPT N3\n\n### Luyện tập trắc nghiệm chọn đáp án đúng:\n1. 先生のおかげ（　）、試験に合格できました。\n   - A. で\n   - B. に\n   - C. を\n   - D. が\n2. 雨が降っている（　）、試合は続けられた。\n   - A. おかげで\n   - B. にもかかわらず\n   - C. せいで\n   - D. わりに\n\n### 🔑 ĐÁP ÁN:\n1. **A** (先生のおかげで: Nhờ có thầy giáo).\n2. **B** (にもかかわらず: Mặc dù trời mưa nhưng trận đấu vẫn tiếp tục).\n\n---\n\n## 🎯 4. CHECKLIST ĐÁNH GIÁ\n- [ ] Phân biệt được sự khác nhau giữa các mẫu câu cùng nhóm ý nghĩa.\n- [ ] Nhớ công thức kết nối (Vる, Vた, Vない, Nの, Nである...).\n- [ ] Làm bài tập Shinkanzen Master đạt trên 80% độ chính xác.\n"
  },
  {
    "id": "n3_chuong_12_tong_hop_phan_biet_mau_cau_de_nham",
    "categoryId": "n3",
    "categoryName": "🏆 Trung Cấp (N3)",
    "filename": "chuong-12-tong-hop-phan-biet-mau-cau-de-nham.md",
    "title": "🏆 Chương 12: Tổng hợp & Phân biệt các mẫu câu dễ gây nhầm lẫn nhất N3",
    "content": "# 🏆 Chương 12: Tổng hợp & Phân biệt các mẫu câu dễ gây nhầm lẫn nhất N3\n\n> **Trình độ**: JLPT N3 | Giáo trình chuẩn Shinkanzen Master Bunpou N3\n\n---\n\n## 🎯 1. TỔNG QUAN CHUYÊN ĐỀ\n- Phân tích sâu ngữ cảnh, sắc thái biểu cảm và các bẫy thường gặp trong đề thi JLPT N3.\n- Rèn luyện phản xạ chọn đáp án chính xác trong vòng 30 giây cho mỗi câu hỏi ngữ pháp.\n\n---\n\n## 💡 2. CÁC MẪU NGỮ PHÁP TRỌNG ĐIỂM\n\n### 1. Mẫu câu: `Phân biệt họ hàng `〜わけ` (わけだ / わけがない / わけではない / わけにはいかない)`\n- **Ý nghĩa cốt lõi**: 1. わけだ (Thảo nào/Đương nhiên là thế)<br>2. わけがない (Tuyệt đối không có chuyện đó)<br>3. わけではない (Không hẳn là/Không có nghĩa là)<br>4. わけにはいかない (Không thể làm vì rào cản đạo đức)\n- **Ví dụ điển hình**:\n  > 🇯🇵 **詳細な例文と解説**\n\n---\n### 2. Mẫu câu: `Phân biệt `〜ものだ` vs `〜ことだ``\n- **Ý nghĩa cốt lõi**: ものだ: Đạo lý chung, hoài niệm quá khứ.<br>ことだ: Lời khuyên cụ thể của cá nhân.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **例文で比較**\n\n---\n### 3. Mẫu câu: `Phân biệt `〜ように` vs `〜ために``\n- **Ý nghĩa cốt lõi**: ように: Mục tiêu trạng thái, đi với thể khả năng/phủ định.<br>ために: Mục đích hành động rõ ràng, có ý chí.\n- **Ví dụ điển hình**:\n  > 🇯🇵 **例文で比較**\n\n---\n## ✍️ 3. BÀI TẬP VẬN DỤNG CHUẨN ĐỀ THI JLPT N3\n\n### Luyện tập trắc nghiệm chọn đáp án đúng:\n1. 先生のおかげ（　）、試験に合格できました。\n   - A. で\n   - B. に\n   - C. を\n   - D. が\n2. 雨が降っている（　）、試合は続けられた。\n   - A. おかげで\n   - B. にもかかわらず\n   - C. せいで\n   - D. わりに\n\n### 🔑 ĐÁP ÁN:\n1. **A** (先生のおかげで: Nhờ có thầy giáo).\n2. **B** (にもかかわらず: Mặc dù trời mưa nhưng trận đấu vẫn tiếp tục).\n\n---\n\n## 🎯 4. CHECKLIST ĐÁNH GIÁ\n- [ ] Phân biệt được sự khác nhau giữa các mẫu câu cùng nhóm ý nghĩa.\n- [ ] Nhớ công thức kết nối (Vる, Vた, Vない, Nの, Nである...).\n- [ ] Làm bài tập Shinkanzen Master đạt trên 80% độ chính xác.\n"
  },
  {
    "id": "n3_ky_nang_doc_hieu_dokkai_n3",
    "categoryId": "n3",
    "categoryName": "🏆 Trung Cấp (N3)",
    "filename": "ky-nang-doc-hieu-dokkai-n3.md",
    "title": "📑 CHIẾN THUẬT XỬ LÝ ĐỌC HIỂU JLPT N3 (DOKKAI MASTERY)",
    "content": "# 📑 CHIẾN THUẬT XỬ LÝ ĐỌC HIỂU JLPT N3 (DOKKAI MASTERY)\n\n> **Mục tiêu**: Đạt từ 45/60 điểm trở lên trong phần thi Đọc hiểu N3 bằng tư duy chiến lược và quản lý thời gian.\n\n---\n\n## ⏱️ PHÂN BỔ THỜI GIAN LÀM BÀI ĐỌC HIỂU N3 (TỔNG 65 PHÚT)\n\n| Phần thi | Dạng bài | Số lượng câu hỏi | Thời gian đề xuất |\n| :--- | :--- | :---: | :---: |\n| **Đoạn văn ngắn (短文)** | 4 bài văn ngắn (~200 chữ) | 4 câu | **12 – 15 phút** (3-4 phút/bài) |\n| **Đoạn văn trung bình (中文)** | 2 bài văn vừa (~500 chữ) | 6 câu | **18 – 20 phút** (9-10 phút/bài) |\n| **Đoạn văn dài (長文)** | 1 bài văn dài luận điểm (~800 chữ) | 4 câu | **15 – 18 phút** |\n| **Tìm kiếm thông tin (情報検索)** | 1 bài bảng biểu, thông báo | 2 câu | **8 – 10 phút** |\n\n---\n\n## 🎯 5 NGUYÊN TẮC VÀNG KHI LÀM ĐỌC HIỂU:\n1. **Đọc câu hỏi trước khi đọc bài**: Xác định từ khóa (Keyword) trong câu hỏi để biết mình cần săn lùng thông tin gì.\n2. **Chú ý các từ nối chuyển hướng (Chuyển ý)**: `しかし (Nhưng)`, `ところが (Tuy nhiên)`, `実は (Thực ra là)` -> Ý kiến cốt lõi của tác giả thường nằm ngay sau các từ này!\n3. **Nhận diện câu thể hiện quan điểm tác giả**:\n   - `〜と思う (Tôi nghĩ rằng...)`\n   - `〜のではないだろうか (Chẳng phải là... hay sao)`\n   - `〜べきだ (Nên...)`\n4. **Không tự suy diễn theo kiến thức ngoài đời**: Câu trả lời chỉ đúng khi có căn cứ trực tiếp trong bài đọc.\n"
  },
  {
    "id": "n3_ky_nang_nghe_hieu_choukai_n3",
    "categoryId": "n3",
    "categoryName": "🏆 Trung Cấp (N3)",
    "filename": "ky-nang-nghe-hieu-choukai-n3.md",
    "title": "🎧 CHIẾN THUẬT XỬ LÝ NGHE HIỂU JLPT N3 (CHOUKAI MASTERY)",
    "content": "# 🎧 CHIẾN THUẬT XỬ LÝ NGHE HIỂU JLPT N3 (CHOUKAI MASTERY)\n\n> **Mục tiêu**: Phản xạ nhanh, bắt trọn từ khóa và không bị phân tâm trong bài thi Nghe hiểu 40 phút.\n\n---\n\n## 🧩 5 DẠNG BÀI THI NGHE N3:\n\n1. **Mondai 1: Hiểu nhiệm vụ (課題理解)**\n   - *Đặc điểm*: Nghe câu hỏi -> Nghe đoạn hội thoại -> Chọn hành động người nói **sẽ làm tiếp theo ngay sau đây (まず何をしますか)**.\n   - *Mẹo*: Ghi chép nhanh các mốc thời gian và thứ tự ưu tiên hành động.\n\n2. **Mondai 2: Hiểu điểm cốt lõi (ポイント理解)**\n   - *Đặc điểm*: Có 20 giây đọc trước 4 đáp án trong tờ đề thi.\n   - *Mẹo*: Đọc thật nhanh đáp án để đoán trước ngữ cảnh trước khi audio phát.\n\n3. **Mondai 3: Hiểu khái quát (概要理解)**\n   - *Đặc điểm*: Không in sẵn đáp án trong đề. Nghe 1 đoạn thuyết trình/bài nói dài để nắm chủ đề chính.\n   - *Mẹo*: Bắt ý tổng thể, không bị mắc kẹt vào các từ vựng nhỏ lẻ không biết.\n\n4. **Mondai 4: Phản xạ nhanh (即時応答)**\n   - *Đặc điểm*: Nghe 1 câu nói ngắn -> Chọn ngay 1 trong 3 câu đối đáp phù hợp nhất trong 3 giây.\n   - *Mẹo*: Làm chủ quán dụng ngữ, câu chào hỏi và các cặp kính ngữ phản xạ tức thì.\n\n5. **Mondai 5: Xử lý thông tin tổng hợp (統合理解)**\n   - *Đặc điểm*: Đoạn hội thoại dài giữa nhiều người để chọn ra phương án tối ưu.\n"
  },
  {
    "id": "n3_tu_vung_n3_mimikara",
    "categoryId": "n3",
    "categoryName": "🏆 Trung Cấp (N3)",
    "filename": "tu-vung-n3-mimikara.md",
    "title": "📖 BỘ TỪ VỰNG TRỌNG TÂM N3 (MIMIKARA OBOERU GOI N3)",
    "content": "# 📖 BỘ TỪ VỰNG TRỌNG TÂM N3 (MIMIKARA OBOERU GOI N3)\n\n> **Mục tiêu**: Làm chủ 880 từ vựng cốt lõi thường xuất hiện nhất trong đề thi JLPT N3 và môi trường làm việc.\n\n---\n\n## 🧭 PHƯƠNG PHÁP HỌC TỪ VỰNG N3 HIỆU QUẢ CAO\n1. **Không học từ đơn lẻ**: Luôn học từ vựng kèm theo **cụm từ (Collocations)** và **câu ví dụ thực tế**.\n2. **Học theo cặp từ trái nghĩa / đồng nghĩa**: Ví dụ: `増加 (Tăng lên)` vs `減少 (Giảm đi)`.\n3. **Nghe Audio Shadowing**: Bật file mp3 của Mimikara N3, vừa nghe vừa nhắc lại để ghi nhớ cả phát âm và trọng âm.\n\n---\n\n## 🗂️ PHÂN LOẠI TỪ VỰNG THEO CHỦ ĐỀ CHÍNH\n\n### 1. Chủ đề Kinh tế - Xã hội & Công việc:\n- `給料 (きゅうりょう - Lương)`\n- `残業 (ざんぎょう - Làm thêm giờ)`\n- `景気 (けいき - Tình hình kinh tế)`\n- `需要 (じゅよう - Nhu cầu)` vs `供給 (きょうきゅう - Cung cấp)`\n- `消費 (しょうひ - Tiêu dùng)`\n\n### 2. Chủ đề Cảm xúc & Tâm lý:\n- `我慢 (がまん - Chịu đựng, nhẫn nại)`\n- `緊張 (きんちょう - Căng thẳng, hồi hộp)`\n- `後悔 (こうかい - Hối hận)`\n- `憧れる (あこがれる - Ngưỡng mộ, ao ước)`\n\n### 3. Phó từ thường bẫy trong JLPT N3:\n- `思わず (おもわず - Bất giác, vô thức)`\n- `せっかく (Cất công, mất công)`\n- `どうせ (Dù sao thì / Đằng nào thì - Buông xuôi)`\n- `いらいら (Bực bội, sốt ruột)`\n"
  },
  {
    "id": "bo_tro_214_bo_thu_kanji",
    "categoryId": "bo_tro",
    "categoryName": "📚 Sổ Tay & Tài Liệu",
    "filename": "214-bo-thu-kanji.md",
    "title": "🀄 214 BỘ THỦ CHỮ HÁN CĂN BẢN (KANJI RADICALS)",
    "content": "# 🀄 214 BỘ THỦ CHỮ HÁN CĂN BẢN (KANJI RADICALS)\n\n> **Bí quyết nhớ siêu tốc**: Mọi chữ Hán dù phức tạp đến đâu (kể cả N1) đều chỉ là sự ghép lại của 214 bộ thủ này!\n\n---\n\n## 🔝 30 BỘ THỦ XUẤT HIỆN NHIỀU NHẤT (CHIẾM 70% CHỮ HÁN THÔNG DỤNG)\n\n| STT | Bộ thủ | Tên Hán Việt | Ý nghĩa liên tưởng | Chữ Hán minh họa |\n| :---: | :---: | :--- | :--- | :--- |\n| 1 | **亻(人)** | Bộ Nhân | Con người, hành động của con người | 休 (nghỉ ngơi: người tựa gốc cây), 体 (cơ thể), 働 (làm việc) |\n| 2 | **氵(水)** | Bộ Thủy (Ba chấm thủy) | Nước, chất lỏng, sông biển | 海 (biển), 洗 (rửa), 泳 (bơi), 汁 (nước sốt/canh) |\n| 3 | **木** | Bộ Mộc | Cây cối, gỗ | 林 (rừng thưa), 森 (rừng rậm), 本 (gốc sách), 校 (trường học) |\n| 4 | **口** | Bộ Khẩu | Cái miệng, ăn uống, nói | 言 (nói), 語 (ngôn ngữ), 味 (vị giác), 呼 (gọi) |\n| 5 | **心 / 忄** | Bộ Tâm | Trái tim, tâm trạng, cảm xúc | 思 (suy nghĩ), 忘 (quên), 忙 (bận rộn), 怖 (sợ hãi) |\n| 6 | **手 / 扌** | Bộ Thủ | Bàn tay, thao tác bằng tay | 持 (cầm nắm), 拾 (nhặt), 打 (đánh), 押 (ấn/đẩy) |\n| 7 | **日** | Bộ Nhật | Mặt trời, ngày, thời gian | 明 (sáng sủa: nhật + nguyệt), 早 (sớm), 晴 (trời nắng) |\n| 8 | **月** | Bộ Nguyệt | Mặt trăng, thịt, bộ phận cơ thể | 服 (quần áo), 朝 (buổi sáng), 肢 (tay chân) |\n| 9 | **火 / 灬** | Bộ Hỏa | Lửa, nấu nướng, nhiệt độ | 焼 (nướng/cháy), 照 (chiếu sáng), 煮 (ninh/hầm) |\n| 10 | **辶 (辵)** | Bộ Quai xước | Đi lại, khoảng cách, di chuyển | 道 (con đường), 進 (tiến lên), 返 (trả lại), 追 (đuổi theo) |\n| 11 | **言** | Bộ Ngôn | Lời nói, phát ngôn, sách vở | 話 (nói chuyện), 読 (đọc sách), 訓 (huấn luyện) |\n| 12 | **目** | Bộ Mục | Con mắt, nhìn ngắm | 見 (nhìn), 眠 (ngủ), 眺 (ngắm nhìn) |\n| 13 | **女** | Bộ Nữ | Phụ nữ, con gái | 好 (thích: phụ nữ + trẻ con), 妹 (em gái), 姉 (chị gái) |\n| 14 | **門** | Bộ Môn | Cánh cổng, cửa ra vào | 開 (mở cửa), 閉 (đóng cửa), 聞 (nghe: ghé tai vào cửa) |\n| 15 | **車** | Bộ Xa | Xe cộ, bánh xe | 輸 (vận chuyển), 転 (lăn/chuyển), 輪 (bánh xe) |\n"
  },
  {
    "id": "bo_tro_tu_dien_tro_tu_tieng_nhat",
    "categoryId": "bo_tro",
    "categoryName": "📚 Sổ Tay & Tài Liệu",
    "filename": "tu-dien-tro-tu-tieng-nhat.md",
    "title": "🎯 TỪ ĐIỂN TOÀN TẬP TRỢ TỪ TIẾNG NHẬT (JOSHI DICTIONARY)",
    "content": "# 🎯 TỪ ĐIỂN TOÀN TẬP TRỢ TỪ TIẾNG NHẬT (JOSHI DICTIONARY)\n\n> **Tầm quan trọng**: \"Trợ từ là xương sống của ngữ pháp tiếng Nhật.\" Hiểu đúng trợ từ sẽ đọc đúng 100% nghĩa của câu.\n\n---\n\n## 1. TRỢ TỪ は (WA) vs が (GA) - PHÂN BIỆT CỐT LÕI\n\n| Tiêu chí | Trợ từ は (Wa) | Trợ từ が (Ga) |\n| :--- | :--- | :--- |\n| **Bản chất** | Chỉ **Đề tài** (Topic) của câu (\"Nói về...\") | Chỉ **Chủ thể trực tiếp** của hành động/hiện tượng |\n| **Trọng tâm thông tin** | Nhấn mạnh vào **Vị ngữ phía sau** | Nhấn mạnh vào **Chủ ngữ đứng trước** |\n| **Ví dụ so sánh** | わたし**は** 田中 です。(Tôi là Tanaka. - Nhấn mạnh tên Tanaka) | わたし**が** 行きます。(Tôi sẽ đi - Chính là TÔI chứ không phải ai khác) |\n| **Hiện tượng tự nhiên** | Ít dùng | 雨**が** 降っています。(Trời đang mưa - Khách quan) |\n| **Mệnh đề phụ** | Không dùng trong mệnh đề bổ nghĩa | 私**が** 買った 本 (Cuốn sách MÀ TÔI đã mua) |\n\n---\n\n## 2. TRỢ TỪ に (NI) vs で (DE) vs へ (E)\n\n- **`に` (Ni)**:\n  - Điểm đến/Đích đến cố định: 部屋**に** 入ります (Vào trong phòng).\n  - Nơi tồn tại: 庭**に** 木があります (Ở trong vườn có cái cây).\n  - Mốc thời gian cụ thể: 7時**に** 起きます (Thức dậy lúc 7 giờ).\n  - Đối tượng tiếp nhận hành động: 友達**に** 本をあげます (Tặng sách cho bạn).\n- **`で` (De)**:\n  - Địa điểm diễn ra hành động: 図書館**で** 勉強します (Học bài ở thư viện).\n  - Phương tiện, công cụ, nguyên liệu: バス**で** 行きます (Đi bằng xe buýt).\n  - Nguyên nhân, lý do khách quan: 事故**で** 電車が遅れました (Vì tai nạn nên tàu trễ).\n- **`へ` (E)**:\n  - Hướng di chuyển: 東京**へ** 行きます (Đi về hướng Tokyo).\n"
  },
  {
    "id": "luyen_de_de_thi_thu_n3_so_01",
    "categoryId": "luyen_de",
    "categoryName": "📝 Đề Thi N3",
    "filename": "de-thi-thu-n3-so-01.md",
    "title": "📝 ĐỀ THI THỬ JLPT N3 CHUẨN CẤU TRÚC (MOCK TEST 01)",
    "content": "# 📝 ĐỀ THI THỬ JLPT N3 CHUẨN CẤU TRÚC (MOCK TEST 01)\n\n> **Thời gian làm bài**:\n> - Phần 1: Kiến thức ngôn ngữ (Chữ Hán - Từ vựng - Ngữ pháp) & Đọc hiểu: **100 phút**\n> - Phần 2: Nghe hiểu: **40 phút**\n\n---\n\n## 🈸 PHẦN 1: KIẾN THỨC NGÔN NGỮ (LANGUAGE KNOWLEDGE)\n\n### Mondai 1: Chọn cách đọc Hiragana đúng cho chữ Hán gạch chân\n1. 部屋の掃除を**依頼**した。\n   - A. いらい\n   - B. いらん\n   - C. えらい\n   - D. えいらい\n\n2. 事故の**原因**を調査している。\n   - A. げんいん\n   - B. げんい\n   - C. がんいん\n   - D. げんえん\n\n---\n\n### Mondai 2: Chọn mẫu ngữ pháp phù hợp điền vào chỗ trống\n3. 先生の教え方（　）、難しい文法もよく理解できた。\n   - A. せいで\n   - B. おかげで\n   - C. わりに\n   - D. くせに\n\n4. たとえどんなに（　）、最後まであきらめません。\n   - A. 苦しくても\n   - B. 苦しいなら\n   - C. 苦しいから\n   - D. 苦しいのに\n\n---\n\n## 🔑 ĐÁP ÁN & GIẢI THÍCH CHI TIẾT\n\n1. **A. いらい (依頼 - Y Lại)**: Nghĩa là nhờ vả, ủy thác.\n2. **A. げんいん (原因 - Nguyên Nhân)**: Nghĩa là nguyên nhân.\n3. **B. おかげで**: Kết quả tốt đẹp \"hiểu được ngữ pháp khó\" nhờ vào \"cách dạy của thầy\".\n4. **A. 苦しくても**: Đi với cấu trúc `たとえ〜ても` (Cho dù có gian khổ đến đâu thì vẫn không từ bỏ).\n"
  }
];
const FLASHCARDS = [
  {
    "front": "私 (わたし)",
    "back": "Tôi (Tư)",
    "tag": "N5",
    "example": "わたしは タン です。(Tôi là Thắng.)"
  },
  {
    "front": "先生 (せんせい)",
    "back": "Thầy / Cô giáo (Tiên sinh)",
    "tag": "N5",
    "example": "日本語の先生。(Giáo viên tiếng Nhật.)"
  },
  {
    "front": "学生 (がくせい)",
    "back": "Học sinh / Sinh viên (Học sinh)",
    "tag": "N5",
    "example": "大学の学生です。(Là sinh viên đại học.)"
  },
  {
    "front": "会社員 (かいしゃいん)",
    "back": "Nhân viên công ty (Hội xã viên)",
    "tag": "N5",
    "example": "IMCの社員です。(Là nhân viên công ty IMC.)"
  },
  {
    "front": "本 (ほん)",
    "back": "Sách (Bổn/Bản)",
    "tag": "N5",
    "example": "これは日本語の本です。(Đây là sách tiếng Nhật.)"
  },
  {
    "front": "辞書 (じしょ)",
    "back": "Từ điển (Từ thư)",
    "tag": "N5",
    "example": "電子辞書を買いました。(Tôi đã mua kim từ điển.)"
  },
  {
    "front": "行きます (いきます)",
    "back": "Đi (Hành)",
    "tag": "N5",
    "example": "日本へ行きます。(Tôi đi Nhật Bản.)"
  },
  {
    "front": "来ます (きます)",
    "back": "Đến (Lai)",
    "tag": "N5",
    "example": "友達が来ます。(Bạn tôi đến.)"
  },
  {
    "front": "帰ります (かえります)",
    "back": "Về nhà/nước (Quy)",
    "tag": "N5",
    "example": "うちへ帰ります。(Tôi về nhà.)"
  },
  {
    "front": "食べます (たべます)",
    "back": "Ăn (Thực)",
    "tag": "N5",
    "example": "ご飯を食べます。(Tôi ăn cơm.)"
  },
  {
    "front": "飲みます (のみます)",
    "back": "Uống (Ẩm)",
    "tag": "N5",
    "example": "水を飲みます。(Tôi uống nước.)"
  },
  {
    "front": "勉強します (べんきょうします)",
    "back": "Học tập (Miễn cưỡng)",
    "tag": "N5",
    "example": "毎晩日本語を勉強します。(Mỗi tối tôi học tiếng Nhật.)"
  },
  {
    "front": "〜んです",
    "back": "Giải thích lý do / Nhấn mạnh thông tin",
    "tag": "N4",
    "example": "頭が痛いんです。(Vì tôi bị đau đầu.)"
  },
  {
    "front": "可能形 (かのうけい)",
    "back": "Thể khả năng (Có thể làm gì)",
    "tag": "N4",
    "example": "漢字が書けます。(Tôi có thể viết chữ Hán.)"
  },
  {
    "front": "〜ながら",
    "back": "Vừa làm A vừa làm B (Song song)",
    "tag": "N4",
    "example": "音楽を聞きながら勉強します。(Vừa nghe nhạc vừa học bài.)"
  },
  {
    "front": "〜てあります",
    "back": "Trạng thái có chủ ý chuẩn bị trước",
    "tag": "N4",
    "example": "カレンダーに予定が書いてあります。(Lịch trình đã được ghi sẵn trên tờ lịch.)"
  },
  {
    "front": "〜ておきます",
    "back": "Chuẩn bị sẵn cho lần sau / Giữ nguyên trạng thái",
    "tag": "N4",
    "example": "旅行の前に切符を買っておきます。(Mua vé sẵn trước chuyến đi.)"
  },
  {
    "front": "〜つもりです",
    "back": "Dự định làm gì (Ý định)",
    "tag": "N4",
    "example": "来年日本へ行くつもりです。(Tôi tính sang năm sẽ đi Nhật.)"
  },
  {
    "front": "〜ほうがいいです",
    "back": "Khuyên nên làm gì / Không nên làm gì",
    "tag": "N4",
    "example": "早く寝たほうがいいです。(Nên đi ngủ sớm đi.)"
  },
  {
    "front": "受身形 (うけみけい)",
    "back": "Thể bị động (Bị/Được)",
    "tag": "N4",
    "example": "先生に褒められました。(Tôi được thầy giáo khen.)"
  },
  {
    "front": "使役形 (しえきけい)",
    "back": "Thể sai khiến (Bắt / Cho phép làm)",
    "tag": "N4",
    "example": "子供に野菜を食べさせます。(Bắt con ăn rau.)"
  },
  {
    "front": "召し上がります",
    "back": "Kính ngữ của 食べます / 飲みます",
    "tag": "N4",
    "example": "どうぞ召し上がってください。(Xin mời quý khách dùng bữa.)"
  },
  {
    "front": "〜うちに",
    "back": "Trong lúc/Trong khi còn... (trước khi thay đổi)",
    "tag": "N3",
    "example": "若いうちに、たくさん勉強したい。(Trong lúc còn trẻ tôi muốn học thật nhiều.)"
  },
  {
    "front": "〜おかげで",
    "back": "Nhờ có... (Kết quả tốt đẹp)",
    "tag": "N3",
    "example": "先生のおかげで合格しました。(Nhờ có thầy mà tôi đã thi đỗ.)"
  },
  {
    "front": "〜せいで",
    "back": "Tại vì/Do... (Đổ lỗi kết quả xấu)",
    "tag": "N3",
    "example": "寝坊したせいで遅刻した。(Tại ngủ quên nên bị muộn.)"
  },
  {
    "front": "〜さえ〜ば",
    "back": "Chỉ cần... là đủ",
    "tag": "N3",
    "example": "時間さえあれば行きます。(Chỉ cần có thời gian là tôi sẽ đi.)"
  },
  {
    "front": "〜わりに（は）",
    "back": "So với... thì lại bất ngờ (Không tương xứng)",
    "tag": "N3",
    "example": "値段のわりには美味しい。(So với giá tiền thì ngon bất ngờ.)"
  },
  {
    "front": "〜にもかかわらず",
    "back": "Mặc dù... nhưng (Bất chấp trở ngại)",
    "tag": "N3",
    "example": "雨にもかかわらず人が多い。(Mặc dù mưa nhưng rất đông người.)"
  },
  {
    "front": "〜わけにはいかない",
    "back": "Không thể làm vì đạo đức/lương tâm/quy định",
    "tag": "N3",
    "example": "大事な会議なので休むわけにはいかない。(Vì là cuộc họp quan trọng nên không thể nghỉ.)"
  },
  {
    "front": "〜べきだ",
    "back": "Nên làm gì (Theo đạo lý, lẽ thường)",
    "tag": "N3",
    "example": "約束は守るべきだ。(Đã hứa thì nên giữ lời.)"
  }
];

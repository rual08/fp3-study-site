<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FP3級勉強サイト - 過去問・徹底解説プラットフォーム</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts Noto Sans JP -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet">
    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['"Noto Sans JP"', 'sans-serif'] },
                    colors: {
                        brand: {
                            50: '#f0fdf4',
                            100: '#dcfce7',
                            500: '#22c55e',
                            600: '#16a34a',
                            700: '#15803d',
                            800: '#166534',
                            900: '#14532d',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body { font-family: 'Noto Sans JP', sans-serif; background-color: #f8fafc; }
        .fade-in { animation: fadeIn 0.3s ease-in-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body class="bg-slate-50 text-slate-800 min-h-screen flex flex-col justify-between select-none">

    <!-- ヘッダー -->
    <header class="bg-gradient-to-r from-brand-800 to-brand-700 text-white shadow-md sticky top-0 z-50">
        <div class="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <div class="flex items-center space-x-2 cursor-pointer" onclick="returnHome()">
                <div class="bg-white text-brand-700 p-2 rounded-xl font-black text-xl shadow">
                    <i class="fa-solid fa-graduation-cap"></i>
                </div>
                <div>
                    <h1 class="text-xl font-bold tracking-tight">FP3級勉強サイト</h1>
                    <p class="text-xs text-brand-100 opacity-90">全6分野完全網羅・徹底解説プラットフォーム</p>
                </div>
            </div>
            <div class="hidden sm:flex items-center space-x-4 text-xs bg-brand-900/40 px-3 py-1.5 rounded-lg border border-brand-600/30">
                <div>総問題数: <span id="header-total-pool" class="font-bold text-white">0問</span></div>
                <div>復習待ち: <span id="header-review-count" class="font-bold text-amber-300">0問</span></div>
            </div>
        </div>
    </header>

    <!-- メイン領域 -->
    <main class="max-w-4xl w-full mx-auto px-4 py-6 flex-grow space-y-6">

        <!-- 1. ホーム画面 -->
        <div id="screen-home" class="space-y-6 fade-in">
            <div class="bg-gradient-to-br from-brand-700 to-brand-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
                <span class="bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">全6分野完全網羅・自己完結型</span>
                <h2 class="text-2xl sm:text-3xl font-black leading-tight">FP3級学習プラットフォーム。</h2>
                <p class="text-emerald-100 text-sm opacity-90 max-w-xl">
                    ライフプランニング、金融、タックス、リスク、不動産、相続の全6分野の豊富な過去問・類題を収録。「正解の理由」「ひっかけの罠」「関連法令」の3本柱の徹底解説で一発合格をサポートします。
                </p>
            </div>

            <!-- 復習リストバナー -->
            <div id="resume-container" class="hidden bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 shadow-sm flex items-center justify-between">
                <div>
                    <h3 class="font-bold text-amber-900 text-base">前回の続きから再開できます</h3>
                    <p id="resume-info-text" class="text-xs text-amber-700">進捗データが保存されています</p>
                </div>
                <button onclick="resumeQuiz()" class="bg-amber-600 hover:bg-amber-700 text-white font-bold px-5 py-2.5 rounded-xl shadow text-sm">
                    続きから再開
                </button>
            </div>

            <!-- 条件設定カード -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
                <h3 class="text-lg font-bold text-slate-800 flex items-center space-x-2">
                    <i class="fa-solid fa-sliders text-brand-600"></i>
                    <span>学習条件の設定</span>
                </h3>

                <div class="space-y-2">
                    <label class="block text-sm font-semibold text-slate-700">分野を選択</label>
                    <select id="select-category" class="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-700 font-medium focus:ring-2 focus:ring-brand-500">
                        <option value="all">🌟 全分野（総合演習）</option>
                        <option value="life">🏠 ライフプランニングと資金計画</option>
                        <option value="financial">📈 金融資産運用</option>
                        <option value="tax">💼 タックスプランニング</option>
                        <option value="risk">🛡️ リスク管理</option>
                        <option value="realestate">🏢 不動産</option>
                        <option value="inheritance">📜 相続・事業承継</option>
                    </select>
                </div>

                <div class="space-y-3 pt-2">
                    <button onclick="startQuiz('all')" class="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition flex items-center justify-center space-x-3 text-lg">
                        <i class="fa-solid fa-circle-play"></i>
                        <span>通常モードでスタート（10問）</span>
                    </button>
                    <button onclick="startQuiz('review')" id="btn-review-home" class="w-full bg-white border-2 border-amber-400 hover:bg-amber-50 text-amber-800 font-bold py-3.5 px-6 rounded-2xl shadow-sm transition flex items-center justify-between">
                        <span>🎯 間違えた問題だけを復習する</span>
                        <span id="review-count-label" class="text-xs bg-amber-100 px-2.5 py-1 rounded-full">復習待ち: 0問</span>
                    </button>
                </div>
            </div>

            <!-- 運営者情報カード -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
                <h3 class="text-lg font-bold text-slate-800 flex items-center space-x-2">
                    <i class="fa-solid fa-user-gear text-brand-600"></i>
                    <span>運営者プロフィール</span>
                </h3>
                <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center text-xl font-bold flex-shrink-0">
                        <i class="fa-solid fa-laptop-code"></i>
                    </div>
                    <div class="space-y-1 text-sm">
                        <h4 class="font-bold text-slate-800">FP資格保有 ITエンジニア</h4>
                        <p class="text-slate-600 leading-relaxed text-xs sm:text-sm">
                            ファイナンシャル・プランニング技能士の知見とITエンジニアとしてのWeb開発ノウハウを活かし、学習効率を最大化する無料問題演習プラットフォームを開発・運営しています。
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 2. クイズ画面 -->
        <div id="screen-quiz" class="hidden space-y-6 fade-in">
            <div class="flex items-center justify-between bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-200">
                <button onclick="returnHome()" class="text-xs font-semibold text-slate-500 hover:text-red-600">
                    <i class="fa-solid fa-arrow-left"></i> 中断してホームへ
                </button>
                <div id="permalink-label" class="text-xs font-bold text-slate-700">
                    問 1 / 10 （個別URL: /questions/1）
                </div>
            </div>

            <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
                <div class="flex justify-between items-center text-xs">
                    <span id="quiz-category-badge" class="bg-brand-100 text-brand-800 font-bold px-3 py-1 rounded-full">分野名</span>
                    <span id="quiz-diff-badge" class="text-amber-500 font-bold">難易度: ★★☆</span>
                </div>

                <h3 id="question-text" class="text-base sm:text-lg font-bold text-slate-800 leading-relaxed">
                    問題文がここに表示されます。
                </h3>

                <!-- 選択肢エリア -->
                <div id="options-container" class="grid grid-cols-1 gap-3 pt-2">
                    <!-- 動的生成 -->
                </div>

                <!-- 徹底解説ボックス（3本柱） -->
                <div id="explanation-box" class="hidden space-y-4 pt-4 border-t border-slate-100 fade-in">
                    <div id="result-badge" class="p-4 rounded-xl text-sm font-bold"></div>

                    <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4 text-sm">
                        <div class="space-y-1">
                            <h5 class="font-bold text-emerald-800 flex items-center space-x-1"><i class="fa-solid fa-circle-check"></i><span>① 正解の理由</span></h5>
                            <p id="exp-reason" class="text-slate-700 leading-relaxed pl-5"></p>
                        </div>
                        <div class="space-y-1">
                            <h5 class="font-bold text-rose-700 flex items-center space-x-1"><i class="fa-solid fa-triangle-exclamation"></i><span>② 受験者が最も引っかかる罠（ひっかけ）</span></h5>
                            <p id="exp-trap" class="text-slate-700 leading-relaxed pl-5"></p>
                        </div>
                        <div class="space-y-1">
                            <h5 class="font-bold text-blue-800 flex items-center space-x-1"><i class="fa-solid fa-book"></i><span>③ 関連法令・周辺知識</span></h5>
                            <p id="exp-law" class="text-slate-700 leading-relaxed pl-5"></p>
                        </div>
                    </div>

                    <!-- 収益化PR枠 -->
                    <div class="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 sm:p-5 space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-[10px] bg-amber-500 text-white font-bold px-2 py-0.5 rounded uppercase tracking-wider">PR / おすすめ</span>
                            <span class="text-xs text-amber-700 font-medium">この分野の理解をさらに深めるなら</span>
                        </div>
                        <div id="random-ad-box-1" class="bg-white p-3.5 rounded-xl border border-amber-100 shadow-sm text-center">
                            おすすめのFP3級公式テキスト＆問題集をチェック！
                        </div>
                    </div>

                    <button onclick="nextQuestion()" class="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-2xl shadow transition text-lg flex items-center justify-center space-x-2">
                        <span>次の問題へ進む（Enterキー可）</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- 3. 結果画面 -->
        <div id="screen-result" class="hidden space-y-6 fade-in">
            <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 text-center space-y-6">
                <div class="w-20 h-20 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center text-4xl mx-auto">
                    <i class="fa-solid fa-trophy"></i>
                </div>
                <h2 class="text-2xl font-black text-slate-800">演習終了！お疲れ様でした</h2>
                <p class="text-lg font-bold text-brand-700">正解数: <span id="result-score">0</span> / <span id="result-total">10</span>問</p>
                
                <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-200 text-left space-y-2">
                    <span class="text-[10px] bg-amber-500 text-white font-bold px-2 py-0.5 rounded">PR</span>
                    <h4 class="text-sm font-bold text-slate-800">お得な特典をチェック</h4>
                    <div id="random-ad-box-2" class="text-xs text-brand-700 font-bold mt-1">
                        FP3級オンライン通信講座をチェック！
                    </div>
                </div>

                <button onclick="returnHome()" class="bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 px-8 rounded-2xl shadow transition">
                    ホームに戻る
                </button>
            </div>
        </div>

    </main>

    <!-- ポップアップ広告モーダル -->
    <div id="ad-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden fade-in">
        <div class="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 relative">
            <button onclick="closeAdModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                <i class="fa-solid fa-xmark"></i>
            </button>

            <div class="text-center space-y-1 pt-2">
                <span class="text-[10px] bg-amber-500 text-white font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">限定PR / おすすめ案内</span>
                <h3 class="text-lg font-black text-slate-800">FP3級を一発合格したい方へ</h3>
                <p class="text-xs text-slate-500">おすすめの特選商品・サービスをチェック！</p>
            </div>

            <div class="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 space-y-3 text-center">
                <div id="random-ad-box-modal" class="text-xs font-bold text-amber-800">
                    おすすめの金融資格対策模試をチェック！
                </div>
            </div>

            <button onclick="closeAdModal()" class="w-full text-xs text-slate-400 hover:text-slate-600 font-medium py-1">
                閉じる（ホームへ戻る）
            </button>
        </div>
    </div>

    <!-- お問い合わせモーダル -->
    <div id="contact-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden fade-in">
        <div class="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 space-y-4 relative max-h-[90vh] flex flex-col">
            <button onclick="closeContactModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center z-10">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <h3 class="text-lg font-bold text-slate-800 flex items-center space-x-2 border-b pb-3">
                <i class="fa-solid fa-envelope text-brand-600"></i>
                <span>お問い合わせ</span>
            </h3>
            <div class="flex-grow overflow-y-auto">
                <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center space-y-3">
                    <p class="text-xs text-slate-600">ご意見・ご感想・問題の修正依頼などは下記フォームよりお問い合わせください。</p>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfDdummyFormIdHere/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0" class="rounded-xl border border-slate-200">読み込み中…</iframe>
                </div>
            </div>
        </div>
    </div>

    <!-- プライバシーポリシーモーダル -->
    <div id="privacy-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden fade-in">
        <div class="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 space-y-4 relative max-h-[85vh] flex flex-col">
            <button onclick="closePrivacyModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center z-10">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <h3 class="text-lg font-bold text-slate-800 flex items-center space-x-2 border-b pb-3">
                <i class="fa-solid fa-shield-halved text-brand-600"></i>
                <span>プライバシーポリシー</span>
            </h3>
            <div class="flex-grow overflow-y-auto text-xs text-slate-600 space-y-4 pr-2 leading-relaxed">
                <section class="space-y-1">
                    <h4 class="font-bold text-slate-800 text-sm">1. 個人情報の利用目的</h4>
                    <p>当サイトでは、お問い合わせの際にお名前やメールアドレス等の個人情報をご入力いただく場合がございます。</p>
                </section>
                <section class="space-y-1">
                    <h4 class="font-bold text-slate-800 text-sm">2. 広告の配信について</h4>
                    <p>当サイトでは、第三者配信の広告サービスを利用する場合があります。</p>
                </section>
            </div>
        </div>
    </div>

    <!-- フッター -->
    <footer class="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 mt-12 space-y-3">
        <div class="flex items-center justify-center space-x-4 font-medium text-slate-600">
            <button onclick="openPrivacyModal()" class="hover:text-brand-600 transition">プライバシーポリシー</button>
            <span>|</span>
            <button onclick="openContactModal()" class="hover:text-brand-600 transition">お問い合わせ</button>
        </div>
        <p>&copy; 2026 FP3級勉強サイト - 全6分野完全対応.</p>
    </footer>

    <!-- 問題データおよび広告データ（全6分野統合・自己完結型） -->
    <script>
        const adsList = [
            `【PR】FP3級 一発合格テキスト・問題集の決定版はこちら ＞`,
            `【PR】スキマ時間で合格！おすすめオンライン通信講座 ＞`,
            `【PR】お金の教養が身につく無料マネーセミナー開催中 ＞`
        ];

        function getRandomAd() {
            if (!adsList || adsList.length === 0) return "おすすめ情報";
            const randomIndex = Math.floor(Math.random() * adsList.length);
            return adsList[randomIndex];
        }

        const fpQuestions = [
            // ==========================================
            // ■ ライフプランニングと資金計画分野（ID: 101 〜 130）
            // ==========================================
            {
                id: 101,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "ox",
                question: "公的年金の老齢基礎年金は、原則として保険料納付済期間と保険料免除期間などを合算した受給資格期間が10年以上ある場合に、満65歳から支給される。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "老齢基礎年金の受給資格期間は「10年以上」に変更されており、要件を満たせば65歳から受給できます。",
                    trap: "「以前の原則25年以上」という古い知識や、「60歳から無条件でもらえる」といった誤認を狙う定番のひっかけです。",
                    law: "国民年金法第26条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 102,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "3choice",
                question: "フラット35（全期間固定金利型住宅ローン）に関する記述として、最も適切なものはどれか？",
                options: [
                    "借入金利は融資実行時の金利が返済終了まで変わらず適用され、民間の金融機関と住宅金融支援機構が提携して提供している。",
                    "利用にあたっては、申込時の年齢制限として満70歳未満でなければならず、また返済期間は最長で20年と定められている。",
                    "返済期間中であっても、市場金利の動向に応じて金利が5年ごとに自動的に見直される仕組みである。"
                ],
                answer: 0,
                explanation: {
                    reason: "フラット35は民間の金融機関と住宅金融支援機構が提携する全期間固定金利型の住宅ローンです。",
                    trap: "全期間固定であるにもかかわらず金利が変動すると説明したり、返済期間が20年と誤認させる罠です。",
                    law: "住宅金融支援機構法"
                },
                difficulty: "★★☆"
            },
            {
                id: 103,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "ox",
                question: "国民年金の第2号被保険者は、厚生年金保険や共済組合等に加入している会社員や公務員等であり、自分で個別に国民年金保険料を納付する必要はない。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "第2号被保険者の保険料は制度全体の拠出金を通じてまかなわれるため、個別に国民年金保険料を支払う必要はありません。",
                    trap: "会社員であっても自分の財布から国民年金保険料を別々に二重で払っていると錯覚させるひっかけです。",
                    law: "国民年金法第7条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 104,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "3choice",
                question: "雇用保険の一般教育訓練給付金において、受講者が支払った費用の支給割合および上限額として正しいものはどれか？",
                options: [
                    "受講費用の20％相当額（上限10万円）",
                    "受講費用の全額（上限なし）",
                    "受講費用の50％相当額（上限30万円）"
                ],
                answer: 0,
                explanation: {
                    reason: "一般教育訓練給付金は支払った費用の20％（上限10万円）が支給されます。",
                    trap: "専門実践教育訓練給付金の給付率（最大70％）と金額を混同させる罠です。",
                    law: "雇用保険法第60条の2"
                },
                difficulty: "★★☆"
            },
            {
                id: 105,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "ox",
                question: "健康保険の傷病手当金は、同一の病気やケガについて最長で通算して一生涯にわたり受給することができる。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "傷病手当金の支給期間は、同一のケガや病気について支給を始めた日から「最長1年6ヶ月」までです。",
                    trap: "医療保険のように長期間または一生涯もらえると誤認させる典型的なひっかけです。",
                    law: "健康保険法第99条"
                },
                difficulty: "★★☆"
            },
            {
                id: 106,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "3choice",
                question: "公的年金の「振替加算」に関する記述として、最も適切なものはどれか？",
                options: [
                    "老齢基礎年金の受給権者が65歳に達した日以降に、厚生年金の被保険者期間を有する配偶者が一定の年齢に達したとき、配偶者の老齢基礎年金に加算されるものである。",
                    "厚生年金の加入者が死亡した際、残された遺族に対して無条件で一律に支給される臨時の手当である。",
                    "国民年金保険料を全額免除された期間がある人が、後から追納を行わなかった場合に自動的に減額されるペナルティ制度である。"
                ],
                answer: 0,
                explanation: {
                    reason: "振替加算は加給年金終了後、配偶者自身の老齢基礎年金に一生涯上乗せされる仕組みです。",
                    trap: "遺族年金や保険料免除のペナルティ制度と混同させる問題です。",
                    law: "国民年金法第20条の2"
                },
                difficulty: "★★★"
            },
            {
                id: 107,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "ox",
                question: "住宅ローンの元利均等返済方式は、毎回の元金と利息を合わせた返済額が完済まで常に一定である。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "元利均等返済は毎月の返済額が一定になるため家計管理がしやすい特徴があります。",
                    trap: "元金均等返済の仕組みと説明を入れ替えるひっかけです。",
                    law: "金利計算およびローン返済方式の基本原則"
                },
                difficulty: "★☆☆"
            },
            {
                id: 108,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "3choice",
                question: "ライフプランニングにおける「キャッシュフロー表」に関する記述として、正しいものはどれか？",
                options: [
                    "将来の予測される収入や支出、貯蓄残高の推移を年次ごとに一覧形式でまとめた表であり、将来の家計の破綻リスクなどを事前に把握するのに役立つ。",
                    "過去5年間の家計の実際のレシートや預金通帳の記録を正確に集計し、過去の納税額を証明するための公的な書類である。",
                    "現在の資産状況のみを特定の1時点においてのみ切り取って評価する貸借対照表と完全に同じものである。"
                ],
                answer: 0,
                explanation: {
                    reason: "キャッシュフロー表は将来の収支や貯蓄残高の推移を予測・管理するためのツールです。",
                    trap: "過去の記録である、バランスシートと同一であると誤解させる罠です。",
                    law: "ファイナンシャル・プランニング実務基準"
                },
                difficulty: "★☆☆"
            },
            {
                id: 109,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "ox",
                question: "公的年金の繰下げ受給による増額率は月0.7％であり、一度決まった増額後の年金額は一生涯変わらない。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "繰下げによる増額率は月0.7％であり、一度決まった増額後の年金額は一生涯継続します。",
                    trap: "増額されるのは最初の1年間だけで、2年目以降は元に戻ると誤認させる罠です。",
                    law: "国民年金法第28条の2"
                },
                difficulty: "★★☆"
            },
            {
                id: 110,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "3choice",
                question: "公的介護保険の第1号被保険者に関する記述として、最も適切なものはどれか？",
                options: [
                    "65歳以上のすべての人が該当し、介護が必要となった原因にかかわらず要介護認定の対象となる。",
                    "40歳以上65歳未満の医療保険加入者に限定されており、介護保険料は給付と同時に天引きされる。",
                    "生活保護を受給しているすべての高齢者について、法律により介護保険の適用が完全に除外されている。"
                ],
                answer: 0,
                explanation: {
                    reason: "第1号被保険者は65歳以上であり、原因にかかわらず要介護認定の対象になります。",
                    trap: "第2号被保険者（40歳〜65歳未満）の要件と混同させる定番問題です。",
                    law: "介護保険法第9条"
                },
                difficulty: "★★☆"
            },
            {
                id: 111,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "ox",
                question: "国民年金の第3号被保険者は、個別に国民年金保険料を納付する義務を負う。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "第3号被保険者は保険料を個別に納付する必要がありません（本人負担はゼロ）。",
                    trap: "扶養されているから自分で専用の保険料を毎月払っているはずと思い込ませるひっかけです。",
                    law: "国民年金法第7条第1項第3号"
                },
                difficulty: "★☆☆"
            },
            {
                id: 112,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "3choice",
                question: "国の教育ローン（教育一般貸付）に関する記述として、正しいものはどれか？",
                options: [
                    "日本政策金融公庫が取り扱っており、生徒1人あたり一定の限度額まで融資を受けることができる。",
                    "世帯の年収制限は一切設けられておらず、どれだけ高所得の家庭であっても無条件で利用が可能である。",
                    "返済期間は最長で3年以内と非常に短期間に限定されている。"
                ],
                answer: 0,
                explanation: {
                    reason: "国の教育ローンは日本政策金融公庫が実施し、生徒1人につき一定の限度額で利用できます。",
                    trap: "世帯年収の上限枠があることや、返済期間が最長18年等であることを見落とさせる罠です。",
                    law: "株式会社日本政策金融公庫法"
                },
                difficulty: "★★☆"
            },
            {
                id: 113,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "ox",
                question: "高額療養費制度の対象となるのは保険診療の自己負担分であり、入院時の食事代や差額ベッド代は原則として対象外である。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "高額療養費の対象は保険診療の自己負担分であり、差額ベッド代や食事代は対象外です。",
                    trap: "病院の窓口で払ったお金なら、差額ベッド代や食事代も含めてすべて戻ると誤認させる罠です。",
                    law: "健康保険法第115条の2"
                },
                difficulty: "★★☆"
            },
            {
                id: 114,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "3choice",
                question: "公的年金の「加給年金」が支給されるための要件として、最も適切なものはどれか？",
                options: [
                    "厚生年金の被保険者期間が原則として20年以上ある人が、65歳到達時点において生計を維持している配偶者や子がいること。",
                    "国民年金のみを20年以上受給している人が、60歳時点で単身であること。",
                    "国民年金基金の加入期間が10年以上あること。"
                ],
                answer: 0,
                explanation: {
                    reason: "加給年金は厚生年金の被保険者期間が20年以上ある人が、65歳未満の配偶者等を扶養している場合に支給されます。",
                    trap: "国民年金（第1号被保険者）でももらえると誤認させる定番のひっかけです。",
                    law: "厚生年金保険法第44条"
                },
                difficulty: "★★★"
            },
            {
                id: 115,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "ox",
                question: "確定拠出年金の企業型において、従業員自身が上乗せして拠出する掛金を事業主掛金と呼ぶ。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "従業員自身が上乗せして拠出する掛金は「個人掛金（マッチング拠出）」と呼ばれます。",
                    trap: "言葉の主客を入れ替えて出題する典型的なひっかけです。",
                    law: "確定拠出年金法"
                },
                difficulty: "★★☆"
            },
            {
                id: 116,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "3choice",
                question: "個人型確定拠出年金（iDeCo）に関する記述として、最も適切なものはどれか？",
                options: [
                    "原則として20歳以上65歳未満の国内居住者であれば加入でき、掛金は全額が所得控除の対象となる。",
                    "掛金の拠出時、運用時、および将来の受給時のすべてのステージにおいて税金が完全に一切かからない。",
                    "加入者は何歳であってもいつでも自由に途中解約して積立金を全額引き出すことができる。"
                ],
                answer: 0,
                explanation: {
                    reason: "iDeCoの掛金は全額が小規模企業共済等掛金控除として所得控除されます。",
                    trap: "途中解約がいつでも自由できるや、すべてのステージで完全非課税であるという誤解を誘う罠です。",
                    law: "確定拠出年金法および所得税法"
                },
                difficulty: "★☆☆"
            },
            {
                id: 117,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "ox",
                question: "遺族厚生年金は、厚生年金の被保険者が死亡したときなどに、その人によって生計を維持されていた配偶者や子などに支給される。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "遺族厚生年金は厚生年金加入者等の死亡時に、要件を満たす遺族に支給されます。",
                    trap: "遺族基礎年金と受給要件や対象範囲を混同させるひっかけです。",
                    law: "厚生年金保険法第58条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 118,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "3choice",
                question: "雇用保険の基本手当（失業手当）を受給するための主な要件として、正しいものはどれか？",
                options: [
                    "離職の日以前2年間に、被保険者期間が通算して12ヶ月以上あること。",
                    "退職後、ハローワークに行かずに自宅で待機しているだけで自動的に口座に振り込まれること。",
                    "年齢が満60歳未満の者に限定されており、定年退職者は一律で受給資格が与えられないこと。"
                ],
                answer: 0,
                explanation: {
                    reason: "基本手当の受給には原則として退職前2年間に被保険者期間が通算12ヶ月以上必要です。",
                    trap: "退職すれば何もしなくても自動的にもらえると誤認させる罠です。",
                    law: "雇用保険法第14条・第22条"
                },
                difficulty: "★★☆"
            },
            {
                id: 119,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "ox",
                question: "複利計算における72の法則は、元本が2倍になるおおよその年数を求めるために「72 ÷ 金利（％）」で計算される。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "72の法則は「72 ÷ 金利（％）」で資産が2倍になるおおよその期間を計算できます。",
                    trap: "100の法則や数式ミスを誘うひっかけです。",
                    law: "金融数学・複利計算の簡易法則"
                },
                difficulty: "★☆☆"
            },
            {
                id: 120,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "3choice",
                question: "障害基礎年金に関する記述として、最も適切なものはどれか？",
                options: [
                    "国民年金の加入期間中に初診日がある病気やケガで、障害等級1級または2級に該当する障害の状態になったときに支給される。",
                    "厚生年金に加入していなければ障害に関する公的給付は一切受給することができない。",
                    "軽度のケガや通院であっても一律で一生涯満額が支給される。"
                ],
                answer: 0,
                explanation: {
                    reason: "障害基礎年金は国民年金加入中の初診日における障害等級1・2級に対して支給されます。",
                    trap: "厚生年金加入が必要であるという誤解や軽度でも出るという誤認を突く罠です。",
                    law: "国民年金法第30条"
                },
                difficulty: "★★☆"
            },
            {
                id: 121,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "ox",
                question: "住宅ローンの繰上返済で返済期間を短縮する「期間短縮型」は、総返済利息を減らす効果が「返済額軽減型」よりも大きい。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "期間短縮型は元本が早く減るため利息軽減効果が大きくなります。",
                    trap: "返済額軽減型のほうがトータルの利息が大きく減ると逆を答えさせるひっかけです。",
                    law: "住宅ローン返済および金利計算の原則"
                },
                difficulty: "★★☆"
            },
            {
                id: 122,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "3choice",
                question: "公的年金の保険料免除制度に関する記述として、最も適切なものはどれか？",
                options: [
                    "保険料の「全額免除」期間がある場合、老齢基礎年金の年金額を計算する際には、受給額が一定割合減額されて反映される。",
                    "保険料を免除された期間は、将来の年金受給資格期間の計算において一切カウントされない。",
                    "学生向けの学生納付特例制度は、将来の受給額には全く反映されず完全に掛け捨てになる。"
                ],
                answer: 0,
                explanation: {
                    reason: "全額免除期間がある場合、受給資格期間には算入されますが、年金額への反映割合は一定の減額が行われます。",
                    trap: "免除＝受給資格期間に一切含まれないと誤認させる罠です。",
                    law: "国民年金法第90条"
                },
                difficulty: "★★★"
            },
            {
                id: 123,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "ox",
                question: "出産育児一時金は健康保険だけでなく、国民健康保険の加入者であっても同様に支給される。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "出産育児一時金は健康保険だけでなく国民健康保険の加入者にも支給されます。",
                    trap: "会社員の健康保険だけの特典であり国保にはないと思い込ませるひっかけです。",
                    law: "健康保険法第101条および国民健康保険法"
                },
                difficulty: "★☆☆"
            },
            {
                id: 124,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "3choice",
                question: "ライフプランニングの資金計画において、現価係数を用いる計算として正しいものはどれか？",
                options: [
                    "将来の特定の時点において必要となる目標金額を達成するために、現在いくらの元手を準備すればよいかを求める場合。",
                    "現在のまとまった資金を複利運用しながら、将来にわたって毎年一定額ずつ取り崩して受け取る場合。",
                    "毎年一定額をコツコツ積み立てていき、将来の特定の時点における総額を求める場合。"
                ],
                answer: 0,
                explanation: {
                    reason: "現価係数は将来の目標金額を達成するために現在いくら必要かを求める係数です。",
                    trap: "終価係数や資本回収係数などの他の係数と役割を入れ替える超定番のひっかけです。",
                    law: "資金計画における各種係数の定義"
                },
                difficulty: "★★★"
            },
            {
                id: 125,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "ox",
                question: "公的年金の未支給年金を受け取る請求ができるのは、死亡当時の生計同一の遺族である。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "未支給年金の請求権は死亡当時生計を同じくしていた一定範囲の遺族に認められています。",
                    trap: "本人が亡くなった時点で年金受給権は消滅し家族は1円も請求できないと誤認させる罠です。",
                    law: "国民年金法第19条"
                },
                difficulty: "★★☆"
            },
            {
                id: 126,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "3choice",
                question: "公的介護保険のサービスを利用する際の原則的な利用者負担割合として、正しいものはどれか？",
                options: [
                    "原則として1割（ただし所得に応じて2割または3割となる場合がある）",
                    "一律で常に5割",
                    "年齢にかかわらず一律で完全無料"
                ],
                answer: 0,
                explanation: {
                    reason: "介護保険の自己負担割合は原則1割ですが、所得に応じて2割または3割負担となります。",
                    trap: "医療保険の窓口負担と混同させたり全額無料と誤解させる定番の罠です。",
                    law: "介護保険法第50条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 127,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "ox",
                question: "公的年金の繰上げ受給を請求した場合の減額率は月0.4％であり、一度減額された年金額は一生涯そのまま継続する。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "繰上げ受給の減額率は月0.4％であり、一度減額された年金額は一生涯そのまま継続します。",
                    trap: "65歳になったら自動的に減額が解除されて満額に戻ると誤認させる罠です。",
                    law: "国民年金法第28条"
                },
                difficulty: "★★☆"
            },
            {
                id: 128,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "3choice",
                question: "ライフプランニングの資金計画において、毎年一定額を積み立てながら将来の元利合計額を求めるために使用する係数はどれか？",
                options: [
                    "年金終価係数",
                    "現価係数",
                    "資本回収係数"
                ],
                answer: 0,
                explanation: {
                    reason: "毎年一定額をコツコツ積み立てて将来の合計額を求めるのは年金終価係数です。",
                    trap: "他の係数との混同を誘う問題です。",
                    law: "資金計画・複利運用係数の定義"
                },
                difficulty: "★★☆"
            },
            {
                id: 129,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "ox",
                question: "健康保険の傷病手当金は、支給開始日の属する月から起算して最長1年6ヶ月の期間内において支給される。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "傷病手当金は支給を始めた日から最長1年6ヶ月の間支給されます。",
                    trap: "会社を休んだ初日から自動的に全額が出ると誤認させるひっかけです。",
                    law: "健康保険法第99条"
                },
                difficulty: "★★☆"
            },
            {
                id: 130,
                category: "life",
                categoryName: "ライフプランニングと資金計画",
                type: "3choice",
                question: "会社を退職して自営業者になった場合の年金の被保険者種別の変更に関する記述として、最も適切なものはどれか？",
                options: [
                    "厚生年金等から国民年金（第1号被保険者）への種別変更の手続きを行う必要がある。",
                    "自動的に手続きなしで国民年金のままでいることができる。",
                    "どのような働き方に変更しても年金の被保険者種別が変更されることはない。"
                ],
                answer: 0,
                explanation: {
                    reason: "退職等で働き方が変わった場合、第1号への種別変更の届出が必要です。",
                    trap: "何もせずに放置しておいても自動ですべてやってくれると誤解させる罠です。",
                    law: "国民年金法第9条"
                },
                difficulty: "★☆☆"
            },

            // ==========================================
            // ■ 金融資産運用分野（ID: 201 〜 230）
            // ==========================================
            {
                id: 201,
                category: "financial",
                categoryName: "金融資産運用",
                type: "ox",
                question: "日本銀行が実施する買いオペレーションは、市中の金融機関から国債等を買い入れることにより、市場の資金量を減少させる金融引締め効果を持つ。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "買いオペは日銀が国債等を買い入れて代金を支払うため、市場の資金量は増加します（金融緩和方向）。",
                    trap: "国債を買う＝日銀がお金を回収すると勘違いさせるひっかけです。",
                    law: "日本銀行法および金融政策の基本メカニズム"
                },
                difficulty: "★★☆"
            },
            {
                id: 202,
                category: "financial",
                categoryName: "金融資産運用",
                type: "3choice",
                question: "預金保険制度における「決済用預金」に関する記述として、正しいものはどれか？",
                options: [
                    "利息がつかないこと、および「無利息、要求払い、決済サービスを提供できること」の3要件を満たすものが全額保護される。",
                    "他の定期預金等と同様に、1金融機関につき1人当たり元本1,000万円までが保護される。",
                    "外貨預金や外貨建ての普通預金も決済用預金に含まれて全額保護される。"
                ],
                answer: 0,
                explanation: {
                    reason: "決済用預金は3要件を満たせば預金保険により全額保護されます。",
                    trap: "一般預金の「1,000万円まで」という制限や外貨預金が対象外であることを見落とさせる罠です。",
                    law: "預金保険法第53条"
                },
                difficulty: "★★★"
            },
            {
                id: 203,
                category: "financial",
                categoryName: "金融資産運用",
                type: "ox",
                question: "投資信託の普通分配金を受け取った場合、個人投資家にとっては配当所得として課税対象となる。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "公募株式投資信託の普通分配金は配当所得とみなされ、課税対象となります。",
                    trap: "すべての分配金が一律で非課税になると誤認させるひっかけに注意が必要です。",
                    law: "所得税法第24条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 204,
                category: "financial",
                categoryName: "金融資産運用",
                type: "3choice",
                question: "債券の利回りに関する記述として、最も適切なものはどれか？",
                options: [
                    "額面金額を下回る価格で購入した債券を償還期限まで所有した場合の最終利回りは、表面利率よりも高くなる。",
                    "表面利率が同一であれば、購入価格が高いほど、最終利回りは高くなる。",
                    "残存期間が同じであれば、表面利率が高い債券ほど、金利変動に対する価格の変動率が大きい。"
                ],
                answer: 0,
                explanation: {
                    reason: "額面より安く購入した場合、償還差益が得られるため最終利回りは表面利率より高くなります。",
                    trap: "購入価格が高いほど利回りが下がる逆の現象と混同させる罠です。",
                    law: "債券の各種利回り計算の算式"
                },
                difficulty: "★★☆"
            },
            {
                id: 205,
                category: "financial",
                categoryName: "金融資産運用",
                type: "ox",
                question: "信用取引において、証券会社から借り入れた株式を返済するために市場で買い戻す決済方法を「現物返済」という。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "空売りした銘柄を買い戻して決済することを「買埋」といい、「現物返済」は現物株をもって建玉を決済することを指します。",
                    trap: "言葉の響きだけで現物での返済だから買い戻しのことだと誤解させるひっかけです。",
                    law: "信用取引規定"
                },
                difficulty: "★★☆"
            },
            {
                id: 206,
                category: "financial",
                categoryName: "金融資産運用",
                type: "3choice",
                question: "新NISAにおける成長投資枠の年間投資枠（上限）として、正しいものはどれか？",
                options: [
                    "240万円",
                    "120万円",
                    "360万円"
                ],
                answer: 0,
                explanation: {
                    reason: "成長投資枠の年間投資枠は年240万円、つみたて投資枠は年120万円です。",
                    trap: "つみたて枠（120万円）や合計額（360万円）と数字が混同しやすい点に注意です。",
                    law: "租税特別措置法第37条の14"
                },
                difficulty: "★☆☆"
            },
            {
                id: 207,
                category: "financial",
                categoryName: "金融資産運用",
                type: "ox",
                question: "顧客が円を外貨に換えるときは、金融機関が提示するTTS（売気配）が適用される。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "顧客が円を外貨に換えるときは、金融機関が外貨を売るレートであるTTSが適用されます。",
                    trap: "買う・売るの主体が顧客か銀行かによって逆になるため混乱させるひっかけです。",
                    law: "外国為替取引規定"
                },
                difficulty: "★★☆"
            },
            {
                id: 208,
                category: "financial",
                categoryName: "金融資産運用",
                type: "3choice",
                question: "ポートフォリオ理論における資産の「相関係数」に関する記述として、適切なものはどれか？",
                options: [
                    "2つの資産の相関係数が「－1」のとき、最も高い分散投資によるリスク低減効果が得られる。",
                    "2つの資産の相関係数が「＋1」のとき、リスクを完全に相殺してゼロにすることができる。",
                    "相関係数がマイナスの資産を組み合わせると、ポートフォリオ全体の期待収益率が必ずマイナスになる。"
                ],
                answer: 0,
                explanation: {
                    reason: "相関係数が「－1」のとき、リスク低減効果が理論上最大になります。",
                    trap: "「プラスのほうが安全」や「マイナスだと収益が下がる」という誤った直感を狙った罠です。",
                    law: "現代ポートフォリオ理論"
                },
                difficulty: "★★★"
            },
            {
                id: 209,
                category: "financial",
                categoryName: "金融資産運用",
                type: "ox",
                question: "株主資本利益率（ROE）は「当期純利益 ÷ 自己資本」で算定される。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "ROEは自己資本に対する当期純利益の割合を表します。",
                    trap: "総資産利益率（ROA）の総資産ベースと混同させる定番問題です。",
                    law: "企業財務分析の標準的定義"
                },
                difficulty: "★☆☆"
            },
            {
                id: 210,
                category: "financial",
                categoryName: "金融資産運用",
                type: "3choice",
                question: "個人向け国債（変動10年）の中途換金調整額の計算式として正しいものはどれか？",
                options: [
                    "直前2回分の各利息（税引前）× 0.79685",
                    "直前3回分の各利息（税引前）× 0.5",
                    "中途換金時の残存元本金額の1％"
                ],
                answer: 0,
                explanation: {
                    reason: "変動10年の中途換金時には「直前2回分の各利息（税引前）× 0.79685」が差し引かれます。",
                    trap: "係数を変えて迷わせるひっかけです。",
                    law: "国債の発行条件に関する財務省令"
                },
                difficulty: "★★☆"
            },
            {
                id: 211,
                category: "financial",
                categoryName: "金融資産運用",
                type: "ox",
                question: "株主優待制度は、日本のすべての株式上場企業に対して法律で実施が義務付けられている。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "株主優待は企業が独自に行う任意の制度であり、すべての企業に義務付けられているわけではありません。",
                    trap: "上場企業の特典だから法律で定められているはずという思い込みを突く問題です。",
                    law: "会社法"
                },
                difficulty: "★☆☆"
            },
            {
                id: 212,
                category: "financial",
                categoryName: "金融資産運用",
                type: "3choice",
                question: "インサイダー取引規制に関する記述として、正しいものはどれか？",
                options: [
                    "会社関係者から未公開の重要情報を聞きつけた者が、その情報が公表される前に当該株式を買い付ける行為は禁止されている。",
                    "役職員であっても、家族や友人に対して未公開情報を伝えることは一切法的に禁止されていない。",
                    "重要情報が公表された後の株式売買であってもインサイダー取引の対象になる。"
                ],
                answer: 0,
                explanation: {
                    reason: "未公開の重要情報を受領した者が公表前に売買する行為はインサイダー取引として禁止されています。",
                    trap: "自分が直接会社関係者でなければセーフであると勘違いさせる罠です。",
                    law: "金融商品取引法第166条"
                },
                difficulty: "★★☆"
            },
            {
                id: 213,
                category: "financial",
                categoryName: "金融資産運用",
                type: "ox",
                question: "変額保険や変額個人年金保険は、特別勘定の運用実績によって将来の保険金額や年金額が変動するため、契約者自身が運用リスクを負う。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "特別勘定の成果によって受取額が変動し、元本保証はありません。",
                    trap: "「保険」という名称から定額保険のように元本保証があると錯覚させる点に注意です。",
                    law: "保険業法"
                },
                difficulty: "★★☆"
            },
            {
                id: 214,
                category: "financial",
                categoryName: "金融資産運用",
                type: "3choice",
                question: "投資信託のコストに関する記述として、最も適切なものはどれか？",
                options: [
                    "信託報酬は、投資信託を保有している期間中、信託財産から日々間接的に差し引かれる。",
                    "信託報酬は、購入時に一度だけ一括して支払う手数料のことである。",
                    "信託財産留保額は、投資信託を購入する際に販売会社へ支払う手数料である。"
                ],
                answer: 0,
                explanation: {
                    reason: "信託報酬は保有期間中に毎日純資産総額から自動的に差し引かれる管理費用です。",
                    trap: "購入時手数料と信託報酬を混同させる定番問題です。",
                    law: "投資信託及び投資法人に関する法律"
                },
                difficulty: "★★☆"
            },
            {
                id: 215,
                category: "financial",
                categoryName: "金融資産運用",
                type: "ox",
                question: "株価収益率（PER）を算出する際、分母に用いられるのは「1株当たり純資産（BPS）」である。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "PERの分母は「1株当たり当期純利益（EPS）」です。「BPS」を用いるのはPBRです。",
                    trap: "PERとPBRの式を入れ替えて出題する典型的なひっかけです。",
                    law: "株式指標の定義"
                },
                difficulty: "★☆☆"
            },
            {
                id: 216,
                category: "financial",
                categoryName: "金融資産運用",
                type: "3choice",
                question: "外貨建てMMFの収益に関する課税関係として、正しいものはどれか？",
                options: [
                    "分配金および換金（または償還）時の譲渡損益はともに申告分離課税の対象となり、株式等との損益通算が可能である。",
                    "分配金は非課税であるが、換金時の為替差益には総合課税が適用される。",
                    "分配金は配当所得として総合課税のみが適用され、分離課税を選択することはできない。"
                ],
                answer: 0,
                explanation: {
                    reason: "外貨建てMMFの分配金および譲渡損益は上場株式等と同様に申告分離課税であり、損益通算が可能です。",
                    trap: "外貨預金と同じ雑所得になると思い込ませる罠です。",
                    law: "租税特別措置法"
                },
                difficulty: "★★★"
            },
            {
                id: 217,
                category: "financial",
                categoryName: "金融資産運用",
                type: "ox",
                question: "証券取引所の立会時間外に行われる、証券会社が独自に開設する私設の株取引システムのことを「PTS取引」と呼ぶ。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "PTS（Proprietary Trading System）は取引所外での夜間取引等を可能にするシステムです。",
                    trap: "専門用語のカタカナ表記に惑わされ、証券取引所の特殊取引と誤認させるひっかけです。",
                    law: "金融商品取引法"
                },
                difficulty: "★★☆"
            },
            {
                id: 218,
                category: "financial",
                categoryName: "金融資産運用",
                type: "3choice",
                question: "債券の価格変動に関する記述として、最も適切なものはどれか？",
                options: [
                    "市場金利が上昇すると、すでに発行されている既発債の価格は下落する。",
                    "市場金利が上昇すると、すでに発行されている既発債の価格は上昇する。",
                    "市場金利の変動と債券価格の変動の間には何ら相関関係はない。"
                ],
                answer: 0,
                explanation: {
                    reason: "金利と債券価格はシーソーの関係にあり、金利が上がれば既発債価格は下落します。",
                    trap: "金利が上がれば債券価格も上がると直感的に勘違いさせる罠です。",
                    law: "債券価格と金利の逆相関の原則"
                },
                difficulty: "★☆☆"
            },
            {
                id: 219,
                category: "financial",
                categoryName: "金融資産運用",
                type: "ox",
                question: "日本国内の銀行が取り扱う外貨預金は、預金保険制度（ペイオフ）の保護対象となるため1人当たり元本1,000万円まで保護される。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "外貨預金は預金保険制度の対象外（保護されない）です。",
                    trap: "銀行の預金だから当然ペイオフの対象になるという一般的な安心感を逆用した定番のひっかけです。",
                    law: "預金保険法"
                },
                difficulty: "★★☆"
            },
            {
                id: 220,
                category: "financial",
                categoryName: "金融資産運用",
                type: "3choice",
                question: "株式の「株式分割」が行われた場合、理論上の株数と株価はどうなるか？",
                options: [
                    "株数が増加し、それに反比例して1株当たりの株価は下落するが、投資家の持分価値の総額は変わらない。",
                    "株数も株価もともに増加し、投資家の資産価値は2倍に跳ね上がる。",
                    "株数は変わらず、株価のみが強制的に切り下げられる。"
                ],
                answer: 0,
                explanation: {
                    reason: "株式分割では持分比率は変わらず株数が増え、株価がその分だけ下がります。",
                    trap: "分割＝資産が勝手に増えてお得になるという誤解を誘う引っ掛けです。",
                    law: "会社法第183条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 221,
                category: "financial",
                categoryName: "金融資産運用",
                type: "ox",
                question: "顧客の知識や経験、財産の状況などに照らして不適当と認められる勧誘を行ってはならないというルールを「適合性の原則」という。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "顧客の属性やリスク許容度に見合わない過大な勧誘をしてはならない適合性の原則が定められています。",
                    trap: "抽象的な法律用語のため実務上の義務ではないと勘違いさせる罠があります。",
                    law: "金融商品取引法第40条"
                },
                difficulty: "★★☆"
            },
            {
                id: 222,
                category: "financial",
                categoryName: "金融資産運用",
                type: "3choice",
                question: "一般的な債券の「デュレーション」に関する記述として、最も適切なものはどれか？",
                options: [
                    "投資資金の平均回収期間（年数）を示すとともに、金利変動に対する債券価格の感応度を表す指標である。",
                    "デュレーションは、表面利率が高くなるほど長くなる傾向がある。",
                    "残存期間が同じであれば、ゼロ・クーポン債よりも利付債のほうがデュレーションは長くなる。"
                ],
                answer: 0,
                explanation: {
                    reason: "デュレーションは投資資金の平均回収時間であり、金利変動に対する価格感応度を表します。",
                    trap: "単なる残存期間と同じであると混同させる問題です。",
                    law: "債券ポートフォリオ分析の標準理論"
                },
                difficulty: "★★★"
            },
            {
                id: 223,
                category: "financial",
                categoryName: "金融資産運用",
                type: "ox",
                question: "株主が保有する株式の持分比率に応じて新株を優先して割り当ててもらえる権利を「株式分割請求権」という。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "この権利は「株主割当てによる新株予約権」であり、株式分割請求権という用語はありません。",
                    trap: "株式分割という言葉を混ぜて偽の権利名を信じ込ませる罠です。",
                    law: "会社法第202条"
                },
                difficulty: "★★☆"
            },
            {
                id: 224,
                category: "financial",
                categoryName: "金融資産運用",
                type: "3choice",
                question: "投資信託の「インデックス運用」に関する記述として、適切なものはどれか？",
                options: [
                    "日経平均株価やTOPIXなどの特定のベンチマークに連動する成果を目指す運用手法である。",
                    "ファンドマネージャー独自の調査や予測に基づいてベンチマークを上回る高い収益を積極的に狙う手法である。",
                    "運用コストがアクティブ運用に比べて割高になる傾向がある。"
                ],
                answer: 0,
                explanation: {
                    reason: "インデックス運用は市場平均等の指標に連動させることを目的としており、低コストが特徴です。",
                    trap: "アクティブ運用の特徴と説明を入れ替えるひっかけです。",
                    law: "投資信託の運用手法"
                },
                difficulty: "★☆☆"
            },
            {
                id: 225,
                category: "financial",
                categoryName: "金融資産運用",
                type: "ox",
                question: "信用取引の「制度信用取引」は、証券金融会社が定める銘柄に限られ、返済期限が原則として最長6ヶ月と定められている。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "制度信用取引は取引所が選定し、証券金融会社が株券調達を行い、決済期限は原則6ヶ月以内です。",
                    trap: "一般信用取引の期限と混同させるひっかけです。",
                    law: "信用取引規定"
                },
                difficulty: "★★☆"
            },
            {
                id: 226,
                category: "financial",
                categoryName: "金融資産運用",
                type: "3choice",
                question: "GPIF（年金積立金管理運用独立行政法人）の基本的なポートフォリオ構成に関する記述として、正しいものはどれか？",
                options: [
                    "「国内債券」「国内株式」「外国債券」「外国株式」の4つの基本資産に分散投資している。",
                    "元本割れを防ぐためすべての資産を国内の安全な国債のみで運用することが義務付けられている。",
                    "ハイリスクな暗号資産を中心に資産の大半を構成している。"
                ],
                answer: 0,
                explanation: {
                    reason: "GPIFは4資産に基本ポートフォリオとして分散投資しています。",
                    trap: "年金だから国債100％のはずという思い込みを突く問題です。",
                    law: "GPIFの業務方法書"
                },
                difficulty: "★★☆"
            },
            {
                id: 227,
                category: "financial",
                categoryName: "金融資産運用",
                type: "ox",
                question: "株式の「指値注文」は、売買の価格を指定せずにその時点の市場価格でただちに売買を成立させる注文方法である。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "価格を指定せずに発注するのは「成行注文」です。指値注文は価格を指定します。",
                    trap: "指値と成行の定義を入れ替える超定番のひっかけです。",
                    law: "売買取引規程"
                },
                difficulty: "★☆☆"
            },
            {
                id: 228,
                category: "financial",
                categoryName: "金融資産運用",
                type: "3choice",
                question: "特定口座（源泉徴収あり）に関する記述として、最も適切なものはどれか？",
                options: [
                    "特定口座（源泉徴収あり）を利用している場合、原則として納税のための確定申告を行う必要がない。",
                    "特定口座内での譲渡損益は、他の証券会社の口座にある損益と自動的に損益通算される。",
                    "一般口座では証券会社が年間取引報告書を代わりに作成してくれる。"
                ],
                answer: 0,
                explanation: {
                    reason: "源泉徴収ありの特定口座では証券会社が納税を代行するため原則確定申告不要です。",
                    trap: "他社口座との損益通算が自動で行われると勘違いさせる罠です。",
                    law: "租税特別措置法第37条の11の3"
                },
                difficulty: "★★☆"
            },
            {
                id: 229,
                category: "financial",
                categoryName: "金融資産運用",
                type: "ox",
                question: "外貨建て債券は、為替レートが円高方向に進んだときは、円換算での元本割れや為替差損が発生することがある。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "為替変動により円高になると、円換算での価値が目減りし為替差損が生じます。",
                    trap: "債券だから満期まで持てば為替に関係なく元本が戻ると誤認させるひっかけです。",
                    law: "金融商品取引法上のリスク説明義務"
                },
                difficulty: "★☆☆"
            },
            {
                id: 230,
                category: "financial",
                categoryName: "金融資産運用",
                type: "3choice",
                question: "金融商品に関するセーフティネットの組合せとして、正しいものはどれか？",
                options: [
                    "生命保険契約 ── 生命保険契約者保護機構",
                    "投資信託・株式 ── 預金保険機構",
                    "銀行の普通預金 ── 日本証券業協会"
                ],
                answer: 0,
                explanation: {
                    reason: "生命保険は生命保険契約者保護機構、銀行預金は預金保険機構がセーフティネットです。",
                    trap: "すべての救済機関が預金保険機構であると錯覚させる罠です。",
                    law: "保険業法・預金保険法"
                },
                difficulty: "★☆☆"
            },

            // ==========================================
            // ■ タックスプランニング分野（ID: 301 〜 330）
            // ==========================================
            {
                id: 301,
                category: "tax",
                categoryName: "タックスプランニング",
                type: "ox",
                question: "所得税において、個人が退職手当等を受け取ったことによる所得は「退職所得」として他の所得と合算せず、分離課税の対象となる。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "退職所得は他の所得とは合算せずに単独で計算する申告分離課税が適用されます。",
                    trap: "退職金は給与と同じように他の所得と合算して総合課税されると勘違いさせる典型的なひっかけです。",
                    law: "所得税法第30条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 302,
                category: "tax",
                categoryName: "タックスプランニング",
                type: "3choice",
                question: "所得税における「配偶者控除」の適用を受けるための配偶者の合計所得金額の要件として、正しいものはどれか？",
                options: [
                    "48万円以下（給与収入のみの場合は103万円以下）",
                    "95万円以下（給与収入のみの場合は150万円以下）",
                    "133万円以下（給与収入のみの場合は201万円以下）"
                ],
                answer: 0,
                explanation: {
                    reason: "配偶者控除の対象となる配偶者の年間合計所得金額要件は「48万円以下」（給与収入で103万円以下）です。",
                    trap: "配偶者特別控除の額と混同させる定番問題です。",
                    law: "所得税法第2条"
                },
                difficulty: "★★☆"
            },
            {
                id: 303,
                category: "tax",
                categoryName: "タックスプランニング",
                type: "ox",
                question: "医療費控除の対象となる医療費の額は、その年に支払った医療費の総額から保険金等で補填される金額を差し引いた後、最高500万円まで控除することができる。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "医療費控除の控除限度額は「最高200万円」までと定められています。",
                    trap: "実際に支払った額であれば上限なく全額引ける、500万円まで引き込めるなどの数字の誤認を狙うひっかけです。",
                    law: "所得税法第73条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 304,
                category: "tax",
                categoryName: "タックスプランニング",
                type: "3choice",
                question: "青色申告の承認を受けて最高65万円の青色申告特別控除を受けるための要件として、正しいものはどれか？",
                options: [
                    "複式簿記による記帳を行い、貸借対照表および損益計算書を添付した確定申告書を提出期限内に提出すること。",
                    "簡易帳簿による単式記帳を行い、現金主義による会計処理を行うこと。",
                    "税理士に申告書の作成および提出を全て代行・委任すること。"
                ],
                answer: 0,
                explanation: {
                    reason: "65万円の青色申告特別控除を受けるには複式簿記による記帳と貸借対照表等の添付、期限内申告が必要です。",
                    trap: "10万円控除の要件とすり替える問題です。",
                    law: "租税特別措置法第25条の2"
                },
                difficulty: "★★☆"
            },
            {
                id: 305,
                category: "tax",
                categoryName: "タックスプランニング",
                type: "ox",
                question: "個人の所得税において、自宅を売却した際に生じた譲渡損失は、他の所得と損益通算することは一切認められていない。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "住宅ローンが残っている場合の買い替え等で一定の要件を満たせば損益通算が認められています。",
                    trap: "生活に通常不要な資産の損益通算不可のルールをマイホーム特例にも適用されると思い込ませる罠です。",
                    law: "租税特別措置法第41条の5"
                },
                difficulty: "★★★"
            },
            {
                id: 306,
                category: "tax",
                categoryName: "タックスプランニング",
                type: "3choice",
                question: "個人が土地・建物を譲渡した際の所有期間による区分（短期・長期）に関する記述として、正しいものはどれか？",
                options: [
                    "譲渡した年の1月1日において所有期間が5年を超えるものは「長期譲渡所得」、5年以下のものは「短期譲渡所得」となる。",
                    "譲渡した日時点で所有期間がちょうど5年経過していれば長期譲渡所得となる。",
                    "取得日から売却日までの実質日数が3年以上経過していれば一律で長期譲渡所得となる。"
                ],
                answer: 0,
                explanation: {
                    reason: "不動産の長期・短期の判定は、「譲渡した年の1月1日現在」で所有期間が5年を超えているかで判定されます。",
                    trap: "売却日時点で5年経過していれば長期になるという直感的な間違いを狙った超定番の罠です。",
                    law: "租税特別措置法第31条"
                },
                difficulty: "★★☆"
            },
            {
                id: 307,
                category: "tax",
                categoryName: "タックスプランニング",
                type: "ox",
                question: "住宅ローン控除の適用を受ける最初の年は、年末調整で控除の適用を受けることができず確定申告を行う必要がある。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "初年度は必要書類を添付して必ず確定申告を行う必要があります。",
                    trap: "会社員なら1年目から年末調整で完了できると誤認させるひっかけ問題です。",
                    law: "租税特別措置法第41条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 308,
                category: "tax",
                categoryName: "タックスプランニング",
                type: "3choice",
                question: "消費税の納税義務が免除される免税事業者の判定に関する記述として、最も適切なものはどれか？",
                options: [
                    "原則として、基準期間における課税売上高が1,000万円以下であれば、その課税期間の消費税の納税義務が免除される。",
                    "開業初年度の個人事業主は、売上金額にかかわらず強制的に課税事業者となる。",
                    "基準期間の売上が500万円であっても、特定期間の売上が800万円を超えた場合は自動的に免税事業者となる。"
                ],
                answer: 0,
                explanation: {
                    reason: "免税事業者の基本判定基準は基準期間の課税売上高が1,000万円以下であることです。",
                    trap: "開業1年目は絶対に課税事業者になる等の誤認を誘う選択肢が罠となっています。",
                    law: "消費税法第9条"
                },
                difficulty: "★★☆"
            },
            {
                id: 309,
                category: "tax",
                categoryName: "タックスプランニング",
                type: "ox",
                question: "所得税における所得控除は、納税者本人の担税力に応じた個人的事情を考慮するためのものであり、全部で14種類存在する。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "所得税の所得控除は個人的な事情に応じた税負担の調整を行うもので、物的控除と人的控除から構成されています。",
                    trap: "所得控除は全員一律の金額しか引けないという誤解を突く問題です。",
                    law: "所得税法"
                },
                difficulty: "★☆☆"
            },
            {
                id: 310,
                category: "tax",
                categoryName: "タックスプランニング",
                type: "3choice",
                question: "会社員が副業等で雑所得を得た場合において、確定申告が不要となる条件に関する記述として、正しいものはどれか？",
                options: [
                    "給与所得および退職所得以外の所得金額の合計額が年間20万円以下である場合、所得税の確定申告は原則として不要である。",
                    "副業の売上総額が年間50万円以下であれば確定申告が不要となる。",
                    "雑所得がいくら発生していても年末調整を受けていれば確定申告をする必要はない。"
                ],
                answer: 0,
                explanation: {
                    reason: "給与・退職所得以外の所得の合計額が年20万円以下である場合、原則確定申告不要です。",
                    trap: "「収入ベースで20万円」と「所得ベースで20万円」の混同を誘う定番問題です。",
                    law: "所得税法第121条"
                },
                difficulty: "★★☆"
            },

            // ==========================================
            // ■ リスク管理分野（ID: 401 〜 430）
            // ==========================================
            {
                id: 401,
                category: "risk",
                categoryName: "リスク管理",
                type: "ox",
                question: "生命保険の契約において、保険契約者と被保険者が同一人である場合、死亡保険金を受け取った者が保険料を負担していなければ、当該死亡保険金は相続税の課税対象となる。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "契約者＝被保険者が死亡し、保険料負担者以外の人が受け取った場合、死亡保険金は相続税の課税対象となります。",
                    trap: "受取人の負担関係を混同させるひっかけです。",
                    law: "相続税法第3条"
                },
                difficulty: "★★☆"
            },
            {
                id: 402,
                category: "risk",
                categoryName: "リスク管理",
                type: "3choice",
                question: "生命保険の死亡保険金受取人を変更する場合の法律上の要件として、最も適切なものはどれか？",
                options: [
                    "保険契約者の意思表示のみで行うことができ、原則として保険会社の承諾は効力発生要件ではない。",
                    "被保険者本人の直筆の署名がなければ一切変更の効力が生じない。",
                    "旧受取人の書面による同意が必ず事前に必要である。"
                ],
                answer: 0,
                explanation: {
                    reason: "受取人変更は保険契約者の意思表示により効力を生じます。",
                    trap: "旧受取人の同意や保険会社の承諾が必要と思い込ませるひっかけです。",
                    law: "保険法第43条"
                },
                difficulty: "★★☆"
            },
            {
                id: 403,
                category: "risk",
                categoryName: "リスク管理",
                type: "ox",
                question: "定期保険特付終身保険において、主契約の終身保険部分は保険期間が一生涯にわたって続くため、途中で主契約が消滅することはない。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "終身保険は一生涯の保障が続くため途中で保険期間が満了して消滅することはありません。",
                    trap: "特約の更新時に主契約まで一緒に終わってしまうのではないかと誤認させる罠です。",
                    law: "生命保険商品の基本構造"
                },
                difficulty: "★☆☆"
            },
            {
                id: 404,
                category: "risk",
                categoryName: "リスク管理",
                type: "3choice",
                question: "生命保険のリビング・ニーズ特約に関する記述として、最も適切なものはどれか？",
                options: [
                    "被保険者の余命が6ヶ月以内と判断された場合に、生存中に死亡保険金の一部または全部を生前給付金として受け取ることができる。",
                    "病気やケガで入院したときの日額給付金を前倒しして受け取れる医療特約である。",
                    "死亡保険金とは別枠で非課税で受け取ることができる特約である。"
                ],
                answer: 0,
                explanation: {
                    reason: "リビング・ニーズ特約は医師の診断等により余命6ヶ月以内とされたとき、死亡保険金の一部を生前に受け取れる仕組みです。",
                    trap: "通常の入院給付金の前払いであると誤解させるひっかけです。",
                    law: "生命保険特約規定"
                },
                difficulty: "★☆☆"
            },
            {
                id: 405,
                category: "risk",
                categoryName: "リスク管理",
                type: "ox",
                question: "傷害保険では、医学的他覚所見のない「むち打ち症」や「腰痛」であっても、医師の診断があれば保険金の支払対象となる。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "客観的な証拠のない主観的な症状のみ（他覚所見のないむち打ち等）は、原則として保険金の支払対象外です。",
                    trap: "医師が診断しているから当然出るはずという思い込みを突く問題です。",
                    law: "傷害保険普通保険約款"
                },
                difficulty: "★★★"
            },
            {
                id: 406,
                category: "risk",
                categoryName: "リスク管理",
                type: "3choice",
                question: "火災保険の補償内容に関する記述として、最も適切なものはどれか？",
                options: [
                    "通常の火災保険では、火災だけでなく風災や水災などの自然災害による損害も補償の対象に含めることができる。",
                    "火災保険は火災のみを補償するものであり、風災や水災は一切補償されない。",
                    "落雷による家電製品の故障は火災保険の対象外と法律で一律に除外されている。"
                ],
                answer: 0,
                explanation: {
                    reason: "近年の火災保険は風災や水災等も補償の対象に含まれます。",
                    trap: "火災保険だから自然災害は出ないと誤解を誘う定番の罠です。",
                    law: "損害保険商品規定"
                },
                difficulty: "★★☆"
            },
            {
                id: 407,
                category: "risk",
                categoryName: "リスク管理",
                type: "ox",
                question: "地震保険は単独で契約することが可能であり、火災保険を契約していなくても地震保険のみに加入することができる。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "地震保険は単独では契約できず、必ず火災保険に付帯して契約する必要があります。",
                    trap: "独立した保険商品であると誤認させる超定番のひっかけです。",
                    law: "地震保険に関する法律"
                },
                difficulty: "★☆☆"
            },
            {
                id: 408,
                category: "risk",
                categoryName: "リスク管理",
                type: "3choice",
                question: "自動車保険の対人賠償保険に関する記述として、正しいものはどれか？",
                options: [
                    "他人の自動車や電柱などの物損害は補償の対象外であり、運転者自身のケガも補償されない。",
                    "自動車事故により自分の車が全壊したときの車両修理費用を全額無制限で補償する。",
                    "同居の親族に対する賠償事故であってもすべて無条件で支払われる。"
                ],
                answer: 0,
                explanation: {
                    reason: "対人賠償保険は他人を死傷させ法律上の損害賠償責任を負った場合を補償するもので、物損や自身のケガは対象外です。",
                    trap: "自動車保険に入っていれば自分の車やケガも全部出ると勘違いさせる罠です。",
                    law: "任意自動車保険約款"
                },
                difficulty: "★☆☆"
            },
            {
                id: 409,
                category: "risk",
                categoryName: "リスク管理",
                type: "ox",
                question: "生命保険の契約転換制度を利用する場合、転換時点の新しい契約の保険料は、転換前の加入年齢を基準として計算されるため保険料が安くなる。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "転換時点での年齢や保険料率をベースに計算されるため、年齢が上がっている分原則として保険料は高くなります。",
                    trap: "昔の契約の権利を引き継ぐのだから年齢も昔のままになると錯覚させるひっかけです。",
                    law: "生命保険標準約款"
                },
                difficulty: "★★☆"
            },
            {
                id: 410,
                category: "risk",
                categoryName: "リスク管理",
                type: "3choice",
                question: "個人賠償責任保険の補償対象となる事故として、最も適切なものはどれか？",
                options: [
                    "飼い犬が散歩中に他人に噛みついてケガをさせ、法律上の損害賠償責任を負った場合。",
                    "仕事中に誤って会社の高価なパソコンを破損させた場合。",
                    "自分の車を運転中に、前方不注意で歩行者をはねて負傷させた場合。"
                ],
                answer: 0,
                explanation: {
                    reason: "個人賠償責任保険は日常生活における偶然の事故を補償します（仕事中や自動車運転中は対象外）。",
                    trap: "日常生活の賠償だから仕事中や車でも出るだろうと誤解させる定番の罠です。",
                    law: "損害保険特約規定"
                },
                difficulty: "★★☆"
            },
            {
                id: 411,
                category: "risk",
                categoryName: "リスク管理",
                type: "ox",
                question: "生命保険において、保険契約者が自殺を原因として死亡した場合、免責期間（通常3年間など）を経過していれば死亡保険金が支払われる。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "免責期間経過後の自殺による死亡は、保険金の支払対象となります。",
                    trap: "自殺はいかなる理由や期間であっても一律免責であると誤認させるひっかけです。",
                    law: "保険法第51条"
                },
                difficulty: "★★☆"
            },
            {
                id: 412,
                category: "risk",
                categoryName: "リスク管理",
                type: "3choice",
                question: "法人契約の定期保険の経理処理に関する記述として、正しいものはどれか？",
                options: [
                    "最高解約返戻率に応じて、保険期間の経過年数に応じて保険料の一部または全部が資産計上される。",
                    "法人が支払う保険料はどのような商品であっても全額が無条件で損金（経費）として処理できる。",
                    "法人が受け取った死亡保険金はすべて非課税の収益となる。"
                ],
                answer: 0,
                explanation: {
                    reason: "法人の保険料は解約返戻率等に応じて厳格な法人税法上のルールが定められています。",
                    trap: "法人保険なら節税目的で全額経費になるという誤ったイメージを突く問題です。",
                    law: "法人税法基本通達"
                },
                difficulty: "★★★"
            },
            {
                id: 413,
                category: "risk",
                categoryName: "リスク管理",
                type: "ox",
                question: "火災保険の水災補償では、台風による大雨で河川が氾濫し、床上浸水となった場合の損害が補償の対象となる。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "水災補償は洪水や土砂崩れ、床上・床下浸水などの損害を補償します。",
                    trap: "大雨による浸水は火災保険には入っておらず自己責任であると勘違いさせる罠です。",
                    law: "損害保険普通保険約款"
                },
                difficulty: "★☆☆"
            },
            {
                id: 414,
                category: "risk",
                categoryName: "リスク管理",
                type: "3choice",
                question: "生命保険の告知義務に関する記述として、最も適切なものはどれか？",
                options: [
                    "保険契約者や被保険者は、申込時に過去の病歴や健康状態などについて、保険会社から質問された事項を正確に告げなければならない。",
                    "口頭での会話のみで十分であり、書面による告知を求められることはない。",
                    "過去に大きな病気を患っていても現在完治していれば告知する必要はない。"
                ],
                answer: 0,
                explanation: {
                    reason: "告知義務は保険会社が質問した事項について事実を正確に告げる義務です。",
                    trap: "完治していれば書かなくてよいといった誤認を誘う罠です。",
                    law: "保険法第37条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 415,
                category: "risk",
                categoryName: "リスク管理",
                type: "ox",
                question: "告知義務違反による解除において、保険会社の責任で取消し等が行われた場合を除き、解約返戻金が支払われることはない。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "告知義務違反による解除でも解約返戻金があれば契約者に支払われます。",
                    trap: "違反があったら積立金や返戻金は没収されると思い込ませるひっかけです。",
                    law: "保険法"
                },
                difficulty: "★★★"
            },
            {
                id: 416,
                category: "risk",
                categoryName: "リスク管理",
                type: "3choice",
                question: "こども保険（学資保険）の特徴に関する記述として、最も適切なものはどれか？",
                options: [
                    "契約者が死亡した場合、以後の保険料の払込みが免除され、学資金や満期保険金は予定通り受け取れることが多い。",
                    "子どもの病気やケガによる医療費を一生涯にわたって高額補償するのが主たる目的である。",
                    "銀行預金と同様に元本保証が義務付けられており、中途解約しても一切損をすることはない。"
                ],
                answer: 0,
                explanation: {
                    reason: "学資保険には保険料払込免除特則がついており、契約者が死亡した場合以後の保険料が免除されます。",
                    trap: "親が亡くなったら保険そのものが失効して消滅すると誤解させる定番のひっかけです。",
                    law: "生命保険商品規定"
                },
                difficulty: "★☆☆"
            },
            {
                id: 417,
                category: "risk",
                categoryName: "リスク管理",
                type: "ox",
                question: "自賠責保険は日本国内で運行されるすべての自動車に契約が義務付けられている強制保険であり、対物賠償も補償の範囲に含まれる。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "自賠責保険は人身事故のみを対象としており、車の修理代などの対物賠償は補償対象外です。",
                    trap: "強制保険だから物の損害も当然出るはずと思い込ませる超定番のひっかけです。",
                    law: "自動車損害賠償保障法"
                },
                difficulty: "★☆☆"
            },
            {
                id: 418,
                category: "risk",
                categoryName: "リスク管理",
                type: "3choice",
                question: "医療保険における支払限度日数（例：1入院60日型）に関する記述として、正しいものはどれか？",
                options: [
                    "1回の入院につき給付金が支払われる日数の上限であり、退院後に同一の病気で再入院した場合の取扱には一定のルールがある。",
                    "一生涯を通じて入院できる日数の合計が最大で60日間に制限される。",
                    "入院初日から60日以内であれば手術費用や通院費用もすべて無制限で全額補償される。"
                ],
                answer: 0,
                explanation: {
                    reason: "支払限度日数は1入院あたりの上限日数です。",
                    trap: "一生涯で合計60日しか使えないと誤認させる定番の罠です。",
                    law: "医療保険普通保険約款"
                },
                difficulty: "★★☆"
            },
            {
                id: 419,
                category: "risk",
                categoryName: "リスク管理",
                type: "ox",
                question: "火災保険において、建物が全焼した場合、保険金額の全額が支払われるが、家財道具等については一部が免責とされるため満額支払われることはない。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "家財保険であっても全焼した場合には、設定した保険金額の満額を受け取ることができます。",
                    trap: "家財は建物と違って全焼しても一部しか出ないはずという思い込みを突くひっかけです。",
                    law: "損害保険算定基準"
                },
                difficulty: "★★☆"
            },
            {
                id: 420,
                category: "risk",
                categoryName: "リスク管理",
                type: "3choice",
                question: "生命保険の契約者配当に関する記述として、最も適切なものはどれか？",
                options: [
                    "有配当保険において、実際の運用益や死亡率が予定よりも良好だった場合に還元される余剰金のことである。",
                    "保険会社が法律により毎年必ず一定の利率で支払うことが強制されている固定の利息である。",
                    "無配当保険であっても国からの補助金によって自動的に毎年支給される。"
                ],
                answer: 0,
                explanation: {
                    reason: "契約者配当は予定利率と実績利率の差などから生じた余剰金を契約者に分配するものです。",
                    trap: "配当という名前だから必ずもらえると誤解させる罠です。",
                    law: "保険業法"
                },
                difficulty: "★☆☆"
            },
            {
                id: 421,
                category: "risk",
                categoryName: "リスク管理",
                type: "ox",
                question: "生命保険の保険金を受け取った場合、契約者と被保険者および受取人の関係によって、所得税、相続税、贈与税のいずれの課税対象になるかが異なる。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "保険金にかかる税金は誰が保険料を払っていて誰が受け取るかによって課税関係が異なります。",
                    trap: "生命保険の保険金はすべて一律で相続税になると誤認させるひっかけに注意が必要です。",
                    law: "所得税法・相続税法・贈与税法"
                },
                difficulty: "★☆☆"
            },
            {
                id: 422,
                category: "risk",
                categoryName: "リスク管理",
                type: "3choice",
                question: "損害保険における時価額と新価に関する記述として、正しいものはどれか？",
                options: [
                    "新価（再調達価額）とは、現在と同じ新品をもう一度購入または建築するために必要な金額のことである。",
                    "時価額とは、現在の新品価格から経過年数による値下がり分を一切差し引かずに算出した価格のことである。",
                    "現代の火災保険の建物補償はすべて時価額ベースでのみ保険金が支払われる。"
                ],
                answer: 0,
                explanation: {
                    reason: "新価は同等のものを新たに調達するのに必要な価格です。現在の火災保険は新価ベースが主流です。",
                    trap: "時価額と新価の定義を入れ替えて出題する定番のひっかけです。",
                    law: "損害保険算定基準"
                },
                difficulty: "★★☆"
            },
            {
                id: 423,
                category: "risk",
                categoryName: "リスク管理",
                type: "3choice",
                question: "生命保険の転換制度を利用する際の注意点として、最も適切なものはどれか？",
                options: [
                    "転換時点の年齢や保険料率が適用されるため、新しい契約の保険料が従来より高くなることがある。",
                    "転換を行ってもこれまでの積立金や保険料は一切引き継がれずすべて消滅する。",
                    "転換時には改めて医師の診査等が一切不要であり無条件で引き受けられる。"
                ],
                answer: 0,
                explanation: {
                    reason: "転換は新しい保険料率・年齢が適用されるため、保険料が上がる可能性があります。",
                    trap: "転換＝すべて自動的にメリットだけで得をすると思い込ませる罠です。",
                    law: "生命保険標準約款"
                },
                difficulty: "★★☆"
            },
            {
                id: 424,
                category: "risk",
                categoryName: "リスク管理",
                type: "ox",
                question: "傷害保険では、被保険者が地震や噴火、またはこれらによる津波によって負傷または死亡した場合でも、特約がなくても自動的に全額が補償される。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "傷害保険などの損害保険では、地震・噴火・津波による損害は原則として免責（対象外）となります。",
                    trap: "ケガを補償する保険だから天災であっても当然出るはずという思い込みを突く定番問題です。",
                    law: "傷害保険普通保険約款"
                },
                difficulty: "★★☆"
            },
            {
                id: 425,
                category: "risk",
                categoryName: "リスク管理",
                type: "3choice",
                question: "火災保険の類焼損害特約に関する記述として、最も適切なものはどれか？",
                options: [
                    "自宅から出火して隣家の建物や家財を焼損させてしまった場合、失火責任法により法律上の賠償責任がなくても、隣家に対して一定の補償を行える特約である。",
                    "自宅が火事で全焼した際、隣家からのもらい火による損害を一切補償しない免責特約である。",
                    "自宅の庭木やフェンスだけが盗難にあった場合の損害を補償する特約である。"
                ],
                answer: 0,
                explanation: {
                    reason: "失火責任法により重大な過失がない限り隣家への賠償責任は生じませんが、類焼損害特約で隣家を救済できます。",
                    trap: "法律上の賠償責任がないから隣家の火災損害は保険から出ないという原則を逆手にとったひっかけです。",
                    law: "失火の責任に関する法律および損害保険特約"
                },
                difficulty: "★★★"
            },
            {
                id: 426,
                category: "risk",
                categoryName: "リスク管理",
                type: "ox",
                question: "生命保険の満期保険金を受け取った場合、保険料負担者と受取人が同一人であれば、一時所得として所得税の課税対象となる。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "満期保険金の受取人が保険料負担者本人である場合、受取った満期保険金は一時所得とみなされます。",
                    trap: "保険金だからすべて非課税または相続税になると誤認させる罠です。",
                    law: "所得税法第34条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 427,
                category: "risk",
                categoryName: "リスク管理",
                type: "3choice",
                question: "自動車保険における無保険車傷害特約の補償内容として、正しいものはどれか？",
                options: [
                    "自動車事故に遭った際、加害者が任意保険に未加入であり損害賠償を受けられない場合に、自分の保険から保険金が支払われる。",
                    "自分が加害者となって相手を負傷させたが自分の対人賠償保険の限度額を超えてしまったときの超過分を補償する特約である。",
                    "契約している自動車が故障して自走できなくなったときのレッカー移動費用を補償する特約である。"
                ],
                answer: 0,
                explanation: {
                    reason: "無保険車傷害特約は、ひき逃げや無保険車との事故で相手から十分な賠償金が得られない場合に自身の保険から補償を受ける特約です。",
                    trap: "自分が加害者になったときの超えちゃった分の保険と混同させる定番のひっかけです。",
                    law: "自動車保険特約規定"
                },
                difficulty: "★★☆"
            },
            {
                id: 428,
                category: "risk",
                categoryName: "リスク管理",
                type: "ox",
                question: "契約者が経済的理由等で保険料を支払えなくなった場合、保険を解約せずに、その時点の解約返戻金をもとに自動的に同じ保険種類の定期保険に変更する仕組みを払済保険という。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "払済保険は解約返戻金を財源として、保険期間を変えずに元の契約の保障金額を小さくした保険に変更する仕組みです（定期保険に変更するのは延長保険）。",
                    trap: "払済保険と延長保険の仕組み・用語を入れ替えて出題する超定番のひっかけです。",
                    law: "生命保険標準約款"
                },
                difficulty: "★★★"
            },
            {
                id: 429,
                category: "risk",
                categoryName: "リスク管理",
                type: "3choice",
                question: "生命保険のクーリング・オフ制度に関する記述として、最も適切なものはどれか？",
                options: [
                    "申込日または初回保険料相当額を支払った日のいずれか遅い日から起算して、一定期間（原則8日以内など）内であれば、書面等により契約の申込みの撤回等ができる。",
                    "一度申し込んだ生命保険はいかなる理由であってもクーリング・オフの対象外である。",
                    "保険証券を受け取った日から3年間はいつでも全額返金つきでクーリング・オフができる。"
                ],
                answer: 0,
                explanation: {
                    reason: "生命保険のクーリング・オフは申込日または初回保険料支払日の遅い方から8日以内に行うことができます。",
                    trap: "3年間いつでもキャンセル可能や一切できないという極端な誤解を突く問題です。",
                    law: "保険法第30条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 430,
                category: "risk",
                categoryName: "リスク管理",
                type: "3choice",
                question: "損害保険における「比例塡補」が適用されるケースとして、正しいものはどれか？",
                options: [
                    "保険価額に対して、設定した保険金額が少ない（一部保険）状態で損害が発生した場合。",
                    "保険金額が実際の損害額をはるかに上回る高額な保険に複数加入していた場合。",
                    "自動車事故において過失割合が双方に50％ずつ発生した場合。"
                ],
                answer: 0,
                explanation: {
                    reason: "一部保険の場合、損害額に対して比例計算によって保険金が支払われます。",
                    trap: "一部保険のときでも損害額の全額が保険金額の範囲内なら丸ごと出るはずと誤認させる罠です。",
                    law: "保険法第21条"
                },
                difficulty: "★★★"
            },

            // ==========================================
            // ■ 不動産分野（ID: 501 〜 530）
            // ==========================================
            {
                id: 501,
                category: "realestate",
                categoryName: "不動産",
                type: "ox",
                question: "建築基準法において、都市計画区域および準都市計画区域内で建築物を建築する場合、敷地が幅員4m以上の道路に2m以上接していなければならないという「接道義務」が定められている。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "建築物の敷地は原則として幅員4m以上の道路に2m以上接していなければならない接道義務があります。",
                    trap: "道路の幅や接する長さの数字（4mや2m）を入れ替えるひっかけ問題です。",
                    law: "建築基準法第43条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 502,
                category: "realestate",
                categoryName: "不動産",
                type: "3choice",
                question: "不動産の登記事項証明書（登記簿謄本）に関する記述として、最も適切なものはどれか？",
                options: [
                    "表題部には不動産の物理的状況（所在、地番、地目、面積など）が記録され、権利部には所有権や抵当権などの権利関係が記録される。",
                    "登記簿謄本の内容は日本国内の特定の不動産業者や所有者本人にしか閲覧が認められておらず、一般の人は一切閲覧できない。",
                    "権利部の「甲区」には抵当権や根抵当権などの担保に関する事項が記載される。"
                ],
                answer: 0,
                explanation: {
                    reason: "表題部に物理的状況、権利部の甲区に所有権、乙区に所有権以外の権利（抵当権等）が記載されます。",
                    trap: "甲区と乙区の記載内容を入れ替える定番のひっかけです。",
                    law: "不動産登記法"
                },
                difficulty: "★★☆"
            },
            {
                id: 503,
                category: "realestate",
                categoryName: "不動産",
                type: "ox",
                question: "都市計画法の「用途地域」のうち、第一種低層住居専用地域では、原則として小規模な店舗や飲食店であっても建築することができない。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "第一種低層住居専用地域は低層住宅の良好な環境を守るための地域であり、原則として店舗等の建築は厳しく制限されています。",
                    trap: "便利なコンビニくらいならどこでも建てられると誤認させる罠です。",
                    law: "都市計画法第9条および建築基準法第48条"
                },
                difficulty: "★★☆"
            },
            {
                id: 504,
                category: "realestate",
                categoryName: "不動産",
                type: "3choice",
                question: "建物の「建蔽率（けんぺい率）」の定義として、正しいものはどれか？",
                options: [
                    "建築物の建築面積（建坪）の敷地面積に対する割合のことである。",
                    "建築物の延べ面積（延床面積）の敷地面積に対する割合のことである。",
                    "敷地面積に対する建物の高さの最高限度を規制する割合のことである。"
                ],
                answer: 0,
                explanation: {
                    reason: "建蔽率は「建築面積 ÷ 敷地面積」で計算されます（延べ面積を使うのは容積率）。",
                    trap: "建蔽率と容積率の分子（建築面積か延べ面積か）を入れ替える超定番のひっかけです。",
                    law: "建築基準法第53条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 505,
                category: "realestate",
                categoryName: "不動産",
                type: "ox",
                question: "宅地建物取引業者が売買の媒介を引き受ける際に作成する「重要事項説明書」は、契約締結の「後」に交付すれば足りる。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "重要事項説明書は、売買契約を締結する「前」に、購入者等の顧客に対して説明・交付しなければなりません。",
                    trap: "契約が終わった後で渡せばよいと誤認させる罠です。",
                    law: "宅地建物取引業法第35条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 506,
                category: "realestate",
                categoryName: "不動産",
                type: "3choice",
                question: "不動産の譲渡所得における「居住用財産を譲渡した場合の3,000万円の特別控除の特例」に関する記述として、正しいものはどれか？",
                options: [
                    "マイホームを売却した場合、一定の要件を満たしていれば譲渡所得から最高3,000万円までを控除することができる。",
                    "別荘や一時的な投資用のマンションであっても、所有期間に関わらず無条件で適用を受けることができる。",
                    "この特例の適用を受けると、住宅ローン控除と同時に併用して受けることが法律により一切可能である。"
                ],
                answer: 0,
                explanation: {
                    reason: "マイホーム売却時の3,000万円特別控除は、居住用財産の譲渡における代表的な優遇特例です（※住宅ローン控除とは原則併用不可）。",
                    trap: "別荘や投資用物件でも使えると誤認させる罠です。",
                    law: "租税特別措置法第35条"
                },
                difficulty: "★★☆"
            },
            {
                id: 507,
                category: "realestate",
                categoryName: "不動産",
                type: "ox",
                question: "借地借家法において、存続期間が満了する建物所有を目的とする「普通借地権」の契約更新において、正当な事由がない限り地主からの更新拒絶は認められない。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "普通借地権では正当事由がなければ借地人から更新請求があった場合に更新され、地主側からの拒絶には厳格な正当事由が必要です。",
                    trap: "契約期間が来たら地主の一存でいつでも立ち退かせることができると誤認させる罠です。",
                    law: "借地借家法第6条"
                },
                difficulty: "★★☆"
            },
            {
                id: 508,
                category: "realestate",
                categoryName: "不動産",
                type: "3choice",
                question: "都市計画法の「用途地域」に関する記述として、最も適切なものはどれか？",
                options: [
                    "用途地域は、住居、商業、工業などの各地域に分けて市街化の方向を定めるものであり、全部で13種類に細分化されている。",
                    "用途地域は全国すべての土地（森林や農地を含む）に必ず一律に指定されている。",
                    "工業専用地域では、工場だけでなく戸建て住宅や小学校を自由に建築することが可能である。"
                ],
                answer: 0,
                explanation: {
                    reason: "用途地域は住居系・商業系・工業系の全部で13種類に分類されています。",
                    trap: "種類の数（13種類）を別の数字に変えたり、工業専用地域で住宅が建てられると誤認させる罠です。",
                    law: "都市計画法第8条"
                },
                difficulty: "★★☆"
            },
            {
                id: 509,
                category: "realestate",
                categoryName: "不動産",
                type: "ox",
                question: "建物の「容積率」は、建築物の延べ面積の敷地面積に対する割合をいい、前面道路の幅員が12m未満の場合は用途地域ごとに定められた数値と「道路幅員×法定乗数」のいずれか低い方が適用される。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "容積率は都市計画で定められた指定容積率と、前面道路幅員による制限（住居系なら0.4、その他なら0.6を掛けたもの）の厳しい方（低い方）が適用されます。",
                    trap: "高い方が適用されると勘違いさせる定番のひっかけです。",
                    law: "建築基準法第52条"
                },
                difficulty: "★★★"
            },
            {
                id: 510,
                category: "realestate",
                categoryName: "不動産",
                type: "3choice",
                question: "不動産の取得にかかる税金（不動産取得税）に関する記述として、正しいものはどれか？",
                options: [
                    "不動産を売買や贈与などにより取得したときに、都道府県が課税する地方税である。",
                    "不動産を所有している期間中、毎年国税として国に納めなければならない税金である。",
                    "相続によって不動産を取得した場合でも、不動産取得税が自動的に課税される。"
                ],
                answer: 0,
                explanation: {
                    reason: "不動産取得税は不動産を取得したときに都道府県が課税する地方税です（※相続による取得は非課税）。",
                    trap: "固定資産税や相続税と混同させる罠です。",
                    law: "地方税法"
                },
                difficulty: "★☆☆"
            },
            {
                id: 511,
                category: "realestate",
                categoryName: "不動産",
                type: "ox",
                question: "借地借家法の「定期借家契約」は、契約の更新がなく期間の満了により確実に契約が終了するため、公正証書等の書面によって契約を締結しなければならない。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "定期借家契約は更新がないため、書面（公正証書など）によって契約する必要があります。",
                    trap: "口頭の約束だけでも定期借家として有効であると誤認させる罠です。",
                    law: "借地借家法第38条"
                },
                difficulty: "★★☆"
            },
            {
                id: 512,
                category: "realestate",
                categoryName: "不動産",
                type: "3choice",
                question: "不動産の広告に関する規制（公正競争規約）において、徒歩による所要時間の計算基準として正しいものはどれか？",
                options: [
                    "道路距離80mにつき「1分」を要するものとして計算し、端数は切り上げる。",
                    "道路距離100mにつき「1分」を要するものとして計算する。",
                    "大人の足の速さに合わせて1kmにつき「1分」として計算する。"
                ],
                answer: 0,
                explanation: {
                    reason: "不動産の広告表示では、徒歩所要時間は「道路距離80mにつき1分」で計算し、端数は切り上げ（1分未満は1分とする）ます。",
                    trap: "100mという誤った数字を信じ込ませる定番のひっかけです。",
                    law: "不動産の表示に関する公正競争規約"
                },
                difficulty: "★★☆"
            },
            {
                id: 513,
                category: "realestate",
                categoryName: "不動産",
                type: "ox",
                question: "都市計画区域外にある建築物については、建築基準法の「防火地域」や「準防火地域」の指定を受けることはない。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "防火地域や準防火地域は都市計画区域内で指定されるものであり、都市計画区域外で指定されることはありません。",
                    trap: "日本国内のどんな山奥や田舎であっても防火地域が存在すると誤認させる罠です。",
                    law: "建築基準法第61条"
                },
                difficulty: "★★★"
            },
            {
                id: 514,
                category: "realestate",
                categoryName: "不動産",
                type: "3choice",
                question: "固定資産税の評価替え（評価額の見直し）が行われる周期として、正しいものはどれか？",
                options: [
                    "3年に1度",
                    "1年に1度（毎年）",
                    "5年に1度"
                ],
                answer: 0,
                explanation: {
                    reason: "固定資産税の評価替えは原則として3年に1度行われます。",
                    trap: "毎年毎年のことであると誤認させる定番のひっかけです。",
                    law: "地方税法第341条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 515,
                category: "realestate",
                categoryName: "不動産",
                type: "ox",
                question: "不動産の鑑定評価における「原価法」は、対象不動産の再調達原価を求め、これに減価修正を行って試算価格を求める手法であり、主に土地の価格評価に最も適している。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "原価法は建物に最も適した評価手法です（土地の評価には主に取引事例比較法が適しています）。",
                    trap: "建物向けの原価法を土地の評価に一番向いているとすり替えるひっかけです。",
                    law: "不動産鑑定評価基準"
                },
                difficulty: "★★☆"
            },
            {
                id: 516,
                category: "realestate",
                categoryName: "不動産",
                type: "3choice",
                question: "建築基準法の「道路」に関する規定で、原則として幅員何メートル以上のものが建築基準法上の道路となるか？",
                options: [
                    "4メートル以上",
                    "6メートル以上",
                    "2メートル以上"
                ],
                answer: 0,
                explanation: {
                    reason: "建築基準法上の原則的な道路の幅員は4メートル以上（2項道路を除く）です。",
                    trap: "接道義務の「2m」と道路幅員の「4m」を混同させる定番問題です。",
                    law: "建築基準法第42条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 517,
                category: "realestate",
                categoryName: "不動産",
                type: "ox",
                question: "宅地建物取引業者が売買の媒介で受け取る仲介手数料（報酬）の上限額は、取引当事者間での合意があれば法律の制限を無視して自由にいくらでも高く設定できる。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "仲介手数料の上限額は宅地建物取引業法（国土交通大臣の告示）により厳しく法定されており、これを超える報酬を受け取ることは違法です。",
                    trap: "当事者双方が合意さえすれば法律の上限を超えて自由に決められると誤認させる罠です。",
                    law: "宅地建物取引業法第46条"
                },
                difficulty: "★★☆"
            },
            {
                id: 518,
                category: "realestate",
                categoryName: "不動産",
                type: "3choice",
                question: "所得税における「居住用財産を譲渡した場合の長期譲渡所得の課税の特例（軽減税率の特例）」の要件として、所有期間の基準はどれか？",
                options: [
                    "譲渡した年の1月1日において所有期間が「10年を超える」もの",
                    "所有期間が「5年を超える」もの",
                    "所有期間が「20年を超える」もの"
                ],
                answer: 0,
                explanation: {
                    reason: "マイホームの軽減税率の特例は、譲渡年の1月1日において所有期間が「10年超」であることが要件です。",
                    trap: "通常の長期譲渡の基準である「5年超」と混同させる超定番のひっかけです。",
                    law: "租税特別措置法第31条の3"
                },
                difficulty: "★★★"
            },
            {
                id: 519,
                category: "realestate",
                categoryName: "不動産",
                type: "ox",
                question: "マンション（区分所有建物）の管理において、各区分所有者が共有する敷地や廊下などの共用部分は、規約で別段の定めをしない限り、原則として専有部分の床面積の割合に応じて持分が定められる。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "共有部分の持分は原則として各専有部分の床面積の割合によります。",
                    trap: "頭数（人数割）で平等に分割されると誤認させる罠です。",
                    law: "建物の区分所有等に関する法律第14条"
                },
                difficulty: "★★☆"
            },
            {
                id: 520,
                category: "realestate",
                categoryName: "不動産",
                type: "3choice",
                question: "不動産の売買契約において、買主が売主に対して契約の解除権を留保するために交付する金銭を何というか？",
                options: [
                    "手付金",
                    "敷金",
                    "保証金"
                ],
                answer: 0,
                explanation: {
                    reason: "不動産売買での契約解除権留保や代金一部に充当される金銭を手付金といいます。",
                    trap: "敷金や保証金などの賃貸用語と混同させる問題です。",
                    law: "民法第557条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 521,
                category: "realestate",
                categoryName: "不動産",
                type: "ox",
                question: "都市計画法の「市街化調整区域」は、市街化を抑制すべき区域とされているため、原則として新たに住宅や建物を建築することは認められていない。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "市街化調整区域は市街化を抑制する区域であり、原則として開発行為や建築は制限されています。",
                    trap: "どのような場所でも自由に家を建てられると誤認させる罠です。",
                    law: "都市計画法第13条"
                },
                difficulty: "★★☆"
            },
            {
                id: 522,
                category: "realestate",
                categoryName: "不動産",
                type: "3choice",
                question: "不動産の登記において、登記に「公信力」が認められていないことの意味として正しいものはどれか？",
                options: [
                    "真実の権利者が別に存在する場合、登記を過信して名義人を信じて購入したとしても、その所有権を完全に取得することはできない（保護されない）。",
                    "登記されている内容は国の機関が絶対的な真実を保証しているため、いかなる場合も覆ることはない。",
                    "登記簿に名前が載っていれば、たとえ書類を偽造したものであっても無条件で真の所有者として認められる。"
                ],
                answer: 0,
                explanation: {
                    reason: "我が国の不動産登記には公信力がないため、真実の権利者でない者からの購入者は原則として保護されません。",
                    trap: "登記には絶対的な公信力があると誤解させる罠です。",
                    law: "不動産登記制度の基本原則"
                },
                difficulty: "★★★"
            },
            {
                id: 523,
                category: "realestate",
                categoryName: "不動産",
                type: "ox",
                question: "借地借家法において、定期借地権（一般定期借地権）を設定する場合の契約期間は「30年以上」としなければならない。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "一般定期借地権の存続期間は30年以上と法律で定められています。",
                    trap: "期間を10年など短く設定できると誤認させるひっかけです。",
                    law: "借地借家法第22条"
                },
                difficulty: "★★☆"
            },
            {
                id: 524,
                category: "realestate",
                categoryName: "不動産",
                type: "3choice",
                question: "所得税における「特定の居住用財産の買換えの特例」の概要として、最も適切なものはどれか？",
                options: [
                    "マイホームを買い換えた際、譲渡益に対する課税を将来に繰り延べる（先送りする）ことができる特例である。",
                    "譲渡益にかかる税金が完全に永久に免除され、二度と納税しなくてよくなる非課税の特例である。",
                    "マイホームの売却損が出た場合にのみ適用される損益通算の特例である。"
                ],
                answer: 0,
                explanation: {
                    reason: "買換えの特例は税金を免除するのではなく、課税を将来へ繰り延べる（課税の繰延）制度です。",
                    trap: "税金が完全に永久に免除されると誤解させる定番のひっかけです。",
                    law: "租税特別措置法第37条"
                },
                difficulty: "★★★"
            },
            {
                id: 525,
                category: "realestate",
                categoryName: "不動産",
                type: "ox",
                question: "不動産の鑑定評価における「収益還元法」は、対象不動産が将来生み出すであろうと期待される純収益を還元利回りでお元に割り戻して試算価格を求める手法であり、賃貸用不動産の評価に最も適している。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "収益還元法は将来の収益力に着目した手法であり、賃貸マンションなどの収益物件の評価に最も適しています。",
                    trap: "自宅用のマイホーム評価にしか使えないと誤認させる罠です。",
                    law: "不動産鑑定評価基準"
                },
                difficulty: "★★☆"
            },
            {
                id: 526,
                category: "realestate",
                categoryName: "不動産",
                type: "3choice",
                question: "建築基準法の「防火地域」内において、耐火建築物とすべき建物の階数や延べ面積の基準として正しいものはどれか？",
                options: [
                    "地階を除く階数が3階以上、または延べ面積が100平方メートルを超える建築物は耐火建築物としなければならない。",
                    "平屋建てであればどのような構造の木造建築物であっても自由に建てられる。",
                    "どのような小さな建物であっても一切の建築が法律で全面禁止されている。"
                ],
                answer: 0,
                explanation: {
                    reason: "防火地域内では、3階以上または延べ面積100平方メートル超の建物は耐火建築物にする必要があります。",
                    trap: "数字（3階や100平方メートル）を入れ替えるひっかけ問題です。",
                    law: "建築基準法第61条"
                },
                difficulty: "★★★"
            },
            {
                id: 527,
                category: "realestate",
                categoryName: "不動産",
                type: "ox",
                question: "宅地建物取引業法における「重要事項説明」は、宅地建物取引士の資格を持つ者が説明を行わなければならないが、説明書の記名押印は無資格の営業担当者でも行うことができる。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "重要事項説明書への記名押印（または署名）も、資格者である宅地建物取引士が行わなければなりません。",
                    trap: "説明だけ士業がやれば記名押印は誰でもよいと勘違いさせるひっかけです。",
                    law: "宅地建物取引業法第35条"
                },
                difficulty: "★★★"
            },
            {
                id: 528,
                category: "realestate",
                categoryName: "不動産",
                type: "3choice",
                question: "不動産の共有名義に関する記述として、最も適切なものはどれか？",
                options: [
                    "共有者が自分の持分を処分する場合、他の共有者の同意を得ることなく、原則として自由に自分の持分を売却することができる。",
                    "共有物の全体を売却処分するには、共有者の一人でも反対していればいつでも単独で行うことができる。",
                    "共有者は持分の割合にかかわらず、共有地の全体を自分が独占して完全に自由に利用できる。"
                ],
                answer: 0,
                explanation: {
                    reason: "持分の処分は他の共有者の同意なく単独で行うことができます（※共有物全体の処分には全員の同意が必要）。",
                    trap: "持分を売るのにも全員の同意が必要であると誤認させる定番の罠です。",
                    law: "民法第206条・第251条"
                },
                difficulty: "★★☆"
            },
            {
                id: 529,
                category: "realestate",
                categoryName: "不動産",
                type: "ox",
                question: "都市計画法の「地区計画」は、市区町村が住民の意見を反映させつつ、その地区の特性に応じたきめ細かいまちづくりを行うための計画である。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "地区計画は身近な地区レベルの良好な環境を維持・形成するための都市計画です。",
                    trap: "国がすべて一律で一元管理すると誤認させる罠です。",
                    law: "都市計画法第12条の4"
                },
                difficulty: "★☆☆"
            },
            {
                id: 530,
                category: "realestate",
                categoryName: "不動産",
                type: "3choice",
                question: "農地法に関する記述として、最も適切なものはどれか？",
                options: [
                    "農地を農地以外のものにする場合（転用）、原則として都道府県知事等の許可（または市街化区域内なら届出）が必要である。",
                    "農地は個人の財産であるため、法律の規制を受けることなくいつでも自由に勝手に宅地に造成して売却できる。",
                    "農地を農地としてそのままの状態で売買・貸借する場合であっても、法律上の許可や届出は一切不要である。"
                    
                ],
                answer: 0,
                explanation: {
                    reason: "農地の転用（農地以外への変更）には都道府県知事等の許可が必要です。",
                    trap: "個人の土地だから自由にできると誤解させる定番のひっかけです。",
                    law: "農地法第4条・第5条"
                },
                difficulty: "★★☆"
            },

            // ==========================================
            // ■ 相続・事業承継分野（ID: 601 〜 630）
            // ==========================================
            {
                id: 601,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "ox",
                question: "民法に定める法定相続人の順位において、被相続人の兄弟姉妹は常に第1順位の相続人となり、配偶者とともに相続財産を取得する。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "第1順位は「子（およびその代襲者）」、第2順位は「直系尊属（父母など）」、第3順位が「兄弟姉妹（およびその代襲者）」です。",
                    trap: "兄弟姉妹が第1順位であると勘違いさせる超定番のひっかけです。",
                    law: "民法第887条〜第889条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 602,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "3choice",
                question: "相続税の基礎控除額の計算式として、正しいものはどれか？",
                options: [
                    "3,000万円 ＋ （600万円 × 法定相続人の数）",
                    "5,000万円 ＋ （1,000万円 × 法定相続人の数）",
                    "4,000万円 ＋ （800万円 × 法定相続人の数）"
                ],
                answer: 0,
                explanation: {
                    reason: "相続税の基礎控除は「3,000万円 ＋ 600万円 × 法定相続人の数」で計算されます。",
                    trap: "改正前の古い基準（5,000万円＋1,000万円×人数）と混同させる定番問題です。",
                    law: "相続税法第15条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 603,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "ox",
                question: "自筆証書遺言を作成する場合、原則として遺言書の全文、日付および氏名を自書し、押印しなければならないが、財産目録についてはパソコンで作成した書面を添付することができる。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "自筆証書遺言の財産目録はパソコン作成や通帳のコピー等の添付が認められています（ただし毎葉に署名押印が必要）。",
                    trap: "財産目録であっても一切のパソコン作成が禁止されていると誤認させる罠です。",
                    law: "民法第968条第2項"
                },
                difficulty: "★★☆"
            },
            {
                id: 604,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "3choice",
                question: "相続人が相続の放棄をするための手続に関する記述として、最も適切なものはどれか？",
                    options: [
                    "相続の開始があったことを知った日から原則として「3ヶ月以内」に、被相続人の最後の住所地の家庭裁判所に申述しなければならない。",
                    "被相続人が亡くなってから「10ヶ月以内」に、税務署長に対して書面で届け出なければならない。",
                    "親族全員の書面による合意があれば、家庭裁判所での手続きを行わずに口頭でいつでも自由に放棄できる。"
                ],
                answer: 0,
                explanation: {
                    reason: "相続の放棄は自己のために相続の開始があったことを知った日から3ヶ月以内に家庭裁判所へ申述する必要があります。",
                    trap: "相続税の申告期限である10ヶ月と期間（3ヶ月）を混同させる定番のひっかけです。",
                    law: "民法第915条"
                },
                difficulty: "★★☆"
            },
            {
                id: 605,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "ox",
                question: "遺産分割協議は、相続人全員が参加して合意することが必要であり、相続人の一部を除外して行われた遺産分割協議は無効となる。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "遺産分割協議は共同相続人全員で行う必要があり、一人でも除外されていると無効になります。",
                    trap: "過半数の賛成があれば一部の相続人を外しても有効であると誤認させる罠です。",
                    law: "民法第907条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 606,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "3choice",
                question: "贈与税の「暦年課税」における基礎控除額（年間）として、正しいものはどれか？",
                options: [
                    "110万円",
                    "100万円",
                    "500万円"
                ],
                answer: 0,
                explanation: {
                    reason: "暦年課税の基礎控除額は年間110万円です。",
                    trap: "100万円というキリの良い数字を信じ込ませる定番のひっかけです。",
                    law: "相続税法第21条の2"
                },
                difficulty: "★☆☆"
            },
            {
                id: 607,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "ox",
                question: "遺言執行者が指定されている場合、相続人は遺言の執行を妨げるような行為をしてはならないが、遺言執行者がいる場合でも相続人は遺言執行前に勝手に遺産を処分することができる。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "遺言執行者が選任された場合、相続人は遺言の執行を妨げる行為をしてはならず、勝手な遺産処分は制限されます。",
                    trap: "遺言執行者がいても相続人の権限が優先されると誤認させる罠です。",
                    law: "民法第1013条"
                },
                difficulty: "★★★"
            },
            {
                id: 608,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "3choice",
                question: "相続税の「配偶者の税額の軽減（配偶者控除）」に関する記述として、最も適切なものはどれか？",
                options: [
                    "配偶者が遺産分割等により取得した正味の遺産額が「1億6,000万円」または「法定相続分相当額」のいずれか多い金額までは、相続税が課されない。",
                    "配偶者が取得した財産の額に関わらず、配偶者の相続税は常に全額一律で1円もかからない。",
                    "内縁の妻（事実婚）であっても、婚姻届を出していない限り配偶者控除の適用を受けることができる。"
                ],
                answer: 0,
                explanation: {
                    reason: "配偶者の税額の軽減は「1億6,000万円または法定相続分」のいずれか多い金額まで非課税となります。",
                    trap: "内縁関係でも適用できると誤認させる定番のひっかけです。",
                    law: "相続税法第19条の2"
                },
                difficulty: "★★☆"
            },
            {
                id: 609,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "ox",
                question: "「公正証書遺言」を作成する場合、証人2人以上の立ち会いが必要であるが、未成年者や推定相続人などは証人になることができない。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "公正証書遺言には2人以上の証人立ち会いが必要であり、未成年者や推定相続人、受遺者等は証人になれません。",
                    trap: "身内であれば誰でも証人になれると誤解させる罠です。",
                    law: "民法第974条"
                },
                difficulty: "★★☆"
            },
            {
                id: 610,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "3choice",
                question: "贈与税の「相続時精算課税制度」に関する記述として、正しいものはどれか？",
                options: [
                    "原則として60歳以上の父母または祖父母から、18歳以上の子または孫に対して贈与する場合に選択できる制度である。",
                    "一度この制度を選択すると、その後の贈与も含めて暦年課税の110万円の基礎控除を重ねて併用することができる。",
                    "贈与された財産の価額にかかわらず、納税額は一律で常にゼロ円となる。"
                ],
                answer: 0,
                explanation: {
                    reason: "相続時精算課税は60歳以上の親等から18歳以上の子等への贈与で選択できる制度です（※改正で年110万円の基礎控除が新設されましたが暦年課税の基礎控除とは異なります）。",
                    trap: "年齢要件や制度の仕組みを誤認させる罠です。",
                    law: "相続税法第21条の9"
                },
                difficulty: "★★☆"
            },
            {
                id: 611,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "ox",
                question: "民法に定める「遺留分」を請求することができる権利（遺留分侵害額請求権）は、相続の開始および遺留分を侵害する贈与等があったことを知った時から1年間行使しないときは、時効によって消滅する。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "遺留分侵害額請求権は、知った時から1年間（または相続開始から10年）行使しないと時効により消滅します。",
                    trap: "期間を5年や10年と誤認させるひっかけ問題です。",
                    law: "民法第1048条"
                },
                difficulty: "★★☆"
            },
            {
                id: 612,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "3choice",
                question: "相続税の申告および納税の期限として、正しいものはどれか？",
                options: [
                    "相続の開始があったことを知った日の翌日から「10ヶ月以内」",
                    "相続の開始があったことを知った日の翌日から「3ヶ月以内」",
                    "相続の開始があったことを知った日の翌日から「1年以内」"
                ],
                answer: 0,
                explanation: {
                    reason: "相続税の申告・納税期限は「被相続人の死亡を知った日の翌日から10ヶ月以内」です。",
                    trap: "相続放棄の期間（3ヶ月）と混同させる超定番のひっかけです。",
                    law: "相続税法第27条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 613,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "ox",
                question: "被相続人の死亡前3年以内（※税制改正により順次延長）に被相続人から贈与により取得した財産は、相続税の課税価格に加算される。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "生前贈与加算の対象期間（持ち戻し期間）に贈与された財産は相続税の課税価格に加算されます。",
                    trap: "贈与した時点で完全に税金関係は切り離されると誤認させる罠です。",
                    law: "相続税法第19条"
                },
                difficulty: "★★☆"
            },
            {
                id: 614,
                category: "inheritance",
                categoryName: "inheritance",
                categoryName: "相続・事業承継",
                type: "3choice",
                question: "遺言書の形式に関する記述として、最も適切なものはどれか？",
                options: [
                    "一般的に利用される遺言の方式には「自筆証書遺言」「公正証書遺言」「秘密証書遺言」の3種類がある。",
                    "口頭で親族に口伝えで約束しただけでも、法律上完全に正式な遺言として認められる。",
                    "自筆証書遺言であってもパソコンで全文を作成し署名のみ手書きであれば有効である。"
                ],
                answer: 0,
                explanation: {
                    reason: "民法が定める通常の遺言の方式は自筆証書・公正証書・秘密証書の3種類です。",
                    trap: "口頭の約束やパソコン全文作成が認められると誤解させる罠です。",
                    law: "民法第967条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 615,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "ox",
                question: "民法上の法定相続分において、配偶者と「子」が相続人である場合、配偶者の法定相続分は2分の1であり、子の法定相続分も残りの2分の1である。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "配偶者と子が相続人の場合、法定相続分はそれぞれ2分の1ずつとなります。",
                    trap: "配偶者が3分の2で子が3分の1と誤認させるひっかけです（それは配偶者と父母が相続人の場合）。",
                    law: "民法第900条"
                },
                difficulty: "★★☆"
            },
            {
                id: 616,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "3choice",
                question: "相続税における「小規模宅地等の特例」に関する記述として、最も適切なものはどれか？",
                options: [
                    "被相続人の居住用や事業用の宅地等について、一定の要件を満たす場合に評価額を最大80％（または50％）減額できる制度である。",
                    "日本国内にあるすべての土地や不動産について、一律で自動的に評価額が半額になる特例である。",
                    "会社員が所有する全ての株式や預貯金に対して適用される相続税の免除制度である。"
                ],
                answer: 0,
                explanation: {
                    reason: "小規模宅地等の特例は居住用や事業用の宅地等の評価額を限度面積まで最大80％減額する強力な制度です。",
                    trap: "すべての土地や預貯金まで対象になると誤認させる罠です。",
                    law: "租税特別措置法第69条の4"
                },
                difficulty: "★★☆"
            },
            {
                id: 617,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "ox",
                question: "「特別縁故者」に対する財産分与について、相続人が一人もいない場合（相続人不在）、家庭裁判所は一定の要件のもとで特別縁故者に対して相続財産の一部または全部を分与することができる。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "相続人がいない場合、被相続人と生計を同じくしていた者などの特別縁故者への財産分与が認められています。",
                    trap: "相続人がいない場合は国庫に全額没収されるだけで特別縁故者には一切渡らないと誤認させる罠です。",
                    law: "民法第958条の3"
                },
                difficulty: "★★★"
            },
            {
                id: 618,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "3choice",
                question: "贈与税の配偶者控除（おしどり贈与）に関する記述として、正しいものはどれか？",
                options: [
                    "婚姻期間が20年以上の夫婦間で、居住用不動産またはその購入資金の贈与が行われた場合、基礎課税とは別に最高2,000万円まで控除できる。",
                    "婚姻期間に関わらず、すべての夫婦間でいくら贈与しても一生涯完全に無税である。",
                    "この特例は同じ夫婦間で過去に何度でも繰り返し適用を受けることができる。"
                ],
                answer: 0,
                explanation: {
                    reason: "婚姻期間20年以上の夫婦間での居住用不動産等の贈与には最高2,000万円の配偶者控除が使えます（一生に一度）。",
                    trap: "何度でも繰り返し使えると誤認させる定番のひっかけです。",
                    law: "相続税法第21条の6"
                },
                difficulty: "★★☆"
            },
            {
                id: 619,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "ox",
                question: "相続人が相続の「承認」や「放棄」をするまでの間、相続財産を管理する義務が生じるが、「限定承認」を選択した場合は相続財産の管理義務は一切生じない。",
                options: null,
                answer: 1,
                explanation: {
                    reason: "限定承認を選択した場合であっても、相続財産の管理義務は当然に継続します。",
                    trap: "限定承認なら責任や管理義務から完全に免れると誤認させる罠です。",
                    law: "民法第940条"
                },
                difficulty: "★★★"
            },
            {
                id: 620,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "3choice",
                question: "生命保険金の相続税における「非課税枠」の計算式として、正しいものはどれか？",
                options: [
                    "500万円 × 法定相続人の数",
                    "1,000万円 × 法定相続人の数",
                    "3,000万円 ＋ （600万円 × 法定相続人の数）"
                ],
                answer: 0,
                explanation: {
                    reason: "死亡保険金の非課税限度額は「500万円 × 法定相続人の数」です。",
                    trap: "基礎控除の計算式と金額を入れ替えて出題する超定番のひっかけです。",
                    law: "相続税法第12条"
                },
                difficulty: "★☆☆"
            },
            {
                id: 621,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "ox",
                question: "代襲相続において、被相続人の兄弟姉妹が相続人となる場合、その兄弟姉妹が既に死亡しているときは、その子の代襲相続は一代に限り認められる。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "兄弟姉妹の代襲相続は、その子（甥・姪）までの一代に限り認められます（※子の代襲と異なり、孫へ再代襲はありません）。",
                    trap: "子の場合と同様に孫の代襲も無限に続くと誤認させる罠です。",
                    law: "民法第889条第2項"
                },
                difficulty: "★★★"
            },
            {
                id: 622,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "3choice",
                question: "遺言書の検認に関する記述として、最も適切なものはどれか？",
                options: [
                    "自筆証書遺言を発見した者は、遅滞なく家庭裁判所に提出して「検認」の請求をしなければならない（※法務局の保管制度を利用した場合を除く）。",
                    "公正証書遺言であっても、開封する前に必ず家庭裁判所の検認を受けなければならない。",
                    "検認の手続きを経ないで行った自筆証書遺言の開封は、法律上の罰則や無効事由には一切ならない。"
                ],
                answer: 0,
                explanation: {
                    reason: "自筆証書遺言（法務局保管除く）の発見者は家庭裁判所で検認を受けなければなりません（公正証書遺言は検認不要）。",
                    trap: "公正証書遺言にも検認が必要であると誤認させる罠です。",
                    law: "民法第1004条"
                },
                difficulty: "★★☆"
            },
            {
                id: 623,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "ox",
                question: "相続税の「未成年者控除」は、相続人が日本国内に住所を有している未成年者である場合、満20歳に達するまでの年数1年につき10万円（※法改正で年齢等は要確認）が税額から控除される。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "未成年者控除は満18歳（※民法改正に伴う成年年齢引き下げに準拠）に達するまでの年数1年につき10万円が税額から控除されます。",
                    trap: "控除額や基準年齢の数字を古いままで出題するひっかけです。",
                    law: "相続税法第15条の2"
                },
                difficulty: "★★☆"
            },
            {
                id: 624,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "3choice",
                question: "事業承継における「経営承継円滑化法」の主要な支援措置として、最も適切なものはどれか？",
                options: [
                    "非上場株式等に係る贈与税・相続税の納税猶予および免除制度（いわゆる事業承継税制）の特例などがある。",
                    "後継者が不足している中小企業に対して、国が自動的にすべての負債を肩代わりして免除する制度である。",
                    "親族以外の第三者へ会社を売却するM&Aの際に、国が買収資金の全額を無償で給付する制度である。"
                ],
                answer: 0,
                explanation: {
                    reason: "経営承継円滑化法における事業承継税制は非上場株式等の贈与税・相続税の納税猶予等を柱としています。",
                    trap: "国が負債を全額肩代わりすると誤認させる罠です。",
                    law: "中小企業における経営の承継の円滑化に関する法律"
                },
                difficulty: "★★★"
            },
            {
                id: 625,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "ox",
                question: "「遺言書作成における満年齢」について、遺言者は、遺言作成時点において満15歳に達していなければ、遺言をすることができない。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "遺言能力は満15歳に達していれば単独で行うことができます。",
                    trap: "成人年齢（18歳）に達していなければ遺言が作れないと誤認させるひっかけです。",
                    law: "民法第961条"
                },
                difficulty: "★★☆"
            },
            {
                id: 626,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "3choice",
                question: "相続税の「障害者控除」に関する記述として、正しいものはどれか？",
                options: [
                    "相続人が日本国内に住所を有する障害者である場合、満85歳に達するまでの年数1年につき一定額（一般障害者は10万円、特別障害者は20万円）が相続税額から控除される。",
                    "障害の程度に関わらず、一律で常に100万円が控除される。",
                    "障害者控除は相続人本人の税額からではなく、被相続人の総資産から直接差し引かれる。"
                ],
                answer: 0,
                explanation: {
                    reason: "障害者控除は85歳に達するまでの年数1年につき一般10万円・特別20万円が税額から控除されます。",
                    trap: "控除額を一律にしたり資産から直接引くと誤認させる罠です。",
                    law: "相続税法第19条の3"
                },
                difficulty: "★★★"
            },
            {
                id: 627,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "ox",
                question: "相続税の「延納」が金銭で一括納付することが困難な理由がある場合に認められるのに対し、「物納」は延納によっても金銭で納付することが困難な場合に限り、一定の相続財産による納付が認められる。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "延納でも金銭納付が難しい場合に限り、例外的に物納（現物での納付）が認められます。",
                    trap: "最初から誰でも自由に現金ではなく不動産等で物納できると誤認させる罠です。",
                    law: "相続税法第38条・第41条"
                },
                difficulty: "★★☆"
            },
            {
                id: 628,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "3choice",
                question: "民法に定める「遺産分割の方法」として、原則として認められていないものはどれか？",
                options: [
                    "被相続人が遺言で禁止していない限り、家庭裁判所の審判を必ず最初に経なければ遺産分割協議を行うことができない。",
                    "共同相続人全員による協議（遺産分割協議）による方法",
                    "家庭裁判所の調停や審判による方法"
                ],
                answer: 0,
                explanation: {
                    reason: "遺産分割はまず共同相続人全員による協議を優先して行うことができ、最初から裁判所に行かなければならないわけではありません。",
                    trap: "裁判所の関与が不可欠であると誤認させる罠です。",
                    law: "民法第907条"
                },
                difficulty: "★★☆"
            },
            {
                id: 629,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "ox",
                question: "「直系尊属から住宅取得等資金の贈与を受けた場合の非課税の特例」は、父母や祖父母などの直系尊属から、住宅の取得等に充てるための金銭を取得して贈与を受けた場合に、一定限度額まで贈与税が非課税となる制度である。",
                options: null,
                answer: 0,
                explanation: {
                    reason: "直系尊属からの住宅取得等資金贈与の非課税特例は、要件を満たせば一定限度額まで非課税となります。",
                    trap: "他人の他人や兄弟からの贈与でも使えると誤認させる罠です。",
                    law: "租税特別措置法第70条の2"
                },
                difficulty: "★★☆"
            },
            {
                id: 630,
                category: "inheritance",
                categoryName: "相続・事業承継",
                type: "3choice",
                question: "相続税の計算における「相次相続控除（そうじそうぞくこうじょ）」の要件として、正しいものはどれか？",
                options: [
                    "今回の相続の開始前「10年以内」に被相続人が前の相続により相続税を課されていた場合、一定の税額を今回の相続税額から控除できる。",
                    "前の相続から「5年以内」であればどのような関係でも一律控除される。",
                    "期間に関わらず、過去に一度でも相続税を払ったことがあれば永久に何度も繰り返し適用できる。"
                ],
                answer: 0,
                explanation: {
                    reason: "相次相続控除は前回の相続から10年以内に再び相続が発生した場合に、前の相続で課税された税額の一部を控除する制度です。",
                    trap: "期間を5年と誤認させたり何度も永久に使えると錯覚させる罠です。",
                    law: "相続税法第20条"
                },
                difficulty: "★★★"
            }
        ];

        let activeQuestions = [];
        let currentIndex = 0;
        let scoreCount = 0;
        let hasAnswered = false;
        let reviewList = [];

        window.onload = function() {
            if (typeof fpQuestions !== 'undefined') {
                const totalEl = document.getElementById('header-total-pool');
                if (totalEl) totalEl.innerText = `${fpQuestions.length}問`;
            }

            loadReviewList();
            updateReviewUI();
            checkSavedProgress();

            document.addEventListener('keydown', handleKeyboard);
            insertRandomAds();
        };

        function insertRandomAds() {
            if (typeof getRandomAd === 'function') {
                const box1 = document.getElementById('random-ad-box-1');
                const box2 = document.getElementById('random-ad-box-2');
                const boxModal = document.getElementById('random-ad-box-modal');

                if (box1) box1.innerHTML = getRandomAd();
                if (box2) box2.innerHTML = getRandomAd();
                if (boxModal) boxModal.innerHTML = getRandomAd();
            }
        }

        function openContactModal() {
            const m = document.getElementById('contact-modal');
            if (m) m.classList.remove('hidden');
        }

        function closeContactModal() {
            const m = document.getElementById('contact-modal');
            if (m) m.classList.add('hidden');
        }

        function openPrivacyModal() {
            const m = document.getElementById('privacy-modal');
            if (m) m.classList.remove('hidden');
        }

        function closePrivacyModal() {
            const m = document.getElementById('privacy-modal');
            if (m) m.classList.add('hidden');
        }

        function closeAdModal() {
            const m = document.getElementById('ad-modal');
            if (m) m.classList.add('hidden');
            returnHome();
        }

        function loadReviewList() {
            const saved = localStorage.getItem('fp3_study_review');
            reviewList = saved ? JSON.parse(saved) : [];
        }

        function updateReviewUI() {
            loadReviewList();
            const revCountEl = document.getElementById('header-review-count');
            const revLabelEl = document.getElementById('review-count-label');
            if (revCountEl) revCountEl.innerText = `${reviewList.length}問`;
            if (revLabelEl) revLabelEl.innerText = `復習待ち: ${reviewList.length}問`;

            const btn = document.getElementById('btn-review-home');
            if (btn) {
                if (reviewList.length === 0) {
                    btn.classList.add('opacity-50', 'cursor-not-allowed');
                } else {
                    btn.classList.remove('opacity-50', 'cursor-not-allowed');
                }
            }
        }

        function startQuiz(mode = 'all') {
            if (typeof fpQuestions === 'undefined' || fpQuestions.length === 0) {
                alert('問題データが正しく読み込まれていません。');
                return;
            }

            let pool = [...fpQuestions];
            if (mode === 'review') {
                pool = fpQuestions.filter(q => reviewList.includes(q.id));
                if (pool.length === 0) {
                    alert('現在、復習リストに問題はありません！');
                    return;
                }
            } else {
                const selectCat = document.getElementById('select-category');
                const cat = selectCat ? selectCat.value : 'all';
                if (cat !== 'all') {
                    pool = fpQuestions.filter(q => q.category === cat);
                    if (pool.length === 0) {
                        alert('選択された分野の問題がまだ登録されていません。');
                        return;
                    }
                }
            }

            pool.sort(() => Math.random() - 0.5);
            activeQuestions = pool.slice(0, Math.min(10, pool.length));
            currentIndex = 0;
            scoreCount = 0;
            hasAnswered = false;

            switchScreen('quiz');
            renderQuestion();
            saveProgress();
        }

        function renderQuestion() {
            hasAnswered = false;
            const q = activeQuestions[currentIndex];

            window.location.hash = `question-${q.id}`;
            const permLabel = document.getElementById('permalink-label');
            const catBadge = document.getElementById('quiz-category-badge');
            const diffBadge = document.getElementById('quiz-diff-badge');
            const qText = document.getElementById('question-text');

            if (permLabel) permLabel.innerText = `問 ${currentIndex + 1} / ${activeQuestions.length} （個別URL: /questions/${q.id}）`;
            if (catBadge) catBadge.innerText = q.categoryName || "FP3級分野";
            if (diffBadge) diffBadge.innerText = `難易度: ${q.difficulty || '★★☆'}`;
            if (qText) qText.innerText = q.question;

            const container = document.getElementById('options-container');
            if (!container) return;
            container.innerHTML = '';

            if (q.type === 'ox') {
                container.className = "grid grid-cols-2 gap-4 pt-2";
                container.innerHTML = `
                    <button onclick="handleAnswer(0)" class="ans-btn p-5 rounded-2xl border-2 border-slate-200 hover:border-brand-500 bg-slate-50 font-bold text-lg text-slate-700 transition">
                        〇 正しい (正)
                    </button>
                    <button onclick="handleAnswer(1)" class="ans-btn p-5 rounded-2xl border-2 border-slate-200 hover:border-brand-500 bg-slate-50 font-bold text-lg text-slate-700 transition">
                        × 誤り (否)
                    </button>
                `;
            } else {
                container.className = "grid grid-cols-1 gap-3 pt-2";
                q.options.forEach((opt, idx) => {
                    const alpha = ['A', 'B', 'C'][idx];
                    container.innerHTML += `
                        <button onclick="handleAnswer(${idx})" class="ans-btn p-4 rounded-2xl border-2 border-slate-200 hover:border-brand-500 bg-slate-50 text-left font-bold text-sm sm:text-base text-slate-700 transition flex items-center space-x-3">
                            <span class="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-xs">${alpha}</span>
                            <span>${opt}</span>
                        </button>
                    `;
                });
            }

            const expBox = document.getElementById('explanation-box');
            if (expBox) expBox.classList.add('hidden');
        }

        function handleAnswer(choice) {
            if (hasAnswered) return;
            hasAnswered = true;

            const q = activeQuestions[currentIndex];
            const isCorrect = (choice === q.answer);

            if (isCorrect) {
                scoreCount++;
                reviewList = reviewList.filter(id => id !== q.id);
            } else {
                if (!reviewList.includes(q.id)) {
                    reviewList.push(q.id);
                }
            }
            localStorage.setItem('fp3_study_review', JSON.stringify(reviewList));
            updateReviewUI();

            const buttons = document.querySelectorAll('.ans-btn');
            buttons.forEach((btn, idx) => {
                btn.disabled = true;
                if (idx === q.answer) {
                    btn.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-800');
                } else if (idx === choice && !isCorrect) {
                    btn.classList.add('bg-rose-100', 'border-rose-500', 'text-rose-800');
                } else {
                    btn.classList.add('opacity-40');
                }
            });

            const expBox = document.getElementById('explanation-box');
            if (expBox) expBox.classList.remove('hidden');

            const badge = document.getElementById('result-badge');
            if (badge) {
                badge.className = isCorrect ? "p-4 rounded-xl text-sm font-bold bg-emerald-100 text-emerald-800" : "p-4 rounded-xl text-sm font-bold bg-rose-100 text-rose-800";
                badge.innerHTML = isCorrect ? '🎉 正解です！素晴らしい！' : '❌ 不正解です（復習リストに追加されました）';
            }

            const rEl = document.getElementById('exp-reason');
            const tEl = document.getElementById('exp-trap');
            const lEl = document.getElementById('exp-law');
            if (rEl) rEl.innerText = q.explanation.reason;
            if (tEl) tEl.innerText = q.explanation.trap;
            if (lEl) lEl.innerText = q.explanation.law;

            saveProgress();
            if (expBox) expBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function nextQuestion() {
            if (currentIndex + 1 < activeQuestions.length) {
                currentIndex++;
                renderQuestion();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                saveProgress();
            } else {
                localStorage.removeItem('fp3_study_active');
                const sEl = document.getElementById('result-score');
                const tEl = document.getElementById('result-total');
                if (sEl) sEl.innerText = scoreCount;
                if (tEl) tEl.innerText = activeQuestions.length;

                switchScreen('result');
                window.scrollTo({ top: 0, behavior: 'smooth' });

                insertRandomAds();

                setTimeout(() => {
                    const adModal = document.getElementById('ad-modal');
                    if (adModal) adModal.classList.remove('hidden');
                }, 400);
            }
        }

        function switchScreen(screenName) {
            const h = document.getElementById('screen-home');
            const q = document.getElementById('screen-quiz');
            const r = document.getElementById('screen-result');

            if (h) h.classList.add('hidden');
            if (q) q.classList.add('hidden');
            if (r) r.classList.add('hidden');

            if (screenName === 'home' && h) h.classList.remove('hidden');
            if (screenName === 'quiz' && q) q.classList.remove('hidden');
            if (screenName === 'result' && r) r.classList.remove('hidden');
        }

        function returnHome() {
            switchScreen('home');
            window.location.hash = '';
            checkSavedProgress();
        }

        function saveProgress() {
            const data = { activeQuestions, currentIndex, scoreCount };
            localStorage.setItem('fp3_study_active', JSON.stringify(data));
        }

        function checkSavedProgress() {
            const saved = localStorage.getItem('fp3_study_active');
            const container = document.getElementById('resume-container');
            if (!container) return;

            if (saved) {
                const data = JSON.parse(saved);
                if (data.activeQuestions && data.activeQuestions.length > 0) {
                    container.classList.remove('hidden');
                    const infoText = document.getElementById('resume-info-text');
                    if (infoText) infoText.innerText = `第 ${data.currentIndex + 1} 問 / 全 ${data.activeQuestions.length} 問のセッションが残っています`;
                    return;
                }
            }
            container.classList.add('hidden');
        }

        function resumeQuiz() {
            const saved = localStorage.getItem('fp3_study_active');
            if (saved) {
                const data = JSON.parse(saved);
                activeQuestions = data.activeQuestions;
                currentIndex = data.currentIndex;
                scoreCount = data.scoreCount;
                hasAnswered = false;

                switchScreen('quiz');
                renderQuestion();
            }
        }

        function handleKeyboard(e) {
            if (e.key === 'Enter') {
                const quizScreen = document.getElementById('screen-quiz');
                const expBox = document.getElementById('explanation-box');
                if (quizScreen && expBox && !quizScreen.classList.contains('hidden') && !expBox.classList.contains('hidden')) {
                    nextQuestion();
                }
            }
        }
    </script>
</body>
</html>

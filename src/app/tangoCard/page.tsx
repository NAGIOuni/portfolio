import Image from "next/image";
import React from "react";
import Link from "next/link";

const TangoCard = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/waldemar-U3Ptj3jafX8-unsplash.jpg"
            alt="Tango Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Tango!</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            イメージで覚える英単語学習アプリ
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-6">
              <h3 className="text-lg text-gray-800 font-semibold mb-2">
                開発期間
              </h3>
              <p className="text-lg text-gray-800">2024年1月〜2024年3月</p>
            </div>
            <div className="bg-white text-gray-800 bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">開発体制</h3>
              <p className="text-lg text-gray-800">個人開発</p>
            </div>
          </div>
        </div>
      </div>

      {/* 開発の背景セクション */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            開発の背景
          </h2>
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-start mb-8">
              <div className="bg-gray-800 rounded-full p-3 mr-4 flex-shrink-0 mt-1">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  課題
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  私はオンライン家庭教師のアルバイトで学生に英語を教えていました。その中で、学生が単語を覚えるのに苦労している姿を見て、なんとかして英単語学習のハードルを下げることはできないかと考えました。
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-600 rounded-full p-3 mr-4 flex-shrink-0 mt-1">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  解決法
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  英単語を視覚的に覚えられるようなアプローチを模索し始めました。英単語をイメージで覚える学習法は、記憶に定着しやすく、単語が複数の意味を持っていたとしても覚える量が少なくて済むというメリットがあることで知られています。私自身、英単語をイメージで覚えたことで英語の文章を読むスピードが向上した経験がありました。このアプローチを活かして、英単語学習をより効果的にサポートするアプリを開発することにしました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ターゲットユーザーセクション */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            ターゲットユーザー
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-gray-800 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                英語学習初心者から中級者
              </h3>
              <p className="text-gray-600 leading-relaxed">
                基礎的な英単語から中級レベルの語彙まで、段階的に学習したい方
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-gray-600 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                英単語を効率的に覚えたい人
              </h3>
              <p className="text-gray-600 leading-relaxed">
                短時間で効果的に語彙力を向上させたい、忙しい学習者
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-gray-400 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                視覚的な学習を好む人
              </h3>
              <p className="text-gray-600 leading-relaxed">
                画像やイメージを活用した記憶法で学習効果を高めたい方
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 使用技術セクション */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          使用技術
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              フロントエンド
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-800 rounded-full mr-3"></span>
                <span className="text-gray-700">React</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-800 rounded-full mr-3"></span>
                <span className="text-gray-700">Bootstrap</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              バックエンド
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-800 rounded-full mr-3"></span>
                <span className="text-gray-700">Node.js</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-800 rounded-full mr-3"></span>
                <span className="text-gray-700">Express</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              データベース
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-800 rounded-full mr-3"></span>
                <span className="text-gray-700">MongoDB</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-800">その他</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-800 rounded-full mr-3"></span>
                <span className="text-gray-700">Unsplash API</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 主な機能セクション */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            主な機能
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center border border-gray-200">
              <div className="bg-gray-100 rounded-full p-3 mr-4">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <span className="text-lg text-gray-700">
                英単語の登録・編集・削除
              </span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center border border-gray-200">
              <div className="bg-gray-100 rounded-full p-3 mr-4">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-lg text-gray-700">
                イメージのアップロードと表示
              </span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center border border-gray-200">
              <div className="bg-gray-100 rounded-full p-3 mr-4">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <span className="text-lg text-gray-700">学習進捗度の管理</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center border border-gray-200">
              <div className="bg-gray-100 rounded-full p-3 mr-4">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <span className="text-lg text-gray-700">ユーザー認証機能</span>
            </div>
          </div>
        </div>
      </div>

      {/* デモセクション */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          デモ・機能紹介
        </h2>

        {/* トップページ */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                トップページ
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                ユーザーがアクセスすると最初にこの画面が表示されます。ボタンをクリックして移動することでログインまたはユーザー登録をすることができます。
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/home.png"
                  alt="トップページ"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* カード作成 */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/create_card.png"
                  alt="カード作成"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                単語カード作成画面
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                新しい英単語カードはこちらから作成することができます。カードのタイトルと概要を登録することができます。
              </p>
            </div>
          </div>
        </div>

        {/* 単語登録 */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                単語登録画面
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                こちらのページから新しい英単語を登録することができます。
                発音記号や日本語訳等、入力欄が多数ありますが、必須項目は英単語のみと少なく、簡単に登録することができます。
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/create_word.png"
                  alt="単語登録画面"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* スクレイピング */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/scraping_word.png"
                  alt="単語情報のスクレイピング"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                単語情報のスクレイピング
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                この機能では、Webから単語情報を自動的に取得することができます。英単語を入力した状態で自動入力ボタンをクリックすると、そのほかの情報をスクレイピングして取得し、自動で埋めてくれます。
              </p>
            </div>
          </div>
        </div>

        {/* 画像取得 */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                単語のイメージ画像の登録
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Unsplash
                APIを使用して、英単語のイメージ画像を30個取得します。その中から自分が一番しっくりくるものを選んで登録することができます。
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/get_images.png"
                  alt="Unsplash APIから画像取得"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 手動修正 */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/word_syudou.png"
                  alt="手動でも入力可能"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                手動での修正
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                英単語の情報は手動でも入力、修正することができます。自動取得した情報が正確でない場合や、個人的な学習メモを追加したい場合に便利です。
              </p>
            </div>
          </div>
        </div>

        {/* 単語一覧 */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                単語登録後の単語一覧画面
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                新しく英単語を登録すると、一覧画面に登録した単語が追加されます。学習状況や進捗度が一目で確認できます。
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/word_registered.png"
                  alt="単語登録後の単語一覧画面"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 単語詳細 */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/registered_word.png"
                  alt="登録した単語詳細"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                登録した英単語の詳細
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                登録した英単語の詳細はこのように表示されます。この英単語を覚えたくなったら「学習開始」ボタンをクリックします。また、登録した英単語を削除することもできます。
              </p>
            </div>
          </div>
        </div>

        {/* 学習開始 */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                学習開始
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                「学習開始」ボタンをクリックすると、英単語のステータスが「未着手」から「学習中」に変更されます。学習の進捗を段階的に管理できます。
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/next_step.png"
                  alt="次のステップ"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 学習中詳細 */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/next_step_word.png"
                  alt="次のステップの単語ページ"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                学習中の単語の詳細画面
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                学習ステップが変わると、詳細画面の右上のステータス表示や画面下のボタンが変わります。覚えられたら「学習完了」ボタンをクリックして次のステップに進みます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 学習・成長ポイントセクション */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            学習・成長ポイント
          </h2>

          {/* 新しく学んだ技術 */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-gray-800 rounded-full p-3 mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                新しく学んだ技術
              </h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-gray-800 rounded-full mr-3"></div>
                    <h4 className="font-semibold text-gray-800">MongoDB</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    NoSQLデータベースの設計と操作を習得
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-gray-800 rounded-full mr-3"></div>
                    <h4 className="font-semibold text-gray-800">外部API連携</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Unsplash APIとの統合と非同期処理
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-gray-800 rounded-full mr-3"></div>
                    <h4 className="font-semibold text-gray-800">React開発</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    モダンなフロントエンド開発手法
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 苦労した点 */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-gray-600 rounded-full p-3 mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">苦労した点</h3>
            </div>
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-start">
                  <div className="bg-gray-800 rounded-full p-2 mr-4 flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      Reactの学習
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      近年、フロントエンド開発ではReactのようなフレームワークが用いられるということを知り、本アプリケーションでもフロントエンドはReactを用いて実装しようと考えました。しかし、それまでReactには触れたことがなかったため、Reactを学習しながらの実装となりました。特に苦労したのはuseReducerの学習です。英単語の登録画面での入力情報の状態管理はuseReducerを用いて実装しましたが、useReducerをなかなか理解することができず実装に苦戦しました。Udemyの講座を何度も見返しながら仕組みを理解し最終的に実装することができました。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-start">
                  <div className="bg-gray-800 rounded-full p-2 mr-4 flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      不十分な開発計画
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      アプリケーションを作る際に、要件定義や設計を十分に行わなかったため、実装中に多くの問題が発生しました。特に、データベースのスキーマの設計が不十分だったため、後から大幅な修正が必要になり、開発に不必要に時間がかかってしまいました。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 今後の追加機能セクション */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            今後の追加機能
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 単語テスト機能 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-gray-800 rounded-full p-4 mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                単語テスト機能
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ユーザーが登録した単語を使ってテストを行う機能を追加します。これにより、ユーザーはこのアプリを単語帳としてだけでなく、学習ツールとしても活用できるようになります。
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  学習効果測定
                </div>
              </div>
            </div>

            {/* 音声読み上げ機能 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-gray-600 rounded-full p-4 mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M5 14.5v-5c0-.55.45-1 1-1h3.5l4.5-3v12l-4.5-3H6c-.55 0-1-.45-1-1z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                音声読み上げ機能
              </h3>
              <p className="text-gray-600 leading-relaxed">
                日本における英語教育において、英語の正しい発音を理解している人が少ないという課題があります。そこで、英単語の発音を音声で読み上げる機能を追加します。これにより、ユーザーは単語の正しい発音を学ぶことができ、リスニングスキルの向上にもつながります。
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  発音・リスニング強化
                </div>
              </div>
            </div>

            {/* 単語の一括追加機能 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-gray-400 rounded-full p-4 mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                単語の一括追加機能
              </h3>
              <p className="text-gray-600 leading-relaxed">
                現状では、英単語を一つずつ追加する設計になっているため、大量の英単語を学習したいユーザーにとっては効率が良くないと考えられます。そこで、CSVファイルなどから単語を一括で追加する機能を実装します。これにより、ユーザーは大量の単語を効率的に登録できるようになり、スムーズに学習に移ることができます。
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  効率的な単語登録
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ホームに戻るボタン */}
      <Link href="/" className="fixed bottom-6 left-6 z-50">
        <button className="bg-black bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm border border-white border-opacity-30 rounded-full p-3 text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg cursor-pointer group flex items-center gap-2">
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="text-sm font-medium group-hover:text-gray-100 transition-colors duration-300">
            ホームに戻る
          </span>
        </button>
      </Link>
    </div>
  );
};

export default TangoCard;

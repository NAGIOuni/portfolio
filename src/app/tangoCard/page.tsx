import Image from "next/image";
import React from "react";

const TangoCard = () => {
  return (
    <div>
      <div className="">
        <h1>Tango!</h1>
        <p>イメージで覚える英単語アプリ</p>
        <div className="">
          <h2>開発期間</h2>
          <p>2024年1月〜2024年3月</p>
        </div>
        <div className="">
          <p>個人開発</p>
        </div>
      </div>
      <div className="">
        <h2>使用技術</h2>
        <div className="">
          <h3>フロントエンド</h3>
          <ul>
            <li>React</li>
            <li>BootStrap</li>
          </ul>
        </div>
        <div className="">
          <h3>バックエンド</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>
        <div className="">
          <h3>データベース</h3>
          <ul>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="">
          <h3>その他</h3>
          <ul>
            <li>Unsplash API</li>
          </ul>
        </div>
      </div>
      <div className="">
        <h2>主な機能</h2>
        <ul>
          <li>英単語の登録・編集・削除</li>
          <li>イメージのアップロードと表示</li>
          <li>学習進捗度の管理</li>
          <li>ユーザー認証機能</li>
        </ul>
      </div>
      <div className="">
        <h2>デモ</h2>
        <div className="">
          <div className="">
            <Image
              src="/home.png"
              alt="トップページ"
              width={500}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="">
            <h3>トップページ</h3>
            <p>
              ユーザーがアクセスすると最初にこの画面が表示されます。ボタンをクリックして移動することでログインまたはユーザー登録をすることができます。
            </p>
          </div>
        </div>
        <div className="">
          <div className="">
            <Image
              src="/create_card.png"
              alt="カード作成"
              width={500}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="">
            <h3>単語カード作成画面</h3>
            <p>
              新しい英単語カードはこちらから作成することができます。カードのタイトルと概要を登録することができます。
            </p>
          </div>
        </div>
        <div className="">
          <div className="">
            <Image
              src="/create_word.png"
              alt="単語登録画面"
              width={500}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="">
            <h3>単語登録画面</h3>
            <p>
              こちらのページから新しい英単語を登録することができます。
              発音記号や日本語訳等、入力欄が多数ありますが、必須項目は英単語のみと少なく、簡単に登録することができます。
            </p>
          </div>
        </div>
        <div className="">
          <div className="">
            <Image
              src="/scraping_word.png"
              alt="単語情報のスクレイピング"
              width={500}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="">
            <h3>単語情報のスクレイピング</h3>
            <p>
              この機能では、Webから単語情報を自動的に取得することができます。英単語を入力した状態で自動入力ボタンをクリックすると、そのほかの情報をスクレイピングして取得し、自動で埋めてくれます。
            </p>
          </div>
        </div>
        <div className="">
          <div className="">
            <Image
              src="/get_images.png"
              alt="Unsplash APIから画像取得"
              width={500}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="">
            <h3>単語のイメージ画像の登録</h3>
            <p>
              Unsplash
              APIを使用して、英単語のイメージ画像を30個取得します。その中から自分が一番しっくりくるものを選んで登録することができます。
            </p>
          </div>
        </div>
        <div className="">
          <div className="">
            <Image
              src="/word_syudou.png"
              alt="手動でも入力可能"
              width={500}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="">
            <h3>手動での修正</h3>
            <p>英単語の情報は手動でも入力、修正することができます。</p>
          </div>
        </div>
        
        <Image
          src="/registered_word.png"
          alt="登録した単語詳細"
          width={500}
          height={300}
          style={{ objectFit: "cover" }}
        />

        <Image
          src="/word_registered.png"
          alt="単語登録後の単語一覧画面"
          width={500}
          height={300}
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/next_step.png"
          alt="次のステップ"
          width={500}
          height={300}
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/next_step_word.png"
          alt="次のステップの単語ページ"
          width={500}
          height={300}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default TangoCard;

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div id="top" className="flex flex-col items-center">
      {/* Hero Section with Animation */}
      <div className="w-full max-w-7xl h-screen flex flex-col xl:flex-row items-center justify-center xl:justify-start relative overflow-hidden">
        {/* Background subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-gray-500 rounded-full animate-pulse delay-3000"></div>
        </div>

        <div className="w-auto transform transition-all duration-1000 ease-out animate-fade-in-up">
          <h1 className="ml-3 text-5xl md:text-7xl xl:text-9xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-500">
            NAKAMURA
          </h1>
          <h1 className="ml-3 text-5xl md:text-7xl xl:text-9xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-500">
            RYOTA
          </h1>
        </div>
        <div className="transform transition-all duration-1000 ease-out delay-300 animate-fade-in-left">
          <p className="mt-3 ml-3 text-gray-600 text-lg tracking-wider">
            Engineer's Portfolio
          </p>
          <div className="ml-3 mt-2 w-24 h-0.5 bg-blue-500 animate-expand-width"></div>
        </div>
      </div>
      <div className="max-w-5xl flex justify-center items-center flex-col my-20 px-8 scroll-animate">
        <div className="h-40 flex items-center">
          <h2 className="text-5xl font-bold text-center mb-3 text-gray-900">
            PROFILE
            <span className="block w-20 h-1 bg-blue-500 mx-auto mt-3"></span>
          </h2>
        </div>
        <div className="flex items-center flex-col md:flex-row">
          <div className="w-1/3 flex justify-center">
            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center mb-5 md:mb-0 border-4 border-blue-100 hover:border-blue-300 transition-colors duration-300 card-hover">
              <svg
                className="w-24 h-24 text-gray-500 hover:text-blue-500 transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="p-6">
              {/* 基本情報カード */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 card-hover hover:border-blue-200 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-500"
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
                    <h3 className="font-semibold text-gray-800">職業</h3>
                  </div>
                  <p className="text-gray-600">大学院生（化学専攻）</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 card-hover hover:border-blue-200 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H8a2 2 0 00-2-2V6m8 0h2a2 2 0 012 2v6.5"
                      />
                    </svg>
                    <h3 className="font-semibold text-gray-800">現在の状況</h3>
                  </div>
                  <p className="text-gray-600">就職活動中</p>
                </div>
              </div>

              {/* スキル・学習情報 */}
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg
                      className="w-5 h-5 mr-2 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <h3 className="font-semibold text-gray-800">
                      現在注力している技術
                    </h3>
                  </div>
                  <div className="bg-white rounded px-3 py-2 inline-block border border-gray-200">
                    <span className="text-gray-800 font-medium">
                      Webアプリ開発
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg
                      className="w-5 h-5 mr-2 text-gray-700"
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
                    <h3 className="font-semibold text-gray-800">
                      将来挑戦したい分野
                    </h3>
                  </div>
                  <div className="bg-white rounded px-3 py-2 inline-block border border-gray-200">
                    <span className="text-gray-800 font-medium">AI開発</span>
                  </div>
                </div>
              </div>

              {/* 学習方法・期間 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 mr-2 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <h3 className="font-semibold text-gray-800">学習方法</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white text-gray-700 px-2 py-1 rounded text-sm border border-gray-200">
                      Udemy
                    </span>
                    <span className="bg-white text-gray-700 px-2 py-1 rounded text-sm border border-gray-200">
                      YouTube
                    </span>
                    <span className="bg-white text-gray-700 px-2 py-1 rounded text-sm border border-gray-200">
                      Paiza
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 mr-2 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="font-semibold text-gray-800">学習期間</h3>
                  </div>
                  <p className="text-gray-700 font-medium">約1年</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl flex justify-center items-center flex-col my-20 px-8 scroll-animate">
        <div className="h-40 flex items-center">
          <h2 className="text-5xl font-bold text-center text-gray-900">
            SKILL
            <span className="block w-16 h-1 bg-blue-500 mx-auto mt-3"></span>
          </h2>
        </div>
        <div className="flex flex-col w-full">
          {/* Frontend Skills */}
          <div className="flex flex-col items-center w-full my-8 scroll-animate">
            <h3 className="font-bold text-center text-3xl mb-8 text-gray-800">
              FRONTEND
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center card-hover hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/icons8-html-5.svg"
                    alt="HTML"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-semibold text-gray-800">HTML</h4>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center card-hover hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/icons8-css.svg"
                    alt="CSS"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-semibold text-gray-800">CSS</h4>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center card-hover hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/icons8-js.svg"
                    alt="JavaScript"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-semibold text-gray-800">JavaScript</h4>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center card-hover hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/icons8-タイプスクリプト.svg"
                    alt="TypeScript"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-semibold text-gray-800">TypeScript</h4>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center card-hover hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/icons8-ブートストラップ.svg"
                    alt="Bootstrap"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-semibold text-gray-800">Bootstrap</h4>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center card-hover hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/icons8-反応する.svg"
                    alt="React"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-semibold text-gray-800">React</h4>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/icons8-nextjs.svg"
                    alt="Next.js"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-semibold text-gray-800">Next.js</h4>
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="flex flex-col items-center w-full my-8">
            <h3 className="font-bold text-center text-3xl mb-8 text-gray-800">
              BACKEND
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/icons8-nodejs.svg"
                    alt="Node.js"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-semibold text-gray-800">Node.js</h4>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/icons8-rubyプログラミング言語.svg"
                    alt="Ruby"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-semibold text-gray-800">Ruby</h4>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/icons8-python.svg"
                    alt="Python"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-semibold text-gray-800">Python</h4>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/icons8-ルビーオンレール.svg"
                    alt="Ruby on Rails"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-semibold text-gray-800">Ruby on Rails</h4>
              </div>
            </div>
          </div>

          {/* Database & Infrastructure */}
          <div className="flex flex-col items-center w-full my-8">
            <h3 className="font-bold text-center text-3xl mb-8 text-gray-800">
              DATABASE & INFRASTRUCTURE
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-md mx-auto">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/icons8-mongodb-48.png"
                    alt="MongoDB"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-semibold text-gray-800">MongoDB</h4>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/icons8-aws.svg"
                    alt="AWS EC2"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-semibold text-gray-800">AWS EC2</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="works"
        className="max-w-5xl flex justify-center items-center flex-col my-20 px-8 scroll-animate"
      >
        <div className="w-full h-40 flex items-center justify-center">
          <h2 className="text-5xl font-bold text-center mb-3 text-gray-900">
            WORKS
            <span className="block w-20 h-1 bg-blue-500 mx-auto mt-3"></span>
          </h2>
        </div>
        <ul className="w-full flex sm:justify-center justify-center flex-wrap gap-8 items-stretch">
          <Link href="/tangoCard">
            <li className="w-full max-w-sm h-full bg-gray-50 rounded-lg border border-gray-200 card-hover hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center p-6 h-full">
                <div className="w-[300px] h-[300px] mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 transform transition-transform duration-300 hover:scale-105">
                  <Image
                    src="registered_word.png"
                    alt=""
                    width={300}
                    height={300}
                    className="rounded-lg object-contain max-w-full max-h-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="flex flex-col flex-grow justify-center items-center text-center">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    Tango!
                  </h3>
                  <p className="text-gray-600">
                    イメージで覚える英単語学習アプリ
                  </p>
                </div>
              </div>
            </li>
          </Link>
          <Link href="/">
            <li className="w-full max-w-sm h-full bg-gray-50 rounded-lg border border-gray-200 card-hover hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center p-6 h-full">
                <div className="w-[300px] h-[300px] mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 transform transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/portfolio.png"
                    alt=""
                    width={300}
                    height={300}
                    className="rounded-lg object-contain max-w-full max-h-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="flex flex-col flex-grow justify-center items-center text-center">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    ポートフォリオ
                  </h3>
                  <p className="text-gray-600">ポートフォリオサイト</p>
                </div>
              </div>
            </li>
          </Link>
        </ul>
      </div>
      <div
        id="links"
        className="max-w-5xl flex flex-col justify-center items-center my-20 px-8"
      >
        <div className="h-40 flex items-center">
          <h2 className="text-5xl font-bold text-center">LINKS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* GitHub */}
          <a
            href="https://github.com/NAGIOuni"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow text-center group"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">GitHub</h3>
            <p className="text-gray-600 text-sm">プロジェクトとソースコード</p>
          </a>

          {/* Portfolio Repository */}
          <a
            href="https://github.com/NAGIOuni/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow text-center group"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors">
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Portfolio Code</h3>
            <p className="text-gray-600 text-sm">このサイトのソースコード</p>
          </a>

          {/* Contact Email */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-600 rounded-lg flex items-center justify-center">
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
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Contact</h3>
            <p className="text-gray-600 text-sm">
              お気軽にお問い合わせください
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-30 flex justify-center items-end">
        <p className="mb-3">
          Icons by <a href="https://icons8.jp/">Icons8</a>
        </p>
      </div>
    </div>
  );
}

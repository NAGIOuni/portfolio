import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-screen flex flex-col xl:flex-row items-center justify-center">
        <div className="w-full xl:w-1/2">
          <h1 className="ml-3 text-9xl font-blod">NAKAMURA</h1>
          <h1 className="ml-3 text-9xl font-blod">RYOTA</h1>
        </div>
        <div className="w-full">
          <p className="mt-3 ml-3">Kyoto University</p>
        </div>
      </div>
      <div className="max-w-7xl min-h-screen flex justify-center items-center flex-col">
        <div className="h-20 flex items-center">
          <h2 className="text-5xl font-blod text-center">WORKS</h2>
        </div>
        <ul className="flex justify-between flex-wrap">
          <li>
            <div className="flex flex-col items-center w-sm">
              <Image
                src="word_car.png"
                alt=""
                objectFit="cover"
                height={300}
                width={300}
              />
              <h3 className="text-3xl">英単語学習アプリ</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia accusantium, earum, numquam eum quisquam nemo vitae
                dolorum veritatis dolore doloribus quas perspiciatis assumenda
                et! Incidunt quia suscipit optio at illo?
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center w-sm">
              <Image
                src="word_car.png"
                alt=""
                objectFit="cover"
                height={300}
                width={300}
              />
              <h3 className="text-3xl">英単語学習アプリ</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia accusantium, earum, numquam eum quisquam nemo vitae
                dolorum veritatis dolore doloribus quas perspiciatis assumenda
                et! Incidunt quia suscipit optio at illo?
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center w-sm">
              <Image
                src="word_car.png"
                alt=""
                objectFit="cover"
                height={300}
                width={300}
              />
              <h3 className="text-3xl">英単語学習アプリ</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia accusantium, earum, numquam eum quisquam nemo vitae
                dolorum veritatis dolore doloribus quas perspiciatis assumenda
                et! Incidunt quia suscipit optio at illo?
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center w-sm">
              <Image
                src="word_car.png"
                alt=""
                objectFit="cover"
                height={300}
                width={300}
              />
              <h3 className="text-3xl">英単語学習アプリ</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia accusantium, earum, numquam eum quisquam nemo vitae
                dolorum veritatis dolore doloribus quas perspiciatis assumenda
                et! Incidunt quia suscipit optio at illo?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

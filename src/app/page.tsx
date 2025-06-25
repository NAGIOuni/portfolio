import Image from "next/image";

export default function Home() {
  return (
    <div id="top" className="flex flex-col items-center">
      <div className="w-full max-w-7xl h-screen flex flex-col xl:flex-row items-center justify-center xl:justify-start">
        <div className="w-auto">
          <h1 className="ml-3 text-9xl font-bold">NAKAMURA</h1>
          <h1 className="ml-3 text-9xl font-bold">RYOTA</h1>
        </div>
        <div className="">
          <p className="mt-3 ml-3">Kyoto University</p>
        </div>
      </div>
      <div className="max-w-7xl flex justify-center items-center flex-col my-8">
        <div className="h-20 flex items-center">
          <h2 className="text-5xl font-bold text-center mb-3">PROFILE</h2>
        </div>
        <div className="flex items-center">
          <div className="w-1/3 flex justify-center">
            <Image
              src="profile_img.jpg"
              alt=""
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
              className="rounded-full"
            />
          </div>
          <div className="w-2/3">
            <p className="break-words px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              magni quidem obcaecati rerum atque sit maxime eligendi veritatis!
              Distinctio laborum voluptatibus, amet quas iure alias eaque?
              Itaque quia ullam repellat. Maiores in accusantium cum tempora
              praesentium delectus? Accusamus veritatis quidem commodi, ut
              excepturi ad quod laudantium incidunt vel distinctio enim iusto
              eveniet aperiam exercitationem, assumenda aliquid odit officiis!
              Labore, tempora! Libero possimus sed nesciunt assumenda temporibus
              a minus, harum molestiae distinctio nulla eveniet, placeat
              repellendus corrupti vel magni expedita fugiat ipsa. Voluptates
              iusto aspernatur facilis nihil illo eligendi, exercitationem
              minima. Accusamus id temporibus perferendis voluptatem consequatur
              veritatis possimus eum unde reiciendis facilis, sint at ab
              suscipit mollitia harum aliquid esse ut nesciunt assumenda, minus
              fugit! Nesciunt cupiditate accusantium repellat commodi. Corrupti
              explicabo animi nam dolorem. Amet ipsum necessitatibus est natus
              quae beatae aliquam error quisquam quo! Tenetur reiciendis eum
              facere voluptas sequi eligendi quidem a beatae. Dolore labore eum
              ratione.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl flex justify-center items-center flex-col my-8">
        <div className="h-20 flex items-center">
          <h2 className="text-5xl font-bold text-center mb-3">SKILL</h2>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-center text-3xl">FRONTEND</h3>
            <ul className="flex flex-col xl:flex-row xl:flex-wrap items-center">
              <li className="flex items-center justify-center m-2">
                <div className="w-1/6">
                  <div className="w-30 h-30 bg-red-500 m-3"></div>
                </div>
                <div className="w-1/6">
                  <h4 className="font-bold text-lg m-3">HTML</h4>
                </div>
                <div className="w-2/3">
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis sequi consectetur aliquam ab fuga eos sapiente
                    atque. Officia doloremque vero reprehenderit sint iusto nam
                    nostrum, ut fugiat saepe nihil beatae.{" "}
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-center m-2">
                <div className="w-1/6">
                  <div className="w-30 h-30 bg-red-500 m-3"></div>
                </div>
                <div className="w-1/6">
                  <h4 className="font-bold text-lg m-3">CSS</h4>
                </div>
                <div className="w-2/3">
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis sequi consectetur aliquam ab fuga eos sapiente
                    atque. Officia doloremque vero reprehenderit sint iusto nam
                    nostrum, ut fugiat saepe nihil beatae.{" "}
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-center m-2">
                <div className="w-1/6">
                  <div className="w-30 h-30 bg-red-500 m-3"></div>
                </div>
                <div className="w-1/6">
                  <h4 className="font-bold text-lg m-3">JavaScript</h4>
                </div>
                <div className="w-2/3">
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis sequi consectetur aliquam ab fuga eos sapiente
                    atque. Officia doloremque vero reprehenderit sint iusto nam
                    nostrum, ut fugiat saepe nihil beatae.{" "}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="works"
        className="max-w-7xl flex justify-center items-center flex-col my-8"
      >
        <div className="h-20 flex items-center">
          <h2 className="text-5xl font-bold text-center mb-3">WORKS</h2>
        </div>
        <ul className="flex justify-between flex-wrap">
          <li className="flex flex-col items-center w-sm mx-3">
            <Image
              src="word_car.png"
              alt=""
              objectFit="cover"
              height={300}
              width={300}
            />
            <h3 className="text-3xl font-bold mt-5">
              <a href="/tangoCard">英単語学習アプリ</a>
            </h3>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              accusantium, earum, numquam eum quisquam nemo vitae dolorum
              veritatis dolore doloribus quas perspiciatis assumenda et!
              Incidunt quia suscipit optio at illo?
            </p>
          </li>
          <li className="flex flex-col items-center w-sm mx-3">
            <Image
              src="word_car.png"
              alt=""
              objectFit="cover"
              height={300}
              width={300}
            />
            <h3 className="text-3xl font-bold mt-5">
              <a href="/tangoCard">英単語学習アプリ</a>
            </h3>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              accusantium, earum, numquam eum quisquam nemo vitae dolorum
              veritatis dolore doloribus quas perspiciatis assumenda et!
              Incidunt quia suscipit optio at illo?
            </p>
          </li>
          <li className="flex flex-col items-center w-sm mx-3">
            <Image
              src="word_car.png"
              alt=""
              objectFit="cover"
              height={300}
              width={300}
            />
            <h3 className="text-3xl font-bold mt-5">
              <a href="/tangoCard">英単語学習アプリ</a>
            </h3>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              accusantium, earum, numquam eum quisquam nemo vitae dolorum
              veritatis dolore doloribus quas perspiciatis assumenda et!
              Incidunt quia suscipit optio at illo?
            </p>
          </li>
        </ul>
      </div>
      <div
        id="contact"
        className="max-w-7xl flex flex-col justify-center items-center flex-col my-8"
      >
        <h2 className="text-5xl font-bold mt-5">CONTACT</h2>
        <div className="mt-5 mx-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          repellendus neque dolorum ullam repudiandae labore minima temporibus
          autem cupiditate assumenda esse dignissimos, possimus ea modi, quis
          mollitia fuga atque sit! Unde nam, corrupti itaque vero distinctio
          dolorum at odit amet sunt neque enim earum, tempora rerum facilis
          facere harum, animi minima et placeat aliquam! Labore magnam illo
          placeat doloremque adipisci. Beatae sunt accusantium ex explicabo non
          soluta eligendi pariatur, reiciendis, ullam reprehenderit quia autem
          quas facere praesentium qui, ipsum ipsa. Dicta enim praesentium illo,
          incidunt iusto nemo reiciendis non obcaecati! Dolores dicta quidem
          mollitia eum excepturi ab deleniti minus ad, numquam autem unde enim!
          Perspiciatis eius alias asperiores, ducimus tempore eligendi
          repellendus, voluptate similique nesciunt, magnam itaque facere
          deleniti qui. Sint nam expedita blanditiis reprehenderit excepturi
          recusandae omnis officiis eum, soluta natus accusantium quas dicta, ab
          veritatis neque ipsam mollitia. Ad in aliquid, tempora omnis ipsa
          deserunt similique odit suscipit. Maiores temporibus, ullam at tempora
          facere labore reiciendis quod obcaecati maxime minima enim vero
          itaque. Iste eum recusandae aliquid culpa dolores in. At perspiciatis
          quaerat, reiciendis modi fugit ab aliquid. Beatae vitae et officiis,
          at corporis excepturi maxime sed perspiciatis, laborum maiores, neque
          magnam debitis unde voluptatem quis culpa? Qui enim a ipsum amet
          inventore maxime minus itaque nulla similique. Rerum maiores harum
          facere maxime ex? Saepe laboriosam quas labore quam mollitia aut ipsa
          quaerat doloribus, dolore vel sed iusto. Corporis ad reprehenderit
          consequuntur voluptas fugiat eos minus corrupti doloremque. Beatae
          possimus aut repudiandae rem aliquid earum explicabo voluptate est.
          Perferendis exercitationem minus temporibus distinctio consequatur
          voluptatem aut ex voluptatibus deserunt porro, laborum consequuntur
          deleniti vel amet animi dolorem itaque. Ipsam dolore quam, aliquid,
          labore distinctio explicabo perspiciatis autem quaerat in cupiditate
          possimus impedit enim nostrum, dignissimos ex numquam sit minus.
          Explicabo ut est reiciendis at consequuntur aperiam dolor assumenda.
        </div>
      </div>
      <div className="w-full h-30 flex justify-center items-end">
        <p className="mb-3">footer</p>
      </div>
    </div>
  );
}

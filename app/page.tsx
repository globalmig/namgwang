import MainSlide from "@/components/MainSlide";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <main>
        <MainSlide />
        <div>
          <h1>HYDRAULIC CYLINDER</h1>
          <p>보이지 않는 힘으로 세상을 움직입니다.</p>
        </div>
        <div>
          <p>SCROLL</p>
          <div>
            <Image src="/icons/scroll.png" alt="scroll" width={50} height={50} />
          </div>
        </div>
        <div>
          <Image className="mo" src="/images/banner_crop_mo" alt="image" width={720} height={339} />
          <Image className="pc" src="/images/banner_crop_pc" alt="image" width={2560} height={162} />
        </div>
      </main>

      <article className="home">
        <div>
          <div>
            <h2>NAMGWANG HYDRAULICS</h2>
            <p>기술의 깊이로 신뢰를 쌓아온 유압 전문 기업, 남광유압</p>
          </div>
          <div className="display-flex-flow">
            <section>
              <Link href="/product/cylinder">
                <div>
                  <Image src="/images/유압실린더.jpg" alt="유압 실린더" width={378} height={378} />
                </div>
                <div>
                  <p>유압 실린더</p>
                  <h3>HYDRAULIC CYLINDER</h3>
                </div>
              </Link>
            </section>
            <section>
              <Link href="/product/unit">
                <div>
                  <Image src="/images/유압유니트.jpg" alt="유압 유니트" width={378} height={378} />
                </div>
                <div>
                  <p>유압 유니트</p>
                  <h3>HYDRAULIC UNIT</h3>
                </div>
              </Link>
            </section>
            <section>
              <Link href="/product/other">
                <div>
                  <Image src="/images/기타기기.jpg" alt="기타 기기 제작" width={378} height={378} />
                </div>
                <div>
                  <p>기타 기기</p>
                  <h3>OTHER</h3>
                </div>
              </Link>
            </section>
          </div>
        </div>
      </article>

      <article className="home2">
        <div>
          <div>
            <h2>NAMGWANG PRODUCTS</h2>
            <p>축적된 기술력으로 완성한 유압 실린더와 유압 유니트 솔루션</p>
          </div>
          <div className="display-flex-flow">
            <section>
              <h3>유압 실린더</h3>
              <p>HYDRAULIC CYLINDER</p>
              <button>
                <Link href="/technology/cylinder">자세히 보기</Link>
              </button>
              <div>
                <Image src="/images/tech-유압실린더.jpg" alt="유압실린더" width={354} height={236} />
              </div>
            </section>
            <section>
              <h3>유압 유니트</h3>
              <p>HYDRAULIC UNIT</p>
              <button>
                <Link href="/technology/unit">자세히 보기</Link>
              </button>
              <div>
                <Image src="/images/tech-유압유니트.jpg" alt="유압유니트" width={354} height={236} />
              </div>
            </section>
          </div>
        </div>
      </article>

      <article className="contact">
        <div>
          <div>
            <h2>CONTACT US</h2>
            <p>남광유압 제품과 관련하여 문의가 있는 경우<br />접수해주시면 빠른 시일 내에 연락 드리겠습니다.</p>
          </div>
          <div>
            <button>
              <Link href="/inquire/write">문의하기</Link>
            </button>
          </div>
        </div>
      </article>

    </>
  );
}

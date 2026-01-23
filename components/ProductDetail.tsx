import Image from "next/image";
import Link from "next/link";

export default function ProductDetail() {
    // 유니트, 기타기기 상세페이지
    return (
        <div className="product-detail">
            <div className="display-flex-flow">
                <div>
                    <Image src="" alt="" width={500} height={500} />
                </div>
                <div>
                    <div className="stroke-text">
                        <h3>제품명</h3>
                    </div>
                    <div>
                            <p>TYPE</p>
                            <p>타입</p>
                    </div>
                    <button>
                        <Link href="/inquire/write">문의하기</Link>
                    </button>
                </div>
            </div>
            <div>
                {/* 업로드한 이미지들 map */}
            </div>
        </div>
    )
}
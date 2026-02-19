'use client';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <footer>
            <div>
                <div onClick={handleScroll}>
                    <Image src="/icons/top.png" alt="맨 위로 이동" width={45} height={45}/>
                </div>
                <ul className="display-flex-flow">
                    <li><Link href="/company/about">회사소개</Link></li>
                    <li><Link href="/product/cylinder">제품소개</Link></li>
                    <li><Link href="/inquire/write">제품문의</Link></li>
                    <li><Link href="/technology/cylinder">기술자료실</Link></li>
                    <li><Link href="/admin">관리자페이지</Link></li>
                </ul>
                <div>
                    <div>
                        <Image src="/icons/logo_white.png" alt="남광유압" width={95} height={40}/>
                    </div>
                    <div>
                        <ul>
                            <li><span>상호명</span> : 남광유압</li>
                            <li><span>대표이사</span> : 강대유</li>
                            <li><span>대표전화</span> : 032-574-4030</li>
                            <li><span>팩스</span> : 032-574-4031</li>
                            <li><span>사업자번호</span> : 137-86-26460</li>
                            <li><span>주소</span> : 인천광역시 미추홀구 봉수대로13번길 28-1</li>
                        </ul>
                        <p>Copyright ⓒ 2026 남광유압 All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
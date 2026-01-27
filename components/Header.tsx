import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="display-flex">
                <div>
                    <Link href="/">
                    <Image src="/icons/logo.png" alt="남광유압" width={95} height={40}/>
                    </Link>
                </div>
                <nav>
                    <div>
                        <div>
                    <Image src="/icons/nav-close.png" alt="메뉴 닫기" width={30} height={30}/>
                </div>
                    </div>
                    <ul>
                        <li><Link href="/"></Link></li>
                    </ul>
                </nav>
                <div>
                    <Image src="/icons/nav.png" alt="메뉴 열기" width={35} height={20}/>
                </div>
            </div>
        </header>
    )
}
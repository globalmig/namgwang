import Image from "next/image";

export default function AboutPage() {
    return (
        <article className="about">
            <div>
                <div>
                    <h2 className="page-title">회사개요</h2>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25329.51789876232!2d126.6154602743164!3d37.479848700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7927e5d68c15%3A0xa6ed39799537c687!2zKOyjvCnrgqjqtJHsnKDslZU!5e0!3m2!1sko!2skr!4v1770082115466!5m2!1sko!2skr"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    />
                </div>
                <div>
                    <h4>남광유압</h4>
                    <h2>인천광역시 미추홀구 봉수대로13번길 28-1</h2>
                    <div className="display-flex">
                        <p>(지번) 도화동 969-6</p>
                        <p>(우)22129</p>
                    </div>
                </div>
                <ul>
                    <li>
                        <p>TEL</p>
                        <p>032-574-4030</p>
                    </li>
                    <li>
                        <p>FAX</p>
                        <p>032-574-4031</p>
                    </li>
                    <li>
                        <p>E-mail</p>
                        <p>nkhcyld@naver.com</p>
                    </li>
                </ul>
            </div>
        </article>
    )
}
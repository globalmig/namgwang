import { CertificationProps } from "@/types/common";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react"

interface ModalProps {
    setOpenModal: Dispatch<SetStateAction<boolean>>;
    selectCert: CertificationProps | null
}

export default function Modal({ setOpenModal, selectCert }: ModalProps) {
    return (
        <div className="modal">
            <div className="black-bg" onClick={() => setOpenModal(false)}></div>
            <div>
                {selectCert ?
                    <div className="display-flex">
                        <div>
                            <Image src={selectCert.img} alt={selectCert.name} width={1000} height={1000} />
                        </div>
                        <div>
                            <Image onClick={() => setOpenModal(false)} src="/icons/nav-close.png" alt="닫기" width={30} height={30} />
                        </div>
                    </div>
                    : <div className="loading">사진을 불러오는 중입니다.</div>
                    }
            </div>
        </div>
    )
}
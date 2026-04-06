"use client";
import { supabase } from "@/lib/supabase/client";
import { CertificationProps } from "@/types/common";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "../Modal";


export default function CertificationList() {

    const [certifications, setCertifications] = useState<CertificationProps[]>([]);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectCert, setSelectCert] = useState<CertificationProps | null>(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const query = supabase.from("certifications").select("*");
                const { data, error } = await query.order("created_at", { ascending: false });
                if (error) throw error;
                setCertifications(data || []);
            } catch (error) {
                console.error("데이터 로드 실패:", error);
            }
        }
        fetch();
    }, []);

    const onClickModal = (cert: CertificationProps) => {
        setSelectCert(cert);
        setOpenModal(true);
    }

    if (!certifications) return <div className="loading">정보를 불러오는 중입니다.</div>
    if (certifications.length === 0) return <div className="loading">데이터가 존재하지 않습니다.</div>

    return (
        <>
            {openModal && selectCert &&
                <Modal setOpenModal={setOpenModal} selectCert={selectCert} />}
            <div className="display-flex-flow">
                {certifications.map((c) => (
                    <div key={c.id} onClick={() => onClickModal(c)}>
                        <div>
                            <Image src={c.img} alt={c.name} width={1000} height={1500} />
                        </div>
                        <p>{c.name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
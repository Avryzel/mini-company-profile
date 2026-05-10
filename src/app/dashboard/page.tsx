'use client';

import React, { useOptimistic, useTransition, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function DashboardPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const [dbData, setDbData] = useState([
        { id: 1, lokasi: "Sektor 7 Sawangan", jenis: "Organik" },
        { id: 2, lokasi: "Margonda Residence", jenis: "Anorganik" },
        { id: 3, lokasi: "Kampus UP Ekonomi", jenis: "B3" },
    ]);

    const [optimisticData, deleteOptimisticData] = useOptimistic(
        dbData,
        (state, id) => state.filter(item => item.id !== id)
    );

    const query = searchParams.get('q') || "";
    const dataFiltered = optimisticData.filter(item =>
        item.lokasi.toLowerCase().includes(query.toLowerCase())
    );

    const handleDelete = async (id: number) => {
        startTransition(async () => {
            deleteOptimisticData(id);

            await new Promise(res => setTimeout(res, 1000));

            setDbData(prev => prev.filter(item => item.id !== id));
            console.log(`Data ${id} officially removed.`);
        });
    };

    return (
        <div style={{ padding: '100px', background: '#F8FAFC', minHeight: '100vh', color: '#1E293B' }}>
            <div style={{ background: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '15px', color: '#64748B' }}>Cari Laporan Wilayah</p>
                <input
                    type="text"
                    placeholder="Masukkan nama lokasi (contoh: Sawangan)..."
                    defaultValue={query}
                    onChange={(e) => router.push(`?q=${e.target.value}`)}
                    style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '2px solid #E2E8F0', marginBottom: '25px', color: '#333', outline: 'none' }}
                />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {dataFiltered.map(item => (
                        <div key={item.id} style={{ padding: '20px', border: '1px solid #F1F5F9', borderRadius: '15px', background: '#FFFFFF', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <strong style={{ fontSize: '18px', color: '#14532d' }}>{item.lokasi}</strong>
                                <p style={{ margin: '5px 0 0', color: '#64748B', fontSize: '14px' }}>Kategori: <span style={{ color: '#22C55E', fontWeight: 'bold' }}>{item.jenis}</span></p>
                            </div>

                            <button
                                onClick={() => handleDelete(item.id)}
                                style={{
                                    background: '#fee2e2',
                                    color: '#dc2626',
                                    border: 'none',
                                    padding: '8px 15px',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    fontSize: '13px',
                                    fontWeight: 'bold'
                                }}
                            >
                                Hapus
                            </button>
                        </div>
                    ))}
                    {dataFiltered.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '40px', color: '#94A3B8' }}>
                            <p>Data lokasi "{query}" tidak ditemukan.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
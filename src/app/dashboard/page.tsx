'use client';

import React, { useOptimistic, useTransition, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '../../lib/supabase';

export default function DashboardPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();
    const [user, setUser] = useState<any>(null);
    const [dbData, setDbData] = useState<any[]>([]);

    const [lokasiInput, setLokasiInput] = useState("");
    const [jenisSampahInput, setJenisSampahInput] = useState("Organik");
    const [deskripsiInput, setDeskripsiInput] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const checkAuthSession = async () => {
            try {
                const { data: { session }, error } = await supabase.auth.getSession();

                if (error || !session) {
                    window.location.replace('/login');
                    return;
                }

                setUser(session.user);

                const { data: reportsData, error: reportsError } = await supabase
                    .from('reports')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (!reportsError && reportsData) {
                    setDbData(reportsData);
                }

            } catch (err) {
                console.error(err);
                window.location.replace('/login');
            }
        };

        checkAuthSession();
    }, []);

    const fetchReports = async () => {
        const { data, error } = await supabase
            .from('reports')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error && data) {
            setDbData(data);
        }
    };

    const handleCreateReport = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!lokasiInput.trim() || !user?.id) return;

        setIsSubmitting(true);
        try {
            const { data, error } = await supabase
                .from('reports')
                .insert([
                    {
                        user_id: user.id,
                        lokasi: lokasiInput,
                        jenis_sampah: jenisSampahInput,
                        deskripsi: deskripsiInput,
                        status: 'pending'
                    }
                ])
                .select();

            if (!error && data) {
                setDbData(prev => [data[0], ...prev]);
                setLokasiInput("");
                setDeskripsiInput("");
            } else if (error) {
                alert("Gagal mengirim laporan: " + error.message);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

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

            const { error } = await supabase
                .from('reports')
                .delete()
                .eq('id', id);

            if (error) {
                alert("Gagal menghapus data: " + error.message);
                fetchReports();
            } else {
                setDbData(prev => prev.filter(item => item.id !== id));
            }
        });
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.replace('/login');
    };

    return (
        <div style={{
            padding: '120px 20px 40px 20px',
            background: '#F8FAFC',
            minHeight: '100vh',
            color: '#1E293B',
            fontFamily: 'sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <div style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '30px',
                    width: '100%',
                    boxSizing: 'border-box',
                    gap: '20px'
                }}>
                    <div>
                        <h1 style={{ color: '#14532d', margin: 0, fontSize: '28px', fontWeight: 'bold' }}>Dashboard AVSA</h1>
                        <p style={{ color: '#64748B', margin: '5px 0 0', fontSize: '14px' }}>
                            Halo, <strong style={{ color: '#14532d' }}>{user?.email}</strong>
                        </p>
                    </div>
                    <button
                        onClick={handleLogout}
                        style={{
                            background: '#dc2626',
                            color: 'white',
                            border: 'none',
                            padding: '12px 24px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Keluar
                    </button>
                </div>

                <div style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '24px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                    width: '100%',
                    boxSizing: 'border-box'
                }}>

                    <form onSubmit={handleCreateReport} style={{
                        background: '#F1F5F9',
                        padding: '24px',
                        borderRadius: '20px',
                        marginBottom: '35px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        boxSizing: 'border-box',
                        width: '100%'
                    }}>
                        <h3 style={{ color: '#14532d', margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
                            Laporkan Tumpukan Sampah Baru
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', width: '100%' }}>
                            <input
                                type="text"
                                placeholder="Lokasi spesifik (contoh: Candra Jaya, Sawangan)..."
                                value={lokasiInput}
                                onChange={(e) => setLokasiInput(e.target.value)}
                                required
                                style={{
                                    flex: '1 1 300px',
                                    padding: '12px',
                                    borderRadius: '10px',
                                    border: '1px solid #CBD5E1',
                                    outline: 'none',
                                    fontSize: '14px',
                                    boxSizing: 'border-box'
                                }}
                            />
                            <select
                                value={jenisSampahInput}
                                onChange={(e) => setJenisSampahInput(e.target.value)}
                                style={{
                                    padding: '12px',
                                    borderRadius: '10px',
                                    border: '1px solid #CBD5E1',
                                    background: 'white',
                                    outline: 'none',
                                    cursor: 'pointer',
                                    fontSize: '14px'
                                }}
                            >
                                <option value="Organik">Organik</option>
                                <option value="Anorganik">Anorganik</option>
                                <option value="B3">B3 (Berbahaya)</option>
                            </select>
                        </div>
                        <textarea
                            placeholder="Deskripsi tambahan (contoh: Sampah plastik menumpuk di depan ruko)..."
                            value={deskripsiInput}
                            onChange={(e) => setDeskripsiInput(e.target.value)}
                            rows={3}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '10px',
                                border: '1px solid #CBD5E1',
                                outline: 'none',
                                resize: 'vertical',
                                fontFamily: 'sans-serif',
                                fontSize: '14px',
                                boxSizing: 'border-box'
                            }}
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            style={{
                                background: isSubmitting ? '#94A3B8' : '#22C55E',
                                color: 'white',
                                border: 'none',
                                padding: '14px',
                                borderRadius: '12px',
                                fontWeight: 'bold',
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                fontSize: '15px'
                            }}
                        >
                            {isSubmitting ? 'Mengirim Laporan...' : 'Kirim Laporan Warga'}
                        </button>
                    </form>

                    <hr style={{ border: '0', height: '1px', background: '#E2E8F0', marginBottom: '30px' }} />

                    <p style={{ fontWeight: 'bold', marginBottom: '15px', color: '#64748B', margin: '0 0 10px 0' }}>
                        Cari Laporan Wilayah
                    </p>
                    <input
                        type="text"
                        placeholder="Masukkan nama lokasi (contoh: Sawangan)..."
                        defaultValue={query}
                        onChange={(e) => router.push(`?q=${e.target.value}`, { scroll: false })}
                        style={{
                            width: '100%',
                            padding: '14px',
                            borderRadius: '12px',
                            border: '2px solid #E2E8F0',
                            marginBottom: '25px',
                            color: '#333',
                            outline: 'none',
                            boxSizing: 'border-box'
                        }}
                    />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {dataFiltered.map(item => (
                            <div key={item.id} style={{
                                padding: '20px',
                                border: '1px solid #F1F5F9',
                                borderRadius: '15px',
                                background: '#FFFFFF',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                boxSizing: 'border-box',
                                gap: '15px'
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <strong style={{ fontSize: '18px', color: '#14532d' }}>{item.lokasi}</strong>
                                    <p style={{ margin: 0, color: '#64748B', fontSize: '14px' }}>
                                        Kategori: <span style={{ color: '#22C55E', fontWeight: 'bold' }}>{item.jenis_sampah}</span>
                                    </p>
                                    {item.deskripsi && (
                                        <p style={{ margin: 0, color: '#475569', fontSize: '13px', fontStyle: 'italic' }}>
                                            "{item.deskripsi}"
                                        </p>
                                    )}
                                    <span style={{
                                        display: 'inline-block',
                                        marginTop: '4px',
                                        padding: '4px 10px',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        width: 'fit-content',
                                        background: item.status === 'pending' ? '#FEF3C7' : '#DCFCE7',
                                        color: item.status === 'pending' ? '#D97706' : '#15803D'
                                    }}>
                                        Status: {item.status}
                                    </span>
                                </div>

                                <button
                                    onClick={() => handleDelete(item.id)}
                                    style={{
                                        background: '#fee2e2',
                                        color: '#dc2626',
                                        border: 'none',
                                        padding: '10px 18px',
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        fontSize: '13px',
                                        fontWeight: 'bold',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Hapus
                                </button>
                            </div>
                        ))}

                        {dataFiltered.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '40px', color: '#94A3B8' }}>
                                <p style={{ margin: 0 }}>Data tidak ditemukan atau belum ada laporan.</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
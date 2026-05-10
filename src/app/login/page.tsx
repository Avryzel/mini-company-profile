'use client';

import React, { useState } from 'react';
import { z } from 'zod';

const loginSchema = z.object({
    identifier: z.string().min(6, { message: "Username minimal harus 6 karakter" }),
    password: z.string().min(6, { message: "Password minimal harus 6 karakter" })
});

export default function LoginPage() {
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        const result = loginSchema.safeParse(data);
        if (!result.success) {
            setError(result.error.issues[0].message);
            return;
        }

        document.cookie = "session_token=true; path=/; max-age=3600";
        window.location.href = '/dashboard';
    };

    const styles = {
        overlay: {
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: "url('/assets/images/backgrounds/bg3.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        wrapper: {
            display: 'flex',
            width: '850px',
            height: '520px',
            background: '#DFF9E8',
            borderRadius: '20px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
            overflow: 'hidden',
        },
        input: {
            width: '100%',
            padding: '12px',
            margin: '10px 0',
            borderRadius: '10px',
            border: '1px solid #ddd',
            background: '#fff',
            color: '#333',
        }
    };

    return (
        <div style={styles.overlay as any}>
            {/* Pakai window.location biar Hard Reload */}
            <button
                onClick={() => window.location.href = '/'}
                style={{ position: 'absolute', top: '20px', left: '20px', width: '60px', height: '60px', background: '#DFF9E8', borderRadius: '50%', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
            >
                <img src="/assets/images/icons/panah.png" alt="back" style={{ width: '28px' }} />
            </button>

            <div style={styles.wrapper as any}>
                <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px', textAlign: 'center' }}>
                    <img src="/assets/images/icons/sampah5.png" alt="logo" style={{ width: '220px', marginBottom: '20px' }} />
                    <h1 style={{ color: '#14532d', margin: 0 }}>AVSA WASTE</h1>
                    <p style={{ color: '#555', fontSize: '14px' }}>Solusi pengelolaan sampah pintar</p>
                </div>

                <div style={{ width: '50%', padding: '30px', background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 style={{ color: '#14532d', margin: '0 0 10px 0' }}>Masuk</h2>

                    {error && <p style={{ color: 'red', fontSize: '12px', marginBottom: '10px' }}>{error}</p>}

                    <form onSubmit={handleLogin}>
                        <input
                            name="identifier"
                            style={styles.input}
                            placeholder="Nomor HP / Email"
                        />
                        <input
                            name="password"
                            type="password"
                            style={styles.input}
                            placeholder="Password"
                        />
                        <button type="submit" style={{ width: '100%', padding: '14px', background: '#22C55E', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}>
                            Masuk
                        </button>
                    </form>

                    <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px', color: '#555' }}>
                        Belum punya akun? <span style={{ color: '#22C55E', fontWeight: 'bold', cursor: 'pointer' }}>Daftar</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
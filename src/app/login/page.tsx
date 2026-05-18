'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { supabase } from '../../lib/supabase';

const loginSchema = z.object({
    identifier: z.string().min(6, { message: "Username minimal harus 6 karakter" }),
    password: z.string().min(6, { message: "Password minimal harus 6 karakter" })
});

export default function LoginPage() {
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        const result = loginSchema.safeParse(data);
        if (!result.success) {
            setError(result.error.issues[0].message);
            return;
        }

        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
            email: data.identifier as string,
            password: data.password as string,
        });

        if (authError) {
            setError(authError.message);
            return;
        }

        window.location.href = '/dashboard';
    };

    const styles = {
        overlay: {
            position: 'relative',
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px 14px',
        },
        backgroundImageLayer: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('/assets/images/backgrounds/bg3.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: -10,
        },
        whiteOverlayLayer: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
        },
        wrapper: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap' as const,
            width: '850px',
            maxWidth: '100%',
            background: '#DFF9E8',
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            overflow: 'hidden',
            zIndex: 10,
            margin: 'auto',
        },
        sideBrand: {
            flex: '1 1 350px',
            display: 'flex',
            flexDirection: 'column' as const,
            justifyContent: 'center',
            alignItems: 'center',
            padding: '35px 20px',
            textAlign: 'center' as const,
        },
        sideForm: {
            flex: '1 1 350px',
            padding: '35px 25px',
            background: 'white',
            display: 'flex',
            flexDirection: 'column' as const,
            justifyContent: 'center',
            borderRadius: '24px',
        },
        input: {
            width: '100%',
            padding: '12px',
            margin: '8px 0',
            borderRadius: '10px',
            border: 'none',
            background: '#eee',
            color: '#333',
        },
        divider: {
            textAlign: 'center' as const,
            margin: '12px 0',
            fontSize: '12px',
            color: '#777',
        },
        socialContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px',
            marginBottom: '5px',
        },
        socialBtn: {
            width: '49%',
            padding: '11px',
            borderRadius: '10px',
            border: '2px solid #22C55E',
            background: 'transparent',
            color: '#22C55E',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '13px',
        }
    };

    return (
        <div style={styles.overlay as any}>
            <div style={styles.backgroundImageLayer as any} />

            <div style={styles.whiteOverlayLayer as any}>
                <div style={styles.wrapper as any}>
                    <div style={styles.sideBrand as any}>
                        <img src="/assets/images/icons/sampah5.png" alt="logo" style={{ width: '160px', height: 'auto', marginBottom: '15px' }} />
                        <h1 style={{ color: '#14532d', margin: 0, fontSize: '28px' }}>AVSA WASTE</h1>
                        <p style={{ color: '#555', fontSize: '13px', marginTop: '5px' }}>
                            Solusi pengelolaan sampah pintar untuk lingkungan lebih bersih
                        </p>
                    </div>

                    <div style={styles.sideForm as any}>
                        <h2 style={{ color: '#14532d', margin: '0 0 4px 0', fontSize: '22px' }}>Masuk ke akun Anda</h2>
                        <p style={{ color: '#555', fontSize: '13px', margin: '0 0 12px 0' }}>
                            Gunakan nomor HP atau email yang terdaftar
                        </p>

                        {error && <p style={{ color: 'red', fontSize: '12px', marginBottom: '8px' }}>{error}</p>}

                        <form onSubmit={handleLogin}>
                            <input
                                name="identifier"
                                style={styles.input}
                                placeholder="Nomor HP / Email"
                            />
                            <input
                                name="password"
                                style={styles.input}
                                type="password"
                                placeholder="Password"
                            />
                            <button type="submit" style={{ width: '100%', padding: '13px', background: '#22C55E', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', marginTop: '8px' }}>
                                Masuk
                            </button>
                        </form>

                        <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '13px', color: '#555' }}>
                            Belum punya akun?{' '}
                            <span
                                onClick={() => window.location.href = '/register'}
                                style={{ color: '#22C55E', fontWeight: 'bold', cursor: 'pointer' }}
                            >
                                Daftar
                            </span>
                        </div>

                        <div style={styles.divider}>atau masuk dengan</div>

                        <div style={styles.socialContainer}>
                            <button type="button" style={styles.socialBtn}>Google</button>
                            <button type="button" style={styles.socialBtn}>Nomor HP</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
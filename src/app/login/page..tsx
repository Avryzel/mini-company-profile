'use client';

import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        document.cookie = "session_token=true; path=/; max-age=3600";
        window.location.href = '/dashboard';
    };

    return (
        <>
            <style jsx>{`
        .overlay {
          width: 100%;
          min-height: 100vh;
          background: rgba(255, 255, 255, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          background-image: url('/assets/images/backgrounds/bg3.jpg'); /* Pastikan path gambar benar di folder public */
          background-size: cover;
          background-position: center;
        }
        .back-btn {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 60px;
          height: 60px;
          background: #DFF9E8;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        .wrapper {
          display: flex;
          width: 850px;
          height: 520px;
          background: #DFF9E8;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }
        .left {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
        }
        .right {
          width: 50%;
          padding: 30px;
          background: white; /* Biar lebih kontras */
        }
        .input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border-radius: 10px;
          border: 1px solid #ddd;
          background: #eee;
        }
        .btn {
          width: 100%;
          padding: 14px;
          background: #22C55E;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-weight: bold;
          margin-top: 10px;
        }
        .btn:hover { background: #16A34A; }
        .divider { text-align: center; margin: 15px 0; font-size: 12px; color: #777; }
        .social { display: flex; justify-content: space-between; }
        .social button {
          width: 48%;
          padding: 10px;
          border-radius: 10px;
          border: 2px solid #22C55E;
          background: transparent;
          color: #22C55E;
          cursor: pointer;
        }
        .register { text-align: center; margin-top: 10px; font-size: 14px; }
      `}</style>

            <div className="overlay">
                <Link href="/" className="back-btn">
                    <img src="/assets/images/icons/panah.png" alt="back" style={{ width: '28px' }} />
                </Link>

                <div className="wrapper">
                    <div className="left">
                        <img src="/assets/images/icons/sampah5.png" alt="logo" style={{ width: '220px', marginBottom: '20px' }} />
                        <h1 style={{ color: '#14532d' }}>AVSA WASTE</h1>
                        <p style={{ color: '#555', fontSize: '14px' }}>
                            Solusi pengelolaan sampah pintar untuk lingkungan lebih bersih
                        </p>
                    </div>

                    <div className="right">
                        <h2 style={{ color: '#14532d' }}>Masuk ke akun Anda</h2>
                        <p style={{ fontSize: '13px', color: '#555', marginBottom: '20px' }}>
                            Gunakan nomor HP atau email yang terdaftar
                        </p>

                        <form onSubmit={handleLogin}>
                            <input className="input" placeholder="Nomor HP / Email" required />
                            <input className="input" type="password" placeholder="Password" required />
                            <button type="submit" className="btn">Masuk</button>
                        </form>

                        <div className="register">
                            Belum punya akun? <Link href="/register" style={{ color: '#22C55E', fontWeight: 'bold' }}>Daftar</Link>
                        </div>

                        <div className="divider">atau masuk dengan</div>

                        <div className="social">
                            <button>Google</button>
                            <button>Nomor HP</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
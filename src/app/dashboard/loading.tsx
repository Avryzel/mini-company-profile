export default function Loading() {
    return (
        <div style={{ padding: '100px 40px', background: '#F8FAFC', minHeight: '100vh' }}>
            <div style={{
                height: '40px',
                width: '300px',
                background: '#e2e8f0',
                borderRadius: '10px',
                marginBottom: '30px'
            }}></div>

            <div style={{ background: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                {[1, 2, 3].map((i) => (
                    <div key={i} style={{
                        height: '80px',
                        background: '#f1f5f9',
                        borderRadius: '15px',
                        marginBottom: '15px',
                        opacity: 0.6
                    }}></div>
                ))}
            </div>
        </div>
    );
}
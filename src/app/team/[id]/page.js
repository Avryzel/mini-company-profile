const teamData = [
    {
        id: 'alin',
        name: 'Aida Fitria',
        role: 'Ketua Kelompok',
        bio: 'Membangun antarmuka yang responsif dan mulus menggunakan ekosistem Next.js.'
    },
    {
        id: 'selsa',
        name: 'Selsa Trikartika',
        role: 'Anggota Kelompok',
        bio: 'Spesialis dalam menciptakan pengalaman visual yang estetik dan fungsional.'
    },
    {
        id: 'jel',
        name: 'Avryzel Alifian Hakim',
        role: 'Anggota Kelompok',
        bio: 'Fokus pada "Why" di balik setiap baris kode dan memastikan integritas struktural sistem.'
    }
];

export default async function TeamMemberPage({ params }) {
    const { id } = await params;
    const member = teamData.find((m) => m.id.toLowerCase() === id.toLowerCase());

    if (!member) {
        return <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-500 font-medium">Anggota tidak ditemukan.</div>;
    }

    return (
        <section className="min-h-screen bg-gray-100 pt-32 pb-24 px-6 flex flex-col justify-center">
            <div className="max-w-3xl mx-auto w-full">

                <div className="bg-white rounded-[32px] p-10 md:p-14 shadow-sm border border-gray-200">

                    <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                        <div className="w-32 h-32 bg-[#DFF9E8] rounded-full flex items-center justify-center text-[#16A34A] text-5xl font-bold shrink-0 border-4 border-white shadow-sm">
                            {member.name[0]}
                        </div>

                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                                {member.name}
                            </h1>
                            <p className="text-[#16A34A] font-bold uppercase tracking-widest text-sm">
                                {member.role}
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 pt-10 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3 justify-center md:justify-start">
                            <span className="w-2 h-8 bg-[#16A34A] rounded-full"></span>
                            Visi & Kontribusi
                        </h2>

                        <div className="relative bg-[#F0FDF4] rounded-2xl p-8 border border-green-100 shadow-inner">
                            <p className="relative z-10 leading-relaxed text-gray-700 text-xl font-light italic">
                                {member.bio}
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
export default function LatihanPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md border border-slate-200">
        
        {/* Header Judul Halaman */}
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Halaman Latihan & Formulir Aksesibel
        </h1>
        <p className="text-sm text-slate-600 mb-6">
          Praktik implementasi elemen form yang ramah pembaca layar (screen reader) dan navigasi papan ketik (keyboard).
        </p>

        {/* Contoh Formulir Aksesibel */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          
          {/* Input Nama Lengkap */}
          <div>
            <label 
              htmlFor="nama" 
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="nama" 
              name="nama" 
              required
              placeholder="Masukkan nama lengkap Anda"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-brand, #0284c7)] transition-all"
            />
          </div>

          {/* Input Email */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Alamat Email <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              placeholder="nama@email.com"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-brand, #0284c7)] transition-all"
            />
          </div>

          {/* Pilihan Modul Praktikum */}
          <div>
            <label 
              htmlFor="modul-pilihan" 
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Pilih Modul Praktikum
            </label>
            <select 
              id="modul-pilihan" 
              name="modul-pilihan"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-brand, #0284c7)] bg-white transition-all"
            >
              <option value="modul-1">Modul 1: Dasar HTML & CSS</option>
              <option value="modul-2">Modul 2: Responsive Design & Accessibility</option>
              <option value="modul-3">Modul 3: JavaScript Interactivity</option>
            </select>
          </div>

          {/* Tombol Kirim */}
          <button 
            type="submit"
            className="w-full bg-[var(--color-brand,#0284c7)] text-white font-medium py-2.5 px-4 rounded-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-sky-200 transition-all cursor-pointer"
          >
            Kirim Data Latihan
          </button>

        </form>

      </div>
    </main>
  );
}
## Instalasi
    1. Install vite
    2. Install axios
    3. Instal boostrap 5 -> untuk styling
    4. Install concurrently -> untuk menjalankan apps dan server secara bersamaan dalam satu terminal
    5. Install react router dom
    6. Install bootstrap icon: npm i bootstrap-icons

## Membuat Fake API
    1. Membuat file db.json
    2. Menjalankan perintah: npx json-server --watch fileName --port ...

## Setting package.json
    Pada package.json bagian scripts, tambahkan:     
    a. "server": "npx json-server --watch db.json --port 8080"
    b. "all": "concurrently \"npm run dev\" \"npm run server\""

    Note: Setting seperti di atas dilakukan agar server dan apps dapat dijalankan secara bersamaan dalam satu terminal. Saat menjalankan di terminal, ketikkan perintah: npm run all
    
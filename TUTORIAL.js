//! Penjelasan
/* 
state management digunakan untuk passing data ke komponen yang levelnya cukup dalam
seperti mengebor ke komponen yang paling dalam, padahal data yg di passing
hanya dipakai di komponen paling dalam

biasanya pakai react context, jadi data ditaruh di contex, lalu si komponen bisa akses
direct ke context tanpa lewat props, biasanya develpoer passing state juga pakai 
context sebagai value, walaupun context tidak ditujukan untuk state management

untuk library pihak ke tiga bisa membedakan komponen mana yang ke triger
semacam=> redux, jotai, recoil, zustand

zustand=> simple, ketika bikin store dengen zustand maka jadi hooks
kita bisa langsung pakai aja


*/

//! Install React pakai Vite
/* 
C:\Users\Lenovo\Documents\BELAJAR-CODING>npm create vite@latest
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
Need to install the following packages:
  create-vite@4.3.2
Ok to proceed? (y) y
√ Project name: ... react-zustand
√ Select a framework: » React
√ Select a variant: » JavaScript + SWC
Scaffolding project in C:\Users\Lenovo\Documents\BELAJAR-CODING\react-zustand...
Done. Now run:

  cd react-zustand
  npm install
  npm run dev 
*/

//! Membuat Store dengan Zustand
/* 
1. install zustand https://github.com/pmndrs/zustand
 - npm install zustand
2. buka App.jsx hapus isinya yang ga perlu
3. fungsinya diawali dengan useBlabla
4. import zustand
5. import { create } from "zustand";
6. buat const useAppStore
7. hapus dulu react strict mode di main.jsx biar tidak bingung untuk belajar
8. jadi yang ada di useAppStore bisa diakses di komponen manapun
*/

//!contoh dasar zustand
import { create } from "zustand";
import "./App.css";
const useAppStore = create((set) => ({
  count: 0,
  user: "henhen",
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));
function App() {
  const store = useAppStore();
  console.log(store);
  return (
    <div>
      <button onClick={store.decrease}>-</button>
      <span>Count: {store.count}</span>{" "}
      <button onClick={store.increase}>+</button>
    </div>
  );
}
export default App;

//! contoh selecting multiple state slices
/* 
1. buat folder stores di src
2. buat file app-store.js
3. pindahkan useAppStore ke app-store.js
4. function selector digunakan untuk memilih state yang akan diakses, jadi tidak semua state diakses
5. jadikan count sebagai component
6. buat component baru untuk user
7. ini contoh yang pakai selector
 //*jika ambil data tertentu dari store (lebih bagus dan efisien)
  const username = useAppStore((state) => state.username);
  const updateUsername = useAppStore((state) => state.updateUsername);
*/

//! diffed shallowly
/* 
1. untuk menyederhanakan kode yang mirip
2. diffed digunakan untuk compare array berdasarkan konten arraynya
3. tinggal import shallow
4. ini contohnya
*/
//* Cara shallow (rekomen) cocok untuk banyak value
const [count, decrease, increase] = useAppStore((state) => {
  console.log("executed count selector");
  return [state.count, state.decrease, state.increase];
}, shallow);

//! overwriting state
/* 
1. gunanya untuk clear state yang ada, dan hanya menyisakan state yang diinginkan
2. tinggal tambah true pada saat set
3. contoh   updateUsername: (username) => set({ username }, true),
*/

//! async actions
/* 
1. buat async yang sinkrounus
2. berguna ketika fetch data dari api, kemudian store data ke state store
3. buka app-store.js bikin user:{} untuk tampung data dari api
4. bikin getUser: async (username)=>{}
5. buat komponen User.jsx untuk menampilkan data dari api
*/

//! persist middleware
/* 
1. berguna untuk menyimpan value dari state ke local storage
2. cocok untuk menyimpan data user yang login
3. ketika di refresh data tidak hilang
4. agar tidak bingung keluarkan dulu appStore nya
5. lalu tambahkan persist setelah create
6. import { persist } from "zustand/middleware";
7. liat di app-store.js untuk contohnya
8. buka di inspect, lalu application, lalu local storage maka datanya akan tersimpan disitu
9. yang disimpan data saja bukan function
10. bisa di custom juga tinggal baca dokumentasi
*/

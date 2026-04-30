# Studi Kasus 1 - Booking Validation

## 1. Validasi Harga Booking
Test Objective:
Memastikan harga booking sesuai dengan jadwal venue

Pre-condition: Data master harga untuk Venue ID 15 pada jam 09:00 - 11:00 adalah 
Rp1.000.000

Steps:
1. Booking venue tanggal 2022-12-10
2. Pilih jam 09:00 - 11:00
3. Simpan booking

Expected Result:
Harga booking harus 1000000

---

## 2. Double Booking Validation
Test Objective:
Memastikan slot yang sama tidak dapat dibooking dua kali

Pre-condition: Sudah ada data booking (ID 1001) untuk Venue 15, Tanggal 2022-12-10, Jam 09:00 - 11:00.

Steps:
1. User pertama booking 09:00 - 11:00
2. User kedua booking slot yang sama

Expected Result:
Booking kedua ditolak

---

## 3. Slot Availability Validation
Test Objective:
Memastikan slot tidak tersedia setelah dibooking

Pre-condition: Booking ID 1001 sudah terdaftar (09:00 - 11:00)

Steps:
1. User booking slot
2. Cek slot yang sama

Expected Result:
Slot tidak tersedia
# Studi Kasus 1 - Booking Validation

## 1. Validasi Harga Booking
Test Objective:
Memastikan harga booking sesuai dengan jadwal venue

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

Steps:
1. User pertama booking 09:00 - 11:00
2. User kedua booking slot yang sama

Expected Result:
Booking kedua ditolak

---

## 3. Slot Availability Validation
Test Objective:
Memastikan slot tidak tersedia setelah dibooking

Steps:
1. User booking slot
2. Cek slot yang sama

Expected Result:
Slot tidak tersedia
import { test, expect } from '@playwright/test';

test.describe('Booking Validation', () => {

test('Validasi harga sesuai jadwal', async () => {

  const booking = {
    venue_id: 15,
    date: '2022-12-10',
    start_time: '09:00:00',
    end_time: '11:00:00',
    price: 1200000
  };

  const schedulePrice = 1000000;

  expect(booking.price).toBe(schedulePrice);

});


test('Tidak boleh double booking', async () => {

  const booking1 = {
    venue_id: 15,
    date: '2022-12-10',
    start_time: '09:00:00',
    end_time: '11:00:00'
  };

  const booking2 = {
    venue_id: 15,
    date: '2022-12-10',
    start_time: '09:00:00',
    end_time: '11:00:00'
  };

  const isSameSlot =
    booking1.venue_id === booking2.venue_id &&
    booking1.date === booking2.date &&
    booking1.start_time === booking2.start_time &&
    booking1.end_time === booking2.end_time;

  expect(isSameSlot).toBeFalsy();

});


test('Slot tidak tersedia setelah dibooking', async () => {

  const bookedSlots = [
    {
      venue_id: 15,
      date: '2022-12-10',
      start_time: '09:00:00',
      end_time: '11:00:00'
    }
  ];

  const newBooking = {
    venue_id: 15,
    date: '2022-12-10',
    start_time: '09:00:00',
    end_time: '11:00:00'
  };

  const isAvailable = !bookedSlots.some(slot =>
    slot.venue_id === newBooking.venue_id &&
    slot.date === newBooking.date &&
    slot.start_time === newBooking.start_time &&
    slot.end_time === newBooking.end_time
  );

  expect(isAvailable).toBeTruthy();

});

});
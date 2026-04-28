import { test, expect } from '@playwright/test';

test('detect double booking', async () => {

const bookings = [
{
id:1001,
venue_id:15,
date:"2022-12-10",
start:"09:00",
end:"11:00"
},
{
id:1005,
venue_id:15,
date:"2022-12-10",
start:"09:00",
end:"11:00"
}
];

const map = new Map();

for (const booking of bookings){

const key = `${booking.venue_id}-${booking.date}-${booking.start}-${booking.end}`;

if(map.has(key)){
throw new Error("Double booking detected")
}

map.set(key,booking)

}

expect(true).toBeTruthy()

});
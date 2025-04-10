import React from 'react'
import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';
import Stat from './Stat';

export default function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
    //1.
    const numBookings = bookings.length;
    console.log(numBookings, "bookings");
    //2. total sales
    const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

    //3.Total checkins
    const checkins = confirmedStays.length;

    //4. Occupancy
    const occupation = confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) / (numDays * cabinCount);

    //num checked in nights / all available nights (num days * num cabins)

    return (
        <>
            <Stat title="bookings" color="blue" icon={<HiOutlineBriefcase />} value={numBookings} />

            <Stat title="Sales" color="green" icon={<HiOutlineBanknotes />} value={formatCurrency(sales)} />

            <Stat title="Check ins" color="indigo" icon={<HiOutlineCalendarDays />} value={checkins} />

            <Stat title="Occupancy rate" color="yellow" icon={<HiOutlineChartBar />} value={Math.round(occupation * 100) + '%'} />

        </>
    )
}

export const Fees:feesType[] = [
    {
        id: 1,
        type: 'Students(UG/PG/PhD)',
        amount: 'INR 6000 / USD 69 ',
    },
    {
        id: 2,
        type: 'Members (Academia)',
        amount: 'INR 8000 / USD 92',
    },
    {
        id: 3,
        type: 'Members (Industry)',
        amount: 'INR 10000 / USD 115',
    },
    {
        id: 4,
        type: 'Foreign Participants',
        amount: 'INR 12000 / USD 138',
    },
    {
        id: 5,
        type: 'Academians/Industries Delegates',
        amount:'INR 5000 / USD 57'
    },
    {
        id: 6,
        type: 'Students Delegates',
        amount:'INR 4000 / USD 46'
    }


];

interface feesType{
    id: number,
    type: string,
    amount: string,
}

interface feesProps {
    fees:feesType[]
}
export const Fees:feesType[] = [
    {
        id: 1,
        type: 'Students(UG/PG/PhD)',
        amount: 'INR 6000',
    },
    {
        id: 2,
        type: 'Members (Academia)',
        amount: 'INR 8000',
    },
    {
        id: 3,
        type: 'Members (Industry)',
        amount: 'INR 10000',
    },
    {
        id: 4,
        type: 'Foreign Participants',
        amount: 'USD 138',
    },
    {
        id: 5,
        type: 'Academians/Industries Delegates',
        amount:'INR 50,000'
    },
    {
        id: 6,
        type: 'Students Delegates',
        amount:'INR 40,000'
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
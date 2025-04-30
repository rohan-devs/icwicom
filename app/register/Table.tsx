import React from 'react'

export function TypeTable({ heading, topics }: ParticipantsProps) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        {heading.map((item) => (
                            <th key={item} className="px-6 py-3 border-r border-gray-300 text-left">{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {topics.map((item, id) => (
                        <tr
                            key={id}
                            className="border-b  border-gray-300 hover:bg-gray-400 transition"
                        >
                            {/* <td className="px-6 py-3">{id + 1}</td> */}
                            <td className="px-6 py-3 border-r border-gray-300">{item.type}</td>
                            <td className="px-6 py-3">{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}



interface ParticipantsProps {
    topics: dataType[],
    heading: string[]
}

interface dataType {
    id: number,
    type: string,
    amount: string,
}


export function PaymentTable({ queries }: payment) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
                {queries.map((query) => (
                    <tr className="  border-b border-gray-300" key={query.id}>
                        <th className='px-6 py-3 border-r border-gray-300 text-left text-white bg-gray-800' >{query.query}</th>
                        <td className='px-6 py-3 border-r border-gray-300 '>{query.ans}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
};

interface payment {
    queries: paymentProps[]
}

interface paymentProps {
    id: number,
    query: string,
    ans: string,
};



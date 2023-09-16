const SingleOrder = ({ order }) => {
    const timeNow = new Date().toLocaleDateString();
return (

            <tr className="odd:bg-white even:bg-zinc-100">
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{timeNow}</td>
                <td className="border px-4 py-2">{order.title}</td>
                <td className="border px-4 py-2">{order.price} ₺</td>
                <td className="border px-4 py-2">Completed</td>
            </tr>


)

};

export default SingleOrder;
import { useNavigate } from 'react-router-dom';
import "../Home/Main.css";






const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 100 },
    { field: 'join ', headerName: 'Join Date', width: 130 },
    { field: 'total ', headerName: 'Total visit', width: 60 },
    { field: 'purchase', headerName: 'Purchase Item', width: 130 },
    { field: 'spend', headerName: 'Total Spend', width: 80 },






];


const rows = [
    { id: 1, name: 'Arlene McCoy', join: '1 feb 2021', total: '2', purchased: 'americano (10): Latte(8)cappuccino (14)', spend: '$490.51' },
    { id: 2, name: 'Arlene McCoy', join: '1 feb 2021', total: '2', purchased: 'americano (10): Latte(8)cappuccino (14)', spend: '$490.51' },
    { id: 3, name: 'Arlene McCoy', join: '1 feb 2021', total: '2', purchased: 'americano (10): Latte(8)cappuccino (14)', spend: '$490.51' },
    { id: 4, name: 'Arlene McCoy', join: '1 feb 2021', total: '2', purchased: 'americano (10): Latte(8)cappuccino (14)', spend: '$490.51' },
    { id: 5, name: 'Arlene McCoy', join: '1 feb 2021', total: '2', purchased: 'americano (10): Latte(8)cappuccino (14)', spend: '$490.51' },
    { id: 6, name: 'Arlene McCoy', join: '1 feb 2021', total: '2', purchased: 'americano (10): Latte(8)cappuccino (14)', spend: '$490.51' },
    { id: 7, name: 'Arlene McCoy', join: '1 feb 2021', total: '2', purchased: 'americano (10): Latte(8)cappuccino (14)', spend: '$490.51' },
    { id: 8, name: 'Arlene McCoy', join: '1 feb 2021', total: '2', purchased: 'americano (10): Latte(8)cappuccino (14)', spend: '$490.51' },
    { id: 9, name: 'Arlene McCoy', join: '1 feb 2021', total: '2', purchased: 'americano (10): Latte(8)cappuccino (14)', spend: '$490.51' },
    { id: 10, name: 'Arlene McCoy', join: '1 feb 2021', total: '2', purchased: 'americano (10): Latte(8)cappuccino (14)', spend: '$490.51' },


];

export default function DataTable() {
    let navigate = useNavigate();
    return (
         

        
        <div className='table'>
            

            <table onClick={() => navigate("/Table")}  >
                <tr>
                    <th>Id</th>
                    <th> Name </th>
                    <th> Join Date</th>
                    <th> Total visit</th>
                    <th>Purchased Item</th>
                    <th> Total Spend</th>



                </tr>
                {rows.map((val) => {
                    return <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.join}</td>
                        <td>{val.total}</td>
                        <td>{val.purchased} <a href='#'>Sea Details</a></td>
                        <td>{val.spend}</td>

                    </tr>
                })}



            </table>


        </div>
    );
}
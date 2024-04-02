import { useEffect } from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header';
import Dashboard from './Dashboard';
import { toast } from 'react-toastify';

const DashboardPage = () => {
    useEffect(() => {
        toast.success('Welcome to the Dashboard')
    }
    ,[]
    )

    return (
        <div className='d-flex ' style={{alignItems:'stretch'}}>
            <Navbar />
            <div className='d-flex flex-column'>
            <Header />
            <Dashboard />
            </div>
        </div>
    )
}

export default DashboardPage
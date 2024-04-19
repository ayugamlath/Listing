import axios from 'axios';
import Navbar from '../component/Navbar'
import Header from '../component/Header';
import Dashboard from './Dashboard';
import { toast } from 'react-toastify';
import Footer from '../component/Footer'
import { useState, useEffect,  } from 'react';


const DashboardPage = () => {

    const title = "asdasdssssssss";
  

    const [data, setData] = useState([])
    const [filteredData,setFilteredData] = useState([])

    const getData = async () => {
        try {
          const data = await axios.get('https://fakestoreapi.com/products');
          console.log(data.data);
          setData(data.data)
          setFilteredData(data.data)
        } catch (error) {
          toast.error('Error in fetching data');
          console.log(error);
        }
      }
    

    const filterData  = (t) => {
      console.log(t)
        const filtered = data.filter((item) => item.title.toLowerCase().includes(t.toLowerCase()));
        
        setFilteredData(filtered);
      
      }


    // useEffect(() => {
    //     toast.success('Welcome to the Dashboard')
    // }
    // ,[]
    // )
    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        setFilteredData([]);
    }, []);
    
    return (
        <div className='d-flex ' >
             <div>
                
             </div>
           
            <Navbar />
            
            <div className='d-flex flex-column'>
            <Header getInput={filterData} />
            <Dashboard  filteredData={filteredData} />
            <Footer></Footer>
            </div>
        </div>
    )
}

export default DashboardPage
import './App.css';

function App() {
  return (
    <div className="App-ui">


        <div className='Sidebar'>


        <i className="fa-regular fa-snowflake" id = 'onlyicon' ></i>
        <div className='sideContent'id ='dashtext'>
        <i className="fa-brands fa-windows windows" ></i>
        <p>Dashboard</p>
        </div>
        <div className='sideContent'>
        <i className="fa-brands fa-windows windows" ></i>
        <p>Customers</p>
        </div>
        <div className='sideContent'>
        <i className="fa-brands fa-windows windows" ></i>
        <p>Orders</p>
        </div>
        <div className='sideContent'>
        <i className="fa-brands fa-windows windows" ></i>
        <p>Settings</p>
        </div>
        <div className='sideContent'>
        <i className="fa-brands fa-windows windows" ></i>
        <p>Finance</p>
        </div>
        <div className='sideContent'>
        <i className="fa-brands fa-windows windows" ></i>
        <p>Stock</p>
        </div>
        <div className='sideContent'>
        <i className="fa-brands fa-windows windows" ></i>
        <p>Driver</p>
        </div>
        
        </div>


        <div className='main-content'>
            <div className='Navbar'>
                <div className='welcome'>
                <p className = "User">Hello Gathoni <i className="fa-solid fa-face-smile" ></i> </p>
           <p className='compliment'>Happy to see you back!</p>

                </div>
            
                <div className='searchbar'>
                <i className="fa-regular fa-magnifying-glass" id = "searchIcon" ></i>
                <input type='text' placeholder='search'/>
                
                </div>
            

           


            </div>

        </div>
     
    </div>
  );
}

export default App;

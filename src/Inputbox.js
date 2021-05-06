import './Inputbox.css';

const Inputbox = ({Inputbox,searchChange,date,days,hours,mins,secs}) => {
    return(
        <div className="display">
            <h3>Timer ends on {date} </h3>
            <h1>{days}-Days {hours}-Hours {mins}-Mins {secs}-Secs </h1>
            <div>
                <input type="date" placeholder="01 January, 2020(format)" onChange={searchChange}/>
                <button onClick={Inputbox}>submit</button>
            </div>
            
        </div>
    )
}

export default Inputbox;
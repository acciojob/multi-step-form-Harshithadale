import React from 'react'

function Step({ind,setInd}) {
  return (
    <form id={`step${ind}`}>
        {
            ind === 1 && (
                <>
                    <h1>Customer Details</h1>
                    <label>First Name</label>
                    <input type="text" id="first_name"/>
                    <br/>
                    <label>Last Name</label>
                    <input type="text" id="last_name"/>
                    <br/>
                    <button type="button" onClick={()=>setInd(prev=>prev+1)}>Next</button>
                </>
            )
        }
        {
            ind == 2 && (<>
                <h1>Car Details</h1>
                <label>Price:</label>
                <input id="car_price"/>
                <br/>
                <label>Model:</label>
                <input id="model"/>
                <br/>
                <button type="button" onClick={()=>setInd(prev=>prev-1)}>Previous</button>
                <button type="button" onClick={()=>setInd(prev=>prev+1)}>Next</button>
            </>)
        }
        {
            ind === 3 && (<>
                <h1>Payment Details</h1>
                <label>Credit card Number:</label>
                <input id="card_info" type="number"/>
                <br/>
                <label>Expiry Date:</label>
                <input type='date' id="expiry_date"/>
                <br/>
                <button type="button" onClick={()=>setInd(prev=>prev+1)}>Previous</button>
                <button type="button" onClick={()=>setInd(prev=>1)}>Submit</button>
            </>)
        }
    </form>
  )
}

export default Step
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { themeContext } from "../../context/ThemeContext";
function List_Appointment(props) {
    const [data, setData] = useState([]);
    const history = useHistory()

    let getData = () => {
        let localData = JSON.parse(localStorage.getItem("bookApt"))
        if(localData !== null){
            setData(localData)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("bookApt"));

        let fData = localData.filter((l) => l.id !== id)

        localStorage.setItem("bookApt", JSON.stringify(fData))

        console.log(id, localData);
        getData()
    }
    const handleEdit = (id)=>{
        history.push('/appointment' , {id:id}) 
        console.log(id);
    }
  
    const value = useContext(themeContext);
    return (
        <div>
            <main id="main">
                <section id="appointment"  className={` appointment ${value.theme}`}>
                    <div className="container">
                        <div className="section-title">
                            <h2>List An Appointment</h2>
                            <div className='row'>
                                <div className='col-6'>
                                    <NavLink to={'/appointment'} exact>Book An Appointment</NavLink>
                                </div>
                                <div className='col-6'>
                                    <NavLink to={'/list_appointment'} exact>List An Appointment</NavLink>
                                </div>
                            </div>
                        </div>
                        <div>{
                            data.map((d, i) => {
                                return (
                                    <Card key={i}>
                                        <CardBody>
                                            <CardTitle tag="h5">
                                                {d.name}
                                            </CardTitle>
                                            <CardSubtitle className="mb-2 text-muted" tag="h6" >
                                                {d.date}
                                            </CardSubtitle>
                                            {/* <CardSubtitle className="mb-2 text-muted" tag="h6" >
                                                {d.email}
                                            </CardSubtitle>
                                            <CardSubtitle className="mb-2 text-muted" tag="h6" >
                                                {d.phone}
                                            </CardSubtitle>
                                            <CardSubtitle className="mb-2 text-muted" tag="h6" >
                                                {d.department}
                                            </CardSubtitle> */}
                                            <Button onClick={()=>handleEdit(d.id)}> Edit </Button>
                                            <Button onClick={() => handleDelete(d.id)}> Delete </Button>
                                        </CardBody>
                                    </Card>
                                )
                            })
                        }

                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
export default List_Appointment;






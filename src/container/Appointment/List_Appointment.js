import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
function List_Appointment(props) {
    const [data, setData] = useState([]);
    const history = useHistory()

    let getData = () => {
        let localData = JSON.parse(localStorage.getItem("bookApt"))
        setData(localData)
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
        // console.log(id);
    }
    return (
        <div>
            <main id="main">
                <section id="appointment" className="appointment">
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
                                            <CardSubtitle
                                                className="mb-2 text-muted"
                                                tag="h6"
                                            >
                                                {d.date}
                                            </CardSubtitle>
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






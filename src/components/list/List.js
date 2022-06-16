import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';


function List({ data , getid }) {
    return (
        <div>
            {
                data.map((o, i) => {
                    return (
                        <Card key={i}>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {o.name}
                                </CardTitle>

                                {
                                    o.expiry !== undefined ?
                                        <CardText> {o.expiry} </CardText>
                                        :
                                        null
                                }
                                <CardText> {o.price }</CardText>

                                <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
                                    <Button onClick={()=>getid(o.id)}>click here</Button>
                            </CardBody>
                        </Card>
                    )
                })
            }
        </div>
    );
}

export default List;
import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';


function List({data}) {
    return (
        <div>
            {
                data.map((o, i) => {
                    return (
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {o.name}
                                </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    {o.id}
                                </CardSubtitle>
                                <CardText> {o.expiry} </CardText>
                                <CardText> {o.price} </CardText>
                            </CardBody>
                        </Card>

                    )
                })
            }
        </div>
    );
}

export default List;
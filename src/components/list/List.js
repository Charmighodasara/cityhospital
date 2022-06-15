import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';


function List({ data }) {
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
                                {
                                    o.expiry !== undefined ?
                                        <CardText> {o.expiry} </CardText>
                                        :
                                        null
                                }
                                <CardText> {o.price} </CardText>
                                {/* <Button color="dark" outline onClick={()=>click()}> Button </Button> */}
                            </CardBody>
                        </Card>

                    )
                })
            }
        </div>
    );
}

export default List;
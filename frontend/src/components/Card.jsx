import React from 'react'
import Card from '@material-ui/core/Card';
import  CardHeader  from '@material-ui/core/CardContent';
 import FB from "../components/FB.png"

function card() {
    return (
        <div>
            <Card>
                <CardHeader  
                action = {
                    <img src= {FB} />

                }
                title = "Google"
                subheader= "15245"
                
                />
            </Card>
        </div>
    )
}

export default card

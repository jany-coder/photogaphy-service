import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ServiceCard(props) {
    const { name, img, price, id } = props.data;
    const classes = useStyles();

    const history = useHistory();

    const serviceDetails = () => {
        history.push(`/serviceDetails/${id}`);
    }

    const handleCheckout = () => {
        history.push(`/dashboard/${id}`);
    }

    return (
        <div className="mt-2">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={img}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="h6" color="primary" component="h1">
                            Price: {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {props.viewMore &&  <Button onClick={serviceDetails} size="small" color="primary">
                        View More
                    </Button> }
                    {props.viewMore ? 
                    <Button onClick={handleCheckout} size="small" color="primary">
                        Buy Now
                    </Button> : 
                        <Link to="/home">Back</Link>}
                </CardActions>
            </Card>
        </div>
    );
}
import React from 'react'
import Collapse from '@mui/material/Collapse';
import Card from "@mui/material/Card";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Drop(props) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Card className="card">
      
      <CardActions disableSpacing>
      <Typography className='typography'>
        <h3 className='card-heading'>{props.heading}</h3>
       </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
        <div className='modal'>
          <table>
            <tr>
              <th>Rid</th>
              <th>Name</th>
              <th>Skill</th>
              <th>Time</th>
              <th>Time</th>
              <th>Handler</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>1234</td>
              <td>Shreyaan Daga</td>
              <td>Python</td>
              <td>12 dec</td>
              <td>silla</td>
              <td>Notified</td>
              <td>None</td>
            </tr>
          </table>
        </div>
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
      
    </>
  )
}

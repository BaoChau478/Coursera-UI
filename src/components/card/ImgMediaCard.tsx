import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "../../assets/logo.png"

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={logo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SSL101c
        </Typography>
        <Typography variant="body2">
          Knowledge: Understand  <br />
          - Method to develop your Information & Digit
          Literacy Skills  <br />- Method to develop your Problem Solving and
          Creativity Skills  <br />- How to develop your Critical Thinking Skills  <br />- How
          to develop your Communication Skills Others: (ABET) <br />- Improve study
          skills (academic reading, information searching, ...)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">SSL101c</Button>
        <Button size="small">Mua ngay</Button>
      </CardActions>
    </Card>
  );
}

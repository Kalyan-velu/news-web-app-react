import React from 'react'
import { Grid} from "@mui/material";
import Button from "@mui/material/Button";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Article = ({item}) => {

   const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body1,
		padding: theme.spacing(2),
		// textAlign: 'center',
		color: theme.palette.text.secondary,
		margin:theme.spacing(1)
	 }));

  return (
   <Grid xs={12} md={6} lg={4}>					
   <Item  >
   <div className="newsCard">
      <img alt={item.title} src={item.urlToImage}style={{width: '100%',borderRadius:"0.4rem"}}/>
   </div>
   <div>
   <h1 style={{fontSize: 18}}>
      {item.title}
      <p style={{
         display: "flex",
         flexDirection: "flex-end",
         fontSize: 8
      }}>{item.publishedAt}</p>
   </h1>
   <p style={{
      display: "grid",
      justifyContents: "spaceAround",
      padding: 10,
      wordWarp: "lineBreak"
   }}>{item.content}</p>
   <Button href={item.url}>Visit Site</Button>
   </div>
   </Item>
</Grid>
  )
}

export default Article
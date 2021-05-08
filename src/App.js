import React,{useEffect} from 'react'
import {Container, AppBar,Typography,Grow,Grid, formatMs} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'
import {getPosts} from './actions/posts'
// import {moments} from './images/moments-logo.png'
const App = () => {
const classes = useStyles()
const dispatch = useDispatch()

useEffect(() => {
    dispatch(getPosts())

},[dispatch])
    return (
<Container maxidth="lg"> 
    <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center" >moments</Typography>
        {/* <img src={moments} alt='moments' height="60"/> fontSize='3rem'*/}
    </AppBar>
    <Grow in>
        <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
            <Posts/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form/>
                    </Grid>
            </Grid>
        </Container>
    </Grow>
</Container>
    )
}

export default App

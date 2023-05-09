import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia,Button, Typography } from '@material-ui/core'
import useStyles from './styles.js'
import classNames from 'classnames'

const NewsCard = ({ article: {description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
    const classes = useStyles();
  
    return (
    <Card className={classNames(classes.card, activeArticle === i? classes.activeCard : null)}>
        <CardActionArea href={url} target="_blank">
            <CardMedia className={classes.media} image={urlToImage || 'https://media.istockphoto.com/id/1351440359/vector/megaphone-with-breaking-news-speech-bubble-banner-loudspeaker-label-for-business-marketing.jpg?s=612x612&w=0&k=20&c=o2Q3N327CD_YdTjXqQ5cP2MW7rNHWDRD33ZO7iFA9QE='}/>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary' component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                <Typography variant='body2' color='textSecondary' component="h2">{source.name}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
            <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>{description}</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
            <Button size='small' color='primary'>Learn More</Button>
            <Typography variant='h5' color='textSecondary'>{i+1}</Typography>
        </CardActions>
    </Card>
  )
}

export default NewsCard
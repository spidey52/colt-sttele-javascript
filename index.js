var movie = [
    {
        title: "son of sardar",
        rating: "3.4",
        hasWatched: true
    },
    {
        title: "life of pi",
        rating: "4.5",
        hasWatched: false
    },
    {
        title: "super 30",
        rating: "4.1",
        hasWatched: true
    }
]

for (let i=0; i<movie.length; i++){
    if (movie[i].hasWatched){
        console.log(`you have watched ${movie[i].title} - ${movie[i].rating} stars.`)
    }else{
        console.log(`you have not watched ${movie[i].title} - ${movie[i].rating} stars.`)
    }
}
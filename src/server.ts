import app from './app';

const startServer = ()=> {
    const PORT = 3030;

    app.listen(PORT, ()=>{
        console.log(`App is running on port ${PORT}`);
    })
}

startServer();
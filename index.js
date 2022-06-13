const app = require('./src/app');

app.listen(app.get('port'), () => {
    console.log('server listen:', app.get('port'));
});
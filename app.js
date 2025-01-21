const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
// Liste des navigateurs
const navigateurs = ['Firefox', 'Brave', 'Chrome', 'Safari', 'Edge', 'Opera'];

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/index');
const choixRouter = require('./routes/choix');
const aproposRouter = require('./routes/apropos');
const navigateursRouteur = require('./routes/navigateurs');

app.use('/', indexRouter);
app.use('/choix', choixRouter);
app.use('/apropos', aproposRouter);
app.use('/navigateurs', navigateursRouteur);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from 'express';

const app = express();
const PORT = 3000;

app.get('/api/:date?', (req, res) => {
    const { date } = req.params;
    
    const parsedDate = date ? new Date(date) : new Date();

    if (isNaN(parsedDate.getTime())) {
        res.json({ error: 'Invalid Date' });
    } else {
        // Si la fecha es válida, devuelve el timestamp en formato Unix y UTC
        res.json({
            unix: parsedDate.getTime(),
            utc: parsedDate.toUTCString()
        });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/:date?', (req, res) => {
    const { date } = req.params;

    let parsedDate;
    if (date) {
        // Si se proporciona una cadena de fecha, intenta convertirla a Date
        parsedDate = new Date(date);
        // Si la fecha es un timestamp válido, convierte a Date
        if (isNaN(parsedDate.getTime()) && !isNaN(Number(date))) {
            parsedDate = new Date(Number(date));
        }
    } else {
        // Si no se proporciona fecha, obtén la fecha actual
        parsedDate = new Date();
    }

    if (isNaN(parsedDate.getTime())) {
        res.json({ error: 'Invalid Date' });
    } else {
        // Devuelve el timestamp en formato Unix y UTC
        res.json({
            unix: parsedDate.getTime(),
            utc: parsedDate.toUTCString()
        });
    }
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Servidor iniciado en el puerto ${PORT}`);
    });
}

export default app;

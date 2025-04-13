const net = require('net');
const express = require('express');
const app = express();
const port = process.env.PORT || 10000;
const yeelightIP = process.env.YEELIGHT_IP || '192.168.1.26';

// Configuración para permitir CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.json());
app.use(express.static('.')); // Sirve archivos estáticos como el HTML

// Función para mantener el servidor activo
function keepAlive() {
    console.log('Servidor activo...');
    setTimeout(keepAlive, 30000); // Verificar cada 30 segundos
}

// Ruta para verificar el estado del servidor
app.get('/status', (req, res) => {
    res.json({ 
        status: 'active',
        yeelightIP: yeelightIP,
        server: 'Render'
    });
});

app.post('/command', (req, res) => {
    const command = req.body;
    console.log('Comando recibido:', JSON.stringify(command));

    const client = new net.Socket();
    
    client.connect(55443, yeelightIP, () => {
        console.log('Conectado a la tira');
        client.write(JSON.stringify(command) + '\r\n');
    });

    client.setTimeout(2000);

    client.on('data', (data) => {
        const response = data.toString();
        console.log('Respuesta de la tira:', response);
        res.json({ response });
        client.destroy();
    });

    client.on('error', (err) => {
        console.error('Error en la conexión:', err.message);
        res.status(500).json({ error: err.message });
        client.destroy();
    });

    client.on('timeout', () => {
        console.error('Timeout al conectar con la tira');
        res.status(504).json({ error: 'Timeout al conectar con la tira' });
        client.destroy();
    });

    client.on('close', () => {
        console.log('Conexión cerrada');
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    console.log(`Conectando a Yeelight en ${yeelightIP}`);
    keepAlive();
});
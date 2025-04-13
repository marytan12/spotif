const net = require('net');
const express = require('express');
const app = express();
const port = process.env.PORT || 10000;
const yeelightIP = process.env.YEELIGHT_IP || '192.168.1.26';

// Configuración para permitir CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
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
    console.log('Solicitud de estado recibida');
    res.json({ 
        status: 'active',
        yeelightIP: yeelightIP,
        server: 'Render',
        timestamp: new Date().toISOString()
    });
});

app.post('/command', (req, res) => {
    const command = req.body;
    console.log('Comando recibido:', JSON.stringify(command));

    const client = new net.Socket();
    let timeoutId;
    
    // Configurar timeout para la conexión
    timeoutId = setTimeout(() => {
        console.error('Timeout al conectar con la tira LED');
        client.destroy();
        res.status(504).json({ 
            error: 'Timeout al conectar con la tira LED',
            status: 'timeout',
            timestamp: new Date().toISOString()
        });
    }, 5000); // 5 segundos de timeout

    client.connect(55443, yeelightIP, () => {
        console.log('Conectado a la tira LED');
        clearTimeout(timeoutId);
        client.write(JSON.stringify(command) + '\r\n');
    });

    client.on('data', (data) => {
        const response = data.toString();
        console.log('Respuesta de la tira LED:', response);
        clearTimeout(timeoutId);
        res.json({ 
            response,
            status: 'success',
            timestamp: new Date().toISOString()
        });
        client.destroy();
    });

    client.on('error', (err) => {
        console.error('Error en la conexión:', err.message);
        clearTimeout(timeoutId);
        res.status(500).json({ 
            error: err.message,
            status: 'error',
            timestamp: new Date().toISOString()
        });
        client.destroy();
    });

    client.on('close', () => {
        console.log('Conexión cerrada');
        clearTimeout(timeoutId);
    });
});

// Ruta para el favicon
app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    console.log(`Conectando a Yeelight en ${yeelightIP}`);
    keepAlive();
});
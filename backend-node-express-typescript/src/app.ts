import Server from './server';

process.env.TZ = 'America/Sao_Paulo';

const server = new Server();

function normalizePort (val: string, defaultPort: number): number {
  const port = Number.parseInt(val, 10);
  if (Number.isNaN(port)) {
    return defaultPort;
  }
  if (port >= 0) {
    return port;
  }
  return defaultPort;
}

const port = normalizePort(process.env.PORT || '', 8000);

function onError (error: any): void {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
}

server.startHttp(port); // Ambiente de Desenvolvimento

server.express.on('error', onError);

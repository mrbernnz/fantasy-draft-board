import debug from 'debug';

const BASE = 'fantasy draft board';
const COLORS = {
  trace: 'blue',
  info: 'green',
  warn: 'yellow',
  error: 'red'
};

const generateMessage = (level, message, component) => {
  const namespace = `${BASE}:${level}`;
  const createDebug = debug(namespace);

  createDebug.enabled = true;
  createDebug.color = COLORS[level];

  component ? createDebug(message, component) : createDebug(message);
};

const trace = (message, component) => ({
  trace() {
    return generateMessage('trace', message, component);
  }
});

const info = (message, component) => ({
  info() {
    return generateMessage('info', message, component);
  }
});

const warn = (message, component) => ({
  warn() {
    return generateMessage('warn', message, component);
  }
});

const error = (message, component) => ({
  error() {
    return generateMessage('error', message, component);
  }
});

const Logger = (message, component) => {
  return {
    ...trace(message, component),
    ...info(message, component),
    ...warn(message, component),
    ...error(message, component)
  };
};

export default Logger;

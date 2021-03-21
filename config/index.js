import devEnv from './dev.env';
let result = {};

if (process.env.NODE_ENV == 'development') {
  result = devEnv;
}

export default result

function validator(obj) {
  const metods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  const urliTest = /(^[\w.]+$)/;
  const messageTest = /([<>\\&'"])/;
  if (!obj.method || !metods.includes(obj.method)) {
    throw new Error('Invalid request header: Invalid Method');
  }

  if (!obj.uri || obj.uri == "" || !urliTest.test(obj.uri)) {
    throw new Error('Invalid request header: Invalid URI');
  }

  if (!obj.version || !versions.includes(obj.version)) {
    throw new Error('Invalid request header: Invalid Version');
  }

  if (obj.message == undefined || messageTest.test(obj.message)) {
    throw new Error('Invalid request header: Invalid Message');
  }
  return obj;
}


let obj = {
  method: 'POST',
  uri: 'home.bash',
  version: 'HTTP/2.0'
};

console.log(validator(obj))

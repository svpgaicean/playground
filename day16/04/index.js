// timeout_vs_immediate (non I/O cycle)
setTimeout(() => console.log("setTimeout"));
setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("setTimeout"));
setImmediate(() => console.log("setImmediate"));

module.exports = async function (context, req) {
    var s='';
  
    for (var i=0;i<100000;i++) {
      s+=require("crypto")
      .createHash("sha256")
      .update("Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!Man oh man do I love node!")
      .digest("hex");
    }
    context.res.status(200).send(require("crypto")
    .createHash("sha256")
    .update(s)
    .digest("hex"));
  
  }
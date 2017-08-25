// Images.weserv.nl is an image cache & resize proxy.
//  知乎图片防盗链

exports.replaceUrl = (srcUrl) => {
  return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
};




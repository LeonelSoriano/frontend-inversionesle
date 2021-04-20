import ENV from '../config/environment';

export default class Img {
  findUserImg(token, cb) {
    fetch(ENV.APP.endPointBackend + ENV.APP.URL_USER_IMG, {
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      res.blob().then((rBlob) => {
        const urlCreator = window.URL || window.webkitURL;
        const imageUrl = urlCreator.createObjectURL(rBlob);
        cb(imageUrl);
      });
    });
  }
}

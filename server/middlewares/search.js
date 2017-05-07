const superagent = require('superagent');
const cheerio = require('cheerio');

const spider = (string, type) => new Promise((resolve, reject) => {
  superagent.get(`http://m.wufazhuce.com/${type}?searchString=${string}`)
    .end((error, result) => {
      if (error) {
        reject(error);
      }
      const $ = cheerio.load(result.text);
      const items = [];
      switch (type) {
        case 'search': {
          $('.item-text').each((index, element) => {
            const date = $(element).find('.date').text();
            const title = $(element).find('.text-title').text().replace(/(\s+)(.*)/, '');
            const author = $(element).find('.text-author').text();
            const essayId = $(element).find('.div-link').attr('href').match(/\d+/g)[0];
            const content = $(element).find('.text-content-short').html();
            items.push({
              date,
              title,
              author,
              essayId,
              content,
            });
          });
          resolve(items);
          break;
        }
        case 'searchPic': {
          $('.item-picture').each((index, element) => {
            const date = $(element).find('.date').text();
            const picUrl = $(element).find('.item-picture-img').attr('src');
            const author = $(element).find('.text-author').text();
            const oneId = $(element).find('.div-link').attr('href').match(/\d+/g)[0];
            const content = $(element).find('.text-content-short').text();
            items.push({
              date,
              picUrl,
              author,
              oneId,
              content,
            });
          });
          resolve(items);
          break;
        }
        case 'searchQue': {
          $('.item-text').each((index, element) => {
            const date = $(element).find('.date').text();
            const title = $(element).find('.text-title').text().replace(/(\s+)(.*)/, '');
            const author = $(element).find('.text-author').text();
            const questionId = $(element).find('.div-link').attr('href').match(/\d+/g)[0];
            const content = $(element).find('.text-content-short').html();
            items.push({
              date,
              title,
              author,
              questionId,
              content,
            });
          });
          resolve(items);
          break;
        }
        case 'searchThing': {
          $('.item-picture').each((index, element) => {
            const date = $(element).find('.date').text();
            const title = $(element).find('.text-title').text();
            const thingId = $(element).find('.div-link').attr('href').match(/\d+/g)[0];
            const picUrl = $(element).find('.item-picture-img').attr('src');
            items.push({
              date,
              title,
              thingId,
              picUrl,
            });
          });
          resolve(items);
          break;
        }
        default: {
          resolve(items);
          break;
        }
      }
    });
});

module.exports = (req, res, next) => {
  const items = {
    reading: [], // 阅读
    picture: [], // 图片
    question: [], // 问答
    thing: [], // 东西
  };
  const searchString = req.params.searchString;
  Promise.all([
    spider(searchString, 'search'), // 阅读
    spider(searchString, 'searchPic'), // 图片
    spider(searchString, 'searchQue'), // 问答
    spider(searchString, 'searchThing'), // 东西
  ])
    .then((json) => {
      items.reading = json[0];
      items.picture = json[1];
      items.question = json[2];
      items.thing = json[3];
      res.send({
        res: 0,
        data: items,
      });
      return next();
    })
    .catch((error) => {
      res.send({
        res: 1,
        msg: error,
      });
      return next(error);
    });
};

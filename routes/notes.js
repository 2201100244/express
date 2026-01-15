var express = require('express');
var router = express.Router();

const responseObjectDataAll = {
  textObject1 : {
    id: 1,
    title: 'ノート1のタイトルです',
    subTitle: 'ノート1のサブタイトルです',
    bodyText: 'ノート1の本文です'
  },
  textObject2 : {
    id: 2,
    title: 'ノート2のタイトルです',
    subTitle: 'ノート2のサブタイトルです',
    bodyText: 'ノート2の本文です'
  },
};

router.get('/', (req,res,next) =>
  res.json(responseObjectDataAll)
)

module.exports = router;

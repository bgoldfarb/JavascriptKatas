export default (wordFile) => {
  const splitByWords  = (text) => text.split(/\s+/)
  let wordArray = splitByWords(wordFile)


  const createWordMap = (wordsArray) => {
      let wordsMap = {};
      wordsArray.filter((key) => {
        if (wordsMap.hasOwnProperty(key)) {
          return wordsMap[key]++;
        } else {
          return wordsMap[key] = 1;
        }
      })
      return wordsMap;
  }

  const sortByCount = (wordsMap) => {
      let finalWordsArray = [];
      finalWordsArray = Object.keys(wordsMap).map((key) => {
        return {
          name: key,
          total: wordsMap[key]
        };
      });

      //sorting in descending order
      finalWordsArray.sort((a, b) => {
        return b.total - a.total;
      });
      return finalWordsArray;
    }

  let wordMap = createWordMap(wordArray)
  let sortedWordMap = sortByCount(wordMap)
  return sortedWordMap

}



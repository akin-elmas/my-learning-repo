// Task 1: Translate the story into code.

const onMyBirthday = (isKayoSick) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isKayoSick) {
        resolve(1);
      } else {
        reject(new Error('I am sad'));
      }
    }, 2000);
  });
};

onMyBirthday(false)
  .then((result) => {
    console.timeLog('Timer');

    console.log(`I have ${result} cakes`);
  })
  .catch((error) => {
    console.log(error);
  }).finally(() => {
    console.log("Party");
  })

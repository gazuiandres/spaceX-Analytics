import general from "./general";
import falcon9 from "./falcon9";
import falconHeavy from "./falconHeavy";

(async () => {
  Promise.allSettled([general(), falcon9(), falconHeavy()])
    .then(() => {
      console.log("SCRAPPER SUCCESS");
    })
    .catch((err) => {
      console.log(err);
    });
})();

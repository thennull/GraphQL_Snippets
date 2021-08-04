exports.fakeDB = function (request) {
  console.log(request);
  var { source, target } = request;

  // Objects DB
  var db = {
    humanObj: {
      100: {
        name: "Luke Skywalker",
        appearsIn: ["JEDI", "NEWHOPE", "EMPIRE"],
        starships: [{ name: "Millenium Falcon", length: 150.0 }],
      },
      200: {
        name: "R2-D2",
        appearsIn: ["JEDI", "NEWHOPE"],
        starships: [
          { name: "Millenium Falcon", length: 150.0 },
          { name: "Imperial Cruiser", length: 450.0 },
        ],
      },
      300: {
        name: "C-3PO",
        appearsIn: ["JEDI", "NEWHOPE", "EMPIRE"],
        starships: [{ name: "Millenium Falcon", length: 150.0 }],
      },
    },

    starships: {
      millenium: {
        name: "Millenium Falcon",
        length: 150.0,
      },
      imperialDestroyer: {
        name: "Imperial Cruiser",
        length: 450.0,
      },
      jediDestroyer: {
        name: "Jedi Cruiser",
        length: 350.0,
      },
    },
  };

  var delay = Math.round(Math.random() + 500);
  return new Promise(function (res, rej) {
    setTimeout(function () {
      let result = db[source][target];
      if (result) res(result);
      else rej(new Error("Not Found"));
    }, delay);
  });
};

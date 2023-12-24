dataSetVersion = "2023-12-23"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Trails in the sky FC", tooltip: "01 - sora no kiseki FC", key: "FC" },
      { name: "Trails in the sky SC", tooltip: "02 - sora no kiseki SC", key: "SC" },
      { name: "Trails in the Sky the 3rd", tooltip: "03 - sora no kiseki 3rd", key: "3rd" },
      { name: "Trails from Zero", tooltip: "04 - zero no kiseki", key: "Zero" },
      { name: "Trails to Azure", tooltip: "05 - AO no kiseki", key: "AO" },
      { name: "Trails of Cold Steel", tooltip: "06 - Sen no kiseki", key: "CS1" },
      { name: "Trails of Cold Steel II", tooltip: "07 - Sen no kiseki II", key: "CS2" },
      { name: "Trails of Cold Steel III", tooltip: "08 - Sen no kiseki III", key: "CS3" },
      { name: "Trails of Cold Steel IV", tooltip: "09 - Sen no kiseki IV", key: "CS4" },
      { name: "Trails into Reverie ", tooltip: "10 - Hajimari no kiseki", key: "Haji" },
      { name: "Trails through Daybreak", tooltip: "11 - Kuro no kiseki", key: "Kuro" },
    ]
  },
  {
    name: "Remove NPCs",
    key: "NPC",
    tooltip: "Check this to remove all non-playable characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Estelle Bright",
    img: "Estelle_Bright.png",
    opts: {
      series: ["FC", "SC", "3rd", "Zero", "AO", "CS4", "Haji"]
    }
  },
  {
    name: "Joshua Bright",
    img: "Joshua_Bright.png",
    opts: {
        series: ["FC", "SC", "3rd", "Zero", "AO", "CS4", "Haji"]   
    }
  },
  {
    name: "Scherazard Harvey",
    img: "Scherazard_Harvey.png",
    opts: {
      series: ["FC", "SC", "3rd", "CS4", "Haji"]
    }
  },
  {
    name: "Olivert Reise Arnor",
    img: "Olivert_Reise_Arnor.png",
    opts: {
      series: ["FC", "SC", "3rd", "AO", "CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Klaudia von Auslese",
    img: "Klaudia_von_Auslese.png",
    opts: {
      series: ["FC", "SC", "3rd", "AO", "CS4"]
    }
  },
  {
    name: "Agate Crosner",
    img: "Agate_Crosner.png",
    opts: {
      series: ["FC", "SC", "3rd", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Tita Russell",
    img: "Tita_Russell.png",
    opts: {
      series: ["FC", "SC", "3rd", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Zin Vathek",
    img: "Zin_Vathek.png",
    opts: {
      series: ["FC", "SC", "3rd", "Kuro"]
    }
  },
  {
    name: "Cassius Bright",
    img: "Cassius_Bright.png",
    opts: {
      series: ["FC", "SC", "3rd", "CS4"],
      NPC: true
    }
  },
  {
    name: "Kevin Graham",
    img: "Kevin_Graham.png",
    opts: {
      series: ["SC", "3rd", "AO"]
    }
  },
  {
    name: "Ries Argent",
    img: "Ries_Argent.png",
    opts: {
      series: ["3rd", "AO"]
    }
  },
  {
    name: "Renne",
    img: "Renne_Bright.png",
    opts: {
      series: ["SC", "3rd", "Zero", "AO", "CS4", "Haji", "Kuro"]
    }
  },
  {
    name: "Josette Capua",
    img: "Josette_Capua.png",
    opts: {
      series: ["FC", "SC", "3rd", "CS3", "CS4", "Haji"]
    },
  },
  {
    name: "Anelace Elfead",
    img: "Anelace_Elfead.png",
    opts: {
      series: ["FC", "SC", "3rd"]
    }
  },
  {
    name: "Julia Schwarz",
    img: "Julia_Schwarz.png",
    opts: {
      series: ["FC", "SC", "3rd", "AO"]
    }
  },
  {
    name: "Mueller Vander",
    img: "Mueller_Vander.png",
    opts: {
      series: ["FC", "SC", "3rd", "AO", "CS2"]
    }
  },
  {
    name: "Alan Richard",
    img: "Alan_Richard.png",
    opts: {
      series: ["FC", "SC", "3rd"]
    }
  },
  {
    name: "Lloyd Bannings",
    img: "Lloyd_Bannings.png",
    opts: {
      series: ["Zero", "AO", "CS2", "CS4", "Haji"]
    }
  },
  {
    name: "Elie MacDowell",
    img: "Elie_MacDowell.png",
    opts: {
      series: ["Zero", "AO", "CS4", "Haji"]
    }
  },
  {
    name: "Tio Plato",
    img: "Tio_Plato.png",
    opts: {
      series: ["Zero", "AO", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Randy Orlando",
    img: "Randy_Orlando.png",
    opts: {
      series: ["Zero", "AO", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Noel Seeker",
    img: "Noel_Seeker.png",
    opts: {
      series: ["Zero", "AO", "Haji"]
    }
  },
  {
    name: "Wazy Hemisphere",
    img: "Wazy_Hemisphere.png",
    opts: {
      series: ["Zero", "AO", "Haji"]
    }
  },
  {
    name: "Rixia Mao",
    img: "Rixia_Mao.png",
    opts: {
      series: ["Zero", "AO", "CS2", "Haji", "Kuro"]
    }
  },
  {
    name: "Alex Dudley",
    img: "Alex_Dudley.png",
    opts: {
      series: ["Zero", "AO", "Haji"]
    }
  },
  {
    name: "Arios MacLaine",
    img: "Arios_MacLaine.png",
    opts: {
      series: ["Zero", "AO", "Haji"]
    }
  },
  {
    name: "Garcia Rossi",
    img: "Garcia_Rossi.png",
    opts: {
      series: ["Zero", "AO", "Haji"]
    }
  },
  {
    name: "Rean Schwarzer",
    img: "Rean_Schwarzer.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Valimar",
    img: "Valimar_-_Concept_Art.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4"]
    }
  },
  {
    name: "Alisa Reinford",
    img: "Alisa_Reinford.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Elliot Craig",
    img: "Elliot_Craig.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Laura S. Arseid",
    img: "Laura_S._Arseid.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Machias Regnitz",
    img: "Machias_Regnitz.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Emma Millstein",
    img: "Emma_Millstein.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Jusis Albarea",
    img: "Jusis_Albarea.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Fie Claussell",
    img: "Fie_Claussell.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji", "Kuro"]
    }
  },
  {
    name: "Gaius Worzel",
    img: "Gaius_Worzel.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Millium Orion",
    img: "Millium_Orion.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Crow Armbrust",
    img: "Crow_2_-_Menu_Bust.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Sara Valestein",
    img: "Sara_Valestein.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Angelica Rogner",
    img: "Angelica_Rogner.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Toval Randonneur",
    img: "Toval_Randonneur.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Claire Rieveldt",
    img: "Claire_Rieveldt.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Sharon Kreuger",
    img: "Sharon_Kreuger.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Elise Schwarzer",
    img: "Elise_Schwarzer.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Alfin Reise Arnor",
    img: "Alfin_Reise_Arnor.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Towa Herschel",
    img: "Towa_Herschel.png",
    opts: {
      series: ["AO","CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Altina Orion",
    img: "Altina_Orion.png",
    opts: {
      series: ["CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Vita Clotilde",
    img: "Vita_Clotilde.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Ash Carbide",
    img: "Ash_Carbide.png",
    opts: {
      series: ["CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Juna Crawford",
    img: "Juna_Crawford.png",
    opts: {
      series: ["Zero", "AO", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Kurt Vander",
    img: "Kurt_Vander.png",
    opts: {
      series: ["CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Musse Egret",
    img: "Musse_Egret.png",
    opts: {
      series: ["CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Aurelia Le Guin",
    img: "Aurelia_Le_Guin.png",
    opts: {
      series: ["CS2", "CS3", "CS4", "Haji"]
    }
  },
  {
    name: "Lechter Arundel",
    img: "Lechter_Arundel.png",
    opts: {
      series: ["3rd", "Zero", "AO", "CS1", "CS2", "CS3", "CS4", "Haji"]
    }
  }
];

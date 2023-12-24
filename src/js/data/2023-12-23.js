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
  }
];

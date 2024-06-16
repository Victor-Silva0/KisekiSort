dataSetVersion = "2023-12-25"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
    name: "Filter by character type",
    key: "character",
    tooltip: "Check this to restrict the types of characters that appear",
    checked: false,
    sub: [
        { name: "Playable", tooltip: "Characters that are playable in at least one game", key: "play" },
        { name: "General", tooltip: "characters that aren't part of any organization", key: "gen" },
        { name: "Bracer", tooltip: "characters that are part of the bracers guild", key: "bracer" },
        { name: "Church", tooltip: "characters that are part of the Septian Church", key: "church" },
        { name: "Ouroboros", tooltip: "characters that are part of the Society", key: "snake" },
        { name: "Jaeger", tooltip: "characters that are part of an jaeger corp", key: "jaeger" },
        { name: "Royal Army of Liberl", tooltip: "characters that are part of the Royal Army", key: "libarmy" },
        { name: "Special Support Section", tooltip: "characters that are part of the SSS", key: "SSS" },
        { name: "Crossbell Police Department", tooltip: "characters that are part of the CPD", key: "CPD" },
        { name: "Crossbell Guardian Force", tooltip: "characters that are part of the self-defense force of Crossbell", key: "CGF" },
        { name: "Epstein Foundation", tooltip: "characters that are part of the foundation", key: "foundation" },
        { name: "Imperial Army of Erebonia", tooltip: "characters that are part of the Imperial Army", key: "erearmy" },
        { name: "Thors Military Academy Main Campus", tooltip: "characters that are/were part of the main campus", key: "thors1" },
        { name: "Thors Military Academy Branch Campus", tooltip: "characters that are/were part of the branch campus", key: "thors2" },
        { name: "Class VII", tooltip: "characters that are part of class VII", key: "class7" },
        { name: "Imperial Liberation Front", tooltip: "characters that are part of Imperial Liberation Front", key: "liberation" },
        { name: "Divine Knight", tooltip: "characters that are divine knights", key: "divine" },
        { name: "Iron blood", tooltip: "characters that are part of the iron bloods", key: "blood" },
        { name: "Central Intelligence Division", tooltip: "characters that are part of the CID", key: "CID" },
    ]
  },
  {
    name: "Remove NPCs",
    key: "NPC",
    tooltip: "Check this to remove all non-playable characters."
  },
  {
    name: "Remove PC",
    key: "PC",
    tooltip: "Check this to remove all playable characters.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  // Liberl.
  {
    name: "Estelle Bright",
    img: "Estelle_Bright.png",
    opts: {
      series: ["FC", "SC", "3rd", "Zero", "AO", "CS4", "Haji"],
      character: ["play", "bracer"],
      PC: true
    }
  },
  {
    name: "Joshua Bright",
    img: "Joshua_Bright.png",
    opts: {
        series: ["FC", "SC", "3rd", "Zero", "AO", "CS4", "Haji"],
        character: ["play", "bracer"],
        PC: true
    }
  },
  {
    name: "Scherazard Harvey",
    img: "Scherazard_Harvey.png",
    opts: {
      series: ["FC", "SC", "3rd", "CS4", "Haji"],
      character: ["play", "bracer"],
      PC: true
    }
  },
  {
    name: "Olivert Reise Arnor",
    img: "Olivert_Reise_Arnor.png",
    opts: {
      series: ["FC", "SC", "3rd", "AO", "CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "gen"],
      PC: true
    }
  },
  {
    name: "Klaudia von Auslese",
    img: "Klaudia_von_Auslese.png",
    opts: {
      series: ["FC", "SC", "3rd", "AO", "CS4", "Haji"],
      character: ["play", "gen"],
      PC: true
    }
  },
  {
    name: "Agate Crosner",
    img: "Agate_Crosner.png",
    opts: {
      series: ["FC", "SC", "3rd", "CS3", "CS4", "Haji"],
      character: ["play", "bracer"],
      PC: true
    }
  },
  {
    name: "Tita Russell",
    img: "Tita_Russell.png",
    opts: {
      series: ["FC", "SC", "3rd", "CS3", "CS4", "Haji"],
      character: ["play", "thors2"],
      PC: true
    }
  },
  {
    name: "Zin Vathek",
    img: "Zin_Vathek.png",
    opts: {
      series: ["FC", "SC", "3rd", "Kuro"],
      character: ["play", "bracer"],
      PC: true
    }
  },
  {
    name: "Cassius Bright",
    img: "Cassius_Bright.png",
    opts: {
      series: ["FC", "SC", "3rd", "CS4", "Haji"],
      character: ["libarmy", "bracer"],
      NPC: true
    }
  },
  {
    name: "Kevin Graham",
    img: "Kevin_Graham.png",
    opts: {
      series: ["SC", "3rd", "AO"],
      character: ["play", "church"],
      PC: true
    }
  },
  {
    name: "Ries Argent",
    img: "Ries_Argent.png",
    opts: {
      series: ["3rd", "AO"],
      character: ["play", "church"],
      PC: true
    }
  },
  {
    name: "Renne",
    img: "Renne_Bright.png",
    opts: {
      series: ["SC", "3rd", "Zero", "AO", "CS4", "Haji", "Kuro"],
      character: ["play", "snake"],
      PC: true
    }
  },
  {
    name: "Josette Capua",
    img: "Josette_Capua.png",
    opts: {
      series: ["FC", "SC", "3rd", "CS3", "CS4", "Haji"],
      character: ["play", "gen"],
      PC: true
    },
  },
  {
    name: "Anelace Elfead",
    img: "Anelace_Elfead.png",
    opts: {
      series: ["FC", "SC", "3rd"],
      character: ["play", "bracer"],
      PC: true
    }
  },
  {
    name: "Julia Schwarz",
    img: "Julia_Schwarz.png",
    opts: {
      series: ["FC", "SC", "3rd", "AO"],
      character: ["play", "libarmy"],
      PC: true
    }
  },
  {
    name: "Mueller Vander",
    img: "Mueller_Vander.png",
    opts: {
      series: ["FC", "SC", "3rd", "AO", "CS2"],
      character: ["play", "erearmy"],
      PC: true
    }
  },
  {
    name: "Alan Richard",
    img: "Alan_Richard.png",
    opts: {
      series: ["FC", "SC", "3rd"],
      character: ["play", "libarmy"],
      PC: true
    }
  },
  {
    name: "Maximillian Cid",
    img: "Maximillian_Cid.png",
    opts: {
      series: ["FC", "SC", "3rd"],
      character: ["libarmy"],
      NPC: true
    }
  },
  {
    name: "Mayor Klaus",
    img: "Klaus.png",
    opts: {
      series: ["FC", "SC"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Maybelle",
    img: "Mayor_Maybelle.png",
    opts: {
      series: ["FC", "SC"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Morgan",
    img: "Morgan.png",
    opts: {
      series: ["FC", "SC", "3rd"],
      character: ["libarmy"],
      NPC: true
    }
  },
  {
    name: "Morris Dalmore",
    img: "Morris_Dalmore.png",
    opts: {
      series: ["FC", "SC"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Murdock",
    img: "Murdock.png",
    opts: {
      series: ["FC", "SC"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Nial Burns",
    img: "Nial_Burns.png",
    opts: {
      series: ["FC", "SC", "3rd"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Theresa",
    img: "Matron_Theresa.png",
    opts: {
      series: ["FC", "SC"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Loewe",
    img: "Leonhardt.png",
    opts: {
      series: ["FC", "SC", "3rd"],
      character: ["snake"],
      NPC: true
    }
  },
  {
    name: "Kurt Nardin",
    img: "Kurt_Nardin.png",
    opts: {
      series: ["FC", "SC", "3rd"],
      character: ["bracer"],
      NPC: true
    }
  },
  {
    name: "Kanone Amalthea",
    img: "Kanone_Amalthea.png",
    opts: {
      series: ["FC", "SC", "3rd"],
      character: ["libarmy"],
      NPC: true
    }
  },
  {
    name: "Albert Russell",
    img: "Professor_Russell.png",
    opts: {
      series: ["FC", "SC", "3rd"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Alicia von Auslese",
    img: "Alicia_Von_Auslese.png",
    opts: {
      series: ["FC", "SC", "3rd"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Dorothy Hyatt",
    img: "Dorothy_Hyatt.png",
    opts: {
      series: ["FC", "SC", "3rd"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Dunan von Auslese",
    img: "Dunan_Von_Auslese.png",
    opts: {
      series: ["FC", "SC", "3rd"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Gilbert Stein",
    img: "Gilbert_Stein.png",
    opts: {
      series: ["FC", "SC", "3rd", "CS4", "Haji"],
      character: ["snake"],
      NPC: true
    }
  },
  {
    name: "Georg Weissmann",
    img: "Georg_Weissmann.png",
    opts: {
      series: ["FC", "SC", "3rd"],
      character: ["snake"],
      NPC: true
    }
  },
  {
    name: "Bleublanc",
    img: "Bleublanc.png",
    opts: {
      series: ["SC", "3rd", "CS1", "CS2", "CS4"],
      character: ["snake"],
      NPC: true
    }
  },
  {
    name: "Campanella",
    img: "Campanella.png",
    opts: {
      series: ["SC", "3rd", "AO"],
      character: ["snake"],
      NPC: true
    }
  },
  {
    name: "Luciola",
    img: "Luciola.png",
    opts: {
      series: ["SC", "3rd", "AO"],
      character: ["snake"],
      NPC: true
    }
  },
  {
    name: "Walter Kron",
    img: "Walter.png",
    opts: {
      series: ["SC", "3rd", "Kuro"],
      character: ["snake"],
      NPC: true
    }
  },
  {
    name: "Kilika Rouran",
    img: "Kilika_Rouran.png",
    opts: {
      series: ["FC", "SC", "3rd", "Zero", "AO", "Kuro"],
      character: ["CID"],
      NPC: true
    }
  },
  {
    name: "Rufina Argent",
    img: "Rufina_Argent.png",
    opts: {
      series: ["3rd"],
      character: ["church"],
      NPC: true
    }
  },
  {
    name: "Grant",
    img: "Grant.png",
    opts: {
      series: ["FC", "SC", "3rd"],
      character: ["bracer"],
      NPC: true
    }
  },
  {
    name: "Ein Selnate",
    img: "Ein_Selnert.png",
    opts: {
      series: ["3rd"],
      character: ["church"],
      NPC: true
    }
  },
  {
    name: "Erika Russell",
    img: "Erika_Russell.png",
    opts: {
      series: ["3rd", "Haji"],
      character: ["gen"],
      NPC: true
    }
  },
  // Crosbell.
  {
    name: "Lloyd Bannings",
    img: "Lloyd_Bannings.png",
    opts: {
      series: ["Zero", "AO", "CS2", "CS4", "Haji"],
      character: ["play", "SSS"],
      PC: true
    }
  },
  {
    name: "Elie MacDowell",
    img: "Elie_MacDowell.png",
    opts: {
      series: ["Zero", "AO", "CS4", "Haji"],
      character: ["play", "SSS"],
      PC: true
    }
  },
  {
    name: "Tio Plato",
    img: "Tio_Plato.png",
    opts: {
      series: ["Zero", "AO", "CS3", "CS4", "Haji"],
      character: ["play", "SSS", "foundation"],
      PC: true
    }
  },
  {
    name: "Randy Orlando",
    img: "Randy_Orlando.png",
    opts: {
      series: ["Zero", "AO", "CS3", "CS4", "Haji"],
      character: ["play", "SSS", "jaeger", "CGF", "thors2"],
      PC: true
    }
  },
  {
    name: "Noel Seeker",
    img: "Noel_Seeker.png",
    opts: {
      series: ["Zero", "AO", "Haji"],
      character: ["play", "SSS", "CGF"],
      PC: true
    }
  },
  {
    name: "Wazy Hemisphere",
    img: "Wazy_Hemisphere.png",
    opts: {
      series: ["Zero", "AO", "Haji"],
      character: ["play", "SSS", "church"],
      PC: true
    }
  },
  {
    name: "Rixia Mao",
    img: "Rixia_Mao.png",
    opts: {
      series: ["Zero", "AO", "CS2", "Haji", "Kuro"],
      character: ["play", "gen"],
      PC: true
    }
  },
  {
    name: "Alex Dudley",
    img: "Alex_Dudley.png",
    opts: {
      series: ["Zero", "AO", "Haji"],
      character: ["play", "CPD"],
      PC: true
    }
  },
  {
    name: "Arios MacLaine",
    img: "Arios_MacLaine.png",
    opts: {
      series: ["Zero", "AO", "Haji"],
      character: ["play", "bracer"],
      PC: true
    }
  },
  {
    name: "Garcia Rossi",
    img: "Garcia_Rossi.png",
    opts: {
      series: ["Zero", "AO", "Haji"],
      character: ["play", "gen"],
      PC: true
    }
  },
  {
    name: "Ernest Reis",
    img: "Ernest.png",
    opts: {
      series: ["Zero", "AO"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Ian Grimwood",
    img: "Ian_Grimwood.png",
    opts: {
      series: ["Zero", "AO", "Haji"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Joachim Guenter",
    img: "Joachim.png",
    opts: {
      series: ["Zero"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "KeA Bannings",
    img: "KeA_Bannings.png",
    opts: {
      series: ["Zero", "AO", "CS4", "Haji"],
      character: ["SSS"],
      NPC: true
    }
  },
  {
    name: "Marconi",
    img: "Marconi.png",
    opts: {
      series: ["Zero"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Mariabell Crois",
    img: "Mariabell_Crois.png",
    opts: {
      series: ["Zero", "AO", "CS3", "CS4", "Haji"],
      character: ["snake"],
      NPC: true
    }
  },
  {
    name: "Sergei Lou",
    img: "Sergei_Lou.png",
    opts: {
      series: ["Zero", "AO", "Haji"],
      character: ["SSS"],
      NPC: true
    }
  },
  {
    name: "Zeit",
    img: "Zeit.png",
    opts: {
      series: ["Zero", "AO", "Haji"],
      character: ["SSS"],
      NPC: true
    }
  },
  {
    name: "Guy Bannings",
    img: "Guy_Bannings.png",
    opts: {
      series: ["AO"],
      character: ["CPD"],
      NPC: true
    }
  },
  {
    name: "Henry MacDowel",
    img: "Henry_MacDowell.png",
    opts: {
      series: ["Zero", "AO", "Haji"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Grace Lynn",
    img: "Grace_Lynn.png",
    opts: {
      series: ["Zero", "AO", "CS4", "Haji"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Fran Seeker",
    img: "Fran_Seeker.png",
    opts: {
      series: ["Zero", "AO", "Haji"],
      character: ["CPD"],
      NPC: true
    }
  },
  {
    name: "Cecile Neues",
    img: "Cecile_Neues.png",
    opts: {
      series: ["Zero", "AO", "CS4", "Haji"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Dieter Crois",
    img: "Dieter_Crois.png",
    opts: {
      series: ["Zero", "AO", "Haji"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Arianrhod",
    img: "Arianrhod.png",
    opts: {
      series: ["AO", "CS3", "CS4"],
      character: ["snake"],
      NPC: true
    }
  },
  {
    name: "F. Novartis",
    img: "F._Novartis.png",
    opts: {
      series: ["AO", "Haji"],
      character: ["snake"],
      NPC: true
    }
  },
  {
    name: "Jona Sacred",
    img: "Jona_Sacred.png",
    opts: {
      series: ["Zero","AO", "CS4", "Haji"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Shirley Orlando",
    img: "Shirley_Orlando.png",
    opts: {
      series: ["AO", "CS3", "CS4", "Haji"],
      character: ["jaeger", "snake"],
      NPC: true
    }
  },
  {
    name: "Shizuku MacLaine",
    img: "Shizuku_MacLaine.png",
    opts: {
      series: ["Zero","AO", "Haji"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Sigmund Orlando",
    img: "Sigmund_Orlando.png",
    opts: {
      series: ["AO"],
      character: ["jaeger"],
      NPC: true
    }
  },
  {
    name: "Wald Wales",
    img: "Wald_Wales.png",
    opts: {
      series: ["Zero", "AO", "Haji"],
      character: ["church"],
      NPC: true
    }
  },
  {
    name: "Cao Lee",
    img: "Cao_Lee.png",
    opts: {
      series: ["Zero", "AO", "CS4", "Haji", "Kuro"],
      character: ["gen"],
      NPC: true
    }
  },
  // Erebonia.
  {
    name: "Rean Schwarzer",
    img: "Rean_Schwarzer.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "thors1", "thors2", "class7"],
      PC: true
    }
  },
  {
    name: "Valimar",
    img: "Valimar_-_Concept_Art.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4"],
      character: ["play", "divine"],
      PC: true
    }
  },
  {
    name: "Alisa Reinford",
    img: "Alisa_Reinford.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "thors1", "class7"],
      PC: true
    }
  },
  {
    name: "Elliot Craig",
    img: "Elliot_Craig.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "thors1", "class7"],
      PC: true
    }
  },
  {
    name: "Laura S. Arseid",
    img: "Laura_S._Arseid.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "thors1", "class7"],
      PC: true
    }
  },
  {
    name: "Machias Regnitz",
    img: "Machias_Regnitz.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "thors1", "class7"],
      PC: true
    }
  },
  {
    name: "Emma Millstein",
    img: "Emma_Millstein.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "thors1", "class7"],
      PC: true
    }
  },
  {
    name: "Celine",
    img: "Celine.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play"],
      PC: true
    }
  },
  {
    name: "Jusis Albarea",
    img: "Jusis_Albarea.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "thors1", "class7"],
      PC: true
    }
  },
  {
    name: "Fie Claussell",
    img: "Fie_Claussell.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji", "Kuro"],
      character: ["play", "thors1", "class7", "bracer"],
      PC: true
    }
  },
  {
    name: "Gaius Worzel",
    img: "Gaius_Worzel.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "thors1", "class7", "church"],
      PC: true
    }
  },
  {
    name: "Millium Orion",
    img: "Millium_Orion.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "thors1", "class7", "blood"],
      PC: true
    }
  },
  {
    name: "Crow Armbrust",
    img: "Crow_2_-_Menu_Bust.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "thors1", "class7", "liberation"],
      PC: true
    }
  },
  {
    name: "Ordine",
    img: "Ordine.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play"],
      PC: true
    }
  },
  {
    name: "Sara Valestein",
    img: "Sara_Valestein.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "thors1", "class7", "bracer"],
      PC: true
    }
  },
  {
    name: "Angelica Rogner",
    img: "Angelica_Rogner.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "thors1"],
      PC: true
    }
  },
  {
    name: "Toval Randonneur",
    img: "Toval_Randonneur.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "bracer"],
      PC: true
    }
  },
  {
    name: "Claire Rieveldt",
    img: "Claire_Rieveldt.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "thors1", "blood"],
      PC: true
    }
  },
  {
    name: "Sharon Kreuger",
    img: "Sharon_Kreuger.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "snake"],
      PC: true
    }
  },
  {
    name: "Elise Schwarzer",
    img: "Elise_Schwarzer.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "gen"],
      PC: true
    }
  },
  {
    name: "Alfin Reise Arnor",
    img: "Alfin_Reise_Arnor.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "gen"],
      PC: true
    }
  },
  {
    name: "Towa Herschel",
    img: "Towa_Herschel.png",
    opts: {
      series: ["AO","CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "thors1", "thors2"],
      PC: true
    }
  },
  {
    name: "Altina Orion",
    img: "Altina_Orion.png",
    opts: {
      series: ["CS2", "CS3", "CS4", "Haji"],
      character: ["play", "thors2", "class7"],
      PC: true
    }
  },
  {
    name: "Vita Clotilde",
    img: "Vita_Clotilde.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "snake"],
      PC: true
    }
  },
  {
    name: "Ash Carbide",
    img: "Ash_Carbide.png",
    opts: {
      series: ["CS3", "CS4", "Haji"],
      character: ["play","thors2", "class7"],
      PC: true
    }
  },
  {
    name: "Juna Crawford",
    img: "Juna_Crawford.png",
    opts: {
      series: ["Zero", "AO", "CS3", "CS4", "Haji"],
      character: ["play", "thors2", "class7"],
      PC: true
    }
  },
  {
    name: "Kurt Vander",
    img: "Kurt_Vander.png",
    opts: {
      series: ["CS3", "CS4", "Haji"],
      character: ["play", "thors2", "class7"],
      PC: true
    }
  },
  {
    name: "Musse Egret",
    img: "Musse_Egret.png",
    opts: {
      series: ["CS3", "CS4", "Haji"],
      character: ["play", "thors2", "class7"],
      PC: true
    }
  },
  {
    name: "Aurelia Le Guin",
    img: "Aurelia_Le_Guin.png",
    opts: {
      series: ["CS2", "CS3", "CS4", "Haji"],
      character: ["play", "thors1", "thors2"],
      PC: true
    }
  },
  {
    name: "Lechter Arundel",
    img: "Lechter_Arundel.png",
    opts: {
      series: ["3rd", "Zero", "AO", "CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play", "blood"],
      PC: true
    }
  },
  {
    name: "McBurn",
    img: "McBurn.png",
    opts: {
      series: ["CS2", "CS3", "CS4", "Haji"],
      character: ["snake"],
      NPC: true
    }
  },
  {
    name: "Xeno",
    img: "Xeno.png",
    opts: {
      series: ["CS2", "CS3", "CS4", "Haji"],
      character: ["play","jaeger"],
      PC: true
    }
  },
  {
    name: "Leonidas",
    img: "Leonidas.png",
    opts: {
      series: ["CS2", "CS3", "CS4", "Haji"],
      character: ["play","jaeger"],
      PC: true
    }
  },
  {
    name: "Duvalie",
    img: "Duvalie.png",
    opts: {
      series: ["AO", "CS2", "CS3", "CS4", "Haji"],
      character: ["play","snake"],
      PC: true
    }
  },
  {
    name: "Rufus Albarea",
    img: "Rufus_Albarea.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["blood", "erearmy"],
      NPC: true
    }
  },
  {
    name: "Victor S. Arseid",
    img: "Victor_S._Arseid.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play","gen"],
      PC: true
    }
  },
  {
    name: "Cedric Reise Arnor",
    img: "Cedric_Reise_Arnor.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["blood", "thors1", "snake"],
      NPC: true
    }
  },
  {
    name: "George Nome",
    img: "George_Nome.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["play","thors1"],
      PC: true
    }
  },
  {
    name: "Carl Regnitz",
    img: "Carl_Regnitz.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Michael Gideon",
    img: "Michael_Gideon.png",
    opts: {
      series: ["AO", "CS1"],
      character: ["liberation"],
      NPC: true
    }
  },
  {
    name: "Scarlet",
    img: "Scarlet.png",
    opts: {
      series: ["CS1", "CS2", "Haji"],
      character: ["liberation"],
      NPC: true
    }
  },
  {
    name: "Vulcan",
    img: "Vulcan.png",
    opts: {
      series: ["CS1", "CS2"],
      character: ["liberation"],
      NPC: true
    }
  },
  {
    name: "Giliath Osborne",
    img: "Giliath_Osborne.png",
    opts: {
      series: ["3rd", "AO", "CS1", "CS2", "CS3", "CS4"],
      character: ["erearmy", "blood"],
      NPC: true
    }
  },
  {
    name: "Irina Reinford",
    img: "Irina_Reinford.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Neithardt",
    img: "Neithardt.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4"],
      character: ["erearmy", "thors1"],
      NPC: true
    }
  },
  {
    name: "Croire de Cayenne",
    img: "Duke_Cayenne.png",
    opts: {
      series: ["CS1", "CS2"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Rutger Claussell",
    img: "Rutger_Claussell.png",
    opts: {
      series: ["CS3", "CS4"],
      character: ["jaeger"],
      NPC: true
    }
  },
  {
    name: "Thomas Lysander",
    img: "Thomas_Lysander.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["church", "thors1"],
      NPC: true
    }
  },
  {
    name: "Wallace Bardias",
    img: "Wallace_Bardias.png",
    opts: {
      series: ["CS2", "CS3", "CS4"],
      character: ["erearmy"],
      NPC: true
    }
  },
  {
    name: "Patrick T. Hyarms",
    img: "Patrick_Hyarms.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["thors1"],
      NPC: true
    }
  },
  {
    name: "Roselia Millstein",
    img: "Roselia.png",
    opts: {
      series: ["CS3", "CS4", "Haji"],
      character: ["play","gen"],
      PC: true
    }
  },
  {
    name: "Rosine",
    img: "Rosine.png",
    opts: {
      series: ["CS1", "CS2", "CS3", "CS4", "Haji"],
      character: ["thors1", "church"],
      NPC: true
    }
  },
  {
    name: "Professor Gerhardt Schmidt",
    img: "G._Schmidt.png",
    opts: {
      series: ["CS2", "CS3", "CS4", "Haji"],
      character: ["thors2"],
      NPC: true
    }
  },
  {
    name: "Ines",
    img: "Ines.png",
    opts: {
      series: ["AO", "CS3", "CS4", "Haji"],
      character: ["play","snake"],
      PC: true
    }
  },
  {
    name: "Michael Irving",
    img: "Michael_Irving.png",
    opts: {
      series: ["CS3", "CS4", "Haji"],
      character: ["thors2", "erearmy"],
      NPC: true
    }
  },
  {
    name: "Black Alberich",
    img: "Alberich.png",
    opts: {
      series: ["CS3", "CS4"],
      character: ["gen"],
      NPC: true
    }
  },
  {
    name: "Ennea",
    img: "Ennea.png",
    opts: {
      series: ["AO", "CS3", "CS4", "Haji"],
      character: ["play","snake"],
      PC: true
    }
  },
];

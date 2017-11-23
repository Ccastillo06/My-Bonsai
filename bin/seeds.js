const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const config = require('../config/config');
mongoose.connect(config.db, {useMongoClient: true});
const Specie = require('../models/Specie');

Specie.collection.drop();
const species = [
  {
    specie: "Ficus Microcarpa.",
    scientific_name: "Ficus Microcarpa.",
    description: "The ficus genus belongs to the family of mulberry plants (Moraceae) "+
    "and is the most popular indoor tree species for beginners at Bonsai. "+
    "It has a thick, pot-bellied trunk, similar to the Ginseng root. Sometimes "+
    "it is grafted with Ficus microcarpa leaves.",
    weather: "Needs a lot of sun and humidity.",
    temperature: "It's an indoor Bonsai. Supports temperatures greather than 45 degrees C, "+
    "but can't drop below 5 degrees C.",
    watering: "It should be given water generously whenever the soil gets slightly dry.",
    substratum: "Light acid substratum (70% akadama - 30% kiryuzuna).",
    feeding: "It has a late awakening, we must wait until it starts sprouting to "+
    "fertilize it both in spring and autumn",
    photo: "FicusMicrocarpa.jpg",
    location: ["País Vasco","Galicia","Castilla-La Mancha","Castilla y León","Madrid","Asturias","Aragón","Extremadura","Navarra","Cantabria","La Rioja"],
  },
  {
    specie: "Juniper Bonsai.",
    scientific_name: "Juniperus.",
    description: "The juniper is a genus of about 50 - 70 species within the " +
    "cypress family. They are evergreen coniferous trees or shrubs, which are very "+
    "popular for Bonsai purposes.",
    weather: "Needs a bright spot with lots of sunlight.",
    temperature: "It's an outdoor Bonsai. During winter, protect the tree if the "+
    "temperatures drop below -10 degrees C.",
    watering: "Don't water the tree too much, its roots don't like soil wetness. "+
    "Before you water, the soil should dry slightly.",
    substratum: "Needs a good drainage. 70% akadama - 30% kiryuzuna works perfect with it.",
    feeding: "In spring just before starting to sprout and in autumn, after the"+
    "summer lethargy.",
    photo: "JuniperBonsai.jpg",
    location: ["Comunidad Valenciana","Canarias","Islas Baleares","Andalucía"],
  },
  {
    specie: "Japanese Maple.",
    scientific_name: "Acer Palmatum.",
    description: "The green Japanese Maple (Acer palmatum) is originally from Japan, "+
    "China and Korea. It owes its botanical name to the hand-shaped leaves with in "+
    "most cases five pointed lobes (palma is the Latin word for the palm of hand). "+
    "The bark of younger trees is normally green or reddish and turns light grey or grayish brown with age.",
    weather: "Likes a sunny, airy position but during great midday heat it should "+
    "be placed in the light shade to prevent damaged leaves",
    temperature: "Should be protected from strong frost (below -10° C / 14° F).",
    watering: "Must be watered daily in most cases during the growth season, maybe "+
    "even several times a day during the hottest days, if the soil is well-drained "+
    "and the tree healthy and vigorous.",
    substratum: "Needs a good substratum. 70% akadama - 30% kiryuzuna works perfect with it.",
    feeding: "Always during spring and autumn. Use always slow-release organic solid fertilizers.",
    photo: "JapaneseMaple.jpg",
    location: [],
  },
  {
    specie: "Chinese Elm.",
    scientific_name: "Ulmus Parviflora.",
    description: "The Chinese Elm (Ulmus parvifolia) is endemic to south-east Asia and "+
    "especially China. In its home countries it can become a mighty tree up to 25 m tall "+
    "and with 1 m trunk diameter. The Chinese Elm develops a fine ramification and small "+
    "leaves very easily which makes it a very good Bonsai plant",
    weather: "Needs a lot of sun, no matter the station.",
    temperature: "Supports temperatures greather than 45 degrees C but can't drop below 5 degrees C.",
    watering: "It should be given water generously whenever the soil gets slightly dry.",
    substratum: "Needs a good substratum. 70% akadama - 30% kiryuzuna works perfect with it.",
    feeding: "Always during spring and autumn. Use always slow-release organic solid fertilizers.",
    photo: "ChineseElm.jpg",
    location: [],
  },
  {
    specie: "Carmona Bonsai.",
    scientific_name: "Fukien Tea.",
    description: "The Fukien Tea is originally from China and it was named after the province Fukien, "+
    "in Chinese Fuijan. It is also endemic in parts of Japan, Indonesia, Taiwan and Australia. "+
    "The Fukien Tea is still very popular for Penjing in China and in Western countries it is a "+
    "common indoor Bonsai tree.",
    weather: "It's an indoor bonsai and needs a lot of light.",
    temperature: "The perfect temperature is around 20 degrees C.",
    watering: "Keep the tree moist, as it doesn’t like droughts. But be careful "+
    "not to water too often because it doesn't like soil wetness either",
    substratum: "Substratum must contain a 65% of akadama, 25% of ground and 10% of sand.",
    feeding: "Solid organic fertilizer is appropriate for the Fukien Tea Bonsai because its roots are sensitive.",
    photo: "CarmonaBonsai.jpg",
    location: ["País Vasco","Galicia","Castilla-La Mancha","Castilla y León","Madrid","Asturias","Aragón","Extremadura","Navarra","Cantabria","La Rioja"],
  },
  {
    specie: "Azalea.",
    scientific_name: "Rhododendron.",
    description: "The Rhododendron genus contains about 1000 species, of which especially "+
    "the Satsuki (Rhododendron indicum) and Kurume azalea (Rhododendron kiusianum and "+
    "Rhododendron kaempferi) are commonly used for Bonsai.",
    weather: "Azaleas thrive at a sunny spot, but during the hottest time it is better to provide some shade.",
    temperature: "Should be protected from colder temperatures than -5° C / 41° F.",
    watering: "Azalea Bonsai trees must not dry out but they also don't like permanent wetness. "+
    "Because of this it is necessary to check the moisture of the soil very carefully.",
    substratum: "Needs an acid and draining substratum, like Kunuma.",
    feeding: "During the growing season azalea Bonsai should be fed with a special azalea or rhododendron fertilizer.",
    photo: "AzaleaBonsai.jpg",
    location: [],
  },
  {
    specie: "Japanese Black Pine.",
    scientific_name: "Pinus.",
    description: "For Bonsai, pines are especially popular and many people even regard them "+
    "as the most typical Bonsai trees. Pine trees are evergreen, coniferous resinous "+
    "trees with needles that appear in bundles of two to five.",
    weather: "Always needs a lot of sun for keeping its leaves as little as possible. "+
    "In summer, during the strongest hours of sun it's better to shade.",
    temperature: "The tree holds low temperatures below zero.",
    watering: "Lots of water with a good draining substratum.",
    substratum: "As this tree needs iron, use 50% akadama - 50% kiryuzuna.",
    feeding: "Use always solid organic fertilizer. If you don't have kiryuzuna, add iron suplements.",
    photo: "JapaneseBlackPine.jpg",
    location: ["Comunidad Valenciana","Canarias","Islas Baleares","Andalucía"],
  },
  {
    specie: "Serissa Phoetida.",
    scientific_name: "Snow Rose.",
    description: "The Serissa is a small shrub that flowers two (sometimes even three) "+
    "times per year. The roughly shaped trunks and tiny leaves make this tree very popular "+
    "as indoor Bonsai tree.",
    weather: "Much sunlight is necessary, choose a spot where the tree doesn’t need to be relocated and at a constant temperature.",
    temperature: "Minimum temperature is about 10 degrees Celsius.",
    watering: "Water the tree regularly, it should never dry out.",
    substratum: "Well draining, use 50% akadama - 50% kiryuzuna.",
    feeding: "Fertilize in low quantities about once or twice monthly in the growth season.",
    photo: "SerissaPhoetida.jpg",
    location: ["País Vasco","Galicia","Castilla-La Mancha","Castilla y León","Madrid","Asturias","Aragón","Extremadura","Navarra","Cantabria","La Rioja"],
  },
  {
    specie: "Bald Cypress.",
    scientific_name: "Taxodium distichum.",
    description: "The Bald Cypress is a tall tree with reddish brown bark and soft, "+
    "needle-shaped leaves which develop a nice auburn colour in autumn before they fall "+
    "off along with some of the smaller twigs.",
    weather: "Needs a lot of light and warmth and should therefore be placed in full sun during the growing season",
    temperature: "Must be protected against very low temperatures as it tolerates hardly any frost when it is planted in a container.",
    watering: "It should never dry out. In summer needs a lot of water.",
    substratum: "Works rigth in any type of substratum.",
    feeding: "Use always solid organic fertilizer in the growth season.",
    photo: "BaldCypressBonsai.jpg",
    location: ["País Vasco","Galicia","Castilla-La Mancha","Castilla y León","Madrid","Asturias","Aragón","Extremadura","Navarra","Cantabria","La Rioja"],
  }
];

Specie.create(species, (err, docs) => {
  if (err){throw err;}
  console.log("species created.");
  mongoose.connection.close();
});

const Maintenance = require('../models/Maintenance');

Maintenance.collection.drop();
const maintain = [
  {
    type: "Pruning",
    periodicity: 0,
  },
  {
    type: "Defoliated",
    periodicity: 0,
  },
  {
    type: "Transplant",
    periodicity: 0,
  },
  {
    type: "Graft",
    periodicity: 4,
  },
  {
    type: "Subscriber",
    periodicity: 6,
  },
  {
    type: "Planted",
    periodicity: 0,
  },
  {
    type: "Wiring",
    periodicity: 4,
  },
  {
    type: "Elbow",
    periodicity: 4,
  },
  {
    type: "Pest treatment",
    periodicity: 6,
  },
];

Maintenance.create(maintain, (err, docs) => {
  if (err){throw err;}
  console.log("Maintenance created.");

  mongoose.connection.close();
});

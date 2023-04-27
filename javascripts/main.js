var arr = [];
var i = 0;
var error = []
 // Create a new instance of SpeechRecognition object
 const recognition = new webkitSpeechRecognition();
var myplanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
// var recognition = new webkitSpeechRecognition();

// recognition.start();

const countries = {
   "am-ET": "Amharic",
   "ar-SA": "Arabic",
   "be-BY": "Bielarus",
   "bem-ZM": "Bemba",
   "bi-VU": "Bislama",
   "bjs-BB": "Bajan",
   "bn-IN": "Bengali",
   "bo-CN": "Tibetan",
   "br-FR": "Breton",
   "bs-BA": "Bosnian",
   "ca-ES": "Catalan",
   "cop-EG": "Coptic",
   "cs-CZ": "Czech",
   "cy-GB": "Welsh",
   "da-DK": "Danish",
   "dz-BT": "Dzongkha",
   "de-DE": "German",
   "dv-MV": "Maldivian",
   "el-GR": "Greek",
   "en-GB": "English",
   "es-ES": "Spanish",
   "et-EE": "Estonian",
   "eu-ES": "Basque",
   "fa-IR": "Persian",
   "fi-FI": "Finnish",
   "fn-FNG": "Fanagalo",
   "fo-FO": "Faroese",
   "fr-FR": "French",
   "gl-ES": "Galician",
   "gu-IN": "Gujarati",
   "ha-NE": "Hausa",
   "he-IL": "Hebrew",
   "hi-IN": "Hindi",
   "hr-HR": "Croatian",
   "hu-HU": "Hungarian",
   "id-ID": "Indonesian",
   "is-IS": "Icelandic",
   "it-IT": "Italian",
   "ja-JP": "Japanese",
   "kk-KZ": "Kazakh",
   "km-KM": "Khmer",
   "kn-IN": "Kannada",
   "ko-KR": "Korean",
   "ku-TR": "Kurdish",
   "ky-KG": "Kyrgyz",
   "la-VA": "Latin",
   "lo-LA": "Lao",
   "lv-LV": "Latvian",
   "men-SL": "Mende",
   "mg-MG": "Malagasy",
   "mi-NZ": "Maori",
   "ms-MY": "Malay",
   "mt-MT": "Maltese",
   "my-MM": "Burmese",
   "ne-NP": "Nepali",
   "niu-NU": "Niuean",
   "nl-NL": "Dutch",
   "no-NO": "Norwegian",
   "ny-MW": "Nyanja",
   "ur-PK": "Pakistani",
   "pau-PW": "Palauan",
   "pa-IN": "Panjabi",
   "ps-PK": "Pashto",
   "pis-SB": "Pijin",
   "pl-PL": "Polish",
   "pt-PT": "Portuguese",
   "rn-BI": "Kirundi",
   "ro-RO": "Romanian",
   "ru-RU": "Russian",
   "sg-CF": "Sango",
   "si-LK": "Sinhala",
   "sk-SK": "Slovak",
   "sm-WS": "Samoan",
   "sn-ZW": "Shona",
   "so-SO": "Somali",
   "sq-AL": "Albanian",
   "sr-RS": "Serbian",
   "sv-SE": "Swedish",
   "sw-SZ": "Swahili",
   "ta-LK": "Tamil",
   "te-IN": "Telugu",
   "tet-TL": "Tetum",
   "tg-TJ": "Tajik",
   "th-TH": "Thai",
   "ti-TI": "Tigrinya",
   "tk-TM": "Turkmen",
   "tl-PH": "Tagalog",
   "tn-BW": "Tswana",
   "to-TO": "Tongan",
   "tr-TR": "Turkish",
   "uk-UA": "Ukrainian",
   "uz-UZ": "Uzbek",
   "vi-VN": "Vietnamese",
   "wo-SN": "Wolof",
   "xh-ZA": "Xhosa",
   "yi-YD": "Yiddish",
   "zu-ZA": "Zulu"
}

function removeDuplicates(arr) {
   return arr.filter((item,
      index) => arr.indexOf(item) === index);
}

function insertionSort(arr, n) {
   let i, key, j;
   for (i = 1; i < n; i++) {
      key = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > key) {
         arr[j + 1] = arr[j];
         j = j - 1;
      }
      arr[j + 1] = key;
   }
}

if ('webkitSpeechRecognition' in window) {
   console.log("Web Speech API is supported")
 } else {
   console.log("Web Speec  h API is not supported")
 } 

arr = [2,1,5,6,8,7,3,4]  
// 3 replace with 5 // real  = [2,1,5,4,6,8,7,3]
// while(arr.length < 8){
//    var r = Math.floor(Math.random() * 8) + 1;
//    if(arr.indexOf(r) === -1) arr.push(r);
// }

function wait(milliseconds) {
   return new Promise(resolve => {
     setTimeout(() => {
       resolve();
     }, milliseconds);
   });
   // await promise;
 }

async function convertSpeechToText(newCallbackFunction) {
  
   // Start recognition
   recognition.lang = 'en-US';
   recognition.maxAlternatives = 1;
   await wait(2000);
   recognition.start();
   

   // Define event listeners for recognition
   recognition.onresult = function(event) {
       // Get the transcript from the first result
      console.log(event)
      const transcript = event.results[0][0].transcript;
       
       // Log the transcript
      // console.log(transcript);
      newCallbackFunction(transcript);
       // Do something with the transcript, like update a text field
      //  document.getElementById("myTextField").value = transcript;
      return transcript;
   };
   
   // Define error handler for recognition
   recognition.onerror = function(event) {
       console.error("Recognition error: ", event.error);
   }
}

async function planetDes() {
   // var speech = "venus";
   var speech = ""
   console.log(arr)
   let text1 = document.getElementById("instruct").innerText;
    //console.log(text1)


   // text1 = "Which is the dark grey planet that has wrinkles on it?"
   // translateLang(text1);
   //           convertSpeechToText((voiceMessage) => {
   //             if (voiceMessage.toLowerCase() == "mercury") {
   //                text1 = "Great! It is Mercury.<br>It is closest to the sun!"
   //                translateLang(text1);
   //             }
   //          });

   // const textToSpeech = async (text)=>{
   //    await translateLang(text)
   // }

   await translateLang(text1);
   // const text2="Which is the dark grey planet that has wrinkles on it?"
   // await translateLang(text2);
   // convertSpeechToText((voiceMessage) => {
   //                if (voiceMessage.toLowerCase() == "mercury") {
   //                   text1 = "Great! It is Mercury.<br>It is closest to the sun!"
   //                   translateLang(text1);
   //                }
   //             });
               
   //             voiceMessage = "Which is the dark grey planet that has wrinkles on it?"
   //             translateLang(text1);
   //             convertSpeechToText((voiceMessage) => {
   //                if (voiceMessage.toLowerCase() == "mercury") {
   //                   text1 = "Great! It is Mercury.<br>It is closest to the sun!"
   //                   translateLang(text1);
   //                }
   //             });
   // setTimeout(async () => {speech = convertSpeechToText();
   //    console.log(speech);
   //    if (speech.toLowerCase() == "mercury") {
   //    text3 = "Great! It is Mercury. It is closest to the sun!"
   //    await translateLang(text3);
   //    }}, 5000);
   
   // setTimeout(() => {
   //     translateLang(text1);
      
   //     console.log(text1);
   // }, 1000);

   //setTimeout(() => { }, 5000);

//    text2 = "Which is the dark grey planet that has wrinkles on it?"
//    setTimeout(() => {
//       translateLang(text2);
     
//       console.log(text2);
//   }, 10000);
   var i = 0;
   let isSuccess = false;
   do {
      if(isSuccess == true)
         isSuccess = false;
      if(!isSuccess){
      switch (arr[i]) {
         case 1:
            voiceMessage = "Which is the dark grey planet that has wrinkles on it?"
            await translateLang(voiceMessage);
            await wait(5000);
            await convertSpeechToText((voiceMessage) => {
               if (voiceMessage.toLowerCase() == "mercury") {
                  text1 = "Great! It is Mercury.<br>It is closest to the sun!"
                  translateLang(text1);
                  document.getElementById("mercury").style.display="none";
                  document.getElementById("mercury1").style.opacity = "1";
                  document.getElementById("mercuryOrbit").className = "mercury-revolve";
                  isSuccess = true;
                  i++;
               }
            });
            await wait(10000);
            break;
         case 2:
            // System.Threading.Thread.Sleep(3000);
            console.log(arr[i]);
            voiceMessage = "Which is the yellowish-white planet with few brownish-red spots? These spots signify the volcanic rocks!"
            await translateLang(voiceMessage);
            await wait(10000);
            // setTimeout(()=>{speech = convertSpeechToText();}, 5000);
            //speech = convertSpeechToText();
            //console.log(speech)
            await convertSpeechToText((x) => {
               if (x.toLowerCase() == "venus") {
                  text1 = "Great! This is Venus which is the hottest planet but comes after Mercury<br>(not the sun). Lets move ahead!"
                  translateLang(text1);
                  document.getElementById("venus").style.display="none";
                  document.getElementById("venus1").style.opacity = "1";
                  document.getElementById("venusOrbit").className = "venus-revolve";
                  isSuccess = true;
                  i++;
               }
               // if (voiceMessage.toLowerCase() == "jupiter") {
               //    text1 = "Great! It is Mercury.<br>It is closest to the sun!"
               //    translateLang(text1);
               //    // document.getElementById("mercury").style.display="none";
               //    // document.getElementById("mercury1").style.opacity = "1";
               //    // document.getElementById("mercuryOrbit").className = "mercury-revolve";
               //    isSuccess = false;
               //    // i++;
               // }
            });


            await wait(10000);
         
            break;
         case 3:
            voiceMessage = "Which planet is A combination of water and land? It is a rocky, terrestrial planet."
            await translateLang(voiceMessage);
            await wait(10000);
            await convertSpeechToText((x) => {
               if (x.toLowerCase() == "earth") {
                  text1 = "Great! The planets before the Milky way are Terrestrial Planets. Earth is the second-last Terrestrial planet."
                  translateLang(text1);
                  document.getElementById("earth").style.display="none";
                  document.getElementById("earth1").style.opacity = "1";
                  document.getElementById("earthOrbit").className = "earth-revolve";
                  isSuccess = true;
                  i++;
               }
            });
            await wait(10000);
            break;
         case 4:
            voiceMessage = "Which is the red planet? It got the colour red because of the rusty iron on its surface."
            translateLang(voiceMessage);
            await wait(10000);
            await convertSpeechToText((x) => {
               if (x.toLowerCase() == "mars") {
                  text1 = "Yes, Mars!!<br>It comes right before the milky way"
                  translateLang(text1);
                  document.getElementById("mars").style.display="none";
                  document.getElementById("mars1").style.opacity = "1";
                  document.getElementById("marsOrbit").className = "mars-revolve";
                  isSuccess = true;
                  i++;
               }
            });
            await wait(10000);
            break;
         case 5:
            voiceMessage = "Which is the largest planet in the solar system? It is a gas giant and its colour changes with storms and wind in the planet's atmosphere."
            translateLang(voiceMessage);
            await wait(10000);
            await convertSpeechToText((x) => {
               if (x.toLowerCase() == "jupiter") {
                  text1 = "That's right. Jupiter!<br>It comes right after the milky way."
                  translateLang(text1);
                  document.getElementById("jupiter").style.display="none";
                  document.getElementById("jupiter1").style.opacity = "1";
                  document.getElementById("jupiterOrbit").className = "jupiter-revolve";
                  isSuccess = true;
                  i++;
               }
            });
            await wait(10000);
            break;
         case 6:
            voiceMessage = "Which is the planet with rings? It has a set of 7 main rings with spaces between them."
            translateLang(voiceMessage);
            await wait(10000);
            await convertSpeechToText((x) => {
               if (x.toLowerCase() == "saturn") {
                  text1 = "You are right, Saturn.<br>The planets after the Milky way are Jovian Planets. It is the second Jovian planet."
                  translateLang(text1);
                  document.getElementById("saturn").style.display="none";
                  document.getElementById("saturn1").style.opacity = "1";
                  document.getElementById("saturnOrbit").className = "saturn-revolve";
                  isSuccess = true;
                  i++;
               }
            });
            await wait(10000);
            break;
         case 7:
            voiceMessage = "Which is the planet which is blue in colour and has faint rings?"
            translateLang(voiceMessage);
            await wait(10000);
            await convertSpeechToText((x) => {
               if (x.toLowerCase() == "uranus") {
                  text1 = "That's correct, Uranus!<br>It is the second-last planet in the solar system and is a neighbour of Saturn!"
                  translateLang(text1);
                  document.getElementById("uranus").style.display="none";
                  document.getElementById("uranus1").style.opacity = "1";
                  document.getElementById("uranusOrbit").className = "uranus-revolve";
                  isSuccess = true;
                  i++;
               }
            });
            await wait(10000);
            break;
         case 8:
            voiceMessage = "Which is the dark, cold and windy planet?<br>(It's colour is dark blue.)"
            translateLang(voiceMessage)
            await wait(10000);
            await convertSpeechToText((x) => {
               if (x.toLowerCase() == "neptune") {
                  text1 = "Great! It is Neptune.<br>It is the last planet in the solar system."
                  translateLang(text1);
                  document.getElementById("neptune").style.display="none";
                  document.getElementById("neptune1").style.opacity = "1";
                  document.getElementById("neptuneOrbit").className = "neptune-revolve";
                  isSuccess = true;
                  i++;
               }
            });
            await wait(10000);
            break;
         default:
            break;
      
      }
      }
   } while(isSuccess);
}
planetDes();

function displayFacts() {
   var display_fact;
   display_fact = (Math.random())
   if (display_fact < 0.33) {
      nasaRequest();
   }
}
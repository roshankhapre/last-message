import React, { useState, useEffect } from "react";
import photo from "../assets/1707597386914.jpg";

export default function LastMessage() {
  const [showFullMessage, setShowFullMessage] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  // Show everything immediately with a dramatic entrance
  useEffect(() => {
    const timer1 = setTimeout(() => setShowFullMessage(true), 500);
    const timer2 = setTimeout(() => setShowPhoto(true), 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-pink-50 to-rose-100 py-4 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Urgent Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-white/90 rounded-2xl px-6 py-4 shadow-2xl border-2 border-rose-300 animate-pulse">
            <h1 className="text-2xl md:text-3xl font-bold text-rose-800 mb-2">
              💔 PLEASE READ THIS ONCE DEVYANI 💔
            </h1>
            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mb-2"></div>
            <p className="text-red-600 font-medium">My final words to you</p>
          </div>
        </div>

        {/* Photo Section - YOUR ACTUAL PHOTO */}
        {showPhoto && (
          <div className="text-center mb-6 p-4 bg-white/80 rounded-2xl border-2 border-dashed border-red-300 shadow-lg">
            <img
              src={photo}
              alt="Our beautiful memory together"
              className="w-60 h-60 object-cover mx-auto rounded-xl shadow-md"
            />
            <p className="text-red-700 font-semibold mt-3">
              A Memory I'll Cherish Forever
            </p>
            <p className="text-red-600 text-sm mt-1">
              This moment meant everything to me
            </p>
          </div>
        )}

        {/* Full Message - Show immediately */}
        {showFullMessage && (
          <div className="bg-white/90 rounded-2xl p-6 shadow-2xl border border-rose-200 mb-6">
            <div className="font-sans text-gray-800 leading-relaxed text-base md:text-lg">
              <div className="space-y-4">
                <p className="text-red-700 font-semibold">
                  Devyani, this is my final message to you. Please read it
                  completely.
                </p>

                <p>
                  <strong>Devyani hum dono ki kitni sari memories hai</strong>,
                  kitna enjoy kiya hai kabhi unko yaad karana. Sath rhne ke liye
                  nhi kah rha hu aur na hi kuch aur bs videos and chat pad rha
                  tha mai kitne videos hai tere mere pass jisame hum dono msti
                  kr rhe hai.
                </p>

                <p>
                  Mai aj bilkul nhi kahuga ki mere sath rah ja ya fhirr mere
                  pass aaja Devyani but{" "}
                  <strong>
                    tere sath bataya waqt bahut precious tha ab tak ka
                  </strong>
                  . Mai kuch bhi kahuga I know teko farak nhi padega mere pass
                  teri yaadein aur usi ke sahare rahuga.
                </p>

                <p>
                  Sorry mafh kr dena Devyani tere sath behave krne ke liye. Sayd
                  teri puri life time me mai ek baar bhi yaad aau to bahut hai
                  mere liye. Tera precious wqt dene ke liye thanks a lot.
                </p>

                <p>
                  <strong>I know mai deserve nhi krta hu Devyani teko</strong>,
                  mera pyaar sirf tere liye rahega humesa zindagi bhar.
                </p>

                <p>
                  Tere me aur mere me kya farq hai you know tu sirf mere sath
                  bataya hua bad time yaad hai aur mujhe wo accha time yaad hai
                  jo humane sath me bataya hai.
                </p>

                <p>
                  <strong>Mujhe har ek baat yaad hai teri</strong> - choti si
                  choti, badi si badi baat. Tere periods aur wo dard, tere
                  jhagade, teri caring, tere nafrat, tera ghussa, tera intjar,
                  tera waqt.
                </p>

                <p>
                  Tera sath ki journey tere sath hath pakdkar chala hua waqt.
                  Teri smile, teri fhaltu ki bate jisame kabhi kabhi sense nhi
                  hota hai, teri samjhdari, teri pagalpanti, teri chalaki.
                </p>

                <p>
                  Teri wo kutta kamina kahana, doodoo kahana, rosh kahana -{" "}
                  <strong>sab yaad hai mujhe</strong>.
                </p>

                <p>
                  Teko yaad hoga to first time teri tshirt jo nikali thi highway
                  per wo yellow color ki thi black color ki slip and pink color
                  ki bra. Teri underwear bhi yaad hai maine halki halki si dekhi
                  thi jiska color tha grey.
                </p>

                <p>
                  <strong>
                    Devyani tere sath ki hui trips, tere sath kiye enjoyments
                    sab yaad hai mujhe
                  </strong>
                  . Tujhe ehsas kyo nhi hua pata hai kyoki tune kabhi meri
                  acchaiyan nhi notice aur na hi yaad karti hai.
                </p>

                <p>
                  Agr krti to kabhi kisi ka nhi sochti but ek baar yaad krna bs
                  ek baar.{" "}
                  <strong>
                    Devyani mai kabhi sex ke liye tere sath nhi tha kabhi bhi
                    nhi
                  </strong>
                  . Mai humesa teri khusi chahta tha bus khusi.
                </p>

                <p>
                  Aj mere pass na to tu hai aur na hi kuch aur.{" "}
                  <strong>I will do better one day dekhna devyani</strong>. Tu
                  chahti to sab ho jata.
                </p>

                <p>
                  Mujhe tere sath gaya hua crescent me water park me bitaya pal
                  ho ya fir mandir me ho ya fir kahi hum dono baithkar bate kr
                  rhe ho - <strong>sab yaad hai</strong>.
                </p>

                <p>
                  First meet me humne red sauce pasta khaya tha first time. Aur
                  devyani tere sath ram shanti wala din kabhi nhi bhuliga -
                  first time hum dono paidal chal rhe the sirf tu aur mai.
                </p>

                <p>
                  Qismat bhi chahti thi ki hum dono sath rhe kyoki devyani tu
                  mere samane ayi thi paper me. Teko pata hai tanuja kaha tha ki
                  piche kya dekh rhe ho hum ground par the us wqt.
                </p>

                <p>
                  Mai piche moodkar dekh rha tha teko, maine kaha tha ki chand
                  ko dekh rha hu. Tanuja ne kaha tha ki din me konse chand ko
                  dekh rhe ho, fir kaha ki chand ko dekh rhe ho ya ye chand ko
                  dekh rhe ho.
                </p>

                <p>
                  <strong>
                    Ek ek words, ek ek sabd yaad hai mujhe bahut acche se
                    devyani
                  </strong>
                  . Tere sath bitaya ek ek pal mujhe.
                </p>

                <p>
                  Sayd tu bhul gyi hogi isame teri galti nhi hai kyoki mai hu hi
                  aisa devyani na samjh bewkuf hu ek number ka.
                </p>

                <p>
                  <strong>
                    Mai sambhal nhi paya teko acche se - meri hi galti hai
                    devyani sirf meri galti hai
                  </strong>
                  .
                </p>

                <p>
                  Meri galti ki wajah se aj hum dono sath nhi hai aur mere jaise
                  ke sath rhane ka koi haq nhi hai teko devyani.
                </p>

                <p>
                  <strong>You deserve someone better than me not me</strong>.
                  Tere maa paa tere liye accha sa ladka dekhege bahut accha
                  ladka dekhege mere se jyada pyaar karne wala mere se jyada
                  kamane wala humesa khush rhana.
                </p>

                <p>
                  Tere sath puri jindagi bitana chahta tha puri jindagi kabhi
                  bhi khona nhi chahta tha but ab lag rha hai ki kho diya hai.
                </p>

                <p>
                  <strong>Akel feel krta hu</strong> jo humari khusi thi jo
                  humari bakchodi thi jisame hum msti krte the.
                </p>

                <p>
                  Agar teko yaad hoga to jarur yaad krna kitana accha movement
                  tha n devyani. Mera pichawada dikhakar dance karna aur tera
                  bhi mera jaisa dance karna.
                </p>

                <p>
                  I know ki teko bacchi bankar rhana pasand hai aur mujhe teko
                  bacchi banakar rkhana accha lagta hai.
                </p>

                <p>
                  <strong>Teri yaad aati hai devyani</strong> - tere jism ki
                  nhi, teri yaad aati hai jo kahi ghum gayi hai.
                </p>

                <p>
                  I know ki maine lose kr diya hai but kya karu yaar chutiya hu
                  mai meri yahi sajha hai devyani.
                </p>

                <p>
                  Pata hai teko devyani tere liye humesa dil se khana banata tha
                  mai fir wo kuch bhi ho har ek chiz khilayi hai maine banakar.
                </p>

                <p>
                  Taste yaad hai n devyani kadi chawal me bik jana tera accha
                  lgta tha sab kuch lekin meri wajh se sab khatam ho gaya hai.
                </p>

                <p>
                  <strong>Mera teri jindagi se jana hi sahi rhega</strong>.
                </p>

                <p>
                  Itana explanation ki jarurat nhi hai sayad lekin socha likh du
                  yaar fir wqt ho ya na ho.
                </p>

                <p>
                  Devyani pata hai tune ek baar ki birthday ki pics upload nhi
                  ki hai. I know ki tere liye special nhi kar paya na gifts
                  acche de paya aur na hi kuch aur na to teko khush rakh paya
                  aur na hi kuch aur.
                </p>

                <p>
                  Yaar humesa teko dard diya hai maine.{" "}
                  <strong>Mai saccha pyar krta hu tere se</strong>.
                </p>

                <p>
                  Kabhi kbhi hume aisa krna padta hai jo nhi chahte hai. Teri
                  koi majburi rhi hogi jo tune aisa kadam uthaya devyani samjh
                  sakta hu mai.
                </p>

                <p>
                  Mai blame nhi karuga teko.{" "}
                  <strong>Tu bahut acchi ladki hai bahut hi jyada</strong>.
                </p>

                <p>
                  Teri smile humesa yaad rhegi. Humesa yaad karuga mai teko.
                  Humesa tera accha chahuga.
                </p>

                <p>
                  Teri smile yaar - tera uniform school ka, teri do chotiya,
                  tera bag, bottle sab yaad hai mujhe.
                </p>

                <p>
                  Tera paidal aana, cycle chalana sab yaar.{" "}
                  <strong>
                    Sab yaad hai yaar aur yahi meri jindagi hai devyani
                  </strong>
                  .
                </p>

                <p>
                  Bahut rota hu n mai tere samne. Ladki hu n mai? Nhi yaar bs
                  tere samane rona aata hai nhi to majhal hai mere aasu ki kisi
                  ke samane ro de.
                </p>

                <p>
                  Teko yaad hai mai ghar par tha teko hostel se nikalna tha nhi
                  jane de rhe the ek call par utha kr nikal diya tha waha se.
                </p>

                <p>
                  Devyani bahut ups and down aaye yaar humare bich me but ab kya
                  aaya hai nhi samjh aa rha hai.
                </p>

                <p>
                  Bahut kuch hai likhne ko ek kitab likh du lekin un yaadon ki
                  qitab likhkar kya karu yaar jab tu hai hi nhi.
                </p>

                <p>
                  Yaar teko accha lgata tha bolana kutte sunn, abe mote, div ye
                  pyar se, divya bhi pyar hi hai but alag, devyani thoda alg
                  hai.
                </p>

                <p>
                  Shree bahut emotional hu tab.{" "}
                  <strong>Teri har ek chiz notice ki hai maine</strong> - choti
                  si choti fir kuch bhi ho yaar.
                </p>

                <p>
                  Pata hai mai ghum gaya hu kahi kho gaya hu mujhe purana wala
                  roshan banana hai ab bakchodi krne me bhi majha nhi aata hai
                  devyani.
                </p>

                <p>
                  Tera ye ahsas life time yaad rahega yaar. Letter likh leta
                  lekin type karna sahi samjha.
                </p>

                <p>
                  Tere letter pade maine kya thi yaar tu devyani pagli kahiki
                  divya. Divyaa yaad ati hai teri bahut.
                </p>

                <p>
                  <strong>Bs teri yadon me rhana chahta hu mai</strong>.
                </p>

                <p>
                  Devyani sari trips yaad hai mujhe. Devyani hum dono ka first
                  kiss, first hug, first sex sab yaad hai. First time fingering
                  sab yaad hai devyani.
                </p>

                <p>
                  Mere andar tere liye hawas rhti to teri pics abhi rhti mere
                  pass. I don't have any yaar.
                </p>

                <p>
                  <strong>Mujhe tere se pyaar hai jism se nhi</strong>. Bs nind
                  me idhar udhar lg jata tha jiska mujhe bahut khed hai.
                </p>

                <p>
                  Mafh kr dena mujhe devyani please kabhi touch nhi karna chahta
                  tha but nind me ho jata tha.
                </p>

                <p>
                  Devyani teko pata hai ek baat tu nind me jo jo karti hai n sab
                  yaad rhta hai mujhe pata nhi kaise but yaad rhta hai.
                </p>

                <p>
                  Tera dil kya chahta hai samjh nhi aata hai tu mera name leti
                  hai mujhe pukarti hai? Pata nhi kyo, but jagane ke baad kahi
                  dur chali jati hai.
                </p>

                <p>
                  Devyani teko pata hai ek baat mai tere piche pagal hu lekin
                  aise jabardasti tere sath nhi rah sakta hu.
                </p>

                <p>
                  Tu khush hai teri life me mai kyo teri life kharab karu meri
                  wajh se.
                </p>

                <p>
                  <strong>
                    Sorry devyani teko meri wajah se chot aayi hai bahut jyada
                  </strong>
                  . Dil se sorry devyani, mafh kr dena mujhe.
                </p>

                <p>
                  Tere sath jo time bitaya hai - coaching, school, road, gali,
                  pnd ki saragam, talkies, samata college, bamani, highway,
                  mandir sai tekdi gaye hai yaad hai kya teko?
                </p>

                <p>
                  31 December ko last time hum cycle se ghumne gaye the jab
                  video banaya tha humara wala teri najar me galat tha but ek
                  jhalak hai us video me devyani jisame hum dono ghum rhe hai.
                </p>

                <p>
                  Aur pata hai teko devyani indore me tere sath khana khana,
                  khana banana, cafe me baithana chai pina, sath me paidal
                  chalana, mandir me jana, bike par ghumana -{" "}
                  <strong>sab yaad hai mujhe sab kuch yaar</strong>.
                </p>

                <p>
                  Har ek lamha yaad hai aur rahega. Nahi bhuluga mai kabhi bhi
                  ye sab.
                </p>

                <p>
                  Agr bhagwan ne chaha to book likhuga mai meri love story ki.
                  Kabhi waqt milega to padana jarur. 1 month baad se likhna
                  start kr duga.
                </p>

                <p>
                  <strong>Tere pyaar me bahut pagal hu re mai</strong>.
                </p>

                <p>
                  Teri majburi ko bhi samjhna jaruri hai devyani mujhe. Teri
                  life hai mai kyo hi itana jyada jabardasti karu.
                </p>

                <p>
                  Mere sath is darr me thi pagali kahi mai kuch na bol deta aree
                  meri jaan aisa nhi hu mai.
                </p>

                <p>
                  Tune mujhe acche se nhi jana hai kabhi sorry yaar itana handle
                  karne ke liye mujhe, mujhe jhelne ke liye kutte.
                </p>

                <p>
                  <strong>Teri yaad me mai jiuga humesa</strong> aur ek
                  successful insaan banuga aur book ko print karauga teri meri
                  love story ki.
                </p>

                <p>I know har story ki happy ending nhi hoti hai.</p>

                <p>
                  Yaar mere se darte mt jaa re devyani. Mujhe nhi jana hai tune
                  kabhi acche se.
                </p>

                <p>
                  Kash jaan pati lekin har kisi ko har subject samjh bhi to nhi
                  aata hai n kyo sahi kah rha hu n.
                </p>

                <p>
                  Mai wo subject tha teri life ka jo tujhe samjh nhi. Agar samjh
                  leti to majha aa jati devyani.
                </p>

                <p>
                  Tere sath mai foreign trip krna chahta tha next year. Mast
                  flight me baithkar sidha Thailand ya Malaysia.
                </p>

                <p>
                  <strong>
                    Teko sab kuch dena chahta tha devyani sab kuch
                  </strong>
                  . Aisa kuch nhi tha jo teko nhi dena chahta tha.
                </p>

                <p>
                  Bs yaar is baat ka bhi malal hai ki tune mujhe galat samjha
                  devyani.
                </p>

                <p>
                  Teri life meri wajah se kharab nhi hui hai. Tere pass aisi
                  situation thi ki tujhe wahi karana tha jo tere hath me tha.
                </p>

                <p>Maine teko guidance di thi devyani sirf.</p>

                <p>
                  Us waqt tu meri nhi thi. Tune just mere se baat krna start ki
                  thi devyani puri garmi bhar baat nhi ki thi, fir baat ki thi.
                </p>

                <p>
                  Maine suggestion diya tha. Tere maa paa ne budget kam kar
                  rakha tha devyani.
                </p>

                <p>
                  Tere time teri bahan ke time un logo thodi si bhi parawah nhi
                  thi ki 1,27 lakh kaha se layege.
                </p>

                <p>
                  Tu hi bata devyani kya tu meri wajah se aayi thi ya fir
                  situation lekar aayi thi teko indore.
                </p>

                <p>
                  Meri galati bhi hai ki maine kaha tha yaar aaja indore hi.
                  Pyaar karta tha mai to yahi chahta n lekin teri demand ke
                  hisab se maine kiya tha.
                </p>

                <p>
                  Agar teko pata hoga to tune admission kr liya pnd me. Maine
                  itna bhi nhi kaha devyani tu aa matlab aa.
                </p>

                <p>
                  Bus bhura laga tha wo to kisi ko bhi lgta yaar. Tu indore ayi
                  devyani maine tera har condition me sath diya - bhure se bhure
                  aur acche se acche condition me.
                </p>

                <p>
                  <strong>
                    Humesa dena chahta tha but yaar tu mere sath rhkar
                    frustrated hoti hai khush nhi hoti hai yaar
                  </strong>
                  .
                </p>

                <p>To mera dur jana hi behatar hai hum dono ke liye.</p>

                <p>
                  Mere dur jane se agar tu khush hogi, teri smile waps aayegi to
                  devyani i will go yaar.
                </p>

                <p>
                  Bs yahi kahuga teri smile bahut pyari hai, tu bahut cute hai,
                  tu pure heart hai.
                </p>

                <p>
                  Teri smile ke liye ye roshan chala jayega dur. Don't worry.
                </p>

                <p>
                  Aur haa devyani ye mere liye bahut dard ki baat hai but ek n
                  ek din hona hi tha tere hissab se to ab ho gaya hai.
                </p>

                <p>
                  Miss u baby. Mai kiss miss karta hu yaar, hug miss karta hu
                  yaar. Humesa karta rahuga kyoki ab kab hoga pata nhi ya nhi
                  hoga sayad kabhi.
                </p>

                <p>
                  Devyani bs yahi duan hai meri ki tu humesa khush rhe aur
                  humesa haste huiye rahe.
                </p>

                <p>Maa papa bahut acche hai tere.</p>

                <p>
                  Devyani tu sab bate karti hogi jo mere se karti thi. Mere se
                  kuch bhi nhi yaar mai to tere liye ji rha tha sirf tere liye.
                </p>

                <p>
                  Tere se ummid nhi thi mujhe. Mai kahata raha devyani ki kal ho
                  na ho but tune serious nhi liya.
                </p>

                <p>
                  Kyoki tu us admi ke uppar kuch nhi soch pa rhi hai is waqt. Ye
                  samjh gaya hu.
                </p>

                <p>
                  Na to mujhe, na to tere maa baap ko, aur mera samjhana tere
                  kisi kaam ka nhi hai.
                </p>

                <p>
                  <strong>
                    Maine bhik mangi hai pyaar ki devyani but ab bhik nhi
                    mangana
                  </strong>
                  .
                </p>

                <p>
                  Jaa devyani jaa usake pass. Mere sab samjh aaya hai devyani.
                </p>

                <p>
                  Jo jo pichle itane sare dino me hua hai tu wo sab kar rhi hai
                  jaha se teko sirf dard milega aur kuch nhi.
                </p>

                <p>
                  I mean wo kisi ka husband hai aur uski bacchi hai lekin teko
                  kya devyani teko teri life ki padi hai.
                </p>

                <p>
                  Lekin chod mujhe kuch matlb nhi hai kisi se bhi. Tu ji teri
                  life.
                </p>

                <p>
                  Maine tere liye wo sab kiya jo mujhe karana chahiye tha tere
                  liye. Meri aukat se jyada kiya hai devyani.
                </p>

                <p>Mai tere liye ji rha tha ab tk. Aage mujhe nhi pata hai.</p>

                <p>
                  Tujhe pata hai devyani tere wo sab kaam kiye hai maine. Sab
                  kaam har ek chiz me aata tha sirf sex ke liye nhi.
                </p>

                <p>Tere sath waqt bitane ke liye mai akela pad gaya hu re.</p>

                <p>
                  Lekin mai kitni bhik mangu jab teko kuch farak hi nahi padta
                  hai mere se to mere jana hi behatar hoga tere sath rahane se
                  accha.
                </p>

                <p>
                  Teri yaad aayegi to teri pics hai n mere pass. Teri voice hai
                  mere pass old se lekar new sab hai.
                </p>

                <p>
                  Bich bich ki nhi hai but kafi hai videos hai. Teri smile hai
                  yaar mere phone me.
                </p>

                <p>
                  <strong>Mai teri shaadi ke bich me kabhi nhi aauga</strong>.
                  Maine kabhi nhi socha aisa. Dobara mat sochna devyani.
                </p>

                <p>Tu meri jidd nahi hai - pyaar hai.</p>

                <p>
                  Devyani bs yaar itna hi likhata hu. Padana bhi hai mujhe bahut
                  kuch likhana tha lekin chodo n yaar baccha.
                </p>

                <p>
                  Bs yaar dua me yaad rkhan is gareeb ko jisane tera humsa accha
                  chaha hai.
                </p>

                <p>
                  Bahut sare malaal hai mere andar lekin ab thik hai. Sab accha
                  to nhi ho sakta hai life me.
                </p>

                <p>
                  Mai acche se nhi likh paya hu msg i know but pad lena ek baar
                  aur pura.
                </p>

                <p>
                  Pad legi to reply jarur dena. Mai intjaar karuga humesa ki
                  tarah ignore mt kr dena.
                </p>

                <p>
                  <strong>Ab roshan chup ho jayega</strong>. Kuch bhi nahi
                  bolega mai.
                </p>

                <p>
                  Teko bewafa nhi kahuga devyani. Tujhe laga to tune kiya but
                  5-6 month se jo kiya wo sahi nhi kiya hai.
                </p>

                <p>Mai kahi ka bhi nhi bacha hu devyani kahi ka bhi nahi.</p>

                <p>
                  Lekin isase teko farak nhi pad rha hu mai jiu ya maru tujhe
                  kabhi farak nhi padega ye samjh gaya hu.
                </p>

                <p>
                  Ashirwad dena mujhe devyani.{" "}
                  <strong>Tu meri lakshmi hai</strong>.
                </p>

                <p>Tu bs khush rhe humesa. Hamesa happy rhe. Haste rhna.</p>

                <p>
                  Teri smile bahut pyaari hai. Tu bahut cute hai yaar bahut
                  jyada.
                </p>

                <p>
                  Ter arrogance mast hai yaar. Tere hairs yaar so sexy. Tera
                  calmness, tera ghussa, so sexy.
                </p>

                <p>
                  You know mai janbujkar ghussa dilata tha teko kyoki mai wo
                  face dekh saku.
                </p>

                <p>Ab sayad hi mil pauga mai tere se kabhi bhi.</p>

                <p>
                  <strong>Mujhe dhundana mat devyani</strong>. Good Bye forever.
                </p>

                <p className="text-red-700 font-bold text-xl text-center mt-6">
                  I love you yaar. Tera sath mujhe yaad rahega humesa yaar mere
                  kutte.
                </p>

                <p className="text-red-700 font-bold text-xl text-center">
                  I love you alot. Take care. Good Bye yaar.
                </p>

                <p className="text-red-700 font-bold text-xl text-center">
                  I love you alot. I miss you devyani. I kiss you. I hug you
                  devyani. I fuck you devyani.
                </p>

                <div className="text-center mt-8 p-4 bg-rose-100 rounded-xl">
                  <p className="text-red-800 font-bold text-lg">
                    Your lovingly
                  </p>
                  <p className="text-red-700 font-bold text-xl">
                    Roshan Khapre
                  </p>
                  <p className="text-red-600 text-sm mt-2">
                    A love that will never die
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Final Emotional Goodbye */}
        {showFullMessage && (
          <div className="text-center mt-6 p-6 bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl text-white shadow-2xl">
            <div className="text-4xl mb-4">💔</div>
            <h2 className="text-2xl font-bold mb-2">THIS WAS MY SOUL</h2>
            <p className="text-lg opacity-90">
              Not just love... my everything is in these words
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

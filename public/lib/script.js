"use strict";(()=>{var X0=Object.create;var v0=Object.defineProperty;var k0=Object.getOwnPropertyDescriptor;var j0=Object.getOwnPropertyNames;var K0=Object.getPrototypeOf,W0=Object.prototype.hasOwnProperty;var r0=(c=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(c,{get:(r,o)=>(typeof require!="undefined"?require:r)[o]}):c)(function(c){if(typeof require!="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+c+'" is not supported')});var Q=(c,r)=>()=>(c&&(r=c(c=0)),r);var e0=(c,r)=>()=>(r||c((r={exports:{}}).exports,r),r.exports);var J0=(c,r,o,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of j0(r))!W0.call(c,i)&&i!==o&&v0(c,i,{get:()=>r[i],enumerable:!(s=k0(r,i))||s.enumerable});return c};var X=(c,r,o)=>(o=c!=null?X0(K0(c)):{},J0(r||!c||!c.__esModule?v0(o,"default",{value:c,enumerable:!0}):o,c));var F=(c,r,o)=>new Promise((s,i)=>{var u=l=>{try{h(o.next(l))}catch(C){i(C)}},E=l=>{try{h(o.throw(l))}catch(C){i(C)}},h=l=>l.done?s(l.value):Promise.resolve(l.value).then(u,E);h((o=o.apply(c,r)).next())});var d0=e0((L0,H)=>{(function(c,r){typeof define=="function"&&define.amd?define([],r):typeof r0=="function"&&typeof H=="object"&&H&&H.exports?H.exports=r():(c.dcodeIO=c.dcodeIO||{}).bcrypt=r()})(L0,function(){"use strict";var c={},r=null;function o(a){if(typeof H!="undefined"&&H&&H.exports)try{return r0("crypto").randomBytes(a)}catch(t){}try{var f;return(self.crypto||self.msCrypto).getRandomValues(f=new Uint32Array(a)),Array.prototype.slice.call(f)}catch(t){}if(!r)throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");return r(a)}var s=!1;try{o(1),s=!0}catch(a){}r=null,c.setRandomFallback=function(a){r=a},c.genSaltSync=function(a,f){if(a=a||a0,typeof a!="number")throw Error("Illegal arguments: "+typeof a+", "+typeof f);a<4?a=4:a>31&&(a=31);var t=[];return t.push("$2a$"),a<10&&t.push("0"),t.push(a.toString()),t.push("$"),t.push(g(o(O),O)),t.join("")},c.genSalt=function(a,f,t){if(typeof f=="function"&&(t=f,f=void 0),typeof a=="function"&&(t=a,a=void 0),typeof a=="undefined")a=a0;else if(typeof a!="number")throw Error("illegal arguments: "+typeof a);function x(e){u(function(){try{e(null,c.genSaltSync(a))}catch(n){e(n)}})}if(t){if(typeof t!="function")throw Error("Illegal callback: "+typeof t);x(t)}else return new Promise(function(e,n){x(function(d,p){if(d){n(d);return}e(p)})})},c.hashSync=function(a,f){if(typeof f=="undefined"&&(f=a0),typeof f=="number"&&(f=c.genSaltSync(f)),typeof a!="string"||typeof f!="string")throw Error("Illegal arguments: "+typeof a+", "+typeof f);return n0(a,f)},c.hash=function(a,f,t,x){function e(n){typeof a=="string"&&typeof f=="number"?c.genSalt(f,function(d,p){n0(a,p,n,x)}):typeof a=="string"&&typeof f=="string"?n0(a,f,n,x):u(n.bind(this,Error("Illegal arguments: "+typeof a+", "+typeof f)))}if(t){if(typeof t!="function")throw Error("Illegal callback: "+typeof t);e(t)}else return new Promise(function(n,d){e(function(p,b){if(p){d(p);return}n(b)})})};function i(a,f){for(var t=0,x=0,e=0,n=a.length;e<n;++e)a.charCodeAt(e)===f.charCodeAt(e)?++t:++x;return t<0?!1:x===0}c.compareSync=function(a,f){if(typeof a!="string"||typeof f!="string")throw Error("Illegal arguments: "+typeof a+", "+typeof f);return f.length!==60?!1:i(c.hashSync(a,f.substr(0,f.length-31)),f)},c.compare=function(a,f,t,x){function e(n){if(typeof a!="string"||typeof f!="string"){u(n.bind(this,Error("Illegal arguments: "+typeof a+", "+typeof f)));return}if(f.length!==60){u(n.bind(this,null,!1));return}c.hash(a,f.substr(0,29),function(d,p){d?n(d):n(null,i(p,f))},x)}if(t){if(typeof t!="function")throw Error("Illegal callback: "+typeof t);e(t)}else return new Promise(function(n,d){e(function(p,b){if(p){d(p);return}n(b)})})},c.getRounds=function(a){if(typeof a!="string")throw Error("Illegal arguments: "+typeof a);return parseInt(a.split("$")[2],10)},c.getSalt=function(a){if(typeof a!="string")throw Error("Illegal arguments: "+typeof a);if(a.length!==60)throw Error("Illegal hash length: "+a.length+" != 60");return a.substring(0,29)};var u=typeof process!="undefined"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout;function E(a){var f=[],t=0;return T.encodeUTF16toUTF8(function(){return t>=a.length?null:a.charCodeAt(t++)},function(x){f.push(x)}),f}var h="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),l=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1],C=String.fromCharCode;function g(a,f){var t=0,x=[],e,n;if(f<=0||f>a.length)throw Error("Illegal len: "+f);for(;t<f;){if(e=a[t++]&255,x.push(h[e>>2&63]),e=(e&3)<<4,t>=f){x.push(h[e&63]);break}if(n=a[t++]&255,e|=n>>4&15,x.push(h[e&63]),e=(n&15)<<2,t>=f){x.push(h[e&63]);break}n=a[t++]&255,e|=n>>6&3,x.push(h[e&63]),x.push(h[n&63])}return x.join("")}function D(a,f){var t=0,x=a.length,e=0,n=[],d,p,b,m,y,v;if(f<=0)throw Error("Illegal len: "+f);for(;t<x-1&&e<f&&(v=a.charCodeAt(t++),d=v<l.length?l[v]:-1,v=a.charCodeAt(t++),p=v<l.length?l[v]:-1,!(d==-1||p==-1||(y=d<<2>>>0,y|=(p&48)>>4,n.push(C(y)),++e>=f||t>=x)||(v=a.charCodeAt(t++),b=v<l.length?l[v]:-1,b==-1)||(y=(p&15)<<4>>>0,y|=(b&60)>>2,n.push(C(y)),++e>=f||t>=x)));)v=a.charCodeAt(t++),m=v<l.length?l[v]:-1,y=(b&3)<<6>>>0,y|=m,n.push(C(y)),++e;var w=[];for(t=0;t<e;t++)w.push(n[t].charCodeAt(0));return w}var T=function(){"use strict";var a={};return a.MAX_CODEPOINT=1114111,a.encodeUTF8=function(f,t){var x=null;for(typeof f=="number"&&(x=f,f=function(){return null});x!==null||(x=f())!==null;)x<128?t(x&127):x<2048?(t(x>>6&31|192),t(x&63|128)):x<65536?(t(x>>12&15|224),t(x>>6&63|128),t(x&63|128)):(t(x>>18&7|240),t(x>>12&63|128),t(x>>6&63|128),t(x&63|128)),x=null},a.decodeUTF8=function(f,t){for(var x,e,n,d,p=function(b){b=b.slice(0,b.indexOf(null));var m=Error(b.toString());throw m.name="TruncatedError",m.bytes=b,m};(x=f())!==null;)if(!(x&128))t(x);else if((x&224)===192)(e=f())===null&&p([x,e]),t((x&31)<<6|e&63);else if((x&240)===224)((e=f())===null||(n=f())===null)&&p([x,e,n]),t((x&15)<<12|(e&63)<<6|n&63);else if((x&248)===240)((e=f())===null||(n=f())===null||(d=f())===null)&&p([x,e,n,d]),t((x&7)<<18|(e&63)<<12|(n&63)<<6|d&63);else throw RangeError("Illegal starting byte: "+x)},a.UTF16toUTF8=function(f,t){for(var x,e=null;(x=e!==null?e:f())!==null;){if(x>=55296&&x<=57343&&(e=f())!==null&&e>=56320&&e<=57343){t((x-55296)*1024+e-56320+65536),e=null;continue}t(x)}e!==null&&t(e)},a.UTF8toUTF16=function(f,t){var x=null;for(typeof f=="number"&&(x=f,f=function(){return null});x!==null||(x=f())!==null;)x<=65535?t(x):(x-=65536,t((x>>10)+55296),t(x%1024+56320)),x=null},a.encodeUTF16toUTF8=function(f,t){a.UTF16toUTF8(f,function(x){a.encodeUTF8(x,t)})},a.decodeUTF8toUTF16=function(f,t){a.decodeUTF8(f,function(x){a.UTF8toUTF16(x,t)})},a.calculateCodePoint=function(f){return f<128?1:f<2048?2:f<65536?3:4},a.calculateUTF8=function(f){for(var t,x=0;(t=f())!==null;)x+=a.calculateCodePoint(t);return x},a.calculateUTF16asUTF8=function(f){var t=0,x=0;return a.UTF16toUTF8(f,function(e){++t,x+=a.calculateCodePoint(e)}),[t,x]},a}();Date.now=Date.now||function(){return+new Date};var O=16,a0=10,z0=16,Z0=100,h0=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],m0=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],g0=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892];function Z(a,f,t,x){var e,n=a[f],d=a[f+1];return n^=t[0],e=x[n>>>24],e+=x[256|n>>16&255],e^=x[512|n>>8&255],e+=x[768|n&255],d^=e^t[1],e=x[d>>>24],e+=x[256|d>>16&255],e^=x[512|d>>8&255],e+=x[768|d&255],n^=e^t[2],e=x[n>>>24],e+=x[256|n>>16&255],e^=x[512|n>>8&255],e+=x[768|n&255],d^=e^t[3],e=x[d>>>24],e+=x[256|d>>16&255],e^=x[512|d>>8&255],e+=x[768|d&255],n^=e^t[4],e=x[n>>>24],e+=x[256|n>>16&255],e^=x[512|n>>8&255],e+=x[768|n&255],d^=e^t[5],e=x[d>>>24],e+=x[256|d>>16&255],e^=x[512|d>>8&255],e+=x[768|d&255],n^=e^t[6],e=x[n>>>24],e+=x[256|n>>16&255],e^=x[512|n>>8&255],e+=x[768|n&255],d^=e^t[7],e=x[d>>>24],e+=x[256|d>>16&255],e^=x[512|d>>8&255],e+=x[768|d&255],n^=e^t[8],e=x[n>>>24],e+=x[256|n>>16&255],e^=x[512|n>>8&255],e+=x[768|n&255],d^=e^t[9],e=x[d>>>24],e+=x[256|d>>16&255],e^=x[512|d>>8&255],e+=x[768|d&255],n^=e^t[10],e=x[n>>>24],e+=x[256|n>>16&255],e^=x[512|n>>8&255],e+=x[768|n&255],d^=e^t[11],e=x[d>>>24],e+=x[256|d>>16&255],e^=x[512|d>>8&255],e+=x[768|d&255],n^=e^t[12],e=x[n>>>24],e+=x[256|n>>16&255],e^=x[512|n>>8&255],e+=x[768|n&255],d^=e^t[13],e=x[d>>>24],e+=x[256|d>>16&255],e^=x[512|d>>8&255],e+=x[768|d&255],n^=e^t[14],e=x[n>>>24],e+=x[256|n>>16&255],e^=x[512|n>>8&255],e+=x[768|n&255],d^=e^t[15],e=x[d>>>24],e+=x[256|d>>16&255],e^=x[512|d>>8&255],e+=x[768|d&255],n^=e^t[16],a[f]=d^t[z0+1],a[f+1]=n,a}function G(a,f){for(var t=0,x=0;t<4;++t)x=x<<8|a[f]&255,f=(f+1)%a.length;return{key:x,offp:f}}function y0(a,f,t){for(var x=0,e=[0,0],n=f.length,d=t.length,p,b=0;b<n;b++)p=G(a,x),x=p.offp,f[b]=f[b]^p.key;for(b=0;b<n;b+=2)e=Z(e,0,f,t),f[b]=e[0],f[b+1]=e[1];for(b=0;b<d;b+=2)e=Z(e,0,f,t),t[b]=e[0],t[b+1]=e[1]}function Y0(a,f,t,x){for(var e=0,n=[0,0],d=t.length,p=x.length,b,m=0;m<d;m++)b=G(f,e),e=b.offp,t[m]=t[m]^b.key;for(e=0,m=0;m<d;m+=2)b=G(a,e),e=b.offp,n[0]^=b.key,b=G(a,e),e=b.offp,n[1]^=b.key,n=Z(n,0,t,x),t[m]=n[0],t[m+1]=n[1];for(m=0;m<p;m+=2)b=G(a,e),e=b.offp,n[0]^=b.key,b=G(a,e),e=b.offp,n[1]^=b.key,n=Z(n,0,t,x),x[m]=n[0],x[m+1]=n[1]}function E0(a,f,t,x,e){var n=g0.slice(),d=n.length,p;if(t<4||t>31)if(p=Error("Illegal number of rounds (4-31): "+t),x){u(x.bind(this,p));return}else throw p;if(f.length!==O)if(p=Error("Illegal salt length: "+f.length+" != "+O),x){u(x.bind(this,p));return}else throw p;t=1<<t>>>0;var b,m,y=0,v;Int32Array?(b=new Int32Array(h0),m=new Int32Array(m0)):(b=h0.slice(),m=m0.slice()),Y0(f,a,b,m);function w(){if(e&&e(y/t),y<t)for(var V=Date.now();y<t&&(y=y+1,y0(a,b,m),y0(f,b,m),!(Date.now()-V>Z0)););else{for(y=0;y<64;y++)for(v=0;v<d>>1;v++)Z(n,v<<1,b,m);var L=[];for(y=0;y<d;y++)L.push((n[y]>>24&255)>>>0),L.push((n[y]>>16&255)>>>0),L.push((n[y]>>8&255)>>>0),L.push((n[y]&255)>>>0);if(x){x(null,L);return}else return L}x&&u(w)}if(typeof x!="undefined")w();else for(var Y;;)if(typeof(Y=w())!="undefined")return Y||[]}function n0(a,f,t,x){var e;if(typeof a!="string"||typeof f!="string")if(e=Error("Invalid string / salt: Not a string"),t){u(t.bind(this,e));return}else throw e;var n,d;if(f.charAt(0)!=="$"||f.charAt(1)!=="2")if(e=Error("Invalid salt version: "+f.substring(0,2)),t){u(t.bind(this,e));return}else throw e;if(f.charAt(2)==="$")n="\0",d=3;else{if(n=f.charAt(2),n!=="a"&&n!=="b"&&n!=="y"||f.charAt(3)!=="$")if(e=Error("Invalid salt revision: "+f.substring(2,4)),t){u(t.bind(this,e));return}else throw e;d=4}if(f.charAt(d+2)>"$")if(e=Error("Missing salt rounds"),t){u(t.bind(this,e));return}else throw e;var p=parseInt(f.substring(d,d+1),10)*10,b=parseInt(f.substring(d+1,d+2),10),m=p+b,y=f.substring(d+3,d+25);a+=n>="a"?"\0":"";var v=E(a),w=D(y,O);function Y(V){var L=[];return L.push("$2"),n>="a"&&L.push(n),L.push("$"),m<10&&L.push("0"),L.push(m.toString()),L.push("$"),L.push(g(w,w.length)),L.push(g(V,g0.length*4-1)),L.join("")}if(typeof t=="undefined")return Y(E0(v,w,m));E0(v,w,m,function(V,L){V?t(V,null):t(null,Y(L))},x)}return c.encodeBase64=g,c.decodeBase64=D,c})});var x0,k,j,t0,C0,f0=Q(()=>{"use strict";x0=X(d0());k=(g=>(g[g.BOOLEAN=-1]="BOOLEAN",g[g.UUID=-2]="UUID",g[g.UNKNOWN=0]="UNKNOWN",g[g.BINARY=2]="BINARY",g[g.OCTAL=8]="OCTAL",g[g.HEXADECIMAL=16]="HEXADECIMAL",g[g.BASE64=64]="BASE64",g[g.BASE64_CRYPT=640]="BASE64_CRYPT",g[g.PHC_STRING=-100]="PHC_STRING",g[g.MODULAR_CRYPT_FORMAT=-200]="MODULAR_CRYPT_FORMAT",g))(k||{}),j=(c,r)=>{let o=new Uint8Array(c);if(r===64)return btoa(o.reduce((i,u)=>i+String.fromCharCode(u),""));if(r===640)return x0.encodeBase64(new Uint8Array(c),1/0);let s=0;if(r===2&&(s=8),r===8&&(s=3),r===16&&(s=2),!s)throw new Error(`Radix ${r} is not supported`);return o.reduce((i,u)=>i+u.toString(r).padStart(s,"0"),"")},t0=(c,r)=>{var u,E;let o;if(r===64){let h=atob(c);o=new Uint8Array(h.length);for(let l=0;l<h.length;l+=1)o[l]=h.charCodeAt(l);return o.buffer}if(r===640){let h=x0.decodeBase64(c,1/0);return Uint8Array.from(h).buffer}if(r===-2){let h=c.replace(/-/g,"");return o=new Uint8Array(h.length/2),(u=h.match(new RegExp(".{1,2}","g")))==null||u.forEach((l,C)=>o[C]=parseInt(l,16)),o.buffer}let s=0;if(r===2&&(s=8),r===8&&(s=3),r===16&&(s=2),!s)throw new Error(`Radix ${r} is not supported`);let i=c.length/s;return o=new Uint8Array(i),(E=c.match(new RegExp(`.{1,${s}}`,"g")))==null||E.forEach((h,l)=>o[l]=parseInt(h,r)),o.buffer},C0=c=>c.toLowerCase()==="true"||c.toLowerCase()==="false"?-1:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(c)?-2:/^([01]{8})+$/.test(c)?2:/^([0-7]{3})+$/.test(c)?8:/^([0-9a-f]{2})+$|^([0-9A-F]{2})+$/.test(c)?16:/^([0-9a-zA-Z+\/]{4})*[0-9a-zA-Z+\/]{2}[0-9a-zA-Z+\/=]{2}$/.test(c)?64:/^[0-9a-zA-Z.\/]+$/.test(c)?640:/^\$[a-z0-9-]{4,32}(\$v=[0-9]+)?(\$[a-z0-9-]{1,32}=[a-zA-Z0-9\/+.-]+(,[a-z0-9-]{1,32}=[a-zA-Z0-9\/+.-]+)*)?(\$[a-zA-Z0-9\/+.-]+(\$[a-zA-Z0-9\/+]{2,})?)?$/.test(c)?-100:/^\$[a-zA-Z0-9]+(\$[a-zA-Z0-9.\/]+)+$/.test(c)?-200:0});var A0,P0,A,z=Q(()=>{"use strict";A0=document.querySelector("#loader"),P0=c=>{A0&&c>=0&&c<=100&&(A0.style.width=`${c}%`)},A=P0});var w0,T0,o0,I0,F0,M0,O0=Q(()=>{"use strict";w0='<svg viewBox="0 0 256 256"><g fill="currentColor"><path d="M240 128c-64 0 0 88-64 88H80c-64 0 0-88-64-88c64 0 0-88 64-88h96c64 0 0 88 64 88" opacity=".2"/><path d="M43.18 128a29.78 29.78 0 0 1 8 10.26c4.8 9.9 4.8 22 4.8 33.74c0 24.31 1 36 24 36a8 8 0 0 1 0 16c-17.48 0-29.32-6.14-35.2-18.26c-4.8-9.9-4.8-22-4.8-33.74c0-24.31-1-36-24-36a8 8 0 0 1 0-16c23 0 24-11.69 24-36c0-11.72 0-23.84 4.8-33.74C50.68 38.14 62.52 32 80 32a8 8 0 0 1 0 16c-23 0-24 11.69-24 36c0 11.72 0 23.84-4.8 33.74A29.78 29.78 0 0 1 43.18 128M240 120c-23 0-24-11.69-24-36c0-11.72 0-23.84-4.8-33.74C205.32 38.14 193.48 32 176 32a8 8 0 0 0 0 16c23 0 24 11.69 24 36c0 11.72 0 23.84 4.8 33.74a29.78 29.78 0 0 0 8 10.26a29.78 29.78 0 0 0-8 10.26c-4.8 9.9-4.8 22-4.8 33.74c0 24.31-1 36-24 36a8 8 0 0 0 0 16c17.48 0 29.32-6.14 35.2-18.26c4.8-9.9 4.8-22 4.8-33.74c0-24.31 1-36 24-36a8 8 0 0 0 0-16"/></g></svg>',T0='<svg viewBox="0 0 256 256"><g fill="currentColor"><path d="M232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16" opacity=".2"/><path d="m205.66 85.66l-96 96a8 8 0 0 1-11.32 0l-40-40a8 8 0 0 1 11.32-11.32L104 164.69l90.34-90.35a8 8 0 0 1 11.32 11.32"/></g></svg>',o0='<svg viewBox="0 0 256 256"><g fill="currentColor"><path d="M184 72v144H40V72Z" opacity=".2"/><path d="M184 64H40a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8m-8 144H48V80h128Zm48-168v144a8 8 0 0 1-16 0V48H72a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8"/></g></svg>',I0='<svg viewBox="0 0 24 24"><path fill="currentColor" d="m17.16 7.59l-5.66 5.66l-5.66-5.66l.71-.7l4.95 4.95l4.95-4.95zm0 4l-5.66 5.66l-5.66-5.66l.71-.7l4.95 4.95l4.95-4.95z"/></svg>',F0='<svg viewBox="0 0 256 256"><g fill="currentColor"><path d="M229.66 90.34L90.34 229.66a8 8 0 0 1-11.31 0L26.34 177a8 8 0 0 1 0-11.31L165.66 26.34a8 8 0 0 1 11.31 0L229.66 79a8 8 0 0 1 0 11.34" opacity=".2"/><path d="m235.32 73.37l-52.69-52.68a16 16 0 0 0-22.63 0L20.68 160a16 16 0 0 0 0 22.63l52.69 52.68a16 16 0 0 0 22.63 0L235.32 96a16 16 0 0 0 0-22.63M84.68 224L32 171.31l32-32l26.34 26.35a8 8 0 0 0 11.32-11.32L75.31 128L96 107.31l26.34 26.35a8 8 0 0 0 11.32-11.32L107.31 96L128 75.31l26.34 26.35a8 8 0 0 0 11.32-11.32L139.31 64l32-32L224 84.69Z"/></g></svg>',M0='<svg viewBox="0 0 256 256"><g fill="currentColor"><path d="M200 56v136a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V56Z" opacity=".2"/><path d="M208 56v32a8 8 0 0 1-16 0V64h-56v128h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24V64H64v24a8 8 0 0 1-16 0V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8"/></g></svg>'});var Q0,ee,K,I,U,B=Q(()=>{"use strict";f0();z();O0();Q0=(c,r)=>o=>F(void 0,null,function*(){o.preventDefault();try{yield navigator.clipboard.writeText(c.textContent),r.innerHTML=T0,r.dataset.tooltip="Copied!",setTimeout(()=>{r.innerHTML=o0,r.dataset.tooltip="Copy"},5e3)}catch(s){console.error(s)}}),ee=(c,r,o,s)=>{let i=document.createElement("div");i.classList.add("result");let u=document.createElement("h2");u.textContent=c,i.appendChild(u);let E=document.createElement("div");E.classList.add("content"),E.textContent=r,i.appendChild(E);let h=document.createElement("div");h.classList.add("stats"),[{icon:M0,tooltip:"Character length",content:`${r.length} characters`},{icon:F0,tooltip:"Output length",content:`${s} bits`},{icon:w0,tooltip:"Encoding",content:k[o].toLowerCase()}].forEach(({icon:C,tooltip:g,content:D})=>{let T=document.createElement("div");g&&(T.dataset.tooltip=g),T.innerHTML=C;let O=document.createElement("span");O.textContent=D,T.appendChild(O),h.appendChild(T)}),i.appendChild(h);let l=document.createElement("a");return l.dataset.tooltip="Copy",l.href="#",l.addEventListener("click",Q0(E,l)),l.innerHTML=o0,h.appendChild(l),i},K=document.querySelector("#results"),I=c=>{K.innerHTML=I0,c.forEach(({label:r,value:o,defaultEncoding:s})=>{let i,u,E;if(o instanceof ArrayBuffer)i=s||16,u=j(o,i),E=o.byteLength;else{u=o,i=s||C0(o);try{E=t0(o,i).byteLength}catch(l){E=new TextEncoder().encode(o).byteLength}}let h=ee(r,u,i,E*8);K.appendChild(h)}),K.style.opacity="100%",A(100)},U=()=>{K.style.opacity="0",K.textContent=""}});var B0=e0(U0=>{"use strict";f0();z();B();var W=document.querySelector("textarea");W==null||W.addEventListener("input",()=>{let c=document.querySelector("#digest .character-count");if(c){let r=W.value.length;r===1?c.textContent="1 character":c.textContent=`${r} characters`}});function te(c,r){return F(this,null,function*(){let o=new TextEncoder().encode(c);return yield crypto.subtle.digest(r,o)})}var b0=document.querySelector("button");b0==null||b0.addEventListener("click",()=>F(U0,null,function*(){A(0);let c=W.value,r=J.alg,o=yield te(c,r);I([{label:`${r} Digest`,value:o,defaultEncoding:16}])}));var J,i0=document.querySelector("#digest-select");i0.addEventListener("change",c=>{let r=document.querySelector("#digest menu"),o=r.querySelector("#digest-block-size span"),s=r.querySelector("#digest-method span"),i=r.querySelector("#digest-specification span");J=i0.selectedOptions[0].dataset,o.textContent=J.bs||"",s.textContent=J.method||"",i.textContent=J.spec||"",U()});document.addEventListener("DOMContentLoaded",()=>{i0.dispatchEvent(new Event("change"))})});var _0=e0(S0=>{"use strict";var M=X(d0());B();z();var ae=document.querySelector("#hash-bcrypt .control.cost"),s0=document.querySelector("#hash-bcrypt input.cost");s0.addEventListener("change",()=>{let c=parseInt(s0.value,10);ae.dataset.title=`Cost: 2^${c} = ${Math.pow(2,c).toLocaleString()} iterations`});var $0=(c,r)=>(o,s)=>{if(o&&console.error(o),typeof s=="boolean")I([{label:"Bcrypt Verification Result",value:String(s)}]);else{let i=M.getSalt(s),u=i.replace(/^.+\$/,""),E=s.substring(i.length);console.debug(u,u.length,M.decodeBase64(u,1/0).length),console.debug(E,E.length,M.decodeBase64(E,1/0).length),I([{label:"Bcrypt String",value:s},{label:"Salt",value:u},{label:"Hash",value:E}])}c.textContent=r,c.disabled=!1},N0=c=>r=>{A(r*100),c.textContent=`${String(r*100).substring(0,4)}%`},R=document.querySelector("#hash-bcrypt button");R==null||R.addEventListener("click",()=>{A(0),R.disabled=!0;let c=parseInt(s0.value,10)||10,r=document.querySelector("#hash-bcrypt .password input");M.hash(r.value,c,$0(R,R.textContent),N0(R))});var $=document.querySelector("#verify-bcrypt button");$==null||$.addEventListener("click",()=>F(S0,null,function*(){A(0),$.disabled=!0;let c=document.querySelector("#verify-bcrypt .password input"),r=document.querySelector("#verify-bcrypt .hash input");M.compare(c.value,r.value,$0($,$.textContent),N0($))}))});var D0=e0(q0=>{"use strict";B();f0();z();var _=document.querySelector("#hash-PBKDF2"),N=_.querySelector(".prf-select"),S=_.querySelector("input.derivation-length"),l0=_.querySelector("input.iterations"),u0=_.querySelector("select.input-encoding"),c0=_.querySelector("input.salt"),p0=_.querySelector(".password input"),P=_.querySelector("button");S==null||S.addEventListener("change",()=>{let c=document.querySelector("#passwords menu .output-length span");c&&(c.textContent=`${parseInt(S.value,10)*8} bits`)});N==null||N.addEventListener("change",()=>{let c=document.querySelector("#passwords menu .block-size span");c&&(c.textContent=String(N.selectedOptions[0].dataset.bs))});P==null||P.addEventListener("click",()=>F(q0,null,function*(){A(0),P.disabled=!0;let c=new TextEncoder().encode(p0==null?void 0:p0.value),r=yield crypto.subtle.importKey("raw",c,{name:"PBKDF2"},!1,["deriveBits"]),o;if(c0!=null&&c0.value){let T=Number(u0==null?void 0:u0.selectedOptions[0].value);o=t0(c0.value,T)}else o=crypto.getRandomValues(new Uint8Array(16)).buffer;let s=N==null?void 0:N.selectedOptions[0].dataset.alg,i=Number(l0==null?void 0:l0.value)||1e5,u={name:"PBKDF2",salt:o,hash:s,iterations:i},E=(Number(S==null?void 0:S.value)||32)*8,h=yield crypto.subtle.deriveBits(u,r,E),l=T=>T.replace(/=/g,""),C=l(j(o,64)),g=l(j(h,64)),D=`$pbkdf2$prf=hmac-${s.toLowerCase()},c=${i},dklen=${E}$${C}$${g}`;I([{label:"PBKDF2 String in PHC String Format (recommended by author)",value:D},{label:"Hash",value:h,defaultEncoding:64},{label:"Salt",value:o,defaultEncoding:64}]),P.disabled=!1}))});B();var H0=document.querySelectorAll("#main-menu li"),xe=document.querySelectorAll("main section");H0.forEach(c=>c.addEventListener("click",()=>{var r;H0.forEach(o=>o.classList.remove("active")),xe.forEach(o=>o.classList.remove("active")),c.classList.add("active"),c.dataset.target&&((r=document.querySelector(c.dataset.target))==null||r.classList.add("active")),U()}));var Se=X(B0());z();B();var R0=document.querySelectorAll("#random .section-menu li"),fe=document.querySelectorAll("#random .subsection > div.settings");R0.forEach(c=>c.addEventListener("click",()=>{var r;R0.forEach(o=>o.classList.remove("active")),fe.forEach(o=>o.classList.remove("active")),c.classList.add("active"),c.dataset.target&&((r=document.querySelector(`.${c.dataset.target}`))==null||r.classList.add("active")),U()}));var ce=document.querySelector("#random button");ce.addEventListener("click",()=>{A(0);let c=document.querySelector("#random .byte-length"),r=document.querySelector("#random .output");if(document.querySelector("#random .section-menu li.active").dataset.target==="uuid")return I([{label:"UUID",value:self.crypto.randomUUID()}]);let s=parseInt(c.value,10)||64,i=new Uint8Array(s);if(self.crypto.getRandomValues(i),r.selectedOptions[0].value==="display")return I([{label:"Random Values",value:i.buffer}]);let E=new Blob([i],{type:"application/octet-stream"}),h=window.URL.createObjectURL(E),l=document.createElement("a");l.href=h,l.download=`prng-${s}-bytes.bin`,document.body.appendChild(l),l.click(),document.body.removeChild(l),window.URL.revokeObjectURL(h),A(100)});B();var Re=X(_0()),$e=X(D0());var q=document.querySelector("#passwords menu .algorithm select"),G0=document.querySelector("#passwords .operation");q==null||q.addEventListener("change",c=>{let r=document.querySelector("#passwords menu"),o=r.querySelector(".block-size span"),s=r.querySelector(".method span"),i=r.querySelector(".specification span"),u=q.selectedOptions[0].dataset;o.textContent=u.bs||"",s.textContent=u.method||"",i.textContent=u.spec||"",U()});var V0=()=>{let c=G0.selectedOptions[0].value,r=q.selectedOptions[0].dataset.alg,o=document.querySelector(`#passwords #${c}-${r}`);document.querySelectorAll("#passwords .settings").forEach(i=>i.classList.remove("active")),o==null||o.classList.add("active")};document.addEventListener("DOMContentLoaded",()=>{q.dispatchEvent(new Event("change"))});G0.addEventListener("change",V0);q.addEventListener("change",V0);})();
/**
 * @file Contains functionality for encoding and decoding raw data
 * @author Micah Henning
 * @copyright (C) 2023 Micah Henning
 * @license GPL-3.0-or-later
 */
/**
 * @file Contains functionality for the animated loader
 * @author Micah Henning
 * @copyright (C) 2023 Micah Henning
 * @license GPL-3.0-or-later
 *
 * The loader is a 1 rem thick bar at the top of the page which
 * means to convey a sense of progress for long operations.
 */
/**
 * @file Contains HTML SVG elements for dynamical element creation
 * @author Micah Henning
 * @copyright (C) 2023 Micah Henning
 * @license GPL-3.0-or-later
 *
 * All icons are from Phosphor, except the chevrons which are from
 * Material Design.
 */
/**
 * @file Contains functionality for showing operation results
 * @author Micah Henning
 * @copyright (C) 2023 Micah Henning
 * @license GPL-3.0-or-later
 *
 * The result element is separate from functionality-specific sections
 * and intends to display the output of some operation in a fixed-width
 * font face, while providing common UX elements, like copy.
 */
/**
 * @file Contains functionality for cryptographic digests
 * @author Micah Henning
 * @copyright (C) 2023 Micah Henning
 * @license GPL-3.0-or-later
 *
 * Input data of aribtrary length can be passed through a one-way
 * cryptographic function to produce a digest, or hash of the data.
 * Such digest can be used to verify the integrity of the data when
 * the expected hash is previously known.
 * 
 * We use the Web Crypto API to perform all hashing functions in the
 * browser with native code.
 */
/**
 * @file Contains functionality for bcrypt hashing and verification
 * @author Micah Henning
 * @copyright (C) 2023 Micah Henning
 * @license GPL-3.0-or-later
 *
 * Web Crypto API does not include bcrypt support; however, the bcrypt.js
 * library runs in the browser and uses Web Crypto API's PRNG for secure
 * random data to use in its salt generation function.  The JS implementation
 * of bcrypt is around 30% slower than native implementations, so the progress
 * bar really comes in handy here.
 */
/**
 * @file Contains functionality for PBKDF2 hashing and verification
 * @author Micah Henning
 * @copyright (C) 2023 Micah Henning
 * @license GPL-3.0-or-later
 *
 * Web Crypto API includes native support for the Password-Based Key
 * Derivation Function 2 (PBKDF2).
 */
/**
 * @file Contains functionality for the main menu
 * @author Micah Henning
 * @copyright (C) 2023 Micah Henning
 * @license GPL-3.0-or-later
 */
/**
 * @file Contains functionality for secure generation of random data
 * @author Micah Henning
 * @copyright (C) 2023 Micah Henning
 * @license GPL-3.0-or-later
 *
 * The Web Crypto API lets us generate random data suitable for cryptographic
 * operations using a native Pseudo Random Number Generator.  We enable
 * generation of artibtrary length random data for display or download.  For
 * display, we support binary, octal, and hexadecimal encodings.  We also
 * enable production of random UUIDv4 values.
 */
/**
 * @file Contains functionality for hashing and verification of passwords
 * @author Micah Henning
 * @copyright (C) 2023 Micah Henning
 * @license GPL-3.0-or-later
 *
 * Due to their pervasive and high-value nature, passwords require special
 * application of digest functions to reduce abuse.  In particular, they
 * benefit from salting to mitigate rainbow attacks, and key stretching to
 * drastically increase the energy required to brute force them.
 */
/**
 * @file CryptoTools entry point
 * @author Micah Henning
 * @copyright (C) 2023 Micah Henning
 * @license GPL-3.0-or-later
 */
/*! Bundled license information:

bcryptjs/dist/bcrypt.js:
  (**
   * @license bcrypt.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
   * Released under the Apache License, Version 2.0
   * see: https://github.com/dcodeIO/bcrypt.js for details
   *)
*/
//# sourceMappingURL=script.js.map

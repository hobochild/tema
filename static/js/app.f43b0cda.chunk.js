(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{255:function(e,t,n){"use strict";var r=n(19),o=n.n(r),a=n(8),i=n.n(a),c=n(18),l=n.n(c),s=(n(275),n(0)),f=n(10),u=n(84),d=n(5),g=n(4),m=n(146),p=n(101),h=n(439),b=n(227),v=n(438),y=n(440),O="#ccc",w="#2f95dc";function E(e){return s.createElement(h.a,{name:e.name,size:30,style:{marginBottom:-3},color:e.focused?w:O})}n(225);var x=n(25),j=n.n(x),k=n(85),S=n(31),P=n(74),T=n(148);n(404);T.initializeApp({apiKey:"AIzaSyBfhiy7EVdQQlr54gyKSj9Ahy4PElctPVM",authDomain:"dolos-1.firebaseapp.com",databaseURL:"https://dolos-1.firebaseio.com",projectId:"dolos-1",storageBucket:"dolos-1.appspot.com",messagingSenderId:"137439467118",appId:"1:137439467118:web:423bf732e9757370e0b87f",measurementId:"G-MBGZJGZNGQ"});var C=T.firestore(),R="messages",D="threads",I=n(178),A=n.n(I),H={dark:new A.a,light:new A.a({lightness:.8})};var B=n(256);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=d.a.create({container:{flex:1,backgroundColor:"#F0f0f0f0"},calloutText:{textAlign:"center",padding:10},message:{padding:50,flex:1,borderLeftWidth:10,flexDirection:"row"},messageText:{flexGrow:8},messageText:{flexGrow:2}});function W(e){var t,n=e.item,r=e.onPress;return s.createElement(P.a,{onPress:function(){return r(n)},style:[M.message,{backgroundColor:H.light.hex(n.threadRef.id),borderLeftColor:H.dark.hex(n.threadRef.id)}]},s.createElement(S.a,{style:M.messageText},n.text),s.createElement(S.a,{style:M.messageMeta},(t=new Date(n.createdAt)).getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()))}function N(e){var t=e.onPress;return e.threadRef?s.createElement(P.a,{onPress:function(){return t({})}},s.createElement(S.a,{style:M.calloutText},"Click here to create a new thread")):s.createElement(g.a,null,s.createElement(S.a,{style:M.calloutText},"Click on a message to reply"))}function F(e){var t=e.threadRef,n=e.onPress,r=s.useRef(),o=s.useState(!1),a=l()(o,2),i=a[0],c=a[1],f=function(e){var t=s.useState([]),n=l()(t,2),r=n[0],o=n[1];return s.useEffect((function(){C.collection(R).orderBy("createdAt","desc").limit(6).onSnapshot((function(t){var n=[];t.forEach((function(e){n.unshift(z({id:e.id},e.data()))}));var a=function(e,t){var n={},r=[];return e.forEach((function(e){var o=e[t];n[o]||(r.push(e),n[o]=!0)})),r}([].concat(j()(r),n),"id");o(a),e.current&&setTimeout((function(){e.current.scrollToEnd()}),200)}))}),[]),[r,o]}(r),u=l()(f,2),d=u[0],m=u[1];return s.createElement(g.a,{style:M.container},s.createElement(k.a,{ref:r,style:M.list,data:d,refreshControl:s.createElement(B.a,{refreshing:i,onRefresh:function(){if(!i){c(!0);var e=d[0];return C.collection(R).orderBy("createdAt","desc").startAfter(e.createdAt).limit(6).get().then((function(e){var t=e.docs.map((function(e){return z({id:e.id},e.data())}));m([].concat(j()(t.reverse()),j()(d)))})).then((function(){return c(!1)})).catch((function(){return c(!1)}))}}}),keyExtractor:function(e){return e.id},renderItem:function(e){var t=e.item;return s.createElement(W,{item:t,onPress:n})},ListFooterComponent:function(){return s.createElement(N,{threadRef:t,onPress:n})}}))}var G=n(60),V=d.a.create({container:{flexDirection:"row",backgroundColor:"#fff",minHeight:80,alignItems:"stretch"},input:{flex:7,paddingLeft:10,paddingRight:10},button:{flex:3,flexDirection:"row",alignItems:"center",justifyContent:"center"},buttonText:{textAlign:"center",color:"#fff"}});function _(e){var t=e.threadRef,n=s.useState(""),r=l()(n,2),o=r[0],a=r[1];return s.createElement(g.a,{style:V.container},s.createElement(G.a,{multiline:!0,style:V.input,placeholder:t?"Reply to thread.":"Start a new thread.",onChangeText:a,value:o}),s.createElement(P.a,{style:[{backgroundColor:t?H.dark.hex(t.id):null},V.button],onPress:function(){if(""===o)throw new Error("Invalid Message");C.collection(R).add({text:o,createdAt:Date.now(),threadRef:t||C.collection(D).doc()}),a("")}},s.createElement(g.a,null,s.createElement(h.a,{style:[V.buttonText,{color:t?"white":"black"}],name:"md-send"}))))}n(17);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(){var e=s.useState({}),t=l()(e,2),n=t[0],r=t[1];return s.createElement(g.a,{style:U.container},s.createElement(F,{threadRef:n.threadRef,onPress:r}),s.createElement(_,{threadRef:n.threadRef}))}K.navigationOptions={header:null};var U=d.a.create({container:{flex:1,backgroundColor:"#fff"},developmentModeText:{marginBottom:20,color:"rgba(0,0,0,0.4)",fontSize:14,lineHeight:19,textAlign:"center"},contentContainer:{paddingTop:30},welcomeContainer:{alignItems:"center",marginTop:10,marginBottom:20},welcomeImage:{width:100,height:80,resizeMode:"contain",marginTop:3,marginLeft:-10},getStartedContainer:{alignItems:"center",marginHorizontal:50},homeScreenFilename:{marginVertical:7},codeHighlightText:{color:"rgba(96,100,109, 0.8)"},codeHighlightContainer:{backgroundColor:"rgba(0,0,0,0.05)",borderRadius:3,paddingHorizontal:4},getStartedText:{fontSize:17,color:"rgba(96,100,109, 1)",lineHeight:24,textAlign:"center"},tabBarInfoContainer:Q(Q({position:"absolute",bottom:0,left:0,right:0},f.a.select({ios:{shadowColor:"black",shadowOffset:{width:0,height:-3},shadowOpacity:.1,shadowRadius:3},android:{elevation:20}})),{},{alignItems:"center",backgroundColor:"#fbfbfb",paddingVertical:20}),tabBarInfoText:{fontSize:17,color:"rgba(96,100,109, 1)",textAlign:"center"},navigationFilename:{marginTop:5},helpContainer:{marginTop:15,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{fontSize:14,color:"#2e78b7"}});function Z(){return s.createElement(g.a,{style:Y.container,contentContainerStyle:Y.contentContainer},s.createElement(S.a,null,"Notifications will go here"))}var Y=d.a.create({container:{flex:1,backgroundColor:"#fafafa"},contentContainer:{paddingTop:15},optionIconContainer:{marginRight:12},option:{backgroundColor:"#fdfdfd",paddingHorizontal:15,paddingVertical:15,borderWidth:d.a.hairlineWidth,borderBottomWidth:0,borderColor:"#ededed"},lastOption:{borderBottomWidth:d.a.hairlineWidth},optionText:{fontSize:15,alignSelf:"flex-start",marginTop:1}}),q=Object(y.a)();function X(e){var t=e.navigation,n=e.route;return t.setOptions({headerTitle:$(n)}),s.createElement(q.Navigator,{initialRouteName:"Home"},s.createElement(q.Screen,{name:"Home",component:K,options:{title:"Messages",tabBarIcon:function(e){var t=e.focused;return s.createElement(E,{focused:t,name:"md-code-working"})}}}),s.createElement(q.Screen,{name:"Links",component:Z,options:{title:"Notifications",tabBarIcon:function(e){var t=e.focused;return s.createElement(E,{focused:t,name:"md-book"})}}}))}function $(e){var t,n,r;switch(null!=(t=null==(n=e.state)||null==(r=n.routes[e.state.index])?void 0:r.name)?t:"Home"){case"Home":return"Threaded Messages";case"Links":return"Things you should see";case"Thread":return"<ThreadName>"}}var ee=n(128),te=n(228);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return ae}));var oe=Object(v.a)();function ae(e){var t=s.useState(!1),r=l()(t,2),a=r[0],i=r[1],c=s.useState(),d=l()(c,2),v=d[0],y=d[1],O=s.useRef(),w=function(e){return Object(ee.a)(e,{prefixes:[te.a.makeUrl("/")],config:{Root:{path:"root",screens:{Home:"home",Links:"links",Settings:"settings"}}}})}(O).getInitialState;return s.useEffect((function(){o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m.a.preventAutoHide(),e.t0=y,e.next=5,o.a.awrap(w());case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=9,o.a.awrap(p.b(re(re({},h.a.font),{},{"space-mono":n(426)})));case 9:e.next=14;break;case 11:e.prev=11,e.t2=e.catch(0),console.warn(e.t2);case 14:return e.prev=14,i(!0),m.a.hide(),e.finish(14);case 18:case"end":return e.stop()}}),null,null,[[0,11,14,18]],Promise)}),[]),a||e.skipLoadingScreen?s.createElement(g.a,{style:ie.container},"ios"===f.a.OS&&s.createElement(u.a,{barStyle:"default"}),s.createElement(b.a,{ref:O,initialState:v},s.createElement(oe.Navigator,null,s.createElement(oe.Screen,{name:"Root",component:X})))):null}var ie=d.a.create({container:{flex:1,backgroundColor:"#fff"}})},268:function(e,t,n){n(269),e.exports=n(270)},269:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},275:function(e,t,n){"use strict";(function(e){var t=n(25),r=n.n(t),o=n(10),a=n(48),i=e.setTimeout,c=e.clearTimeout;if("android"===o.a.OS){var l={},s=function e(t,n,o,c){var s=o-Date.now();if(s<=1)a.a.runAfterInteractions((function(){l[t]&&(delete l[t],n.apply(void 0,r()(c)))}));else{var f=Math.min(s,6e4);l[t]=i((function(){return e(t,n,o,c)}),f)}};e.setTimeout=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(6e4<t){var a=Date.now()+t,c="_lt_"+Object.keys(l).length;return s(c,e,a,r),c}return i.apply(void 0,[e,t].concat(r))},e.clearTimeout=function(e){if("string"===typeof e&&e.startsWith("_lt_"))return c(l[e]),void delete l[e];c(e)}}}).call(this,n(41))},426:function(e,t,n){e.exports=n.p+"./fonts/SpaceMono-Regular.ttf"}},[[268,1,2]]]);
//# sourceMappingURL=app.f43b0cda.chunk.js.map
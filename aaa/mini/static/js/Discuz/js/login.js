var qweb_port=80;var qweb_ssl_port=8081;var webAccessPort=window.document.location.port;var webAccessSSLPort=443;var wfmPortEnabled=0;var wfmSSLEnable=0;var wfmPort=8008;var wfmSSLPort=8090;var multimediaLink="";var photosLink="";var musicsLink="";var isWFM2=0;var DSV2Supported="0";var DSV3Supported="0";var isValidResetPwd="$IS_VALID_RESET_PWD$";var ua=navigator.userAgent;var isiPad=/iPad/i.test(ua);var isiPod=/iPod/i.test(ua);var isiPhone=/iPhone/i.test(ua);var isAndroid=/android/i.test(ua);ua=null;QNAP=function(){var n=this;var h=null;Ext.getBody().mask();window.serviceWin={};var A=location.protocol+"//"+location.host;var o="";var D=0,d=1;Ext.Msg.show=Ext.createInterceptor(Ext.Msg.show,function(N){N.icon="";N.closable=false;N.cls="none-bg";return true});Ext.MessageBox.buttonText={ok:IEI_NAS_BUTTON_OK,cancel:IEI_NAS_BUTTON_CANCEL,yes:IEI_NAS_BUTTON_YES,no:IEI_NAS_BUTTON_NO};Ext.MessageBox.minWidth=200;var y={config:{sitePath:"/cgi-bin/",rootUrl:location.protocol+"//"+location.host,serverPort:location.port,serverHost:location.hostname,pathname:location.pathname,pwdCons:{c1:false,c2:false,c3:false,c4:false}},user:{}};var t={STATIONS:"stations-"+Ext.id(),LANG_COMBO:"lang-combo-"+Ext.id(),ACCOUNT:"account-"+Ext.id(),LOGOUT:"log-"+Ext.id(),LOGIN_PWD:Ext.id(),LOGIN_PWD_SKIN:Ext.id(),SERVICE_LINK:"service-link"+Ext.id(),WIKI_LINK:"wiki-link"+Ext.id(),FORUM_LINK:"forum-link"+Ext.id(),OLD_PWD:"old-pwd-"+Ext.id(),NEW_PWD:"new-pwd-"+Ext.id(),CONF_PWD:"conf-pwd-"+Ext.id(),ABOUT:"about-"+Ext.id(),NAS_MODEL:"nas-Name-"+Ext.id(),FEEDBACK_LINK:"feedback-"+Ext.id(),LANG_LABEL:"language-label"+Ext.id()};var k={administration:{image:"/ajax_obj/images/login-icon-admin.png",isAdminOnly:true,serviceIndex:0},photoStation:{image:"/ajax_obj/images/login-icon-photo.png",isAdminOnly:false,serviceIndex:1},musicStation:{image:"/ajax_obj/images/login-icon-music.png",isAdminOnly:false,serviceIndex:2},multimediaStation:{image:"/ajax_obj/images/login-icon-multimedia.png",isAdminOnly:false,serviceIndex:3},webFileManager:{image:"/ajax_obj/images/login-icon-filemanager.png",isAdminOnly:false,serviceIndex:4},downloadStation:{image:"/ajax_obj/images/login-icon-download.png",isAdminOnly:true,serviceIndex:5},surveillanceStation:{image:"/ajax_obj/images/login-icon-nvr.png",isAdminOnly:true,serviceIndex:6},djStation:{image:"/ajax_obj/images/login-icon-dj.png",isAdminOnly:false},TvStation:{image:"/ajax_obj/images/login-icon-tv.png",isAdminOnly:false},videoStation:{image:"/ajax_obj/images/login-icon-video.png",isAdminOnly:false}};if(Ext.isGecko){window.addEventListener("DOMMouseScroll",e,false)}else{if(Ext.isIE7||Ext.isIE8){Ext.getBody().dom.attachEvent("onmousewheel",e)}else{Ext.getBody().dom.addEventListener("mousewheel",e)}}var L=new Ext.data.SimpleStore({fields:["code","language","charset","cookie_name","file_name"],idIndex:3,data:Ext.exampledata.languages});var G=new Ext.Window({title:IEI_NAS_FIRSTPAGE_STR10,cls:"q-win",layout:"form",labelWidth:154,resizable:false,modal:true,height:234,width:375,closeAction:"hide",padding:"26px 0 0 22px",fbar:new Ext.Toolbar({width:200,autoWidth:false,items:[{text:NIC_ITUNES_STR025,cls:"none-bg-btn ok-btn",handler:u}]}),defaults:{width:150},listeners:{show:function(){Ext.getCmp(t.CONF_PWD).setValue("").clearInvalid();Ext.getCmp(t.NEW_PWD).setValue("").clearInvalid();Ext.getCmp(t.OLD_PWD).setValue("").clearInvalid()}},items:[{xtype:"textfield",inputType:"password",maxLength:16,autoCreate:{tag:"input",type:"text",maxLength:"16"},id:t.OLD_PWD,fieldLabel:IEI_NAS_OLD_PWD,validator:function(N){return true}},{xtype:"textfield",inputType:"password",maxLength:16,autoCreate:{tag:"input",type:"text",maxLength:"16"},id:t.NEW_PWD,fieldLabel:IEI_NAS_SECURITY27,validator:function(P){var R=[],O=false;var S=y.user.account||checkName;var Q=y.config.pwdCons;if(isValidResetPwd!="1"&&P==Ext.getCmp(t.OLD_PWD).getValue()){R.push(QUICK11_STR31);if(P!=""){}this.markInvalid(QUICK11_STR31);return QUICK11_STR31}if(Q.c3&&!B(P,S)){O=true;R.push(IEI_NAS_PASSSTRENGTH3)}if(Q.c2&&!x(P,3)){O=true;R.push(IEI_NAS_PASSSTRENGTH2)}if(Q.c1&&!J(P,3)){O=true;R.push(IEI_NAS_PASSSTRENGTH1)}if(Q.c4&&!noCiscoVariationsCheck(P)){R.push(IEI_NAS_PASSSTRENGTH4)}if(O){var N=[IEI_NAS_ALERT_BAD_PWD];return'<ul style="list-style:inside;" ><li>'+N.concat(R).join("</li><li>")+"</li></ul>"}else{return true}}},{xtype:"textfield",inputType:"password",maxLength:16,autoCreate:{tag:"input",type:"text",maxLength:"16"},id:t.CONF_PWD,fieldLabel:IEI_NAS_SECURITY28,validator:function(N){if(N!=Ext.getCmp(t.NEW_PWD).getValue()){return USER_GROUP_GREATE_WIZ_STR26}return true}}]});var I=new Ext.menu.Menu({defaultOffsets:[0,6],defaultAlign:"tr-br?",cls:"account-menu",listeners:{beforeshow:function(N){if(y.user.isAdminGroup){if(y.config.DemoSiteSuppurt=="yes"){if(y.user.account!="admin"){N.getComponent("setPwd").disable()}}}else{N.getComponent("reboot").hide();N.getComponent("shutdown").hide()}if(y.user.userType=="ldap"&&y.user.ldapDisallowChangePwd=="1"){N.getComponent("setPwd").hide()}}},items:[{text:IEI_NAS_FIRSTPAGE_STR10,icon:"/ajax_obj/images/icon-pwd.png",handler:r,itemId:"setPwd"},{text:IEI_NAS_BUTTON_RESTART,icon:"/ajax_obj/images/icon-reboot.png",handler:Ext.createDelegate(z,this,["reboot",F],0),itemId:"reboot"},{text:IEI_NAS_BUTTON_SHUTDOWN,icon:"/ajax_obj/images/icon-power.png",handler:Ext.createDelegate(z,this,["shutdown",C],0),itemId:"shutdown"},{text:IEI_NAS_TIP_LOGOUT,icon:"/ajax_obj/images/icon-exit.png",handler:p},"-",{text:V3_MENU_STR38,icon:"/ajax_obj/images/icon-info.png",handler:a}]});var K=new Ext.Window({title:V3_MENU_STR38,cls:"q-win about",resizable:false,closable:false,modal:true,height:234,width:375,closeAction:"hide",padding:"26px 0 0 0",items:[{xtype:"box",cls:"logo-box",html:{tag:"img",src:"/ajax_obj/images/qnap-logo-b.png"}},{xtype:"box",cls:"msg-box",id:t.ABOUT,html:"<p>Versoin {0}</p><a>www.qnap.com</a><p>©2012 QNAP Systems, Inc. All Rights Reserved.</p>"}],fbar:new Ext.Toolbar({width:200,autoWidth:false,items:[{text:"OK",cls:"none-bg-btn g-btn",handler:function(){K.hide()}}]}),listeners:{beforeshow:function(){var N='<p>{3}</p><p>{2} {0} ({1})</p><p><a href="http://www.qnap.com">www.qnap.com</a></p><p>©2012 QNAP Systems, Inc. All Rights Reserved.</p>';Ext.getCmp(t.ABOUT).update(String.format(N,y.config.firmware,y.config.buildTime,IEI_NAS_SERVER4_VER,y.config.displayModelName))}}});var s=new Ext.data.JsonStore({root:"apps",url:y.config.sitePath+"sysinfoReq.cgi?appsjson=1",idProperty:"id",fields:["url","icon","name","display","surl",{name:"appId",mapping:"id"},{name:"serviceIndex",mapping:"serviceIndex",defaultValue:99}],listeners:{load:function(N){var P=[];var O=Ext.getDoc().dom.location.protocol.toLowerCase();N.each(function(Q){var R=Q.data.appId;if(R=="home"){P.push(Q)}else{if(Q.data.display==0){P.push(Q)}else{if(k[R].isAdminOnly&&!y.user.isAdminGroup){P.push(Q)}else{if(Q.data.url==""&&O=="http:"){P.push(Q)}else{if(Q.data.surl==""&&O=="https:"){P.push(Q)}}}}}if(k[R]){Q.data.serviceIndex=k[R].serviceIndex}});N.remove(P);Ext.getCmp(t.STATIONS).bindStore(s);Ext.getBody().unmask();if(this.reader.jsonData.lang){Ext.util.Cookies.set("nas_lang",this.reader.jsonData.lang)}}}});y.headBar=new Ext.Container({layout:"absolute",cls:"toolbar headbar",defaults:{autoWidth:true},items:[{xtype:"box",html:SYS_LANGUAGE,id:t.LANG_LABEL,cls:"language-label",listeners:{afterrender:function(N){var O=Ext.getCmp(t.LANG_COMBO);N.el.on("click",function(){O.onTriggerClick()})}}},{xtype:"combo",id:t.LANG_COMBO,store:L,displayField:"language",valueField:"cookie_name",value:Ext.util.Cookies.get("nas_lang"),typeAhead:true,mode:"local",cls:"language",listClass:"language",triggerClass:"x-form-arrow-trigger language",triggerAction:"all",selectOnFocus:true,listWidth:150,minListWidth:150,width:19,boxMinHeight:22,listAlign:["tr-br?",[20,10]],listeners:{afterrender:function(O){var N=Ext.getCmp(t.LANG_LABEL);N.el.on("mouseenter",function(){O.trigger.addClass("x-form-trigger-over")});N.el.on("mouseleave",function(){O.trigger.removeClass("x-form-trigger-over")})},select:function(P,N,O){var Q=N.data.cookie_name;Ext.util.Cookies.set("nas_lang",Q);location.href=location.href}}},{xtype:"container",layout:"absolute",cls:"logout",id:t.LOGOUT,listeners:{afterrender:function(N){N.el.on("click",p)}}},{xtype:"container",layout:"absolute",cls:"account",id:t.ACCOUNT,hidden:true,tpl:new Ext.Template('<div class="account-2">{account}<img class="arrow" src="/ajax_obj/images/tri.png" /></div>'),listeners:{afterrender:function(N){N.el.on("click",function(O){I.show(N.el)})}}}]});y.bottomlBar=new Ext.Container({cls:"toolbar bottombar",anchor:"b",defaults:{cls:"official-link",autoWidth:true},items:[{xtype:"container",html:FIRSTPAGE_SERVICE,id:t.SERVICE_LINK},{xtype:"container",html:FIRSTPAGE_WIKI,id:t.WIKI_LINK},{xtype:"container",html:FIRSTPAGE_FORUM,id:t.FORUM_LINK},{xtype:"container",html:FIRSTPAGE_FEEDBACK,id:t.FEEDBACK_LINK}],listeners:{afterrender:function(){var R=c();var Q=Ext.getCmp(t.SERVICE_LINK);Q.on("afterrender",function(S){S.el.on("click",function(){var T="http://www.qnap.com/support";T+="/"+R;window.open(T,"_blank")})});var P=Ext.getCmp(t.WIKI_LINK);P.on("afterrender",function(S){S.el.on("click",function(){var T="http://wiki.qnap.com/wiki/Main_Page";window.open(T,"_blank")})});var N=Ext.getCmp(t.FORUM_LINK);N.on("afterrender",function(S){S.el.on("click",function(){var T="http://forum.qnap.com/";window.open(T,"_blank")})});var O=Ext.getCmp(t.FEEDBACK_LINK);O.on("afterrender",function(S){S.el.on("click",function(){var T=R;switch(T){case"cht":T="zh-tw";break;case"cn":T="zh-cn";break}var U="http://qnap.force.com/SupportForm/QTSBugReport?";U+="lang="+T+"&fw="+y.config.firmware+"-"+y.config.buildTime+"&model="+y.config.internalModelName;window.open(U,"_blank")})})}}});y.loginUI=new Ext.Container({cls:"loginUI",layout:"absolute",y:0,hidden:true,style:"position: absolute;top:0",items:[{xtype:"form",cls:"login-form",itemId:"loginForm",layout:"absolute",width:340,height:490,items:[{xtype:"box",itemId:"logoImg",cls:"logo-img"},{xtype:"box",itemId:"nasName",id:t.NAS_MODEL,cls:"nas-name"},{xtype:"box",itemId:"focusImg",cls:"focus-img",hidden:true},{xtype:"textfield",cls:"account-field",name:"user",itemId:"accountField",fieldLable:"account",emptyText:LDAP_SERVER_STR12,maxLength:32},{xtype:"textfield",cls:"password-field",name:"pwd",id:t.LOGIN_PWD,itemId:"passwordField",fieldLable:"password",inputType:"password",emptyText:QUICK04_STR09,hidden:true,maxLength:16},{xtype:"textfield",cls:"password-field",name:"pwd",id:t.LOGIN_PWD_SKIN,itemId:"passwordFieldSkin",fieldLable:"password",emptyText:QUICK04_STR09,maxLength:16},{xtype:"button",itemId:"loginBtn",cls:"none-bg-btn enter-btn"},{xtype:"button",itemId:"remeberBtn",enableToggle:true,cls:"none-bg-btn rember-btn check-btn",text:QTS_REMEMBER_ME},{xtype:"button",itemId:"sslBtn",hidden:true,enableToggle:true,pressed:window.location.protocol.toUpperCase()=="HTTPS:",cls:"none-bg-btn ssl-btn check-btn",text:QTS_SSL_LOGIN},{xtype:"box",itemId:"msgBox",cls:"msg-box"}],plugins:{init:function(O){var N=this;O.loginFlag=false;O.on("afterrender",N.onAfterrender,N);O.setSSLVisible=Ext.createDelegate(this.setSSLVisible,O);O.setforceSSL=Ext.createDelegate(this.setforceSSL,O);O.login=Ext.createDelegate(this.login,O)},login:function(){y.showInitMask=false;var Y=this;if(Y.loginFlag){return}Y.loginFlag=true;var P=Y.getComponent("accountField");var U=Y.getComponent("passwordField");var T=Y.getComponent("sslBtn");var W=Y.getComponent("remeberBtn");var Q=Y.getComponent("msgBox");var X=Y.getComponent("loginBtn");Ext.getBody().focus();Q.update(QTS_INIT_LOGGING_IN);var Z=Ext.util.Cookies.get("redirectLogin");var V=P.getValue();var aa=U.getValue();var S=Ext.util.Cookies;var O=false;if(T.pressed&&window.location.protocol.toUpperCase()=="HTTP:"){O=true}if(!T.pressed&&window.location.protocol.toUpperCase()=="HTTPS:"){O=true}if(W.pressed){S.set("remeber","1")}else{S.set("remeber","0")}if(O){S.set("redirectLogin",true);S.set("nas_1_u",ezEncode(encodeURIComponent(V)));S.set("nas_1_a",ezEncode(ezEncode(utf16to8(aa))));var N="";if(T.pressed){N+="https://"+y.config.serverHost+":"+y.config.httpsPort+y.config.pathname}else{N+="http://"+y.config.serverHost+":"+y.config.httpPort+y.config.pathname}window.location=N;return}else{S.set("redirectLogin","")}var R={user:V,serviceKey:1,r:Math.random()};var ab=Ext.util.Cookies.get("qtoken");if(ab){R.qtoken=ab}else{R.pwd=ezEncode(utf16to8(aa))}if(W.pressed){R.remme="1"}X.setDisabled(true);Ext.Ajax.request({url:q(y.config.sitePath+"authLogin.cgi",false,false,false),params:R,method:"POST",success:function(ag){var af=Ext.DomQuery.selectValue("authPassed",ag.responseXML);if(af=="1"){o=Ext.DomQuery.selectValue("authSid",ag.responseXML);S.clear("NAS_SID");S.set("NAS_SID",o);y.user.account=Ext.DomQuery.selectValue("user",ag.responseXML);if(W.pressed){var aj=Ext.DomQuery.selectValue("qtoken",ag.responseXML);var ah=new Date().add(Date.YEAR,1);S.set("remeber","1",ah);S.set("nas_1_u",ezEncode(encodeURIComponent(V)),ah);S.set("nas_1_a",ezEncode(Math.random()+"-x-x-x-"+Math.random()));if(aj){S.set("qtoken",aj,ah)}}else{S.set("nas_1_u","");S.set("nas_1_a","");S.set("remeber","");S.set("qtoken","")}b(true)}else{var ae={left:{by:-30,unit:"px"}};var ad={left:{by:60,unit:"px"}};var ac={left:{by:-60,unit:"px"}};var ak={left:{by:30,unit:"px"}};var ai=[ae,ad,ac,ak];X.setDisabled(false);Y.loginFlag=false;U.selectText();Q.update(QTS_LOGIN_FAIELD);Q.addClass("err-msg");Y.show();y.loginUI.getComponent("logo").show();Y.plugins.sharkMe(Y,ai)}},failure:function(){Q.update(MISC_SCH_NEW_STR37);Y.loginFlag=false;X.setDisabled(false)}})},setSSLVisible:function(O){var N=this.getComponent("sslBtn");N.setVisible(O)},setforceSSL:function(O){var N=this.getComponent("sslBtn");if(O){N.toggle(true);N.setVisible(false)}},onAfterrender:function(aa){var W=this;W.doLayout.apply(aa);aa.ownerCt.on("afterlayout",W.doLayout,aa);var P=aa.getComponent("accountField");var S=aa.getComponent("passwordField");var ac=aa.getComponent("passwordFieldSkin");var Z=aa.getComponent("focusImg");var X=aa.getComponent("remeberBtn");var Y=aa.getComponent("loginBtn");var R=aa.getComponent("sslBtn");var O=aa.getComponent("msgBox");var U=Ext.util.Cookies.get("remeber");var ab=Ext.util.Cookies.get("redirectLogin");var ad=Ext.util.Cookies.get("qtoken");if(U||ab){var V=Ext.util.Cookies.get("nas_1_u");var Q=Ext.util.Cookies.get("nas_1_a")||"";Q=ezDecode(ezDecode(Q));Q=utf8to16(Q);if(Ext.isEmpty(Ext.util.Cookies.get("qtoken"))&&ab!="true"){S.setValue("");ac.show();S.hide()}else{var N="";for(var T=0;T<5;T++){N+=parseInt(Math.random()*10)}S.setValue(N);ac.hide();S.inputType="password";S.show();S.focus()}P.setValue(decodeURIComponent(ezDecode(V)));X.pressed=(U=="1")}P.on("afterrender",function(){new Ext.KeyNav(P.el,{down:function(ae){S.focus()},enter:function(ae){S.focus()}})});S.on("afterrender",function(){new Ext.KeyNav(S.el,{up:function(ae){P.focus()},down:function(ae){X.focus()},enter:function(ae){Y.fireEvent("click")}})});X.on("afterrender",function(){new Ext.KeyNav(X.el,{up:function(ae){S.focus()},down:function(ae){if(!R.disabled){R.focus()}},enter:function(ae){X.fireEvent("click")}})});R.on("afterrender",function(){new Ext.KeyNav(R.el,{up:function(ae){X.focus()},enter:function(ae){R.fireEvent("click")}})});P.on("blur",function(){Z.el.removeClass("focus-account-field")});S.on("blur",function(){Z.el.removeClass("focus-password-field");if(S.getValue().trim()==""){ac.show();S.hide()}});P.on("focus",function(){Z.el.replaceClass("focus-password-field","focus-account-field")});S.on("focus",function(){Z.el.replaceClass("focus-account-field","focus-password-field")});S.on("focus",function(){S.setValue("");Ext.util.Cookies.set("qtoken","")},S,{single:true});ac.on("focus",function(){ac.hide();S.show();S.focus()});Y.on("click",function(){aa.login()});y.initCheck=Ext.createInterceptor(y.initCheck,function(ae){O.update(ae);D++;if(d==D){if(!ab){O.update("")}else{y.loginUI.hide()}}return false})},sharkMe:function(P,N){var O=this;if(N.length>0){P.el.animate(N.pop(),0.1,function(){O.sharkMe(P,N)},"easeOut","run")}},doLayout:function(){var O=this;var Q=Ext.getBody().getBox();var P=O.getBox();var N=(Q.width-P.width)/2;var R=(Q.height-P.height)/2;O.setPagePosition(N,R)}}},{xtype:"box",itemId:"logo",cls:"logo"}]});var g=0,l=0;y.loginUI.on("show",function(N){j();Ext.getBody().unmask()});function j(){var N=false;if(g!=y.loginUI.getWidth()){g=y.loginUI.getWidth();N=true}if(l!=y.loginUI.getHeight()){l=y.loginUI.getHeight();N=true}if(N){y.loginUI.doLayout()}if(y.loginUI.isVisible()){j.defer(300)}}y.loginUI.on("show",function(N){j();Ext.getCmp(t.LANG_COMBO).listAlign=["tr-br?",[150,10]]});y.loginUI.on("hide",function(N){Ext.getCmp(t.LANG_COMBO).listAlign=["tr-br?",[20,10]]});y.iconCt=new Ext.Container({layout:"hbox",cls:"icon-area",disabled:true,defaults:{autoWidth:true},items:[{xtype:"container",cls:"right-area",flex:1,items:[{xtype:"dataview",id:t.STATIONS,cls:"serviceView",overClass:"icon-over",overCls:"icon-over2",itemSelector:"span.service",autoShow:true,plugins:{init:function(N){N.refresh=Ext.createSequence(N.refresh,this.refreshClass,N);N.refreshClass=Ext.createDelegate(this.refreshClass,N)},refreshClass:function(){var O=this.all.elements;var N=this.el;var P=N.getCenterXY();this.all.each(function(R){var Q=R.getBox();R.removeClass("future");R.removeClass("past")});if(this.getHeight()>this.ownerCt.getHeight()){this.ownerCt.el.addClass("bottom-shadow")}}},tpl:new Ext.XTemplate('\\r\\n\\t{[this.countFix(values)]}<tpl for="."><span class="service" ><div class="service-icon" style="background-image:url({[this.getImg(values.appId)]});" ondragstart="return false" ><a class="new-tab"><img src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="></a></div><span class="label" >{name}</span></span>\\r\\n<tpl if="xindex%5==0"><span class="list justify_fix">&nbsp;</span>\\r\\n</tpl></tpl><tpl for="this.fix"><span class="left_fix service">&nbsp;</span>\\r\\n</tpl><span class="list justify_fix">&nbsp;</span>',{getDisplayStatus:function(P,O){var N=1;if(P=="home"){N=0}else{if(O==0){N=0}else{if(k[P].isAdminOnly&&!y.user.isAdminGroup){N=0}}}return N},getImg:function(N){return k[N].image},countFix:function(N){var O=5-((N.length)%5);this.fix=new Array(O);return""}}),listeners:{click:function(O,U,R,V){var N=O.getRecord(R);var T=Ext.getDoc().dom.location;var P=T.protocol+"//"+T.hostname;switch(T.protocol.toLowerCase()){case"http:":P+=N.data.url;break;case"https:":P+=N.data.surl;break}P=P.split("?")[0];var S={tag:"form",method:"post",action:P,children:[{tag:"input",type:"hidden",name:"ssid",value:o},{tag:"input",type:"hidden",name:"sid",value:o}]};if(V.getTarget("a")){S.target="_blank"}var Q=Ext.DomHelper.append(Ext.getBody(),S);Q.submit()}}}],listeners:{afterrender:function(N){N.el.on({scope:this,mousewheel:function(R){R.stopEvent();var Q=N.el;var O=Q.getScroll();var P=O.top;if(this.getHeight()>Ext.getCmp(t.STATIONS).getHeight()){return}N.el.scrollTo("top",O.top+(R.getWheelDelta()*-1)*167,true);if(O.top==0){N.el.removeClass("top-shadow")}else{N.el.addClass("top-shadow")}if(O.top==P&&P>0){N.el.removeClass("bottom-shadow")}else{N.el.addClass("bottom-shadow")}Ext.getCmp(t.STATIONS).refreshClass()}})}}}],listeners:{beforeshow:function(){}}});y.viewport=new Ext.Viewport({boxMaxWidth:1024,items:[{xtype:"container",cls:"qos-body",width:1024,layout:"absolute",items:[{xtype:"box",autoEl:{tag:"div",cls:"nas-info",children:[{tag:"span",cls:"QNAP-logo",id:"logoImg",html:"&nbsp;"},{tag:"span",id:"nasName"},{tag:"span",id:"modelName"}]}},y.iconCt,y.loginUI,y.headBar,y.bottomlBar]}]});function w(W){var aj=Ext.DomQuery;document.title=aj.selectValue("hostname",W,"");y.config.hostname=aj.selectValue("hostname",W,"");Ext.get("nasName").update(y.config.hostname);Ext.getCmp(t.NAS_MODEL).update(aj.selectValue("displayModelName",W,""));y.config.displayModelName=aj.selectValue("QDocRoot model displayModelName",W,"").replace(/\s/g,"");y.config.internalModelName=aj.selectValue("QDocRoot model internalModelName",W,"").replace(/\s/g,"");y.config.platform=aj.selectValue("QDocRoot model platform",W,"").replace(/\s/g,"");y.config.firmware=aj.selectValue("QDocRoot firmware version",W,"").replace(/\s/g,"");y.config.buildTime=aj.selectValue("buildTime",W,"").replace(/\s/g,"");var Q=aj.selectNumber("webAccessPort",W);var at=aj.selectNumber("stunnelEnabled",W);var ar=aj.selectNumber("forceSSL",W);var al=aj.selectNumber("stunnelPort",W);var an=aj.selectNumber("WFM2",W);var S=aj.selectNumber("wfmPortEnabled",W);var O=aj.selectNumber("wfmPort",W);var aq=aj.selectNumber("wfmSSLEnabled",W);var ap=aj.selectNumber("wfmSSLPort",W);var N=aj.selectValue("wfmURL",W);var aa=aj.selectValue("DemoSiteSuppurt",W);y.config.DemoSiteSuppurt=aa;y.config.httpPort=Q;y.config.httpsPort=al;var T={status:an==1?true:false,url:N,port:Q,sslenabled:at==1?true:false,sslPort:al};if(S==1){T.port=O;if(aq==1){T.sslPort=ap==1?true:false}}y.config.WFM=T;var U=aj.selectNumber("DSV2Supported",W);var R=aj.selectNumber("DSV3Supported",W);var Z=aj.selectValue("DSV2URL",W);var P={status:((U==1)||(R==1))?true:false,url:Z,port:Q,sslenabled:at==1?true:false,sslPort:al};y.config.DSV2=P;var ai=aj.selectNumber("NVREnabled",W);var aw=aj.selectValue("NVRURL",W);var ah={status:ai==1?true:false,url:aw,port:Q,sslenabled:at==1?true:false,sslPort:al};y.config.NVR=ah;var am=aj.selectNumber("QWebPort",W);var ao=aj.selectNumber("QWebEnabled",W);var ag=aj.selectNumber("QWebSSLEnabled",W);var af=aj.selectNumber("QWebSSLPort",W);var au=aj.selectNumber("MSV2Supported",W);var Y=aj.selectNumber("MSV2WebEnabled",W);var V=aj.selectValue("MSV2URL",W);var ad={status:Y==1?true:false,url:V,port:am,sslenabled:ag==1?true:false,sslPort:af};y.config.MSV2=ad;var ab=aj.selectValue("QPhotosURL",W);var X={status:false,url:ab,port:am,sslenabled:ag==1?true:false,sslPort:af};y.config.photoSt=X;var ac=aj.selectValue("QMusicsURL",W);var av={status:false,url:ac,port:am,sslenabled:ag==1?true:false,sslPort:af};y.config.musicSt=av;var ak=aj.selectValue("QVideosURL",W);var ae={status:false,url:ac,port:am,sslenabled:ag==1?true:false,sslPort:af};y.config.videoSt=ae;y.config.platform=aj.selectValue("model/platform",W)}function H(){h=setTimeout(function(){var N={url:q(y.config.sitePath+"authLogin.cgi",{autoCheckSid:"flag"}),params:{service:"1"},success:function(O){var Q=Ext.DomQuery,P=O.responseXML;if(Q.selectValue("user",P)){H()}else{Ext.Msg.alert(IEI_IDS_STRING84,QTS_CONNECTION_TIMEOUT,function(){p(true)})}}};Ext.Ajax.request(N)},1000*60*61)}function b(){o=Ext.util.Cookies.get("NAS_SID")||"";if(false&&(isValidResetPwd=="1"||Ext.isEmpty(o)||o=="")){qos.showLoginUI();M()}else{var N={url:q(y.config.sitePath+"authLogin.cgi",{}),params:{service:"1",checkDoQuick:"1",r:Math.random()},success:function(O){var R=Ext.DomQuery,P=O.responseXML;if(R.selectValue("doQuick",P,"").length>0){location.href=R.selectValue("doQuick",P)}if(R.selectValue("user",P)){Ext.getBody().addClass("login-status");qos.setSid(o);H();s.reload();Ext.util.Cookies.set("NAS_SID",o);Ext.util.Cookies.set("home","1");y.user.isAdminGroup=R.selectNumber("isAdmin",P)==1;y.user.account=R.selectValue("user",P);Ext.util.Cookies.set("NAS_USER",y.user.account);y.config.pwdCons.c1=R.selectNumber("passwdConstraint01",P,0)==1;y.config.pwdCons.c2=R.selectNumber("passwdConstraint02",P,0)==1;y.config.pwdCons.c3=R.selectNumber("passwdConstraint03",P,0)==1;y.config.pwdCons.c4=R.selectNumber("passwdConstraint04",P,0)==1;Ext.get("modelName").update(R.selectValue("displayModelName",P,""));y.config.nasName=R.selectValue("hostname",P,"");Ext.get("nasName").update(y.config.nasName);var Q=Ext.getCmp(t.ACCOUNT);Q.show().update({account:y.user.account});Ext.getCmp(t.LOGOUT).update("Logout");w(P);y.user.userType=R.selectValue("userType",P);y.user.ldapDisallowChangePwd=R.selectValue("ldapDisallowChangePwd",P);if(R.selectNumber("ldapResetPwd",P)==1){r();return}y.loginUI.getComponent("loginForm").addClass("spin-hide");y.loginUI.hide.defer(650,y.loginUI);y.iconCt.setDisabled(false);y.viewport.doLayout()}else{M();Ext.util.Cookies.set("NAS_SID","");Ext.util.Cookies.set("NAS_USER","");qos.setSid("");y.iconCt.setDisabled(true);qos.showLoginUI();y.viewport.doLayout()}},failure:function(){}};Ext.Ajax.request(N)}}function p(N){Ext.getBody().mask();Ext.Ajax.request({url:qos.getCgiUrl(y.config.sitePath+"authLogout.cgi",{logout:1,r:Math.random()}),success:function(O,P){},failure:Ext.emptyFn()});Ext.util.Cookies.set("NAS_SID","");Ext.util.Cookies.set("home","");Ext.util.Cookies.set("NAS_USER","");Ext.util.Cookies.set("QFS_SID","");Ext.util.Cookies.set("QDS_SID","");Ext.util.Cookies.set("QMS_SID","");Ext.util.Cookies.set("QPS_SID","");Ext.util.Cookies.set("QMS_SID","");Ext.util.Cookies.set("QMMS_SID","");if(N){location.href=location.href}}function r(){G.show()}function u(P,N){if(!(Ext.getCmp(t.NEW_PWD).validate()&Ext.getCmp(t.CONF_PWD).validate()&Ext.getCmp(t.OLD_PWD).validate())){return false}var P=Ext.getCmp(t.NEW_PWD).getValue();var N=Ext.getCmp(t.CONF_PWD).getValue();var O=Ext.getCmp(t.OLD_PWD).getValue();O=ezEncode(utf16to8(O));P=ezEncode(utf16to8(P));N=ezEncode(utf16to8(N));var Q={NEW_PASSWORD:P,VERIFY_PASSWORD:N,r:Math.random()};if(isValidResetPwd=="1"){Q.reset_key=resetKey;Q.endtime=endtime}else{Q.USER_NAME=y.user.account;Q.OLD_PASSWORD=O}Ext.Ajax.request({url:q(y.config.sitePath+"change_password.cgi"),method:"POST",params:Q,success:function(S,T){var R=Ext.DomQuery.selectValue("Change_Password result",S.responseXML);if(R=="0"){Ext.Msg.alert(QUICK11_STR32,IEI_PASSWORD_NOTE02,function(){p();location.href=location.href})}else{Ext.Msg.alert(QUICK11_STR32,IEI_PASSWORD_ALERT_TITLE,function(){})}},failure:function(){}})}function q(Q,P,R,N){var O=A+Q;if(N!==false){O+=Ext.isEmpty(o)?"":"?sid="+o}if(P){Ext.iterate(P,function(S,T){O+=String.format("&{0}={1}",S,T)})}if(R){Ext.iterate(R,function(S,T){O+=String.format("&{0}={1}",S,T)})}return O}function a(){if(!K.rendered){K.render(Ext.getBody())}K.show()}function F(N){if(N=="yes"){Ext.getBody().mask(QUICK11_RESTART_STR04);Ext.Ajax.request({url:q(y.config.sitePath+"sys/sysRequest.cgi",{subfunc:"power_mgmt",r:Math.random()},{apply:"restart"}),method:"POST",success:function(O,P){f.defer(30*1000)}})}}function C(N){if(N=="yes"){Ext.getBody().mask(IEI_IDS_STRING80);Ext.Ajax.request({url:q(y.config.sitePath+"sys/sysRequest.cgi",{subfunc:"power_mgmt",r:Math.random()},{apply:"shutdown"}),method:"POST",success:function(O,P){}})}}function z(O,N){Ext.Ajax.request({url:q(y.config.sitePath+"sys/sysRequest.cgi",{subfunc:"power_mgmt",r:Math.random()},{apply:"rsync_running"}),method:"POST",success:function(V,P){var Q=V.responseXML;var Y=Ext.DomQuery.selectValue("rsyncRunning",Q);var U="";if(O=="reboot"){if(Y=="isRunning"){U=IEI_NAS_MISC14_4}else{if(Y=="notRunning"){U=IEI_NAS_MISC14_1}}}else{if(O=="shutdown"){if(Y=="isRunning"){U=IEI_NAS_MISC14_6+"<br />"+IEI_NAS_MISC14_5}else{if(Y=="notRunning"){U=IEI_NAS_MISC14_6+"<br />"+IEI_NAS_MISC14_2}}}}var S=Ext.Msg.confirm("",U,N).getDialog();if(O=="shutdown"){var Z=S.getFooterToolbar();var X=Z.findBy(function(aa){if(aa.text==IEI_NAS_BUTTON_YES){return true}})[0];X.setDisabled(true);var T=5;X.setText(IEI_NAS_BUTTON_YES+"("+T+")");var W=function(){T--;if(T==0){X.setDisabled(false);X.setText(IEI_NAS_BUTTON_YES)}else{X.setDisabled(true);X.setText(IEI_NAS_BUTTON_YES+"("+T+")")}};var R={run:W,interval:1000,repeat:T};Ext.TaskMgr.start(R);S.on("hide",function(){X.setDisabled(false);Ext.TaskMgr.stop(R)})}}})}function f(){Ext.Ajax.request({url:q(y.config.sitePath+"authLogin.cgi",{service:1,r:Math.random()}),method:"POST",success:function(N,O){if(Ext.DomQuery.selectValue("authPassed",N.responseXML)=="1"){f.defer(5*1000)}else{location.href="/"}},failure:function(){f.defer(5*1000)}})}function M(){var O=Ext.util.Cookies.get("qtoken")||"";var N=Ext.util.Cookies.get("nas_1_u")||"";N=decodeURIComponent(ezDecode(N));if(O.length==0){y.initCheck(QTS_INIT_LOADING)}else{var P={url:q(y.config.sitePath+"authLogin.cgi",{}),params:{user:N,r:Math.random(),qtoken:O,qtokencheck:"1"},success:function(R){var Q=Ext.DomQuery,S=R.responseXML;if(Q.selectValue("authPassed",S)!="1"){Ext.util.Cookies.set("qtoken","");Ext.getCmp(t.LOGIN_PWD).setValue("");Ext.getCmp(t.LOGIN_PWD_SKIN).show();Ext.getCmp(t.LOGIN_PWD).hide()}},callback:function(){E()}};Ext.Ajax.request(P)}}b();function c(){var P=Ext.util.Cookies.get("nas_lang");var O=window.navigator.userLanguage||window.navigator.language;var N="";switch(P){case"ENG":if(O.indexOf("us")>=0){N="useng"}else{N="en"}break;case"SCH":N="cn";break;case"TCH":N=""+L.getById(P).get("file_name");break;case"POR":N="pt";break;case"DUT":N="nl";break;case"KOR":N="kr";break;case"JPN":N="jp";break;case"GER":case"SPA":case"FRE":case"ITA":case"RUS":N=L.getById(P).get("code");break}return N}function E(N){D++;if(d==D){}}function B(P,Q){var N="";N=(typeof Q=="object")?Q.getValue():Q;if(N.length>0){var O=new RegExp(v(N)+"|"+v(m(N)),"i");return !O.test(P)}return true}function m(Q){var P=Q.length;var O="";for(var N=P;N>=0;N--){O+=Q.charAt(N)}return O}function v(N){N=N.replace(/\[/,"\\[");N=N.replace(/\\/,"\\\\");N=N.replace(/\^/,"\\^");N=N.replace(/\$/,"\\$");N=N.replace(/\./,"\\.");N=N.replace(/\|/,"\\|");N=N.replace(/\?/,"\\?");N=N.replace(/\*/,"\\*");N=N.replace(/\+/,"\\+");N=N.replace(/\(/,"\\(");N=N.replace(/\)/,"\\)");return N}function x(Q,N){var P="";for(i=1;i<N;i++){P+="\\1"}var O=new RegExp("(.{1})"+P,"");return !O.test(Q)}function J(P,N){var O=0;if(/[a-z]+/.test(P)){O++}if(/[A-Z]+/.test(P)){O++}if(/[0-9]+/.test(P)){O++}if(/[!"#$%&'()*+,-.\/:;<=>?@\[\\\]\^_`{|}~]+/.test(P)){O++}return(O>=N)}function e(N){var O=0;if(!N){N=window.event}if(N.wheelDelta){O=N.wheelDelta/120}else{if(N.detail){O=-N.detail/3}}}return{totalInitCount:2,config:y.config,setSid:function(N){o=N},getSid:function(){return o},showIcons:function(){y.loginUI.hide()},showLoginUI:function(){var N={url:"/cgi-bin/authLogin.cgi?r="+Math.random(),success:function(R){var Q=Ext.DomQuery,S=R.responseXML;w(S);var P=Q.selectNumber("stunnelEnabled",S);var O=Q.selectNumber("forceSSL",S);y.loginUI.getComponent("loginForm").setSSLVisible(P==1);if(P==1&&O==1){y.loginUI.getComponent("loginForm").setforceSSL(true)}if(Ext.util.Cookies.get("redirectLogin")=="true"){Ext.util.Cookies.set("redirectLogin","");y.loginUI.getComponent("loginForm").login();y.loginUI.getComponent("loginForm").hide();y.loginUI.getComponent("logo").hide()}else{if(Ext.get("QTS_LOADING")){Ext.get("QTS_LOADING").update("")}y.loginUI.show()}},failure:function(){}};Ext.Ajax.request(N)},getCgiUrl:q,checkSid:b}};Ext.onReady(function(){Ext.QuickTips.init();qos=new QNAP()});
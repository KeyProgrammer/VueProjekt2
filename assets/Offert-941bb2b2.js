import{_ as c,c as r,a as n,t as o,n as l,o as f}from"./index-f6c4ff2b.js";const m={name:"Offert",data(){return{jsonDivContentNameVariable:"Offert.container-content.implementationContent",showText:!1}},methods:{changeContentInDiv(t){this.jsonDivContentNameVariable=t}},watch:{jsonDivContentNameVariable(t,e){this.showText=!1,setTimeout(()=>{this.$nextTick(()=>{this.showText=!0})},0)}},mounted(){this.$nextTick(()=>{document.querySelector(".mini_menu li:first-child").classList.add("active")})}},u={class:"content"},O={class:"container"},p={class:"select"},v={class:"implementation",value:"Offert.container-content.implementationContent"},C={class:"consultation",value:"Offert.container-content.consultationContent"},d={class:"analytics",value:"Offert.container-content.analyticsContent"},_={class:"uxDesign",value:"Offert.container-content.uxDesignContent"},D={class:"menu-mini-container"},h={class:"mini_menu"},g={class:"container-content"},V=["innerHTML"];function y(t,e,N,$,i,s){return f(),r("main",u,[n("div",O,[n("div",p,[n("select",{name:"format",id:"format",onChange:e[0]||(e[0]=a=>s.changeContentInDiv(a.target.value))},[n("option",v,o(t.$t("Offert.menuOptions.implementationOption")),1),n("option",C,o(t.$t("Offert.menuOptions.consultationOption")),1),n("option",d,o(t.$t("Offert.menuOptions.analyticsOption")),1),n("option",_,o(t.$t("Offert.menuOptions.uxDesignOption")),1)],32)]),n("div",D,[n("ul",h,[n("li",{class:l({active:i.jsonDivContentNameVariable==="Offert.container-content.implementationContent"}),onClick:e[1]||(e[1]=a=>s.changeContentInDiv("Offert.container-content.implementationContent"))},[n("a",null,o(t.$t("Offert.menuOptions.implementationOption")),1)],2),n("li",{class:l({active:i.jsonDivContentNameVariable==="Offert.container-content.consultationContent"}),onClick:e[2]||(e[2]=a=>s.changeContentInDiv("Offert.container-content.consultationContent"))},[n("a",null,o(t.$t("Offert.menuOptions.consultationOption")),1)],2),n("li",{class:l({active:i.jsonDivContentNameVariable==="Offert.container-content.analyticsContent"}),onClick:e[3]||(e[3]=a=>s.changeContentInDiv("Offert.container-content.analyticsContent"))},[n("a",null,o(t.$t("Offert.menuOptions.analyticsOption")),1)],2),n("li",{class:l({active:i.jsonDivContentNameVariable==="Offert.container-content.uxDesignContent"}),onClick:e[4]||(e[4]=a=>s.changeContentInDiv("Offert.container-content.uxDesignContent"))},[n("a",null,o(t.$t("Offert.menuOptions.uxDesignOption")),1)],2)])]),n("div",g,[n("p",{innerHTML:t.$t(i.jsonDivContentNameVariable)},null,8,V)])])])}const j=c(m,[["render",y],["__scopeId","data-v-8dda1a1c"]]);export{j as default};

(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{P3MA:function(o,i,t){"use strict";t.r(i),t.d(i,"ContabilidadModule",(function(){return Fo}));var e=t("iInd"),a=t("qNWX"),n=t("2IH+"),c=t("mrSG"),r=t("EUZL"),b=t("3JXr"),s=t("8Y7J"),l=t("LDwG"),d=t("SVse");const u=["fileInput"];function h(o,i){if(1&o&&(s.Xb(0,"tr"),s.Xb(1,"td",21),s.Dc(2),s.Wb(),s.Xb(3,"td",21),s.Dc(4),s.Wb(),s.Xb(5,"td",21),s.Dc(6),s.Wb(),s.Wb()),2&o){const o=i.$implicit;s.Fb(2),s.Fc(" ",o.noEmpleado," "),s.Fb(2),s.Fc(" ",o.nombre," "),s.Fb(2),s.Fc(" ",o.saldo," ")}}function f(o,i){1&o&&s.Sb(0,"i",22)}function m(o,i){1&o&&s.Sb(0,"i",22)}function g(o,i){if(1&o){const o=s.Yb();s.Xb(0,"div",12),s.Xb(1,"table",13),s.Xb(2,"thead",14),s.Xb(3,"tr"),s.Xb(4,"th",15),s.Dc(5,"Clave"),s.Wb(),s.Xb(6,"th",15),s.Dc(7,"Nombre"),s.Wb(),s.Xb(8,"th",15),s.Dc(9,"Importe"),s.Wb(),s.Wb(),s.Wb(),s.Xb(10,"tbody"),s.Cc(11,h,7,3,"tr",16),s.Wb(),s.Wb(),s.Xb(12,"div",17),s.Xb(13,"button",18),s.ec("click",(function(){return s.wc(o),s.gc().clean()})),s.Dc(14,"Limpiar "),s.Cc(15,f,1,0,"i",19),s.Wb(),s.Xb(16,"button",20),s.ec("click",(function(){return s.wc(o),s.gc().validar()})),s.Dc(17,"Validar "),s.Cc(18,m,1,0,"i",19),s.Wb(),s.Wb(),s.Wb()}if(2&o){const o=s.gc();s.Fb(11),s.mc("ngForOf",o.datosConciliacion),s.Fb(2),s.mc("disabled",o.loading),s.Fb(2),s.mc("ngIf",o.loading),s.Fb(1),s.mc("disabled",o.loading),s.Fb(2),s.mc("ngIf",o.loading)}}function p(o,i){1&o&&(s.Xb(0,"h3"),s.Dc(1," Ahorradores Validados"),s.Wb())}function X(o,i){if(1&o&&(s.Xb(0,"tr"),s.Xb(1,"td",21),s.Dc(2),s.Wb(),s.Xb(3,"td",21),s.Dc(4),s.hc(5,"uppercase"),s.Wb(),s.Xb(6,"td",21),s.Dc(7),s.Wb(),s.Xb(8,"td",21),s.Dc(9," Validado "),s.Wb(),s.Wb()),2&o){const o=i.$implicit;s.Fb(2),s.Fc(" ",o.noEmpleado," "),s.Fb(2),s.Fc(" ",s.ic(5,3,o.nombre)," "),s.Fb(3),s.Fc(" ",o.saldo," ")}}function W(o,i){if(1&o&&(s.Xb(0,"table",13),s.Xb(1,"thead",14),s.Xb(2,"tr"),s.Xb(3,"th",15),s.Dc(4,"Clave"),s.Wb(),s.Xb(5,"th",15),s.Dc(6,"Nombre"),s.Wb(),s.Xb(7,"th",15),s.Dc(8,"Importe"),s.Wb(),s.Xb(9,"th",15),s.Dc(10,"Observaciones"),s.Wb(),s.Wb(),s.Wb(),s.Xb(11,"tbody"),s.Cc(12,X,10,5,"tr",16),s.Wb(),s.Wb()),2&o){const o=s.gc(2);s.Fb(12),s.mc("ngForOf",o.conciliacionCorrectos)}}function v(o,i){1&o&&(s.Xb(0,"h3"),s.Dc(1," Ahorradores No Validados"),s.Wb())}const D=function(o){return{"alert-danger":o}};function C(o,i){if(1&o&&(s.Xb(0,"tr",26),s.Xb(1,"td",21),s.Dc(2),s.Wb(),s.Xb(3,"td",21),s.Dc(4),s.hc(5,"uppercase"),s.Wb(),s.Xb(6,"td",21),s.Dc(7),s.Wb(),s.Xb(8,"td",21),s.Dc(9),s.hc(10,"uppercase"),s.Wb(),s.Wb()),2&o){const o=i.$implicit;s.mc("ngClass",s.pc(9,D,"Validado"!=o.observaciones)),s.Fb(2),s.Fc(" ",o.noEmpleado," "),s.Fb(2),s.Fc(" ",s.ic(5,5,o.nombre)," "),s.Fb(3),s.Fc(" ",o.saldo," "),s.Fb(2),s.Fc(" ",s.ic(10,7,o.observaciones)," ")}}function F(o,i){if(1&o&&(s.Xb(0,"table",13),s.Xb(1,"thead",14),s.Xb(2,"tr"),s.Xb(3,"th",15),s.Dc(4,"Clave"),s.Wb(),s.Xb(5,"th",15),s.Dc(6,"Nombre"),s.Wb(),s.Xb(7,"th",15),s.Dc(8,"Importe"),s.Wb(),s.Xb(9,"th",15),s.Dc(10,"Observaciones"),s.Wb(),s.Wb(),s.Wb(),s.Xb(11,"tbody"),s.Cc(12,C,11,11,"tr",25),s.Wb(),s.Wb()),2&o){const o=s.gc(2);s.Fb(12),s.mc("ngForOf",o.conciliacionErroneos)}}function y(o,i){1&o&&s.Sb(0,"i",22)}function I(o,i){if(1&o){const o=s.Yb();s.Xb(0,"div",12),s.Cc(1,p,2,0,"h3",23),s.Cc(2,W,13,1,"table",24),s.Cc(3,v,2,0,"h3",23),s.Cc(4,F,13,1,"table",24),s.Xb(5,"div",17),s.Xb(6,"button",18),s.ec("click",(function(){return s.wc(o),s.gc().clean()})),s.Dc(7,"Limpiar "),s.Cc(8,y,1,0,"i",19),s.Wb(),s.Wb(),s.Wb()}if(2&o){const o=s.gc();s.Fb(1),s.mc("ngIf",o.conciliacionCorrectos.length>0),s.Fb(1),s.mc("ngIf",o.conciliacionCorrectos.length>0),s.Fb(1),s.mc("ngIf",o.conciliacionErroneos.length>0),s.Fb(1),s.mc("ngIf",o.conciliacionErroneos.length>0),s.Fb(2),s.mc("disabled",o.loading),s.Fb(2),s.mc("ngIf",o.loading)}}let S=(()=>{class o{constructor(o){this.ahorroService=o,this.datosConciliacion=[],this.conciliacionProcesados=[],this.conciliacionCorrectos=[],this.conciliacionErroneos=[],this.loading=!1}ngOnInit(){}onFileChange(o){this.loading=!0;let i=null,t=null;const e=new FileReader,a=o[0];e.onload=o=>{const a=e.result;let n;for(n in i=r.read(a,{type:"binary"}),t=i.SheetNames.reduce((o,t)=>{const e=i.Sheets[t];return o[t]=r.utils.sheet_to_json(e,{range:16}),r.utils.sheet_to_json(e),o},{}),t);const c=t[n];for(const i of c){const o=JSON.parse(JSON.stringify(i)),t=Object.keys(o);if(3===Object.keys(o).length&&!String(i[t[0]]).includes("Dedu")){let o=String(i[t[2]]);o=o.replace(",","");const e=new b.a(i[t[0]],i[t[1]],parseInt(o,10));this.datosConciliacion.push(e)}}},e.readAsBinaryString(a),this.loading=!1}validar(){return Object(c.a)(this,void 0,void 0,(function*(){this.loading=!0,this.conciliacionProcesados=this.datosConciliacion,this.datosConciliacion=[],console.log("Request "+JSON.stringify(this.conciliacionProcesados));const o=yield this.ahorroService.postConciliacion(this.conciliacionProcesados).toPromise(),i=JSON.parse(JSON.stringify(o));console.log("Resultado "+JSON.stringify(i)),this.conciliacionCorrectos=i.correctos,this.conciliacionErroneos=i.errores,this.loading=!1}))}clean(){this.fileInput.nativeElement.value=null,this.datosConciliacion=[],this.conciliacionProcesados=[],this.conciliacionCorrectos=[],this.conciliacionErroneos=[],this.loading=!1}}return o.\u0275fac=function(i){return new(i||o)(s.Rb(l.a))},o.\u0275cmp=s.Lb({type:o,selectors:[["cybord-conciliacion-conta"]],viewQuery:function(o,i){var t;1&o&&s.Ic(u,!0),2&o&&s.tc(t=s.fc())&&(i.fileInput=t.first)},decls:16,vars:2,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"form-group","row"],["for","file-input",1,"col-md-2","col-form-label"],[1,"col-md-9"],["id","file-input","type","file","accept",".xlsx, .xls, .csv  ","name","file-input",1,"file-input",3,"change"],["fileInput",""],["class","table-responsive slide_1",4,"ngIf"],[1,"table-responsive","slide_1"],[1,"table","table-bordered","table-sm"],[1,"thead-dark"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf"],[1,"col-sm-6"],[1,"btn","btn-warning",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"btn","btn-success",3,"disabled","click"],["scope","row",1,"text-left"],[1,"fa","fa-spinner","fa-spin"],[4,"ngIf"],["class","table table-bordered table-sm",4,"ngIf"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"]],template:function(o,i){1&o&&(s.Xb(0,"div",0),s.Xb(1,"div",1),s.Xb(2,"div",2),s.Xb(3,"div",3),s.Xb(4,"div",4),s.Xb(5,"strong"),s.Dc(6,"Conciliacion"),s.Wb(),s.Wb(),s.Xb(7,"div",5),s.Xb(8,"div",6),s.Xb(9,"label",7),s.Dc(10,"Subir Archivo"),s.Wb(),s.Xb(11,"div",8),s.Xb(12,"input",9,10),s.ec("change",(function(o){return i.onFileChange(o.target.files)})),s.Wb(),s.Wb(),s.Wb(),s.Cc(14,g,19,5,"div",11),s.Cc(15,I,9,6,"div",11),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&o&&(s.Fb(14),s.mc("ngIf",i.datosConciliacion.length>0),s.Fb(1),s.mc("ngIf",i.conciliacionProcesados.length>0))},directives:[d.n,d.m,d.l],pipes:[d.u],styles:[""]}),o})();class M{constructor(o,i,t,e){this.validado=o,this.numeroUsuario=i,this.nombre=t,this.importe=e}}class w{constructor(){}}var O=t("ESM5"),E=t("LqlI");const k=["modalConfirmacion"],A=["fileInput"];function N(o,i){if(1&o&&(s.Xb(0,"p"),s.Dc(1),s.Wb()),2&o){const o=i.$implicit;s.Fb(1),s.Ec(o)}}function P(o,i){if(1&o&&(s.Xb(0,"div",25),s.Cc(1,N,2,1,"p",26),s.Wb()),2&o){const o=s.gc();s.Fb(1),s.mc("ngForOf",o.errorMessages)}}const U=function(o){return{"alert-danger":o}};function R(o,i){if(1&o&&(s.Xb(0,"tr",36),s.Xb(1,"td",37),s.Dc(2),s.Wb(),s.Xb(3,"td",37),s.Dc(4),s.Wb(),s.Xb(5,"td",37),s.Dc(6),s.Wb(),s.Xb(7,"td",37),s.Dc(8),s.Wb(),s.Wb()),2&o){const o=i.$implicit;s.mc("ngClass",s.pc(5,U,"Validado"!=o.observaciones)),s.Fb(2),s.Fc(" ",o.numeroUsuario," "),s.Fb(2),s.Fc(" ",o.nombre," "),s.Fb(2),s.Fc(" ",o.importe," "),s.Fb(2),s.Fc(" ",o.observaciones," ")}}function j(o,i){1&o&&s.Sb(0,"i",38)}function T(o,i){1&o&&s.Sb(0,"i",38)}function x(o,i){if(1&o){const o=s.Yb();s.Xb(0,"div",27),s.Xb(1,"table",28),s.Xb(2,"thead",29),s.Xb(3,"tr"),s.Xb(4,"th",30),s.Dc(5,"Clave"),s.Wb(),s.Xb(6,"th",30),s.Dc(7,"Nombre"),s.Wb(),s.Xb(8,"th",30),s.Dc(9,"Importe"),s.Wb(),s.Xb(10,"th",30),s.Dc(11,"Observaciones"),s.Wb(),s.Wb(),s.Wb(),s.Xb(12,"tbody"),s.Cc(13,R,9,7,"tr",31),s.Wb(),s.Wb(),s.Xb(14,"div",32),s.Xb(15,"button",33),s.ec("click",(function(){return s.wc(o),s.gc().clean()})),s.Dc(16,"Limpiar "),s.Cc(17,j,1,0,"i",34),s.Wb(),s.Xb(18,"button",35),s.ec("click",(function(){return s.wc(o),s.gc().openModal()})),s.Dc(19,"Cargar "),s.Cc(20,T,1,0,"i",34),s.Wb(),s.Wb(),s.Wb()}if(2&o){const o=s.gc();s.Fb(13),s.mc("ngForOf",o.datosAhorro),s.Fb(2),s.mc("disabled",o.loading),s.Fb(2),s.mc("ngIf",o.loading),s.Fb(1),s.mc("disabled",!o.tablaValida),s.Fb(2),s.mc("ngIf",o.loading)}}let L=(()=>{class o{constructor(o,i,t){this.renderer=o,this.userService=i,this.ahorroService=t,this.errorMessages=[],this.loading=!1,this.tablaValida=!0}ngOnInit(){this.datosAhorro=new Array}onFileChange(o){if(0===o.length)return;this.tablaValida=!0,this.loading=!0;let i=null,t=null;const e=new FileReader,a=o[0];e.onload=o=>{const a=e.result;let n;for(n in i=r.read(a,{type:"binary"}),t=i.SheetNames.reduce((o,t)=>{const e=i.Sheets[t];return o[t]=r.utils.sheet_to_json(e,{range:3}),r.utils.sheet_to_json(e),o},{}),t);this.cargarValidar(t[n])},e.readAsBinaryString(a)}cargarValidar(o){return Object(c.a)(this,void 0,void 0,(function*(){const i=Object.keys(o[0]);for(const e of o){const o=!1;let a;if(void 0!==e[i[0]]){const n=new M(!o,e[i[0]],e[i[1]],e[i[2]]);this.datosAhorro.push(n);try{a=yield this.userService.getUsuarioByNumeroUsuario(e[i[0]]).toPromise(),this.validar(a,n)}catch(t){n.observaciones=" No es valida la clave del ahorrador ",this.tablaValida=!1}}}this.loading=!1}))}clean(){this.fileInput.nativeElement.value=null,this.datosAhorro=new Array,this.errorMessages=[]}cargar(){const o=new Array;this.datosAhorro.forEach(i=>{const t=new w;t.idUsuario=i.idUsuario,t.tipo="ahorro",t.monto=i.importe,t.validado=!0,o.push(t)}),this.ahorroService.postSaldoBulk(o).toPromise().then(o=>{alert("Se registraron depositos de "+o.length+" ahorradores"),this.clean(),this.modalConfirmacion.hide()}).catch(o=>{alert("Se registro un error al cargar los ahorros "+o),this.modalConfirmacion.hide()})}validar(o,i){i.idUsuario=o.content[0].id;let t=!0,e=o.content[0].nombre.trim();e=e.toUpperCase();let a=e.split(" ");a=a.sort();let n=i.nombre.trim();n=n.toUpperCase();let c=n.split(" ");c=c.sort(),a.length===c.length&&a.every((function(o,i){return o===c[i]}))||(this.agregarObservacion(i,"No coincide el nombre del ahorrador"),t=!1),o.content[0].activo||(this.agregarObservacion(i,"El ahorrador no esta activo"),t=!1),"EXTERNO"!==o.content[0].tipoUsuario&&(this.agregarObservacion(i,"El usuario no es externo"),t=!1),o.content[0].ahorrador||(this.agregarObservacion(i,"El usuario no es ahorrador"),t=!1),(void 0===i.importe||isNaN(i.importe))&&(this.agregarObservacion(i,"El importe no es correcto"),t=!1),void 0===i.observaciones&&this.agregarObservacion(i,"Validado"),t||(this.tablaValida=!1)}agregarObservacion(o,i){void 0===o.observaciones?o.observaciones=i:o.observaciones+=", "+i}openModal(){this.modalConfirmacion.show()}decline(){this.modalConfirmacion.hide()}}return o.\u0275fac=function(i){return new(i||o)(s.Rb(s.K),s.Rb(O.a),s.Rb(l.a))},o.\u0275cmp=s.Lb({type:o,selectors:[["cybord-ahorro-externos"]],viewQuery:function(o,i){var t;1&o&&(s.Ic(k,!0),s.Ic(A,!0)),2&o&&(s.tc(t=s.fc())&&(i.modalConfirmacion=t.first),s.tc(t=s.fc())&&(i.fileInput=t.first))},decls:33,vars:2,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col"],[1,"card"],[1,"card-header"],[1,"card-body"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"form-group","row"],["for","file-input",1,"col-md-2","col-form-label"],[1,"col-md-9"],["id","file-input","type","file","accept",".xlsx, .xls, .csv  ","name","file-input",1,"file-input",3,"change"],["fileInput",""],["class","table-responsive slide_1",4,"ngIf"],["bsModal","","id","modalConfirmacion","tabindex","-1","role","dialog","aria-labelledby","modalConfirmacion","aria-hidden","true",1,"modal","fade"],["modalConfirmacion","bs-modal"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","modalConfirmacionLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-secondary",3,"click"],["role","alert",1,"alert","alert-danger"],[4,"ngFor","ngForOf"],[1,"table-responsive","slide_1"],[1,"table","table-bordered","table-sm"],[1,"thead-dark"],["scope","col",1,"text-center"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"col-sm-6"],[1,"btn","btn-warning",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"btn","btn-success",3,"disabled","click"],[3,"ngClass"],["scope","row",1,"text-left"],[1,"fa","fa-spinner","fa-spin"]],template:function(o,i){1&o&&(s.Xb(0,"div",0),s.Xb(1,"div",1),s.Xb(2,"div",2),s.Xb(3,"div",3),s.Xb(4,"div",4),s.Xb(5,"strong"),s.Dc(6,"Carga de ahorro externos"),s.Wb(),s.Wb(),s.Xb(7,"div",5),s.Cc(8,P,2,1,"div",6),s.Xb(9,"div",7),s.Xb(10,"label",8),s.Dc(11,"Subir Archivo"),s.Wb(),s.Xb(12,"div",9),s.Xb(13,"input",10,11),s.ec("change",(function(o){return i.onFileChange(o.target.files)})),s.Wb(),s.Wb(),s.Wb(),s.Cc(15,x,21,5,"div",12),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(16,"div",13,14),s.Xb(18,"div",15),s.Xb(19,"div",16),s.Xb(20,"div",17),s.Xb(21,"h5",18),s.Dc(22,"Confirmacion"),s.Wb(),s.Xb(23,"button",19),s.ec("click",(function(){return i.decline()})),s.Xb(24,"span",20),s.Dc(25,"\xd7"),s.Wb(),s.Wb(),s.Wb(),s.Xb(26,"div",21),s.Dc(27," \xbfResgistrar ahorros externos? "),s.Wb(),s.Xb(28,"div",22),s.Xb(29,"button",23),s.ec("click",(function(){return i.cargar()})),s.Dc(30,"Si"),s.Wb(),s.Xb(31,"button",24),s.ec("click",(function(){return i.decline()})),s.Dc(32,"No"),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&o&&(s.Fb(8),s.mc("ngIf",i.errorMessages.length>0),s.Fb(7),s.mc("ngIf",i.datosAhorro.length>0))},directives:[d.n,E.a,d.m,d.l],styles:[""]}),o})();var V=t("aBT+"),_=t("uwdg"),z=t("+vBq"),Y=t("EwKM"),B=t("q+li"),$=t("s7LF"),G=t("ienR");function J(o,i){1&o&&s.Sb(0,"i",30)}function q(o,i){1&o&&(s.Xb(0,"div",31),s.Dc(1," No se encontraron resultados "),s.Wb())}function H(o,i){1&o&&(s.Xb(0,"option",41),s.Dc(1,"20"),s.Wb())}function K(o,i){1&o&&(s.Xb(0,"option",42),s.Dc(1,"50"),s.Wb())}function Q(o,i){if(1&o){const o=s.Yb();s.Xb(0,"select",37),s.ec("ngModelChange",(function(i){return s.wc(o),s.gc(2).filterParams.size=i}))("change",(function(i){return s.wc(o),s.gc(2).onChangePageSize(i.target.value)})),s.Xb(1,"option",38),s.Dc(2,"10"),s.Wb(),s.Cc(3,H,2,0,"option",39),s.Cc(4,K,2,0,"option",40),s.Wb()}if(2&o){const o=s.gc(2);s.mc("ngModel",o.filterParams.size),s.Fb(3),s.mc("ngIf",o.page.number<o.page.totalElements/20),s.Fb(1),s.mc("ngIf",o.page.number<o.page.totalElements/50)}}function Z(o,i){if(1&o){const o=s.Yb();s.Xb(0,"div",32),s.Xb(1,"button",33),s.ec("click",(function(){return s.wc(o),s.gc().downloadXLSFile()})),s.Sb(2,"i",34),s.Wb(),s.Cc(3,Q,5,3,"select",35),s.Xb(4,"strong",36),s.Dc(5," Tama\xf1o Pagina \xa0\xa0\xa0\xa0"),s.Wb(),s.Wb()}if(2&o){const o=s.gc();s.Fb(3),s.mc("ngIf",0==o.page.last||1==o.page.first)}}function oo(o,i){if(1&o&&(s.Xb(0,"tr"),s.Xb(1,"td",48),s.Dc(2),s.Wb(),s.Xb(3,"td",48),s.Dc(4),s.Wb(),s.Xb(5,"td",48),s.Dc(6),s.Wb(),s.Xb(7,"td",48),s.Dc(8),s.Wb(),s.Xb(9,"td",49),s.Dc(10),s.hc(11,"currency"),s.Wb(),s.Xb(12,"td",48),s.Dc(13),s.Wb(),s.Wb()),2&o){const o=i.$implicit;s.Fb(2),s.Ec(o.noEmpleado),s.Fb(2),s.Ec(o.tipoEmpleado),s.Fb(2),s.Ec(o.ahorrador),s.Fb(2),s.Ec(o.tipo),s.Fb(2),s.Ec(s.ic(11,6,o.monto)),s.Fb(3),s.Ec(o.fecha)}}function io(o,i){if(1&o){const o=s.Yb();s.Xb(0,"li",55),s.Xb(1,"button",56),s.ec("click",(function(){s.wc(o);const i=s.gc(4);return i.updateDataTable(0,i.page.size)})),s.Sb(2,"i",57),s.Wb(),s.Wb()}}function to(o,i){if(1&o){const o=s.Yb();s.Xb(0,"li",55),s.Xb(1,"button",56),s.ec("click",(function(){s.wc(o);const i=s.gc(4);return i.updateDataTable(i.page.number-1,i.page.size)})),s.Dc(2),s.Wb(),s.Wb()}if(2&o){const o=s.gc(4);s.Fb(2),s.Ec(o.page.number)}}function eo(o,i){if(1&o){const o=s.Yb();s.Xb(0,"li",55),s.Xb(1,"button",56),s.ec("click",(function(){s.wc(o);const i=s.gc(4);return i.updateDataTable(i.page.number+1,i.page.size)})),s.Dc(2),s.Wb(),s.Wb()}if(2&o){const o=s.gc(4);s.Fb(2),s.Ec(o.page.number+2)}}function ao(o,i){if(1&o){const o=s.Yb();s.Xb(0,"li",55),s.Xb(1,"button",56),s.ec("click",(function(){s.wc(o);const i=s.gc(4);return i.updateDataTable(i.page.totalPages-1,i.page.size)})),s.Sb(2,"i",58),s.Wb(),s.Wb()}}function no(o,i){if(1&o&&(s.Xb(0,"ul",51),s.Cc(1,io,3,0,"li",52),s.Cc(2,to,3,1,"li",52),s.Xb(3,"li",53),s.Xb(4,"a",54),s.Xb(5,"strong"),s.Dc(6),s.Wb(),s.Wb(),s.Wb(),s.Cc(7,eo,3,1,"li",52),s.Cc(8,ao,3,0,"li",52),s.Wb()),2&o){const o=s.gc(3);s.Fb(1),s.mc("ngIf",0==o.page.first),s.Fb(1),s.mc("ngIf",0==o.page.first),s.Fb(4),s.Ec(o.page.number+1),s.Fb(1),s.mc("ngIf",0==o.page.last),s.Fb(1),s.mc("ngIf",0==o.page.last)}}function co(o,i){if(1&o&&(s.Xb(0,"div",32),s.Cc(1,no,9,5,"ul",50),s.Wb()),2&o){const o=s.gc(2);s.Fb(1),s.mc("ngIf",o.page.totalElements>1)}}function ro(o,i){if(1&o&&(s.Xb(0,"div",43),s.Xb(1,"table",44),s.Xb(2,"thead",45),s.Xb(3,"tr"),s.Xb(4,"th",46),s.Dc(5,"NO EMPLEADO"),s.Wb(),s.Xb(6,"th",46),s.Dc(7,"TIPO EMP"),s.Wb(),s.Xb(8,"th",46),s.Dc(9,"AHORRADOR"),s.Wb(),s.Xb(10,"th",46),s.Dc(11,"TIPO TRANSACCION"),s.Wb(),s.Xb(12,"th",46),s.Dc(13,"MONTO"),s.Wb(),s.Xb(14,"th",46),s.Dc(15,"FECHA"),s.Wb(),s.Wb(),s.Wb(),s.Xb(16,"tbody"),s.Cc(17,oo,14,8,"tr",47),s.Wb(),s.Wb(),s.Cc(18,co,2,1,"div",28),s.Wb()),2&o){const o=s.gc();s.Fb(17),s.mc("ngForOf",o.page.content),s.Fb(1),s.mc("ngIf",0==o.page.empty)}}let bo=(()=>{class o{constructor(o,i,t,e){this.router=o,this.datepipe=i,this.downloadService=t,this.ahorroService=e,this.module="usuarios",this.page=new Y.a,this.pageSize="10",this.filterParams={tipo:"*",noEmpleado:"",tipoUsuario:"*",since:"",to:"",page:"0",size:"10"},this.loading=!1}ngOnInit(){this.updateDataTable(0,10)}updateDataTable(o,i){this.loading=!0,null==this.fechaCreacion?(this.filterParams.since="",this.filterParams.to=""):(this.fechaCreacion[1].setDate(this.fechaCreacion[1].getDate()+1),this.filterParams.since=this.datepipe.transform(this.fechaCreacion[0],"yyyy-MM-dd"),this.filterParams.to=this.datepipe.transform(this.fechaCreacion[1],"yyyy-MM-dd")),this.filterParams.page=o||0,this.filterParams.size=i||0,this.ahorroService.getSaldos(this.filterParams).subscribe(o=>{this.page=o,this.loading=!1})}onChangePageSize(o){this.updateDataTable(this.page.number,o)}redirectToValidation(o){this.router.navigate([`./${this.module}/validacion/${o}`])}downloadXLSFile(){this.loading=!0,null==this.fechaCreacion?(this.filterParams.since="",this.filterParams.to=""):(this.fechaCreacion[1].setDate(this.fechaCreacion[1].getDate()+1),this.filterParams.since=this.datepipe.transform(this.fechaCreacion[0],"yyyy-MM-dd"),this.filterParams.to=this.datepipe.transform(this.fechaCreacion[1],"yyyy-MM-dd")),this.filterParams.page="0",this.filterParams.size="100000",this.ahorroService.getReporteSaldos(this.filterParams).subscribe(o=>{this.downloadService.downloadFile(o.dato,`ReporteAhorros-${this.datepipe.transform(Date.now(),"yyyy-MM-dd")}.xls`,"application/vnd.ms-excel"),this.loading=!1})}}return o.\u0275fac=function(i){return new(i||o)(s.Rb(e.c),s.Rb(d.f),s.Rb(B.a),s.Rb(l.a))},o.\u0275cmp=s.Lb({type:o,selectors:[["cybord-reporte-ahorros"]],decls:60,vars:9,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-12","col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row","slide_1"],[1,"col-md-2"],["for","noempleado",1,"label"],["type","text","fullWidth","","id","noemp","placeholder","No. Empleado",1,"form-control",3,"ngModel","ngModelChange"],["for","inputActivo2",1,"label"],["id","inputActivo2",1,"form-control",2,"display","block",3,"ngModel","ngModelChange"],["value","*"],["value","INTERNO"],["value","EXTERNO"],["for","inputActivo",1,"label"],["id","inputActivo",1,"form-control",2,"display","block",3,"ngModel","ngModelChange"],["value","ahorro"],["value","deposito"],["value","ajuste"],["value","retiro"],["for","fechacre",1,"label"],[1,"form-group"],["type","text","placeholder","Fecha de creaci\xf3n","bsDaterangepicker","",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn","btn-primary",2,"margin-top","2em",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"col"],["class","alert alert-primary","role","alert",4,"ngIf"],["class","clearfix",4,"ngIf"],["class","table-responsive",4,"ngIf"],[1,"fa","fa-spinner","fa-spin"],["role","alert",1,"alert","alert-primary"],[1,"clearfix"],[1,"btn-sm","btn-success","float-right",3,"click"],[1,"fa","fa-file-excel-o","fa-sm"],["id","inputunidad","style","display:block;width: 95px; margin-right: 15px;","class","float-right form-control form-control-sm",3,"ngModel","ngModelChange","change",4,"ngIf"],[1,"float-right"],["id","inputunidad",1,"float-right","form-control","form-control-sm",2,"display","block","width","95px","margin-right","15px",3,"ngModel","ngModelChange","change"],["value","10"],["value","20",4,"ngIf"],["value","50",4,"ngIf"],["value","20"],["value","50"],[1,"table-responsive"],[1,"table","table-bordered","table-sm"],[1,"thead-dark"],[1,"text-center"],[4,"ngFor","ngForOf"],["scope","row"],["scope","row",1,"text-right"],["class","pagination float-right",4,"ngIf"],[1,"pagination","float-right"],["class","page-item",4,"ngIf"],[1,"page-item","active"],[1,"page-link"],[1,"page-item"],[1,"btn","page-link",3,"click"],[1,"icon-control-rewind","icons"],[1,"icon-control-forward","icons"]],template:function(o,i){1&o&&(s.Xb(0,"div",0),s.Xb(1,"div",1),s.Xb(2,"div",2),s.Xb(3,"div",3),s.Xb(4,"div",4),s.Xb(5,"strong"),s.Dc(6,"Reportes ahorro sistema de caja"),s.Wb(),s.Wb(),s.Xb(7,"div",5),s.Xb(8,"div",6),s.Xb(9,"div",7),s.Xb(10,"label",8),s.Dc(11,"No. Empleado"),s.Wb(),s.Xb(12,"input",9),s.ec("ngModelChange",(function(o){return i.filterParams.noEmpleado=o})),s.Wb(),s.Wb(),s.Xb(13,"div",7),s.Xb(14,"label",10),s.Dc(15,"Tipo Empleado"),s.Wb(),s.Xb(16,"select",11),s.ec("ngModelChange",(function(o){return i.filterParams.tipoUsuario=o})),s.Xb(17,"option",12),s.Dc(18,"Todo"),s.Wb(),s.Xb(19,"option",13),s.Dc(20,"Interno"),s.Wb(),s.Xb(21,"option",14),s.Dc(22,"Externo"),s.Wb(),s.Wb(),s.Wb(),s.Xb(23,"div",7),s.Xb(24,"label",15),s.Dc(25,"Tipo Ahorro"),s.Wb(),s.Xb(26,"select",16),s.ec("ngModelChange",(function(o){return i.filterParams.tipo=o})),s.Xb(27,"option",12),s.Dc(28,"Todo"),s.Wb(),s.Xb(29,"option",17),s.Dc(30,"Ahorro"),s.Wb(),s.Xb(31,"option",18),s.Dc(32,"Deposito"),s.Wb(),s.Xb(33,"option",19),s.Dc(34,"Ajuste"),s.Wb(),s.Xb(35,"option",20),s.Dc(36,"Retiro"),s.Wb(),s.Wb(),s.Wb(),s.Xb(37,"div",7),s.Xb(38,"label",21),s.Dc(39,"Fecha Creaci\xf3n"),s.Wb(),s.Xb(40,"div",22),s.Xb(41,"input",23),s.ec("ngModelChange",(function(o){return i.fechaCreacion=o})),s.Wb(),s.Wb(),s.Wb(),s.Xb(42,"div",7),s.Xb(43,"button",24),s.ec("click",(function(){return i.updateDataTable(0,10)})),s.Dc(44,"BUSCAR "),s.Cc(45,J,1,0,"i",25),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(46,"div",1),s.Xb(47,"div",2),s.Xb(48,"div",3),s.Xb(49,"div",4),s.Xb(50,"strong"),s.Dc(51,"Resultados"),s.Wb(),s.Wb(),s.Xb(52,"div",5),s.Xb(53,"div",1),s.Xb(54,"div",26),s.Cc(55,q,2,0,"div",27),s.Cc(56,Z,6,1,"div",28),s.Wb(),s.Wb(),s.Xb(57,"div",1),s.Xb(58,"div",26),s.Cc(59,ro,19,2,"div",29),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&o&&(s.Fb(12),s.mc("ngModel",i.filterParams.noEmpleado),s.Fb(4),s.mc("ngModel",i.filterParams.tipoUsuario),s.Fb(10),s.mc("ngModel",i.filterParams.tipo),s.Fb(15),s.mc("ngModel",i.fechaCreacion),s.Fb(2),s.mc("disabled",i.loading),s.Fb(2),s.mc("ngIf",i.loading),s.Fb(10),s.mc("ngIf",!0===i.page.empty),s.Fb(1),s.mc("ngIf",!1===i.page.empty),s.Fb(3),s.mc("ngIf",0==i.page.empty))},directives:[$.b,$.i,$.l,$.q,$.m,$.s,G.e,G.d,d.n,d.m],pipes:[d.d],styles:[""]}),o})();var so=t("KZhB"),lo=t("CNMR");const uo=["modalConfirmacion"];function ho(o,i){if(1&o&&(s.Xb(0,"div"),s.Xb(1,"alert",44),s.Dc(2),s.Wb(),s.Wb()),2&o){const o=i.$implicit;s.Fb(1),s.mc("dismissible",!0),s.Fb(1),s.Ec(o)}}function fo(o,i){if(1&o){const o=s.Yb();s.Xb(0,"div",9),s.Xb(1,"strong",45),s.Dc(2,"No empleado"),s.Wb(),s.Xb(3,"div",11),s.Xb(4,"input",46),s.ec("ngModelChange",(function(i){return s.wc(o),s.gc().usuario.noEmpleado=i})),s.Wb(),s.Wb(),s.Wb()}if(2&o){const o=s.gc();s.Fb(4),s.mc("ngModel",o.usuario.noEmpleado)}}function mo(o,i){if(1&o){const o=s.Yb();s.Xb(0,"div",9),s.Xb(1,"strong",47),s.Dc(2,"Antiguedad empleado"),s.Wb(),s.Xb(3,"div",11),s.Xb(4,"input",48),s.ec("ngModelChange",(function(i){return s.wc(o),s.gc().usuario.datosUsuario.ANTIGUEDAD=i})),s.Wb(),s.Wb(),s.Wb()}if(2&o){const o=s.gc();s.Fb(4),s.mc("ngModel",o.usuario.datosUsuario.ANTIGUEDAD)}}function go(o,i){if(1&o){const o=s.Yb();s.Xb(0,"div",9),s.Xb(1,"strong",49),s.Dc(2,"Sueldo actual"),s.Wb(),s.Xb(3,"div",11),s.Xb(4,"input",50),s.ec("ngModelChange",(function(i){return s.wc(o),s.gc().usuario.datosUsuario.SUELDO=i})),s.Wb(),s.Wb(),s.Wb()}if(2&o){const o=s.gc();s.Fb(4),s.mc("ngModel",o.usuario.datosUsuario.SUELDO)}}function po(o,i){if(1&o){const o=s.Yb();s.Xb(0,"div",9),s.Xb(1,"strong",51),s.Dc(2,"Monto ahorro quincenal"),s.Wb(),s.Xb(3,"div",11),s.Xb(4,"input",52),s.ec("ngModelChange",(function(i){return s.wc(o),s.gc().usuario.datosUsuario.MONTO_AHORRO=i})),s.Wb(),s.Wb(),s.Wb()}if(2&o){const o=s.gc();s.Fb(4),s.mc("ngModel",o.usuario.datosUsuario.MONTO_AHORRO)}}function Xo(o,i){1&o&&s.Sb(0,"i",53)}function Wo(o,i){if(1&o&&(s.Xb(0,"tr"),s.Xb(1,"td",54),s.Dc(2),s.hc(3,"date"),s.Wb(),s.Xb(4,"td",54),s.Dc(5),s.Wb(),s.Xb(6,"td",54),s.Dc(7),s.hc(8,"currency"),s.Wb(),s.Wb()),2&o){const o=i.$implicit;s.Fb(2),s.Ec(s.jc(3,3,o.fechaCreacion,"dd/MM/yyyy")),s.Fb(3),s.Ec(o.tipo),s.Fb(2),s.Ec(s.ic(8,6,o.monto))}}const vo=[{path:"usuarios",component:V.a,data:{title:"Usuarios"}},{path:"usuarios/:idUsuario",component:_.a,data:{title:"Usario ISBG"}},{path:"validaciones",component:a.a,data:{title:"Reporte Validaciones"}},{path:"validacion/:idSolicitud",component:z.a,data:{title:"Usario ISBG"}},{path:"historico/:idSolicitud",component:z.a,data:{title:"Usario ISBG"}},{path:"historico",component:n.a,data:{title:"Historico validaciones"}},{path:"conciliacion",component:S,data:{title:"Conciliaciones Contabilidad"}},{path:"carga-ahorro",component:L,data:{title:"Ahorro usuarios externos"}},{path:"reportes-ahorro",component:bo,data:{title:"Reporte de ahorro caja"}},{path:"ajustes/:idUsuario",component:(()=>{class o{constructor(o,i,t){this.userService=o,this.ahorroService=i,this.route=t,this.usuario=new so.a,this.ajustador=new so.a,this.ahorros=[],this.alerts=[],this.loading=!1,this.ajusteAhorro=new w}ngOnInit(){this.userService.myInfo().toPromise().then(o=>this.ajustador=o).catch(o=>this.alerts.push(o)),this.route.paramMap.subscribe(o=>{const i=o.get("idUsuario");this.userService.getUsuario(+i).toPromise().then(o=>{this.usuario=o,this.ahorroService.getSaldoByUsuario(o.id).toPromise().then(o=>{this.ahorros=o,this.total=o.map(o=>o.monto).reduce((o,i)=>o+i)})}).catch(o=>this.alerts.push(o))})}createAdjustemnt(){this.loading=!0,this.ajusteAhorro.tipo="ajuste",this.ajusteAhorro.idUsuario=this.usuario.id,this.ajusteAhorro.validado=!0,this.ajusteAhorro.solicitante=this.ajustador.email,this.ahorroService.postSaldo(this.usuario.id,this.ajusteAhorro).toPromise().then(o=>console.log(o)).then(()=>{this.ahorroService.getSaldoByUsuario(this.usuario.id).toPromise().then(o=>{this.ahorros=o,this.total=o.map(o=>o.monto).reduce((o,i)=>o+i),this.loading=!1})}).catch(o=>{this.alerts.push(o),this.loading=!1}),this.modalConfirmacion.hide()}openModal(){this.modalConfirmacion.show()}cancelar(){this.modalConfirmacion.hide()}}return o.\u0275fac=function(i){return new(i||o)(s.Rb(O.a),s.Rb(l.a),s.Rb(e.a))},o.\u0275cmp=s.Lb({type:o,selectors:[["cybord-ajuste-ahorro"]],viewQuery:function(o,i){var t;1&o&&s.Ic(uo,!0),2&o&&s.tc(t=s.fc())&&(i.modalConfirmacion=t.first)},decls:97,vars:17,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-12","col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[4,"ngFor","ngForOf"],[1,"col-xs-12","col-sm-12","col-md-6"],["action","","method","post","enctype","multipart/form-data",1,"form-horizontal"],[1,"form-group","row"],[1,"col-md-3","col-form-label"],[1,"col-md-9"],[1,"form-control-static"],[1,"switch","switch-label","switch-primary"],["type","checkbox",1,"switch-input",3,"checked"],["data-checked","ON","data-unchecked","OFF",1,"switch-slider"],[1,"col-md-9","col-form-label"],[1,"form-check"],["type","radio","name","radios","id","radio3","value","option3","disabled","",1,"form-check-input",3,"checked"],["for","radio3",1,"form-check-label"],["type","radio","name","radios","id","radio4","value","option4","disabled","",1,"form-check-input",3,"checked"],["for","radio4",1,"form-check-label"],["class","form-group row",4,"ngIf"],["for","ajuste",1,"col-md-3","col-form-label"],["type","number","id","ajuste","name","ajuste","placeholder","Monto de ajuste",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-sm","btn-success",3,"disabled","click"],[1,"fa","fa-dot-circle-o"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"table","table-bordered","table-striped","table-sm"],[1,"thead-dark"],[1,"card-footer"],[1,"float-right","slide_2"],["bsModal","","id","modalConfirmacion","tabindex","-1","role","dialog","aria-labelledby","modalConfirmacion","aria-hidden","true",1,"modal","fade"],["modalConfirmacion","bs-modal"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","modalConfirmacionLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-secondary",3,"click"],["type","danger",3,"dismissible"],["for","no-emp",1,"col-md-3","col-form-label"],["type","number","id","no-emp","name","no-emp","placeholder","No empleado","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["for","antiguedad",1,"col-md-3","col-form-label"],["type","text","id","antiguedad","name","ANTIGUEDAD","placeholder","ANTIGUEDAD","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["for","sueldo",1,"col-md-3","col-form-label"],["type","text","id","sueldo","name","sueldo","placeholder","Sueldo","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["for","ahorro",1,"col-md-3","col-form-label"],["type","number","id","ahorro","name","ahorro","placeholder","Ahorro quincenal","disabled","",1,"form-control",3,"ngModel","ngModelChange"],[1,"fa","fa-spinner","fa-spin"],["scope","row"]],template:function(o,i){1&o&&(s.Xb(0,"div",0),s.Xb(1,"div",1),s.Xb(2,"div",2),s.Xb(3,"div",3),s.Xb(4,"div",4),s.Xb(5,"strong"),s.Dc(6,"Mi perfil"),s.Wb(),s.Wb(),s.Xb(7,"div",5),s.Cc(8,ho,3,2,"div",6),s.Xb(9,"h5"),s.Dc(10),s.Wb(),s.Xb(11,"div",1),s.Xb(12,"div",7),s.Xb(13,"form",8),s.Xb(14,"div",9),s.Xb(15,"strong",10),s.Dc(16,"Email"),s.Wb(),s.Xb(17,"div",11),s.Xb(18,"p",12),s.Dc(19),s.Wb(),s.Wb(),s.Wb(),s.Xb(20,"div",9),s.Xb(21,"strong",10),s.Dc(22,"Usuario activo"),s.Wb(),s.Xb(23,"div",11),s.Xb(24,"label",13),s.Sb(25,"input",14),s.Sb(26,"span",15),s.Wb(),s.Wb(),s.Wb(),s.Xb(27,"div",9),s.Xb(28,"strong",10),s.Dc(29,"Tipo Usuario"),s.Wb(),s.Xb(30,"div",16),s.Xb(31,"div",17),s.Sb(32,"input",18),s.Xb(33,"label",19),s.Dc(34," INTERNO "),s.Wb(),s.Wb(),s.Xb(35,"div",17),s.Sb(36,"input",20),s.Xb(37,"label",21),s.Dc(38," EXTERNO "),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Cc(39,fo,5,1,"div",22),s.Cc(40,mo,5,1,"div",22),s.Cc(41,go,5,1,"div",22),s.Cc(42,po,5,1,"div",22),s.Xb(43,"div",9),s.Xb(44,"strong",23),s.Dc(45,"Monto ajuste"),s.Wb(),s.Xb(46,"div",11),s.Xb(47,"input",24),s.ec("ngModelChange",(function(o){return i.ajusteAhorro.monto=o})),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Sb(48,"br"),s.Xb(49,"button",25),s.ec("click",(function(){return i.openModal()})),s.Sb(50,"i",26),s.Dc(51,"\xa0 Ingresar ajuste "),s.Cc(52,Xo,1,0,"i",27),s.Wb(),s.Wb(),s.Xb(53,"div",7),s.Xb(54,"strong"),s.Dc(55,"Movimientos ahorrador"),s.Wb(),s.Sb(56,"br"),s.Sb(57,"br"),s.Xb(58,"table",28),s.Xb(59,"thead",29),s.Xb(60,"tr"),s.Xb(61,"th"),s.Dc(62,"FECHA"),s.Wb(),s.Xb(63,"th"),s.Dc(64,"TIPO"),s.Wb(),s.Xb(65,"th"),s.Dc(66,"MONTO"),s.Wb(),s.Wb(),s.Wb(),s.Xb(67,"tbody"),s.Cc(68,Wo,9,8,"tr",6),s.Xb(69,"tr"),s.Sb(70,"td"),s.Xb(71,"td"),s.Xb(72,"strong"),s.Dc(73,"TOTAL"),s.Wb(),s.Wb(),s.Xb(74,"td"),s.Xb(75,"strong"),s.Dc(76),s.hc(77,"currency"),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(78,"div",30),s.Sb(79,"div",31),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(80,"div",32,33),s.Xb(82,"div",34),s.Xb(83,"div",35),s.Xb(84,"div",36),s.Xb(85,"h5",37),s.Dc(86,"Confirmacion"),s.Wb(),s.Xb(87,"button",38),s.ec("click",(function(){return i.cancelar()})),s.Xb(88,"span",39),s.Dc(89,"\xd7"),s.Wb(),s.Wb(),s.Wb(),s.Xb(90,"div",40),s.Dc(91," \xbfEstas seguro de realizar el ajuste? "),s.Wb(),s.Xb(92,"div",41),s.Xb(93,"button",42),s.ec("click",(function(){return i.createAdjustemnt()})),s.Dc(94,"Si"),s.Wb(),s.Xb(95,"button",43),s.ec("click",(function(){return i.cancelar()})),s.Dc(96,"No"),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&o&&(s.Fb(8),s.mc("ngForOf",i.alerts),s.Fb(2),s.Ec(i.usuario.nombre),s.Fb(9),s.Ec(i.usuario.email),s.Fb(6),s.mc("checked",i.usuario.activo),s.Fb(7),s.mc("checked","INTERNO"===i.usuario.tipoUsuario),s.Fb(4),s.mc("checked","EXTERNO"===i.usuario.tipoUsuario),s.Fb(3),s.mc("ngIf",void 0!==i.usuario.noEmpleado),s.Fb(1),s.mc("ngIf",void 0!==i.usuario.datosUsuario.ANTIGUEDAD),s.Fb(1),s.mc("ngIf",void 0!==i.usuario.datosUsuario.SUELDO),s.Fb(1),s.mc("ngIf",void 0!==i.usuario.datosUsuario.MONTO_AHORRO),s.Fb(5),s.mc("ngModel",i.ajusteAhorro.monto),s.Fb(2),s.mc("disabled",i.loading),s.Fb(3),s.mc("ngIf",i.loading),s.Fb(16),s.mc("ngForOf",i.ahorros),s.Fb(8),s.Ec(s.ic(77,15,i.total)))},directives:[d.m,$.t,$.j,$.k,d.n,$.n,$.b,$.i,$.l,E.a,lo.a],pipes:[d.d,d.f],styles:[""]}),o})(),data:{title:"Ajustes de ahorro"}}];let Do=(()=>{class o{}return o.\u0275mod=s.Pb({type:o}),o.\u0275inj=s.Ob({factory:function(i){return new(i||o)},imports:[[e.g.forChild(vo)],e.g]}),o})();var Co=t("65jD");let Fo=(()=>{class o{}return o.\u0275mod=s.Pb({type:o}),o.\u0275inj=s.Ob({factory:function(i){return new(i||o)},imports:[[Co.CommonsPagesModule,Do]]}),o})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{P3MA:function(o,e,t){"use strict";t.r(e),t.d(e,"ContabilidadModule",(function(){return Io}));var i=t("iInd"),n=t("qNWX"),a=t("2IH+"),r=t("mrSG"),c=t("EUZL"),b=t("3JXr"),s=t("8Y7J"),l=t("LDwG"),d=t("SVse");const u=["fileInput"];function h(o,e){if(1&o&&(s.Xb(0,"tr"),s.Xb(1,"td",21),s.Gc(2),s.Wb(),s.Xb(3,"td",21),s.Gc(4),s.Wb(),s.Xb(5,"td",21),s.Gc(6),s.Wb(),s.Wb()),2&o){const o=e.$implicit;s.Fb(2),s.Ic(" ",o.noEmpleado," "),s.Fb(2),s.Ic(" ",o.nombre," "),s.Fb(2),s.Ic(" ",o.saldo," ")}}function g(o,e){1&o&&s.Sb(0,"i",22)}function f(o,e){1&o&&s.Sb(0,"i",22)}function m(o,e){if(1&o){const o=s.Yb();s.Xb(0,"div",12),s.Xb(1,"table",13),s.Xb(2,"thead",14),s.Xb(3,"tr"),s.Xb(4,"th",15),s.Gc(5,"Clave"),s.Wb(),s.Xb(6,"th",15),s.Gc(7,"Nombre"),s.Wb(),s.Xb(8,"th",15),s.Gc(9,"Importe"),s.Wb(),s.Wb(),s.Wb(),s.Xb(10,"tbody"),s.Ec(11,h,7,3,"tr",16),s.Wb(),s.Wb(),s.Xb(12,"div",17),s.Xb(13,"button",18),s.ec("click",(function(){return s.yc(o),s.gc().clean()})),s.Gc(14,"Limpiar "),s.Ec(15,g,1,0,"i",19),s.Wb(),s.Xb(16,"button",20),s.ec("click",(function(){return s.yc(o),s.gc().validar()})),s.Gc(17,"Validar "),s.Ec(18,f,1,0,"i",19),s.Wb(),s.Wb(),s.Wb()}if(2&o){const o=s.gc();s.Fb(11),s.nc("ngForOf",o.datosConciliacion),s.Fb(2),s.nc("disabled",o.loading),s.Fb(2),s.nc("ngIf",o.loading),s.Fb(1),s.nc("disabled",o.loading),s.Fb(2),s.nc("ngIf",o.loading)}}function p(o,e){1&o&&(s.Xb(0,"h3"),s.Gc(1," Ahorradores Validados"),s.Wb())}function X(o,e){if(1&o&&(s.Xb(0,"tr"),s.Xb(1,"td",21),s.Gc(2),s.Wb(),s.Xb(3,"td",21),s.Gc(4),s.hc(5,"uppercase"),s.Wb(),s.Xb(6,"td",21),s.Gc(7),s.Wb(),s.Xb(8,"td",21),s.Gc(9," Validado "),s.Wb(),s.Wb()),2&o){const o=e.$implicit;s.Fb(2),s.Ic(" ",o.noEmpleado," "),s.Fb(2),s.Ic(" ",s.ic(5,3,o.nombre)," "),s.Fb(3),s.Ic(" ",o.saldo," ")}}function W(o,e){if(1&o&&(s.Xb(0,"table",13),s.Xb(1,"thead",14),s.Xb(2,"tr"),s.Xb(3,"th",15),s.Gc(4,"Clave"),s.Wb(),s.Xb(5,"th",15),s.Gc(6,"Nombre"),s.Wb(),s.Xb(7,"th",15),s.Gc(8,"Importe"),s.Wb(),s.Xb(9,"th",15),s.Gc(10,"Observaciones"),s.Wb(),s.Wb(),s.Wb(),s.Xb(11,"tbody"),s.Ec(12,X,10,5,"tr",16),s.Wb(),s.Wb()),2&o){const o=s.gc(2);s.Fb(12),s.nc("ngForOf",o.conciliacionCorrectos)}}function v(o,e){1&o&&(s.Xb(0,"h3"),s.Gc(1," Ahorradores No Validados"),s.Wb())}const F=function(o){return{"alert-danger":o}};function G(o,e){if(1&o&&(s.Xb(0,"tr",26),s.Xb(1,"td",21),s.Gc(2),s.Wb(),s.Xb(3,"td",21),s.Gc(4),s.hc(5,"uppercase"),s.Wb(),s.Xb(6,"td",21),s.Gc(7),s.Wb(),s.Xb(8,"td",21),s.Gc(9),s.hc(10,"uppercase"),s.Wb(),s.Wb()),2&o){const o=e.$implicit;s.nc("ngClass",s.qc(9,F,"Validado"!=o.observaciones)),s.Fb(2),s.Ic(" ",o.noEmpleado," "),s.Fb(2),s.Ic(" ",s.ic(5,5,o.nombre)," "),s.Fb(3),s.Ic(" ",o.saldo," "),s.Fb(2),s.Ic(" ",s.ic(10,7,o.observaciones)," ")}}function y(o,e){if(1&o&&(s.Xb(0,"table",13),s.Xb(1,"thead",14),s.Xb(2,"tr"),s.Xb(3,"th",15),s.Gc(4,"Clave"),s.Wb(),s.Xb(5,"th",15),s.Gc(6,"Nombre"),s.Wb(),s.Xb(7,"th",15),s.Gc(8,"Importe"),s.Wb(),s.Xb(9,"th",15),s.Gc(10,"Observaciones"),s.Wb(),s.Wb(),s.Wb(),s.Xb(11,"tbody"),s.Ec(12,G,11,11,"tr",25),s.Wb(),s.Wb()),2&o){const o=s.gc(2);s.Fb(12),s.nc("ngForOf",o.conciliacionErroneos)}}function E(o,e){1&o&&s.Sb(0,"i",22)}function I(o,e){if(1&o){const o=s.Yb();s.Xb(0,"div",12),s.Ec(1,p,2,0,"h3",23),s.Ec(2,W,13,1,"table",24),s.Ec(3,v,2,0,"h3",23),s.Ec(4,y,13,1,"table",24),s.Xb(5,"div",17),s.Xb(6,"button",18),s.ec("click",(function(){return s.yc(o),s.gc().clean()})),s.Gc(7,"Limpiar "),s.Ec(8,E,1,0,"i",19),s.Wb(),s.Wb(),s.Wb()}if(2&o){const o=s.gc();s.Fb(1),s.nc("ngIf",o.conciliacionCorrectos.length>0),s.Fb(1),s.nc("ngIf",o.conciliacionCorrectos.length>0),s.Fb(1),s.nc("ngIf",o.conciliacionErroneos.length>0),s.Fb(1),s.nc("ngIf",o.conciliacionErroneos.length>0),s.Fb(2),s.nc("disabled",o.loading),s.Fb(2),s.nc("ngIf",o.loading)}}let C=(()=>{class o{constructor(o){this.ahorroService=o,this.datosConciliacion=[],this.conciliacionProcesados=[],this.conciliacionCorrectos=[],this.conciliacionErroneos=[],this.loading=!1}ngOnInit(){}onFileChange(o){this.loading=!0;let e=null,t=null;const i=new FileReader,n=o[0];i.onload=o=>{const n=i.result;let a;for(a in e=c.read(n,{type:"binary"}),t=e.SheetNames.reduce((o,t)=>{const i=e.Sheets[t];return o[t]=c.utils.sheet_to_json(i,{range:16}),c.utils.sheet_to_json(i),o},{}),t);const r=t[a];for(const e of r){const o=JSON.parse(JSON.stringify(e)),t=Object.keys(o);if(3===Object.keys(o).length&&!String(e[t[0]]).includes("Dedu")){let o=String(e[t[2]]);o=o.replace(",","");const i=new b.a(e[t[0]],e[t[1]],parseInt(o,10));this.datosConciliacion.push(i)}}},i.readAsBinaryString(n),this.loading=!1}validar(){return Object(r.a)(this,void 0,void 0,(function*(){this.loading=!0,this.conciliacionProcesados=this.datosConciliacion,this.datosConciliacion=[],console.log("Request "+JSON.stringify(this.conciliacionProcesados)),this.loading=!1}))}clean(){this.fileInput.nativeElement.value=null,this.datosConciliacion=[],this.conciliacionProcesados=[],this.conciliacionCorrectos=[],this.conciliacionErroneos=[],this.loading=!1}}return o.\u0275fac=function(e){return new(e||o)(s.Rb(l.a))},o.\u0275cmp=s.Lb({type:o,selectors:[["cybord-conciliacion-conta"]],viewQuery:function(o,e){var t;1&o&&s.Lc(u,!0),2&o&&s.uc(t=s.fc())&&(e.fileInput=t.first)},decls:16,vars:2,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"form-group","row"],["for","file-input",1,"col-md-2","col-form-label"],[1,"col-md-9"],["id","file-input","type","file","accept",".xlsx, .xls, .csv  ","name","file-input",1,"file-input",3,"change"],["fileInput",""],["class","table-responsive slide_1",4,"ngIf"],[1,"table-responsive","slide_1"],[1,"table","table-bordered","table-sm"],[1,"thead-dark"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf"],[1,"col-sm-6"],[1,"btn","btn-warning",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"btn","btn-success",3,"disabled","click"],["scope","row",1,"text-left"],[1,"fa","fa-spinner","fa-spin"],[4,"ngIf"],["class","table table-bordered table-sm",4,"ngIf"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"]],template:function(o,e){1&o&&(s.Xb(0,"div",0),s.Xb(1,"div",1),s.Xb(2,"div",2),s.Xb(3,"div",3),s.Xb(4,"div",4),s.Xb(5,"strong"),s.Gc(6,"Conciliacion"),s.Wb(),s.Wb(),s.Xb(7,"div",5),s.Xb(8,"div",6),s.Xb(9,"label",7),s.Gc(10,"Subir Archivo"),s.Wb(),s.Xb(11,"div",8),s.Xb(12,"input",9,10),s.ec("change",(function(o){return e.onFileChange(o.target.files)})),s.Wb(),s.Wb(),s.Wb(),s.Ec(14,m,19,5,"div",11),s.Ec(15,I,9,6,"div",11),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&o&&(s.Fb(14),s.nc("ngIf",e.datosConciliacion.length>0),s.Fb(1),s.nc("ngIf",e.conciliacionProcesados.length>0))},directives:[d.n,d.m,d.l],pipes:[d.w],styles:[""]}),o})();class S{constructor(o,e,t,i){this.validado=o,this.numeroUsuario=e,this.nombre=t,this.importe=i}}class O{constructor(){this.monto=0}}var A=t("ESM5"),w=t("LqlI"),M=t("xkgV"),j=t("jksu");const k=["modalConfirmacion"],x=["fileInput"];function U(o,e){if(1&o&&(s.Xb(0,"p"),s.Gc(1),s.Wb()),2&o){const o=e.$implicit;s.Fb(1),s.Hc(o)}}function N(o,e){if(1&o&&(s.Xb(0,"div",27),s.Ec(1,U,2,1,"p",28),s.Wb()),2&o){const o=s.gc();s.Fb(1),s.nc("ngForOf",o.errorMessages)}}const R=function(o){return{"alert-danger":o}};function L(o,e){if(1&o&&(s.Xb(0,"tr",38),s.Xb(1,"td",39),s.Gc(2),s.Wb(),s.Xb(3,"td",40),s.Gc(4),s.Wb(),s.Xb(5,"td",40),s.Gc(6),s.hc(7,"uppercase"),s.Wb(),s.Xb(8,"td",41),s.Gc(9),s.hc(10,"currency"),s.Wb(),s.Xb(11,"td",40),s.Gc(12),s.hc(13,"uppercase"),s.Wb(),s.Wb()),2&o){const o=e.$implicit,t=e.index,i=s.gc(2);s.nc("ngClass",s.qc(12,R,"Validado"!=o.observaciones)),s.Fb(2),s.Ic(" ",10*(i.pExternos-1)+t+1,""),s.Fb(2),s.Ic(" ",o.numeroUsuario," "),s.Fb(2),s.Ic(" ",s.ic(7,6,o.nombre)," "),s.Fb(3),s.Ic(" ",s.ic(10,8,o.importe)," "),s.Fb(3),s.Ic(" ",s.ic(13,10,o.observaciones)," ")}}function P(o,e){1&o&&s.Sb(0,"i",42)}function H(o,e){1&o&&s.Sb(0,"i",42)}const V=function(o){return{id:"externos",itemsPerPage:10,currentPage:o}};function T(o,e){if(1&o){const o=s.Yb();s.Xb(0,"div",29),s.Xb(1,"table",30),s.Xb(2,"thead",31),s.Xb(3,"tr"),s.Xb(4,"th",32),s.Gc(5,"No."),s.Wb(),s.Xb(6,"th",32),s.Gc(7,"Clave"),s.Wb(),s.Xb(8,"th",32),s.Gc(9,"Nombre"),s.Wb(),s.Xb(10,"th",32),s.Gc(11,"Importe"),s.Wb(),s.Xb(12,"th",32),s.Gc(13,"Observaciones"),s.Wb(),s.Wb(),s.Wb(),s.Xb(14,"tbody"),s.Ec(15,L,14,14,"tr",33),s.hc(16,"paginate"),s.Wb(),s.Wb(),s.Xb(17,"pagination-controls",34),s.ec("pageChange",(function(e){return s.yc(o),s.gc().pExternos=e})),s.Wb(),s.Xb(18,"div",35),s.Xb(19,"button",36),s.ec("click",(function(){return s.yc(o),s.gc().clean()})),s.Gc(20,"Limpiar "),s.Ec(21,P,1,0,"i",25),s.Wb(),s.Xb(22,"button",37),s.ec("click",(function(){return s.yc(o),s.gc().openModal()})),s.Gc(23,"Cargar "),s.Ec(24,H,1,0,"i",25),s.Wb(),s.Wb(),s.Wb()}if(2&o){const o=s.gc();s.Fb(15),s.nc("ngForOf",s.jc(16,5,o.datosAhorro,s.qc(8,V,o.pExternos))),s.Fb(4),s.nc("disabled",o.loading),s.Fb(2),s.nc("ngIf",o.loading),s.Fb(1),s.nc("disabled",!o.tablaValida),s.Fb(2),s.nc("ngIf",o.loading)}}function D(o,e){if(1&o&&(s.Xb(0,"tr",38),s.Xb(1,"td",39),s.Gc(2),s.Wb(),s.Xb(3,"td",40),s.Gc(4),s.Wb(),s.Xb(5,"td",40),s.Gc(6),s.hc(7,"uppercase"),s.Wb(),s.Xb(8,"td",40),s.Gc(9),s.hc(10,"uppercase"),s.Wb(),s.Wb()),2&o){const o=e.$implicit,t=e.index,i=s.gc(2);s.nc("ngClass",s.qc(9,R,"Validado"!=o.observaciones)),s.Fb(2),s.Ic(" ",10*(i.pErrores-1)+t+1,""),s.Fb(2),s.Ic(" ",o.noEmpleado," "),s.Fb(2),s.Ic(" ",s.ic(7,5,o.nombre)," "),s.Fb(3),s.Ic(" ",s.ic(10,7,o.observaciones)," ")}}function _(o,e){1&o&&s.Sb(0,"i",42)}const q=function(o){return{id:"errores",itemsPerPage:10,currentPage:o}};function B(o,e){if(1&o){const o=s.Yb();s.Xb(0,"div",29),s.Xb(1,"h3"),s.Gc(2," Ahorradores con Errores"),s.Wb(),s.Xb(3,"table",30),s.Xb(4,"thead",31),s.Xb(5,"tr"),s.Xb(6,"th",32),s.Gc(7,"No."),s.Wb(),s.Xb(8,"th",32),s.Gc(9,"Clave"),s.Wb(),s.Xb(10,"th",32),s.Gc(11,"Nombre"),s.Wb(),s.Xb(12,"th",32),s.Gc(13,"Observaciones"),s.Wb(),s.Wb(),s.Wb(),s.Xb(14,"tbody"),s.Ec(15,D,11,11,"tr",33),s.hc(16,"paginate"),s.Wb(),s.Wb(),s.Xb(17,"pagination-controls",43),s.ec("pageChange",(function(e){return s.yc(o),s.gc().pErrores=e})),s.Wb(),s.Xb(18,"div",35),s.Xb(19,"button",36),s.ec("click",(function(){return s.yc(o),s.gc().limpiarErrores()})),s.Gc(20,"Limpiar "),s.Ec(21,_,1,0,"i",25),s.Wb(),s.Wb(),s.Wb()}if(2&o){const o=s.gc();s.Fb(15),s.nc("ngForOf",s.jc(16,3,o.erroresAhorro,s.qc(6,q,o.pErrores))),s.Fb(4),s.nc("disabled",o.loading),s.Fb(2),s.nc("ngIf",o.loading)}}function Y(o,e){1&o&&s.Sb(0,"cybord-loader")}function J(o,e){1&o&&s.Sb(0,"i",42)}function $(o,e){1&o&&s.Sb(0,"i",42)}let z=(()=>{class o{constructor(o,e,t){this.renderer=o,this.userService=e,this.ahorroService=t,this.errorMessages=[],this.loading=!1,this.tablaValida=!0,this.pExternos=1,this.pErrores=1}ngOnInit(){this.datosAhorro=new Array,this.erroresAhorro=new Array}onFileChange(o){if(0===o.length)return;this.tablaValida=!0,this.loading=!0;let e=null,t=null;const i=new FileReader,n=o[0];i.onload=o=>{const n=i.result;let a;for(a in e=c.read(n,{type:"binary"}),t=e.SheetNames.reduce((o,t)=>{const i=e.Sheets[t];return o[t]=c.utils.sheet_to_json(i,{range:3}),c.utils.sheet_to_json(i),o},{}),t);this.cargarValidar(t[a])},i.readAsBinaryString(n)}cargarValidar(o){return Object(r.a)(this,void 0,void 0,(function*(){const e=Object.keys(o[0]);for(const i of o){const o=!1;let n;if(void 0!==i[e[0]]){const a=new S(!o,i[e[0]],i[e[1]],i[e[2]]);this.datosAhorro.push(a);try{n=yield this.userService.getUsuarioByNumeroUsuario(i[e[0]]).toPromise(),this.validar(n,a)}catch(t){a.observaciones=" No es valida la clave del ahorrador ",this.tablaValida=!1}}}this.loading=!1}))}clean(){this.fileInput.nativeElement.value=null,this.datosAhorro=new Array,this.errorMessages=[]}cargar(){const o=new Array;this.loading=!0,this.datosAhorro.forEach(e=>{const t=new O;t.idUsuario=e.idUsuario,t.tipo="ahorro",t.monto=e.importe,t.validado=!0,o.push(t)}),this.ahorroService.postSaldoBulk(o).toPromise().then(o=>{this.erroresAhorro=o.errores,alert("Se registraron depositos de "+o.correctos.length+" ahorradores \nSe tienen "+o.errores.length+" errores"),this.clean(),this.modalConfirmacion.hide()}).then(o=>{this.loading=!1}).catch(o=>{alert("Se registro un error al cargar los ahorros "+o),this.clean(),this.modalConfirmacion.hide(),this.loading=!1})}limpiarErrores(){this.erroresAhorro=[]}validar(o,e){e.idUsuario=o.content[0].id;let t=!0,i=o.content[0].nombre.trim();i=i.toUpperCase();let n=i.split(" ");n=n.sort();let a=e.nombre.trim();a=a.toUpperCase();let r=a.split(" ");r=r.sort(),n.length===r.length&&n.every((function(o,e){return o===r[e]}))||(this.agregarObservacion(e,"No coincide el nombre del ahorrador"),t=!1),o.content[0].activo||(this.agregarObservacion(e,"El ahorrador no esta activo"),t=!1),"EXTERNO"!==o.content[0].tipoUsuario&&(this.agregarObservacion(e,"El usuario no es externo"),t=!1),o.content[0].ahorrador||(this.agregarObservacion(e,"El usuario no es ahorrador"),t=!1),(void 0===e.importe||isNaN(e.importe))&&(this.agregarObservacion(e,"El importe no es correcto"),t=!1),e.importe!=o.content[0].montoAhorro&&(this.agregarObservacion(e,"El importe no es correcto"),t=!1),void 0===e.observaciones&&this.agregarObservacion(e,"Validado"),t||(this.tablaValida=!1)}agregarObservacion(o,e){void 0===o.observaciones?o.observaciones=e:o.observaciones+=", "+e}openModal(){this.modalConfirmacion.show()}decline(){this.modalConfirmacion.hide()}}return o.\u0275fac=function(e){return new(e||o)(s.Rb(s.K),s.Rb(A.a),s.Rb(l.a))},o.\u0275cmp=s.Lb({type:o,selectors:[["cybord-ahorro-externos"]],viewQuery:function(o,e){var t;1&o&&(s.Lc(k,!0),s.Lc(x,!0)),2&o&&(s.uc(t=s.fc())&&(e.modalConfirmacion=t.first),s.uc(t=s.fc())&&(e.fileInput=t.first))},decls:37,vars:8,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col"],[1,"card"],[1,"card-header"],[1,"card-body"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"form-group","row"],["for","file-input",1,"col-md-2","col-form-label"],[1,"col-md-9"],["id","file-input","type","file","accept",".xlsx, .xls, .csv  ","name","file-input",1,"file-input",3,"change"],["fileInput",""],["class","table-responsive slide_1",4,"ngIf"],[4,"ngIf"],["bsModal","","id","modalConfirmacion","tabindex","-1","role","dialog","aria-labelledby","modalConfirmacion","aria-hidden","true",1,"modal","fade"],["modalConfirmacion","bs-modal"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","modalConfirmacionLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],["type","button",1,"btn","btn-secondary",3,"disabled","click"],["role","alert",1,"alert","alert-danger"],[4,"ngFor","ngForOf"],[1,"table-responsive","slide_1"],[1,"table","table-bordered","table-sm"],[1,"thead-dark"],["scope","col",1,"text-center"],[3,"ngClass",4,"ngFor","ngForOf"],["id","externos","previousLabel","Anterior","nextLabel","Siguiente","autoHide","true",3,"pageChange"],[1,"col-sm-6"],[1,"btn","btn-warning",3,"disabled","click"],[1,"btn","btn-success",3,"disabled","click"],[3,"ngClass"],["scope","row",1,"text-center"],["scope","row",1,"text-left"],["scope","row",1,"text-right"],[1,"fa","fa-spinner","fa-spin"],["id","errores","previousLabel","Anterior","nextLabel","Siguiente",3,"pageChange"]],template:function(o,e){1&o&&(s.Xb(0,"div",0),s.Xb(1,"div",1),s.Xb(2,"div",2),s.Xb(3,"div",3),s.Xb(4,"div",4),s.Xb(5,"strong"),s.Gc(6,"Carga de ahorro externos"),s.Wb(),s.Wb(),s.Xb(7,"div",5),s.Ec(8,N,2,1,"div",6),s.Xb(9,"div",7),s.Xb(10,"label",8),s.Gc(11,"Subir Archivo"),s.Wb(),s.Xb(12,"div",9),s.Xb(13,"input",10,11),s.ec("change",(function(o){return e.onFileChange(o.target.files)})),s.Wb(),s.Wb(),s.Wb(),s.Ec(15,T,25,10,"div",12),s.Ec(16,B,22,8,"div",12),s.Ec(17,Y,1,0,"cybord-loader",13),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(18,"div",14,15),s.Xb(20,"div",16),s.Xb(21,"div",17),s.Xb(22,"div",18),s.Xb(23,"h5",19),s.Gc(24,"Confirmacion"),s.Wb(),s.Xb(25,"button",20),s.ec("click",(function(){return e.decline()})),s.Xb(26,"span",21),s.Gc(27,"\xd7"),s.Wb(),s.Wb(),s.Wb(),s.Xb(28,"div",22),s.Gc(29," \xbfResgistrar ahorros externos? "),s.Wb(),s.Xb(30,"div",23),s.Xb(31,"button",24),s.ec("click",(function(){return e.cargar()})),s.Gc(32,"Si "),s.Ec(33,J,1,0,"i",25),s.Wb(),s.Xb(34,"button",26),s.ec("click",(function(){return e.decline()})),s.Gc(35,"No "),s.Ec(36,$,1,0,"i",25),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&o&&(s.Fb(8),s.nc("ngIf",e.errorMessages.length>0),s.Fb(7),s.nc("ngIf",e.datosAhorro.length>0),s.Fb(1),s.nc("ngIf",e.erroresAhorro.length>0),s.Fb(1),s.nc("ngIf",e.loading),s.Fb(14),s.nc("disabled",e.loading),s.Fb(2),s.nc("ngIf",e.loading),s.Fb(1),s.nc("disabled",e.loading),s.Fb(2),s.nc("ngIf",e.loading))},directives:[d.n,w.a,d.m,M.c,d.l,j.a],pipes:[M.b,d.w,d.d],styles:[""]}),o})();var Q=t("aBT+"),K=t("uwdg"),Z=t("+vBq"),oo=t("aJ9a"),eo=t("KZhB"),to=t("s7LF"),io=t("CNMR");const no=["modalConfirmacion"];function ao(o,e){if(1&o&&(s.Xb(0,"div"),s.Xb(1,"alert",52),s.Gc(2),s.Wb(),s.Wb()),2&o){const o=e.$implicit;s.Fb(1),s.nc("dismissible",!0),s.Fb(1),s.Hc(o)}}function ro(o,e){if(1&o){const o=s.Yb();s.Xb(0,"div",9),s.Xb(1,"strong",53),s.Gc(2,"No empleado"),s.Wb(),s.Xb(3,"div",11),s.Xb(4,"input",54),s.ec("ngModelChange",(function(e){return s.yc(o),s.gc().usuario.noEmpleado=e})),s.Wb(),s.Wb(),s.Wb()}if(2&o){const o=s.gc();s.Fb(4),s.nc("ngModel",o.usuario.noEmpleado)}}function co(o,e){if(1&o){const o=s.Yb();s.Xb(0,"div",9),s.Xb(1,"strong",55),s.Gc(2,"Antiguedad empleado"),s.Wb(),s.Xb(3,"div",11),s.Xb(4,"input",56),s.ec("ngModelChange",(function(e){return s.yc(o),s.gc().usuario.datosUsuario.ANTIGUEDAD=e})),s.Wb(),s.Wb(),s.Wb()}if(2&o){const o=s.gc();s.Fb(4),s.nc("ngModel",o.usuario.datosUsuario.ANTIGUEDAD)}}function bo(o,e){if(1&o){const o=s.Yb();s.Xb(0,"div",9),s.Xb(1,"strong",57),s.Gc(2,"Sueldo actual"),s.Wb(),s.Xb(3,"div",11),s.Xb(4,"input",58),s.ec("ngModelChange",(function(e){return s.yc(o),s.gc().usuario.datosUsuario.SUELDO=e})),s.Wb(),s.Wb(),s.Wb()}if(2&o){const o=s.gc();s.Fb(4),s.nc("ngModel",o.usuario.datosUsuario.SUELDO)}}function so(o,e){if(1&o){const o=s.Yb();s.Xb(0,"div",9),s.Xb(1,"strong",59),s.Gc(2,"Monto ahorro quincenal"),s.Wb(),s.Xb(3,"div",11),s.Xb(4,"input",60),s.ec("ngModelChange",(function(e){return s.yc(o),s.gc().usuario.datosUsuario.MONTO_AHORRO=e})),s.Wb(),s.Wb(),s.Wb()}if(2&o){const o=s.gc();s.Fb(4),s.nc("ngModel",o.usuario.datosUsuario.MONTO_AHORRO)}}function lo(o,e){1&o&&s.Sb(0,"i",61)}function uo(o,e){1&o&&(s.Xb(0,"div",1),s.Sb(1,"div",62),s.Xb(2,"div",63),s.Gc(3," No hay registros de ahorro "),s.Wb(),s.Sb(4,"div",62),s.Wb())}function ho(o,e){if(1&o&&(s.Xb(0,"tr"),s.Xb(1,"td",66),s.Gc(2),s.hc(3,"date"),s.Wb(),s.Xb(4,"td",66),s.Gc(5),s.Wb(),s.Xb(6,"td",66),s.Gc(7),s.Wb(),s.Xb(8,"td",66),s.Gc(9),s.hc(10,"currency"),s.Wb(),s.Wb()),2&o){const o=e.$implicit;s.Fb(2),s.Hc(s.jc(3,4,o.fechaCreacion,"dd/MM/yyyy")),s.Fb(3),s.Hc(o.tipo),s.Fb(2),s.Hc(o.observaciones),s.Fb(2),s.Hc(s.ic(10,7,o.monto))}}function go(o,e){if(1&o&&(s.Xb(0,"table",64),s.Xb(1,"thead",65),s.Xb(2,"tr"),s.Xb(3,"th"),s.Gc(4,"FECHA"),s.Wb(),s.Xb(5,"th"),s.Gc(6,"TIPO"),s.Wb(),s.Xb(7,"th"),s.Gc(8,"OBSERVACIONES"),s.Wb(),s.Xb(9,"th"),s.Gc(10,"MONTO"),s.Wb(),s.Wb(),s.Wb(),s.Xb(11,"tbody"),s.Ec(12,ho,11,9,"tr",6),s.Xb(13,"tr"),s.Sb(14,"td"),s.Sb(15,"td"),s.Xb(16,"td"),s.Xb(17,"strong"),s.Gc(18,"TOTAL"),s.Wb(),s.Wb(),s.Xb(19,"td"),s.Xb(20,"strong"),s.Gc(21),s.hc(22,"currency"),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&o){const o=s.gc();s.Fb(12),s.nc("ngForOf",o.ahorros),s.Fb(9),s.Hc(s.ic(22,2,o.total))}}function fo(o,e){1&o&&s.Sb(0,"cybord-loader")}const mo=function(){return{standalone:!0}},po=function(o,e){return{"btn-primary":o,"btn-secondary":e}};let Xo=(()=>{class o{constructor(o,e,t){this.userService=o,this.ahorroService=e,this.route=t,this.usuario=new eo.a,this.ajustador=new eo.a,this.ahorros=[],this.total=0,this.alerts=[],this.loading=!1,this.noEmpleado="",this.ajusteAhorro=new O}ngOnInit(){this.userService.myInfo().then(o=>this.ajustador=o).catch(o=>this.alerts.push(o)),this.route.paramMap.subscribe(o=>{const e=o.get("idUsuario");this.userService.getUsuario(+e).toPromise().then(o=>{this.usuario=o,this.ahorroService.getSaldoByUsuario(o.id).toPromise().then(o=>{this.ahorros=o,null!=o&&o.length>0&&(this.total=o.map(o=>o.monto).reduce((o,e)=>o+e))})}).catch(o=>this.alerts.push(o))})}createAdjustemnt(){this.loading=!0,this.ajusteAhorro.tipo="ajuste",this.ajusteAhorro.idUsuario=this.usuario.id,this.ajusteAhorro.validado=!0,this.ajusteAhorro.solicitante=this.ajustador.email,this.ahorroService.postSaldo(this.usuario.id,this.ajusteAhorro).toPromise().then(o=>console.log(o)).then(()=>{this.ahorroService.getSaldoByUsuario(this.usuario.id).toPromise().then(o=>{this.ahorros=o,this.total=o.map(o=>o.monto).reduce((o,e)=>o+e),this.loading=!1})}).catch(o=>{this.alerts.push(o),this.loading=!1}),this.modalConfirmacion.hide()}openModal(){this.modalConfirmacion.show()}cancelar(){this.modalConfirmacion.hide()}}return o.\u0275fac=function(e){return new(e||o)(s.Rb(A.a),s.Rb(l.a),s.Rb(i.a))},o.\u0275cmp=s.Lb({type:o,selectors:[["cybord-ajuste-ahorro"]],viewQuery:function(o,e){var t;1&o&&s.Lc(no,!0),2&o&&s.uc(t=s.fc())&&(e.modalConfirmacion=t.first)},decls:108,vars:30,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-12","col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[4,"ngFor","ngForOf"],[1,"col-xs-12","col-sm-12","col-md-6"],["action","","method","post","enctype","multipart/form-data",1,"form-horizontal"],[1,"form-group","row"],[1,"col-md-3","col-form-label"],[1,"col-md-9"],[1,"form-control-static"],[1,"switch","switch-label","switch-primary"],["type","checkbox",1,"switch-input",3,"checked"],["data-checked","ON","data-unchecked","OFF",1,"switch-slider"],[1,"col-md-9","col-form-label"],[1,"form-check"],["type","radio","name","radios","id","radio3","value","option3","disabled","",1,"form-check-input",3,"checked"],["for","radio3",1,"form-check-label"],["type","radio","name","radios","id","radio4","value","option4","disabled","",1,"form-check-input",3,"checked"],["for","radio4",1,"form-check-label"],["class","form-group row",4,"ngIf"],["for","ajuste",1,"col-md-3","col-form-label"],["type","number","id","ajuste","name","ajuste","placeholder","Monto de ajuste",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-sm","btn-success",3,"disabled","click"],[1,"fa","fa-dot-circle-o"],["class","fa fa-spinner fa-spin",4,"ngIf"],["class","row",4,"ngIf"],["class","table table-bordered table-striped table-sm",4,"ngIf"],[4,"ngIf"],[1,"card-footer"],[1,"float-right","slide_2"],["bsModal","","id","modalConfirmacion","tabindex","-1","role","dialog","aria-labelledby","modalConfirmacion","aria-hidden","true",1,"modal","fade","modal-warning"],["modalConfirmacion","bs-modal"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","modalConfirmacionLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["for","textarea-input",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["id","textarea-input","name","textarea-input","rows","5","maxlength","200","placeholder","Raz\xf3n o motivo de cancelaci\xf3n del ahorro",1,"form-control",3,"ngModel","ngModelChange"],["id","reasonHelp",1,"form-text","text-muted"],["for","inputPassword",1,"col-sm-2","col-form-label"],["type","password","id","inputPassword",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["id","noEmpHelp",1,"form-text","text-muted"],[1,"modal-footer"],["type","button",1,"btn",3,"ngClass","disabled","click"],["type","button",1,"btn","btn-warning",3,"click"],["type","danger",3,"dismissible"],["for","no-emp",1,"col-md-3","col-form-label"],["type","number","id","no-emp","name","no-emp","placeholder","No empleado","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["for","antiguedad",1,"col-md-3","col-form-label"],["type","text","id","antiguedad","name","ANTIGUEDAD","placeholder","ANTIGUEDAD","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["for","sueldo",1,"col-md-3","col-form-label"],["type","text","id","sueldo","name","sueldo","placeholder","Sueldo","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["for","ahorro",1,"col-md-3","col-form-label"],["type","number","id","ahorro","name","ahorro","placeholder","Ahorro quincenal","disabled","",1,"form-control",3,"ngModel","ngModelChange"],[1,"fa","fa-spinner","fa-spin"],[1,"col"],["role","alert",1,"col-8","alert","alert-primary"],[1,"table","table-bordered","table-striped","table-sm"],[1,"thead-dark"],["scope","row"]],template:function(o,e){1&o&&(s.Xb(0,"div",0),s.Xb(1,"div",1),s.Xb(2,"div",2),s.Xb(3,"div",3),s.Xb(4,"div",4),s.Xb(5,"strong"),s.Gc(6,"Mi perfil"),s.Wb(),s.Wb(),s.Xb(7,"div",5),s.Ec(8,ao,3,2,"div",6),s.Xb(9,"h5"),s.Gc(10),s.Wb(),s.Xb(11,"div",1),s.Xb(12,"div",7),s.Xb(13,"form",8),s.Xb(14,"div",9),s.Xb(15,"strong",10),s.Gc(16,"Email"),s.Wb(),s.Xb(17,"div",11),s.Xb(18,"p",12),s.Gc(19),s.Wb(),s.Wb(),s.Wb(),s.Xb(20,"div",9),s.Xb(21,"strong",10),s.Gc(22,"Usuario activo"),s.Wb(),s.Xb(23,"div",11),s.Xb(24,"label",13),s.Sb(25,"input",14),s.Sb(26,"span",15),s.Wb(),s.Wb(),s.Wb(),s.Xb(27,"div",9),s.Xb(28,"strong",10),s.Gc(29,"Tipo Usuario"),s.Wb(),s.Xb(30,"div",16),s.Xb(31,"div",17),s.Sb(32,"input",18),s.Xb(33,"label",19),s.Gc(34," INTERNO "),s.Wb(),s.Wb(),s.Xb(35,"div",17),s.Sb(36,"input",20),s.Xb(37,"label",21),s.Gc(38," EXTERNO "),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Ec(39,ro,5,1,"div",22),s.Ec(40,co,5,1,"div",22),s.Ec(41,bo,5,1,"div",22),s.Ec(42,so,5,1,"div",22),s.Xb(43,"div",9),s.Xb(44,"strong",23),s.Gc(45,"Monto ajuste"),s.Wb(),s.Xb(46,"div",11),s.Xb(47,"input",24),s.ec("ngModelChange",(function(o){return e.ajusteAhorro.monto=o})),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Sb(48,"br"),s.Xb(49,"button",25),s.ec("click",(function(){return e.openModal()})),s.Sb(50,"i",26),s.Gc(51,"\xa0 Ingresar ajuste "),s.Ec(52,lo,1,0,"i",27),s.Wb(),s.Wb(),s.Xb(53,"div",7),s.Xb(54,"strong"),s.Gc(55,"Movimientos ahorrador"),s.Wb(),s.Sb(56,"br"),s.Sb(57,"br"),s.Ec(58,uo,5,0,"div",28),s.Ec(59,go,23,4,"table",29),s.Wb(),s.Wb(),s.Ec(60,fo,1,0,"cybord-loader",30),s.Wb(),s.Xb(61,"div",31),s.Sb(62,"div",32),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(63,"div",33,34),s.Xb(65,"div",35),s.Xb(66,"div",36),s.Xb(67,"div",37),s.Xb(68,"h5",38),s.Gc(69,"Confirmacion"),s.Wb(),s.Xb(70,"button",39),s.ec("click",(function(){return e.cancelar()})),s.Xb(71,"span",40),s.Gc(72,"\xd7"),s.Wb(),s.Wb(),s.Wb(),s.Xb(73,"div",41),s.Xb(74,"p"),s.Xb(75,"strong"),s.Gc(76),s.Wb(),s.Gc(77," esta por realizar un ajuste manual por la cantidad de "),s.Xb(78,"strong"),s.Gc(79),s.hc(80,"currency"),s.Wb(),s.Gc(81," en el ahorro de "),s.Xb(82,"strong"),s.Gc(83),s.Wb(),s.Gc(84,"."),s.Wb(),s.Xb(85,"p"),s.Gc(86,"Este moviento ser\xe1 registrado por el sistema con motivos de auditoria."),s.Wb(),s.Xb(87,"form"),s.Xb(88,"div",9),s.Xb(89,"label",42),s.Gc(90,"Raz\xf3n, motivo del ajuste"),s.Wb(),s.Xb(91,"div",43),s.Xb(92,"textarea",44),s.ec("ngModelChange",(function(o){return e.ajusteAhorro.observaciones=o})),s.Gc(93,"                  "),s.Wb(),s.Xb(94,"small",45),s.Gc(95,"Especifica la razon o motivo del ajuste."),s.Wb(),s.Wb(),s.Wb(),s.Xb(96,"div",9),s.Xb(97,"label",46),s.Gc(98,"No empleado"),s.Wb(),s.Xb(99,"div",43),s.Xb(100,"input",47),s.ec("ngModelChange",(function(o){return e.noEmpleado=o})),s.Wb(),s.Xb(101,"small",48),s.Gc(102,"Ingresa tu numero de empleado para desbloquear."),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(103,"div",49),s.Xb(104,"button",50),s.ec("click",(function(){return e.createAdjustemnt()})),s.Gc(105,"Ajustar"),s.Wb(),s.Xb(106,"button",51),s.ec("click",(function(){return e.cancelar()})),s.Gc(107,"Salir"),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&o&&(s.Fb(8),s.nc("ngForOf",e.alerts),s.Fb(2),s.Hc(e.usuario.nombre),s.Fb(9),s.Hc(e.usuario.email),s.Fb(6),s.nc("checked",e.usuario.activo),s.Fb(7),s.nc("checked","INTERNO"===e.usuario.tipoUsuario),s.Fb(4),s.nc("checked","EXTERNO"===e.usuario.tipoUsuario),s.Fb(3),s.nc("ngIf",void 0!==e.usuario.noEmpleado),s.Fb(1),s.nc("ngIf",void 0!==e.usuario.datosUsuario.ANTIGUEDAD),s.Fb(1),s.nc("ngIf",void 0!==e.usuario.datosUsuario.SUELDO),s.Fb(1),s.nc("ngIf",void 0!==e.usuario.datosUsuario.MONTO_AHORRO),s.Fb(5),s.nc("ngModel",e.ajusteAhorro.monto),s.Fb(2),s.nc("disabled",e.loading),s.Fb(3),s.nc("ngIf",e.loading),s.Fb(6),s.nc("ngIf",0===e.ahorros.length&&!e.loading),s.Fb(1),s.nc("ngIf",e.ahorros.length>0),s.Fb(1),s.nc("ngIf",e.loading),s.Fb(16),s.Hc(e.ajustador.nombre),s.Fb(3),s.Ic(" ",s.ic(80,24,e.ajusteAhorro.monto),""),s.Fb(4),s.Hc(e.usuario.nombre),s.Fb(9),s.nc("ngModel",e.ajusteAhorro.observaciones),s.Fb(8),s.nc("ngModel",e.noEmpleado)("ngModelOptions",s.pc(26,mo)),s.Fb(4),s.nc("ngClass",s.rc(27,po,e.noEmpleado===e.ajustador.noEmpleado,e.noEmpleado!==e.ajustador.noEmpleado))("disabled",e.noEmpleado!==e.ajustador.noEmpleado))},directives:[d.m,to.q,to.i,to.j,d.n,to.m,to.b,to.h,to.k,w.a,to.d,d.l,io.a,j.a],pipes:[d.d,d.f],styles:[""]}),o})();var Wo=t("xkWA"),vo=t("QmbO"),Fo=t("2jvo");const Go=[{path:"usuarios",component:Q.a,data:{title:"Usuarios"}},{path:"usuarios/:idUsuario",component:K.a,data:{title:"Usario ISBG"}},{path:"saldo-usuarios/:idUsuario",component:Wo.a,data:{title:"Saldos usuario"}},{path:"validaciones",component:n.a,data:{title:"Reporte Validaciones"}},{path:"validacion/:idSolicitud",component:Z.a,data:{title:"Usario ISBG"}},{path:"historico/:idSolicitud",component:Z.a,data:{title:"Usario ISBG"}},{path:"historico",component:a.a,data:{title:"Historico validaciones"}},{path:"conciliacion",component:C,data:{title:"Conciliaciones Contabilidad"}},{path:"carga-ahorro",component:z,data:{title:"Ahorro usuarios externos"}},{path:"reportes-ahorro",component:oo.a,data:{title:"Reporte de ahorro caja"}},{path:"reportes-prestamo",component:Fo.a,data:{title:"Reporte de prestamos caja"}},{path:"ajustes/:idUsuario",component:Xo,data:{title:"Ajustes de ahorro"}},{path:"pagos-capital",component:vo.a,data:{title:"ValidacionPagos"}}];let yo=(()=>{class o{}return o.\u0275mod=s.Pb({type:o}),o.\u0275inj=s.Ob({factory:function(e){return new(e||o)},imports:[[i.g.forChild(Go)],i.g]}),o})();var Eo=t("65jD");let Io=(()=>{class o{}return o.\u0275mod=s.Pb({type:o}),o.\u0275inj=s.Ob({factory:function(e){return new(e||o)},imports:[[Eo.CommonsPagesModule,yo,M.a]]}),o})()}}]);
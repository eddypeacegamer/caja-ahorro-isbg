(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"z/b6":function(o,i,n){"use strict";n.r(i),n.d(i,"RecursosHumanosModule",(function(){return z}));var c=n("iInd"),t=n("qNWX"),e=n("aBT+"),a=n("uwdg"),r=n("2IH+"),b=n("mrSG"),s=n("EUZL"),l=n("3JXr"),d=n("8Y7J"),u=n("LDwG"),g=n("SVse"),p=n("LqlI"),h=n("xkgV"),f=n("s7LF"),m=n("jksu");const W=["fileInput"],X=["modalConfirmacion"];function v(o,i){if(1&o&&(d.Xb(0,"tr"),d.Xb(1,"td",37),d.Gc(2),d.Wb(),d.Xb(3,"td",38),d.Gc(4),d.Wb(),d.Xb(5,"td",39),d.Gc(6),d.Wb(),d.Xb(7,"td",40),d.Gc(8),d.hc(9,"currency"),d.Wb(),d.Wb()),2&o){const o=i.$implicit,n=i.index,c=d.gc(2);d.Fb(2),d.Ic(" ",10*(c.pCarga-1)+n+1,""),d.Fb(2),d.Ic(" ",o.noEmpleado," "),d.Fb(2),d.Ic(" ",o.nombre," "),d.Fb(2),d.Ic(" ",d.ic(9,4,o.saldo)," ")}}function C(o,i){if(1&o){const o=d.Yb();d.Xb(0,"pagination-controls",41),d.ec("pageChange",(function(i){return d.yc(o),d.gc(2).pCarga=i})),d.Wb()}}function G(o,i){1&o&&d.Sb(0,"i",42)}function y(o,i){1&o&&d.Sb(0,"i",42)}const F=function(o){return{id:"carga",itemsPerPage:10,currentPage:o}};function I(o,i){if(1&o){const o=d.Yb();d.Xb(0,"div",26),d.Xb(1,"table",27),d.Xb(2,"thead",28),d.Xb(3,"tr"),d.Xb(4,"th",29),d.Gc(5,"No."),d.Wb(),d.Xb(6,"th",29),d.Gc(7,"Clave"),d.Wb(),d.Xb(8,"th",30),d.Gc(9,"Nombre"),d.Wb(),d.Xb(10,"th",31),d.Gc(11,"Importe"),d.Wb(),d.Wb(),d.Wb(),d.Xb(12,"tbody"),d.Ec(13,v,10,6,"tr",32),d.hc(14,"paginate"),d.Wb(),d.Wb(),d.Ec(15,C,1,0,"pagination-controls",33),d.Xb(16,"div",34),d.Xb(17,"button",35),d.ec("click",(function(){return d.yc(o),d.gc().clean()})),d.Gc(18,"Limpiar "),d.Ec(19,G,1,0,"i",24),d.Wb(),d.Xb(20,"button",36),d.ec("click",(function(){return d.yc(o),d.gc().validar()})),d.Gc(21,"Validar "),d.Ec(22,y,1,0,"i",24),d.Wb(),d.Wb(),d.Wb()}if(2&o){const o=d.gc();d.Fb(13),d.nc("ngForOf",d.jc(14,6,o.datosConciliacion,d.qc(9,F,o.pCarga))),d.Fb(2),d.nc("ngIf",o.datosConciliacion.length>0),d.Fb(2),d.nc("disabled",o.loading),d.Fb(2),d.nc("ngIf",o.loading),d.Fb(1),d.nc("disabled",o.loading),d.Fb(2),d.nc("ngIf",o.loading)}}function E(o,i){if(1&o&&(d.Xb(0,"tr"),d.Xb(1,"td",45),d.Gc(2),d.Wb(),d.Xb(3,"td",46),d.Gc(4),d.Wb(),d.Xb(5,"td",46),d.Gc(6),d.hc(7,"uppercase"),d.Wb(),d.Xb(8,"td",46),d.Gc(9),d.hc(10,"currency"),d.Wb(),d.Xb(11,"td",46),d.Gc(12," Validado "),d.Wb(),d.Wb()),2&o){const o=i.$implicit,n=i.index,c=d.gc(3);d.Fb(2),d.Ic(" ",10*(c.pCorrectos-1)+n+1,""),d.Fb(2),d.Ic(" ",o.noEmpleado," "),d.Fb(2),d.Ic(" ",d.ic(7,4,o.nombre)," "),d.Fb(3),d.Ic(" ",d.ic(10,6,o.saldo)," ")}}const S=function(o){return{id:"correctos",itemsPerPage:10,currentPage:o}};function w(o,i){if(1&o){const o=d.Yb();d.Xb(0,"div"),d.Xb(1,"h3"),d.Gc(2," Ahorradores Validados"),d.Wb(),d.Xb(3,"table",27),d.Xb(4,"thead",28),d.Xb(5,"tr"),d.Xb(6,"th",43),d.Gc(7,"No."),d.Wb(),d.Xb(8,"th",43),d.Gc(9,"Clave"),d.Wb(),d.Xb(10,"th",43),d.Gc(11,"Nombre"),d.Wb(),d.Xb(12,"th",43),d.Gc(13,"Importe"),d.Wb(),d.Xb(14,"th",43),d.Gc(15,"Observaciones"),d.Wb(),d.Wb(),d.Wb(),d.Xb(16,"tbody"),d.Ec(17,E,13,8,"tr",32),d.hc(18,"paginate"),d.Wb(),d.Wb(),d.Xb(19,"pagination-controls",44),d.ec("pageChange",(function(i){return d.yc(o),d.gc(2).pCorrectos=i})),d.Wb(),d.Wb()}if(2&o){const o=d.gc(2);d.Fb(17),d.nc("ngForOf",d.jc(18,1,o.conciliacionCorrectos,d.qc(4,S,o.pCorrectos)))}}const _=function(o){return{"alert-danger":o}};function x(o,i){if(1&o){const o=d.Yb();d.Xb(0,"tr",49),d.Xb(1,"td",45),d.Gc(2),d.Wb(),d.Xb(3,"td",45),d.Xb(4,"input",50),d.ec("ngModelChange",(function(n){return d.yc(o),i.$implicit.validado=n})),d.Wb(),d.Wb(),d.Xb(5,"td",46),d.Gc(6),d.Wb(),d.Xb(7,"td",46),d.Gc(8),d.hc(9,"uppercase"),d.Wb(),d.Xb(10,"td",51),d.Gc(11),d.hc(12,"currency"),d.Wb(),d.Xb(13,"td",46),d.Gc(14),d.hc(15,"uppercase"),d.Wb(),d.Wb()}if(2&o){const o=i.$implicit,n=i.index,c=d.gc(3);d.nc("ngClass",d.qc(13,_,"Validado"!=o.observaciones)),d.Fb(2),d.Ic(" ",10*(c.pErroneos-1)+n+1,""),d.Fb(2),d.nc("ngModel",o.validado),d.Fb(2),d.Ic(" ",o.noEmpleado," "),d.Fb(2),d.Ic(" ",d.ic(9,7,o.nombre)," "),d.Fb(3),d.Ic(" ",d.ic(12,9,o.saldo)," "),d.Fb(3),d.Ic(" ",d.ic(15,11,o.observaciones)," ")}}const k=function(o){return{id:"erroneos",itemsPerPage:10,currentPage:o}};function P(o,i){if(1&o){const o=d.Yb();d.Xb(0,"div"),d.Xb(1,"h3"),d.Gc(2," Ahorradores No Validados"),d.Wb(),d.Xb(3,"table",27),d.Xb(4,"thead",28),d.Xb(5,"tr"),d.Xb(6,"th",43),d.Gc(7,"No."),d.Wb(),d.Xb(8,"th",43),d.Gc(9,"Aprobar"),d.Wb(),d.Xb(10,"th",43),d.Gc(11,"Clave"),d.Wb(),d.Xb(12,"th",43),d.Gc(13,"Nombre"),d.Wb(),d.Xb(14,"th",43),d.Gc(15,"Importe"),d.Wb(),d.Xb(16,"th",43),d.Gc(17,"Observaciones"),d.Wb(),d.Wb(),d.Wb(),d.Xb(18,"tbody"),d.Ec(19,x,16,15,"tr",47),d.hc(20,"paginate"),d.Wb(),d.Wb(),d.Xb(21,"pagination-controls",48),d.ec("pageChange",(function(i){return d.yc(o),d.gc(2).pErroneos=i})),d.Wb(),d.Wb()}if(2&o){const o=d.gc(2);d.Fb(19),d.nc("ngForOf",d.jc(20,1,o.conciliacionErroneos,d.qc(4,k,o.pErroneos)))}}function O(o,i){1&o&&d.Sb(0,"i",42)}function A(o,i){1&o&&d.Sb(0,"i",42)}function j(o,i){1&o&&d.Sb(0,"i",42)}function L(o,i){1&o&&d.Sb(0,"i",42)}function N(o,i){if(1&o){const o=d.Yb();d.Xb(0,"div",26),d.Ec(1,w,20,6,"div",12),d.Ec(2,P,22,6,"div",12),d.Xb(3,"div",34),d.Xb(4,"button",35),d.ec("click",(function(){return d.yc(o),d.gc().clean()})),d.Gc(5,"Limpiar "),d.Ec(6,O,1,0,"i",24),d.Wb(),d.Xb(7,"button",35),d.ec("click",(function(){return d.yc(o),d.gc().validarTodos(!0)})),d.Gc(8,"Aprobar Todos "),d.Ec(9,A,1,0,"i",24),d.Wb(),d.Xb(10,"button",35),d.ec("click",(function(){return d.yc(o),d.gc().validarTodos(!1)})),d.Gc(11,"Quitar Aprobac\xedon "),d.Ec(12,j,1,0,"i",24),d.Wb(),d.Xb(13,"button",36),d.ec("click",(function(){return d.yc(o),d.gc().conciliar()})),d.Gc(14,"Conciliar "),d.Ec(15,L,1,0,"i",24),d.Wb(),d.Wb(),d.Wb()}if(2&o){const o=d.gc();d.Fb(1),d.nc("ngIf",o.conciliacionCorrectos.length>0),d.Fb(1),d.nc("ngIf",o.conciliacionErroneos.length>0),d.Fb(2),d.nc("disabled",o.loading),d.Fb(2),d.nc("ngIf",o.loading),d.Fb(1),d.nc("disabled",o.loading),d.Fb(2),d.nc("ngIf",o.loading),d.Fb(1),d.nc("disabled",o.loading),d.Fb(2),d.nc("ngIf",o.loading),d.Fb(1),d.nc("disabled",o.loading),d.Fb(2),d.nc("ngIf",o.loading)}}function M(o,i){1&o&&d.Sb(0,"cybord-loader")}function J(o,i){1&o&&d.Sb(0,"i",42)}function U(o,i){1&o&&d.Sb(0,"i",42)}let V=(()=>{class o{constructor(o){this.ahorroService=o,this.loading=!1,this.pCarga=1,this.pErroneos=1,this.pCorrectos=1}ngOnInit(){this.datosConciliacion=new Array,this.conciliacionProcesados=new Array,this.conciliacionCorrectos=new Array,this.conciliacionErroneos=new Array}onFileChange(o){this.loading=!0;let i=null,n=null;const c=new FileReader,t=o[0];c.onload=o=>{const t=c.result;let e;for(e in i=s.read(t,{type:"binary"}),n=i.SheetNames.reduce((o,n)=>{const c=i.Sheets[n];return o[n]=s.utils.sheet_to_json(c,{range:16}),s.utils.sheet_to_json(c),o},{}),n);const a=n[e];for(const i of a){const o=JSON.parse(JSON.stringify(i)),n=Object.keys(o);if(3===Object.keys(o).length&&!String(i[n[0]]).includes("Dedu")){let o=String(i[n[2]]);o=o.replace(",","");const c=new l.a(i[n[0]],i[n[1]],parseInt(o,10));this.datosConciliacion.push(c)}}},c.readAsBinaryString(t),this.loading=!1}validar(){return Object(b.a)(this,void 0,void 0,(function*(){this.loading=!0,this.conciliacionProcesados=this.datosConciliacion,this.datosConciliacion=[];const o=yield this.ahorroService.postValidarInternos(this.conciliacionProcesados).toPromise(),i=JSON.parse(JSON.stringify(o));this.conciliacionCorrectos=i.correctos,this.conciliacionErroneos=i.errores,this.loading=!1}))}clean(){this.fileInput.nativeElement.value=null,this.datosConciliacion=[],this.conciliacionProcesados=[],this.conciliacionCorrectos=[],this.conciliacionErroneos=[],this.loading=!1}validarTodos(o){this.conciliacionErroneos.forEach(i=>{i.validado=o})}conciliar(){if(0===this.conciliacionCorrectos.length)return void alert("No hay Ahorradores validos para coinciliar");let o=!0;this.conciliacionErroneos.forEach(i=>{!1===i.validado&&(o=!1)}),o?this.openModal():alert("Existen Errores que no han sido aprobados")}openModal(){this.modalConfirmacion.show()}decline(){this.modalConfirmacion.hide()}conciliacion(){return Object(b.a)(this,void 0,void 0,(function*(){this.loading=!0,this.conciliacionCorrectos.forEach(o=>{o.validado=!0}),yield this.ahorroService.postConciliarInternos(this.conciliacionCorrectos).toPromise(),this.decline(),this.clean()}))}}return o.\u0275fac=function(i){return new(i||o)(d.Rb(u.a))},o.\u0275cmp=d.Lb({type:o,selectors:[["cybord-conciliacion-rh"]],viewQuery:function(o,i){var n;1&o&&(d.Lc(W,!0),d.Lc(X,!0)),2&o&&(d.uc(n=d.fc())&&(i.fileInput=n.first),d.uc(n=d.fc())&&(i.modalConfirmacion=n.first))},decls:36,vars:7,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"form-group","row"],["for","file-input",1,"col-md-2","col-form-label"],[1,"col-md-9"],["id","file-input","type","file","accept",".xlsx, .xls, .csv  ","name","file-input",1,"file-input",3,"change"],["fileInput",""],["class","table-responsive slide_1",4,"ngIf"],[4,"ngIf"],["bsModal","","id","modalConfirmacion","tabindex","-1","role","dialog","aria-labelledby","modalConfirmacion","aria-hidden","true",1,"modal","fade"],["modalConfirmacion","bs-modal"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","modalConfirmacionLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],["type","button",1,"btn","btn-secondary",3,"disabled","click"],[1,"table-responsive","slide_1"],[1,"table","table-bordered","table-sm"],[1,"thead-dark"],["scope","col",1,"text-center","colum_small_4"],["scope","col",1,"text-center","colum_nombre_4"],["scope","col",1,"text-center","colum_saldo_4"],[4,"ngFor","ngForOf"],["id","carga","previousLabel","Anterior","nextLabel","Siguiente","autoHide","true",3,"pageChange",4,"ngIf"],[1,"col-sm-6"],[1,"btn","btn-warning",3,"disabled","click"],[1,"btn","btn-success",3,"disabled","click"],["scope","row",1,"text-center","colum_small_4"],["scope","row",1,"text-left","colum_small_4"],["scope","row",1,"text-left","colum_nombre_4"],["scope","row",1,"text-right","colum_saldo_4"],["id","carga","previousLabel","Anterior","nextLabel","Siguiente","autoHide","true",3,"pageChange"],[1,"fa","fa-spinner","fa-spin"],["scope","col",1,"text-center"],["id","correctos","previousLabel","Anterior","nextLabel","Siguiente","autoHide","true",3,"pageChange"],["scope","row",1,"text-center"],["scope","row",1,"text-left"],[3,"ngClass",4,"ngFor","ngForOf"],["id","erroneos","previousLabel","Anterior","nextLabel","Siguiente","autoHide","true",3,"pageChange"],[3,"ngClass"],["type","checkbox",3,"ngModel","ngModelChange"],["scope","row",1,"text-right"]],template:function(o,i){1&o&&(d.Xb(0,"div",0),d.Xb(1,"div",1),d.Xb(2,"div",2),d.Xb(3,"div",3),d.Xb(4,"div",4),d.Xb(5,"strong"),d.Gc(6,"Conciliacion"),d.Wb(),d.Wb(),d.Xb(7,"div",5),d.Xb(8,"div",6),d.Xb(9,"label",7),d.Gc(10,"Subir Archivo"),d.Wb(),d.Xb(11,"div",8),d.Xb(12,"input",9,10),d.ec("change",(function(o){return i.onFileChange(o.target.files)})),d.Wb(),d.Wb(),d.Wb(),d.Ec(14,I,23,11,"div",11),d.Ec(15,N,16,10,"div",11),d.Ec(16,M,1,0,"cybord-loader",12),d.Wb(),d.Wb(),d.Wb(),d.Wb(),d.Wb(),d.Xb(17,"div",13,14),d.Xb(19,"div",15),d.Xb(20,"div",16),d.Xb(21,"div",17),d.Xb(22,"h5",18),d.Gc(23,"Confirmacion"),d.Wb(),d.Xb(24,"button",19),d.ec("click",(function(){return i.decline()})),d.Xb(25,"span",20),d.Gc(26,"\xd7"),d.Wb(),d.Wb(),d.Wb(),d.Xb(27,"div",21),d.Gc(28," \xbfConciliar Ahorros Internos? "),d.Wb(),d.Xb(29,"div",22),d.Xb(30,"button",23),d.ec("click",(function(){return i.conciliacion()})),d.Gc(31,"Si "),d.Ec(32,J,1,0,"i",24),d.Wb(),d.Xb(33,"button",25),d.ec("click",(function(){return i.decline()})),d.Gc(34,"No "),d.Ec(35,U,1,0,"i",24),d.Wb(),d.Wb(),d.Wb(),d.Wb(),d.Wb()),2&o&&(d.Fb(14),d.nc("ngIf",i.datosConciliacion.length>0),d.Fb(1),d.nc("ngIf",i.conciliacionProcesados.length>0),d.Fb(1),d.nc("ngIf",i.loading),d.Fb(14),d.nc("disabled",i.loading),d.Fb(2),d.nc("ngIf",i.loading),d.Fb(1),d.nc("disabled",i.loading),d.Fb(2),d.nc("ngIf",i.loading))},directives:[g.n,p.a,g.m,h.c,g.l,f.a,f.h,f.k,m.a],pipes:[h.b,g.d,g.w],styles:[".colum_small_4[_ngcontent-%COMP%]{width:10%}.colum_nombre_4[_ngcontent-%COMP%]{width:60%}.colum_saldo_4[_ngcontent-%COMP%]{width:20%}"]}),o})();var q=n("+vBq"),H=n("xkWA"),R=n("aJ9a"),Y=n("2jvo"),B=n("8vkG"),T=n("v/Gv");const $=[{path:"validaciones",component:t.a,data:{title:"Reporte Validaciones"}},{path:"historico",component:r.a,data:{title:"Historico validaciones"}},{path:"saldo-ahorro/:idUsuario",component:H.a,data:{title:"Ahorro usuario"}},{path:"prestamos-activos/:idUsuario",component:B.a,data:{title:"Prestamos usuario"}},{path:"conciliacion",component:V,data:{title:"Conciliacion RH"}},{path:"usuarios",component:e.a,data:{title:"Usuarios"}},{path:"usuarios/:idUsuario",component:a.a,data:{title:"Usario ISBG"}},{path:"validacion/:idSolicitud",component:q.a,data:{title:"Usario ISBG"}},{path:"historico/:idSolicitud",component:q.a,data:{title:"Usario ISBG"}},{path:"reportes-ahorro",component:R.a,data:{title:"Reporte de ahorro caja"}},{path:"reportes-prestamo",component:Y.a,data:{title:"Reporte de prestamos caja"}},{path:"ajustes/:idUsuario",component:T.a,data:{title:"Ajustes de usuario"}}];let D=(()=>{class o{}return o.\u0275mod=d.Pb({type:o}),o.\u0275inj=d.Ob({factory:function(i){return new(i||o)},imports:[[c.g.forChild($)],c.g]}),o})();var Q=n("65jD");let z=(()=>{class o{}return o.\u0275mod=d.Pb({type:o}),o.\u0275inj=d.Ob({factory:function(i){return new(i||o)},imports:[[Q.CommonsPagesModule,D,h.a]]}),o})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3k/E":function(i,o,t){"use strict";t.d(o,"a",(function(){return a}));class e{}class a{constructor(i){this.tipo=i,this.validaciones=[],this.atributos=new e}}},KpyH:function(i,o,t){"use strict";t.r(o),t.d(o,"UsuariosModule",(function(){return Ri}));var e=t("SVse"),a=t("iInd"),c=t("8Y7J"),b=t("ESM5"),n=t("LDwG"),s=t("hrfs");function r(i,o){1&i&&(c.Pb(0,"div",1),c.Pb(1,"div",7),c.vc(2," No hay registros de ahorro "),c.Ob(),c.Ob())}function d(i,o){if(1&i&&(c.Pb(0,"tr"),c.Pb(1,"td",14),c.vc(2),c.Zb(3,"date"),c.Ob(),c.Pb(4,"td",14),c.vc(5),c.Ob(),c.Pb(6,"td",14),c.vc(7),c.Zb(8,"currency"),c.Ob(),c.Ob()),2&i){const i=o.$implicit;c.xb(2),c.wc(c.bc(3,3,i.fechaCreacion,"dd/MM/yyyy")),c.xb(3),c.wc(i.tipo),c.xb(2),c.wc(c.ac(8,6,i.monto))}}function u(i,o){if(1&i){const i=c.Qb();c.Pb(0,"div",1),c.Pb(1,"div",8),c.Pb(2,"strong"),c.vc(3,"Mis ahorros"),c.Ob(),c.Kb(4,"br"),c.Kb(5,"br"),c.Pb(6,"table",9),c.Pb(7,"thead",10),c.Pb(8,"tr"),c.Pb(9,"th"),c.vc(10,"FECHA"),c.Ob(),c.Pb(11,"th"),c.vc(12,"TIPO"),c.Ob(),c.Pb(13,"th"),c.vc(14,"MONTO"),c.Ob(),c.Ob(),c.Ob(),c.Pb(15,"tbody"),c.uc(16,d,9,8,"tr",11),c.Pb(17,"tr"),c.Kb(18,"td"),c.Pb(19,"td"),c.Pb(20,"strong"),c.vc(21,"TOTAL"),c.Ob(),c.Ob(),c.Pb(22,"td"),c.Pb(23,"strong"),c.vc(24),c.Zb(25,"currency"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(26,"div",12),c.Pb(27,"canvas",13),c.Wb("chartHover",(function(o){return c.oc(i),c.Yb().chartHovered(o)}))("chartClick",(function(o){return c.oc(i),c.Yb().chartClicked(o)})),c.Ob(),c.Ob(),c.Ob()}if(2&i){const i=c.Yb();c.xb(16),c.ec("ngForOf",i.ahorros),c.xb(8),c.wc(c.ac(25,7,i.total)),c.xb(3),c.ec("datasets",i.barChartData)("labels",i.barChartLabels)("options",i.barChartOptions)("legend",i.barChartLegend)("chartType",i.barChartType)}}let l=(()=>{class i{constructor(i,o){this.userService=i,this.saldosAhorro=o,this.barChartOptions={scaleShowVerticalLines:!1,responsive:!0},this.barChartLabels=[],this.barChartType="bar",this.barChartLegend=!0,this.datos=[],this.errorMessages=[],this.barChartData=[],this.months=["noviembre","diciembre","enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre"],this.ahorros=[]}ngOnInit(){this.userService.myInfo().toPromise().then(i=>{this.saldosAhorro.getSaldoByUsuario(i.id).subscribe(i=>{this.ahorros=i,this.total=i.map(i=>i.monto).reduce((i,o)=>i+o),this.setCharInfo(),this.barChartData=[{data:this.datos,label:"Ahorro acumulado"}]})}).catch(i=>this.errorMessages.push(i)),this.barChartData=[{data:[22,11],label:"Ahorro acumulado"}]}setCharInfo(){var i=new Date,o=i.getMonth();o=this.monthChanger(o);for(var t=i.getFullYear(),e=0;e<=o;e++)this.barChartLabels.push(this.months[e]),this.datos.push(0);for(e=0;e<this.datos.length;e++){var a=0;for(let i of this.ahorros){var c=new Date(i.fechaCreacion),b=this.monthChanger(c.getMonth());e>1?c.getMonth()<=o&&c.getFullYear()==t&&b==e&&(a+=i.monto):0!=b&&1!=b||c.getFullYear()!=t-1||(a+=i.monto)}this.datos[e]=this.truncate(0!=e?a+=this.datos[e-1]:a)}}truncate(i){return Math.trunc(i*Math.pow(10,2))/Math.pow(10,2)}monthChanger(i){for(let o=0;o<2;o++)i=++i>11?0:i;return i}chartClicked(i){}chartHovered(i){}}return i.\u0275fac=function(o){return new(o||i)(c.Jb(b.a),c.Jb(n.a))},i.\u0275cmp=c.Db({type:i,selectors:[["cybord-reporte-ahorro"]],decls:10,vars:2,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col"],[1,"card"],[1,"card-header"],[1,"card-body"],["class","row",4,"ngIf"],["role","alert",1,"alert","alert-primary"],[1,"col-4"],[1,"table","table-bordered","table-striped","table-sm"],[1,"thead-dark"],[4,"ngFor","ngForOf"],[1,"chart-wrapper","col-8"],["baseChart","",1,"chart",3,"datasets","labels","options","legend","chartType","chartHover","chartClick"],["scope","row"]],template:function(i,o){1&i&&(c.Pb(0,"div",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"div",3),c.Pb(4,"div",4),c.Pb(5,"strong"),c.vc(6,"Mi reporte ahorro"),c.Ob(),c.Ob(),c.Pb(7,"div",5),c.uc(8,r,3,0,"div",6),c.uc(9,u,28,9,"div",6),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&i&&(c.xb(8),c.ec("ngIf",0===o.ahorros.length),c.xb(1),c.ec("ngIf",o.ahorros.length>0))},directives:[e.m,e.l,s.a],pipes:[e.d,e.f],styles:[""]}),i})();var f=t("KZhB"),h=t("3k/E"),O=t("xKGb"),v=t("2ZVE"),g=t("s7LF"),P=t("LqlI"),p=t("CNMR"),m=t("ienR");const M=["modalConfirmacion"];function C(i,o){if(1&i&&(c.Pb(0,"div"),c.Pb(1,"alert",44),c.vc(2),c.Ob(),c.Ob()),2&i){const i=o.$implicit;c.xb(1),c.ec("dismissible",!0),c.xb(1),c.wc(i)}}function A(i,o){1&i&&(c.Kb(0,"i",45),c.vc(1,"\xa0 Solicitud"))}function x(i,o){if(1&i&&(c.Pb(0,"p"),c.Pb(1,"strong"),c.vc(2),c.Ob(),c.Ob()),2&i){const i=c.Yb();c.xb(2),c.xc("Solicitud No. ",i.solicitudAhorro.id,"")}}function I(i,o){1&i&&(c.Pb(0,"span",27),c.vc(1,"Descuento quincenal"),c.Ob())}const y=function(){return{containerClass:"theme-dark-blue"}};function w(i,o){if(1&i){const i=c.Qb();c.Pb(0,"input",46,47),c.Wb("bsValueChange",(function(o){return c.oc(i),c.Yb().bsValue=o})),c.Ob()}if(2&i){const i=c.Yb();c.ec("bsConfig",c.gc(3,y))("datesEnabled",i.enabledDates)("bsValue",i.bsValue)}}function E(i,o){if(1&i){const i=c.Qb();c.Pb(0,"input",48),c.Wb("ngModelChange",(function(o){return c.oc(i),c.Yb().solicitudAhorro.atributos.FECHA=o})),c.Ob()}if(2&i){const i=c.Yb();c.ec("ngModel",i.solicitudAhorro.atributos.FECHA)}}function R(i,o){1&i&&(c.Pb(0,"span",27),c.vc(1,"fecha inicio descuentos"),c.Ob())}function D(i,o){if(1&i){const i=c.Qb();c.Pb(0,"button",49),c.Wb("click",(function(){return c.oc(i),c.Yb().openModal("SolicitudAhorro")})),c.Kb(1,"i",50),c.vc(2,"\xa0Enviar solicitud"),c.Ob()}if(2&i){const i=c.Yb();c.ec("disabled",i.loading||i.success.length>0)}}function F(i,o){1&i&&c.Kb(0,"i",51)}function N(i,o){1&i&&(c.Pb(0,"div",58),c.vc(1," La solicitud de ahorro fue exitosamente aprobada. "),c.Ob())}function Y(i,o){if(1&i&&(c.Pb(0,"div",59),c.vc(1),c.Ob()),2&i){const i=c.Yb(2);c.xb(1),c.xc(" La solicitud de ahorro fue rechazada, el motivo es : ",i.solicitudAhorro.statusDetalle,". ")}}function S(i,o){1&i&&(c.Pb(0,"div",60),c.vc(1," La solicitud de ahorro se encuentra en tramite. "),c.Ob())}function T(i,o){1&i&&(c.Pb(0,"span",64),c.vc(1,"APROBADA"),c.Ob())}function K(i,o){1&i&&(c.Pb(0,"span",65),c.vc(1,"RECHAZADO"),c.Ob())}function H(i,o){if(1&i&&(c.Pb(0,"tr"),c.Pb(1,"td",61),c.vc(2),c.Zb(3,"date"),c.Ob(),c.Pb(4,"td",61),c.vc(5),c.Ob(),c.Pb(6,"td",61),c.uc(7,T,2,0,"span",62),c.uc(8,K,2,0,"span",63),c.Ob(),c.Ob()),2&i){const i=o.$implicit;c.xb(2),c.wc(c.bc(3,4,i.fechaCreacion,"dd/MM/yyyy")),c.xb(3),c.wc(i.area),c.xb(2),c.ec("ngIf",i.status),c.xb(1),c.ec("ngIf",!i.status)}}function k(i,o){if(1&i&&(c.Pb(0,"div",1),c.Kb(1,"div",52),c.Pb(2,"div",53),c.uc(3,N,2,0,"div",31),c.uc(4,Y,2,1,"div",54),c.uc(5,S,2,0,"div",55),c.Pb(6,"strong"),c.vc(7,"Autorizaciones"),c.Ob(),c.Kb(8,"br"),c.Kb(9,"br"),c.Pb(10,"table",56),c.Pb(11,"thead",57),c.Pb(12,"tr"),c.Pb(13,"th"),c.vc(14,"FECHA"),c.Ob(),c.Pb(15,"th"),c.vc(16,"AREA"),c.Ob(),c.Pb(17,"th"),c.vc(18,"ESTATUS"),c.Ob(),c.Ob(),c.Ob(),c.Pb(19,"tbody"),c.uc(20,H,9,7,"tr",7),c.Ob(),c.Ob(),c.Ob(),c.Kb(21,"div",52),c.Ob()),2&i){const i=c.Yb();c.xb(3),c.ec("ngIf","Finalizada"===i.solicitudAhorro.status),c.xb(1),c.ec("ngIf","Rechazada"===i.solicitudAhorro.status),c.xb(1),c.ec("ngIf","Rechazada"!==i.solicitudAhorro.status&&"Finalizada"!==i.solicitudAhorro.status),c.xb(15),c.ec("ngForOf",i.solicitudAhorro.validaciones)}}function z(i,o){1&i&&(c.Kb(0,"i",70),c.vc(1,"\xa0 Modificaci\xf3n"))}function q(i,o){1&i&&(c.Pb(0,"span",27),c.vc(1,"Descuento actual"),c.Ob())}function U(i,o){1&i&&(c.Pb(0,"span",27),c.vc(1,"Nueva cantidad"),c.Ob())}function V(i,o){if(1&i){const i=c.Qb();c.Pb(0,"input",71,47),c.Wb("bsValueChange",(function(o){return c.oc(i),c.Yb(2).bsValue=o})),c.Ob()}if(2&i){const i=c.Yb(2);c.ec("bsConfig",c.gc(3,y))("datesEnabled",i.enabledDates)("bsValue",i.bsValue)}}function W(i,o){if(1&i){const i=c.Qb();c.Pb(0,"input",72),c.Wb("ngModelChange",(function(o){return c.oc(i),c.Yb(2).solicitudModificacion.atributos.FECHA=o})),c.Ob()}if(2&i){const i=c.Yb(2);c.ec("ngModel",i.solicitudModificacion.atributos.FECHA)}}function L(i,o){1&i&&(c.Pb(0,"span",27),c.vc(1,"fecha modificacion descuento"),c.Ob())}function Z(i,o){if(1&i){const i=c.Qb();c.Pb(0,"button",49),c.Wb("click",(function(){return c.oc(i),c.Yb(2).openModal("ModificacionAhorro")})),c.Kb(1,"i",50),c.vc(2,"\xa0Enviar solicitud"),c.Ob()}if(2&i){const i=c.Yb(2);c.ec("disabled",i.loading||i.success.length>0)}}function $(i,o){1&i&&c.Kb(0,"i",51)}function Q(i,o){1&i&&(c.Pb(0,"div",58),c.vc(1," La modificaci\xf3n del ahorro fue exitosamente aprobada. "),c.Ob())}function B(i,o){if(1&i&&(c.Pb(0,"div",59),c.vc(1),c.Ob()),2&i){const i=c.Yb(3);c.xb(1),c.xc(" La modificaci\xf3n del ahorro fue rechazada, el motivo es : ",i.solicitudModificacion.statusDetalle,". ")}}function j(i,o){1&i&&(c.Pb(0,"div",60),c.vc(1," La modificaci\xf3n del ahorro se encuentra en tramite. "),c.Ob())}function _(i,o){1&i&&(c.Pb(0,"span",64),c.vc(1,"APROBADA"),c.Ob())}function J(i,o){1&i&&(c.Pb(0,"span",65),c.vc(1,"RECHAZADO"),c.Ob())}function G(i,o){if(1&i&&(c.Pb(0,"tr"),c.Pb(1,"td",61),c.vc(2),c.Zb(3,"date"),c.Ob(),c.Pb(4,"td",61),c.vc(5),c.Ob(),c.Pb(6,"td",61),c.uc(7,_,2,0,"span",62),c.uc(8,J,2,0,"span",63),c.Ob(),c.Ob()),2&i){const i=o.$implicit;c.xb(2),c.wc(c.bc(3,4,i.fechaCreacion,"dd/MM/yyyy")),c.xb(3),c.wc(i.area),c.xb(2),c.ec("ngIf",i.status),c.xb(1),c.ec("ngIf",!i.status)}}function X(i,o){if(1&i&&(c.Pb(0,"div",1),c.Kb(1,"div",52),c.Pb(2,"div",53),c.uc(3,Q,2,0,"div",31),c.uc(4,B,2,1,"div",54),c.uc(5,j,2,0,"div",55),c.Pb(6,"strong"),c.vc(7,"Autorizaciones"),c.Ob(),c.Kb(8,"br"),c.Kb(9,"br"),c.Pb(10,"table",56),c.Pb(11,"thead",57),c.Pb(12,"tr"),c.Pb(13,"th"),c.vc(14,"FECHA"),c.Ob(),c.Pb(15,"th"),c.vc(16,"AREA"),c.Ob(),c.Pb(17,"th"),c.vc(18,"ESTATUS"),c.Ob(),c.Ob(),c.Ob(),c.Pb(19,"tbody"),c.uc(20,G,9,7,"tr",7),c.Ob(),c.Ob(),c.Ob(),c.Kb(21,"div",52),c.Ob()),2&i){const i=c.Yb(2);c.xb(3),c.ec("ngIf","Finalizada"===i.solicitudModificacion.status),c.xb(1),c.ec("ngIf","Rechazada"===i.solicitudModificacion.status),c.xb(1),c.ec("ngIf","Rechazada"!==i.solicitudModificacion.status&&"Finalizada"!==i.solicitudModificacion.status),c.xb(15),c.ec("ngForOf",i.solicitudModificacion.validaciones)}}function ii(i,o){if(1&i){const i=c.Qb();c.Pb(0,"tab"),c.uc(1,z,2,0,"ng-template",9),c.Kb(2,"br"),c.Pb(3,"div",1),c.Pb(4,"div",10),c.Pb(5,"form",12),c.Pb(6,"div",13),c.Pb(7,"label",14),c.vc(8,"Nombre"),c.Ob(),c.Pb(9,"div",15),c.Pb(10,"p",16),c.Pb(11,"strong"),c.vc(12),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(13,"div",13),c.Pb(14,"label",17),c.vc(15,"No. empleado"),c.Ob(),c.Pb(16,"div",15),c.Pb(17,"input",18),c.Wb("ngModelChange",(function(o){return c.oc(i),c.Yb().usuario.noEmpleado=o})),c.Ob(),c.Ob(),c.Ob(),c.Pb(18,"div",13),c.Pb(19,"label",19),c.vc(20,"Oficina"),c.Ob(),c.Pb(21,"div",15),c.Pb(22,"input",20),c.Wb("ngModelChange",(function(o){return c.oc(i),c.Yb().usuario.datosUsuario.OFICINA=o})),c.Ob(),c.Ob(),c.Ob(),c.Pb(23,"div",13),c.Pb(24,"label",66),c.vc(25,"Descuento quincenal actual"),c.Ob(),c.Pb(26,"div",15),c.Pb(27,"input",67),c.Wb("ngModelChange",(function(o){return c.oc(i),c.Yb().solicitudModificacion.atributos.MONTO=o})),c.Ob(),c.uc(28,q,2,0,"span",23),c.Ob(),c.Ob(),c.Pb(29,"div",13),c.Pb(30,"label",21),c.vc(31,"Nuevo descuento"),c.Ob(),c.Pb(32,"div",15),c.Pb(33,"input",22),c.Wb("ngModelChange",(function(o){return c.oc(i),c.Yb().solicitudModificacion.atributos.MONTO_MODIFICACION=o})),c.Ob(),c.uc(34,U,2,0,"span",23),c.Ob(),c.Ob(),c.Pb(35,"div",13),c.Pb(36,"label",24),c.vc(37,"Fecha modificacion"),c.Ob(),c.Pb(38,"div",15),c.uc(39,V,2,4,"input",68),c.uc(40,W,1,1,"input",69),c.uc(41,L,2,0,"span",23),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(42,"div",10),c.Pb(43,"span",27),c.vc(44," Yo "),c.Pb(45,"strong"),c.vc(46),c.Ob(),c.vc(47," con n\xfamero de trabajador "),c.Pb(48,"strong"),c.vc(49),c.Ob(),c.vc(50," adscrito a la Oficina "),c.Pb(51,"strong"),c.vc(52),c.Ob(),c.vc(53," solicito por este medio se modifique el descuento de "),c.Pb(54,"strong"),c.vc(55),c.Ob(),c.vc(56," que se me aplica en mi pago de n\xf3mina por la por la cantidad de "),c.Pb(57,"strong"),c.vc(58),c.Ob(),c.vc(59," aplicable a partir de la fecha "),c.Pb(60,"strong"),c.vc(61),c.Zb(62,"date"),c.Ob(),c.vc(63,". "),c.Ob(),c.Kb(64,"br"),c.Kb(65,"br"),c.uc(66,Z,3,1,"button",28),c.uc(67,$,1,0,"i",29),c.Ob(),c.Ob(),c.uc(68,X,22,4,"div",30),c.Ob()}if(2&i){const i=c.Yb();c.xb(12),c.wc(i.usuario.nombre),c.xb(5),c.ec("ngModel",i.usuario.noEmpleado),c.xb(5),c.ec("ngModel",i.usuario.datosUsuario.OFICINA),c.xb(5),c.ec("disabled",void 0!==i.solicitudModificacion.atributos.MONTO)("ngModel",i.solicitudModificacion.atributos.MONTO),c.xb(1),c.ec("ngIf",void 0===i.solicitudModificacion.atributos.MONTO),c.xb(5),c.ec("disabled",void 0!==i.solicitudModificacion.id)("ngModel",i.solicitudModificacion.atributos.MONTO_MODIFICACION),c.xb(1),c.ec("ngIf",void 0===i.solicitudModificacion.id),c.xb(5),c.ec("ngIf",void 0===i.solicitudModificacion.atributos.FECHA),c.xb(1),c.ec("ngIf",void 0!==i.solicitudModificacion.atributos.FECHA),c.xb(1),c.ec("ngIf",void 0===i.solicitudModificacion.atributos.FECHA),c.xb(5),c.wc(i.usuario.nombre),c.xb(3),c.wc(i.usuario.noEmpleado),c.xb(3),c.wc(i.usuario.datosUsuario.OFICINA),c.xb(3),c.xc(" $ ",i.solicitudModificacion.atributos.MONTO," "),c.xb(3),c.xc(" $ ",i.solicitudModificacion.atributos.MONTO_MODIFICACION," "),c.xb(3),c.wc(c.ac(62,21,i.bsValue)),c.xb(5),c.ec("ngIf",void 0===i.solicitudModificacion.id||"Rechazada"===i.solicitudModificacion.status),c.xb(1),c.ec("ngIf",i.loading),c.xb(1),c.ec("ngIf",void 0!==i.solicitudModificacion.id&&i.solicitudModificacion.validaciones.length>0)}}function oi(i,o){1&i&&(c.Kb(0,"i",77),c.vc(1,"\xa0 Retiro Parcial"))}function ti(i,o){1&i&&(c.Pb(0,"span",27),c.vc(1,"Monto de retiro"),c.Ob())}function ei(i,o){1&i&&(c.Pb(0,"span",27),c.vc(1,"Cuenta interbancaria CLABE"),c.Ob())}function ai(i,o){if(1&i){const i=c.Qb();c.Pb(0,"button",49),c.Wb("click",(function(){return c.oc(i),c.Yb(2).openModal("RetiroParcialAhorro")})),c.Kb(1,"i",50),c.vc(2,"\xa0Enviar solicitud"),c.Ob()}if(2&i){const i=c.Yb(2);c.ec("disabled",i.loading||i.success.length>0)}}function ci(i,o){1&i&&c.Kb(0,"i",51)}function bi(i,o){1&i&&(c.Pb(0,"div",58),c.vc(1," La solicitud de ahorro fue exitosamente aprobada. "),c.Ob())}function ni(i,o){if(1&i&&(c.Pb(0,"div",59),c.vc(1),c.Ob()),2&i){const i=c.Yb(3);c.xb(1),c.xc(" La solicitud de ahorro fue rechazada, el motivo es : ",i.solicitudAhorro.statusDetalle,". ")}}function si(i,o){1&i&&(c.Pb(0,"div",60),c.vc(1," La solicitud de ahorro se encuentra en tramite. "),c.Ob())}function ri(i,o){1&i&&(c.Pb(0,"span",64),c.vc(1,"APROBADA"),c.Ob())}function di(i,o){1&i&&(c.Pb(0,"span",65),c.vc(1,"RECHAZADO"),c.Ob())}function ui(i,o){if(1&i&&(c.Pb(0,"tr"),c.Pb(1,"td",61),c.vc(2),c.Zb(3,"date"),c.Ob(),c.Pb(4,"td",61),c.vc(5),c.Ob(),c.Pb(6,"td",61),c.uc(7,ri,2,0,"span",62),c.uc(8,di,2,0,"span",63),c.Ob(),c.Ob()),2&i){const i=o.$implicit;c.xb(2),c.wc(c.bc(3,4,i.fechaCreacion,"dd/MM/yyyy")),c.xb(3),c.wc(i.area),c.xb(2),c.ec("ngIf",i.status),c.xb(1),c.ec("ngIf",!i.status)}}function li(i,o){if(1&i&&(c.Pb(0,"div",1),c.Kb(1,"div",52),c.Pb(2,"div",53),c.uc(3,bi,2,0,"div",31),c.uc(4,ni,2,1,"div",54),c.uc(5,si,2,0,"div",55),c.Pb(6,"strong"),c.vc(7,"Autorizaciones"),c.Ob(),c.Kb(8,"br"),c.Kb(9,"br"),c.Pb(10,"table",56),c.Pb(11,"thead",57),c.Pb(12,"tr"),c.Pb(13,"th"),c.vc(14,"FECHA"),c.Ob(),c.Pb(15,"th"),c.vc(16,"AREA"),c.Ob(),c.Pb(17,"th"),c.vc(18,"ESTATUS"),c.Ob(),c.Ob(),c.Ob(),c.Pb(19,"tbody"),c.uc(20,ui,9,7,"tr",7),c.Ob(),c.Ob(),c.Ob(),c.Kb(21,"div",52),c.Ob()),2&i){const i=c.Yb(2);c.xb(3),c.ec("ngIf","Finalizada"===i.solicitudRetiro.status),c.xb(1),c.ec("ngIf","Rechazada"===i.solicitudRetiro.status),c.xb(1),c.ec("ngIf","Rechazada"!==i.solicitudRetiro.status&&"Finalizada"!==i.solicitudRetiro.status),c.xb(15),c.ec("ngForOf",i.solicitudRetiro.validaciones)}}function fi(i,o){if(1&i){const i=c.Qb();c.Pb(0,"tab"),c.uc(1,oi,2,0,"ng-template",9),c.Kb(2,"br"),c.Pb(3,"div",1),c.Pb(4,"div",10),c.Pb(5,"form",12),c.Pb(6,"div",13),c.Pb(7,"label",14),c.vc(8,"Nombre"),c.Ob(),c.Pb(9,"div",15),c.Pb(10,"p",16),c.Pb(11,"strong"),c.vc(12),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(13,"div",13),c.Pb(14,"label",17),c.vc(15,"No. empleado"),c.Ob(),c.Pb(16,"div",15),c.Pb(17,"input",18),c.Wb("ngModelChange",(function(o){return c.oc(i),c.Yb().usuario.noEmpleado=o})),c.Ob(),c.Ob(),c.Ob(),c.Pb(18,"div",13),c.Pb(19,"label",19),c.vc(20,"Oficina"),c.Ob(),c.Pb(21,"div",15),c.Pb(22,"input",20),c.Wb("ngModelChange",(function(o){return c.oc(i),c.Yb().usuario.datosUsuario.OFICINA=o})),c.Ob(),c.Ob(),c.Ob(),c.Pb(23,"div",13),c.Pb(24,"label",73),c.vc(25,"Monto de retiro"),c.Ob(),c.Pb(26,"div",15),c.Pb(27,"input",74),c.Wb("ngModelChange",(function(o){return c.oc(i),c.Yb().solicitudRetiro.atributos.MONTO=o})),c.Ob(),c.uc(28,ti,2,0,"span",23),c.Ob(),c.Ob(),c.Pb(29,"div",13),c.Pb(30,"label",75),c.vc(31,"Cuenta CLABE"),c.Ob(),c.Pb(32,"div",15),c.Pb(33,"input",76),c.Wb("ngModelChange",(function(o){return c.oc(i),c.Yb().solicitudRetiro.atributos.NO_CUENTA=o})),c.Ob(),c.uc(34,ei,2,0,"span",23),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(35,"div",10),c.Pb(36,"span",27),c.vc(37," Yo "),c.Pb(38,"strong"),c.vc(39),c.Ob(),c.vc(40," con n\xfamero de trabajador "),c.Pb(41,"strong"),c.vc(42),c.Ob(),c.vc(43," adscrito a la Oficina "),c.Pb(44,"strong"),c.vc(45),c.Ob(),c.vc(46),c.Ob(),c.Kb(47,"br"),c.Kb(48,"br"),c.uc(49,ai,3,1,"button",28),c.uc(50,ci,1,0,"i",29),c.Ob(),c.Ob(),c.uc(51,li,22,4,"div",30),c.Ob()}if(2&i){const i=c.Yb();c.xb(12),c.wc(i.usuario.nombre),c.xb(5),c.ec("ngModel",i.usuario.noEmpleado),c.xb(5),c.ec("ngModel",i.usuario.datosUsuario.OFICINA),c.xb(5),c.ec("disabled",void 0!==i.solicitudRetiro.id&&"Rechazada"!==i.solicitudRetiro.status)("ngModel",i.solicitudRetiro.atributos.MONTO),c.xb(1),c.ec("ngIf",void 0===i.solicitudRetiro.id),c.xb(5),c.ec("disabled",void 0!==i.solicitudRetiro.id&&"Rechazada"!==i.solicitudRetiro.status)("ngModel",i.solicitudRetiro.atributos.NO_CUENTA),c.xb(1),c.ec("ngIf",void 0===i.solicitudRetiro.id),c.xb(5),c.wc(i.usuario.nombre),c.xb(3),c.wc(i.usuario.noEmpleado),c.xb(3),c.wc(i.usuario.datosUsuario.OFICINA),c.xb(1),c.yc(" solicito por este medio la cantidad de $ ",i.solicitudRetiro.atributos.MONTO," por concepto de Retiro Parcial de mi ahorro, que sea depositado a la cuenta ",i.solicitudRetiro.atributos.NO_CUENTA," "),c.xb(3),c.ec("ngIf",void 0===i.solicitudRetiro.id||"Rechazada"===i.solicitudRetiro.status),c.xb(1),c.ec("ngIf",i.loading),c.xb(1),c.ec("ngIf",void 0!==i.solicitudRetiro.id&&i.solicitudRetiro.validaciones.length>0)}}function hi(i,o){1&i&&(c.Kb(0,"i",81),c.vc(1,"\xa0 Cancelaci\xf3n"))}function Oi(i,o){1&i&&(c.Pb(0,"span",27),c.vc(1,"Descuento quincenal"),c.Ob())}function vi(i,o){if(1&i){const i=c.Qb();c.Pb(0,"input",46,47),c.Wb("bsValueChange",(function(o){return c.oc(i),c.Yb(2).bsValue=o})),c.Ob()}if(2&i){const i=c.Yb(2);c.ec("bsConfig",c.gc(3,y))("datesEnabled",i.enabledDates)("bsValue",i.bsValue)}}function gi(i,o){if(1&i){const i=c.Qb();c.Pb(0,"input",48),c.Wb("ngModelChange",(function(o){return c.oc(i),c.Yb(2).solicitudAhorro.atributos.FECHA=o})),c.Ob()}if(2&i){const i=c.Yb(2);c.ec("ngModel",i.solicitudAhorro.atributos.FECHA)}}function Pi(i,o){1&i&&(c.Pb(0,"span",27),c.vc(1,"fecha inicio descuentos"),c.Ob())}function pi(i,o){1&i&&c.Kb(0,"i",51)}function mi(i,o){1&i&&(c.Pb(0,"span",64),c.vc(1,"APROBADA"),c.Ob())}function Mi(i,o){1&i&&(c.Pb(0,"span",65),c.vc(1,"RECHAZADO"),c.Ob())}function Ci(i,o){if(1&i&&(c.Pb(0,"tr"),c.Pb(1,"td",61),c.vc(2),c.Zb(3,"date"),c.Ob(),c.Pb(4,"td",61),c.vc(5),c.Ob(),c.Pb(6,"td",61),c.uc(7,mi,2,0,"span",62),c.uc(8,Mi,2,0,"span",63),c.Ob(),c.Pb(9,"td",61),c.vc(10),c.Ob(),c.Ob()),2&i){const i=o.$implicit;c.xb(2),c.wc(c.bc(3,5,i.fechaCreacion,"dd/MM/yyyy")),c.xb(3),c.wc(i.area),c.xb(2),c.ec("ngIf",i.status),c.xb(1),c.ec("ngIf",!i.status),c.xb(2),c.wc(i.statusDetalle)}}function Ai(i,o){if(1&i&&(c.Pb(0,"div",1),c.Kb(1,"div",52),c.Pb(2,"div",53),c.Pb(3,"strong"),c.vc(4,"Autorizaciones"),c.Ob(),c.Kb(5,"br"),c.Kb(6,"br"),c.Pb(7,"table",56),c.Pb(8,"thead",57),c.Pb(9,"tr"),c.Pb(10,"th"),c.vc(11,"FECHA"),c.Ob(),c.Pb(12,"th"),c.vc(13,"AREA"),c.Ob(),c.Pb(14,"th"),c.vc(15,"ESTATUS"),c.Ob(),c.Pb(16,"th"),c.vc(17,"OBSERVACIONES"),c.Ob(),c.Ob(),c.Ob(),c.Pb(18,"tbody"),c.uc(19,Ci,11,8,"tr",7),c.Ob(),c.Ob(),c.Ob(),c.Kb(20,"div",52),c.Ob()),2&i){const i=c.Yb(2);c.xb(19),c.ec("ngForOf",i.solicitudCancelacion.validaciones)}}function xi(i,o){if(1&i){const i=c.Qb();c.Pb(0,"tab"),c.uc(1,hi,2,0,"ng-template",9),c.Kb(2,"br"),c.Pb(3,"div",1),c.Pb(4,"div",10),c.Pb(5,"form",12),c.Pb(6,"div",13),c.Pb(7,"label",14),c.vc(8,"Nombre"),c.Ob(),c.Pb(9,"div",15),c.Pb(10,"p",16),c.Pb(11,"strong"),c.vc(12),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(13,"div",13),c.Pb(14,"label",17),c.vc(15,"No. empleado"),c.Ob(),c.Pb(16,"div",15),c.Pb(17,"input",18),c.Wb("ngModelChange",(function(o){return c.oc(i),c.Yb().usuario.datosUsuario.NO_EMPLEADO=o})),c.Ob(),c.Ob(),c.Ob(),c.Pb(18,"div",13),c.Pb(19,"label",19),c.vc(20,"Oficina"),c.Ob(),c.Pb(21,"div",15),c.Pb(22,"input",20),c.Wb("ngModelChange",(function(o){return c.oc(i),c.Yb().usuario.datosUsuario.OFICINA=o})),c.Ob(),c.Ob(),c.Ob(),c.Pb(23,"div",13),c.Pb(24,"label",21),c.vc(25,"Descuento quincenal"),c.Ob(),c.Pb(26,"div",15),c.Pb(27,"input",22),c.Wb("ngModelChange",(function(o){return c.oc(i),c.Yb().solicitudAhorro.atributos.MONTO=o})),c.Ob(),c.uc(28,Oi,2,0,"span",23),c.Ob(),c.Ob(),c.Pb(29,"div",13),c.Pb(30,"label",24),c.vc(31,"Fecha inicio"),c.Ob(),c.Pb(32,"div",15),c.uc(33,vi,2,4,"input",25),c.uc(34,gi,1,1,"input",26),c.uc(35,Pi,2,0,"span",23),c.Ob(),c.Ob(),c.Pb(36,"div",13),c.Pb(37,"label",78),c.vc(38,"Motivo de cancelacion"),c.Ob(),c.Pb(39,"div",15),c.Kb(40,"textarea",79),c.Ob(),c.Ob(),c.Pb(41,"div",13),c.Pb(42,"label",24),c.vc(43,"Cuenta deposito"),c.Ob(),c.Pb(44,"div",15),c.Kb(45,"input",80),c.Pb(46,"span",27),c.vc(47,"cuenta deposito"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(48,"div",10),c.Pb(49,"span",27),c.vc(50," Yo "),c.Pb(51,"strong"),c.vc(52),c.Ob(),c.vc(53," con n\xfamero de trabajador "),c.Pb(54,"strong"),c.vc(55),c.Ob(),c.vc(56," adscrito a la Oficina "),c.Pb(57,"strong"),c.vc(58),c.Ob(),c.vc(59," solicito por este medio se cancele el descuento que se aplica en mi pago de n\xf3mina la cantidad de de $ ###.## de manera quincenal a partir de la siguiente fecha yyyy-MM-dd, debido a RAZON_MOTIVO_CANCELACI\xd3N y asimismo se me reintegre la cantidad ahorrada en la cuenta del PROGRAMA DE AHORRO VOLUNTARIO a mi cuenta 0000 0000 0000 0000 "),c.Ob(),c.Kb(60,"br"),c.Kb(61,"br"),c.Pb(62,"button",49),c.Wb("click",(function(){return c.oc(i),c.Yb().openModal("CancelacionAhorro")})),c.Kb(63,"i",50),c.vc(64,"\xa0 Enviar solicitud "),c.uc(65,pi,1,0,"i",29),c.Ob(),c.Ob(),c.Ob(),c.uc(66,Ai,21,1,"div",30),c.Ob()}if(2&i){const i=c.Yb();c.xb(12),c.wc(i.usuario.nombre),c.xb(5),c.ec("ngModel",i.usuario.datosUsuario.NO_EMPLEADO),c.xb(5),c.ec("ngModel",i.usuario.datosUsuario.OFICINA),c.xb(5),c.ec("disabled",void 0!==i.solicitudAhorro.id)("ngModel",i.solicitudAhorro.atributos.MONTO),c.xb(1),c.ec("ngIf",void 0===i.solicitudAhorro.id),c.xb(5),c.ec("ngIf",void 0===i.solicitudAhorro.atributos.FECHA),c.xb(1),c.ec("ngIf",void 0!==i.solicitudAhorro.atributos.FECHA),c.xb(1),c.ec("ngIf",void 0===i.solicitudAhorro.atributos.FECHA),c.xb(17),c.wc(i.usuario.nombre),c.xb(3),c.wc(i.usuario.noEmpleado),c.xb(3),c.wc(i.usuario.datosUsuario.OFICINA),c.xb(4),c.ec("disabled",i.loading||i.success.length>0),c.xb(3),c.ec("ngIf",i.loading),c.xb(1),c.ec("ngIf",void 0!==i.solicitudCancelacion.id&&i.solicitudCancelacion.validaciones.length>0)}}function Ii(i,o){if(1&i&&(c.Pb(0,"p",58),c.vc(1),c.Ob()),2&i){const i=c.Yb();c.xb(1),c.wc(i.success)}}const yi=[{path:"reportes",component:l,data:{title:"Historico ahorro"}},{path:"tramites",component:(()=>{class i{constructor(i,o,t){this.datepipe=i,this.userService=o,this.solicitudService=t,this.loading=!1,this.usuario=new f.a,this.errorMessages=[],this.success="",this.tipoSolicitud="SolicitudAhorro",this.alerts=[],this.enabledDates=[],this.solicitudAhorro=new h.a,this.solicitudModificacion=new h.a,this.solicitudRetiro=new h.a,this.solicitudCancelacion=new h.a}ngOnInit(){this.errorMessages=[],this.success="",this.calculateEnabledDates(),this.userService.myInfo().toPromise().then(i=>{this.solicitudService.getSolicitudesByUsuario(i.id).subscribe(i=>{this.solicitudAhorro=i.sort((i,o)=>new Date(o.fechaCreacion).getTime()-new Date(i.fechaCreacion).getTime()).find(i=>"SolicitudAhorro"===i.tipo)||new h.a("SolicitudAhorro"),this.solicitudCancelacion=i.sort((i,o)=>new Date(o.fechaCreacion).getTime()-new Date(i.fechaCreacion).getTime()).find(i=>"CancelacionAhorro"===i.tipo)||new h.a("CancelacionAhorro"),this.solicitudRetiro=i.sort((i,o)=>new Date(o.fechaCreacion).getTime()-new Date(i.fechaCreacion).getTime()).find(i=>"RetiroParcialAhorro"===i.tipo)||new h.a("RetiroParcialAhorro"),this.solicitudModificacion=i.sort((i,o)=>new Date(o.fechaCreacion).getTime()-new Date(i.fechaCreacion).getTime()).find(i=>"ModificacionAhorro"===i.tipo)||new h.a("ModificacionAhorro"),this.solicitudModificacion.atributos.MONTO=this.solicitudAhorro.atributos.MONTO}),this.userService.getUsuario(i.id).toPromise().then(i=>this.usuario=i)}).catch(i=>{this.alerts.push(i),this.loading=!1})}requestSolicitud(i){this.loading=!0,this.alerts=[],i.id=void 0,i.idUsuario=this.usuario.id,i.status="Solicitud",i.statusDetalle="Solicitud inicial",i.fechaEjecucion=new Date(this.bsValue),i.atributos.FECHA=this.datepipe.transform(this.bsValue,"yyyy-MM-dd"),this.solicitudService.postSolictudUsuario(this.usuario.id,i).toPromise().then(i=>{this.success="Se ha enviado la solicitud correctamente",this.loading=!1}).catch(i=>{this.alerts.push(i),this.loading=!1})}openModal(i){this.tipoSolicitud=i,console.log("requesting "+i),this.modalConfirmacion.show()}cancelar(){this.modalConfirmacion.hide()}aceptar(){switch(console.log("acepting "+this.tipoSolicitud),this.tipoSolicitud){case"SolicitudAhorro":this.requestSolicitud(this.solicitudAhorro);break;case"CancelacionAhorro":this.requestSolicitud(this.solicitudCancelacion);break;case"RetiroParcialAhorro":this.requestSolicitud(this.solicitudRetiro);break;case"ModificacionAhorro":this.requestSolicitud(this.solicitudModificacion);break;default:this.errorMessages.push("Error identificando el tipo de solicitud")}this.modalConfirmacion.hide()}calculateEnabledDates(){const i=new Date;i.getDate()<15&&(i.setDate(15),i.setMonth(i.getMonth()),this.enabledDates.push(i));for(let o=1;o<5;o++){const i=new Date;i.setDate(1),i.setMonth(i.getMonth()+o),this.enabledDates.push(i);const t=new Date;t.setDate(15),t.setMonth(t.getMonth()+o),this.enabledDates.push(t)}}}return i.\u0275fac=function(o){return new(o||i)(c.Jb(e.f),c.Jb(b.a),c.Jb(O.a))},i.\u0275cmp=c.Db({type:i,selectors:[["cybord-tramites-ahorro"]],viewQuery:function(i,o){var t;1&i&&c.zc(M,!0),2&i&&c.lc(t=c.Xb())&&(o.modalConfirmacion=t.first)},decls:95,vars:25,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-12","col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body","bg-gray-100"],[1,"col-sm-12"],[4,"ngFor","ngForOf"],["staticTabs",""],["tabHeading",""],[1,"col-xs-12","col-sm-12","col-md-6","form-group"],[4,"ngIf"],["action","","method","post","enctype","multipart/form-data",1,"form-horizontal"],[1,"form-group","row"],[1,"col-md-3","col-form-label"],[1,"col-md-9"],[1,"form-control-static"],["for","no-emp",1,"col-md-3","col-form-label"],["type","number","id","no-emp","name","text-input","disabled","","placeholder","No empleado",1,"form-control",3,"ngModel","ngModelChange"],["for","office",1,"col-md-3","col-form-label"],["type","text","id","oficina","name","oficina","disabled","","placeholder","Oficina empleado",1,"form-control",3,"ngModel","ngModelChange"],["for","quantity",1,"col-md-3","col-form-label"],["type","number","id","quantity","name","quantity","min","100","placeholder","100.00","min","100","max","20000",1,"form-control",3,"disabled","ngModel","ngModelChange"],["class","help-block",4,"ngIf"],["for","start-date",1,"col-md-3","col-form-label"],["id","start-date","type","text","class","form-control","bsDatepicker","",3,"bsConfig","datesEnabled","bsValue","bsValueChange",4,"ngIf"],["type","text","id","start-date","name","start-date","class","form-control","disabled","","placeholder","fecha inicio descuentos",3,"ngModel","ngModelChange",4,"ngIf"],[1,"help-block"],["type","button","class","btn btn-sm btn-success",3,"disabled","click",4,"ngIf"],["class","fa fa-spinner fa-spin",4,"ngIf"],["class","row",4,"ngIf"],["class","alert alert-success","role","alert",4,"ngIf"],["bsModal","","id","modalConfirmacion","tabindex","-1","role","dialog","aria-labelledby","modalConfirmacion","aria-hidden","true",1,"modal","fade"],["modalConfirmacion","bs-modal"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","modalConfirmacionLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-secondary",3,"click"],["type","danger",3,"dismissible"],[1,"icon-docs"],["id","start-date","type","text","bsDatepicker","",1,"form-control",3,"bsConfig","datesEnabled","bsValue","bsValueChange"],["dp","bsDatepicker"],["type","text","id","start-date","name","start-date","disabled","","placeholder","fecha inicio descuentos",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-sm","btn-success",3,"disabled","click"],[1,"fa","fa-dot-circle-o"],[1,"fa","fa-spinner","fa-spin"],[1,"col"],[1,"col-6"],["class","alert alert-danger","role","alert",4,"ngIf"],["class","alert alert-warning","role","alert",4,"ngIf"],[1,"table","table-bordered","table-striped","table-sm"],[1,"thead-dark"],["role","alert",1,"alert","alert-success"],["role","alert",1,"alert","alert-danger"],["role","alert",1,"alert","alert-warning"],["scope","row"],["class","badge badge-success",4,"ngIf"],["class","badge badge-danger",4,"ngIf"],[1,"badge","badge-success"],[1,"badge","badge-danger"],["for","quantity1",1,"col-md-3","col-form-label"],["type","number","id","quantity1","name","quantity1","min","100","placeholder","100.00","min","100","max","20000",1,"form-control",3,"disabled","ngModel","ngModelChange"],["id","modif-date","type","text","class","form-control","bsDatepicker","",3,"bsConfig","datesEnabled","bsValue","bsValueChange",4,"ngIf"],["type","text","id","modif-date","name","modif-date","class","form-control","disabled","","placeholder","fecha inicio descuentos",3,"ngModel","ngModelChange",4,"ngIf"],[1,"icon-refresh"],["id","modif-date","type","text","bsDatepicker","",1,"form-control",3,"bsConfig","datesEnabled","bsValue","bsValueChange"],["type","text","id","modif-date","name","modif-date","disabled","","placeholder","fecha inicio descuentos",1,"form-control",3,"ngModel","ngModelChange"],["for","quantity3",1,"col-md-3","col-form-label"],["type","number","id","quantity3","name","quantity","min","100","placeholder","100.00","min","100","max","20000",1,"form-control",3,"disabled","ngModel","ngModelChange"],["for","account",1,"col-md-3","col-form-label"],["type","text","id","account","name","account","placeholder","0000 0000 0000 0000",1,"form-control",3,"disabled","ngModel","ngModelChange"],[1,"icon-reload"],["for","textarea-input",1,"col-md-3","col-form-label"],["id","textarea-input","name","textarea-input","rows","9","placeholder","Raz\xf3n o motivo de cancelaci\xf3n del ahorro",1,"form-control"],["type","text","id","ccnumber","placeholder","0000 0000 0000 0000",1,"form-control"],[1,"icon-envelope-open"]],template:function(i,o){1&i&&(c.Pb(0,"div",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"div",3),c.Pb(4,"div",4),c.Pb(5,"strong"),c.vc(6,"Tr\xe1mites ahorro"),c.Ob(),c.Ob(),c.Pb(7,"div",5),c.Pb(8,"div",1),c.Pb(9,"div",6),c.uc(10,C,3,2,"div",7),c.Pb(11,"tabset",null,8),c.Pb(13,"tab"),c.uc(14,A,2,0,"ng-template",9),c.Pb(15,"div",1),c.Pb(16,"div",10),c.uc(17,x,3,1,"p",11),c.Pb(18,"form",12),c.Pb(19,"div",13),c.Pb(20,"label",14),c.vc(21,"Nombre"),c.Ob(),c.Pb(22,"div",15),c.Pb(23,"p",16),c.Pb(24,"strong"),c.vc(25),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(26,"div",13),c.Pb(27,"label",17),c.vc(28,"No. empleado"),c.Ob(),c.Pb(29,"div",15),c.Pb(30,"input",18),c.Wb("ngModelChange",(function(i){return o.usuario.noEmpleado=i})),c.Ob(),c.Ob(),c.Ob(),c.Pb(31,"div",13),c.Pb(32,"label",19),c.vc(33,"Oficina"),c.Ob(),c.Pb(34,"div",15),c.Pb(35,"input",20),c.Wb("ngModelChange",(function(i){return o.usuario.datosUsuario.OFICINA=i})),c.Ob(),c.Ob(),c.Ob(),c.Pb(36,"div",13),c.Pb(37,"label",21),c.vc(38,"Descuento quincenal"),c.Ob(),c.Pb(39,"div",15),c.Pb(40,"input",22),c.Wb("ngModelChange",(function(i){return o.solicitudAhorro.atributos.MONTO=i})),c.Ob(),c.uc(41,I,2,0,"span",23),c.Ob(),c.Ob(),c.Pb(42,"div",13),c.Pb(43,"label",24),c.vc(44,"Fecha inicio"),c.Ob(),c.Pb(45,"div",15),c.uc(46,w,2,4,"input",25),c.uc(47,E,1,1,"input",26),c.uc(48,R,2,0,"span",23),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(49,"div",10),c.Pb(50,"span",27),c.vc(51," Yo "),c.Pb(52,"strong"),c.vc(53),c.Ob(),c.vc(54," con n\xfamero de trabajador "),c.Pb(55,"strong"),c.vc(56),c.Ob(),c.vc(57," adscrito a la Oficina "),c.Pb(58,"strong"),c.vc(59),c.Ob(),c.vc(60," autorizo que por este medio se descuente de mi pago de n\xf3mina, la cantidad de "),c.Pb(61,"strong"),c.vc(62),c.Ob(),c.vc(63,"de manera quincenal a partir de la siguiente fecha "),c.Pb(64,"strong"),c.vc(65),c.Zb(66,"date"),c.Ob(),c.vc(67,", durante el per\xedodo correspondiente, autorizo que la cantidad retenida sea depositada en la cuenta del PROGRAMA DE AHORRO VOLUNTARIO. Estoy de acuerdo que la cantidad ahorrada y los intereses que se hubiesen generado me sean entregados al t\xe9rmino del per\xedodo. "),c.Ob(),c.Kb(68,"br"),c.Kb(69,"br"),c.uc(70,D,3,1,"button",28),c.uc(71,F,1,0,"i",29),c.Ob(),c.Ob(),c.uc(72,k,22,4,"div",30),c.Ob(),c.uc(73,ii,69,23,"tab",11),c.uc(74,fi,52,17,"tab",11),c.uc(75,xi,67,15,"tab",11),c.Ob(),c.Ob(),c.Ob(),c.Kb(76,"br"),c.uc(77,Ii,2,1,"p",31),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(78,"div",32,33),c.Pb(80,"div",34),c.Pb(81,"div",35),c.Pb(82,"div",36),c.Pb(83,"h5",37),c.vc(84,"Confirmacion"),c.Ob(),c.Pb(85,"button",38),c.Wb("click",(function(){return o.cancelar()})),c.Pb(86,"span",39),c.vc(87,"\xd7"),c.Ob(),c.Ob(),c.Ob(),c.Pb(88,"div",40),c.vc(89," \xbfEstas seguro que quieres enviar la solicitud? "),c.Ob(),c.Pb(90,"div",41),c.Pb(91,"button",42),c.Wb("click",(function(){return o.aceptar()})),c.vc(92,"Si"),c.Ob(),c.Pb(93,"button",43),c.Wb("click",(function(){return o.cancelar()})),c.vc(94,"No"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&i&&(c.xb(10),c.ec("ngForOf",o.alerts),c.xb(7),c.ec("ngIf",void 0!==o.solicitudAhorro.id),c.xb(8),c.wc(o.usuario.nombre),c.xb(5),c.ec("ngModel",o.usuario.noEmpleado),c.xb(5),c.ec("ngModel",o.usuario.datosUsuario.OFICINA),c.xb(5),c.ec("disabled",void 0!==o.solicitudAhorro.id&&"Rechazada"!==o.solicitudAhorro.status)("ngModel",o.solicitudAhorro.atributos.MONTO),c.xb(1),c.ec("ngIf",void 0===o.solicitudAhorro.id),c.xb(5),c.ec("ngIf",void 0===o.solicitudAhorro.atributos.FECHA||"Rechazada"===o.solicitudAhorro.status),c.xb(1),c.ec("ngIf",void 0!==o.solicitudAhorro.atributos.FECHA&&"Rechazada"!==o.solicitudAhorro.status),c.xb(1),c.ec("ngIf",void 0===o.solicitudAhorro.atributos.FECHA),c.xb(5),c.wc(o.usuario.nombre),c.xb(3),c.wc(o.usuario.noEmpleado),c.xb(3),c.wc(o.usuario.datosUsuario.OFICINA),c.xb(3),c.xc(" $ ",o.solicitudAhorro.atributos.MONTO," "),c.xb(3),c.wc(c.ac(66,23,o.bsValue)),c.xb(5),c.ec("ngIf",void 0===o.solicitudAhorro.id||"Rechazada"===o.solicitudAhorro.status),c.xb(1),c.ec("ngIf",o.loading),c.xb(1),c.ec("ngIf",void 0!==o.solicitudAhorro.id&&o.solicitudAhorro.validaciones.length>0),c.xb(1),c.ec("ngIf","Finalizada"===o.solicitudAhorro.status),c.xb(1),c.ec("ngIf","Finalizada"===o.solicitudAhorro.status),c.xb(1),c.ec("ngIf","Finalizada"===o.solicitudAhorro.status),c.xb(2),c.ec("ngIf",o.success.length>0))},directives:[e.l,v.d,v.a,v.b,e.m,g.t,g.j,g.k,g.n,g.b,g.i,g.l,P.a,p.a,m.b,m.a],pipes:[e.f],styles:[".disabled[_ngcontent-%COMP%]{pointer-events:none;cursor:default}"]}),i})(),data:{title:"Tr\xe1mites ahorro"}}];let wi=(()=>{class i{}return i.\u0275mod=c.Hb({type:i}),i.\u0275inj=c.Gb({factory:function(o){return new(o||i)},imports:[[a.g.forChild(yi)],a.g]}),i})();var Ei=t("65jD");let Ri=(()=>{class i{}return i.\u0275mod=c.Hb({type:i}),i.\u0275inj=c.Gb({factory:function(o){return new(o||i)},providers:[e.f],imports:[[Ei.CommonsPagesModule,wi,s.b,v.c.forRoot(),g.f]]}),i})()},xKGb:function(i,o,t){"use strict";t.d(o,"a",(function(){return c}));var e=t("IheW"),a=t("8Y7J");let c=(()=>{class i{constructor(i){this.http=i}getHttpParams(i){let o=new e.d;for(const t in i)if(void 0!==i[t]){const e=i[t].toString();null!==e&&e.length>0&&"*"!==e&&(o=o.append(t,e))}return o}getSolicitudes(i){return this.http.get("../api/v1/solicitudes",{params:this.getHttpParams(i)})}getSolicitudesById(i){return this.http.get("../api/v1/solicitudes/"+i)}getSolicitudesByUsuarioAndId(i,o){return this.http.get(`../api/v1/usuarios/${i}/solicitudes/${o}`)}getSolicitudesByUsuario(i){return this.http.get(`../api/v1/usuarios/${i}/solicitudes`)}postSolictudUsuario(i,o){return this.http.post(`../api/v1/usuarios/${i}/solicitudes`,o)}putSolictud(i,o){return this.http.post("../api/v1/solicitudes/"+i,o)}deleteSolictud(i){return this.http.delete("../api/v1/solicitudes/"+i)}}return i.\u0275fac=function(o){return new(o||i)(a.Tb(e.b))},i.\u0275prov=a.Fb({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"27T3":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));class i{constructor(){}}},"2jvo":function(t,e,a){"use strict";a.d(e,"a",(function(){return R}));var i=a("mrSG"),o=a("EwKM"),n=a("27T3"),c=a("KZhB"),r=a("8Y7J"),s=a("iInd"),b=a("SVse"),l=a("q+li"),d=a("oxVP"),g=a("bEsI"),p=a("cUpR"),u=a("ESM5"),f=a("s7LF"),h=a("ienR"),m=a("jksu");const X=["modalConfirmacion"];function W(t,e){1&t&&r.Sb(0,"i",42)}function v(t,e){1&t&&(r.Xb(0,"div",43),r.Gc(1," No se encontraron resultados "),r.Wb())}function y(t,e){1&t&&(r.Xb(0,"option",53),r.Gc(1,"20"),r.Wb())}function P(t,e){1&t&&(r.Xb(0,"option",54),r.Gc(1,"50"),r.Wb())}function E(t,e){if(1&t){const t=r.Yb();r.Xb(0,"select",49),r.ec("ngModelChange",(function(e){return r.yc(t),r.gc(2).filterParams.size=e}))("change",(function(e){return r.yc(t),r.gc(2).onChangePageSize(e.target.value)})),r.Xb(1,"option",50),r.Gc(2,"10"),r.Wb(),r.Ec(3,y,2,0,"option",51),r.Ec(4,P,2,0,"option",52),r.Wb()}if(2&t){const t=r.gc(2);r.nc("ngModel",t.filterParams.size),r.Fb(3),r.nc("ngIf",t.page.number<t.page.totalElements/20),r.Fb(1),r.nc("ngIf",t.page.number<t.page.totalElements/50)}}function G(t,e){if(1&t){const t=r.Yb();r.Xb(0,"div",44),r.Xb(1,"button",45),r.ec("click",(function(){return r.yc(t),r.gc().downloadXLSFile()})),r.Sb(2,"i",46),r.Wb(),r.Ec(3,E,5,3,"select",47),r.Xb(4,"strong",48),r.Gc(5," Tama\xf1o Pagina \xa0\xa0\xa0\xa0"),r.Wb(),r.Wb()}if(2&t){const t=r.gc();r.Fb(3),r.nc("ngIf",0==t.page.last||1==t.page.first)}}function I(t,e){if(1&t){const t=r.Yb();r.Xb(0,"tr"),r.Xb(1,"td",60),r.Xb(2,"button",61),r.ec("click",(function(){r.yc(t);const a=e.$implicit;return r.gc(2).detallePrestamos(a.idUsuario)})),r.Sb(3,"i",62),r.Wb(),r.Wb(),r.Xb(4,"td",63),r.Gc(5),r.Wb(),r.Xb(6,"td",63),r.Gc(7),r.Wb(),r.Xb(8,"td",63),r.Gc(9),r.Wb(),r.Xb(10,"td",63),r.Gc(11),r.Wb(),r.Xb(12,"td",63),r.Gc(13),r.Wb(),r.Xb(14,"td",63),r.Gc(15),r.hc(16,"percent"),r.Wb(),r.Xb(17,"td",63),r.Gc(18),r.Wb(),r.Xb(19,"td",64),r.Gc(20),r.hc(21,"currency"),r.Wb(),r.Xb(22,"td",64),r.Gc(23),r.hc(24,"currency"),r.Wb(),r.Xb(25,"td",64),r.Gc(26),r.hc(27,"currency"),r.Wb(),r.Xb(28,"td",64),r.Gc(29),r.hc(30,"currency"),r.Wb(),r.Xb(31,"td",64),r.Gc(32),r.hc(33,"currency"),r.Wb(),r.Xb(34,"td",64),r.Gc(35),r.hc(36,"currency"),r.Wb(),r.Xb(37,"td",64),r.Gc(38),r.hc(39,"currency"),r.Wb(),r.Xb(40,"td",63),r.Gc(41),r.hc(42,"date"),r.Wb(),r.Xb(43,"td",63),r.Gc(44),r.hc(45,"date"),r.Wb(),r.Wb()}if(2&t){const t=e.$implicit;r.Fb(5),r.Hc(t.idSolicitud),r.Fb(2),r.Hc(t.tipoUsuario),r.Fb(2),r.Hc(t.noEmpleado),r.Fb(2),r.Hc(t.nombre),r.Fb(2),r.Hc(t.tipo),r.Fb(2),r.Hc(r.ic(16,16,t.tasaInteres/100)),r.Fb(3),r.Hc(t.noQuincenas),r.Fb(2),r.Hc(r.ic(21,18,t.montoPrestamo)),r.Fb(3),r.Hc(r.ic(24,20,t.interesPrestamo)),r.Fb(3),r.Hc(r.ic(27,22,t.pagos)),r.Fb(3),r.Hc(r.ic(30,24,t.interes)),r.Fb(3),r.Hc(r.ic(33,26,t.ajuste)),r.Fb(3),r.Hc(r.ic(36,28,t.saldoPendiente)),r.Fb(3),r.Hc(r.ic(39,30,t.totalPagado)),r.Fb(3),r.Hc(r.jc(42,32,t.fechaCreacion,"dd-MM-yyyy")),r.Fb(3),r.Hc(r.jc(45,35,t.fechaActualizacion,"dd-MM-yyyy HH:mm"))}}function S(t,e){if(1&t&&(r.Xb(0,"div",55),r.Xb(1,"table",56),r.Xb(2,"thead",57),r.Xb(3,"tr"),r.Xb(4,"th",58),r.Gc(5,"ACCIONES"),r.Wb(),r.Xb(6,"th",58),r.Gc(7,"ID SOLICITUD"),r.Wb(),r.Xb(8,"th",58),r.Gc(9,"TIPO USUARIO"),r.Wb(),r.Xb(10,"th",58),r.Gc(11,"NO EMPLEADO"),r.Wb(),r.Xb(12,"th",58),r.Gc(13,"NOMBRE"),r.Wb(),r.Xb(14,"th",58),r.Gc(15,"TIPO"),r.Wb(),r.Xb(16,"th",58),r.Gc(17,"TASA"),r.Wb(),r.Xb(18,"th",58),r.Gc(19,"NO QUINCENAS"),r.Wb(),r.Xb(20,"th",58),r.Gc(21,"MONTO PRESTAMO"),r.Wb(),r.Xb(22,"th",58),r.Gc(23,"INTERES TOTAL"),r.Wb(),r.Xb(24,"th",58),r.Gc(25,"MONTO PAGOS"),r.Wb(),r.Xb(26,"th",58),r.Gc(27,"MONTO INTERES"),r.Wb(),r.Xb(28,"th",58),r.Gc(29,"MONTO AJUSTES"),r.Wb(),r.Xb(30,"th",58),r.Gc(31,"SALDO PENDIENTE"),r.Wb(),r.Xb(32,"th",58),r.Gc(33,"TOTAL PAGADO"),r.Wb(),r.Xb(34,"th",58),r.Gc(35,"CREACION"),r.Wb(),r.Xb(36,"th",58),r.Gc(37,"ACTUALIZACION"),r.Wb(),r.Wb(),r.Wb(),r.Xb(38,"tbody"),r.Ec(39,I,46,38,"tr",59),r.Wb(),r.Wb(),r.Wb()),2&t){const t=r.gc();r.Fb(39),r.nc("ngForOf",t.page.content)}}function M(t,e){if(1&t){const t=r.Yb();r.Xb(0,"li",70),r.Xb(1,"button",71),r.ec("click",(function(){r.yc(t);const e=r.gc(3);return e.updateDataTable(0,e.page.size)})),r.Sb(2,"i",72),r.Wb(),r.Wb()}}function F(t,e){if(1&t){const t=r.Yb();r.Xb(0,"li",70),r.Xb(1,"button",71),r.ec("click",(function(){r.yc(t);const e=r.gc(3);return e.updateDataTable(e.page.number-1,e.page.size)})),r.Gc(2),r.Wb(),r.Wb()}if(2&t){const t=r.gc(3);r.Fb(2),r.Hc(t.page.number)}}function T(t,e){if(1&t){const t=r.Yb();r.Xb(0,"li",70),r.Xb(1,"button",71),r.ec("click",(function(){r.yc(t);const e=r.gc(3);return e.updateDataTable(e.page.number+1,e.page.size)})),r.Gc(2),r.Wb(),r.Wb()}if(2&t){const t=r.gc(3);r.Fb(2),r.Hc(t.page.number+2)}}function C(t,e){if(1&t){const t=r.Yb();r.Xb(0,"li",70),r.Xb(1,"button",71),r.ec("click",(function(){r.yc(t);const e=r.gc(3);return e.updateDataTable(e.page.totalPages-1,e.page.size)})),r.Sb(2,"i",73),r.Wb(),r.Wb()}}function O(t,e){if(1&t&&(r.Xb(0,"ul",66),r.Ec(1,M,3,0,"li",67),r.Ec(2,F,3,1,"li",67),r.Xb(3,"li",68),r.Xb(4,"a",69),r.Xb(5,"strong"),r.Gc(6),r.Wb(),r.Wb(),r.Wb(),r.Ec(7,T,3,1,"li",67),r.Ec(8,C,3,0,"li",67),r.Wb()),2&t){const t=r.gc(2);r.Fb(1),r.nc("ngIf",0==t.page.first),r.Fb(1),r.nc("ngIf",0==t.page.first),r.Fb(4),r.Hc(t.page.number+1),r.Fb(1),r.nc("ngIf",0==t.page.last),r.Fb(1),r.nc("ngIf",0==t.page.last)}}function w(t,e){if(1&t&&(r.Xb(0,"div",44),r.Ec(1,O,9,5,"ul",65),r.Wb()),2&t){const t=r.gc();r.Fb(1),r.nc("ngIf",t.page.totalElements>1)}}function A(t,e){1&t&&r.Sb(0,"cybord-loader")}let R=(()=>{class t{constructor(t,e,a,i,r,s,b){this.router=t,this.datepipe=e,this.downloadService=a,this.resourcesService=i,this.prestamoService=r,this.sanitizer=s,this.userService=b,this.module="usuarios",this.page=new o.a,this.pageSize="10",this.filterParams={tipoUsuario:"*",nombre:"",idSolicitud:"",tipo:"*",noEmpleado:"",since:"",to:"",page:"0",size:"10"},this.loading=!1,this.usuario=new c.a,this.saldo=new n.a,this.message="",this.maxDate=new Date}ngOnInit(){switch(this.userService.myInfo().then(t=>this.usuario=t),this.module=this.router.url.split("/")[1],this.module){case"recursos-humanos":this.filterParams.tipoUsuario="INTERNO";break;case"contabilidad":this.filterParams.tipoUsuario="EXTERNO";break;default:this.filterParams.tipoUsuario="*"}this.updateDataTable(0,10)}updateDataTable(t,e){this.loading=!0,null==this.fechaCreacion?(this.filterParams.since="",this.filterParams.to=""):(this.fechaCreacion[1].setDate(this.fechaCreacion[1].getDate()+1),this.filterParams.since=this.datepipe.transform(this.fechaCreacion[0],"yyyy-MM-dd"),this.filterParams.to=this.datepipe.transform(this.fechaCreacion[1],"yyyy-MM-dd")),this.filterParams.page=t||0,this.filterParams.size=e||0,this.prestamoService.getPrestamos(this.filterParams).subscribe(t=>{this.page=t,this.loading=!1})}onChangePageSize(t){this.updateDataTable(this.page.number,t)}detallePrestamos(t){this.router.navigate([`../${this.module}/prestamos-activos/${t}`])}mostrarComprobante(t){this.comprobanteUrl=void 0,"SISTEMA"!==t.origen&&this.resourcesService.getRecurso(t.id,"PRESTAMO","IMAGEN").subscribe(t=>{this.comprobanteUrl=this.sanitizer.bypassSecurityTrustUrl(t.dato)})}openModal(t){this.saldo=t,this.message="",this.modalConfirmacion.show(),this.mostrarComprobante(t)}salir(){this.message="",this.saldo=new n.a,this.modalConfirmacion.hide()}aprobarPago(){return Object(i.a)(this,void 0,void 0,(function*(){try{this.loading=!0;let t=Object.assign({},this.saldo);t.validado=!0,t.origen=this.usuario.email,this.saldo=yield this.prestamoService.updateSaldoPrestamo(this.saldo.id,t).toPromise(),this.message="Pago aprobado correctamente",this.saldo=new n.a,this.modalConfirmacion.hide(),this.updateDataTable(this.page.number,this.page.size)}catch(t){this.loading=!1,this.message=t}}))}downloadImage(){return Object(i.a)(this,void 0,void 0,(function*(){let t=yield this.resourcesService.getRecurso(this.saldo.id,"PRESTAMO","IMAGEN").toPromise();const e=this.convertBase64ToBlobData(t.dato.replace(/^data:image\/(png|jpeg|jpg);base64,/,""));let a="comprobantePago.jpeg";if(window.navigator&&window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(e,a);else{const t=new Blob([e],{type:"image/jpeg"}),i=window.URL.createObjectURL(t),o=document.createElement("a");o.href=i,o.download=a,o.click()}}))}convertBase64ToBlobData(t,e="image/png",a=512){const i=atob(t),o=[];for(let n=0;n<i.length;n+=a){const t=i.slice(n,n+a),e=new Array(t.length);for(let a=0;a<t.length;a++)e[a]=t.charCodeAt(a);const c=new Uint8Array(e);o.push(c)}return new Blob(o,{type:e})}downloadXLSFile(){this.loading=!0,null==this.fechaCreacion?(this.filterParams.since="",this.filterParams.to=""):(this.fechaCreacion[1].setDate(this.fechaCreacion[1].getDate()+1),this.filterParams.since=this.datepipe.transform(this.fechaCreacion[0],"yyyy-MM-dd"),this.filterParams.to=this.datepipe.transform(this.fechaCreacion[1],"yyyy-MM-dd")),this.filterParams.page="0",this.filterParams.size="100000",this.prestamoService.getReportePrestamos(this.filterParams).subscribe(t=>{this.downloadService.downloadFile(t.dato,`ReporteSaldoPrestamos-${this.datepipe.transform(Date.now(),"yyyy-MM-dd")}.xls`,"application/vnd.ms-excel"),this.loading=!1})}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(s.c),r.Rb(b.f),r.Rb(l.a),r.Rb(d.a),r.Rb(g.a),r.Rb(p.b),r.Rb(u.a))},t.\u0275cmp=r.Lb({type:t,selectors:[["cybord-reporte-prestamos"]],viewQuery:function(t,e){var a;1&t&&r.Lc(X,!0),2&t&&r.uc(a=r.fc())&&(e.modalConfirmacion=a.first)},decls:89,vars:14,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-12","col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"col"],[1,"row","slide_1"],[1,"col-md-1"],["for","idSolicitud",1,"label"],["type","text","fullWidth","","id","idSolicitud","placeholder","No Solicitud",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-md-2"],["for","noempleado",1,"label"],["type","text","fullWidth","","id","noemp","placeholder","No. Empleado",1,"form-control",3,"ngModel","ngModelChange"],["for","nombre",1,"label"],["type","text","fullWidth","","id","noemp","placeholder","Nombre empleado",1,"form-control",3,"ngModel","ngModelChange"],["for","tipousu",1,"label"],["id","tipousu",1,"form-control",2,"display","block",3,"ngModel","ngModelChange"],["value","*"],["value","INTERNO"],["value","EXTERNO"],[1,"col-md-4"],["for","fechacre",1,"label"],[1,"form-group"],["type","text","placeholder","Fecha de creaci\xf3n","bsDaterangepicker","",1,"form-control",3,"maxDate","ngModel","ngModelChange"],["for","inputActivo",1,"label"],["id","inputActivo",1,"form-control",2,"display","block",3,"ngModel","ngModelChange"],["value","SOLICITADO"],["value","PROCESO_DE_APROBACION"],["value","ACTIVO"],["value","SUSPENDIDO"],["value","TERMINADO"],["value","A_PAGAR_POR_AVAL"],["value","TRASPASADO"],["value","TRASPASADO_TERMINADOO"],[1,"col-2"],[1,"btn","btn-primary",2,"margin-top","2em",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],["class","alert alert-primary","role","alert",4,"ngIf"],["class","clearfix",4,"ngIf"],["class","table-responsive",4,"ngIf"],[4,"ngIf"],[1,"fa","fa-spinner","fa-spin"],["role","alert",1,"alert","alert-primary"],[1,"clearfix"],[1,"btn-sm","btn-success","float-right",3,"click"],[1,"fa","fa-file-excel-o","fa-sm"],["id","inputunidad","style","display:block;width: 95px; margin-right: 15px;","class","float-right form-control form-control-sm",3,"ngModel","ngModelChange","change",4,"ngIf"],[1,"float-right"],["id","inputunidad",1,"float-right","form-control","form-control-sm",2,"display","block","width","95px","margin-right","15px",3,"ngModel","ngModelChange","change"],["value","10"],["value","20",4,"ngIf"],["value","50",4,"ngIf"],["value","20"],["value","50"],[1,"table-responsive"],[1,"table","table-bordered","table-sm"],[1,"thead-dark"],[1,"text-center"],[4,"ngFor","ngForOf"],["scope","row",1,"text-center"],[1,"btn-sm","btn-success",3,"click"],[1,"fa","fa-credit-card","fa-sm"],["scope","row"],["scope","row",1,"text-right"],["class","pagination float-right",4,"ngIf"],[1,"pagination","float-right"],["class","page-item",4,"ngIf"],[1,"page-item","active"],[1,"page-link"],[1,"page-item"],[1,"btn","page-link",3,"click"],[1,"icon-control-rewind","icons"],[1,"icon-control-forward","icons"]],template:function(t,e){1&t&&(r.Xb(0,"div",0),r.Xb(1,"div",1),r.Xb(2,"div",2),r.Xb(3,"div",3),r.Xb(4,"div",4),r.Xb(5,"strong"),r.Gc(6,"Reportes prestamos sistema de caja"),r.Wb(),r.Wb(),r.Xb(7,"div",5),r.Xb(8,"div",6),r.Xb(9,"div",7),r.Xb(10,"div",8),r.Xb(11,"label",9),r.Xb(12,"strong"),r.Gc(13,"Solicitud"),r.Wb(),r.Wb(),r.Xb(14,"input",10),r.ec("ngModelChange",(function(t){return e.filterParams.idSolicitud=t})),r.Wb(),r.Wb(),r.Xb(15,"div",11),r.Xb(16,"label",12),r.Xb(17,"strong"),r.Gc(18,"No. Empleado"),r.Wb(),r.Wb(),r.Xb(19,"input",13),r.ec("ngModelChange",(function(t){return e.filterParams.noEmpleado=t})),r.Wb(),r.Wb(),r.Xb(20,"div",11),r.Xb(21,"label",14),r.Xb(22,"strong"),r.Gc(23,"Nombre del Empleado"),r.Wb(),r.Wb(),r.Xb(24,"input",15),r.ec("ngModelChange",(function(t){return e.filterParams.nombre=t})),r.Wb(),r.Wb(),r.Xb(25,"div",8),r.Xb(26,"label",16),r.Xb(27,"strong"),r.Gc(28,"Tipo Usuario"),r.Wb(),r.Wb(),r.Xb(29,"select",17),r.ec("ngModelChange",(function(t){return e.filterParams.tipoUsuario=t})),r.Xb(30,"option",18),r.Gc(31,"Todos"),r.Wb(),r.Xb(32,"option",19),r.Gc(33,"INTERNO"),r.Wb(),r.Xb(34,"option",20),r.Gc(35,"EXTERNO"),r.Wb(),r.Wb(),r.Wb(),r.Xb(36,"div",21),r.Xb(37,"label",22),r.Xb(38,"strong"),r.Gc(39,"Periodo de Creaci\xf3n"),r.Wb(),r.Wb(),r.Xb(40,"div",23),r.Xb(41,"input",24),r.ec("ngModelChange",(function(t){return e.fechaCreacion=t})),r.Wb(),r.Wb(),r.Wb(),r.Xb(42,"div",11),r.Xb(43,"label",25),r.Xb(44,"strong"),r.Gc(45,"Estatus"),r.Wb(),r.Wb(),r.Xb(46,"select",26),r.ec("ngModelChange",(function(t){return e.filterParams.tipo=t})),r.Xb(47,"option",18),r.Gc(48,"Todos"),r.Wb(),r.Xb(49,"option",27),r.Gc(50,"Solicitado"),r.Wb(),r.Xb(51,"option",28),r.Gc(52,"Proceso de aprobacion"),r.Wb(),r.Xb(53,"option",29),r.Gc(54,"Activo"),r.Wb(),r.Xb(55,"option",30),r.Gc(56,"Suspendido"),r.Wb(),r.Xb(57,"option",31),r.Gc(58,"Terminado"),r.Wb(),r.Xb(59,"option",32),r.Gc(60,"A pagar por aval"),r.Wb(),r.Xb(61,"option",33),r.Gc(62,"Traspasado"),r.Wb(),r.Xb(63,"option",34),r.Gc(64,"Traspasadoo terminado"),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Xb(65,"div",6),r.Xb(66,"div",1),r.Sb(67,"div",6),r.Xb(68,"div",35),r.Xb(69,"button",36),r.ec("click",(function(){return e.updateDataTable(0,10)})),r.Gc(70,"BUSCAR "),r.Ec(71,W,1,0,"i",37),r.Wb(),r.Wb(),r.Sb(72,"div",6),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Xb(73,"div",1),r.Xb(74,"div",2),r.Xb(75,"div",3),r.Xb(76,"div",4),r.Xb(77,"strong"),r.Gc(78,"Resultados"),r.Wb(),r.Wb(),r.Xb(79,"div",5),r.Xb(80,"div",1),r.Xb(81,"div",6),r.Ec(82,v,2,0,"div",38),r.Ec(83,G,6,1,"div",39),r.Wb(),r.Wb(),r.Xb(84,"div",1),r.Xb(85,"div",6),r.Ec(86,S,40,1,"div",40),r.Ec(87,w,2,1,"div",39),r.Wb(),r.Wb(),r.Wb(),r.Ec(88,A,1,0,"cybord-loader",41),r.Wb(),r.Wb(),r.Wb(),r.Wb()),2&t&&(r.Fb(14),r.nc("ngModel",e.filterParams.idSolicitud),r.Fb(5),r.nc("ngModel",e.filterParams.noEmpleado),r.Fb(5),r.nc("ngModel",e.filterParams.nombre),r.Fb(5),r.nc("ngModel",e.filterParams.tipoUsuario),r.Fb(12),r.nc("maxDate",e.maxDate)("ngModel",e.fechaCreacion),r.Fb(5),r.nc("ngModel",e.filterParams.tipo),r.Fb(23),r.nc("disabled",e.loading),r.Fb(2),r.nc("ngIf",e.loading),r.Fb(11),r.nc("ngIf",!0===e.page.empty),r.Fb(1),r.nc("ngIf",!1===e.page.empty),r.Fb(3),r.nc("ngIf",0==e.page.empty),r.Fb(1),r.nc("ngIf",0==e.page.empty),r.Fb(1),r.nc("ngIf",e.loading))},directives:[f.b,f.h,f.k,f.o,f.l,f.p,h.e,h.d,b.n,b.m,m.a],pipes:[b.u,b.d,b.f],styles:[""]}),t})()},aJ9a:function(t,e,a){"use strict";a.d(e,"a",(function(){return M}));var i=a("EwKM"),o=a("8Y7J"),n=a("iInd"),c=a("SVse"),r=a("q+li"),s=a("LDwG"),b=a("s7LF"),l=a("jksu");function d(t,e){1&t&&o.Sb(0,"i",25)}function g(t,e){1&t&&(o.Xb(0,"div",26),o.Gc(1," No se encontraron resultados "),o.Wb())}function p(t,e){1&t&&(o.Xb(0,"option",36),o.Gc(1,"20"),o.Wb())}function u(t,e){1&t&&(o.Xb(0,"option",37),o.Gc(1,"50"),o.Wb())}function f(t,e){if(1&t){const t=o.Yb();o.Xb(0,"select",32),o.ec("ngModelChange",(function(e){return o.yc(t),o.gc(2).filterParams.size=e}))("change",(function(e){return o.yc(t),o.gc(2).onChangePageSize(e.target.value)})),o.Xb(1,"option",33),o.Gc(2,"10"),o.Wb(),o.Ec(3,p,2,0,"option",34),o.Ec(4,u,2,0,"option",35),o.Wb()}if(2&t){const t=o.gc(2);o.nc("ngModel",t.filterParams.size),o.Fb(3),o.nc("ngIf",t.page.number<t.page.totalElements/20),o.Fb(1),o.nc("ngIf",t.page.number<t.page.totalElements/50)}}function h(t,e){1&t&&(o.Xb(0,"strong",38),o.Gc(1," Tama\xf1o Pagina \xa0\xa0\xa0\xa0"),o.Wb())}function m(t,e){if(1&t){const t=o.Yb();o.Xb(0,"div",27),o.Xb(1,"button",28),o.ec("click",(function(){return o.yc(t),o.gc().downloadXLSFile()})),o.Sb(2,"i",29),o.Wb(),o.Ec(3,f,5,3,"select",30),o.Ec(4,h,2,0,"strong",31),o.Wb()}if(2&t){const t=o.gc();o.Fb(3),o.nc("ngIf",0==t.page.last||1==t.page.first),o.Fb(1),o.nc("ngIf",0==t.page.last||1==t.page.first)}}function X(t,e){if(1&t){const t=o.Yb();o.Xb(0,"tr"),o.Xb(1,"td",44),o.Xb(2,"button",45),o.ec("click",(function(){o.yc(t);const a=e.$implicit;return o.gc(2).detalleAhorro(a.idUsuario)})),o.Sb(3,"i",46),o.Wb(),o.Wb(),o.Xb(4,"td",47),o.Gc(5),o.Wb(),o.Xb(6,"td",47),o.Gc(7),o.Wb(),o.Xb(8,"td",47),o.Gc(9),o.Wb(),o.Xb(10,"td",48),o.Gc(11),o.hc(12,"currency"),o.Wb(),o.Xb(13,"td",48),o.Gc(14),o.hc(15,"currency"),o.Wb(),o.Xb(16,"td",48),o.Gc(17),o.hc(18,"currency"),o.Wb(),o.Xb(19,"td",48),o.Gc(20),o.hc(21,"currency"),o.Wb(),o.Xb(22,"td",48),o.Gc(23),o.hc(24,"currency"),o.Wb(),o.Wb()}if(2&t){const t=e.$implicit;o.Fb(5),o.Hc(t.tipoUsuario),o.Fb(2),o.Hc(t.noEmpleado),o.Fb(2),o.Hc(t.nombre),o.Fb(2),o.Hc(o.ic(12,8,t.ahorro)),o.Fb(3),o.Hc(o.ic(15,10,t.interes)),o.Fb(3),o.Hc(o.ic(18,12,t.retiro)),o.Fb(3),o.Hc(o.ic(21,14,t.ajuste)),o.Fb(3),o.Hc(o.ic(24,16,t.total))}}function W(t,e){if(1&t&&(o.Xb(0,"div",39),o.Xb(1,"table",40),o.Xb(2,"thead",41),o.Xb(3,"tr"),o.Xb(4,"th",42),o.Gc(5,"DETALLES"),o.Wb(),o.Xb(6,"th",42),o.Gc(7,"TIPO"),o.Wb(),o.Xb(8,"th",42),o.Gc(9,"NO EMPLEADO"),o.Wb(),o.Xb(10,"th",42),o.Gc(11,"NOMBRE"),o.Wb(),o.Xb(12,"th",42),o.Gc(13,"AHORRO"),o.Wb(),o.Xb(14,"th",42),o.Gc(15,"INTERESES"),o.Wb(),o.Xb(16,"th",42),o.Gc(17,"RETIRO"),o.Wb(),o.Xb(18,"th",42),o.Gc(19,"AJUSTES"),o.Wb(),o.Xb(20,"th",42),o.Gc(21,"TOTAL"),o.Wb(),o.Wb(),o.Wb(),o.Xb(22,"tbody"),o.Ec(23,X,25,18,"tr",43),o.Wb(),o.Wb(),o.Wb()),2&t){const t=o.gc();o.Fb(23),o.nc("ngForOf",t.page.content)}}function v(t,e){if(1&t){const t=o.Yb();o.Xb(0,"li",54),o.Xb(1,"button",55),o.ec("click",(function(){o.yc(t);const e=o.gc(3);return e.updateDataTable(0,e.page.size)})),o.Sb(2,"i",56),o.Wb(),o.Wb()}}function y(t,e){if(1&t){const t=o.Yb();o.Xb(0,"li",54),o.Xb(1,"button",55),o.ec("click",(function(){o.yc(t);const e=o.gc(3);return e.updateDataTable(e.page.number-1,e.page.size)})),o.Gc(2),o.Wb(),o.Wb()}if(2&t){const t=o.gc(3);o.Fb(2),o.Hc(t.page.number)}}function P(t,e){if(1&t){const t=o.Yb();o.Xb(0,"li",54),o.Xb(1,"button",55),o.ec("click",(function(){o.yc(t);const e=o.gc(3);return e.updateDataTable(e.page.number+1,e.page.size)})),o.Gc(2),o.Wb(),o.Wb()}if(2&t){const t=o.gc(3);o.Fb(2),o.Hc(t.page.number+2)}}function E(t,e){if(1&t){const t=o.Yb();o.Xb(0,"li",54),o.Xb(1,"button",55),o.ec("click",(function(){o.yc(t);const e=o.gc(3);return e.updateDataTable(e.page.totalPages-1,e.page.size)})),o.Sb(2,"i",57),o.Wb(),o.Wb()}}function G(t,e){if(1&t&&(o.Xb(0,"ul",50),o.Ec(1,v,3,0,"li",51),o.Ec(2,y,3,1,"li",51),o.Xb(3,"li",52),o.Xb(4,"a",53),o.Xb(5,"strong"),o.Gc(6),o.Wb(),o.Wb(),o.Wb(),o.Ec(7,P,3,1,"li",51),o.Ec(8,E,3,0,"li",51),o.Wb()),2&t){const t=o.gc(2);o.Fb(1),o.nc("ngIf",0==t.page.first),o.Fb(1),o.nc("ngIf",0==t.page.first),o.Fb(4),o.Hc(t.page.number+1),o.Fb(1),o.nc("ngIf",0==t.page.last),o.Fb(1),o.nc("ngIf",0==t.page.last)}}function I(t,e){if(1&t&&(o.Xb(0,"div",27),o.Ec(1,G,9,5,"ul",49),o.Wb()),2&t){const t=o.gc();o.Fb(1),o.nc("ngIf",t.page.totalElements>1)}}function S(t,e){1&t&&o.Sb(0,"cybord-loader")}let M=(()=>{class t{constructor(t,e,a,o){this.router=t,this.datepipe=e,this.downloadService=a,this.ahorroService=o,this.module="usuarios",this.page=new i.a,this.pageSize="10",this.filterParams={tipoUsuario:"*",noEmpleado:"",nombre:"",page:"0",size:"10",since:"",to:""},this.loading=!1,this.minDate=new Date,this.maxDate=new Date}ngOnInit(){switch(this.module=this.router.url.split("/")[1],this.module){case"recursos-humanos":this.filterParams.tipoUsuario="INTERNO";break;case"contabilidad":this.filterParams.tipoUsuario="EXTERNO";break;default:this.filterParams.tipoUsuario="*"}this.updateDataTable(0,10)}updateDataTable(t,e){this.loading=!0,null==this.fechaCreacion?(this.filterParams.since="",this.filterParams.to=""):(this.fechaCreacion[1].setDate(this.fechaCreacion[1].getDate()+1),this.filterParams.since=this.datepipe.transform(this.fechaCreacion[0],"yyyy-MM-dd"),this.filterParams.to=this.datepipe.transform(this.fechaCreacion[1],"yyyy-MM-dd")),this.filterParams.page=t||0,this.filterParams.size=e||0,this.ahorroService.getAhorroUsuarios(this.filterParams).subscribe(t=>{this.page=t,this.loading=!1})}onChangePageSize(t){this.updateDataTable(this.page.number,t)}detalleAhorro(t){this.router.navigate([`../${this.module}/saldo-ahorro/${t}`])}downloadXLSFile(){this.loading=!0,null==this.fechaCreacion?(this.filterParams.since="",this.filterParams.to=""):(this.fechaCreacion[1].setDate(this.fechaCreacion[1].getDate()+1),this.filterParams.since=this.datepipe.transform(this.fechaCreacion[0],"yyyy-MM-dd"),this.filterParams.to=this.datepipe.transform(this.fechaCreacion[1],"yyyy-MM-dd")),this.filterParams.page="0",this.filterParams.size="100000",this.ahorroService.getReporteAhorroUsuarios(this.filterParams).subscribe(t=>{this.downloadService.downloadFile(t.dato,`ReporteAhorros-${this.datepipe.transform(Date.now(),"yyyy-MM-dd")}.xls`,"application/vnd.ms-excel"),this.loading=!1})}}return t.\u0275fac=function(e){return new(e||t)(o.Rb(n.c),o.Rb(c.f),o.Rb(r.a),o.Rb(s.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["cybord-reporte-ahorros"]],decls:50,vars:10,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-12","col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row","slide_1"],[1,"col-md-4"],["for","noempleado",1,"label"],["type","text","fullWidth","","id","noemp","placeholder","No. Empleado",1,"form-control",3,"ngModel","ngModelChange"],["for","nombreempleado",1,"label"],["type","text","fullWidth","","id","nombreempleado","placeholder","Nombre del usuario",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-md-2"],["for","inputActivo2",1,"label"],["id","inputActivo2",1,"form-control",2,"display","block",3,"ngModel","ngModelChange"],["value","*"],["value","INTERNO"],["value","EXTERNO"],[1,"btn","btn-primary",2,"margin-top","2em",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"col"],["class","alert alert-primary","role","alert",4,"ngIf"],["class","clearfix",4,"ngIf"],["class","table-responsive",4,"ngIf"],[4,"ngIf"],[1,"fa","fa-spinner","fa-spin"],["role","alert",1,"alert","alert-primary"],[1,"clearfix"],[1,"btn-sm","btn-success","float-right",3,"click"],[1,"fa","fa-file-excel-o","fa-sm"],["id","inputunidad","style","display:block;width: 95px; margin-right: 15px;","class","float-right form-control form-control-sm",3,"ngModel","ngModelChange","change",4,"ngIf"],["class","float-right",4,"ngIf"],["id","inputunidad",1,"float-right","form-control","form-control-sm",2,"display","block","width","95px","margin-right","15px",3,"ngModel","ngModelChange","change"],["value","10"],["value","20",4,"ngIf"],["value","50",4,"ngIf"],["value","20"],["value","50"],[1,"float-right"],[1,"table-responsive"],[1,"table","table-bordered","table-sm"],[1,"thead-dark"],[1,"text-center"],[4,"ngFor","ngForOf"],["scope","row",1,"text-center"],[1,"btn-sm","btn-success",3,"click"],[1,"fa","fa-bank","fa-sm"],["scope","row"],["scope","row",1,"text-right"],["class","pagination float-right",4,"ngIf"],[1,"pagination","float-right"],["class","page-item",4,"ngIf"],[1,"page-item","active"],[1,"page-link"],[1,"page-item"],[1,"btn","page-link",3,"click"],[1,"icon-control-rewind","icons"],[1,"icon-control-forward","icons"]],template:function(t,e){1&t&&(o.Xb(0,"div",0),o.Xb(1,"div",1),o.Xb(2,"div",2),o.Xb(3,"div",3),o.Xb(4,"div",4),o.Xb(5,"strong"),o.Gc(6,"Reportes ahorro sistema de caja"),o.Wb(),o.Wb(),o.Xb(7,"div",5),o.Xb(8,"div",6),o.Xb(9,"div",7),o.Xb(10,"label",8),o.Xb(11,"strong"),o.Gc(12," No. Empleado"),o.Wb(),o.Wb(),o.Xb(13,"input",9),o.ec("ngModelChange",(function(t){return e.filterParams.noEmpleado=t})),o.Wb(),o.Wb(),o.Xb(14,"div",7),o.Xb(15,"label",10),o.Xb(16,"strong"),o.Gc(17," Nombre usuario"),o.Wb(),o.Wb(),o.Xb(18,"input",11),o.ec("ngModelChange",(function(t){return e.filterParams.nombre=t})),o.Wb(),o.Wb(),o.Xb(19,"div",12),o.Xb(20,"label",13),o.Xb(21,"strong"),o.Gc(22," Tipo"),o.Wb(),o.Wb(),o.Xb(23,"select",14),o.ec("ngModelChange",(function(t){return e.filterParams.tipoUsuario=t})),o.Xb(24,"option",15),o.Gc(25,"Todos"),o.Wb(),o.Xb(26,"option",16),o.Gc(27,"Interno"),o.Wb(),o.Xb(28,"option",17),o.Gc(29,"Externo"),o.Wb(),o.Wb(),o.Wb(),o.Xb(30,"div",12),o.Xb(31,"button",18),o.ec("click",(function(){return e.updateDataTable(0,10)})),o.Gc(32,"BUSCAR "),o.Ec(33,d,1,0,"i",19),o.Wb(),o.Wb(),o.Wb(),o.Wb(),o.Wb(),o.Wb(),o.Wb(),o.Xb(34,"div",1),o.Xb(35,"div",2),o.Xb(36,"div",3),o.Xb(37,"div",4),o.Xb(38,"strong"),o.Gc(39,"Resultados"),o.Wb(),o.Wb(),o.Xb(40,"div",5),o.Xb(41,"div",1),o.Xb(42,"div",20),o.Ec(43,g,2,0,"div",21),o.Ec(44,m,5,2,"div",22),o.Wb(),o.Wb(),o.Xb(45,"div",1),o.Xb(46,"div",20),o.Ec(47,W,24,1,"div",23),o.Ec(48,I,2,1,"div",22),o.Wb(),o.Wb(),o.Wb(),o.Ec(49,S,1,0,"cybord-loader",24),o.Wb(),o.Wb(),o.Wb(),o.Wb()),2&t&&(o.Fb(13),o.nc("ngModel",e.filterParams.noEmpleado),o.Fb(5),o.nc("ngModel",e.filterParams.nombre),o.Fb(5),o.nc("ngModel",e.filterParams.tipoUsuario),o.Fb(8),o.nc("disabled",e.loading),o.Fb(2),o.nc("ngIf",e.loading),o.Fb(10),o.nc("ngIf",!0===e.page.empty),o.Fb(1),o.nc("ngIf",!1===e.page.empty),o.Fb(3),o.nc("ngIf",0==e.page.empty),o.Fb(1),o.nc("ngIf",0==e.page.empty),o.Fb(1),o.nc("ngIf",e.loading))},directives:[b.b,b.h,b.k,b.o,b.l,b.p,c.n,c.m,l.a],pipes:[c.d],styles:[""]}),t})()},bEsI:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a("IheW"),o=a("8Y7J");let n=(()=>{class t{constructor(t){this.http=t}getHttpParams(t){let e=new i.d;for(const a in t)if(void 0!==t[a]){const i=t[a].toString();null!==i&&i.length>0&&"*"!==i&&(e=e.append(a,i))}return e}getPrestamosByUsuario(t){return this.http.get(`../api/v1/usuarios/${t}/prestamos`)}getPrestamos(t){return this.http.get("../api/v1/prestamos",{params:this.getHttpParams(t)})}getReportePrestamos(t){return this.http.get("../api/v1/prestamos/report",{params:this.getHttpParams(t)})}getPrestamosByUsuairoAndPrestamoAndSaldo(t,e,a){return this.http.get(`../api/v1/usuarios/${t}/prestamos/${e}/saldos/${a}`)}insertSaldoPrestamo(t,e){return this.http.post(`../api/v1/prestamos/${t}/saldos`,e)}getPrestamosPendientesByUsuario(t){return this.http.get(`../api/v1/usuarios/${t}/prestamos/pendientes`)}updateSaldoPrestamo(t,e){return this.http.put("../api/v1/saldo-prestamos/"+t,e)}}return t.\u0275fac=function(e){return new(e||t)(o.bc(i.b))},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8vkG":function(t,o,a){"use strict";a.d(o,"a",(function(){return A}));var e=a("mrSG");class i{constructor(){this.saldosPrestamo=[]}}var s=a("27T3");class r{constructor(t,o){this.tipoArchivo=t,this.tipoRecurso=o}}var b=a("8Y7J"),n=a("bEsI"),c=a("ESM5"),d=a("qZ4S"),l=a("oxVP"),h=a("iInd"),m=a("SVse"),u=a("LqlI"),p=a("s7LF"),g=a("CNMR"),f=a("jksu"),W=a("hrfs");const X=["modalConfirmacion"];function v(t,o){if(1&t&&(b.Xb(0,"div"),b.Xb(1,"alert",46),b.Gc(2),b.Wb(),b.Wb()),2&t){const t=o.$implicit;b.Fb(1),b.nc("dismissible",!0),b.Fb(1),b.Hc(t)}}function E(t,o){1&t&&b.Sb(0,"cybord-loader")}function y(t,o){1&t&&(b.Xb(0,"div",1),b.Sb(1,"div",2),b.Xb(2,"div",47),b.Gc(3," El usuario no tiene prestamos activos "),b.Wb(),b.Sb(4,"div",2),b.Wb())}function F(t,o){if(1&t){const t=b.Yb();b.Xb(0,"tr"),b.Xb(1,"td"),b.Xb(2,"button",51),b.ec("click",(function(){b.yc(t);const a=o.$implicit;return b.gc(2).openModal(a)})),b.Gc(3," DETALLE\xa0 \xa0"),b.Sb(4,"i",52),b.Wb(),b.Wb(),b.Xb(5,"td",53),b.Gc(6),b.Wb(),b.Xb(7,"td",53),b.Gc(8),b.hc(9,"date"),b.Wb(),b.Xb(10,"td",21),b.Gc(11),b.hc(12,"currency"),b.Wb(),b.Xb(13,"td",21),b.Gc(14),b.hc(15,"currency"),b.Wb(),b.Wb()}if(2&t){const t=o.$implicit;b.Fb(6),b.Hc(t.estatus),b.Fb(2),b.Hc(b.jc(9,4,t.fechaCreacion,"dd/MM/yyyy")),b.Fb(3),b.Hc(b.ic(12,7,t.monto)),b.Fb(3),b.Ic("",b.ic(15,9,t.saldoPendiente)," ")}}function G(t,o){if(1&t&&(b.Xb(0,"div",54),b.Sb(1,"canvas",55),b.Wb()),2&t){const t=b.gc(2);b.Fb(1),b.nc("datasets",t.barChartData)("labels",t.barChartLabels)("options",t.barChartOptions)("legend",!0)("chartType","bar")}}function O(t,o){if(1&t&&(b.Xb(0,"div",1),b.Xb(1,"div",48),b.Xb(2,"strong"),b.Gc(3,"Prestamos Activos"),b.Wb(),b.Sb(4,"br"),b.Xb(5,"table",22),b.Xb(6,"thead",23),b.Xb(7,"tr"),b.Xb(8,"th",49),b.Gc(9,"ACCIONES"),b.Wb(),b.Xb(10,"th",49),b.Gc(11,"ESTATUS"),b.Wb(),b.Xb(12,"th",49),b.Gc(13,"ALTA PRESTAMO"),b.Wb(),b.Xb(14,"th",49),b.Gc(15,"MONTO PRESTAMO"),b.Wb(),b.Xb(16,"th",49),b.Gc(17,"SALDO PENDIENTE"),b.Wb(),b.Wb(),b.Wb(),b.Xb(18,"tbody"),b.Ec(19,F,16,11,"tr",7),b.Xb(20,"tr"),b.Sb(21,"td"),b.Sb(22,"td"),b.Sb(23,"td"),b.Xb(24,"td",29),b.Xb(25,"strong"),b.Gc(26,"TOTAL"),b.Wb(),b.Wb(),b.Xb(27,"td",29),b.Xb(28,"strong"),b.Gc(29),b.hc(30,"currency"),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(31,"div",48),b.Ec(32,G,2,5,"div",50),b.Wb(),b.Wb()),2&t){const t=b.gc();b.Fb(19),b.nc("ngForOf",t.prestamos),b.Fb(10),b.Hc(b.ic(30,3,t.total)),b.Fb(3),b.nc("ngIf",t.prestamos.length>0)}}function S(t,o){if(1&t&&(b.Xb(0,"div"),b.Xb(1,"alert",46),b.Gc(2),b.Wb(),b.Wb()),2&t){const t=o.$implicit;b.Fb(1),b.nc("dismissible",!0),b.Fb(1),b.Hc(t)}}function I(t,o){if(1&t&&(b.Xb(0,"tr"),b.Xb(1,"td",28),b.Gc(2),b.Wb(),b.Xb(3,"td",28),b.Gc(4),b.Wb(),b.Xb(5,"td",28),b.Gc(6),b.hc(7,"date"),b.Wb(),b.Xb(8,"td",21),b.Gc(9),b.hc(10,"currency"),b.Wb(),b.Wb()),2&t){const t=o.$implicit;b.Fb(2),b.Hc(t.tipo),b.Fb(2),b.Hc(t.validado?"SI":"NO"),b.Fb(2),b.Ic("",b.jc(7,4,t.fechaCreacion,"dd/MM/yyyy")," "),b.Fb(3),b.Hc(b.ic(10,7,t.monto))}}const C=function(t,o){return{"btn-success":t,"btn-secondary":o}};function M(t,o){if(1&t){const t=b.Yb();b.Xb(0,"button",56),b.ec("click",(function(){return b.yc(t),b.gc().sendPayment()})),b.Gc(1,"Pagar"),b.Wb()}if(2&t){const t=b.gc();b.nc("ngClass",b.rc(2,C,t.noEmpleado===t.usuario.noEmpleado,t.noEmpleado!==t.usuario.noEmpleado))("disabled",t.noEmpleado!==t.usuario.noEmpleado)}}const P=function(){return{standalone:!0}};let A=(()=>{class t{constructor(t,o,a,e,b){this.prestamoService=t,this.userService=o,this.validationService=a,this.fileService=e,this.route=b,this.loading=!1,this.prestamos=[],this.total=0,this.totalPagado=0,this.montos=[],this.alerts=[],this.noEmpleado="",this.idUsuarioPrestamo=0,this.prestamo=new i,this.fileName="",this.imgPago=new r("IMAGEN","PRESTAMO"),this.pago=new s.a,this.chartData=new Map,this.barChartLabels=[],this.barChartData=[{data:[],label:"Deuda prestamos"}],this.barChartOptions={scaleShowVerticalLines:!1,responsive:!0,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}ngOnInit(){this.loading=!0,this.userService.myInfo().then(t=>{this.usuario=t}).catch(t=>this.alerts.push(t)).then(()=>{this.route.paramMap.subscribe(t=>{const o=t.get("idUsuario");console.log("Loading saldos usuario from user,",o),null==o||null==o?(this.idUsuarioPrestamo=this.usuario.id,this.loadPrestamosInfo(this.idUsuarioPrestamo)):(this.idUsuarioPrestamo=+o,this.loadPrestamosInfo(this.idUsuarioPrestamo))})})}loadPrestamosInfo(t){return Object(e.a)(this,void 0,void 0,(function*(){this.alerts=[];try{let o=yield this.prestamoService.getPrestamosByUsuario(t).toPromise();this.prestamos=o.filter(t=>t.estatus.indexOf("TERMINADO")<0),void 0!==this.prestamos&&this.prestamos.length>0&&(this.total=this.prestamos.map(t=>t.saldoPendiente).reduce((t,o)=>t+o)),this.setCharData(this.prestamos),this.loading=!1}catch(o){this.alerts.push(o),this.loading=!1}}))}dateConverter(t){let o=t.split("-");return new Date(Number(o[0]),Number(o[1])-1,Number(o[2]))}cerrar(){this.modalConfirmacion.hide()}getYearAndMonth(t){let o=new Date(t);return o.getFullYear()+"-"+(o.getMonth()+1)}setMontoCharData(t,o){let a=this.chartData.get(t);null==a?(a=[],a.push(o),this.chartData.set(t,a)):(a.push(o),this.chartData.set(t,a))}setCharData(t){t.forEach(t=>{let o=this.getYearAndMonth(this.dateConverter(t.fechaCreacion.toString()));this.setMontoCharData(o,t.monto),t.saldosPrestamo.filter(t=>"INTERES"!==t.tipo).forEach(t=>{let o=this.getYearAndMonth(this.dateConverter(t.fechaCreacion.toString()));this.setMontoCharData(o,-1*t.monto)});let a=[];for(const s of this.chartData.keys())a.push(s);a.sort(),this.barChartLabels=a;let e=[],i=0;a.forEach(t=>{i+=this.chartData.get(t).reduce((t,o)=>t+o),e.push(i)}),this.barChartData=[{data:e,backgroundColor:"#46BFBD",label:"Deuda prestamos"}]})}fileUploadListener(t){this.alerts=[],this.fileInput=t.target;const o=new FileReader;if(t.target.files&&t.target.files.length>0){const a=t.target.files[0];a.size>1e6?alert("El archivo demasiado grande, intenta con un archivo mas peque\xf1o."):(o.readAsDataURL(a),o.onload=()=>{this.fileName=a.name,this.imgPago.dato=o.result.toString()},o.onerror=t=>{this.alerts.push("Error parsing image file")})}}sendPayment(){return Object(e.a)(this,void 0,void 0,(function*(){this.pago.idPrestamo=this.prestamo.id,this.pago.tipo="PAGO",this.pago.validado=!1,this.pago.origen=this.usuario.email;try{if(this.alerts=this.validationService.validateSaldoPrestamo(this.pago,this.prestamo),0==this.alerts.length){this.pago=yield this.prestamoService.insertSaldoPrestamo(this.prestamo.id,this.pago).toPromise(),this.imgPago.referencia=this.pago.id.toString();let t=yield this.fileService.insertResourceFile(this.imgPago).toPromise();console.log(this.fileName+" has been laoded",t),this.modalConfirmacion.hide(),this.noEmpleado="",this.loadPrestamosInfo(this.idUsuarioPrestamo)}}catch(t){this.pago=new s.a,this.imgPago=new r("IMAGEN","PRESTAMO"),this.fileName="",this.noEmpleado="",this.alerts.push(t)}this.loading=!1}))}openModal(t){this.alerts=[],this.imgPago=new r("IMAGEN","PRESTAMO"),this.fileName="",this.noEmpleado="",this.pago=new s.a,this.imgPago.dato=void 0,this.prestamo=t,this.totalPagado=void 0!==t.saldosPrestamo.filter(t=>"INTERES"!==t.tipo)&&t.saldosPrestamo.filter(t=>"INTERES"!==t.tipo).length>0?t.saldosPrestamo.filter(t=>"INTERES"!==t.tipo).map(t=>t.monto).reduce((t,o)=>t+o):0,this.pago.monto=t.monto-this.totalPagado,this.modalConfirmacion.show()}closeModal(){this.pago=new s.a,this.imgPago=new r("IMAGEN","PRESTAMO"),this.fileName="",this.noEmpleado="",this.prestamo=new i,void 0!==this.fileInput&&(this.fileInput.value=""),this.modalConfirmacion.hide()}}return t.\u0275fac=function(o){return new(o||t)(b.Rb(n.a),b.Rb(c.a),b.Rb(d.a),b.Rb(l.a),b.Rb(h.a))},t.\u0275cmp=b.Lb({type:t,selectors:[["cybord-prestamos-usuario"]],viewQuery:function(t,o){var a;1&t&&b.Lc(X,!0),2&t&&b.uc(a=b.fc())&&(o.modalConfirmacion=a.first)},decls:121,vars:32,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col"],[1,"col-sm-12","col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","row",4,"ngIf"],["bsModal","","id","modalConfirmacion","tabindex","-1","role","dialog","aria-labelledby","modalConfirmacion","aria-hidden","true",1,"modal","fade"],["modalConfirmacion","bs-modal"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header","bg-primary","text-white"],["id","modalConfirmacionLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"table-responsive"],[1,"table","table-bordered","table-sm"],["scope","row",1,"text-right"],[1,"table","table-bordered","table-striped","table-sm"],[1,"thead-dark"],[2,"width","15%"],[1,"text-left",2,"width","20%"],[2,"width","30%"],[1,"text-left",2,"width","30%"],["scope","row",1,"text-left"],[1,"text-right"],["for","monto",1,"label"],[1,"input-group"],["type","number","id","quantity","name","quantity","disabled","","placeholder","Monto a capital",1,"form-control",3,"ngModel","ngModelChange"],["for","payFile",1,"label"],["id","payFile",1,"custom-file"],["type","file","id","inputGroupFile01","accept","image/*","aria-describedby","inputGroupFileAddon01",1,"custom-file-input",2,"display","block",3,"disabled","change"],["fileInput",""],["for","inputGroupFile01",1,"custom-file-label"],[1,"form-group","row"],["for","inputPassword",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["type","password","id","inputPassword","placeholder","digita tu no empleado",1,"form-control",3,"disabled","ngModel","ngModelOptions","ngModelChange"],["id","noEmpHelp",1,"form-text","text-muted"],[1,"modal-footer"],["type","button","class","btn",3,"ngClass","disabled","click",4,"ngIf"],["type","button",1,"btn","btn-warning",3,"click"],["type","danger",3,"dismissible"],["role","alert",1,"col-8","alert","alert-primary"],[1,"col-xs-12","col-sm-12","col-md-6"],[1,"text-center"],["class","chart-wrapper",4,"ngIf"],[1,"btn-sm","btn-primary",3,"click"],[1,"fa","fa-search"],["scope","row"],[1,"chart-wrapper"],["baseChart","",1,"chart",3,"datasets","labels","options","legend","chartType"],["type","button",1,"btn",3,"ngClass","disabled","click"]],template:function(t,o){1&t&&(b.Xb(0,"div",0),b.Xb(1,"div",1),b.Xb(2,"div",2),b.Xb(3,"div",3),b.Xb(4,"div",4),b.Xb(5,"div",5),b.Xb(6,"strong"),b.Gc(7,"Prestamos"),b.Wb(),b.Wb(),b.Xb(8,"div",6),b.Ec(9,v,3,2,"div",7),b.Ec(10,E,1,0,"cybord-loader",8),b.Ec(11,y,5,0,"div",9),b.Ec(12,O,33,5,"div",9),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(13,"div",10,11),b.Xb(15,"div",12),b.Xb(16,"div",13),b.Xb(17,"div",14),b.Xb(18,"h5",15),b.Gc(19,"INFORMACI\xd3N DEL PRESTAMO"),b.Wb(),b.Xb(20,"button",16),b.ec("click",(function(){return o.closeModal()})),b.Xb(21,"span",17),b.Gc(22,"\xd7"),b.Wb(),b.Wb(),b.Wb(),b.Xb(23,"div",18),b.Ec(24,S,3,2,"div",7),b.Xb(25,"div",1),b.Xb(26,"div",2),b.Xb(27,"div",19),b.Xb(28,"table",20),b.Xb(29,"tbody"),b.Xb(30,"tr"),b.Xb(31,"th"),b.Gc(32,"Estado prestamo"),b.Wb(),b.Xb(33,"td",21),b.Gc(34),b.Wb(),b.Wb(),b.Xb(35,"tr"),b.Xb(36,"th"),b.Gc(37,"Monto prestamo"),b.Wb(),b.Xb(38,"td",21),b.Gc(39),b.hc(40,"currency"),b.Wb(),b.Wb(),b.Xb(41,"tr"),b.Xb(42,"th"),b.Gc(43,"No quincenas"),b.Wb(),b.Xb(44,"td",21),b.Gc(45),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Sb(46,"br"),b.Xb(47,"table",22),b.Xb(48,"thead",23),b.Xb(49,"tr"),b.Xb(50,"th",24),b.Gc(51,"TIPO"),b.Wb(),b.Xb(52,"th",25),b.Gc(53,"VALIDADO"),b.Wb(),b.Xb(54,"th",26),b.Gc(55,"FECHA"),b.Wb(),b.Xb(56,"th",27),b.Gc(57,"MONTO"),b.Wb(),b.Wb(),b.Wb(),b.Xb(58,"tbody"),b.Xb(59,"tr"),b.Xb(60,"td",28),b.Gc(61,"PRESTAMO"),b.Wb(),b.Xb(62,"td",28),b.Gc(63,"SI"),b.Wb(),b.Xb(64,"td",28),b.Gc(65),b.hc(66,"date"),b.Wb(),b.Xb(67,"td",21),b.Gc(68),b.hc(69,"currency"),b.Wb(),b.Wb(),b.Ec(70,I,11,9,"tr",7),b.Xb(71,"tr"),b.Sb(72,"td"),b.Sb(73,"td"),b.Xb(74,"td"),b.Gc(75,"TOTAL PAGADO"),b.Wb(),b.Xb(76,"td",29),b.Gc(77),b.hc(78,"currency"),b.Wb(),b.Wb(),b.Xb(79,"tr"),b.Sb(80,"td"),b.Sb(81,"td"),b.Xb(82,"td"),b.Gc(83,"SALDO PENDIENTE"),b.Wb(),b.Xb(84,"td",29),b.Gc(85),b.hc(86,"currency"),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(87,"div",1),b.Xb(88,"div",2),b.Xb(89,"label",30),b.Xb(90,"strong"),b.Gc(91,"1.- Ingersa el monto del pago"),b.Wb(),b.Wb(),b.Xb(92,"div",31),b.Xb(93,"input",32),b.ec("ngModelChange",(function(t){return o.pago.monto=t})),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(94,"div",1),b.Xb(95,"div",2),b.Xb(96,"label",33),b.Xb(97,"strong"),b.Gc(98,"2.- Adjuntar comprobante de pago"),b.Wb(),b.Wb(),b.Xb(99,"div",31),b.Xb(100,"div",34),b.Xb(101,"input",35,36),b.ec("change",(function(t){return o.fileUploadListener(t)})),b.Wb(),b.Xb(103,"label",37),b.Gc(104),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(105,"div",1),b.Xb(106,"div",2),b.Xb(107,"label",30),b.Xb(108,"strong"),b.Gc(109,"3.- Digita tu numero de empleado"),b.Wb(),b.Wb(),b.Xb(110,"div",38),b.Xb(111,"label",39),b.Gc(112,"No. empleado"),b.Wb(),b.Xb(113,"div",40),b.Xb(114,"input",41),b.ec("ngModelChange",(function(t){return o.noEmpleado=t})),b.Wb(),b.Xb(115,"small",42),b.Gc(116,"Ingresa tu numero de empleado para realizar el pago."),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(117,"div",43),b.Ec(118,M,2,5,"button",44),b.Xb(119,"button",45),b.ec("click",(function(){return o.closeModal()})),b.Gc(120,"Cerrar"),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb()),2&t&&(b.Fb(9),b.nc("ngForOf",o.alerts),b.Fb(1),b.nc("ngIf",o.loading),b.Fb(1),b.nc("ngIf",0===o.prestamos.length&&!o.loading),b.Fb(1),b.nc("ngIf",o.prestamos.length>0),b.Fb(12),b.nc("ngForOf",o.alerts),b.Fb(10),b.Hc(o.prestamo.estatus),b.Fb(5),b.Hc(b.ic(40,20,o.prestamo.monto)),b.Fb(6),b.Hc(o.prestamo.noQuincenas),b.Fb(20),b.Hc(b.jc(66,22,o.prestamo.fechaCreacion,"dd/MM/yyyy")),b.Fb(3),b.Hc(b.ic(69,25,o.prestamo.monto)),b.Fb(2),b.nc("ngForOf",o.prestamo.saldosPrestamo),b.Fb(7),b.Hc(b.ic(78,27,o.totalPagado)),b.Fb(8),b.Hc(b.ic(86,29,o.prestamo.saldoPendiente)),b.Fb(8),b.nc("ngModel",o.pago.monto),b.Fb(8),b.nc("disabled",void 0===o.pago.monto),b.Fb(3),b.Hc(o.fileName),b.Fb(10),b.nc("disabled",o.pago.monto<=.01)("ngModel",o.noEmpleado)("ngModelOptions",b.pc(31,P)),b.Fb(4),b.nc("ngIf",o.noEmpleado))},directives:[m.m,m.n,u.a,p.m,p.b,p.h,p.k,g.a,f.a,W.a,m.l],pipes:[m.d,m.f],styles:[""]}),t})()},xkWA:function(t,o,a){"use strict";a.d(o,"a",(function(){return X}));var e=a("mrSG");class i{constructor(){this.ENERO=0,this.FEBRERO=1,this.MARZO=2,this.ABRIL=3,this.MAYO=4,this.JUNIO=5,this.JULIO=6,this.AGOSTO=7,this.SEPTIEMBRE=8,this.OCTUBRE=9,this.NOVIEMBRE=10,this.DICIEMBRE=11}}var s=a("lJxs"),r=a("8Y7J"),b=a("ESM5"),n=a("iInd"),c=a("LDwG"),d=a("SVse"),l=a("jksu"),h=a("CNMR"),m=a("hrfs");function u(t,o){1&t&&r.Sb(0,"cybord-loader")}function p(t,o){if(1&t&&(r.Xb(0,"div"),r.Xb(1,"alert",9),r.Gc(2),r.Wb(),r.Wb()),2&t){const t=o.$implicit;r.Fb(1),r.nc("dismissible",!0),r.Fb(1),r.Hc(t)}}function g(t,o){1&t&&(r.Xb(0,"div",1),r.Sb(1,"div",2),r.Xb(2,"div",10),r.Gc(3," No hay registros de ahorro "),r.Wb(),r.Sb(4,"div",2),r.Wb())}function f(t,o){if(1&t&&(r.Xb(0,"tr"),r.Xb(1,"td",17),r.Gc(2),r.hc(3,"date"),r.Wb(),r.Xb(4,"td",17),r.Gc(5),r.Wb(),r.Xb(6,"td",18),r.Gc(7),r.hc(8,"currency"),r.Wb(),r.Wb()),2&t){const t=o.$implicit;r.Fb(2),r.Hc(r.jc(3,3,t.fechaCreacion,"dd/MM/yyyy")),r.Fb(3),r.Hc(t.tipo),r.Fb(2),r.Hc(r.ic(8,6,t.monto))}}function W(t,o){if(1&t&&(r.Xb(0,"div",1),r.Xb(1,"div",11),r.Xb(2,"strong"),r.Gc(3,"Mi historico de ahorro"),r.Wb(),r.Sb(4,"br"),r.Sb(5,"br"),r.Xb(6,"table",12),r.Xb(7,"thead",13),r.Xb(8,"tr"),r.Xb(9,"th"),r.Gc(10,"FECHA"),r.Wb(),r.Xb(11,"th"),r.Gc(12,"TIPO"),r.Wb(),r.Xb(13,"th"),r.Gc(14,"MONTO"),r.Wb(),r.Wb(),r.Wb(),r.Xb(15,"tbody"),r.Ec(16,f,9,8,"tr",7),r.Xb(17,"tr"),r.Sb(18,"td"),r.Xb(19,"td"),r.Xb(20,"strong"),r.Gc(21,"TOTAL"),r.Wb(),r.Wb(),r.Xb(22,"td",14),r.Xb(23,"strong"),r.Gc(24),r.hc(25,"currency"),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Xb(26,"div",15),r.Sb(27,"canvas",16),r.Wb(),r.Wb()),2&t){const t=r.gc();r.Fb(16),r.nc("ngForOf",t.ahorros),r.Fb(8),r.Hc(r.ic(25,7,t.total)),r.Fb(3),r.nc("datasets",t.barChartData)("labels",t.barChartLabels)("options",t.barChartOptions)("legend",!0)("chartType","bar")}}let X=(()=>{class t{constructor(t,o,a){this.userService=t,this.route=o,this.saldosAhorro=a,this.loading=!1,this.barChartOptions={scaleShowVerticalLines:!1,responsive:!0},this.barChartLabels=["NOVIEMBRE","DICIEMBRE","ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE"],this.COLORS=["#46BFBD","#46BFBD","#46BFBD","#46BFBD","#46BFBD","#46BFBD","#46BFBD","#46BFBD","#46BFBD","#46BFBD","#46BFBD","#46BFBD"],this.alerts=[],this.barChartData=[{data:[],label:"Ahorro acumulado"}],this.barChartDataPrestamos=[{data:[],label:"Prestamo acumulado"}],this.ahorros=[],this.prestamos=[]}ngOnInit(){this.loading=!0,this.route.paramMap.subscribe(t=>{const o=t.get("idUsuario");console.log("Loading saldos usuario from user,",o),null==o||null==o?this.userService.myInfo().then(t=>{this.setInfoAhorros(t.id)}).catch(t=>this.alerts.push(t)).then(()=>this.loading=!1):(this.setInfoAhorros(+o),this.loading=!1)})}setInfoAhorros(t){return Object(e.a)(this,void 0,void 0,(function*(){try{const o=new i;this.ahorros=yield this.saldosAhorro.getSaldoByUsuario(t).pipe(Object(s.a)(t=>{for(const o of t)o.fechaCreacion=new Date(o.fechaCreacion);return t})).toPromise();const a=[];let e=0;for(const t of this.barChartLabels){const i=this.ahorros.filter(a=>a.fechaCreacion.getMonth()===o[t]).map(t=>t.monto);i.length>0?(e+=i.reduce((t,o)=>t+o),a.push(e)):a.push(0)}this.total=e,this.barChartData=[{data:a,backgroundColor:this.COLORS,label:"Ahorro acumulado"}]}catch(o){this.alerts.push(o)}}))}}return t.\u0275fac=function(o){return new(o||t)(r.Rb(b.a),r.Rb(n.a),r.Rb(c.a))},t.\u0275cmp=r.Lb({type:t,selectors:[["cybord-ahorro-usuario"]],decls:12,vars:4,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col"],[1,"card"],[1,"card-header"],[1,"card-body"],[4,"ngIf"],[4,"ngFor","ngForOf"],["class","row",4,"ngIf"],["type","danger",3,"dismissible"],["role","alert",1,"col-3","alert","alert-primary"],[1,"col-4"],[1,"table","table-bordered","table-striped","table-sm"],[1,"thead-dark"],[1,"text-right"],[1,"chart-wrapper","col-8"],["baseChart","",1,"chart",3,"datasets","labels","options","legend","chartType"],["scope","row"],["scope","row",1,"text-right"]],template:function(t,o){1&t&&(r.Xb(0,"div",0),r.Xb(1,"div",1),r.Xb(2,"div",2),r.Xb(3,"div",3),r.Xb(4,"div",4),r.Xb(5,"strong"),r.Gc(6,"Mi reporte ahorro "),r.Wb(),r.Wb(),r.Xb(7,"div",5),r.Ec(8,u,1,0,"cybord-loader",6),r.Ec(9,p,3,2,"div",7),r.Ec(10,g,5,0,"div",8),r.Ec(11,W,28,9,"div",8),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb()),2&t&&(r.Fb(8),r.nc("ngIf",o.loading),r.Fb(1),r.nc("ngForOf",o.alerts),r.Fb(1),r.nc("ngIf",0===o.ahorros.length&&!o.loading),r.Fb(1),r.nc("ngIf",o.ahorros.length>0&&!o.loading))},directives:[d.n,d.m,l.a,h.a,m.a],pipes:[d.d,d.f],styles:[".alert-md-local[_ngcontent-%COMP%]{background-color:#009688;border-color:#00695c;color:#fff}"]}),t})()}}]);
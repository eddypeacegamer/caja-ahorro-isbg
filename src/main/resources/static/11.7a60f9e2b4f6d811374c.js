(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{KZhB:function(e,t,b){"use strict";b.d(t,"a",(function(){return i}));class i{constructor(){this.datosUsuario=[],this.roles=[]}}},KpyH:function(e,t,b){"use strict";b.r(t),b.d(t,"UsuariosModule",(function(){return y}));var i=b("iInd"),o=b("8Y7J"),a=b("hrfs");let n=(()=>{class e{constructor(){this.barChartOptions={scaleShowVerticalLines:!1,responsive:!0},this.barChartLabels=["enero","febrero","marzo","abril","mayo","junio","julio","agosto"],this.barChartType="bar",this.barChartLegend=!0,this.barChartData=[{data:[250,500,750,1e3,1250,1500,1750,2e3],label:"Mi ahorro"}]}ngOnInit(){}chartClicked(e){console.log(e)}chartHovered(e){console.log(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Cb({type:e,selectors:[["cybord-reporte-ahorro"]],decls:9,vars:5,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-12","col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"chart-wrapper"],["baseChart","",1,"chart",3,"datasets","labels","options","legend","chartType","chartHover","chartClick"]],template:function(e,t){1&e&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.Ob(2,"div",2),o.Ob(3,"div",3),o.Ob(4,"div",4),o.tc(5," Reporte ahorro "),o.Nb(),o.Ob(6,"div",5),o.Ob(7,"div",6),o.Ob(8,"canvas",7),o.Vb("chartHover",(function(e){return t.chartHovered(e)}))("chartClick",(function(e){return t.chartClicked(e)})),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb()),2&e&&(o.xb(8),o.dc("datasets",t.barChartData)("labels",t.barChartLabels)("options",t.barChartOptions)("legend",t.barChartLegend)("chartType",t.barChartType))},directives:[a.a],styles:[""]}),e})();var c=b("KZhB"),r=b("3k/E"),d=b("ESM5"),l=b("xKGb"),s=b("2ZVE"),u=b("s7LF"),O=b("ienR"),N=b("SVse");function p(e,t){1&e&&(o.Jb(0,"i",38),o.tc(1,"\xa0 Solicitud"))}function f(e,t){1&e&&(o.Jb(0,"i",39),o.tc(1,"\xa0 Modificaci\xf3n"))}function m(e,t){1&e&&(o.Jb(0,"i",40),o.tc(1,"\xa0 Retiro Parcial"))}function h(e,t){1&e&&(o.Jb(0,"i",41),o.tc(1,"\xa0 Cancelaci\xf3n"))}function v(e,t){if(1&e&&(o.Ob(0,"p",42),o.tc(1),o.Nb()),2&e){const e=o.Xb();o.xb(1),o.uc(e.success)}}const g=[{path:"reportes",component:n,data:{title:"Historico ahorro"}},{path:"tramites",component:(()=>{class e{constructor(e,t,b){this.route=e,this.userService=t,this.solicitudService=b,this.loading=!0,this.usuario=new c.a,this.errorMessages=[],this.success="",this.bsValue=new Date,this.noEmpleado="",this.oficina="*",this.descuentoQuincenal=100,this.enabledDates=[new Date("2020-09-15"),new Date("2020-10-01"),new Date("2020-10-15"),new Date("2020-11-01"),new Date("2020-11-15"),new Date("2020-12-01"),new Date("2020-12-15")],this.bsConfig={containerClass:"theme-dark-blue"}}ngOnInit(){this.errorMessages=[],this.success="",this.solicitud=new r.a,this.userService.getUsuario(3).subscribe(e=>{this.usuario=e})}requestSolicitud(e){this.solicitud.idUsuario=this.usuario.id,this.solicitud.status="Solicitud",this.solicitud.tipo=e,this.solicitud.statusDetalle="Solicitud inicial",this.solicitudService.postSolictudUsuario(this.usuario.id,this.solicitud).subscribe(e=>this.success="Se ha enviado la solicitud correctamente")}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(i.a),o.Ib(d.a),o.Ib(l.a))},e.\u0275cmp=o.Cb({type:e,selectors:[["cybord-tramites-ahorro"]],decls:278,vars:33,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-12","col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"col-sm-12"],["headingTab",""],["tabHeading","","class","disabled"],[1,"col-xs-12","col-sm-12","col-md-6","form-group"],["action","","method","post","enctype","multipart/form-data",1,"form-horizontal"],[1,"form-group","row"],[1,"col-md-3","col-form-label"],[1,"col-md-9"],[1,"form-control-static"],["for","no-emp",1,"col-md-3","col-form-label"],["type","number","id","no-emp","name","text-input","placeholder","No empleado",1,"form-control",3,"ngModel","ngModelChange"],[1,"help-block"],["for","office",1,"col-md-3","col-form-label"],["id","office","name","office",1,"form-control",3,"ngModel","ngModelChange"],["value","*"],["value","1"],["value","2"],["value","3"],["value","4"],["for","quantity",1,"col-md-3","col-form-label"],["type","number","id","quantity","name","text-input","min","100","placeholder","100.00",1,"form-control",3,"ngModel","ngModelChange"],["for","start-date",1,"col-md-3","col-form-label"],["id","start-date","type","text","bsDatepicker","",1,"form-control",3,"bsConfig","datesEnabled","bsValue"],["dp","bsDatepicker"],["type","button",1,"btn","btn-sm","btn-success",3,"click"],[1,"fa","fa-dot-circle-o"],["tabHeading",""],["type","number","id","quantity","name","text-input","min","100","placeholder","100.00",1,"form-control"],["type","text","id","ccnumber","placeholder","0000 0000 0000 0000",1,"form-control"],["for","textarea-input",1,"col-md-3","col-form-label"],["id","textarea-input","name","textarea-input","rows","9","placeholder","Raz\xf3n o motivo de cancelaci\xf3n del ahorro",1,"form-control"],["class","alert alert-success","role","alert",4,"ngIf"],[1,"disabled"],[1,"icon-refresh"],[1,"icon-reload"],[1,"icon-envelope-open"],["role","alert",1,"alert","alert-success"]],template:function(e,t){1&e&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.Ob(2,"div",2),o.Ob(3,"div",3),o.Ob(4,"div",4),o.Ob(5,"strong"),o.tc(6,"Tr\xe1mites ahorro"),o.Nb(),o.Nb(),o.Ob(7,"div",5),o.Ob(8,"div",1),o.Ob(9,"div",6),o.Ob(10,"tabset",null,7),o.Ob(12,"tab"),o.sc(13,p,2,0,"ng-template",8),o.Jb(14,"br"),o.Ob(15,"div",1),o.Ob(16,"div",9),o.Ob(17,"form",10),o.Ob(18,"div",11),o.Ob(19,"label",12),o.tc(20,"Nombre"),o.Nb(),o.Ob(21,"div",13),o.Ob(22,"p",14),o.Ob(23,"strong"),o.tc(24),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(25,"div",11),o.Ob(26,"label",15),o.tc(27,"No. empleado"),o.Nb(),o.Ob(28,"div",13),o.Ob(29,"input",16),o.Vb("ngModelChange",(function(e){return t.noEmpleado=e})),o.Nb(),o.Ob(30,"span",17),o.tc(31,"Introducir no. empleado"),o.Nb(),o.Nb(),o.Nb(),o.Ob(32,"div",11),o.Ob(33,"label",18),o.tc(34,"Oficina"),o.Nb(),o.Ob(35,"div",13),o.Ob(36,"select",19),o.Vb("ngModelChange",(function(e){return t.oficina=e})),o.Ob(37,"option",20),o.tc(38,"Seleccionar"),o.Nb(),o.Ob(39,"option",21),o.tc(40,"Oficina #1"),o.Nb(),o.Ob(41,"option",22),o.tc(42,"Oficina #2"),o.Nb(),o.Ob(43,"option",23),o.tc(44,"Oficina #3"),o.Nb(),o.Ob(45,"option",24),o.tc(46,"Oficina #4"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(47,"div",11),o.Ob(48,"label",25),o.tc(49,"Descuento quincenal"),o.Nb(),o.Ob(50,"div",13),o.Ob(51,"input",26),o.Vb("ngModelChange",(function(e){return t.descuentoQuincenal=e})),o.Nb(),o.Ob(52,"span",17),o.tc(53,"Descuento quincenal"),o.Nb(),o.Nb(),o.Nb(),o.Ob(54,"div",11),o.Ob(55,"label",27),o.tc(56,"Fecha inicio"),o.Nb(),o.Ob(57,"div",13),o.Jb(58,"input",28,29),o.Ob(60,"span",17),o.tc(61,"fecha inicio descuentos"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(62,"div",9),o.Ob(63,"span",17),o.tc(64," Yo "),o.Ob(65,"strong"),o.tc(66),o.Nb(),o.tc(67," con n\xfamero de trabajador "),o.Ob(68,"strong"),o.tc(69),o.Nb(),o.tc(70," adscrito a la Oficina "),o.Ob(71,"strong"),o.tc(72),o.Nb(),o.tc(73," autorizo que por este medio se descuente de mi pago de n\xf3mina, la cantidad de "),o.Ob(74,"strong"),o.tc(75),o.Yb(76,"currency"),o.Nb(),o.tc(77,"de manera quincenal a partir de la siguiente fecha "),o.Ob(78,"strong"),o.tc(79),o.Yb(80,"date"),o.Nb(),o.tc(81,", durante el per\xedodo correspondiente, autorizo que la cantidad retenida sea depositada en la cuenta del PROGRAMA DE AHORRO VOLUNTARIO. Estoy de acuerdo que la cantidad ahorrada y los intereses que se hubiesen generado me sean entregados al t\xe9rmino del per\xedodo. "),o.Nb(),o.Jb(82,"br"),o.Jb(83,"br"),o.Ob(84,"button",30),o.Vb("click",(function(){return t.requestSolicitud("SolicitudAhorro")})),o.Jb(85,"i",31),o.tc(86,"\xa0 Enviar solicitud"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(87,"tab"),o.sc(88,f,2,0,"ng-template",32),o.Jb(89,"br"),o.Ob(90,"div",1),o.Ob(91,"div",9),o.Ob(92,"form",10),o.Ob(93,"div",11),o.Ob(94,"label",12),o.tc(95,"Nombre"),o.Nb(),o.Ob(96,"div",13),o.Ob(97,"p",14),o.tc(98),o.Nb(),o.Nb(),o.Nb(),o.Ob(99,"div",11),o.Ob(100,"label",15),o.tc(101,"No. empleado"),o.Nb(),o.Ob(102,"div",13),o.Ob(103,"input",16),o.Vb("ngModelChange",(function(e){return t.noEmpleado=e})),o.Nb(),o.Ob(104,"span",17),o.tc(105,"Introducir no. empleado"),o.Nb(),o.Nb(),o.Nb(),o.Ob(106,"div",11),o.Ob(107,"label",18),o.tc(108,"Oficina"),o.Nb(),o.Ob(109,"div",13),o.Ob(110,"select",19),o.Vb("ngModelChange",(function(e){return t.oficina=e})),o.Ob(111,"option",20),o.tc(112,"Seleccionar"),o.Nb(),o.Ob(113,"option",21),o.tc(114,"Oficina #1"),o.Nb(),o.Ob(115,"option",22),o.tc(116,"Oficina #2"),o.Nb(),o.Ob(117,"option",23),o.tc(118,"Oficina #3"),o.Nb(),o.Ob(119,"option",24),o.tc(120,"Oficina #4"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(121,"div",11),o.Ob(122,"label",25),o.tc(123,"Descuento actual"),o.Nb(),o.Ob(124,"div",13),o.Jb(125,"input",33),o.Ob(126,"span",17),o.tc(127,"Descuento actual"),o.Nb(),o.Nb(),o.Nb(),o.Ob(128,"div",11),o.Ob(129,"label",25),o.tc(130,"Nuevo descuento"),o.Nb(),o.Ob(131,"div",13),o.Jb(132,"input",33),o.Ob(133,"span",17),o.tc(134,"Nueva cantidad"),o.Nb(),o.Nb(),o.Nb(),o.Ob(135,"div",11),o.Ob(136,"label",27),o.tc(137,"Fecha modificacion"),o.Nb(),o.Ob(138,"div",13),o.Jb(139,"input",28,29),o.Ob(141,"span",17),o.tc(142,"fecha modificacion descuento"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(143,"div",9),o.Ob(144,"span",17),o.tc(145," Yo NOMBRE DEL EMPLEADO con n\xfamero de trabajador ########, adscrito a la Oficina de OFICINA XX solicito por este medio se modifique el descuento de $ ##.## que se me aplica en mi pago de n\xf3mina por la por la cantidad de $##.## aplicable a partir de la fecha yyyy-MM-dd. "),o.Nb(),o.Jb(146,"br"),o.Jb(147,"br"),o.Ob(148,"button",30),o.Vb("click",(function(){return t.requestSolicitud("ModificacionAhorro")})),o.Jb(149,"i",31),o.tc(150,"\xa0 Enviar solicitud"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(151,"tab"),o.sc(152,m,2,0,"ng-template",32),o.Jb(153,"br"),o.Ob(154,"div",1),o.Ob(155,"div",9),o.Ob(156,"form",10),o.Ob(157,"div",11),o.Ob(158,"label",12),o.tc(159,"Nombre"),o.Nb(),o.Ob(160,"div",13),o.Ob(161,"p",14),o.tc(162),o.Nb(),o.Nb(),o.Nb(),o.Ob(163,"div",11),o.Ob(164,"label",15),o.tc(165,"No. empleado"),o.Nb(),o.Ob(166,"div",13),o.Ob(167,"input",16),o.Vb("ngModelChange",(function(e){return t.noEmpleado=e})),o.Nb(),o.Ob(168,"span",17),o.tc(169,"Introducir no. empleado"),o.Nb(),o.Nb(),o.Nb(),o.Ob(170,"div",11),o.Ob(171,"label",18),o.tc(172,"Oficina"),o.Nb(),o.Ob(173,"div",13),o.Ob(174,"select",19),o.Vb("ngModelChange",(function(e){return t.oficina=e})),o.Ob(175,"option",20),o.tc(176,"Seleccionar"),o.Nb(),o.Ob(177,"option",21),o.tc(178,"Oficina #1"),o.Nb(),o.Ob(179,"option",22),o.tc(180,"Oficina #2"),o.Nb(),o.Ob(181,"option",23),o.tc(182,"Oficina #3"),o.Nb(),o.Ob(183,"option",24),o.tc(184,"Oficina #4"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(185,"div",11),o.Ob(186,"label",25),o.tc(187,"Monto de retiro"),o.Nb(),o.Ob(188,"div",13),o.Jb(189,"input",33),o.Ob(190,"span",17),o.tc(191,"Monto a retirar"),o.Nb(),o.Nb(),o.Nb(),o.Ob(192,"div",11),o.Ob(193,"label",27),o.tc(194,"Cuenta deposito"),o.Nb(),o.Ob(195,"div",13),o.Jb(196,"input",34),o.Ob(197,"span",17),o.tc(198,"cuenta deposito"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(199,"div",9),o.Ob(200,"span",17),o.tc(201," Yo NOMBRE DEL EMPLEADO con n\xfamero de trabajador ########, adscrito a la Oficina de IDENTIFICADOR_OFICINA solicito por este medio la cantidad de $ ###.## por concepto de Retiro Parcial de mi ahorro, que sea depositado a la cuenta 0000 0000 0000 0000 "),o.Nb(),o.Jb(202,"br"),o.Jb(203,"br"),o.Ob(204,"button",30),o.Vb("click",(function(){return t.requestSolicitud("RetiroParcial")})),o.Jb(205,"i",31),o.tc(206,"\xa0 Enviar solicitud"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(207,"tab"),o.sc(208,h,2,0,"ng-template",32),o.Jb(209,"br"),o.Ob(210,"div",1),o.Ob(211,"div",9),o.Ob(212,"form",10),o.Ob(213,"div",11),o.Ob(214,"label",12),o.tc(215,"Nombre"),o.Nb(),o.Ob(216,"div",13),o.Ob(217,"p",14),o.tc(218),o.Nb(),o.Nb(),o.Nb(),o.Ob(219,"div",11),o.Ob(220,"label",15),o.tc(221,"No. empleado"),o.Nb(),o.Ob(222,"div",13),o.Ob(223,"input",16),o.Vb("ngModelChange",(function(e){return t.noEmpleado=e})),o.Nb(),o.Ob(224,"span",17),o.tc(225,"Introducir no. empleado"),o.Nb(),o.Nb(),o.Nb(),o.Ob(226,"div",11),o.Ob(227,"label",18),o.tc(228,"Oficina"),o.Nb(),o.Ob(229,"div",13),o.Ob(230,"select",19),o.Vb("ngModelChange",(function(e){return t.oficina=e})),o.Ob(231,"option",20),o.tc(232,"Seleccionar"),o.Nb(),o.Ob(233,"option",21),o.tc(234,"Oficina #1"),o.Nb(),o.Ob(235,"option",22),o.tc(236,"Oficina #2"),o.Nb(),o.Ob(237,"option",23),o.tc(238,"Oficina #3"),o.Nb(),o.Ob(239,"option",24),o.tc(240,"Oficina #4"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(241,"div",11),o.Ob(242,"label",25),o.tc(243,"Descuento quincenal"),o.Nb(),o.Ob(244,"div",13),o.Ob(245,"input",26),o.Vb("ngModelChange",(function(e){return t.descuentoQuincenal=e})),o.Nb(),o.Ob(246,"span",17),o.tc(247,"Descuento quincenal"),o.Nb(),o.Nb(),o.Nb(),o.Ob(248,"div",11),o.Ob(249,"label",27),o.tc(250,"Fecha efectiva reintegro"),o.Nb(),o.Ob(251,"div",13),o.Jb(252,"input",28,29),o.Ob(254,"span",17),o.tc(255,"Fecha efectiva reintegro"),o.Nb(),o.Nb(),o.Nb(),o.Ob(256,"div",11),o.Ob(257,"label",35),o.tc(258,"Motivo de cancelacion"),o.Nb(),o.Ob(259,"div",13),o.Jb(260,"textarea",36),o.Nb(),o.Nb(),o.Ob(261,"div",11),o.Ob(262,"label",27),o.tc(263,"Cuenta deposito"),o.Nb(),o.Ob(264,"div",13),o.Jb(265,"input",34),o.Ob(266,"span",17),o.tc(267,"cuenta deposito"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(268,"div",9),o.Ob(269,"span",17),o.tc(270," Yo NOMBRE DEL EMPLEADO con n\xfamero de trabajador ########, adscrito a la Oficina de IDENTIFICADOR_OFICINA solicito por este medio se cancele el descuento que se aplica en mi pago de n\xf3mina la cantidad de de $ ###.## de manera quincenal a partir de la siguiente fecha yyyy-MM-dd, debido a RAZON_MOTIVO_CANCELACI\xd3N y asimismo se me reintegre la cantidad ahorrada en la cuenta del PROGRAMA DE AHORRO VOLUNTARIO a mi cuenta 0000 0000 0000 0000 "),o.Nb(),o.Jb(271,"br"),o.Jb(272,"br"),o.Ob(273,"button",30),o.Vb("click",(function(){return t.requestSolicitud("CancelacionAhorro")})),o.Jb(274,"i",31),o.tc(275,"\xa0 Enviar solicitud"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Jb(276,"br"),o.sc(277,v,2,1,"p",37),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb()),2&e&&(o.xb(24),o.uc(t.usuario.nombre),o.xb(5),o.dc("ngModel",t.noEmpleado),o.xb(7),o.dc("ngModel",t.oficina),o.xb(15),o.dc("ngModel",t.descuentoQuincenal),o.xb(7),o.dc("bsConfig",t.bsConfig)("datesEnabled",t.enabledDates)("bsValue",t.bsValue),o.xb(8),o.uc(t.usuario.nombre),o.xb(3),o.uc(t.noEmpleado),o.xb(3),o.uc(t.oficina),o.xb(3),o.vc("",o.Zb(76,29,t.descuentoQuincenal)," "),o.xb(4),o.uc(o.Zb(80,31,t.bsValue)),o.xb(19),o.uc(t.usuario.nombre),o.xb(5),o.dc("ngModel",t.noEmpleado),o.xb(7),o.dc("ngModel",t.oficina),o.xb(29),o.dc("bsConfig",t.bsConfig)("datesEnabled",t.enabledDates)("bsValue",t.bsValue),o.xb(23),o.uc(t.usuario.nombre),o.xb(5),o.dc("ngModel",t.noEmpleado),o.xb(7),o.dc("ngModel",t.oficina),o.xb(44),o.uc(t.usuario.nombre),o.xb(5),o.dc("ngModel",t.noEmpleado),o.xb(7),o.dc("ngModel",t.oficina),o.xb(15),o.dc("ngModel",t.descuentoQuincenal),o.xb(7),o.dc("bsConfig",t.bsConfig)("datesEnabled",t.enabledDates)("bsValue",t.bsValue),o.xb(25),o.dc("ngIf",t.success.length>0))},directives:[s.d,s.a,s.b,u.s,u.j,u.k,u.n,u.b,u.i,u.l,u.p,u.m,u.r,O.b,O.a,N.m],pipes:[N.d,N.f],styles:[".disabled[_ngcontent-%COMP%]{pointer-events:none;cursor:default}"]}),e})(),data:{title:"Tr\xe1mites ahorro"}}];let C=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[i.g.forChild(g)],i.g]}),e})();var M=b("65jD");let y=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[M.a,C,a.b,u.f]]}),e})()}}]);
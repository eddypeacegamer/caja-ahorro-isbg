(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"aBT+":function(e,i,o){"use strict";o.d(i,"a",(function(){return C}));var t=o("EwKM"),a=o("8Y7J"),r=o("ESM5"),n=o("iInd"),s=o("s7LF"),b=o("SVse");function c(e,i){1&e&&(a.Pb(0,"div",26),a.vc(1," No se encontraron resultados "),a.Ob())}function l(e,i){1&e&&(a.Pb(0,"option",34),a.vc(1,"20"),a.Ob())}function u(e,i){1&e&&(a.Pb(0,"option",35),a.vc(1,"50"),a.Ob())}function d(e,i){if(1&e){const e=a.Qb();a.Pb(0,"select",30),a.Wb("ngModelChange",(function(i){return a.oc(e),a.Yb(2).filterParams.size=i}))("change",(function(i){return a.oc(e),a.Yb(2).onChangePageSize(i.target.value)})),a.Pb(1,"option",31),a.vc(2,"10"),a.Ob(),a.uc(3,l,2,0,"option",32),a.uc(4,u,2,0,"option",33),a.Ob()}if(2&e){const e=a.Yb(2);a.ec("ngModel",e.filterParams.size),a.xb(3),a.ec("ngIf",e.page.number<e.page.totalElements/20),a.xb(1),a.ec("ngIf",e.page.number<e.page.totalElements/50)}}function g(e,i){if(1&e&&(a.Pb(0,"div",27),a.uc(1,d,5,3,"select",28),a.Pb(2,"strong",29),a.vc(3," Tama\xf1o Pagina \xa0\xa0\xa0\xa0"),a.Ob(),a.Ob()),2&e){const e=a.Yb();a.xb(1),a.ec("ngIf",0==e.page.last||1==e.page.first)}}function f(e,i){1&e&&(a.Pb(0,"td",40),a.Pb(1,"span",44),a.vc(2,"ACTIVO"),a.Ob(),a.Ob())}function h(e,i){1&e&&(a.Pb(0,"td",40),a.Pb(1,"span",45),a.vc(2,"INACTIVO"),a.Ob(),a.Ob())}function m(e,i){if(1&e){const e=a.Qb();a.Pb(0,"tr"),a.Pb(1,"td",40),a.Pb(2,"button",41),a.Wb("click",(function(){a.oc(e);const o=i.$implicit;return a.Yb(2).redirectToUser(o.id)})),a.Kb(3,"i",42),a.Ob(),a.Ob(),a.Pb(4,"td",40),a.vc(5),a.Ob(),a.Pb(6,"td",40),a.vc(7),a.Ob(),a.Pb(8,"td",40),a.vc(9),a.Ob(),a.Pb(10,"td",40),a.vc(11),a.Ob(),a.uc(12,f,3,0,"td",43),a.uc(13,h,3,0,"td",43),a.Ob()}if(2&e){const e=i.$implicit;a.xb(5),a.wc(e.noEmpleado),a.xb(2),a.wc(e.nombre),a.xb(2),a.wc(e.email),a.xb(2),a.wc(e.tipoUsuario),a.xb(1),a.ec("ngIf",!0===e.activo),a.xb(1),a.ec("ngIf",!1===e.activo)}}function p(e,i){if(1&e){const e=a.Qb();a.Pb(0,"li",51),a.Pb(1,"button",52),a.Wb("click",(function(){a.oc(e);const i=a.Yb(4);return i.updateDataTable(0,i.page.size)})),a.Kb(2,"i",53),a.Ob(),a.Ob()}}function v(e,i){if(1&e){const e=a.Qb();a.Pb(0,"li",51),a.Pb(1,"button",52),a.Wb("click",(function(){a.oc(e);const i=a.Yb(4);return i.updateDataTable(i.page.number-1,i.page.size)})),a.vc(2),a.Ob(),a.Ob()}if(2&e){const e=a.Yb(4);a.xb(2),a.wc(e.page.number)}}function O(e,i){if(1&e){const e=a.Qb();a.Pb(0,"li",51),a.Pb(1,"button",52),a.Wb("click",(function(){a.oc(e);const i=a.Yb(4);return i.updateDataTable(i.page.number+1,i.page.size)})),a.vc(2),a.Ob(),a.Ob()}if(2&e){const e=a.Yb(4);a.xb(2),a.wc(e.page.number+2)}}function P(e,i){if(1&e){const e=a.Qb();a.Pb(0,"li",51),a.Pb(1,"button",52),a.Wb("click",(function(){a.oc(e);const i=a.Yb(4);return i.updateDataTable(i.page.totalPages-1,i.page.size)})),a.Kb(2,"i",54),a.Ob(),a.Ob()}}function I(e,i){if(1&e&&(a.Pb(0,"ul",47),a.uc(1,p,3,0,"li",48),a.uc(2,v,3,1,"li",48),a.Pb(3,"li",49),a.Pb(4,"a",50),a.Pb(5,"strong"),a.vc(6),a.Ob(),a.Ob(),a.Ob(),a.uc(7,O,3,1,"li",48),a.uc(8,P,3,0,"li",48),a.Ob()),2&e){const e=a.Yb(3);a.xb(1),a.ec("ngIf",0==e.page.first),a.xb(1),a.ec("ngIf",0==e.page.first),a.xb(4),a.wc(e.page.number+1),a.xb(1),a.ec("ngIf",0==e.page.last),a.xb(1),a.ec("ngIf",0==e.page.last)}}function M(e,i){if(1&e&&(a.Pb(0,"div",27),a.uc(1,I,9,5,"ul",46),a.Ob()),2&e){const e=a.Yb(2);a.xb(1),a.ec("ngIf",e.page.totalElements>1)}}function x(e,i){if(1&e&&(a.Pb(0,"div",36),a.Pb(1,"table",37),a.Pb(2,"thead",38),a.Pb(3,"tr"),a.Pb(4,"th"),a.vc(5,"ACCIONES"),a.Ob(),a.Pb(6,"th"),a.vc(7,"NO. EMPLEADO"),a.Ob(),a.Pb(8,"th"),a.vc(9,"NOMBRE"),a.Ob(),a.Pb(10,"th"),a.vc(11,"CORREO"),a.Ob(),a.Pb(12,"th"),a.vc(13,"TIPO"),a.Ob(),a.Pb(14,"th"),a.vc(15,"STATUS"),a.Ob(),a.Ob(),a.Ob(),a.Pb(16,"tbody"),a.uc(17,m,14,6,"tr",39),a.Ob(),a.Ob(),a.uc(18,M,2,1,"div",24),a.Ob()),2&e){const e=a.Yb();a.xb(17),a.ec("ngForOf",e.page.content),a.xb(1),a.ec("ngIf",0==e.page.empty)}}let C=(()=>{class e{constructor(e,i){this.userService=e,this.router=i,this.module="recursos-humanos",this.page=new t.a,this.pageSize="10",this.filterParams={email:"",estatus:"*",nombre:"",tipoUsuario:"",page:"0",size:"10"}}ngOnInit(){this.module=this.router.url.split("/")[1],this.updateDataTable(0,10)}updateDataTable(e,i,o){this.userService.getUsuarios(e||0,i||10,this.filterParams).subscribe(e=>this.page=e)}onChangePageSize(e){this.updateDataTable(this.page.number,e)}redirectToUser(e){this.router.navigate([`../${this.module}/usuarios/${e}`])}}return e.\u0275fac=function(i){return new(i||e)(a.Jb(r.a),a.Jb(n.c))},e.\u0275cmp=a.Db({type:e,selectors:[["cybord-usuarios"]],decls:54,vars:10,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-12","col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row","slide_1"],[1,"col-md-2"],["for","inputCorreo",1,"label"],["type","text","nbInput","","fullWidth","","id","inputCorreo","placeholder","email usuario",1,"form-control",3,"ngModel","disabled","ngModelChange"],["for","nombreusuario",1,"label"],["type","text","nbInput","","fullWidth","","id","nombreusu","placeholder","nombreusuario",1,"form-control",3,"ngModel","disabled","ngModelChange"],["for","inputtipo",1,"label"],["type","text","nbInput","","fullWidth","","id","inputtipo","placeholder","Tipo de usuario",1,"form-control",3,"ngModel","disabled","ngModelChange"],[1,"col-md-6"],["for","inputActivo",1,"label"],[1,"row","form-inline"],["id","inputActivo","fullWidth","",1,"form-control",2,"display","block",3,"ngModel","ngModelChange"],["value","*"],["value","1"],["value","0"],[1,"btn","btn-primary",3,"click"],[1,"col"],["class","alert alert-primary","role","alert",4,"ngIf"],["class","clearfix",4,"ngIf"],["class","table-responsive",4,"ngIf"],["role","alert",1,"alert","alert-primary"],[1,"clearfix"],["id","inputunidad","style","display:block;width: 95px; margin-right: 15px;","class","float-right form-control form-control-sm",3,"ngModel","ngModelChange","change",4,"ngIf"],[1,"float-right"],["id","inputunidad",1,"float-right","form-control","form-control-sm",2,"display","block","width","95px","margin-right","15px",3,"ngModel","ngModelChange","change"],["value","10"],["value","20",4,"ngIf"],["value","50",4,"ngIf"],["value","20"],["value","50"],[1,"table-responsive"],[1,"table","table-bordered","table-sm"],[1,"thead-dark"],[4,"ngFor","ngForOf"],["scope","row"],[1,"btn-sm","btn-outline-primary",3,"click"],[1,"fa","fa-search","fa-sm"],["scope","row",4,"ngIf"],[1,"badge","badge-success"],[1,"badge","badge-danger"],["class","pagination float-right",4,"ngIf"],[1,"pagination","float-right"],["class","page-item",4,"ngIf"],[1,"page-item","active"],[1,"page-link"],[1,"page-item"],[1,"btn","page-link",3,"click"],[1,"icon-control-rewind","icons"],[1,"icon-control-forward","icons"]],template:function(e,i){1&e&&(a.Pb(0,"div",0),a.Pb(1,"div",1),a.Pb(2,"div",2),a.Pb(3,"div",3),a.Pb(4,"div",4),a.Pb(5,"strong"),a.vc(6,"Altas y bajas de usuarios - Filtros de busqueda"),a.Ob(),a.Ob(),a.Pb(7,"div",5),a.Pb(8,"div",6),a.Pb(9,"div",7),a.Pb(10,"label",8),a.vc(11,"Correo Usuario"),a.Ob(),a.Pb(12,"input",9),a.Wb("ngModelChange",(function(e){return i.filterParams.email=e})),a.Ob(),a.Ob(),a.Pb(13,"div",7),a.Pb(14,"label",10),a.vc(15,"Nombre Usuario"),a.Ob(),a.Pb(16,"input",11),a.Wb("ngModelChange",(function(e){return i.filterParams.nombre=e})),a.Ob(),a.Ob(),a.Pb(17,"div",7),a.Pb(18,"label",12),a.vc(19,"Tipo Usuario"),a.Ob(),a.Pb(20,"input",13),a.Wb("ngModelChange",(function(e){return i.filterParams.tipoUsuario=e})),a.Ob(),a.Ob(),a.Pb(21,"div",14),a.Pb(22,"label",15),a.vc(23,"Estado cliente"),a.Ob(),a.Pb(24,"div",16),a.Pb(25,"select",17),a.Wb("ngModelChange",(function(e){return i.filterParams.estatus=e})),a.Pb(26,"option",18),a.vc(27,"TODOS"),a.Ob(),a.Pb(28,"option",19),a.vc(29,"ACTIVO"),a.Ob(),a.Pb(30,"option",20),a.vc(31,"INACTIVO"),a.Ob(),a.Ob(),a.Pb(32,"p"),a.vc(33,"\xa0\xa0\xa0\xa0"),a.Ob(),a.Pb(34,"button",21),a.Wb("click",(function(){return i.updateDataTable(0,10)})),a.vc(35,"BUSCAR"),a.Ob(),a.Pb(36,"p"),a.vc(37,"\xa0\xa0\xa0\xa0"),a.Ob(),a.Pb(38,"button",21),a.Wb("click",(function(){return i.redirectToUser("*")})),a.vc(39,"NUEVO USUARIO"),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(40,"div",1),a.Pb(41,"div",2),a.Pb(42,"div",3),a.Pb(43,"div",4),a.Pb(44,"strong"),a.vc(45,"Resultados"),a.Ob(),a.Ob(),a.Pb(46,"div",5),a.Pb(47,"div",1),a.Pb(48,"div",22),a.uc(49,c,2,0,"div",23),a.uc(50,g,4,1,"div",24),a.Ob(),a.Ob(),a.Pb(51,"div",1),a.Pb(52,"div",22),a.uc(53,x,19,2,"div",25),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&e&&(a.xb(12),a.ec("ngModel",i.filterParams.email)("disabled",i.filterParams.nombre.length>0),a.xb(4),a.ec("ngModel",i.filterParams.nombre)("disabled",i.filterParams.email.length>0),a.xb(4),a.ec("ngModel",i.filterParams.tipoUsuario)("disabled",i.filterParams.email.length>0),a.xb(5),a.ec("ngModel",i.filterParams.estatus),a.xb(24),a.ec("ngIf",!0===i.page.empty),a.xb(1),a.ec("ngIf",!1===i.page.empty),a.xb(3),a.ec("ngIf",0==i.page.empty))},directives:[s.b,s.i,s.l,s.q,s.m,s.s,b.m,b.l],styles:[""]}),e})()},uwdg:function(e,i,o){"use strict";o.d(i,"a",(function(){return R}));var t=o("mrSG"),a=o("s7LF");class r{constructor(e,i,o){this.tipoDato=e,this.dato=i,this.relevancia=o||0}}var n=o("KZhB");class s{constructor(e){this.nombre=e}}var b=o("8Y7J"),c=o("SVse"),l=o("iInd"),u=o("ESM5"),d=o("ienR"),g=o("LqlI");const f=["modalConfirmacion"];function h(e,i){if(1&e&&(b.Pb(0,"p"),b.vc(1),b.Ob()),2&e){const e=i.$implicit;b.xb(1),b.wc(e)}}function m(e,i){if(1&e&&(b.Pb(0,"div",67),b.uc(1,h,2,1,"p",68),b.Ob()),2&e){const e=b.Yb();b.xb(1),b.ec("ngForOf",e.errorMessages)}}function p(e,i){1&e&&(b.Pb(0,"div"),b.vc(1,"El alias es requerido."),b.Ob())}function v(e,i){1&e&&(b.Pb(0,"div"),b.vc(1,"Nececitas un minimo de 2 caracteres. "),b.Ob())}function O(e,i){1&e&&(b.Pb(0,"div"),b.vc(1,"No mas de 100 caracteres."),b.Ob())}function P(e,i){1&e&&(b.Pb(0,"div"),b.vc(1,"Hay caracteres invalidos."),b.Ob())}function I(e,i){if(1&e&&(b.Pb(0,"div",69),b.uc(1,p,2,0,"div",70),b.uc(2,v,2,0,"div",70),b.uc(3,O,2,0,"div",70),b.uc(4,P,2,0,"div",70),b.Ob()),2&e){const e=b.Yb();b.xb(1),b.ec("ngIf",e.f.alias.errors.required),b.xb(1),b.ec("ngIf",e.f.alias.errors.minlength),b.xb(1),b.ec("ngIf",e.f.alias.errors.maxlength),b.xb(1),b.ec("ngIf",e.f.alias.errors.pattern)}}function M(e,i){1&e&&(b.Pb(0,"div"),b.vc(1,"El correo es requerido."),b.Ob())}function x(e,i){1&e&&(b.Pb(0,"div"),b.vc(1,"La direccion introducida no es valida. "),b.Ob())}function C(e,i){1&e&&(b.Pb(0,"div"),b.vc(1,"Hay caracteres invalidos."),b.Ob())}function k(e,i){if(1&e&&(b.Pb(0,"div",69),b.uc(1,M,2,0,"div",70),b.uc(2,x,2,0,"div",70),b.uc(3,C,2,0,"div",70),b.Ob()),2&e){const e=b.Yb();b.xb(1),b.ec("ngIf",e.f.email.errors.required),b.xb(1),b.ec("ngIf",e.f.email.errors.email),b.xb(1),b.ec("ngIf",e.f.email.errors.pattern)}}function U(e,i){if(1&e&&(b.Pb(0,"p",71),b.vc(1),b.Ob()),2&e){const e=b.Yb();b.xb(1),b.wc(e.params.success)}}function y(e,i){1&e&&b.Kb(0,"i",74)}function E(e,i){if(1&e){const e=b.Qb();b.Pb(0,"button",72),b.Wb("click",(function(){return b.oc(e),b.Yb().openModal()})),b.vc(1," Registrar "),b.uc(2,y,1,0,"i",73),b.Ob()}if(2&e){const e=b.Yb();b.ec("disabled",e.loading),b.xb(2),b.ec("ngIf",e.loading)}}function A(e,i){1&e&&b.Kb(0,"i",74)}function N(e,i){if(1&e){const e=b.Qb();b.Pb(0,"button",72),b.Wb("click",(function(){return b.oc(e),b.Yb().openModal()})),b.vc(1," Actualizar "),b.uc(2,A,1,0,"i",73),b.Ob()}if(2&e){const e=b.Yb();b.ec("disabled",e.loading),b.xb(2),b.ec("ngIf",e.loading)}}const S=function(e){return{"is-invalid":e}};let R=(()=>{class e{constructor(e,i,o,t,a){this.datepipe=e,this.route=i,this.usuarioServicio=o,this.formBuilder=t,this.router=a,this.submitted=!1,this.loading=!1,this.usuario=new n.a,this.errorMessages=[],this.mensajeModal="",this.params={success:"",message:"",id:"*",module:"usuarios",interno:!1},this.roles={USUARIO:!0,RECURSOS_HUMANOS:!1,TESORERIA:!1,CONTABILIDAD:!1,GERENCIA:!1,ADMINISTRACION:!1},this.nombreRoles=Object.keys(this.roles)}ngOnInit(){this.loading=!0,this.errorMessages=[],this.params.module=this.router.url.split("/")[1],this.antiguedad=new Date,this.route.paramMap.subscribe(e=>{const i=e.get("idUsuario");"*"!==i?(this.updateUserInfo(+i),this.registerForm=this.formBuilder.group({email:[{value:this.usuario.email,disabled:!0}],alias:["",[a.r.required,a.r.maxLength(100),a.r.minLength(2),a.r.pattern("^([0-9a-zA-Z\xc0-\xfa.,&-_!\xa1\" ' ]+)$")]],activo:["Si",a.r.required],tipo:[this.usuario.tipoUsuario]})):(this.antiguedad=new Date,this.registerForm=this.formBuilder.group({email:[{value:this.usuario.email,disabled:!1},[a.r.required,a.r.email,a.r.pattern("^[a-z0-9A-Z._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],alias:["",[a.r.required,a.r.maxLength(100),a.r.minLength(2),a.r.pattern("^([0-9a-zA-Z\xc0-\xfa.,&-_!\xa1\"' ]+)$")]],activo:["Si",a.r.required],tipo:[this.usuario.tipoUsuario]}),this.loading=!1)})}updateUserInfo(e){this.errorMessages=[],this.usuarioServicio.getUsuario(e).toPromise().then(e=>{this.usuario=e,this.loading=!1,this.antiguedad=new Date(e.datosUsuario.ANTIGUEDAD);for(const i of e.roles)this.roles[i]=!0}).catch(e=>this.errorMessages.push(e))}toggleUserType(){this.usuario.tipoUsuario="INTERNO"===this.usuario.tipoUsuario?"EXTERNO":"INTERNO"}selector(){this.modalConfirmacion.hide(),void 0!==this.usuario.id?this.update():this.register()}openModal(){this.mensajeModal=void 0!==this.usuario.id?"\xbfActualizar usuario?":"\xbfRegistrar usuario?",this.modalConfirmacion.show()}decline(){this.modalConfirmacion.hide()}get f(){return this.registerForm.controls}update(){console.log("nombres: "+this.nombreRoles),this.loading=!0,console.log(this.usuario.noEmpleado),this.registerForm.invalid?this.loading=!1:(this.errorMessages=[],this.usuarioServicio.actualizaUser(this.usuario).toPromise().then(e=>Object(t.a)(this,void 0,void 0,(function*(){console.log(e),void 0!==this.usuario.datosUsuario.ANTIGUEDAD&&(this.usuario.datosUsuario.ANTIGUEDAD=this.datepipe.transform(this.antiguedad,"yyyy-MM-dd"));for(const o in this.usuario.datosUsuario)if(void 0!==o&&void 0!==this.usuario.datosUsuario[o]&&""!==this.usuario.datosUsuario[o]&&null!==this.usuario.datosUsuario[o]&&e.datosUsuario[o]!==this.usuario.datosUsuario[o]){const e=new r(o,this.usuario.datosUsuario[o]);yield this.usuarioServicio.actualizaDatoUsuario(this.usuario.id,o,e).toPromise()}if("administracion"===this.params.module){console.log("Updating user roles");var i=0;for(const e in this.roles)!1===this.roles[e]&&this.usuario.roles.find(i=>i===e)&&(yield this.usuarioServicio.deleteRoles(this.usuario.id,this.nombreRoles[i]).toPromise()),i++;for(const e in this.roles)!0!==this.roles[e]||this.usuario.roles.find(i=>i===e)||(yield this.usuarioServicio.insertarRoles(this.usuario.id,new s(e)).toPromise())}this.submitted=!0,this.params.success="El usuario ha sido actualizado satisfactoriamente."}))).then(()=>this.router.navigate([`../${this.params.module}/usuarios`])).catch(e=>{this.errorMessages.push(e),this.loading=!1}))}register(){let e=0;this.loading=!0,this.registerForm.invalid?this.loading=!1:(this.errorMessages=[],this.usuario.datosUsuario.ANTIGUEDAD=this.datepipe.transform(this.antiguedad,"yyyy-MM-dd"),this.usuarioServicio.insertarUsuario(this.usuario).toPromise().then(i=>Object(t.a)(this,void 0,void 0,(function*(){e=i.id;for(const e in this.usuario.datosUsuario)if(void 0!==e&&void 0!==this.usuario.datosUsuario[e]){const o=this.usuario.datosUsuario[e];yield this.usuarioServicio.insertarDatoUsuario(i.id,new r(e,o)).toPromise()}for(const e in this.roles)!0===this.roles[e]&&(yield this.usuarioServicio.insertarRoles(i.id,new s(e)).toPromise());this.submitted=!0}))).then(()=>this.router.navigate([`../${this.params.module}/usuarios`])).catch(e=>{this.errorMessages.push(e),this.loading=!1}))}updateRoles(){return Object(t.a)(this,void 0,void 0,(function*(){for(const e in this.roles)!1===this.roles[e]&&this.usuario.roles.find(i=>i===e)&&(yield this.usuarioServicio.deleteRoles(this.usuario.id,this.roles[e]).toPromise());for(const e in this.roles)!0!==this.roles[e]||this.usuario.roles.find(i=>i===e)||(yield this.usuarioServicio.insertarRoles(this.usuario.id,new s(e)).toPromise())}))}clearInput(){this.usuario=new n.a,this.params.success="",this.errorMessages=[],this.submitted=!1}}return e.\u0275fac=function(i){return new(i||e)(b.Jb(c.f),b.Jb(l.a),b.Jb(u.a),b.Jb(a.c),b.Jb(l.c))},e.\u0275cmp=b.Db({type:e,selectors:[["cybord-usuario"]],viewQuery:function(e,i){var o;1&e&&b.zc(f,!0),2&e&&b.lc(o=b.Xb())&&(i.modalConfirmacion=o.first)},decls:128,vars:36,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-12","col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body"],["class","alert alert-warning","role","alert",4,"ngIf"],[1,"col-xs-12","col-sm-12","col-md-8"],[3,"formGroup"],[1,"form-group","row"],[1,"col-md-3","col-form-label"],[1,"col-md-9"],["type","text","formControlName","alias","placeholder","Sobrenombre o alias",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","email","placeholder","Correo Electronico",1,"form-control",3,"ngClass","ngModel","ngModelChange"],[1,"col-md-7"],[1,"switch","switch-label","switch-primary"],["type","checkbox","formControlName","activo",1,"switch-input",3,"checked","ngModel","ngModelChange"],["data-checked","ON","data-unchecked","OFF",1,"switch-slider"],[1,"col-md-7","col-form-label"],[1,"form-check"],["formControlName","tipo","type","radio","name","tipo","id","radio3","value","INTERNO",1,"form-check-input",3,"checked","click"],["for","radio3",1,"form-check-label"],["formControlName","tipo","type","radio","name","tipo","id","radio4","value","EXTERNO",1,"form-check-input",3,"checked","click"],["for","radio4",1,"form-check-label"],["action","","method","post","enctype","multipart/form-data",1,"form-horizontal"],["type","number","id","no-emp","name","text-inputa","placeholder","No empleado",1,"form-control",3,"ngModel","ngModelChange"],["id","office","name","office",1,"form-control",3,"ngModel","ngModelChange"],["value","*"],["value","1"],["value","2"],["value","3"],["value","4"],["type","number","id","quantity","name","text-inputafg","min","1","placeholder","1.00",1,"form-control",3,"ngModel","ngModelChange"],["id","start-date","type","text","bsDatepicker","",1,"form-control",3,"bsValue","bsValueChange"],["dp","bsDatepicker"],[1,"col-xs-12","col-sm-12","col-md-4"],[1,"col-md-9","col-form-label"],["type","checkbox","value","option1","id","checkbox1",1,"form-check-input",3,"ngModel","disabled","ngModelChange"],["for","checkbox1",1,"form-check-label"],["type","checkbox","value","option1","id","checkbox2",1,"form-check-input",3,"ngModel","disabled","ngModelChange"],["for","checkbox2",1,"form-check-label"],[1,"form-check","checkbox"],["type","checkbox","value","option1","id","checkbox3",1,"form-check-input",3,"ngModel","disabled","ngModelChange"],["for","checkbox3",1,"form-check-label"],["type","checkbox","value","option1","id","checkbox4",1,"form-check-input",3,"ngModel","disabled","ngModelChange"],["for","checkbox4",1,"form-check-label"],["type","checkbox","value","option1","id","checkbox5",1,"form-check-input",3,"ngModel","disabled","ngModelChange"],["for","checkbox5",1,"form-check-label"],["type","checkbox","value","option1","id","checkbox6",1,"form-check-input",3,"ngModel","disabled","ngModelChange"],["for","checkbox6",1,"form-check-label"],["class","alert alert-success","role","alert",4,"ngIf"],[1,"card-footer"],[1,"float-right","slide_2"],["class","btn btn-primary",3,"disabled","click",4,"ngIf"],["bsModal","","id","modalConfirmacion","tabindex","-1","role","dialog","aria-labelledby","modalConfirmacion","aria-hidden","true",1,"modal","fade"],["modalConfirmacion","bs-modal"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","modalConfirmacionLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-secondary",3,"click"],["role","alert",1,"alert","alert-warning"],[4,"ngFor","ngForOf"],[1,"invalid-feedback"],[4,"ngIf"],["role","alert",1,"alert","alert-success"],[1,"btn","btn-primary",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"fa","fa-spinner","fa-spin"]],template:function(e,i){1&e&&(b.Pb(0,"div",0),b.Pb(1,"div",1),b.Pb(2,"div",2),b.Pb(3,"div",3),b.Pb(4,"div",4),b.Pb(5,"strong"),b.vc(6,"Usuarios"),b.Ob(),b.Ob(),b.Pb(7,"div",5),b.uc(8,m,2,1,"div",6),b.Pb(9,"div",1),b.Pb(10,"div",7),b.Pb(11,"form",8),b.Pb(12,"div",9),b.Pb(13,"strong",10),b.vc(14,"Nombre"),b.Ob(),b.Pb(15,"div",11),b.Pb(16,"input",12),b.Wb("ngModelChange",(function(e){return i.usuario.nombre=e})),b.Ob(),b.uc(17,I,5,4,"div",13),b.Ob(),b.Ob(),b.Pb(18,"div",9),b.Pb(19,"strong",10),b.vc(20,"Email"),b.Ob(),b.Pb(21,"div",11),b.Pb(22,"input",14),b.Wb("ngModelChange",(function(e){return i.usuario.email=e})),b.Ob(),b.uc(23,k,4,3,"div",13),b.Ob(),b.Ob(),b.Pb(24,"div",9),b.Pb(25,"strong",10),b.vc(26,"Usuario activo"),b.Ob(),b.Pb(27,"div",15),b.Pb(28,"label",16),b.Pb(29,"input",17),b.Wb("ngModelChange",(function(e){return i.usuario.activo=e})),b.Ob(),b.Kb(30,"span",18),b.Ob(),b.Ob(),b.Ob(),b.Pb(31,"div",9),b.Pb(32,"strong",10),b.vc(33,"Tipo Usuario"),b.Ob(),b.Pb(34,"div",19),b.Pb(35,"div",20),b.Pb(36,"input",21),b.Wb("click",(function(){return i.toggleUserType()})),b.Ob(),b.Pb(37,"label",22),b.vc(38," INTERNO "),b.Ob(),b.Ob(),b.Pb(39,"div",20),b.Pb(40,"input",23),b.Wb("click",(function(){return i.toggleUserType()})),b.Ob(),b.Pb(41,"label",24),b.vc(42," EXTERNO "),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(43,"form",25),b.Pb(44,"div",9),b.Pb(45,"strong",10),b.vc(46,"No. Empleado"),b.Ob(),b.Pb(47,"div",11),b.Pb(48,"input",26),b.Wb("ngModelChange",(function(e){return i.usuario.noEmpleado=e})),b.Ob(),b.Ob(),b.Ob(),b.Pb(49,"div",9),b.Pb(50,"strong",10),b.vc(51,"Oficina"),b.Ob(),b.Pb(52,"div",15),b.Pb(53,"select",27),b.Wb("ngModelChange",(function(e){return i.usuario.datosUsuario.OFICINA=e})),b.Pb(54,"option",28),b.vc(55,"Seleccionar"),b.Ob(),b.Pb(56,"option",29),b.vc(57,"Oficina #1"),b.Ob(),b.Pb(58,"option",30),b.vc(59,"Oficina #2"),b.Ob(),b.Pb(60,"option",31),b.vc(61,"Oficina #3"),b.Ob(),b.Pb(62,"option",32),b.vc(63,"Oficina #4"),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(64,"div",9),b.Pb(65,"strong",10),b.vc(66,"Sueldo"),b.Ob(),b.Pb(67,"div",15),b.Pb(68,"input",33),b.Wb("ngModelChange",(function(e){return i.usuario.datosUsuario.SUELDO=e})),b.Ob(),b.Ob(),b.Ob(),b.Pb(69,"div",9),b.Pb(70,"strong",10),b.vc(71,"Fecha Antiguiedad"),b.Ob(),b.Pb(72,"div",15),b.Pb(73,"input",34,35),b.Wb("bsValueChange",(function(e){return i.antiguedad=e})),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(75,"div",36),b.Pb(76,"div",9),b.Pb(77,"label",10),b.Pb(78,"strong"),b.vc(79,"Roles"),b.Ob(),b.Ob(),b.Pb(80,"div",37),b.Pb(81,"div",20),b.Pb(82,"input",38),b.Wb("ngModelChange",(function(e){return i.roles.USUARIO=e})),b.Ob(),b.Pb(83,"label",39),b.vc(84," USUARIO "),b.Ob(),b.Ob(),b.Pb(85,"div",20),b.Pb(86,"input",40),b.Wb("ngModelChange",(function(e){return i.roles.RECURSOS_HUMANOS=e})),b.Ob(),b.Pb(87,"label",41),b.vc(88," RECURSOS HUMANOS "),b.Ob(),b.Ob(),b.Pb(89,"div",42),b.Pb(90,"input",43),b.Wb("ngModelChange",(function(e){return i.roles.CONTABILIDAD=e})),b.Ob(),b.Pb(91,"label",44),b.vc(92," CONTABILIDAD "),b.Ob(),b.Ob(),b.Pb(93,"div",42),b.Pb(94,"input",45),b.Wb("ngModelChange",(function(e){return i.roles.TESORERIA=e})),b.Ob(),b.Pb(95,"label",46),b.vc(96," TESORERIA "),b.Ob(),b.Ob(),b.Pb(97,"div",42),b.Pb(98,"input",47),b.Wb("ngModelChange",(function(e){return i.roles.GERENCIA=e})),b.Ob(),b.Pb(99,"label",48),b.vc(100," GERENCIA "),b.Ob(),b.Ob(),b.Pb(101,"div",42),b.Pb(102,"input",49),b.Wb("ngModelChange",(function(e){return i.roles.ADMINISTRACION=e})),b.Ob(),b.Pb(103,"label",50),b.vc(104," ADMINISTRACION "),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Kb(105,"br"),b.uc(106,U,2,1,"p",51),b.Ob(),b.Pb(107,"div",52),b.Pb(108,"div",53),b.uc(109,E,3,2,"button",54),b.uc(110,N,3,2,"button",54),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(111,"div",55,56),b.Pb(113,"div",57),b.Pb(114,"div",58),b.Pb(115,"div",59),b.Pb(116,"h5",60),b.vc(117,"Confirmacion"),b.Ob(),b.Pb(118,"button",61),b.Wb("click",(function(){return i.selector()})),b.Pb(119,"span",62),b.vc(120,"\xd7"),b.Ob(),b.Ob(),b.Ob(),b.Pb(121,"div",63),b.vc(122),b.Ob(),b.Pb(123,"div",64),b.Pb(124,"button",65),b.Wb("click",(function(){return i.selector()})),b.vc(125,"Si"),b.Ob(),b.Pb(126,"button",66),b.Wb("click",(function(){return i.decline()})),b.vc(127,"no"),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob()),2&e&&(b.xb(8),b.ec("ngIf",i.errorMessages.length>0),b.xb(3),b.ec("formGroup",i.registerForm),b.xb(5),b.ec("ngClass",b.hc(32,S,i.submitted&&i.f.alias.errors))("ngModel",i.usuario.nombre),b.xb(1),b.ec("ngIf",i.submitted&&i.f.alias.errors),b.xb(5),b.ec("ngClass",b.hc(34,S,i.submitted&&i.f.email.errors))("ngModel",i.usuario.email),b.xb(1),b.ec("ngIf",i.submitted&&i.f.email.errors),b.xb(6),b.ec("checked",i.usuario.activo)("ngModel",i.usuario.activo),b.xb(7),b.ec("checked","INTERNO"===i.usuario.tipoUsuario),b.xb(4),b.ec("checked","EXTERNO"===i.usuario.tipoUsuario),b.xb(8),b.ec("ngModel",i.usuario.noEmpleado),b.xb(5),b.ec("ngModel",i.usuario.datosUsuario.OFICINA),b.xb(15),b.ec("ngModel",i.usuario.datosUsuario.SUELDO),b.xb(5),b.ec("bsValue",i.antiguedad),b.xb(9),b.ec("ngModel",i.roles.USUARIO)("disabled","administracion"!==i.params.module),b.xb(4),b.ec("ngModel",i.roles.RECURSOS_HUMANOS)("disabled","administracion"!==i.params.module),b.xb(4),b.ec("ngModel",i.roles.CONTABILIDAD)("disabled","administracion"!==i.params.module),b.xb(4),b.ec("ngModel",i.roles.TESORERIA)("disabled","administracion"!==i.params.module),b.xb(4),b.ec("ngModel",i.roles.GERENCIA)("disabled","administracion"!==i.params.module),b.xb(4),b.ec("ngModel",i.roles.ADMINISTRACION)("disabled","administracion"!==i.params.module),b.xb(4),b.ec("ngIf",i.params.success.length>0),b.xb(3),b.ec("ngIf",void 0===i.usuario.id),b.xb(1),b.ec("ngIf",void 0!==i.usuario.id),b.xb(12),b.xc(" ",i.mensajeModal," "))},directives:[c.m,a.t,a.j,a.e,a.b,a.i,a.d,c.k,a.a,a.o,a.k,a.n,a.l,a.q,a.m,a.s,d.b,d.a,g.a,c.l],styles:[""]}),e})()}}]);
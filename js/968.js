"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[968],{95343:(t,e,i)=>{i.d(e,{c:()=>u});var s=i(81396),n=i(35175),o=i(77453),r=i(97517),a=i(12241);class h extends s.Mesh{constructor(t,e,i=a.V9.endpointSelected,s=a.V9.endpointDefault){super(t,e),this.selectedSize=i,this.defaultSize=s,this.currentSize=a.V9.endpointDefault,this.currentSize=this.defaultSize,this.scale.set(a.Ey,a.Ey,a.Ey)}dispose(){this.material.dispose(),this.geometry.dispose()}billboardScale(t,e,i){const s=(0,r.mY)(e,t,this.position,i,.5),n=Math.max(Math.min(1/s*this.currentSize,a.g4),a.Ey);this.scale.set(n,n,n)}updateSelected(t){this.currentSize=t?this.selectedSize:this.defaultSize}}var d=i(72803),A=i(14778),c=i(25565);class u{constructor(t,e,i,a,u){this.lineMaterial=i,this.options=a,this.endpointMaterial=u,this.startPosition=new s.Vector3,this.endPosition=new s.Vector3,this.endpoints=!1,this.isVisible=!0,this.meshToLinePartMap={},this.opacity=t=>(this.endpointMaterial&&this.endpointMaterial.setOpacity(t),this.lineMesh.material.setOpacity(t),this),this.updatePositions=(t,e)=>(this.startPosition.copy(t),this.endPosition.copy(e),this.options.beforeUpdatePositions&&(t=this.options.beforeUpdatePositions(t),e=this.options.beforeUpdatePositions(e)),this.lineMesh.geometry.setPositions([t.x,t.y,t.z,e.x,e.y,e.z]),this.endpoints&&(this.endMesh.position.copy(e),this.startMesh.position.copy(t),this.lastBillboardOptions&&this.updateBillboard(this.lastBillboardOptions)),this.lineMesh.material.dashed&&this.lineMesh.computeLineDistances(),this),this.updateBillboard=t=>{if(this.endpoints&&(t.rotation&&(this.endMesh.quaternion.copy(t.rotation),this.startMesh.quaternion.copy(t.rotation)),t.position&&t.projection&&!(0,r.s1)(t.projection))){const e=this.lineMesh.material.resolution.y;this.endMesh.billboardScale(t.position,t.projection,e),this.startMesh.billboardScale(t.position,t.projection,e)}return this.lastBillboardOptions=t,this},this.updateSelected=t=>(this.lineMesh.material.updateSelected(t),this.endpoints&&(this.endMesh.material.updateHovered(t),this.endMesh.updateSelected(t),this.startMesh.updateSelected(t)),this),this.setRenderLayer=t=>{this.children.forEach((e=>e.layers.mask=t.mask))},this.setRenderOrder=t=>{this.children.forEach((e=>e.renderOrder=t))},this.updateResolution=(t,e)=>(this.lineMesh.material.resolution.set(t,e),this),this.hide=()=>{this.options.onHide&&this.options.onHide(),this.isVisible=!1},this.show=()=>{this.options.onShow&&this.options.onShow(),this.isVisible=!0},this.toggle=t=>(t?this.show():this.hide(),this),this.dispose=()=>{this.options.onHide&&this.options.onHide(),this.lineMesh.geometry.dispose(),this.lineMesh.material.dispose(),this.endMesh&&this.endMesh.dispose(),this.startMesh&&this.startMesh.dispose(),this.meshToLinePartMap={}},this.overrideLineMaterial=t=>{this.lineMesh.material=t},this.restoreLineMaterial=()=>{this.lineMesh.material=this.lineMaterial},this.startPosition.copy(t),this.endPosition.copy(e),this.lineMesh=new n.x(new o.L,i),this.lineMesh.matrixAutoUpdate=!1,this.lineMesh.part=A.B.line,this.lineMesh.renderOrder=d.z.lines,this.meshToLinePartMap[A.B.line]=this.lineMesh,u&&(this.endpoints=!0,this.endMesh=new h((0,c.fc)(),u),this.endMesh.part=A.B.end,this.endMesh.renderOrder=d.z.endpoints,this.meshToLinePartMap[A.B.end]=this.endMesh,this.startMesh=new h((0,c.fc)(),u),this.startMesh.part=A.B.start,this.startMesh.renderOrder=d.z.endpoints,this.meshToLinePartMap[A.B.start]=this.startMesh),this.updatePositions(this.startPosition,this.endPosition),this.updateSelected(!1)}get currentOpacity(){return this.lineMesh.material.getOpacity()}getMesh(t){return this.meshToLinePartMap[t]}get children(){return Object.keys(this.meshToLinePartMap).map((t=>this.meshToLinePartMap[t]))}get visible(){return this.isVisible}}},14778:(t,e,i)=>{var s;i.d(e,{B:()=>s}),function(t){t.line="line",t.start="start",t.end="end"}(s||(s={}))},76968:(t,e,i)=>{i.r(e),i.d(e,{default:()=>M,makeEndpointMaterial:()=>b,makeLineMaterial:()=>y});var s=i(933),n=i(4763),o=i(81396),r=i(95343),a=i(71472);var h;!function(t){t[t.LINE_DEFAULT=0]="LINE_DEFAULT",t[t.LINE_HOVER=1]="LINE_HOVER",t[t.END_DEFAULT=2]="END_DEFAULT",t[t.END_HOVER=3]="END_HOVER"}(h||(h={}));class d{constructor(){const t=(0,a.p)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAJ1BMVEUAAAD///////////////////////////////////////////////+uPUo5AAAADHRSTlMA4ZNBI+fLwLSGYE5aqgIgAAAAlUlEQVQoz2MAAy91mYNFSxjgwEjmDBAcVIbxPWPOgMHRKRA+c88ZKDhhABbYdgYOssEKchACx0BKPM4ggRagwBxkgZNAHTHIAkcNGJjOoAAFBkdUARGGNagCpxh0UAUOMdSgChxnkEEVOMhwBg1gCGBowTAUw1oMh2E4HcNzGN5HDyCMIMQIZPRowIgozKjEjGyM5AAACSg5ooJJElsAAAAASUVORK5CYII="),e=(0,a.p)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAPFBMVEUAAAD/AVL/AVL/AVL/AVL/AVL/AVL/AVL/AVL/AVL/AVL/AVL/////+fr/5er/0tv/ytX/iaH/dJL/cpA84uD/AAAAC3RSTlMA45NBI8vAtIZgTrS8MGcAAAC5SURBVDjLhVPtDoQgDBuICPKpvP+7Xs4t6LlL2j9GWtYCG91w0XqTkvE2OtJYrEkTxi4v2gWhpyS4n+1bUtgeRfY1/cG6z/3Ma8Ui/rP+6LWU2sd04RxBfs+WBe2UpXAZSP4jP3DIWb4m9ua1whI5w/XzC+xiHEWWtreg8XoUh5EVhnj469u1oF+EJ45QtaByCGKrogWFGSiAFjAkPCa8KHjV6LHgc6OGgS2Hmha2PR4cPHp4eOH4fwAGdiPh+RS0GAAAAABJRU5ErkJggg=="),i=(0,a.p)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAIBAMAAABqq+CcAAAAD1BMVEUAAAD///////////////+PQt5oAAAABHRSTlMAy4AzqjrmZgAAABRJREFUCNdjAAMjERcXR2Uwc4AEAIn2CZHn9cAcAAAAAElFTkSuQmCC"),s=(0,a.p)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAIBAMAAABqq+CcAAAAGFBMVEUAAAD/AVL/AVL/AVL/////AVL/r7//OWiicYg+AAAABHRSTlMAy4AzqjrmZgAAABlJREFUCNdjYGBgVgwtcwGC9FAhAyB3YAQAVg4X6a0jaXAAAAAASUVORK5CYII=");this.textures={[h.LINE_DEFAULT]:i,[h.LINE_HOVER]:s,[h.END_DEFAULT]:t,[h.END_HOVER]:e},i.minFilter=o.LinearFilter,s.minFilter=o.LinearFilter,t.minFilter=o.LinearFilter,e.minFilter=o.LinearFilter}get(t){return this.textures[t]}dispose(){for(const t in this.textures){const e=Number(t);this.get(e).dispose()}}}var A=i(91435);class c extends o.RawShaderMaterial{constructor(t,e,i){const s=o.UniformsUtils.clone(A.T.endpoint.uniforms);super({fragmentShader:A.T.endpoint.fragmentShader,vertexShader:A.T.endpoint.vertexShader,uniforms:s,name:"LineEndpointMaterial",transparent:!0,depthWrite:!1,depthTest:!0}),this.color=t,this.defaultTex=e,this.hoverTex=i,this.uniforms.bg.value=e,this.uniforms.color.value.copy(this.color)}clone(){return new c(this.color,this.defaultTex,this.hoverTex).copy(this)}setOpacity(t){this.uniforms&&t!==this.uniforms.opacity.value&&(this.uniforms.opacity.value=t)}getOpacity(){return this.uniforms.opacity.value}updateHovered(t){const e=t?this.hoverTex:this.defaultTex;this.uniforms.bg.value!==e&&(this.uniforms.bg.value=e)}}var u=i(51201),l=i(57793),p=i(1945),f=i(23998),m=i(12241);let g=null;function B(){return g||(g=new d),g}class M extends s.Y{constructor(){super(...arguments),this.name="lines"}async init(t,e){const i=await e.getModuleBySymbol(n.Aj);this.scene=i.getScene(),this.canvas=await e.market.waitForData(f.W),this.cameraData=await e.market.waitForData(l.M),this.bindings.push(this.canvas.onChanged(this.onCanvasChange.bind(this))),this.cameraPosition=new o.Vector3,this.segments=[]}onUpdate(){this.cameraPosition.copy(this.cameraData.pose.position)}dispose(t){super.dispose(t),this.segments.forEach((t=>t.dispose()))}makeLine(t,e,i,s,n=(()=>!1)){const o=n()?m.iV.OFFSET_TOWARDS_CAMERA:0,a=n()?t=>this.cameraPosition.clone().sub(t).setLength(o).add(t):t=>t,h=new r.c(t,e,i,{beforeUpdatePositions:a,onShow:()=>h.children.forEach((t=>this.scene.addChild(p.a.Root,t))),onHide:()=>h.children.forEach((t=>this.scene.removeChild(p.a.Root,t)))},s);return h.updateResolution(this.canvas.width,this.canvas.height),h.opacity(1),h.show(),h.updatePositions(t,e),this.segments.push(h),h}makeLineMaterial(t,e,i={},s,n){return y(t,e,i,s,n)}makeEndpointMaterial(t,e,i){return b(t,e,i)}onCanvasChange(t){for(const e of this.segments)e.updateResolution(t.width,t.height)}}function b(t,e,i){const s=i||B().get(h.END_HOVER),n=e||B().get(h.END_DEFAULT);return new c(new o.Color(t),n,s)}function y(t,e,i={},s,n){const r=n||B().get(h.LINE_HOVER),a=s||B().get(h.LINE_DEFAULT),d=new o.Vector2(window.innerWidth,window.innerHeight);return e?new u.Y(Object.assign({color:new o.Color(t),resolution:d},i),r,a):new u.Y(Object.assign({color:new o.Color(t)},i))}},35175:(t,e,i)=>{i.d(e,{x:()=>o});var s=i(81396),n=i(14778);class o extends s.Mesh{constructor(t,e){super(),this.type="Line",this.part=n.B.line,this.computeLineDistances=(()=>{const t=new s.Vector3,e=new s.Vector3;return()=>{const i=this.geometry,n=i.attributes.instanceStart,o=i.attributes.instanceEnd,r=new Float32Array(2*n.data.count);for(let i=0,s=0,a=n.data.count;i<a;i++,s+=2)t.fromBufferAttribute(n,i),e.fromBufferAttribute(o,i),r[s]=0===s?0:r[s-1],r[s+1]=r[s]+t.distanceTo(e);return this.instanceDistanceBuffer?(this.instanceDistanceBuffer.set(r,0),this.instanceDistanceBuffer.needsUpdate=!0):(this.instanceDistanceBuffer=new s.InstancedInterleavedBuffer(r,2,1),i.setAttribute("instanceDistanceStart",new s.InterleavedBufferAttribute(this.instanceDistanceBuffer,1,0,!1)),i.setAttribute("instanceDistanceEnd",new s.InterleavedBufferAttribute(this.instanceDistanceBuffer,1,1,!1))),this}})(),this.geometry=t,this.material=e}copy(t){throw Error("not implemented")}}},77453:(t,e,i)=>{i.d(e,{L:()=>n});var s=i(83563);class n extends s.z{constructor(){super(),this.type="LineGeometry",this.isLineGeometry=!0}setPositions(t){const e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return s.z.prototype.setPositions.call(this,i),this}setColors(t){const e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return s.z.prototype.setColors.call(this,i),this}fromLine(t){throw new Error("LineGeometry.fromLine not converted to TS yet")}copy(t){return this}}},83563:(t,e,i)=>{i.d(e,{z:()=>n});var s=i(81396);class n extends s.InstancedBufferGeometry{constructor(){super(),this.type="LineSegmentsGeometry";this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.Float32BufferAttribute([0,1,.5,1,0,.5,.5,.5,0,0,.5,0,0,1,.5,1],2))}applyMatrix(t){const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return void 0!==e&&void 0!==i&&(e.applyMatrix4(t),i.applyMatrix4(t),this.positionBuffer.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(t){let e;return t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t)),e&&(this.positionBuffer?(this.positionBuffer.set(e,0),this.positionBuffer.needsUpdate=!0):(this.positionBuffer=new s.InstancedInterleavedBuffer(e,6,1),this.setAttribute("instanceStart",new s.InterleavedBufferAttribute(this.positionBuffer,3,0,!1)),this.setAttribute("instanceEnd",new s.InterleavedBufferAttribute(this.positionBuffer,3,3,!1))),this.computeBoundingBox(),this.computeBoundingSphere()),this}setColors(t){let e;return t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t)),e&&(this.colorBuffer?(this.colorBuffer.set(e,0),this.colorBuffer.needsUpdate=!0):(this.colorBuffer=new s.InstancedInterleavedBuffer(e,6,1),this.setAttribute("instanceColorStart",new s.InterleavedBufferAttribute(this.colorBuffer,3,0,!1)),this.setAttribute("instanceColorEnd",new s.InterleavedBufferAttribute(this.colorBuffer,3,3,!1)))),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new s.WireframeGeometry(t.geometry)),this}fromLineSegements(t){const e=t.geometry;return e instanceof s.BufferGeometry&&this.setPositions(e.position.array),this}computeBoundingBox(){this.boundingBox||(this.boundingBox=new s.Box3),this.box||(this.box=new s.Box3);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;void 0!==t&&void 0!==e&&(this.boundingBox.setFromBufferAttribute(t),this.box.setFromBufferAttribute(e),this.boundingBox.union(this.box))}computeBoundingSphere(){this.tempVector||(this.tempVector=new s.Vector3),this.boundingSphere||(this.boundingSphere=new s.Sphere),this.boundingBox||this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(void 0!==t&&void 0!==e){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let n=0,o=t.count;n<o;n++)this.tempVector.fromBufferAttribute(t,n),s=Math.max(s,i.distanceToSquared(this.tempVector)),this.tempVector.fromBufferAttribute(e,n),s=Math.max(s,i.distanceToSquared(this.tempVector));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}}}}]);
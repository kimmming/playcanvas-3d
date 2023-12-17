var BoxPlacement=pc.createScript("boxPlacement");BoxPlacement.attributes.add("boxEntity",{type:"entity",description:"The entity to be spawned after clicking."}),BoxPlacement.attributes.add("cameraEntity",{type:"entity",description:"The main camera entity in the scene."}),BoxPlacement.prototype.initialize=function(){this.app.mouse.on("mousedown",this.onMouseDown,this),this.on("destroy",(function(){this.app.mouse.off("mousedown",this.onMouseDown,this)}),this)},BoxPlacement.prototype.onMouseDown=function(t){this.fireRaycast(t)},BoxPlacement.prototype.fireRaycast=function(t){let e=this.cameraEntity.getPosition(),o=this.cameraEntity.camera.screenToWorld(t.x,t.y,this.cameraEntity.camera.farClip),i=this.app.systems.rigidbody.raycastFirst(e,o);if(console.log("result",i),i){let t=i.point;this.spawnBox(t)}},BoxPlacement.prototype.spawnBox=function(t){let e=this.boxEntity.clone();this.boxEntity.parent.addChild(e),t.x+=.3,console.log("point.y",t.x),e.rigidbody.teleport(t)};var Network=pc.createScript("network");Network.id=null,Network.socket=null,Network.prototype.initialize=function(){this.player=this.app.root.findByName("Player"),this.other=this.app.root.findByName("Other")},Network.prototype.update=function(t){};var Movement=pc.createScript("movement");Movement.attributes.add("playerSpeed",{type:"number",default:30,title:"Player Speed"}),Movement.prototype.initialize=function(){this.force=new pc.Vec3},Movement.prototype.update=function(e){let t=this.entity.forward,i=this.entity.right,r=this.app;x=0,z=0,r.keyboard.isPressed(pc.KEY_A)&&(x-=i.x,z-=i.z),r.keyboard.isPressed(pc.KEY_D)&&(x+=i.x,z+=i.z),r.keyboard.isPressed(pc.KEY_W)&&(x+=t.x,z+=t.z),r.keyboard.isPressed(pc.KEY_S)&&(x-=t.x,z-=t.z),0===x&&0===z||(x*=e,z*=e,this.force.set(x,0,z).normalize().scale(this.playerSpeed),this.entity.rigidbody.applyForce(this.force))};
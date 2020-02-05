AFRAME.registerComponent('registerevents', {
  init: function () {
    const marker = this.el;
    marker.addEventListener('markerFound', (e) => {
      let pos = marker.object3D.getWorldPosition();
      alert(pos.x+" "+pos.y+" "+pos.z);
      pos = marker.object3D.position;
      alert(pos.x+" "+pos.y+" "+pos.z);

      let pikumin = document.createElement("a-obj-model");
      pikumin.setAttribute("id", "pikumin");
      pikumin.setAttribute("src"," #piku-obj");
      pikumin.setAttribute("mtl", "#piku-mtl");
      pikumin.setAttribute("position", pos.x+" "+pos.y+" "+pos.z);
      pikumin.setAttribute("rotation", "0 -180 0");

      let text = document.createElement("a-text");
      text.setAttribute("id", "text");
      text.setAttribute("value", "meganepikumin");
      text.setAttribute("align", "center");
      text.setAttribute("position", pos.x+" "+pos.y+" "+pos.z);
      text.setAttribute("rotation", "0 0 0");
      text.setAttribute("color", "#F22A27");

      let scene = document.getElementById("scene");
      scene.appendChild(pikumin);
      scene.appendChild(text);
    });
  }
});

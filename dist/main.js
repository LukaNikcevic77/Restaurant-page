(()=>{"use strict";const e=document.createElement("h1"),t=document.createElement("p"),n=document.createElement("img"),d=document.createElement("img"),c=document.createElement("img");const a=document.createElement("h1"),i=document.createElement("h1"),o=document.createElement("h1"),s=document.createElement("h1"),l=document.createElement("p"),m=document.createElement("p"),r=document.createElement("p"),p=document.createElement("p"),u=document.createElement("div"),h=document.createElement("div"),C=document.createElement("footer"),L=document.createElement("h1"),g=document.createElement("i");document.querySelector("#content");const E=document.createElement("h1"),b=document.createElement("p"),v=document.createElement("img");const f=document.getElementById("n1"),x=document.getElementById("n2"),k=document.getElementById("n3"),y=document.getElementById("content"),A=document.createElement("div");function w(f){switch(f){case"home":console.log("Usli u switch"),x=A,console.log("Hej mico"),E.classList.add("Title"),E.textContent="情熱",b.classList.add("desc"),b.textContent="Delivering the hearth of Japan is the mission we feel passionate about!",v.classList.add("img_1"),v.setAttribute("src","/restourantBigger.jpeg"),v.setAttribute("srcset","/restourantBigger.jpeg"),function(e){console.log(e),e.appendChild(E),console.log(E),e.appendChild(b),e.appendChild(v)}(x);break;case"menu":!function(a){d.setAttribute("src","../Vector 1.svg"),d.setAttribute("id","Line-1"),c.setAttribute("src","../Vector 2.svg"),c.setAttribute("id","Line-2"),e.classList.add("Soup"),e.textContent="SOUP 25$",t.classList.add("Tea"),t.textContent="Tea 5$",n.classList.add("img_2"),n.setAttribute("src","../Menu.jpeg"),function(a){a.appendChild(n),a.appendChild(e),a.appendChild(t),a.appendChild(d),a.appendChild(c)}(a)}(A);break;case"contact":!function(e){e.classList.add("makeFlex"),a.classList.add("Owner"),a.textContent="Owner",i.classList.add("Chief"),i.textContent="Chief",o.classList.add("OwnerName"),o.textContent="Luka Nikcevic",s.classList.add("ChiefName"),s.textContent="Matsuo Momoko",l.classList.add("phoneNum"),l.textContent="tel: +382 69 546 321",m.classList.add("phoneNum"),m.textContent="tel: +382 69 248 622",r.classList.add("mailCont"),r.textContent="mail: nikcevic.luka77@gmail.com",p.classList.add("mailCont"),p.textContent="mail: thelittlepeach.23@gmail.com",u.classList.add("verticalLine"),h.classList.add("verticalLine"),g.classList.add("fa-brands"),g.classList.add("fa-github"),L.textContent="Copyrigth Ⓒ 2023 LukaNikcevic77",function(e){e.appendChild(a),e.appendChild(u),e.appendChild(o),e.appendChild(l),e.appendChild(r),e.appendChild(i),e.appendChild(h),e.appendChild(s),e.appendChild(m),e.appendChild(p),document.body.appendChild(C),C.appendChild(L),L.appendChild(g),document.body.appendChild(C)}(e)}(A)}var x}A.classList.add("contentt"),A.setAttribute("id","content"),y.remove(),A.innerHTML="",document.body.appendChild(A),w("home"),f.addEventListener("click",(e=>{console.log("Udji u switch"),y.remove(),A.innerHTML="",document.body.appendChild(A),w("home")})),x.addEventListener("click",(e=>{y.remove(),A.innerHTML="",document.body.appendChild(A),w("menu")})),k.addEventListener("click",(e=>{y.remove(),A.innerHTML="",document.body.appendChild(A),w("contact")}))})();
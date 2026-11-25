(function(){
var d=document,root=d.documentElement;
var burger=d.querySelector('.hamburger'),drawer=d.getElementById('mobDrawer'),ov=d.querySelector('.mob-overlay'),closeBtn=d.querySelector('.drawer-close');
function openD(){if(!drawer)return;drawer.hidden=false;ov.classList.add('visible');burger.setAttribute('aria-expanded','true');root.style.overflow='hidden';var f=drawer.querySelector('a,button');if(f)f.focus()}
function closeD(){if(!drawer)return;drawer.hidden=true;ov.classList.remove('visible');burger.setAttribute('aria-expanded','false');root.style.overflow='';if(burger)burger.focus()}
if(burger){burger.addEventListener('click',function(){drawer.hidden?openD():closeD()});}
if(closeBtn)closeBtn.addEventListener('click',closeD);
if(ov)ov.addEventListener('click',closeD);
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&drawer&&!drawer.hidden)closeD()});
if(drawer){drawer.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){drawer.hidden=true;ov.classList.remove('visible');root.style.overflow='';burger.setAttribute('aria-expanded','false')})});
drawer.querySelectorAll('.drawer-toggle').forEach(function(b){b.addEventListener('click',function(){var g=b.parentNode;var o=g.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')})})}
d.querySelectorAll('.faq-q').forEach(function(q){q.addEventListener('click',function(){var it=q.parentNode;var o=it.classList.toggle('open');q.setAttribute('aria-expanded',o?'true':'false')})});
window.addEventListener('resize',function(){if(window.innerWidth>768&&drawer&&!drawer.hidden)closeD()});
})();

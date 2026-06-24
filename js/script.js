// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded',function(){
const hamburger=document.querySelector('.hamburger');
const navMenu=document.querySelector('.nav-menu');

if(hamburger&&navMenu){
hamburger.addEventListener('click',function(e){
e.preventDefault();
e.stopPropagation();
navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks=document.querySelectorAll('.nav-menu a');
navLinks.forEach(link=>{
link.addEventListener('click',function(){
navMenu.classList.remove('active');
});
});

// Close menu when clicking outside
document.addEventListener('click',function(e){
if(!e.target.closest('.navbar')){
navMenu.classList.remove('active');
}
});
}
});

// Floating WhatsApp Icon dengan 3 Opsi Admin
document.addEventListener('DOMContentLoaded',function(){
// Data admin
const admins=[
{name:'Admin 1',phone:'6281233332888',number:'0812-3333-2888'},
{name:'Admin 2',phone:'6281333373086',number:'0813-3337-3086'},
{name:'Admin 3',phone:'6281216386739',number:'0812-1638-6739'}
];

// Buat floating WA container
const waContainer=document.createElement('div');
waContainer.style.cssText='position:fixed;bottom:30px;right:30px;z-index:999';

// Buat floating WA button
const floatingWA=document.createElement('button');
floatingWA.className='floating-wa';
floatingWA.innerHTML='<i class="fab fa-whatsapp"></i>';
floatingWA.title='Chat dengan kami';

// Buat menu
const waMenu=document.createElement('div');
waMenu.className='wa-menu';
admins.forEach(admin=>{
const option=document.createElement('a');
option.className='wa-option';
option.href=`https://wa.me/${admin.phone}?text=Halo%20CV%20Hidup%20Barokah%20saya%20ingin%20konsultasi`;
option.target='_blank';
option.rel='noopener noreferrer';
option.innerHTML=`
<i class="fas fa-user-circle"></i>
<div class="wa-option-text">
<strong>${admin.name}</strong>
<small>${admin.number}</small>
</div>
`;
waMenu.appendChild(option);
});

// Toggle menu
floatingWA.addEventListener('click',()=>{
waMenu.classList.toggle('show');
floatingWA.classList.toggle('active');
});

// Close menu ketika klik option
const options=waMenu.querySelectorAll('.wa-option');
options.forEach(option=>{
option.addEventListener('click',()=>{
waMenu.classList.remove('show');
floatingWA.classList.remove('active');
});
});

// Close menu ketika klik di luar
document.addEventListener('click',(e)=>{
if(!waContainer.contains(e.target)){
waMenu.classList.remove('show');
floatingWA.classList.remove('active');
}
});

waContainer.appendChild(floatingWA);
waContainer.appendChild(waMenu);
document.body.appendChild(waContainer);
});

// Gallery Filter
document.addEventListener('DOMContentLoaded',function(){
const filterBtns=document.querySelectorAll('.filter-btn');
const galeriItems=document.querySelectorAll('.galeri-item');

if(filterBtns.length>0){
filterBtns.forEach(btn=>{
btn.addEventListener('click',()=>{
filterBtns.forEach(b=>b.classList.remove('active'));
btn.classList.add('active');

const filter=btn.getAttribute('data-filter');
galeriItems.forEach(item=>{
if(filter==='all'){
item.style.display='block';
}else{
const category=item.getAttribute('data-category');
if(category===filter){
item.style.display='block';
}else{
item.style.display='none';
}
}
});
});
});
}
});

// Contact Form with WhatsApp Integration
document.addEventListener('DOMContentLoaded',function(){
const contactForm=document.getElementById('contactForm');
if(contactForm){
contactForm.addEventListener('submit',(e)=>{
e.preventDefault();
const name=document.getElementById('name').value;
const email=document.getElementById('email').value;
const phone=document.getElementById('phone').value;
const subject=document.getElementById('subject').value;
const message=document.getElementById('message').value;
const adminSelect=document.getElementById('admin').value;

// Data admin
const adminPhones={
'1':'6281233332888',
'2':'6281333373086',
'3':'6281216386739'
};

if(name&&email&&phone&&subject&&message&&adminSelect){
// Compose WhatsApp message
const waMessage=`Halo CV Hidup Barokah,

Nama: ${name}
Email: ${email}
No. Telepon: ${phone}
Subjek: ${subject}

Pesan:
${message}`;

// Encode message untuk URL
const encodedMessage=encodeURIComponent(waMessage);

// Get selected admin phone
const adminPhone=adminPhones[adminSelect];

// Open WhatsApp with composed message
const waUrl=`https://wa.me/${adminPhone}?text=${encodedMessage}`;
window.open(waUrl,'_blank');

// Reset form setelah kirim
contactForm.reset();
}else{
alert('Mohon isi semua field yang diperlukan, termasuk memilih admin');
}
});
}
});
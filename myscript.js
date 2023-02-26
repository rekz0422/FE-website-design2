// source/path img 
var v_logoNav = "https://drive.google.com/uc?export=view&id=1wCXB35LyB3o7aPQ3s4Q5AnflWC2GPF70";
var v_nav1 = "https://drive.google.com/uc?export=view&id=13VzQDLA38n_BE6n3hcp8pPBrIKgqg9pi";
var v_nav2 = "https://drive.google.com/uc?export=view&id=1_1-1D_XdAqoYmQ_daXM_HGTfF8esNrie";
var v_nav3 = "https://drive.google.com/uc?export=view&id=1JzSKtahlVALpD8cakNphP8-14XpQCmrP";
var v_nav4 = "https://drive.google.com/uc?export=view&id=1wCXB35LyB3o7aPQ3s4Q5AnflWC2GPF70";
var v_nav5 = "https://drive.google.com/uc?export=view&id=1Af-mPw4gxNmkoS89a8QmmPR3qCraPIEh";
var v_navUP = "https://drive.google.com/uc?export=view&id=1P27DnyH0SC_QjBKpSXSkbD55pAb8jBmf";

// definisikan element 
const imgLogoNav = document.getElementById("imgLogoNav"); 
const imgNav1 = document.getElementById("navI");
const imgNav2 = document.getElementById("navII");
const imgNav3 = document.getElementById("navIII");
const imgNav4 = document.getElementById("navIV");
const imgNav5 = document.getElementById("navV");
const imgNavUP = document.getElementById("navUP");

// nampilin gambar 
imgLogoNav.src = v_logoNav;
imgNav1.src = v_nav1;
imgNav2.src = v_nav2;
imgNav3.src = v_nav3;
imgNav4.src = v_nav4;
imgNav5.src = v_nav5;
imgNavUP.src = v_navUP;


// section image page 1
var var_p1_img1 = "https://drive.google.com/uc?export=view&id=1cg2QnbJpl5Z8KLicKnGgEBuUBP-eKkuX";
var var_p1_img2 = "https://drive.google.com/uc?export=view&id=1W982rK--AsuPeToJ_WfE4K5pvQCeaxAd";
var var_p1_img3 = "https://drive.google.com/uc?export=view&id=1EKi0nL7wo7VvkO2U4PgsRjT8KQGm7Awm";
var var_p1_img4 = "https://drive.google.com/uc?export=view&id=1az5SFhoq3tapA3mRyIdMDakOKrylyPWO";

const p1_img1 = document.getElementById("p1img1").src = var_p1_img1;
const p1_img2 = document.getElementById("p1img2").src = var_p1_img2;
const p1_img3 = document.getElementById("p1img3").src = var_p1_img3;
const p1_img4 = document.getElementById("p1img4").src = var_p1_img4;

// section image 2 
var var_p2_img1 = "https://source.unsplash.com/400x200?laptop&dark";
var var_p2_img2 = "https://source.unsplash.com/400x200?technology";
var var_p2_img3 = "https://source.unsplash.com/400x200?city";
var var_p2_img4 = "https://source.unsplash.com/400x200?android";

const p2_img1 = document.getElementById("p2img1").src=var_p2_img1;
const p2_img2 = document.getElementById("p2img2").src=var_p2_img2;
const p2_img3 = document.getElementById("p2img3").src=var_p2_img3;
const p2_img4 = document.getElementById("p2img4").src=var_p2_img4;

// section image 3 
var var_p3_img1 = "https://drive.google.com/uc?export=view&id=12dJGufB2D2HM7huF-GWS1DO6NBibHkL6";
const p3_img1 = document.getElementById("p3img1").src=var_p3_img1;

// loop no page 3
let table = document.querySelector('#p3table1');
let rows = table.getElementsByTagName('tr');
for (let i = 1; i < rows.length; i++) {
  let cell = rows[i].getElementsByTagName('td')[0];
  cell.innerHTML = i;
}

function donasi(){
  location.reload(1000);
  alert("terima kasih telah donasi");
}

function myYoutube(){
  alert("SUBSCRIBE ME");
  window.location = "https://www.youtube.com/@Rekz0422";
}




console.log("javascript terhubung dengan index");
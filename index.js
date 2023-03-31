
// --------------------BASIC INFORMATION---------------------------------------------------
const binfo=document.getElementById("binfo");
const basicinfo=document.getElementById("basicinfo");
binfo.style.color='blue';
basicinfo.style.display='block';
binfo.onclick=()=>{
    pricingbox.style.display='none';
    inventoryid.style.display='none';
    basicinfo.style.display='block';
    binfo.style.color='blue';
    pricingboxid.style.color='black';
    pricingbox.style.display='none';
    shippingdetails.style.display='none';
    shippingid.style.color='black';
    seoid.style.color='black';
    seo.style.display='none';
    graphid.style.color='black';
    ogs.style.display='none';
    dimensionid.style.color='black';
    weight.style.display='none';
    variationid.style.color='black';
    variation.style.display='none';
    imageid.style.color='black';
    videos.style.display='none';
    identifiersid.style.color='black';
    identifiers.style.display='none';
    descriptionid.style.color='black';
    descriptionbox.style.display='none'
}
// -------------------------------DESCRIPTION---------------------------------------------------

const descriptionid=document.getElementById('descriptionid');
const descriptionbox=document.getElementById('descriptionbox');
descriptionbox.style.display='none';
descriptionid.onclick=()=>{
    pricingbox.style.display='none';
    inventoryid.style.display='none';
    basicinfo.style.display='none';
    binfo.style.color='black';
    pricingboxid.style.color='black';
    pricingbox.style.display='none';
    shippingdetails.style.display='none';
    shippingid.style.color='black';
    seoid.style.color='black';
    seo.style.display='none';
    graphid.style.color='black';
    ogs.style.display='none';
    dimensionid.style.color='black';
    weight.style.display='none';
    variationid.style.color='black';
    variation.style.display='none';
    imageid.style.color='black';
    videos.style.display='none';
    identifiersid.style.color='black';
    identifiers.style.display='none';
    descriptionid.style.color='blue';
    descriptionbox.style.display='block';
}

// -------------------------------IMAGES & VIDEOS---------------------------------------------------

const imageid=document.getElementById('imageid');
const videos=document.getElementById('videos');
videos.style.display='none';
imageid.onclick=()=>{
    pricingbox.style.display='none';
    inventoryid.style.display='none';
    basicinfo.style.display='none';
    binfo.style.color='black';
    pricingboxid.style.color='black';
    pricingbox.style.display='none';
    shippingdetails.style.display='none';
    shippingid.style.color='black';
    seoid.style.color='black';
    seo.style.display='none';
    graphid.style.color='black';
    ogs.style.display='none';
    dimensionid.style.color='black';
    weight.style.display='none';
    variationid.style.color='black';
    variation.style.display='none';
    imageid.style.color='blue';
    videos.style.display='block';
    identifiersid.style.color='black';
    identifiers.style.display='none';
    descriptionid.style.color='black';
    descriptionbox.style.display='none';
}


// --------------------------------------------------PRODUCT IDENTIFIERS------------------------------


const identifiersid=document.getElementById('identifiersid');
const identifiers=document.getElementById("identifiers");
identifiers.style.display='none';
identifiersid.onclick=()=>{
    pricingbox.style.display='none';
    inventoryid.style.display='none';
    basicinfo.style.display='none';
    binfo.style.color='black';
    pricingboxid.style.color='black';
    pricingbox.style.display='none';
    shippingdetails.style.display='none';
    shippingid.style.color='black';
    seoid.style.color='black';
    seo.style.display='none';
    graphid.style.color='black';
    ogs.style.display='none';
    dimensionid.style.color='black';
    weight.style.display='none';
    variationid.style.color='black';
    variation.style.display='none';
    imageid.style.color='black';
    videos.style.display='none';
    identifiersid.style.color='blue';
    identifiers.style.display='block';
    descriptionid.style.color='black';
    descriptionbox.style.display='none'
}


// --------------------PRICING BOX---------------------------------------------------
const pricingboxid=document.getElementById("pricingboxid");
const pricingbox=document.getElementById("pricingbox");
pricingbox.style.display="none";
pricingboxid.onclick=()=>{
    binfo.style.color='black';
    pricingboxid.style.color='blue';
    inventory.style.color='black';
    pricingbox.style.display='block';
    inventoryid.style.display='none';
    basicinfo.style.display='none';
    shippingdetails.style.display='none';
    shippingid.style.color='black';
    seoid.style.color='black';
    seo.style.display='none';
    graphid.style.color='black';
    ogs.style.display='none';
    dimensionid.style.color='black';
    weight.style.display='none';
    variationid.style.color='black';
    variation.style.display='none';
    imageid.style.color='black';
    videos.style.display='none';
    identifiersid.style.color='black';
    identifiers.style.display='none';
    descriptionid.style.color='black';
    descriptionbox.style.display='none'
}

// --------------------INVENTORY---------------------------------------------------
const inventory=document.getElementById("inventory");
const inventoryid=document.getElementById("inventoryid");
inventoryid.style.display="none";
inventory.onclick=()=>{
   inventory.style.color='blue';
   pricingboxid.style.color='black';
   binfo.style.color='black';
   inventoryid.style.display='block'
   pricingbox.style.display='none';
   basicinfo.style.display='none';
   shippingdetails.style.display='none';
   shippingid.style.color='black';
   seoid.style.color='black';
   seo.style.display='none';
   graphid.style.color='black';
   ogs.style.display='none';
   dimensionid.style.color='black';
   weight.style.display='none';
   variationid.style.color='black';
   variation.style.display='none';
   imageid.style.color='black';
   videos.style.display='none';
   identifiersid.style.color='black';
   identifiers.style.display='none';
   descriptionid.style.color='black';
    descriptionbox.style.display='none'
}

// -----------------------------------------VARIATIONS----------------------------------------------------

const variationid=document.getElementById("variationid");
const variation=document.getElementById("variation");
variation.style.display='none';
variationid.onclick=()=>{
   inventory.style.color='black';
   pricingboxid.style.color='black';
   binfo.style.color='black';
   inventoryid.style.display='none'
   pricingbox.style.display='none';
   basicinfo.style.display='none';
   shippingdetails.style.display='none';
   shippingid.style.color='black';
   seoid.style.color='black';
   seo.style.display='none';
   graphid.style.color='black';
   ogs.style.display='none';
   dimensionid.style.color='black';
   weight.style.display='none';
   variationid.style.color='blue';
   variation.style.display='block';
   imageid.style.color='black';
   videos.style.display='none';
   identifiersid.style.color='black';
   identifiers.style.display='none';
   descriptionid.style.color='black';
    descriptionbox.style.display='none'
}


// ------------------------------------------DIMENSIONS BOX---------------------------------------------------
const dimensionid=document.getElementById("dimensionid");
const weight=document.getElementById("weight");
weight.style.display='none';
dimensionid.onclick=()=>{
    inventory.style.color='black';
    pricingboxid.style.color='black';
    binfo.style.color='black';
    inventoryid.style.display='none'
    pricingbox.style.display='none';
    basicinfo.style.display='none';
    shippingdetails.style.display='none';
    shippingid.style.color='black';
    seoid.style.color='black';
    seo.style.display='none';
    graphid.style.color='black';
    ogs.style.display='none';
    dimensionid.style.color='blue';
    weight.style.display='block';
    variationid.style.color='black';
    variation.style.display='none';
    imageid.style.color='black';
    videos.style.display='none';
    identifiersid.style.color='black';
    identifiers.style.display='none';
    descriptionid.style.color='black';
    descriptionbox.style.display='none'
}


// ------------------------------------------SHIPPING DETAILS---------------------------------------------------
const shippingid=document.getElementById('shippingid');
const shippingdetails=document.getElementById('shippingdetails');
shippingdetails.style.display='none';
shippingid.onclick=()=>{
    inventory.style.color='black';
    pricingboxid.style.color='black';
    binfo.style.color='black';
    inventoryid.style.display='none'
    pricingbox.style.display='none';
    basicinfo.style.display='none';
    shippingdetails.style.display='block';
    shippingid.style.color='blue';
    seoid.style.color='black';
    seo.style.display='none';
    graphid.style.color='black';
    ogs.style.display='none';
    dimensionid.style.color='black';
    weight.style.display='none';
    variationid.style.color='black';
    variation.style.display='none';
    imageid.style.color='black';
    videos.style.display='none';
    identifiersid.style.color='black';
    identifiers.style.display='none';
    descriptionid.style.color='black';
    descriptionbox.style.display='none'
}

// --------------------SEO---------------------------------------------------

const seoid=document.getElementById("seoid");
const seo=document.getElementById("seo");
seo.style.display='none';
seoid.onclick=()=>{
    inventory.style.color='black';
    pricingboxid.style.color='black';
    binfo.style.color='black';
    inventoryid.style.display='none'
    pricingbox.style.display='none';
    basicinfo.style.display='none';
    shippingdetails.style.display='none';
    shippingid.style.color='black';
    seoid.style.color='blue';
    seo.style.display='block';
    graphid.style.color='black';
    ogs.style.display='none';
    dimensionid.style.color='black';
    weight.style.display='none';
    variationid.style.color='black';
    variation.style.display='none';
    imageid.style.color='black';
    videos.style.display='none';
    identifiersid.style.color='black';
    identifiers.style.display='none';
    descriptionid.style.color='black';
    descriptionbox.style.display='none'
}

// ----------------------------------OPEN GRAPH SHARING -------------------------------------

const graphid=document.getElementById("graphid");
const ogs=document.getElementById("ogs");
ogs.style.display='none';
graphid.onclick=()=>{
    inventory.style.color='black';
    pricingboxid.style.color='black';
    binfo.style.color='black';
    inventoryid.style.display='none'
    pricingbox.style.display='none';
    basicinfo.style.display='none';
    shippingdetails.style.display='none';
    shippingid.style.color='black';
    seoid.style.color='black';
    seo.style.display='none';
    graphid.style.color='blue';
    ogs.style.display='block';
    dimensionid.style.color='black';
    weight.style.display='none';
    variationid.style.color='black';
    variation.style.display='none';
    imageid.style.color='black';
    videos.style.display='none';
    identifiersid.style.color='black';
    identifiers.style.display='none';
    descriptionid.style.color='black';
    descriptionbox.style.display='none'
}


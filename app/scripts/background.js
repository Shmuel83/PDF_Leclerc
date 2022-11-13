global.jsPDF = require("jspdf").default;

global.nbimageprocess = 1;
browser.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
})

flag = false;
api_url_catalog = "";
// Get url
chrome.webRequest.onBeforeRequest.addListener(
  function(data) {
    console.log(data.url);
	
	if(flag == false) {
		flag = true;
		api_url_catalog = data.url;
		return true;
	}
    return false;
  },
  {
    urls: ["https://nos-catalogues-promos-v2-api.e.leclerc/document/*/pages"]
  },
  ["requestBody"]
);
//Action when user click on button
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
	console.log(request);
    if(request == "init") {
		console.log("response:"+api_url_catalog);
      sendResponse({response:api_url_catalog});
    }
	if(request.end) {
      flag = false;
      console.log(request.end);
      generate_pdf(request.end);
    }
    if(request.timer) {
      console.log(request);
      sendResponse({timer_response:nbimageprocess});
    }
    
  }
);

async function addImageProcess(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

async function generatePdf(imageUrls) {
  const doc = new jsPDF();
  var width = doc.internal.pageSize.getWidth();
  var height = doc.internal.pageSize.getHeight();
  for (const [i, url] of imageUrls.entries()) {
    const image = await addImageProcess(url.source);
    nbimageprocess = i+1;
    console.log(url.source);
    doc.addImage(image, "JPEG", 0, 0, width, height);
    if (i !== imageUrls.length - 1) {
      doc.addPage();
    }
  }
  return doc;
}

async function generate_pdf(dataCatalog) {
  dataCatalogparse = JSON.parse(dataCatalog);
  const multiPng = await generatePdf(dataCatalogparse);
  // generate dataURLString
  //const dataURLString = multiPng.output("dataurlstring", "multiPng.pdf");
  //console.log(dataURLString);

  // save PDF (blocked in iFrame in chrome)
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  formattedToday = yyyy + '/' + mm + '/' + dd;

  multiPng.output("save", formattedToday+"_Catalogue_LECLERC.pdf");
}